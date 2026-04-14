import { createScene } from './scene.js';
import { createCamera } from './camera.js';
import { setupLighting } from './lighting.js';
import { createGrid } from './grid.js';
import { createBlock } from './block.js';
import { setupControls } from './controls.js';
import * as THREE from 'three';

const container = document.getElementById('canvas-container');
const moveCounterEl = document.getElementById('move-counter');
const statusOverlay = document.getElementById('status-overlay');
const statusTitle = document.getElementById('status-title');
const statusSubtitle = document.getElementById('status-subtitle');
const statusHint = document.getElementById('status-hint');

// 1. Scene Setup
const { scene, renderer } = createScene(container);

// 2. Camera System
const { camera, update: updateCamera } = createCamera();

// 3. Lighting
setupLighting(scene);

// Game state — referenced by controls
const game = {
    blockApi: null,
    gridApi: null,
    moves: 0,
    isWon: false,
};

// --- Level lifecycle ---

function resetLevel() {
    // Remove old objects from scene
    if (game.gridApi) scene.remove(game.gridApi.gridGroup);
    if (game.blockApi) scene.remove(game.blockApi.mesh);

    // Create fresh grid and block
    game.gridApi = createGrid(scene);
    game.blockApi = createBlock(scene, game.gridApi.startCol, game.gridApi.startRow);
    game.moves = 0;
    game.isWon = false;

    // Reset UI
    document.getElementById('move-number').textContent = '0';
    statusOverlay.classList.remove('visible');
}

function onMove() {
    game.moves++;
    document.getElementById('move-number').textContent = game.moves;
}

function onFall() {
    statusTitle.textContent = 'FELL OFF';
    statusTitle.className = 'fall';
    statusSubtitle.textContent = '';
    statusHint.textContent = 'Press R to restart';
    statusOverlay.classList.add('visible');
}

function onWin() {
    game.isWon = true;
    statusTitle.textContent = 'COMPLETE';
    statusTitle.className = 'win';
    statusSubtitle.textContent = `${game.moves} moves`;
    statusHint.textContent = 'Press R to play again';
    statusOverlay.classList.add('visible');
}

function onReset() {
    resetLevel();
}

// --- Floating particles ---
const PARTICLE_COUNT = 200;
const particlesGeo = new THREE.BufferGeometry();
const positions = new Float32Array(PARTICLE_COUNT * 3);
const velocities = new Float32Array(PARTICLE_COUNT * 3);

for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 30;     // x
    positions[i * 3 + 1] = Math.random() * 15 - 2;         // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;     // z
    velocities[i * 3]     = (Math.random() - 0.5) * 0.003;
    velocities[i * 3 + 1] = Math.random() * 0.005 + 0.002;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
}

particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
    sizeAttenuation: true,
});

const particles = new THREE.Points(particlesGeo, particlesMat);
scene.add(particles);

function updateParticles() {
    const pos = particlesGeo.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        pos[i * 3]     += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];

        // Reset particle when it drifts too high
        if (pos[i * 3 + 1] > 14) {
            pos[i * 3]     = (Math.random() - 0.5) * 30;
            pos[i * 3 + 1] = -2;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
    }
    particlesGeo.attributes.position.needsUpdate = true;
}

// Initialize first level
resetLevel();

// 6. Controls (set up once — reads game state by reference)
setupControls(game, { onMove, onFall, onWin, onReset });

// 7. Animation Loop (Graphics Pipeline render cycle)
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    if (game.blockApi) {
        // Update block shader properties
        game.blockApi.update(time);

        // TPP Camera tracks the block — freeze during fall
        if (!game.blockApi.state.isFalling) {
            updateCamera(game.blockApi.mesh.position);
        }
    }

    // Pulse the goal tile emissive for visual guidance
    if (game.gridApi && game.gridApi.goalTile) {
        const pulse = Math.sin(time * 3) * 0.5 + 0.5;
        game.gridApi.goalTile.material.emissiveIntensity = 0.2 + pulse * 0.4;
    }

    // Update floating particles
    updateParticles();

    // Call Render (Executing transformation, clipping, rasterization, and fragment pipelines)
    renderer.render(scene, camera);
}

// Start loop
animate();
