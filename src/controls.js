import * as THREE from 'three';
import { sounds } from './sounds.js';
import { getOrientationQuaternion, getBlockYForOrientation } from './block.js';

// Manages input, block movement, switch/bridge logic, split mode, and undo.

export function setupControls(game, callbacks, cameraApi) {
    function processMove(dx, dz) {
        if (game.isWon) return;
        if (dx === 0 && dz === 0) return;

        // Translate movement relative to the decoupled horizontal FPP camera yaw if active
        if (cameraApi && cameraApi.mode === 'fpp') {
            const hDir = cameraApi.closestHeading; // returns { dx, dz } cardinally snapped
            const hX = hDir.dx;
            const hZ = hDir.dz;

            const origDx = dx;
            const origDz = dz;

            if (origDz === -1) { // Forward
                dx = hX;
                dz = hZ;
            } else if (origDz === 1) { // Backward
                dx = -hX;
                dz = -hZ;
            } else if (origDx === -1) { // Leftward
                dx = hZ;
                dz = -hX;
            } else if (origDx === 1) { // Rightward
                dx = -hZ;
                dz = hX;
            }
        }

        if (game.isSplit) {
            const cubeApi = game.cubes[game.activeCubeIndex];
            if (cubeApi._isAnimating) return;
            animateCubeSlide(game, cubeApi, dx, dz, callbacks);
        } else {
            const blockApi = game.blockApi;
            if (!blockApi || blockApi.state.isAnimating || blockApi.state.isFalling) return;
            saveUndoState(game);
            animateRoll(game, dx, dz, callbacks);
        }
    }

    // ── Keyboard ────────────────────────────────────────────────────────────
    window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'r') { callbacks.onReset(); return; }
        if (e.key === 'Escape') { callbacks.onEscape(); return; }
        if (e.key.toLowerCase() === 'z') { performUndo(game, callbacks); return; }
        if (e.key.toLowerCase() === 'h') { callbacks.onHint?.(); return; }
        if (e.key.toLowerCase() === 'c') { callbacks.onCameraToggle?.(); return; }

        if (e.key === ' ' && game.isSplit) {
            e.preventDefault();
            game.activeCubeIndex = game.activeCubeIndex === 0 ? 1 : 0;
            callbacks.onCubeSwitch?.();
            return;
        }

        let dx = 0, dz = 0;
        switch (e.key.toLowerCase()) {
            case 'w': case 'arrowup':    dz = -1; break;
            case 's': case 'arrowdown':  dz = 1;  break;
            case 'a': case 'arrowleft':  dx = -1; break;
            case 'd': case 'arrowright': dx = 1;  break;
            default: return;
        }
        e.preventDefault();
        processMove(dx, dz);
    });

    // ── Touch / swipe ───────────────────────────────────────────────────────
    let touchStartX = 0, touchStartY = 0, touchActive = false;
    const MIN_SWIPE = 30;

    window.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchActive = true;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (touchActive) e.preventDefault();
    }, { passive: false });

    window.addEventListener('touchend', (e) => {
        if (!touchActive) return;
        touchActive = false;
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);

        if (Math.max(absX, absY) < MIN_SWIPE) return;

        let dx = 0, dz = 0;
        if (absX > absY) {
            dx = deltaX > 0 ? 1 : -1;
        } else {
            dz = deltaY > 0 ? 1 : -1;
        }
        processMove(dx, dz);
    });
}

// ── Undo ────────────────────────────────────────────────────────────────────

function saveUndoState(game) {
    const blockApi = game.blockApi;
    if (!blockApi) return;

    game.moveHistory.push({
        blockPos: blockApi.mesh.position.clone(),
        blockQuat: blockApi.mesh.quaternion.clone(),
        orientation: blockApi.state.orientation,
        levelLayout: game.gridApi.levelLayout.map(r => [...r]),
        bridgeStates: { ...game.gridApi.bridgeStates },
        moves: game.moves,
    });
}

function performUndo(game, callbacks) {
    if (game.isSplit) return; // Can't undo in split mode
    if (game.moveHistory.length === 0) return;

    const blockApi = game.blockApi;
    if (!blockApi || blockApi.state.isAnimating || blockApi.state.isFalling) return;

    const state = game.moveHistory.pop();

    // Restore block
    blockApi.mesh.position.copy(state.blockPos);
    blockApi.mesh.quaternion.copy(state.blockQuat);
    blockApi.state.orientation = state.orientation;
    blockApi.mesh.scale.set(1, 1, 1);

    // Restore grid
    game.gridApi.restoreLayout(state.levelLayout, state.bridgeStates);

    // Restore move count
    game.moves = state.moves;
    callbacks.onMoveCountChange(game.moves);

    sounds.undo();
}

// ── Landing squash effect ───────────────────────────────────────────────────

function landingSquash(object) {
    const startTime = performance.now();
    const duration = 180;
    const savedScale = { x: object.scale.x, y: object.scale.y, z: object.scale.z };

    function step() {
        const t = Math.min((performance.now() - startTime) / duration, 1.0);
        // Elastic ease out
        const elastic = t === 1 ? 1 : -Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1;
        const sx = savedScale.x * (1 + 0.04 * (1 - elastic));
        const sy = savedScale.y * (1 - 0.06 * (1 - elastic));
        const sz = savedScale.z * (1 + 0.04 * (1 - elastic));
        object.scale.set(sx, sy, sz);

        if (t < 1.0) requestAnimationFrame(step);
        else object.scale.set(savedScale.x, savedScale.y, savedScale.z);
    }
    requestAnimationFrame(step);
}

// ── Occupied cells ──────────────────────────────────────────────────────────

function getOccupiedCells(blockApi) {
    const pos = blockApi.mesh.position;
    const x = pos.x;
    const z = pos.z;

    if (blockApi.state.orientation === 'standing') {
        return [{ row: Math.round(z), col: Math.round(x) }];
    } else if (blockApi.state.orientation === 'lying_x') {
        return [
            { row: Math.round(z), col: Math.round(x - 0.5) },
            { row: Math.round(z), col: Math.round(x + 0.5) },
        ];
    } else {
        return [
            { row: Math.round(z - 0.5), col: Math.round(x) },
            { row: Math.round(z + 0.5), col: Math.round(x) },
        ];
    }
}

// ── Block rolling animation ─────────────────────────────────────────────────

function animateRoll(game, dx, dz, callbacks) {
    const blockApi = game.blockApi;
    blockApi.state.isAnimating = true;
    const block = blockApi.mesh;

    const startPos = block.position.clone();
    const startRot = block.quaternion.clone();
    const targetPos = startPos.clone();

    if (blockApi.state.orientation === 'standing') {
        targetPos.x += dx * 1.5;
        targetPos.z += dz * 1.5;
        targetPos.y -= 0.5;
        blockApi.state.orientation = (dx !== 0) ? 'lying_x' : 'lying_z';
    } else if (blockApi.state.orientation === 'lying_x') {
        if (dx !== 0) {
            targetPos.x += dx * 1.5;
            targetPos.y += 0.5;
            blockApi.state.orientation = 'standing';
        } else {
            targetPos.z += dz * 1.0;
        }
    } else if (blockApi.state.orientation === 'lying_z') {
        if (dz !== 0) {
            targetPos.z += dz * 1.5;
            targetPos.y += 0.5;
            blockApi.state.orientation = 'standing';
        } else {
            targetPos.x += dx * 1.0;
        }
    }

    const axis = new THREE.Vector3(dz, 0, -dx).normalize();
    const stepRot = new THREE.Quaternion().setFromAxisAngle(axis, Math.PI / 2);
    const targetRot = startRot.clone().premultiply(stepRot);

    const duration = 200;
    const startTime = performance.now();

    function step() {
        const progress = Math.min((performance.now() - startTime) / duration, 1.0);
        block.quaternion.slerpQuaternions(startRot, targetRot, progress);
        block.position.lerpVectors(startPos, targetPos, progress);
        block.position.y += Math.sin(progress * Math.PI) * 0.3;

        if (progress >= 1.0) {
            block.position.copy(targetPos);
            block.quaternion.copy(targetRot);
            blockApi.state.isAnimating = false;

            // Landing squash — elastic settle for game-feel
            landingSquash(block);
            callbacks.onLanding?.(block.position.clone());

            game.moves++;
            callbacks.onMoveCountChange(game.moves);
            sounds.move();
            validatePosition(game, blockApi, callbacks);
        } else {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

// ── Post-move validation ────────────────────────────────────────────────────

function validatePosition(game, blockApi, callbacks) {
    const gridApi = game.gridApi;
    const cells = getOccupiedCells(blockApi);

    const allValid = cells.every(c => gridApi.getTileType(c.row, c.col) !== 0);

    if (!allValid) {
        sounds.fall();
        callbacks.onFall();
        // Find which cells are valid vs invalid for pivot direction
        const validCells = cells.filter(c => gridApi.getTileType(c.row, c.col) !== 0);
        const invalidCells = cells.filter(c => gridApi.getTileType(c.row, c.col) === 0);
        animateFall(blockApi, () => {
            setTimeout(() => {
                if (game.blockApi === blockApi) callbacks.onReset();
            }, 400);
        }, false, validCells, invalidCells);
        return;
    }

    // Check switches for ALL occupied cells (soft switches trigger on any contact)
    for (const cell of cells) {
        const sw = gridApi.getSwitchData(cell.row, cell.col);
        if (!sw) continue;

        if (sw.type === 'soft') {
            activateSwitch(game, sw, callbacks);
        }
    }

    // Standing-only checks
    if (blockApi.state.orientation === 'standing') {
        const cell = cells[0];
        const type = gridApi.getTileType(cell.row, cell.col);
        const sw = gridApi.getSwitchData(cell.row, cell.col);

        if (type === 3) {
            sounds.tileBreak();
            callbacks.onFragileBreak?.(blockApi.mesh.position.clone());
            gridApi.removeTile(cell.row, cell.col);
            blockApi.state.isAnimating = true;
            // Block sinks slightly during tile break, then falls
            const block = blockApi.mesh;
            const sinkStart = performance.now();
            function sink() {
                const p = Math.min((performance.now() - sinkStart) / 200, 1);
                block.position.y -= p * 0.015;
                if (p < 1) { requestAnimationFrame(sink); return; }
                if (game.blockApi !== blockApi) return;
                sounds.fall();
                callbacks.onFall();
                animateFall(blockApi, () => {
                    setTimeout(() => {
                        if (game.blockApi === blockApi) callbacks.onReset();
                    }, 400);
                }, true);
            }
            requestAnimationFrame(sink);
            return;
        }

        // Heavy switch — only when standing
        if (sw && sw.type === 'heavy') {
            activateSwitch(game, sw, callbacks);
        }

        // Teleport switch — only when standing
        if (sw && sw.type === 'teleport') {
            activateTeleport(game, sw, callbacks);
            return;
        }

        if (type === 2) {
            sounds.win();
            animateWin(blockApi, () => callbacks.onWin(), callbacks);
            return;
        }
    }
}

// ── Switch activation ───────────────────────────────────────────────────────

function activateSwitch(game, sw, callbacks) {
    if (sw._activated && sw.effect === 'permanent') return;
    sw._activated = true;

    sounds.switchActivate();

    if (sw.targets) {
        game.gridApi.toggleBridges(sw.targets);
        // Determine if bridges appeared or disappeared for sound
        setTimeout(() => sounds.bridgeAppear(), 100);
    }
}

function activateTeleport(game, sw, callbacks) {
    if (!sw.teleportTo || sw.teleportTo.length < 2) return;

    const blockApi = game.blockApi;
    blockApi.state.isAnimating = true;

    sounds.split();

    // Animate block shrinking before split
    const block = blockApi.mesh;
    const startTime = performance.now();
    const duration = 400;

    function shrink() {
        const p = Math.min((performance.now() - startTime) / duration, 1.0);
        const s = 1 - p * 0.8;
        block.scale.set(s, s, s);
        block.position.y += 0.003;

        if (p >= 1.0) {
            block.visible = false;
            block.scale.set(1, 1, 1);
            callbacks.onSplit(sw.teleportTo);
        } else {
            requestAnimationFrame(shrink);
        }
    }
    requestAnimationFrame(shrink);
}

// ── Cube movement (split mode) ──────────────────────────────────────────────

function animateCubeSlide(game, cubeApi, dx, dz, callbacks) {
    cubeApi._isAnimating = true;
    const cube = cubeApi.mesh;
    const startPos = cube.position.clone();
    const targetPos = startPos.clone();
    targetPos.x += dx;
    targetPos.z += dz;

    // Check if target is valid
    const targetRow = Math.round(targetPos.z);
    const targetCol = Math.round(targetPos.x);
    if (game.gridApi.getTileType(targetRow, targetCol) === 0) {
        cubeApi._isAnimating = false;
        return; // Can't move there
    }

    // Check if target is occupied by the other cube
    const otherIdx = game.activeCubeIndex === 0 ? 1 : 0;
    const other = game.cubes[otherIdx];
    const otherRow = Math.round(other.mesh.position.z);
    const otherCol = Math.round(other.mesh.position.x);
    if (targetRow === otherRow && targetCol === otherCol) {
        cubeApi._isAnimating = false;
        return; // Can't overlap
    }

    const duration = 150;
    const startTime = performance.now();

    function step() {
        const p = Math.min((performance.now() - startTime) / duration, 1.0);
        cube.position.lerpVectors(startPos, targetPos, p);
        cube.position.y = 0.425 + Math.sin(p * Math.PI) * 0.1;

        if (p >= 1.0) {
            cube.position.copy(targetPos);
            cube.position.y = 0.425;
            cubeApi._isAnimating = false;
            landingSquash(cube);

            game.moves++;
            callbacks.onMoveCountChange(game.moves);
            sounds.move();

            // Check soft switches under cube
            const sw = game.gridApi.getSwitchData(targetRow, targetCol);
            if (sw && sw.type === 'soft') {
                activateSwitch(game, sw, callbacks);
            }

            // Check for merge — are the two cubes adjacent?
            checkMerge(game, callbacks);
        } else {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

function checkMerge(game, callbacks) {
    const c0 = game.cubes[0];
    const c1 = game.cubes[1];
    const r0 = Math.round(c0.mesh.position.z);
    const c0c = Math.round(c0.mesh.position.x);
    const r1 = Math.round(c1.mesh.position.z);
    const c1c = Math.round(c1.mesh.position.x);

    const dr = Math.abs(r0 - r1);
    const dc = Math.abs(c0c - c1c);

    if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
        // Adjacent — merge!
        sounds.merge();
        callbacks.onMerge(r0, c0c, r1, c1c);
    }
}

// ── Fall animation — physics-based tip off edge ─────────────────────────────

function animateFall(blockApi, onComplete, throughHole = false, validCells = [], invalidCells = []) {
    blockApi.state.isFalling = true;
    const block = blockApi.mesh;
    const startPos = block.position.clone();
    const startQuat = block.quaternion.clone();
    const startTime = performance.now();
    const orientation = blockApi.state.orientation;

    // Determine if block is lying with one half hanging off (needs pivot)
    const needsPivot = !throughHole && orientation !== 'standing'
        && validCells.length > 0 && invalidCells.length > 0;

    if (needsPivot) {
        // Pivot around the edge between valid and invalid cell
        const valid = validCells[0];
        const invalid = invalidCells[0];

        // Direction from valid cell toward invalid cell (the tipping direction)
        const dirX = invalid.col - valid.col;  // +1, -1, or 0
        const dirZ = invalid.row - valid.row;

        // Pivot edge is at the boundary between valid and invalid cells
        const pivotX = valid.col + dirX * 0.5;
        const pivotZ = valid.row + dirZ * 0.5;
        const pivotY = 0; // tile surface

        // Rotation axis is perpendicular to the tip direction (cross with Y-up)
        // If tipping in +X, rotate around Z axis (negative for correct direction)
        // If tipping in +Z, rotate around X axis (positive for correct direction)
        const rotAxis = new THREE.Vector3(dirZ, 0, -dirX).normalize();

        const tipDuration = 500;   // pivot phase
        const fallDuration = 600;  // free-fall after tipping
        const totalDuration = tipDuration + fallDuration;
        const tipAngle = Math.PI / 2; // 90 degrees tip

        function step() {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / totalDuration, 1.0);

            if (elapsed < tipDuration) {
                // Phase 1: Pivot/tip around the edge — accelerating
                const p = elapsed / tipDuration;
                const ease = p * p; // accelerating rotation
                const angle = ease * tipAngle;

                // Rotate block around the pivot point
                block.position.copy(startPos);
                block.quaternion.copy(startQuat);

                // Translate to pivot, rotate, translate back
                block.position.sub(new THREE.Vector3(pivotX, pivotY, pivotZ));
                const q = new THREE.Quaternion().setFromAxisAngle(rotAxis, angle);
                block.position.applyQuaternion(q);
                block.position.add(new THREE.Vector3(pivotX, pivotY, pivotZ));
                block.quaternion.premultiply(q);

            } else {
                // Phase 2: Free-fall with continued rotation
                const fallP = (elapsed - tipDuration) / fallDuration;
                const fallEase = fallP * fallP;

                // Continue from where tip ended
                block.position.copy(startPos);
                block.quaternion.copy(startQuat);
                block.position.sub(new THREE.Vector3(pivotX, pivotY, pivotZ));
                const q = new THREE.Quaternion().setFromAxisAngle(rotAxis, tipAngle + fallP * Math.PI);
                block.position.applyQuaternion(q);
                block.position.add(new THREE.Vector3(pivotX, pivotY, pivotZ));
                block.quaternion.premultiply(q);

                // Accelerating drop on top of the rotation
                block.position.y -= fallEase * 14;

                // Shrink
                if (fallP > 0.3) {
                    const s = 1 - ((fallP - 0.3) / 0.7) * 0.7;
                    block.scale.set(s, s, s);
                }

                // Fade
                if (fallP > 0.4) {
                    block.material.transparent = true;
                    block.material.opacity = 1 - (fallP - 0.4) / 0.6;
                }
            }

            if (progress >= 1.0) {
                block.scale.set(1, 1, 1);
                block.material.transparent = false;
                block.material.opacity = 1;
                block.quaternion.identity();
                blockApi.state.isFalling = false;
                onComplete();
            } else {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);

    } else {
        // Simple straight drop (standing fall, through-hole, or fully off-grid)
        const duration = throughHole ? 800 : 1000;
        const tumbleAxis = new THREE.Vector3(
            (Math.random() - 0.5), 0.2, (Math.random() - 0.5)
        ).normalize();

        function step() {
            const progress = Math.min((performance.now() - startTime) / duration, 1.0);
            const ease = progress * progress;

            block.position.y = startPos.y - ease * 18;

            // Tumble for edge falls (not through-hole)
            if (!throughHole && progress > 0.15) {
                const tumbleP = (progress - 0.15) / 0.85;
                const angle = tumbleP * tumbleP * Math.PI * 2;
                const q = new THREE.Quaternion().setFromAxisAngle(tumbleAxis, angle);
                block.quaternion.copy(startQuat).premultiply(q);
            }

            if (progress > 0.5) {
                const s = 1 - ((progress - 0.5) / 0.5) * 0.7;
                block.scale.set(s, s, s);
            }

            if (progress > 0.7) {
                block.material.transparent = true;
                block.material.opacity = 1 - (progress - 0.7) / 0.3;
            }

            if (progress >= 1.0) {
                block.scale.set(1, 1, 1);
                block.material.transparent = false;
                block.material.opacity = 1;
                block.quaternion.identity();
                blockApi.state.isFalling = false;
                onComplete();
            } else {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
    }
}

// ── Win animation — satisfying sink into the goal ──────────────────────────

function animateWin(blockApi, onComplete, callbacks) {
    blockApi.state.isAnimating = true;
    callbacks?.onWinEffect?.(blockApi.mesh.position.clone());
    const block = blockApi.mesh;
    const startPos = block.position.clone();
    const startTime = performance.now();

    // Phase 1: Celebratory bounce up (300ms)
    // Phase 2: Pause at top with glow (200ms)
    // Phase 3: Satisfying sink into the hole (500ms)
    const totalDuration = 1000;

    const origEmissive = block.material.emissive ? block.material.emissive.clone() : new THREE.Color(0x000000);

    function step() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / totalDuration, 1.0);

        if (elapsed < 300) {
            // Phase 1: Bounce up with squash-stretch
            const p = elapsed / 300;
            const bounce = 1 - Math.pow(1 - p, 3);
            block.position.y = startPos.y + bounce * 1.8;

            const stretchY = 1 + bounce * 0.15;
            const squashXZ = 1 - bounce * 0.05;
            block.scale.set(squashXZ, stretchY, squashXZ);

            block.rotation.y = p * Math.PI * 0.5;

        } else if (elapsed < 500) {
            // Phase 2: Float at top, gentle pulse
            const p = (elapsed - 300) / 200;
            const hover = Math.sin(p * Math.PI) * 0.1;
            block.position.y = startPos.y + 1.8 + hover;
            block.scale.set(1, 1, 1);
            block.rotation.y = Math.PI * 0.5 + p * Math.PI * 0.1;

            if (block.material.emissive) {
                block.material.emissive.setHex(0xE84060);
                block.material.emissiveIntensity = 0.3 * Math.sin(p * Math.PI);
            }

        } else {
            // Phase 3: Sink into the hole with accelerating speed
            const p = (elapsed - 500) / 500;
            const easeIn = p * p * p;
            block.position.y = startPos.y + 1.8 - easeIn * 5;
            block.rotation.y = Math.PI * 0.6 + p * Math.PI * 0.4;

            const squash = 1 - easeIn * 0.4;
            block.scale.set(squash, 1, squash);

            if (block.material.emissive) {
                block.material.emissiveIntensity = 0.3 * (1 - p);
            }
        }

        if (progress >= 1.0) {
            block.scale.set(1, 1, 1);
            block.material.emissive?.copy(origEmissive);
            block.material.emissiveIntensity = 0;
            onComplete();
        } else {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}
