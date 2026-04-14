import * as THREE from 'three';

// Manages WebGL transformations mapping to Input + game logic validation
export function setupControls(game, callbacks) {
    window.addEventListener('keydown', (e) => {
        const blockApi = game.blockApi;
        if (!blockApi) return;

        // R to restart — always allowed
        if (e.key.toLowerCase() === 'r') {
            callbacks.onReset();
            return;
        }

        // Block movement input
        if (game.isWon || blockApi.state.isAnimating || blockApi.state.isFalling) return;

        let dx = 0, dz = 0;

        switch (e.key.toLowerCase()) {
            case 'w': case 'arrowup': dz = -1; break;
            case 's': case 'arrowdown': dz = 1; break;
            case 'a': case 'arrowleft': dx = -1; break;
            case 'd': case 'arrowright': dx = 1; break;
            default: return;
        }

        if (dx !== 0 || dz !== 0) {
            e.preventDefault();
            animateRoll(game, dx, dz, callbacks);
        }
    });
}

// Returns array of {row, col} grid cells that the block currently occupies
function getOccupiedCells(blockApi) {
    const pos = blockApi.mesh.position;
    const x = pos.x;
    const z = pos.z;

    if (blockApi.state.orientation === 'standing') {
        return [{ row: Math.round(z), col: Math.round(x) }];
    } else if (blockApi.state.orientation === 'lying_x') {
        return [
            { row: Math.round(z), col: Math.round(x - 0.5) },
            { row: Math.round(z), col: Math.round(x + 0.5) }
        ];
    } else { // lying_z
        return [
            { row: Math.round(z - 0.5), col: Math.round(x) },
            { row: Math.round(z + 0.5), col: Math.round(x) }
        ];
    }
}

function animateRoll(game, dx, dz, callbacks) {
    const blockApi = game.blockApi;
    blockApi.state.isAnimating = true;
    const block = blockApi.mesh;

    const startPos = block.position.clone();
    const startRot = block.quaternion.clone();
    const targetPos = startPos.clone();

    // Calculate target position and new orientation based on current state
    if (blockApi.state.orientation === 'standing') {
        // Standing -> Lying down
        targetPos.x += dx * 1.5;
        targetPos.z += dz * 1.5;
        targetPos.y -= 0.5; // Center drops
        blockApi.state.orientation = (dx !== 0) ? 'lying_x' : 'lying_z';
    } else if (blockApi.state.orientation === 'lying_x') {
        if (dx !== 0) {
            // Lying -> Standing up along X
            targetPos.x += dx * 1.5;
            targetPos.y += 0.5; // Center rises
            blockApi.state.orientation = 'standing';
        } else {
            // Sideways roll along Z
            targetPos.z += dz * 1.0;
        }
    } else if (blockApi.state.orientation === 'lying_z') {
        if (dz !== 0) {
            // Lying -> Standing up along Z
            targetPos.z += dz * 1.5;
            targetPos.y += 0.5; // Center rises
            blockApi.state.orientation = 'standing';
        } else {
            // Sideways roll along X
            targetPos.x += dx * 1.0;
        }
    }

    // Rotation representation via Quaternions
    const axis = new THREE.Vector3(dz, 0, -dx).normalize();
    const stepRot = new THREE.Quaternion().setFromAxisAngle(axis, Math.PI / 2);
    const targetRot = startRot.clone().premultiply(stepRot);

    const duration = 200; // ms
    const startTime = performance.now();

    function step() {
        const progress = Math.min((performance.now() - startTime) / duration, 1.0);

        // Spherical linear interpolation for smooth rotation
        block.quaternion.slerpQuaternions(startRot, targetRot, progress);

        // Linear interpolation for position
        block.position.lerpVectors(startPos, targetPos, progress);

        // Simulate an arc when rolling
        const arcHeight = Math.sin(progress * Math.PI) * 0.3;
        block.position.y += arcHeight;

        if (progress >= 1.0) {
            block.position.copy(targetPos);
            block.quaternion.copy(targetRot);
            blockApi.state.isAnimating = false;

            // Post-move: increment counter and validate position
            callbacks.onMove();
            validatePosition(game, blockApi, callbacks);
        } else {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

// Check if block is on valid tiles, handle special tile types
function validatePosition(game, blockApi, callbacks) {
    const gridApi = game.gridApi;
    const cells = getOccupiedCells(blockApi);

    // Check if all occupied cells have tiles beneath them
    const allValid = cells.every(c => gridApi.getTileType(c.row, c.col) !== 0);

    if (!allValid) {
        // Block rolled off the edge
        callbacks.onFall();
        animateFall(blockApi, () => {
            setTimeout(() => {
                // Only auto-reset if user hasn't already pressed R
                if (game.blockApi === blockApi) {
                    callbacks.onReset();
                }
            }, 400);
        });
        return;
    }

    // Special tile checks (only matter when standing — occupies 1 cell)
    if (blockApi.state.orientation === 'standing') {
        const cell = cells[0];
        const type = gridApi.getTileType(cell.row, cell.col);

        if (type === 3) {
            // Fragile tile breaks under upright block
            gridApi.removeTile(cell.row, cell.col);
            blockApi.state.isAnimating = true; // lock input

            setTimeout(() => {
                if (game.blockApi !== blockApi) return;
                callbacks.onFall();
                animateFall(blockApi, () => {
                    setTimeout(() => {
                        if (game.blockApi === blockApi) {
                            callbacks.onReset();
                        }
                    }, 400);
                });
            }, 300);
            return;
        }

        if (type === 2) {
            // Standing on the goal hole — level complete!
            animateWin(blockApi, () => callbacks.onWin());
            return;
        }
    }
}

// Clean fall: block drops straight down and scales to zero
function animateFall(blockApi, onComplete) {
    blockApi.state.isFalling = true;
    const block = blockApi.mesh;
    const startPos = block.position.clone();
    const startTime = performance.now();
    const duration = 600;

    function easeInCubic(t) { return t * t * t; }

    function step() {
        const progress = Math.min((performance.now() - startTime) / duration, 1.0);
        const ease = easeInCubic(progress);

        // Straight drop with acceleration
        block.position.y = startPos.y - ease * 6;

        // Shrink to nothing
        const s = 1 - ease;
        block.scale.set(s, s, s);

        if (progress >= 1.0) {
            // Reset scale for next life
            block.scale.set(1, 1, 1);
            blockApi.state.isFalling = false;
            onComplete();
        } else {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

// Block sinks into the goal hole with a satisfying drop + squeeze
function animateWin(blockApi, onComplete) {
    blockApi.state.isAnimating = true;
    const block = blockApi.mesh;
    const startPos = block.position.clone();
    const startTime = performance.now();
    const duration = 800;

    function easeInBack(t) {
        const c = 1.70158;
        return (c + 1) * t * t * t - c * t * t;
    }

    function step() {
        const progress = Math.min((performance.now() - startTime) / duration, 1.0);

        if (progress < 0.15) {
            // Brief upward bounce before dropping
            const lift = Math.sin((progress / 0.15) * Math.PI) * 0.2;
            block.position.y = startPos.y + lift;
        } else {
            // Accelerating sink into the hole
            const dropProgress = (progress - 0.15) / 0.85;
            const ease = easeInBack(dropProgress);
            block.position.y = startPos.y - ease * 3;

            // Squeeze narrower as it drops in
            const sx = 1 - dropProgress * 0.4;
            block.scale.set(sx, 1, sx);
        }

        if (progress >= 1.0) {
            block.scale.set(1, 1, 1);
            onComplete();
        } else {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}
