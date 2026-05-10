import { createScene, updateSky } from './scene.js';
import { createCamera } from './camera.js';
import { setupLighting, updateLighting } from './lighting.js';
import { createGrid } from './grid.js';
import { createBlock, createCube, getOrientationQuaternion, getBlockYForOrientation } from './block.js';
import { setupControls } from './controls.js';
import { LEVELS } from './levels.js';
import { THEMES } from './themes.js';
import { sounds } from './sounds.js';
import { createParticleManager } from './particles.js';
import { createShakeManager } from './shake.js';
import { solveBFS } from './solver.js';
import { createEditor } from './editor.js';
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
const homeScreenEl    = document.getElementById('home-screen');
const playBtnEl       = document.getElementById('play-btn');
const editorBtnEl     = document.getElementById('editor-btn');
const levelSelectEl   = document.getElementById('level-select');
const lsBackBtnEl     = document.getElementById('ls-back');
const gameUiEl        = document.getElementById('game-ui');
const splitHintEl     = document.getElementById('split-hint');
const editorUiEl      = document.getElementById('editor-ui');

// ── Scene, Camera, Lighting ─────────────────────────────────────────────────

const { scene, renderer } = createScene(container, THEMES[0].sky);
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

// ── Particles & Shake ──────────────────────────────────────────────────────

const particles = createParticleManager(scene);
const shake = createShakeManager();

// ── Editor ─────────────────────────────────────────────────────────────────

const editor = createEditor(scene, camera, renderer);

// ── Theme helpers ─────────────────────────────────────────────────────────

const _ca = new THREE.Color();
const _cb = new THREE.Color();
function lerpHex(a, b, t) {
    _ca.set(a); _cb.set(b);
    _ca.lerp(_cb, t);
    return '#' + _ca.getHexString();
}

function applyTheme(index) {
    const theme = THEMES[index] || THEMES[0];
    updateSky(theme.sky);
    scene.fog.color.set(theme.fog);
    sparkles.color = new THREE.Color(theme.sparkle);
}

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
    camera.updateMatrixWorld();
    pathTracer.setScene(scene, camera);
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

// ── Menu Scene ──────────────────────────────────────────────────────────────

let menuBlock = null;
let menuGrid = null;
let menuState = 'home'; // 'home' | 'levelSelect' | 'transitioning' | 'game' | 'editor'

function createMenuScene() {
    const theme = THEMES[0];
    applyTheme(0);

    // A level-like platform to showcase the block
    const miniLevel = {
        layout: [
            [0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 2, 0],
        ],
        startRow: 1, startCol: 2,
        switches: {}, bridges: {},
    };
    menuGrid = createGrid(scene, miniLevel, true, { tiles: theme.tiles, goal: theme.goal });
    menuBlock = createBlock(scene, 2, 1, theme.block);
}

function cleanupMenuScene() {
    if (menuGrid) { scene.remove(menuGrid.gridGroup); menuGrid = null; }
    if (menuBlock) { scene.remove(menuBlock.mesh); menuBlock = null; }
}

// ── Home Screen ─────────────────────────────────────────────────────────────

function enterHomeState() {
    // Final state setup — called after transition or on first load
    menuState = 'home';
    homeScreenEl.classList.add('visible');
    levelSelectEl.classList.remove('visible');
    gameUiEl.style.display = 'none';
    statusOverlay.classList.remove('visible');
}

function cleanupGame() {
    if (game.gridApi) { scene.remove(game.gridApi.gridGroup); game.gridApi = null; }
    if (game.blockApi) { scene.remove(game.blockApi.mesh); game.blockApi = null; }
    cleanupSplit();
    game.isWon = false;
    game.isTransitioning = false;
}

function ensureMenuScene() {
    cleanupGame();
    cleanupMenuScene();
    createMenuScene();
}

function showHomeScreen(fromGame = false) {
    if (menuState === 'transitioning') return;

    // Hide all UI immediately
    levelSelectEl.classList.remove('visible');
    homeScreenEl.classList.remove('visible');
    gameUiEl.style.display = 'none';
    statusOverlay.classList.remove('visible');

    if (fromGame && menuState === 'game') {
        // Smooth camera swoosh from gameplay back to menu
        menuState = 'transitioning';
        const startCamPos = camera.position.clone();
        const startLookAt = game.blockApi
            ? game.blockApi.mesh.position.clone()
            : new THREE.Vector3(0, 0, 0);
        const curTheme = THEMES[game.currentLevel] || THEMES[0];
        const menuTheme = THEMES[0];

        ensureMenuScene();

        const menuLookAt = new THREE.Vector3(2, 0.5, 1.5);
        const endCamPos = new THREE.Vector3(2 + 5.5, 4.5, 1.5);

        const transStart = performance.now();
        const totalDuration = 1600;

        function step() {
            const t = Math.min((performance.now() - transStart) / totalDuration, 1);
            const ease = t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;

            const lift = Math.sin(t * Math.PI) * 4;
            camera.position.lerpVectors(startCamPos, endCamPos, ease);
            camera.position.y += lift;

            const lookTarget = startLookAt.clone().lerp(menuLookAt, ease);
            camera.lookAt(lookTarget);

            const skyColors = curTheme.sky.map((c, i) => lerpHex(c, menuTheme.sky[i], ease));
            updateSky(skyColors);
            scene.fog.color.copy(new THREE.Color(curTheme.fog)).lerp(new THREE.Color(menuTheme.fog), ease);

            if (t >= 1) {
                applyTheme(0);
                enterHomeState();
                ptNeedsUpdate = true;
            } else {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
    } else {
        // Direct — first load or from level select
        ensureMenuScene();
        applyTheme(0);
        enterHomeState();
    }
}

// ── Level Select ────────────────────────────────────────────────────────────

function populateLevelSelect() {
    const themeBlockColors = THEMES.map(t => {
        const c = new THREE.Color(t.block);
        return '#' + c.getHexString();
    });

    const prog = loadProgress();
    const grid = levelSelectEl.querySelector('.level-grid');
    grid.innerHTML = '';

    LEVELS.forEach((level, idx) => {
        const btn = document.createElement('button');
        btn.className = 'level-btn';

        const unlocked = isLevelUnlocked(idx);
        const completed = prog.completed && prog.completed.includes(level.id);
        const best = prog.best && prog.best[level.id];
        const dotColor = themeBlockColors[idx] || themeBlockColors[0];

        if (!unlocked) btn.classList.add('locked');
        if (completed) {
            btn.classList.add('completed');
            btn.style.background = dotColor;
            btn.style.borderColor = dotColor;
        }

        const beatPar = completed && best && best <= level.par;
        btn.innerHTML = `
            <span class="level-num">${level.id}</span>
            ${beatPar ? '<span class="level-star">&#9733;</span>' : ''}
        `;

        if (unlocked) {
            btn.addEventListener('click', () => startLevel(idx));
        }

        grid.appendChild(btn);
    });
}

function showLevelSelect() {
    if (menuState === 'transitioning') return;
    if (!menuBlock) {
        ensureMenuScene();
        applyTheme(0);
    }
    menuState = 'levelSelect';
    homeScreenEl.classList.remove('visible');
    gameUiEl.style.display = 'none';
    statusOverlay.classList.remove('visible');
    populateLevelSelect();
    levelSelectEl.classList.add('visible');
}

playBtnEl.addEventListener('click', () => showLevelSelect());
lsBackBtnEl.addEventListener('click', () => {
    menuState = 'home';
    levelSelectEl.classList.remove('visible');
    homeScreenEl.classList.add('visible');
});

// ── Level lifecycle ─────────────────────────────────────────────────────────

function startLevel(index) {
    if (menuState === 'transitioning') return;
    menuState = 'transitioning';
    levelSelectEl.classList.remove('visible');
    homeScreenEl.classList.remove('visible');
    gameUiEl.style.display = 'none';

    // Clear the home-screen camera offset
    camera.clearViewOffset();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    game.currentLevel = index;

    const startCamPos = camera.position.clone();
    const startLookAt = new THREE.Vector3(2, 0.5, 1.5);

    const oldTheme = THEMES[0];
    const newTheme = THEMES[index] || THEMES[0];

    // Clean up menu and create level immediately
    cleanupMenuScene();
    applyTheme(index);
    resetLevel();

    const endTarget = game.blockApi.mesh.position.clone();
    const endCamPos = endTarget.clone().add(cameraApi.offset);

    const transStart = performance.now();
    const totalDuration = 1600;

    function step() {
        const t = Math.min((performance.now() - transStart) / totalDuration, 1);

        // Smooth ease-in-out cubic — feels natural, not dramatic
        const ease = t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;

        // Camera: simple smooth lerp with a gentle lift in the middle
        const lift = Math.sin(t * Math.PI) * 4;
        camera.position.lerpVectors(startCamPos, endCamPos, ease);
        camera.position.y += lift;

        // Look target blends smoothly
        const lookTarget = startLookAt.clone().lerp(endTarget, ease);
        camera.lookAt(lookTarget);

        // Sky/fog crossfade
        const skyColors = oldTheme.sky.map((c, i) => lerpHex(c, newTheme.sky[i], ease));
        updateSky(skyColors);
        scene.fog.color.copy(new THREE.Color(oldTheme.fog)).lerp(new THREE.Color(newTheme.fog), ease);

        if (t >= 1) {
            gameUiEl.style.display = '';
            menuState = 'game';
            sounds.levelStart();
            ptNeedsUpdate = true;
        } else {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

function resetLevel() {
    // Clean up
    if (game.gridApi) scene.remove(game.gridApi.gridGroup);
    if (game.blockApi) scene.remove(game.blockApi.mesh);
    cleanupSplit();

    const levelData = LEVELS[game.currentLevel];
    const theme = THEMES[game.currentLevel] || THEMES[0];

    applyTheme(game.currentLevel);
    game.gridApi = createGrid(scene, levelData, true, { tiles: theme.tiles, goal: theme.goal });
    game.blockApi = createBlock(scene, levelData.startCol, levelData.startRow, theme.block);
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
    const oldIndex = game.currentLevel;
    const nextIndex = oldIndex + 1;
    const nextLevel = LEVELS[nextIndex];
    const oldTheme = THEMES[oldIndex] || THEMES[0];
    const nextTheme = THEMES[nextIndex] || THEMES[0];

    const block = game.blockApi.mesh;
    const oldGridApi = game.gridApi;

    // Block is already in a clean state from the simplified win animation
    // Just snap XZ to exact goal grid position
    const goalCol = Math.round(block.position.x);
    const goalRow = Math.round(block.position.z);
    block.position.x = goalCol;
    block.position.z = goalRow;

    // Old level tiles cascade-fall away
    oldGridApi.fallAway();

    // Create next level below with the new theme's colors
    const newGridApi = createGrid(scene, nextLevel, false,
        { tiles: nextTheme.tiles, goal: nextTheme.goal });
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
    const startY = block.position.y;
    const targetY = 1 + LEVEL_DROP;
    const fallStart = performance.now();
    const fallDuration = 950;

    // Pre-compute block color targets for smooth lerp
    const blockColorStart = block.material.color.clone();
    const blockColorEnd = new THREE.Color(nextTheme.block);
    const fogColorStart = scene.fog.color.clone();
    const fogColorEnd = new THREE.Color(nextTheme.fog);
    const sparkleColorStart = new THREE.Color(oldTheme.sparkle);
    const sparkleColorEnd = new THREE.Color(nextTheme.sparkle);

    function fall() {
        const t = Math.min((performance.now() - fallStart) / fallDuration, 1);
        const ease = t * t;

        block.position.y = startY + (targetY - startY) * ease;

        // ── Smooth theme transition ──
        // Sky gradient interpolation
        const skyColors = oldTheme.sky.map((c, i) => lerpHex(c, nextTheme.sky[i], t));
        updateSky(skyColors);

        // Fog color
        scene.fog.color.copy(fogColorStart).lerp(fogColorEnd, t);

        // Block color
        block.material.color.copy(blockColorStart).lerp(blockColorEnd, t);

        // Sparkle color
        _ca.copy(sparkleColorStart).lerp(sparkleColorEnd, t);
        sparkles.color = _ca.clone();

        // New level tiles fade into view (20%→75% of fall)
        const fadeT = Math.max(0, Math.min((t - 0.2) / 0.55, 1));
        newTiles.forEach(tile => {
            tile.material.opacity = fadeT * fadeT;
        });

        if (t >= 1) {
            // ── Landing ──
            block.position.y = targetY;

            // Finalize theme
            applyTheme(nextIndex);
            block.material.color.set(nextTheme.block);

            // Tiles fully opaque
            newTiles.forEach(tile => {
                tile.material.transparent = false;
                tile.material.opacity = 1;
            });

            // Teleport everything back to origin
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
    shake.trigger(0.15, 250);
    statusTitle.textContent = 'FELL OFF';
    statusTitle.className = 'fall';
    statusSubtitle.textContent = '';
    statusHint.textContent = 'Press R to restart';
    statusOverlay.classList.add('visible');
}

function onLanding(position) {
    particles.emitDust(position);
    shake.trigger(0.02, 80);
    if (game.gridApi) game.gridApi.clearHighlight();
}

function onFragileBreak(position) {
    particles.emitShatter(position, 0xF0D870);
    shake.trigger(0.08, 150);
}

function onWinEffect(position) {
    particles.emitCelebration(position);
}

function onHint() {
    if (menuState !== 'game' || game.isWon || game.isSplit) return;
    const blockApi = game.blockApi;
    if (!blockApi || blockApi.state.isAnimating || blockApi.state.isFalling) return;

    const levelData = LEVELS[game.currentLevel];
    const gridApi = game.gridApi;

    // Get current block position and orientation to determine start for solver
    const pos = blockApi.mesh.position;
    const orient = blockApi.state.orientation;

    // For the solver, we need the current layout state (bridges may have changed)
    const solution = solveBFS(
        gridApi.levelLayout,
        levelData.startRow,
        levelData.startCol,
        levelData.switches || {},
        levelData.bridges || {}
    );

    if (!solution || solution.length === 0) return;

    // Highlight the tile the first move leads to
    // Solver returns moves from the START position, so we need to solve from current state
    // Re-solve from current position by computing occupied cells
    let curCol, curRow;
    if (orient === 'standing') {
        curRow = Math.round(pos.z);
        curCol = Math.round(pos.x);
    } else if (orient === 'lying_x') {
        curRow = Math.round(pos.z);
        curCol = Math.round(pos.x - 0.5);
    } else {
        curRow = Math.round(pos.z - 0.5);
        curCol = Math.round(pos.x);
    }

    const fromCurrent = solveBFS(
        gridApi.levelLayout,
        curRow,
        curCol,
        levelData.switches || {},
        gridApi.bridgeStates || {}
    );

    if (!fromCurrent || fromCurrent.length === 0) return;

    const nextMove = fromCurrent[0];
    // Compute where the block center will be after this move
    let nx = pos.x, nz = pos.z;
    if (orient === 'standing') {
        nx += nextMove.dx * 1.5;
        nz += nextMove.dz * 1.5;
    } else if (orient === 'lying_x') {
        if (nextMove.dx !== 0) {
            nx += nextMove.dx * 1.5;
        } else {
            nz += nextMove.dz * 1.0;
        }
    } else {
        if (nextMove.dz !== 0) {
            nz += nextMove.dz * 1.5;
        } else {
            nx += nextMove.dx * 1.0;
        }
    }

    // Highlight the target cell(s)
    gridApi.highlightTile(Math.round(nz), Math.round(nx));
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
    if (game.isTransitioning || menuState === 'transitioning') return;
    if (game.isWon && game.currentLevel < LEVELS.length - 1) {
        startLevel(game.currentLevel + 1);
    } else {
        resetLevel();
    }
}

function onEscape() {
    if (menuState === 'home') return;
    if (menuState === 'editor') {
        exitEditor();
        return;
    }
    if (menuState === 'levelSelect') {
        menuState = 'home';
        levelSelectEl.classList.remove('visible');
        homeScreenEl.classList.add('visible');
        return;
    }
    // Force switch to exact same home screen as initial page load
    // No guards — always works regardless of current state
    ensureMenuScene();
    applyTheme(0);
    enterHomeState();
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

// ── Editor ──────────────────────────────────────────────────────────────────

function enterEditor() {
    if (menuState === 'transitioning') return;
    cleanupGame();
    cleanupMenuScene();
    menuState = 'editor';
    homeScreenEl.classList.remove('visible');
    levelSelectEl.classList.remove('visible');
    gameUiEl.style.display = 'none';
    statusOverlay.classList.remove('visible');
    editorUiEl?.classList.add('visible');
    editor.enter();
    ptNeedsUpdate = true;
}

function exitEditor() {
    editor.exit();
    editorUiEl?.classList.remove('visible');
    ensureMenuScene();
    applyTheme(0);
    enterHomeState();
    ptNeedsUpdate = true;
}

function playCustomLevel() {
    const levelData = editor.getLevel();
    if (!levelData) return;
    editor.exit();
    editorUiEl?.classList.remove('visible');

    const customIndex = LEVELS.length;
    LEVELS.push(levelData);
    camera.clearViewOffset();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    game.currentLevel = customIndex;
    applyTheme(0);
    resetLevel();
    gameUiEl.style.display = '';
    menuState = 'game';
    ptNeedsUpdate = true;
}

editorBtnEl?.addEventListener('click', () => enterEditor());
document.getElementById('ed-back')?.addEventListener('click', () => exitEditor());
document.getElementById('ed-play')?.addEventListener('click', () => playCustomLevel());
document.getElementById('ed-clear')?.addEventListener('click', () => editor.clear());

document.querySelectorAll('[data-tool]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-tool]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        editor.setTool(btn.dataset.tool);
    });
});

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
    onLanding,
    onFragileBreak,
    onWinEffect,
    onHint,
});

// ── Start ───────────────────────────────────────────────────────────────────

showHomeScreen();

// ── Animation loop ──────────────────────────────────────────────────────────

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();
    const delta = clock.getDelta();

    // Menu scene — 3D blocks on left side, orbit camera
    if (menuBlock && (menuState === 'home' || menuState === 'levelSelect')) {
        menuBlock.update(time);
        if (menuGrid) menuGrid.updateTime(time);
        const orbitSpeed = 0.12;
        const cx = 2, cz = 1.5;
        const radius = 5.5;
        camera.position.set(
            cx + Math.cos(time * orbitSpeed) * radius,
            4.5,
            cz + Math.sin(time * orbitSpeed) * radius
        );
        camera.lookAt(cx, 0.5, cz);
        updateLighting(menuBlock.mesh.position);

        // Shift view so 3D scene renders on the left ~40% of screen
        const shift = Math.round(window.innerWidth * 0.28);
        camera.setViewOffset(
            window.innerWidth + shift, window.innerHeight,
            shift, 0,
            window.innerWidth, window.innerHeight
        );
    }

    // Gameplay camera
    if (menuState === 'game') {
        if (game.isSplit && game.cubes) {
            game.cubes.forEach((c, i) => c.update(time, i === game.activeCubeIndex));
            const activeCube = game.cubes[game.activeCubeIndex];
            updateCamera(activeCube.mesh.position);
        } else if (game.blockApi) {
            game.blockApi.update(time);
            if (!game.blockApi.state.isFalling) {
                const lerpSpeed = game.isTransitioning ? 0.1 : 0.05;
                updateCamera(game.blockApi.mesh.position, lerpSpeed);
            }
        }

        if (game.blockApi) {
            updateLighting(game.blockApi.mesh.position);
        }
    }

    // Editor
    if (menuState === 'editor') {
        editor.update(time);
    }

    // Update tile emissive animations
    if (game.gridApi) {
        game.gridApi.updateTime(time);
    }

    // Update sparkles
    sparkles.update(time);

    // Update particles
    particles.update(delta);

    // Update screen shake and apply to camera
    shake.update();
    if (shake.isShaking) {
        const off = shake.getOffset();
        camera.position.x += off.x;
        camera.position.y += off.y;
        camera.position.z += off.z;
    }

    // ── Path tracing management ──
    const isAnimating = game.isTransitioning
        || game.blockApi?.state.isAnimating
        || game.blockApi?.state.isFalling
        || (game.isSplit && game.cubes?.some(c => c._isAnimating))
        || shake.isShaking
        || particles.isActive;

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
