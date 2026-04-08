import * as THREE from 'three';

// Sets up the basic scene (graphics pipeline: scene graph root)
export function createScene(container) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222233);

    // Setup WebGL renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true; // enable shadow maps for depth cues
    
    // Attach to HTML DOM
    container.appendChild(renderer.domElement);

    // Coordinate Axes helper (X=Red, Y=Green, Z=Blue)
    // Helps with understanding transformations in 3D coordinate system
    const axesHelper = new THREE.AxesHelper(10);
    scene.add(axesHelper);

    // Handle window resize dynamically
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Note: Camera aspect ratio needs to be updated by the camera script
    });

    return { scene, renderer };
}
