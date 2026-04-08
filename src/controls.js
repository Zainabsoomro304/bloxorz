import * as THREE from 'three';

// Manages WebGL transformations mapping to Input
export function setupControls(blockApi) {
    window.addEventListener('keydown', (e) => {
        if (blockApi.state.isAnimating) return; // Prevent overlapping inputs
        
        let dx = 0;
        let dz = 0;

        switch(e.key.toLowerCase()) {
            case 'w':
            case 'arrowup':
                dz = -1;
                break;
            case 's':
            case 'arrowdown':
                dz = 1;
                break;
            case 'a':
            case 'arrowleft':
                dx = -1;
                break;
            case 'd':
            case 'arrowright':
                dx = 1;
                break;
            default:
                return;
        }

        if (dx !== 0 || dz !== 0) {
            animateRoll(blockApi, dx, dz);
        }
    });
}

function animateRoll(blockApi, dx, dz) {
    blockApi.state.isAnimating = true;
    const block = blockApi.mesh;

    const startPos = block.position.clone();
    const startRot = block.quaternion.clone();
    const targetPos = startPos.clone();

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

    let progress = 0;
    const duration = 250; // ms
    const startTime = performance.now();

    function step() {
        const time = performance.now();
        progress = Math.min((time - startTime) / duration, 1.0);

        // Spherical linear interpolation for smooth rotation
        block.quaternion.slerpQuaternions(startRot, targetRot, progress);
        
        // Linear interpolation for position
        block.position.lerpVectors(startPos, targetPos, progress);
        
        // Simulate an arc when rolling
        const arcHeight = Math.sin(progress * Math.PI) * 0.4;
        block.position.y += arcHeight; 

        if (progress >= 1.0) {
            block.position.copy(targetPos);
            block.quaternion.copy(targetRot);
            blockApi.state.isAnimating = false;
        } else {
            requestAnimationFrame(step);
        }
    }
    
    // Start animation loop for this move action
    requestAnimationFrame(step);
}
