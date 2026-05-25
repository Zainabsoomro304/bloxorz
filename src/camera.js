import * as THREE from 'three';

// Perspective camera with smooth TPP and stable decoupled mouse-look FPP modes.
export function createCamera() {
    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // Explicitly enforce world up direction to maintain stable horizon
    camera.up.set(0, 1, 0);

    const offset = new THREE.Vector3(-7, 11, 7);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    let mode = 'tpp';
    let isStable = false;

    // FPP Mouse-Look state (angles in radians)
    let yaw = 0;        // 0 faces North (-Z)
    let pitch = -0.5;   // starts looking slightly down (~ -28 deg)

    const currentLookAt = new THREE.Vector3();

    function handleMouseMove(e) {
        if (mode !== 'fpp') return;
        yaw -= e.movementX * 0.002;
        pitch -= e.movementY * 0.002;

        // Clamp pitch to prevent flipping upside down (~ -85 deg to +85 deg)
        const maxPitch = Math.PI / 2.15;
        pitch = Math.max(-maxPitch, Math.min(maxPitch, pitch));
    }

    function resetHeading() {
        yaw = 0;
        pitch = -0.5;
        currentLookAt.set(0, 0, 0); // trigger re-initialization
    }

    function update(targetPosition, lerpSpeed = 0.05, orientation = 'standing', isSplit = false) {
        let targetCamPos;
        let targetLookAt;

        if (mode === 'tpp') {
            targetCamPos = targetPosition.clone().add(offset);
            targetLookAt = targetPosition.clone();
        } else {
            // Stable FPP eye position: ignore Y-bobbing/rolling animations
            const stableY = isSplit ? 0.41 : (orientation === 'standing' ? 1.0 : 0.5);
            const heightOffset = isSplit ? 0.49 : (orientation === 'standing' ? 1.1 : 0.6);
            const eyeY = stableY + heightOffset;

            // Generate FPP forward look vector from spherical coordinates
            const lookDir = new THREE.Vector3(
                Math.sin(yaw) * Math.cos(pitch),
                Math.sin(pitch),
                -Math.cos(yaw) * Math.cos(pitch)
            ).normalize();

            // Pushed slightly forward along horizontal look vector to prevent block geometry clipping
            const horizontalLook = new THREE.Vector3(Math.sin(yaw), 0, -Math.cos(yaw)).normalize();
            targetCamPos = new THREE.Vector3(targetPosition.x, eyeY, targetPosition.z)
                .add(horizontalLook.multiplyScalar(0.4));

            targetLookAt = targetCamPos.clone().add(lookDir);
        }

        camera.position.lerp(targetCamPos, lerpSpeed);

        // Smoothly lerp our actual look-at point
        if (currentLookAt.lengthSq() === 0) {
            currentLookAt.copy(targetLookAt);
        } else {
            currentLookAt.lerp(targetLookAt, lerpSpeed);
        }

        camera.lookAt(currentLookAt);

        // Snap when close enough so path tracing can converge
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
        resetHeading,
        handleMouseMove,
        get mode() { return mode; },
        set mode(val) { mode = val; },
        get yaw() { return yaw; },
        set yaw(val) { yaw = val; },
        get pitch() { return pitch; },
        set pitch(val) { pitch = val; },
        get isStable() { return isStable; },
        
        // Expose closest horizontal cardinal grid heading
        get closestHeading() {
            const camForward = new THREE.Vector3(Math.sin(yaw), 0, -Math.cos(yaw)).normalize();
            const cardinals = [
                { dx: 0, dz: -1 }, // North
                { dx: 1, dz: 0 },  // East
                { dx: 0, dz: 1 },  // South
                { dx: -1, dz: 0 }  // West
            ];
            let bestDot = -Infinity;
            let closest = cardinals[0];
            for (const c of cardinals) {
                const dot = camForward.x * c.dx + camForward.z * c.dz;
                if (dot > bestDot) {
                    bestDot = dot;
                    closest = c;
                }
            }
            return closest;
        }
    };
}
