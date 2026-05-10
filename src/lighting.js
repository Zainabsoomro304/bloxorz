import * as THREE from 'three';

export function setupLighting(scene) {
    // Ambient
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    // Hemisphere — cool lavender above, warm pink below
    const hemi = new THREE.HemisphereLight(0xB8C8E8, 0xE8C0D0, 0.4);
    scene.add(hemi);

    // Main sun — slightly warm white
    const sun = new THREE.DirectionalLight(0xFFF8F0, 1.6);
    sun.position.set(5, 10, 4);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.left = -20;
    sun.shadow.camera.right = 20;
    sun.shadow.camera.top = 20;
    sun.shadow.camera.bottom = -20;
    sun.shadow.bias = -0.0002;
    sun.shadow.normalBias = 0.02;
    scene.add(sun);

    // Subtle fill from opposite side
    const fill = new THREE.DirectionalLight(0xC0C8E0, 0.25);
    fill.position.set(-5, 4, -4);
    scene.add(fill);
}
