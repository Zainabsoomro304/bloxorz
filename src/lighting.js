import * as THREE from 'three';

// Light offset from the target (determines shadow direction)
const SUN_OFFSET = new THREE.Vector3(5, 10, 4);

let _sun, _fill;

export function setupLighting(scene) {
    // Ambient
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    // Hemisphere — cool lavender above, warm pink below
    const hemi = new THREE.HemisphereLight(0xB8C8E8, 0xE8C0D0, 0.4);
    scene.add(hemi);

    // Main sun — slightly warm white
    _sun = new THREE.DirectionalLight(0xFFF8F0, 1.6);
    _sun.position.copy(SUN_OFFSET);
    _sun.castShadow = true;
    _sun.shadow.mapSize.width = 2048;
    _sun.shadow.mapSize.height = 2048;
    _sun.shadow.camera.left = -15;
    _sun.shadow.camera.right = 15;
    _sun.shadow.camera.top = 15;
    _sun.shadow.camera.bottom = -15;
    _sun.shadow.bias = -0.0002;
    _sun.shadow.normalBias = 0.02;
    scene.add(_sun);
    scene.add(_sun.target);

    // Subtle fill from opposite side
    _fill = new THREE.DirectionalLight(0xC0C8E0, 0.25);
    _fill.position.set(-5, 4, -4);
    scene.add(_fill);
}

/** Move the sun so shadows stay centered on the block */
export function updateLighting(blockPos) {
    if (!_sun) return;
    _sun.target.position.set(blockPos.x, 0, blockPos.z);
    _sun.position.set(
        blockPos.x + SUN_OFFSET.x,
        SUN_OFFSET.y,
        blockPos.z + SUN_OFFSET.z
    );
}
