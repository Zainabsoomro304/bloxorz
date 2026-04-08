import { createScene } from './scene.js';
import { createCamera } from './camera.js';
import { setupLighting } from './lighting.js';
import { createGrid } from './grid.js';
import { createBlock } from './block.js';
import { setupControls } from './controls.js';
import * as THREE from 'three';

const container = document.getElementById('canvas-container');

// 1. Scene Setup
const { scene, renderer } = createScene(container);

// 2. Camera System
const { camera, update: updateCamera } = createCamera();

// 3. Lighting
setupLighting(scene);

// 4. Grid System
const { gridGroup } = createGrid(scene);

// 5. Player Block
const blockApi = createBlock(scene);

// 6. Basic Controls & Movement
setupControls(blockApi);

// 7. Animation Loop (Graphics Pipeline render cycle)
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const time = clock.getElapsedTime();

    // Update block shader properties
    blockApi.update(time);

    // TPP Camera tracks the block position dynamically
    updateCamera(blockApi.mesh.position);

    // Call Render (Executing transformation, clipping, rasterization, and fragment pipelines)
    renderer.render(scene, camera);
}

// Start loop
animate();
