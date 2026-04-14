import * as THREE from 'three';

// Demonstrates logical illumination model
export function setupLighting(scene) {
    // Ambient light: strong base so nothing is pitch black
    const ambientLight = new THREE.AmbientLight(0xe8edf5, 0.8);
    scene.add(ambientLight);

    // Directional light: main sun, warm tone
    const dirLight = new THREE.DirectionalLight(0xfff5e6, 1.4);
    dirLight.position.set(-10, 20, -10);
    dirLight.castShadow = true;

    // Configure shadow map properties for higher quality
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.left = -20;
    dirLight.shadow.camera.right = 20;
    dirLight.shadow.camera.top = 20;
    dirLight.shadow.camera.bottom = -20;

    scene.add(dirLight);

    // Fill light from opposite side for depth and rim highlights
    const fillLight = new THREE.DirectionalLight(0xb0c4de, 0.6);
    fillLight.position.set(12, 8, 12);
    scene.add(fillLight);

    // Bottom fill to lighten undersides of tiles
    const bottomFill = new THREE.DirectionalLight(0x94a3b8, 0.3);
    bottomFill.position.set(0, -5, 0);
    scene.add(bottomFill);
}
