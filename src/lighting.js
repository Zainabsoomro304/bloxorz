import * as THREE from 'three';

// Demonstrates logical illumination model
export function setupLighting(scene) {
    // Ambient light: global base illumination (simulates indirect bouncing)
    // Prevents shadows from being completely dark
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Directional light: parallel rays acting like a distant sun
    // Provides directional shading and depth/shadows
    const dirLight = new THREE.DirectionalLight(0xffcf99, 1.2);
    dirLight.position.set(-15, 25, -15);
    dirLight.castShadow = true;
    
    // Configure shadow map properties for higher quality
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.left = -20;
    dirLight.shadow.camera.right = 20;
    dirLight.shadow.camera.top = 20;
    dirLight.shadow.camera.bottom = -20;
    
    scene.add(dirLight);
}
