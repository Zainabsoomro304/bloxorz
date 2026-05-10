import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// ── Constants ──────────────────────────────────────────────────────────────

const GRID_ROWS = 14;
const GRID_COLS = 10;
const TILE_W = 0.92;
const TILE_H = 0.4;
const TILE_Y = -TILE_H / 2;

const TOOL_TYPES = { normal: 1, goal: 2, fragile: 3 };

const TILE_COLORS = {
    normal:  0xF0F0F0,
    fragile: 0xF0D870,
    goal:    0x40E0D0,
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
    const ghostTiles = [];   // array of ghost plane meshes
    let editorGroup = null;

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

        // Enforce single goal
        if (currentTool === 'goal' && goalPos) {
            if (goalPos.row === row && goalPos.col === col) return;
            removeTile(goalPos.row, goalPos.col);
        }

        // Remove existing tile at this cell
        if (tiles[key]) removeTileVisual(key);

        // Update layout
        const type = TOOL_TYPES[currentTool] || 1;
        editorLayout[row][col] = type;

        if (currentTool === 'goal') {
            goalPos = { row, col };
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

    function enter() {
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

        // Init state
        initLayout();
        startPos = null;
        goalPos = null;
        for (const key in tiles) delete tiles[key];
        ghostTiles.length = 0;

        // Build ghost grid
        createGhostGrid();

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

        // Remove editor visuals
        if (editorGroup) {
            scene.remove(editorGroup);
            editorGroup = null;
        }

        // Clear references
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

        // Trim layout to bounding box of non-zero cells
        return {
            id: 'C',
            name: 'Custom Level',
            par: 99,
            layout: editorLayout.map(row => [...row]),
            startRow: startPos.row,
            startCol: startPos.col,
            switches: {},
            bridges: {},
        };
    }

    function setTool(toolName) {
        currentTool = toolName;
    }

    function clear() {
        // Remove all placed tile meshes
        for (const key in tiles) {
            removeTileVisual(key);
        }

        initLayout();
        startPos = null;
        goalPos = null;
    }

    function isActive() {
        return active;
    }

    return { enter, exit, update, getLevel, isActive, setTool, clear };
}
