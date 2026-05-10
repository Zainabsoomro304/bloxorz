import * as THREE from 'three';

// Perspective camera with smooth third-person following.
// Works for both normal block and split-mode cubes — the caller just passes
// whichever position should be tracked.

export function createCamera() {
    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    const offset = new THREE.Vector3(-7, 11, 7);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    let isStable = false;

    function update(targetPosition, lerpSpeed = 0.05) {
        const targetCamPos = targetPosition.clone().add(offset);
        camera.position.lerp(targetCamPos, lerpSpeed);

        // Snap when close enough so path tracing can converge
        if (camera.position.distanceTo(targetCamPos) < 0.002) {
            camera.position.copy(targetCamPos);
            isStable = true;
        } else {
            isStable = false;
        }

        camera.lookAt(targetPosition);
    }

    return { camera, update, offset, get isStable() { return isStable; } };
}
