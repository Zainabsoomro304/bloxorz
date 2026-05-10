import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// ── Constants ──────────────────────────────────────────────────────────────

const GRID_ROWS = 14;
const GRID_COLS = 10;
const TILE_W = 0.92;
const TILE_H = 0.4;
const TILE_Y = -TILE_H / 2;

const TOOL_TYPES = { normal: 1, goal: 2, fragile: 3, soft_switch: 4, heavy_switch: 5, bridge: 1 };

const TILE_COLORS = {
    normal:       0xF0F0F0,
    fragile:      0xF0D870,
    goal:         0x40E0D0,
    soft_switch:  0x4488EE,
    heavy_switch: 0x9060D0,
    bridge:       0xB8D0E0,
};

const CAMERA_POS = new THREE.Vector3(5, 14, 12);
const CAMERA_LOOK = new THREE.Vector3(5, 0, 5);

// ── Shared geometry (created once) ─────────────────────────────────────────

const tileGeometry = new RoundedBoxGeometry(TILE_W, TILE_H, TILE_W, 2, 0.04);
const ghostGeometry = new THREE.PlaneGeometry(0.95, 0.95);
const startMarkerGeometry = new THREE.BoxGeometry(0.3, 0.6, 0.3);

// ── Material factories ─────────────────────────────────────────────────────

function createTileMaterial(toolName) {
    const color = TILE_COLORS[toolName] || TILE_COLORS.normal;
    const opts = {
        color,
        metalness: 0.02,
        roughness: 0.35,
        clearcoat: 0.6,
        clearcoatRoughness: 0.08,
        envMapIntensity: 0.3,
    };
    if (toolName === 'goal') {
        opts.emissive = 0x40E0D0;
        opts.emissiveIntensity = 0.3;
    }
    if (toolName === 'fragile') {
        opts.clearcoat = 0.3;
        opts.clearcoatRoughness = 0.2;
    }
    if (toolName === 'soft_switch') {
        opts.emissive = 0x3b82f6;
        opts.emissiveIntensity = 0.4;
    }
    if (toolName === 'heavy_switch') {
        opts.emissive = 0x8b5cf6;
        opts.emissiveIntensity = 0.4;
    }
    if (toolName === 'bridge') {
        opts.transparent = true;
        opts.opacity = 0.5;
    }
    return new THREE.MeshPhysicalMaterial(opts);
}

function createGhostMaterial() {
    return new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide,
    });
}

// ── Editor factory ─────────────────────────────────────────────────────────

export function createEditor(scene, camera, renderer) {
    let active = false;
    let currentTool = 'normal';

    // State
    let editorLayout = [];
    let startPos = null;
    let goalPos = null;
    const tiles = {};        // "row,col" -> mesh
    const bridgePositions = new Set(); // "row,col" keys for bridge tiles
    const ghostTiles = [];   // array of ghost plane meshes
    let editorGroup = null;
    let preserveState = false; // true when re-entering from gameplay

    // Saved camera state
    let savedCamPos = null;
    let savedCamQuat = null;

    // Mouse tracking
    let mouseDown = false;
    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();
    const hitPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const hitPoint = new THREE.Vector3();

    // ── Grid helpers ───────────────────────────────────────────────────────

    function initLayout() {
        editorLayout = [];
        for (let r = 0; r < GRID_ROWS; r++) {
            editorLayout.push(new Array(GRID_COLS).fill(0));
        }
    }

    function createGhostGrid() {
        const mat = createGhostMaterial();
        for (let r = 0; r < GRID_ROWS; r++) {
            for (let c = 0; c < GRID_COLS; c++) {
                const plane = new THREE.Mesh(ghostGeometry, mat);
                plane.rotation.x = -Math.PI / 2;
                plane.position.set(c, 0.01, r);
                editorGroup.add(plane);
                ghostTiles.push(plane);
            }
        }
    }

    // ── Tile placement / removal ───────────────────────────────────────────

    function placeTile(row, col) {
        if (row < 0 || row >= GRID_ROWS || col < 0 || col >= GRID_COLS) return;
        const key = `${row},${col}`;

        if (currentTool === 'eraser') {
            removeTile(row, col);
            return;
        }

        if (currentTool === 'start') {
            placeStart(row, col);
            return;
        }

        // Enforce single goal — convert old goal back to normal tile
        if (currentTool === 'goal' && goalPos) {
            if (goalPos.row === row && goalPos.col === col) return;
            const oldKey = `${goalPos.row},${goalPos.col}`;
            removeTileVisual(oldKey);
            editorLayout[goalPos.row][goalPos.col] = 1;
            const normalMat = createTileMaterial('normal');
            const normalMesh = new THREE.Mesh(tileGeometry, normalMat);
            normalMesh.position.set(goalPos.col, TILE_Y, goalPos.row);
            normalMesh.receiveShadow = true;
            normalMesh.castShadow = true;
            editorGroup.add(normalMesh);
            tiles[oldKey] = normalMesh;
            goalPos = null;
        }

        // Remove existing tile at this cell
        if (tiles[key]) {
            removeTileVisual(key);
            bridgePositions.delete(key);
        }

        // Update layout
        const type = TOOL_TYPES[currentTool] || 1;
        editorLayout[row][col] = type;

        if (currentTool === 'goal') {
            goalPos = { row, col };
        }
        if (currentTool === 'bridge') {
            bridgePositions.add(key);
        }

        // Create 3D mesh
        const mat = createTileMaterial(currentTool);
        const mesh = new THREE.Mesh(tileGeometry, mat);
        mesh.position.set(col, TILE_Y, row);
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        editorGroup.add(mesh);
        tiles[key] = mesh;
    }

    function placeStart(row, col) {
        if (row < 0 || row >= GRID_ROWS || col < 0 || col >= GRID_COLS) return;
        const key = `${row},${col}`;

        // Remove old start marker
        if (startPos) {
            const oldKey = `${startPos.row},${startPos.col}`;
            removeTileVisual(oldKey);
            // Re-place a normal tile if the cell had one (start overlays a normal tile)
            if (editorLayout[startPos.row][startPos.col] === 1) {
                const mat = createTileMaterial('normal');
                const mesh = new THREE.Mesh(tileGeometry, mat);
                mesh.position.set(startPos.col, TILE_Y, startPos.row);
                mesh.receiveShadow = true;
                mesh.castShadow = true;
                editorGroup.add(mesh);
                tiles[oldKey] = mesh;
            }
        }

        // Ensure a normal tile exists underneath
        if (editorLayout[row][col] === 0) {
            editorLayout[row][col] = 1;
        }

        // Remove any existing visual at this cell and rebuild
        if (tiles[key]) removeTileVisual(key);

        // Place normal tile
        const tileMat = createTileMaterial('normal');
        const tileMesh = new THREE.Mesh(tileGeometry, tileMat);
        tileMesh.position.set(col, TILE_Y, row);
        tileMesh.receiveShadow = true;
        tileMesh.castShadow = true;

        // Start marker — small red cube sitting on top
        const markerMat = new THREE.MeshPhysicalMaterial({
            color: 0xE03030,
            metalness: 0.1,
            roughness: 0.3,
            clearcoat: 0.5,
        });
        const marker = new THREE.Mesh(startMarkerGeometry, markerMat);
        marker.position.y = TILE_H / 2 + 0.3;
        marker.castShadow = true;
        tileMesh.add(marker);

        editorGroup.add(tileMesh);
        tiles[key] = tileMesh;
        startPos = { row, col };
    }

    function removeTile(row, col) {
        const key = `${row},${col}`;
        removeTileVisual(key);
        editorLayout[row][col] = 0;
        bridgePositions.delete(key);

        if (startPos && startPos.row === row && startPos.col === col) {
            startPos = null;
        }
        if (goalPos && goalPos.row === row && goalPos.col === col) {
            goalPos = null;
        }
    }

    function removeTileVisual(key) {
        const mesh = tiles[key];
        if (!mesh) return;
        editorGroup.remove(mesh);
        delete tiles[key];
    }

    // ── Raycasting ─────────────────────────────────────────────────────────

    function screenToGrid(event) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouseNDC.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseNDC.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouseNDC, camera);
        raycaster.ray.intersectPlane(hitPlane, hitPoint);

        if (!hitPoint) return null;

        const col = Math.round(hitPoint.x);
        const row = Math.round(hitPoint.z);

        if (row < 0 || row >= GRID_ROWS || col < 0 || col >= GRID_COLS) return null;
        return { row, col };
    }

    // ── Event handlers ─────────────────────────────────────────────────────

    function onMouseDown(e) {
        if (e.button !== 0) return;
        mouseDown = true;
        const cell = screenToGrid(e);
        if (cell) placeTile(cell.row, cell.col);
    }

    function onMouseMove(e) {
        if (!mouseDown) return;
        const cell = screenToGrid(e);
        if (cell) placeTile(cell.row, cell.col);
    }

    function onMouseUp() {
        mouseDown = false;
    }

    // ── Public API ─────────────────────────────────────────────────────────

    function enter(keepState = false) {
        if (active) return;
        active = true;

        // Save camera state
        savedCamPos = camera.position.clone();
        savedCamQuat = camera.quaternion.clone();

        // Set editor camera
        camera.clearViewOffset();
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        camera.position.copy(CAMERA_POS);
        camera.lookAt(CAMERA_LOOK);

        // Create editor group
        editorGroup = new THREE.Group();
        scene.add(editorGroup);

        // Build ghost grid (always)
        ghostTiles.length = 0;
        createGhostGrid();

        if (!keepState || editorLayout.length === 0) {
            // Fresh start
            initLayout();
            startPos = null;
            goalPos = null;
            bridgePositions.clear();
            for (const key in tiles) delete tiles[key];
        } else {
            // Re-entering — rebuild visuals from saved state
            for (const key in tiles) delete tiles[key];
            for (let r = 0; r < editorLayout.length; r++) {
                for (let c = 0; c < editorLayout[r].length; c++) {
                    const t = editorLayout[r][c];
                    if (t === 0) continue;
                    const key = `${r},${c}`;
                    let toolName = 'normal';
                    if (t === 2) toolName = 'goal';
                    else if (t === 3) toolName = 'fragile';
                    else if (t === 4) toolName = 'soft_switch';
                    else if (t === 5) toolName = 'heavy_switch';
                    if (bridgePositions.has(key)) toolName = 'bridge';

                    if (startPos && startPos.row === r && startPos.col === c) {
                        placeStart(r, c);
                    } else {
                        const mat = createTileMaterial(toolName);
                        const mesh = new THREE.Mesh(tileGeometry, mat);
                        mesh.position.set(c, TILE_Y, r);
                        mesh.receiveShadow = true;
                        mesh.castShadow = true;
                        editorGroup.add(mesh);
                        tiles[key] = mesh;
                    }
                }
            }
        }

        // Event listeners
        const canvas = renderer.domElement;
        canvas.addEventListener('mousedown', onMouseDown);
        canvas.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    }

    function exit() {
        if (!active) return;
        active = false;
        mouseDown = false;

        // Remove editor visuals (state is preserved in editorLayout/startPos/goalPos/bridgePositions)
        if (editorGroup) {
            scene.remove(editorGroup);
            editorGroup = null;
        }

        for (const key in tiles) delete tiles[key];
        ghostTiles.length = 0;

        // Remove event listeners
        const canvas = renderer.domElement;
        canvas.removeEventListener('mousedown', onMouseDown);
        canvas.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);

        // Restore camera
        if (savedCamPos) camera.position.copy(savedCamPos);
        if (savedCamQuat) camera.quaternion.copy(savedCamQuat);
    }

    function update(time) {
        if (!active) return;

        // Goal tile pulse
        if (goalPos) {
            const key = `${goalPos.row},${goalPos.col}`;
            const mesh = tiles[key];
            if (mesh && mesh.material.emissiveIntensity !== undefined) {
                const pulse = Math.sin(time * 3) * 0.5 + 0.5;
                mesh.material.emissiveIntensity = 0.35 + pulse * 0.25;
            }
        }
    }

    function getLevel() {
        if (!startPos || !goalPos) return null;

        // Build bridge and switch data
        const bridgeKeys = [...bridgePositions];
        const bridges = {};
        for (const key of bridgeKeys) {
            bridges[key] = false; // bridges start hidden
        }

        // Auto-link: every switch targets all bridge tiles
        const switches = {};
        for (let r = 0; r < GRID_ROWS; r++) {
            for (let c = 0; c < GRID_COLS; c++) {
                const t = editorLayout[r][c];
                if (t === 4 || t === 5) {
                    const key = `${r},${c}`;
                    switches[key] = {
                        type: t === 4 ? 'soft' : 'heavy',
                        effect: 'toggle',
                        targets: bridgeKeys,
                    };
                }
            }
        }

        // In the layout, bridge cells should be 0 (empty) since they start hidden
        const layout = editorLayout.map(row => [...row]);
        for (const key of bridgeKeys) {
            const [r, c] = key.split(',').map(Number);
            layout[r][c] = 0;
        }

        return {
            id: 'C',
            name: 'Custom Level',
            par: 99,
            layout,
            startRow: startPos.row,
            startCol: startPos.col,
            switches,
            bridges,
        };
    }

    function setTool(toolName) {
        currentTool = toolName;
    }

    function clear() {
        for (const key in tiles) {
            removeTileVisual(key);
        }
        initLayout();
        startPos = null;
        goalPos = null;
        bridgePositions.clear();
    }

    function isActive() {
        return active;
    }

    return {
        enter, exit, update, getLevel, isActive, setTool, clear,
        hasStart() { return !!startPos; },
        hasGoal() { return !!goalPos; },
    };
}
