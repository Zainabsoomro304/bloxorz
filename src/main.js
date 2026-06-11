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

// drei-vanilla Sparkles helper
import { Sparkles } from '@pmndrs/vanilla/core/Sparkles.js';

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
const editBtnEl       = document.getElementById('edit-btn');

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
    isCustomLevel: false,
    customLevelData: null,

    // Split mode
    isSplit: false,
    cubes: null,        // [cubeApi0, cubeApi1]
    activeCubeIndex: 0,
};

const CUSTOM_LEVEL_INDEX = -1;

function getCurrentLevelData() {
    return game.isCustomLevel && game.customLevelData
        ? game.customLevelData
        : LEVELS[game.currentLevel];
}

function getCurrentTheme() {
    return THEMES[game.currentLevel] || THEMES[0];
}

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
    resetCameraView();
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
        const curTheme = getCurrentTheme();
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
    game.isCustomLevel = false;
    game.customLevelData = null;
    resetCameraView();
    if (editBtnEl) editBtnEl.style.display = 'none';
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

    const levelData = getCurrentLevelData();
    const theme = getCurrentTheme();

    applyTheme(game.isCustomLevel ? 0 : game.currentLevel);
    game.gridApi = createGrid(scene, levelData, true, { tiles: theme.tiles, goal: theme.goal });
    game.blockApi = createBlock(scene, levelData.startCol, levelData.startRow, theme.block);
    
    // Reset camera framing and block translucency
    cameraApi.reset();
    updateBlockOpacity();

    game.moves = 0;
    game.isWon = false;
    game.moveHistory = [];
    game.isSplit = false;

    // UI
    moveNumberEl.textContent = '0';
    levelNameEl.textContent = `${levelData.id}. ${levelData.name}`;
    statusOverlay.classList.remove('visible');
    splitHintEl.style.display = 'none';

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

function performLevelTransition() {
    game.isTransitioning = true;
    const oldIndex = game.currentLevel;
    const nextIndex = oldIndex + 1;
    const nextLevel = LEVELS[nextIndex];
    const oldTheme = THEMES[oldIndex] || THEMES[0];
    const nextTheme = THEMES[nextIndex] || THEMES[0];

    const block = game.blockApi.mesh;
    const oldGridApi = game.gridApi;

    const LEVEL_DROP = -16;
    const goalCol = Math.round(block.position.x);
    const goalRow = Math.round(block.position.z);
    block.position.x = goalCol;
    block.position.z = goalRow;

    oldGridApi.fallAway();

    const newGridApi = createGrid(scene, nextLevel, false,
        { tiles: nextTheme.tiles, goal: nextTheme.goal });
    const xzOffset = {
        x: goalCol - nextLevel.startCol,
        z: goalRow - nextLevel.startRow,
    };
    newGridApi.gridGroup.position.set(xzOffset.x, LEVEL_DROP, xzOffset.z);

    const newTiles = Object.values(newGridApi.tiles);
    newTiles.forEach(tile => {
        tile.material.transparent = true;
        tile.material.opacity = 0;
    });

    game.gridApi = newGridApi;
    game.currentLevel = nextIndex;
    game.moves = 0;
    game.isWon = false;
    game.moveHistory = [];
    game.isSplit = false;
    game.blockApi.state.isAnimating = true;

    moveNumberEl.textContent = '0';
    levelNameEl.textContent = `${nextLevel.id}. ${nextLevel.name}`;

    const startY = block.position.y;
    const targetY = 1 + LEVEL_DROP;
    const fallStart = performance.now();
    const fallDuration = 950;

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

        const skyColors = oldTheme.sky.map((c, i) => lerpHex(c, nextTheme.sky[i], t));
        updateSky(skyColors);
        scene.fog.color.copy(fogColorStart).lerp(fogColorEnd, t);
        block.material.color.copy(blockColorStart).lerp(blockColorEnd, t);
        _ca.copy(sparkleColorStart).lerp(sparkleColorEnd, t);
        sparkles.color = _ca.clone();

        const fadeT = Math.max(0, Math.min((t - 0.2) / 0.55, 1));
        newTiles.forEach(tile => {
            tile.material.opacity = fadeT * fadeT;
        });

        if (t >= 1) {
            block.position.y = targetY;

            applyTheme(nextIndex);
            block.material.color.set(nextTheme.block);

            newTiles.forEach(tile => {
                tile.material.transparent = false;
                tile.material.opacity = 1;
            });

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

            scene.remove(oldGridApi.gridGroup);

            game.blockApi.state.orientation = 'standing';
            game.blockApi.state.isAnimating = false;
            game.isTransitioning = false;

            impactSquash(block);
            sounds.levelStart();
        } else {
            requestAnimationFrame(fall);
        }
    }

    requestAnimationFrame(fall);
}

function getMovePreview(x, z, orientation, move) {
    let nextX = x;
    let nextZ = z;
    let nextOrientation = orientation;

    if (orientation === 'standing') {
        nextX += move.dx * 1.5;
        nextZ += move.dz * 1.5;
        nextOrientation = move.dx !== 0 ? 'lying_x' : 'lying_z';
    } else if (orientation === 'lying_x') {
        if (move.dx !== 0) {
            nextX += move.dx * 1.5;
            nextOrientation = 'standing';
        } else {
            nextZ += move.dz;
        }
    } else {
        if (move.dz !== 0) {
            nextZ += move.dz * 1.5;
            nextOrientation = 'standing';
        } else {
            nextX += move.dx;
        }
    }

    return { x: nextX, z: nextZ, orientation: nextOrientation };
}

function getOccupiedCellsForState(x, z, orientation) {
    if (orientation === 'standing') {
        return [{ row: Math.round(z), col: Math.round(x) }];
    }
    if (orientation === 'lying_x') {
        return [
            { row: Math.round(z), col: Math.round(x - 0.5) },
            { row: Math.round(z), col: Math.round(x + 0.5) },
        ];
    }
    return [
        { row: Math.round(z - 0.5), col: Math.round(x) },
        { row: Math.round(z + 0.5), col: Math.round(x) },
    ];
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

    const levelData = getCurrentLevelData();
    const gridApi = game.gridApi;

    // Get current block position and orientation to determine start for solver
    const pos = blockApi.mesh.position;
    const orient = blockApi.state.orientation;

    const fromCurrent = solveBFS(
        gridApi.levelLayout,
        Math.round(pos.z),
        Math.round(pos.x),
        levelData.switches || {},
        gridApi.bridgeStates || {},
        {
            startX: pos.x,
            startZ: pos.z,
            startOrientation: orient,
        }
    );

    if (!fromCurrent || fromCurrent.length === 0) return;

    const nextMove = fromCurrent[0];
    const preview = getMovePreview(pos.x, pos.z, orient, nextMove);

    // Highlight the target cell(s).
    gridApi.highlightTiles(getOccupiedCellsForState(preview.x, preview.z, preview.orientation));
}

function onWin() {
    game.isWon = true;
    const levelData = getCurrentLevelData();
    if (!game.isCustomLevel) saveProgress(levelData.id);

    const hasNext = !game.isCustomLevel && game.currentLevel < LEVELS.length - 1;

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
    if (game.isWon && !game.isCustomLevel && game.currentLevel < LEVELS.length - 1) {
        startLevel(game.currentLevel + 1);
    } else {
        resetLevel();
    }
}

function onEscape() {
    resetCameraView();
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

    if (game.blockApi) {
        scene.remove(game.blockApi.mesh);
        game.blockApi = null;
    }

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
    const theme = getCurrentTheme();
    game.blockApi = createBlock(scene, cx, cz, theme.block);
    game.blockApi.state.orientation = orientation;
    game.blockApi.mesh.position.set(cx, getBlockYForOrientation(orientation), cz);
    game.blockApi.mesh.quaternion.copy(getOrientationQuaternion(orientation));

    // Clear undo history (merge is a state transition)
    game.moveHistory = [];
}

function onCubeSwitch() {
    cameraApi.reset();
    updateBlockOpacity();
}

// ── Editor ──────────────────────────────────────────────────────────────────

function enterEditor() {
    if (menuState === 'transitioning') return;
    resetCameraView();
    cleanupGame();
    cleanupMenuScene();
    menuState = 'editor';
    homeScreenEl.classList.remove('visible');
    levelSelectEl.classList.remove('visible');
    gameUiEl.style.display = 'none';
    statusOverlay.classList.remove('visible');
    editorUiEl?.classList.add('visible');
    editor.enter();
}

function exitEditor() {
    editor.exit();
    editorUiEl?.classList.remove('visible');
    ensureMenuScene();
    applyTheme(0);
    enterHomeState();
}

function playCustomLevel() {
    const levelData = editor.getLevel();
    if (!levelData) {
        // Show what's missing
        const edDesc = document.getElementById('ed-desc');
        if (edDesc) {
            const missing = [];
            if (!editor.hasStart()) missing.push('start');
            if (!editor.hasGoal()) missing.push('goal');
            edDesc.innerHTML = `<span style="color:#e74c3c">Place a ${missing.join(' and ')} tile to play</span>`;
        }
        return;
    }
    editor.exit();
    editorUiEl?.classList.remove('visible');

    camera.clearViewOffset();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    resetCameraView();
    game.currentLevel = CUSTOM_LEVEL_INDEX;
    game.isCustomLevel = true;
    game.customLevelData = levelData;
    applyTheme(0);
    resetLevel();
    gameUiEl.style.display = '';
    if (editBtnEl) editBtnEl.style.display = '';
    menuState = 'game';
}

function backToEditor() {
    resetCameraView();
    cleanupGame();
    game.isCustomLevel = false;
    if (editBtnEl) editBtnEl.style.display = 'none';
    menuState = 'editor';
    homeScreenEl.classList.remove('visible');
    levelSelectEl.classList.remove('visible');
    gameUiEl.style.display = 'none';
    statusOverlay.classList.remove('visible');
    editorUiEl?.classList.add('visible');
    editor.enter(true); // re-enter with preserved state
}

editorBtnEl?.addEventListener('click', () => enterEditor());
editBtnEl?.addEventListener('click', () => backToEditor());
document.getElementById('ed-back')?.addEventListener('click', () => exitEditor());
document.getElementById('ed-play')?.addEventListener('click', () => playCustomLevel());
document.getElementById('ed-clear')?.addEventListener('click', () => editor.clear());

const toolDescriptions = {
    normal:       '<span>Normal</span> — standard tile, supports any block position',
    fragile:      '<span>Fragile</span> — breaks when the block stands upright on it',
    goal:         '<span>Goal</span> — the hole the block must fall into to win',
    start:        '<span>Start</span> — where the block spawns at the beginning',
    soft_switch:  '<span>Soft Switch</span> — activates when any part of the block touches it, toggles all bridges',
    heavy_switch: '<span>Heavy Switch</span> — only activates when standing upright, toggles all bridges',
    bridge:       '<span>Bridge</span> — hidden tile that appears/disappears when a switch is activated',
    eraser:       '<span>Eraser</span> — click tiles to remove them',
};
const edDescEl = document.getElementById('ed-desc');

document.querySelectorAll('[data-tool]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('[data-tool]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        editor.setTool(btn.dataset.tool);
        if (edDescEl) edDescEl.innerHTML = toolDescriptions[btn.dataset.tool] || '';
    });
});

// ── Camera framing ─────────────────────────────────────────────────────────

function resetCameraView() {
    updateBlockOpacity();
}

function updateBlockOpacity() {
    if (game.blockApi && game.blockApi.mesh) {
        game.blockApi.mesh.material.transparent = false;
        game.blockApi.mesh.material.opacity = 1.0;
        game.blockApi.mesh.material.needsUpdate = true;
    }
    if (game.cubes) {
        game.cubes.forEach((c) => {
            c.material.transparent = false;
            c.material.opacity = 1.0;
            c.material.needsUpdate = true;
        });
    }
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
    onLanding,
    onFragileBreak,
    onWinEffect,
    onHint,
});

// ── Start ───────────────────────────────────────────────────────────────────

showHomeScreen();

// ── Animation loop ──────────────────────────────────────────────────────────

const startTime = performance.now();
let previousFrameTime = startTime;

function animate() {
    requestAnimationFrame(animate);
    const now = performance.now();
    const time = (now - startTime) / 1000;
    const delta = (now - previousFrameTime) / 1000;
    previousFrameTime = now;

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
            updateCamera(activeCube.mesh.position, 0.05, 'standing', true);
        } else if (game.blockApi) {
            game.blockApi.update(time);
            if (!game.blockApi.state.isFalling) {
                const lerpSpeed = game.isTransitioning ? 0.1 : 0.05;
                updateCamera(game.blockApi.mesh.position, lerpSpeed, game.blockApi.state.orientation, false);
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

    composer.render();
}

animate();
