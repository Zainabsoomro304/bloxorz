import * as THREE from 'three';

// Represents the "View" and "Projection" parts of the graphics pipeline
export function createCamera() {
    // Perspective projection setup: fov, aspect ratio, near clip, far clip
    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    
    // TPP Setup: Closer camera for better visibility
    const offset = new THREE.Vector3(-7, 11, 7);
    
    // Keep camera updated on window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix(); // mandatory after changing aspect
    });

    // Update function to implement smooth following
    function update(targetPosition) {
        // Target camera position is block position + offset
        const targetCamPos = targetPosition.clone().add(offset);
        
        // Smoothly interpolate (lerp) from current position to target for smooth TPP
        camera.position.lerp(targetCamPos, 0.05); // Play with weight for smoothness
        
        // Always orient the camera to look at the block
        camera.lookAt(targetPosition);
    }

    return { camera, update, offset };
}
