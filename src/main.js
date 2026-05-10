import { createScene } from './scene.js';
import { createCamera } from './camera.js';
import { setupLighting } from './lighting.js';
import { createGrid } from './grid.js';
import { createBlock, createCube, getOrientationQuaternion, getBlockYForOrientation } from './block.js';
import { setupControls } from './controls.js';
import { LEVELS } from './levels.js';
import { sounds } from './sounds.js';
import * as THREE from 'three';

// drei-vanilla
import { Sparkles } from '@pmndrs/vanilla';

// Path tracing
import { WebGLPathTracer } from 'three-gpu-pathtracer';

// Post-processing (pmndrs/postprocessing — better than Three.js built-in)
import {
    EffectComposer,
    RenderPass,
    EffectPass,
    BloomEffect,
    VignetteEffect,
    SMAAEffect,
    SMAAPreset,
    KernelSize,
} from 'postprocessing';


// ── DOM ─────────────────────────────────────────────────────────────────────

const container       = document.getElementById('canvas-container');
const statusOverlay   = document.getElementById('status-overlay');
const statusTitle     = document.getElementById('status-title');
const statusSubtitle  = document.getElementById('status-subtitle');
const statusHint      = document.getElementById('status-hint');
const moveNumberEl    = document.getElementById('move-number');
const levelNameEl     = document.getElementById('level-name');
const levelSelectEl   = document.getElementById('level-select');
const gameUiEl        = document.getElementById('game-ui');
const splitHintEl     = document.getElementById('split-hint');

// ── Scene, Camera, Lighting ─────────────────────────────────────────────────

const { scene, renderer } = createScene(container);
const cameraApi = createCamera();
const { camera, update: updateCamera } = cameraApi;
setupLighting(scene);

// ── Sparkles (floating light motes near the level) ────────────────────────

const sparkles = new Sparkles({
    count: 150,
    speed: 0.4,
    opacity: 0.6,
    color: new THREE.Color('#ffe8b0'),
    size: 1.5,
    scale: [20, 12, 20],
    noise: [0.5, 0.3, 0.5],
});
sparkles.setPixelRatio(renderer.getPixelRatio());
sparkles.position.set(3, 3, 1);
scene.add(sparkles);

// ── Contact shadow plane ──────────────────────────────────────────────────

const shadowPlaneGeo = new THREE.PlaneGeometry(60, 60);
const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.35 });
const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
shadowPlane.rotation.x = -Math.PI / 2;
shadowPlane.position.y = -0.21;
shadowPlane.receiveShadow = true;
scene.add(shadowPlane);

// ── Post-processing ───────────────────────────────────────────────────────

const composer = new EffectComposer(renderer, {
    multisampling: Math.min(4, renderer.capabilities.maxSamples),
});

composer.addPass(new RenderPass(scene, camera));

const smaa = new SMAAEffect({ preset: SMAAPreset.HIGH });

const bloom = new BloomEffect({
    luminanceThreshold: 0.82,
    luminanceSmoothing: 0.2,
    intensity: 0.2,
    kernelSize: KernelSize.MEDIUM,
    mipmapBlur: true,
});

const vignette = new VignetteEffect({
    offset: 0.3,
    darkness: 0.35,
});

const effectPass = new EffectPass(camera, smaa, bloom, vignette);
composer.addPass(effectPass);

// ── Path Tracing (hybrid: rasterized during play, path-traced when idle) ──

const pathTracer = new WebGLPathTracer(renderer);
pathTracer.bounces = 4;
pathTracer.renderScale = 1;
pathTracer.rasterizeScene = true;
pathTracer.fadeDuration = 600;
pathTracer.minSamples = 3;
pathTracer.renderDelay = 200;
pathTracer.filterGlossyFactor = 0.5;
pathTracer.tiles.set(2, 2);

// Use EffectComposer (bloom + vignette + SMAA) for the rasterized fallback
pathTracer.rasterizeSceneCallback = () => {
    composer.render();
};

let ptNeedsUpdate = true;

function rebuildPathTracerScene() {
    // Hide shadow plane during BVH build — path tracing has natural shadows
    shadowPlane.visible = false;
    camera.updateMatrixWorld();
    pathTracer.setScene(scene, camera);
    shadowPlane.visible = true;
    ptNeedsUpdate = false;
}

window.addEventListener('resize', () => {
    composer.setSize(window.innerWidth, window.innerHeight);
});

// ── Game state ──────────────────────────────────────────────────────────────

const game = {
    blockApi: null,
    gridApi: null,
    moves: 0,
    isWon: false,
    isTransitioning: false,
    currentLevel: 0,
    moveHistory: [],

    // Split mode
    isSplit: false,
    cubes: null,        // [cubeApi0, cubeApi1]
    activeCubeIndex: 0,
};

// ── Progress (localStorage) ─────────────────────────────────────────────────

function loadProgress() {
    try {
        return JSON.parse(localStorage.getItem('bloxorz-progress') || '{}');
    } catch { return {}; }
}

function saveProgress(levelId) {
    const prog = loadProgress();
    if (!prog.completed) prog.completed = [];
    if (!prog.completed.includes(levelId)) prog.completed.push(levelId);
    if (!prog.best) prog.best = {};
    const best = prog.best[levelId];
    if (!best || game.moves < best) prog.best[levelId] = game.moves;
    localStorage.setItem('bloxorz-progress', JSON.stringify(prog));
}

function isLevelUnlocked(index) {
    if (index === 0) return true;
    const prog = loadProgress();
    const prevId = LEVELS[index - 1].id;
    return prog.completed && prog.completed.includes(prevId);
}

// ── Level Select ────────────────────────────────────────────────────────────

function showLevelSelect() {
    levelSelectEl.classList.add('visible');
    gameUiEl.style.display = 'none';
    statusOverlay.classList.remove('visible');

    // Clean up game objects
    if (game.gridApi) { scene.remove(game.gridApi.gridGroup); game.gridApi = null; }
    if (game.blockApi) { scene.remove(game.blockApi.mesh); game.blockApi = null; }
    cleanupSplit();

    const prog = loadProgress();
    const grid = levelSelectEl.querySelector('.level-grid');
    grid.innerHTML = '';

    LEVELS.forEach((level, idx) => {
        const btn = document.createElement('button');
        btn.className = 'level-btn';

        const unlocked = isLevelUnlocked(idx);
        const completed = prog.completed && prog.completed.includes(level.id);
        const best = prog.best && prog.best[level.id];

        if (!unlocked) btn.classList.add('locked');
        if (completed) btn.classList.add('completed');

        btn.innerHTML = `
            <span class="level-num">${level.id}</span>
            <span class="level-title">${level.name}</span>
            ${completed ? `<span class="level-best">${best || '?'}/${level.par}</span>` : ''}
            ${!unlocked ? '<span class="level-lock">&#128274;</span>' : ''}
        `;

        if (unlocked) {
            btn.addEventListener('click', () => startLevel(idx));
        }

        grid.appendChild(btn);
    });
}

// ── Level lifecycle ─────────────────────────────────────────────────────────

function startLevel(index) {
    game.currentLevel = index;
    levelSelectEl.classList.remove('visible');
    gameUiEl.style.display = '';
    resetLevel();
    sounds.levelStart();
}

function resetLevel() {
    // Clean up
    if (game.gridApi) scene.remove(game.gridApi.gridGroup);
    if (game.blockApi) scene.remove(game.blockApi.mesh);
    cleanupSplit();

    const levelData = LEVELS[game.currentLevel];

    game.gridApi = createGrid(scene, levelData);
    game.blockApi = createBlock(scene, levelData.startCol, levelData.startRow);
    game.moves = 0;
    game.isWon = false;
    game.moveHistory = [];
    game.isSplit = false;

    // UI
    moveNumberEl.textContent = '0';
    levelNameEl.textContent = `${levelData.id}. ${levelData.name}`;
    statusOverlay.classList.remove('visible');
    splitHintEl.style.display = 'none';

    // Rebuild path tracing BVH for new level
    ptNeedsUpdate = true;
}

function cleanupSplit() {
    if (game.cubes) {
        game.cubes.forEach(c => scene.remove(c.mesh));
        game.cubes = null;
    }
    game.isSplit = false;
    game.activeCubeIndex = 0;
    if (splitHintEl) splitHintEl.style.display = 'none';
}

// ── Level transition (fall-through to next level) ──────────────────────────

function impactSquash(object) {
    const startTime = performance.now();
    const duration = 300;
    function step() {
        const t = Math.min((performance.now() - startTime) / duration, 1);
        const elastic = t === 1 ? 1 : -Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1;
        object.scale.set(
            1 + 0.1 * (1 - elastic),
            1 - 0.15 * (1 - elastic),
            1 + 0.1 * (1 - elastic)
        );
        if (t < 1) requestAnimationFrame(step);
        else object.scale.set(1, 1, 1);
    }
    requestAnimationFrame(step);
}

const LEVEL_DROP = -16;

function performLevelTransition() {
    game.isTransitioning = true;
    const nextIndex = game.currentLevel + 1;
    const nextLevel = LEVELS[nextIndex];

    const block = game.blockApi.mesh;
    const oldGridApi = game.gridApi;

    // Clean up block state from win animation (rotation, scale, emissive)
    block.rotation.set(0, 0, 0);
    block.quaternion.identity();
    block.scale.set(1, 1, 1);
    block.material.transparent = false;
    block.material.opacity = 1;

    // Snap block to exact goal grid position
    const goalCol = Math.round(block.position.x);
    const goalRow = Math.round(block.position.z);
    block.position.x = goalCol;
    block.position.z = goalRow;

    // Old level tiles cascade-fall away
    oldGridApi.fallAway();

    // Create next level below — positioned so its start tile is directly
    // under the current goal tile (block falls straight down onto it)
    const newGridApi = createGrid(scene, nextLevel, false);
    const xzOffset = {
        x: goalCol - nextLevel.startCol,
        z: goalRow - nextLevel.startRow,
    };
    newGridApi.gridGroup.position.set(xzOffset.x, LEVEL_DROP, xzOffset.z);

    // All new tiles start fully transparent
    const newTiles = Object.values(newGridApi.tiles);
    newTiles.forEach(tile => {
        tile.material.transparent = true;
        tile.material.opacity = 0;
    });

    // Switch game refs to the new level
    game.gridApi = newGridApi;
    game.currentLevel = nextIndex;
    game.moves = 0;
    game.isWon = false;
    game.moveHistory = [];
    game.isSplit = false;
    game.blockApi.state.isAnimating = true;

    moveNumberEl.textContent = '0';
    levelNameEl.textContent = `${nextLevel.id}. ${nextLevel.name}`;

    // Block falls continuously from its current position to the new level
    const startY = block.position.y; // ~-2.2 from the win sink
    const targetY = 1 + LEVEL_DROP;  // standing height on the offset grid
    const fallStart = performance.now();
    const fallDuration = 950;

    function fall() {
        const t = Math.min((performance.now() - fallStart) / fallDuration, 1);
        const ease = t * t; // gravity-like acceleration

        block.position.y = startY + (targetY - startY) * ease;

        // Subtle wobble during fall
        block.rotation.z = Math.sin(t * Math.PI * 2.5) * 0.03 * (1 - t);
        block.rotation.x = Math.sin(t * Math.PI * 2 + 0.5) * 0.02 * (1 - t);

        // New level fades into view as block approaches (20%→75% of fall)
        const fadeT = Math.max(0, Math.min((t - 0.2) / 0.55, 1));
        const tileOpacity = fadeT * fadeT; // smooth ease-in
        newTiles.forEach(tile => {
            tile.material.opacity = tileOpacity;
        });

        if (t >= 1) {
            // ── Landing ──
            block.position.y = targetY;
            block.rotation.set(0, 0, 0);
            block.quaternion.identity();

            // Tiles fully opaque
            newTiles.forEach(tile => {
                tile.material.transparent = false;
                tile.material.opacity = 1;
            });

            // Teleport everything back to origin
            // (all elements shift by the same vector → no visible change)
            const shiftX = -xzOffset.x;
            const shiftY = -LEVEL_DROP;
            const shiftZ = -xzOffset.z;
            newGridApi.gridGroup.position.set(0, 0, 0);
            block.position.x += shiftX;
            block.position.y += shiftY;
            block.position.z += shiftZ;
            camera.position.x += shiftX;
            camera.position.y += shiftY;
            camera.position.z += shiftZ;

            // Remove old level
            scene.remove(oldGridApi.gridGroup);

            // Ready to play
            game.blockApi.state.orientation = 'standing';
            game.blockApi.state.isAnimating = false;
            game.isTransitioning = false;

            impactSquash(block);
            sounds.levelStart();
            ptNeedsUpdate = true;
        } else {
            requestAnimationFrame(fall);
        }
    }
    requestAnimationFrame(fall);
}

// ── Callbacks ───────────────────────────────────────────────────────────────

function onMoveCountChange(count) {
    game.moves = count;
    moveNumberEl.textContent = count;
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
    const levelData = LEVELS[game.currentLevel];
    saveProgress(levelData.id);

    const hasNext = game.currentLevel < LEVELS.length - 1;

    if (hasNext) {
        // Block stays visible — seamless fall-through to next level
        performLevelTransition();
    } else {
        // Last level — show completion overlay
        statusTitle.textContent = 'COMPLETE';
        statusTitle.className = 'win';
        const parText = game.moves <= levelData.par ? ' (par!)' : ` (par: ${levelData.par})`;
        statusSubtitle.textContent = `${game.moves} moves${parText}`;
        statusHint.textContent = 'All levels complete!  ·  Esc for level select';
        statusOverlay.classList.add('visible');
    }
}

function onReset() {
    if (game.isTransitioning) return;
    if (game.isWon && game.currentLevel < LEVELS.length - 1) {
        startLevel(game.currentLevel + 1);
    } else {
        resetLevel();
    }
}

function onEscape() {
    if (game.isTransitioning) return;
    showLevelSelect();
}

function onSplit(teleportTo) {
    const [[r0, c0], [r1, c1]] = teleportTo;

    // Create two cubes
    const cube0 = createCube(scene, c0, r0, 0xf97316); // orange
    const cube1 = createCube(scene, c1, r1, 0x3b82f6); // blue

    game.cubes = [cube0, cube1];
    game.isSplit = true;
    game.activeCubeIndex = 0;

    splitHintEl.style.display = '';
}

function onMerge(r0, c0, r1, c1) {
    // Remove cubes
    cleanupSplit();

    // Determine merged block orientation and position
    let orientation, cx, cz;
    if (r0 === r1) {
        orientation = 'lying_x';
        cx = (c0 + c1) / 2;
        cz = r0;
    } else {
        orientation = 'lying_z';
        cx = c0;
        cz = (r0 + r1) / 2;
    }

    // Re-create the block at the merged position
    const levelData = LEVELS[game.currentLevel];
    game.blockApi = createBlock(scene, cx, cz);
    game.blockApi.state.orientation = orientation;
    game.blockApi.mesh.position.set(cx, getBlockYForOrientation(orientation), cz);
    game.blockApi.mesh.quaternion.copy(getOrientationQuaternion(orientation));

    // Clear undo history (merge is a state transition)
    game.moveHistory = [];
}

function onCubeSwitch() {
    // Visual feedback handled by cube.update() in animate loop
}

// ── Controls ────────────────────────────────────────────────────────────────

setupControls(game, {
    onMoveCountChange,
    onFall,
    onWin,
    onReset,
    onEscape,
    onSplit,
    onMerge,
    onCubeSwitch,
});

// ── Start ───────────────────────────────────────────────────────────────────

showLevelSelect();

// ── Animation loop ──────────────────────────────────────────────────────────

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();
    const delta = clock.getDelta();

    // Update block or cubes
    if (game.isSplit && game.cubes) {
        game.cubes.forEach((c, i) => c.update(time, i === game.activeCubeIndex));
        const activeCube = game.cubes[game.activeCubeIndex];
        updateCamera(activeCube.mesh.position);
    } else if (game.blockApi) {
        game.blockApi.update(time);
        if (!game.blockApi.state.isFalling) {
            // Faster camera follow during level transition so it keeps up with the drop
            const lerpSpeed = game.isTransitioning ? 0.1 : 0.05;
            updateCamera(game.blockApi.mesh.position, lerpSpeed);
        }
    }

    // Update tile emissive animations
    if (game.gridApi) {
        game.gridApi.updateTime(time);
    }

    // Update sparkles
    sparkles.update(time);

    // ── Path tracing management ──
    const isAnimating = game.isTransitioning
        || game.blockApi?.state.isAnimating
        || game.blockApi?.state.isFalling
        || (game.isSplit && game.cubes?.some(c => c._isAnimating));

    if (isAnimating || !cameraApi.isStable) {
        // Scene or camera in motion — pause path tracing, show rasterized
        pathTracer.pausePathTracing = true;
        pathTracer.reset();
        ptNeedsUpdate = true;
    } else {
        // Everything settled — rebuild BVH if needed, resume path tracing
        if (ptNeedsUpdate) {
            rebuildPathTracerScene();
        }
        pathTracer.pausePathTracing = false;
    }

    pathTracer.renderSample();
}

animate();
