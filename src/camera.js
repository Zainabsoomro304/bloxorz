import * as THREE from 'three';

// Third-person follow camera with smooth motion and stable framing.
export function createCamera() {
    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.up.set(0, 1, 0);

    const offset = new THREE.Vector3(-7, 11, 7);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    let isStable = false;

    const currentLookAt = new THREE.Vector3();

    function reset() {
        currentLookAt.set(0, 0, 0);
        isStable = false;
    }

    function update(targetPosition, lerpSpeed = 0.05, orientation = 'standing', isSplit = false) {
        const targetLookAt = new THREE.Vector3(
            targetPosition.x,
            isSplit ? 0.45 : (orientation === 'standing' ? 0.9 : 0.55),
            targetPosition.z
        );

        const targetCamPos = targetLookAt.clone().add(offset);
        if (isSplit) {
            targetCamPos.y -= 1.2;
        } else if (orientation === 'lying_x' || orientation === 'lying_z') {
            targetCamPos.y -= 0.4;
        }

        camera.position.lerp(targetCamPos, lerpSpeed);

        if (currentLookAt.lengthSq() === 0) {
            currentLookAt.copy(targetLookAt);
        } else {
            currentLookAt.lerp(targetLookAt, lerpSpeed);
        }

        camera.lookAt(currentLookAt);

        const distToTarget = camera.position.distanceTo(targetCamPos);
        const lookDist = currentLookAt.distanceTo(targetLookAt);

        if (distToTarget < 0.002 && lookDist < 0.002) {
            camera.position.copy(targetCamPos);
            currentLookAt.copy(targetLookAt);
            isStable = true;
        } else {
            isStable = false;
        }
    }

    return {
        camera,
        update,
        offset,
        reset,
        get isStable() { return isStable; },
    };
}
