import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// Tile types: 0=empty, 1=normal, 2=goal, 3=fragile, 4=soft_switch, 5=heavy_switch, 6=teleport_switch

// ── Tile material configs — MeshPhysicalMaterial + clearcoat ───────────────

const TILE_CONFIGS = {
    normal: {
        color: 0xF0F0F0,          // clean white
        metalness: 0.02,
        roughness: 0.35,
        clearcoat: 0.6,
        clearcoatRoughness: 0.08,
        envMapIntensity: 0.3,
    },
    fragile: {
        color: 0xF0D870,          // warm gold
        metalness: 0,
        roughness: 0.5,
        clearcoat: 0.3,
        clearcoatRoughness: 0.2,
        envMapIntensity: 0.2,
        transparent: true,
        opacity: 1,
    },
    goal: {
        color: 0x40E0D0,          // bright turquoise
        metalness: 0,
        roughness: 0.4,
        clearcoat: 0.5,
        clearcoatRoughness: 0.1,
        emissive: 0x40E0D0,
        emissiveIntensity: 0.3,
        envMapIntensity: 0.25,
    },
    soft_switch: {
        color: 0x4488EE,          // bright blue
        metalness: 0,
        roughness: 0.5,
        clearcoat: 0.4,
        clearcoatRoughness: 0.15,
        envMapIntensity: 0.2,
    },
    heavy_switch: {
        color: 0x9060D0,          // bright purple
        metalness: 0,
        roughness: 0.5,
        clearcoat: 0.4,
        clearcoatRoughness: 0.15,
        envMapIntensity: 0.2,
    },
    teleport_switch: {
        color: 0x20C8B8,          // bright cyan
        metalness: 0,
        roughness: 0.45,
        clearcoat: 0.5,
        clearcoatRoughness: 0.1,
        envMapIntensity: 0.25,
    },
    bridge: {
        color: 0xE8E8E8,          // slightly off-white
        metalness: 0,
        roughness: 0.6,
        clearcoat: 0.3,
        clearcoatRoughness: 0.25,
        envMapIntensity: 0.2,
    },
};

function getMaterialKey(type) {
    switch (type) {
        case 2: return 'goal';
        case 3: return 'fragile';
        case 4: return 'soft_switch';
        case 5: return 'heavy_switch';
        case 6: return 'teleport_switch';
        default: return 'normal';
    }
}

function createTileMaterial(type) {
    const key = getMaterialKey(type);
    const cfg = { ...(TILE_CONFIGS[key] || TILE_CONFIGS.normal) };
    const mat = new THREE.MeshPhysicalMaterial(cfg);

    // Subtle per-tile color variation — breaks uniform grid look
    const hsl = {};
    mat.color.getHSL(hsl);
    hsl.l = Math.max(0.05, Math.min(0.95, hsl.l + (Math.random() - 0.5) * 0.03));
    hsl.h += (Math.random() - 0.5) * 0.01;
    mat.color.setHSL(hsl.h, hsl.s, hsl.l);

    return mat;
}

// ── Grid builder ────────────────────────────────────────────────────────────

export function createGrid(scene, levelData, animate = true) {
    const levelLayout = levelData.layout.map(row => [...row]);
    const startRow = levelData.startRow;
    const startCol = levelData.startCol;
    const switchDefs = levelData.switches || {};
    const bridgeDefs = levelData.bridges || {};

    const bridgeStates = {};
    for (const key in bridgeDefs) {
        bridgeStates[key] = bridgeDefs[key];
    }

    const tileSize = 1.0;
    const tileW = 0.92;
    const tileH = 0.4;

    const geometry = new RoundedBoxGeometry(tileW, tileH, tileW, 2, 0.04);

    // Switch indicator geometry
    const indicatorGeo = {
        soft: new THREE.TorusGeometry(0.22, 0.045, 8, 20),
        heavy: new THREE.BoxGeometry(0.38, 0.07, 0.07),
        teleport: new THREE.TorusGeometry(0.18, 0.035, 8, 20),
    };

    const gridGroup = new THREE.Group();
    const tiles = {};
    let goalTile = null;

    function createTileMesh(row, col, type, startBelow = false) {
        const mat = createTileMaterial(type);
        const tile = new THREE.Mesh(geometry, mat);
        tile.receiveShadow = true;
        tile.castShadow = true;

        const targetY = -tileH / 2;
        tile.position.set(col * tileSize, startBelow ? targetY - 4 : targetY, row * tileSize);

        // Switch indicators — 3D shapes on top
        if (type === 4) {
            const ring = new THREE.Mesh(
                indicatorGeo.soft,
                new THREE.MeshStandardMaterial({
                    color: 0x60a5fa, emissive: 0x3b82f6, emissiveIntensity: 1.0,
                    metalness: 0.7, roughness: 0.15,
                })
            );
            ring.rotation.x = -Math.PI / 2;
            ring.position.y = tileH / 2 + 0.03;
            tile.add(ring);
        } else if (type === 5) {
            const barMat = new THREE.MeshStandardMaterial({
                color: 0xa78bfa, emissive: 0x8b5cf6, emissiveIntensity: 1.0,
                metalness: 0.7, roughness: 0.15,
            });
            const bar1 = new THREE.Mesh(indicatorGeo.heavy, barMat);
            bar1.position.y = tileH / 2 + 0.03;
            bar1.rotation.y = Math.PI / 4;
            const bar2 = new THREE.Mesh(indicatorGeo.heavy, barMat);
            bar2.position.y = tileH / 2 + 0.03;
            bar2.rotation.y = -Math.PI / 4;
            tile.add(bar1, bar2);
        } else if (type === 6) {
            const ring = new THREE.Mesh(
                indicatorGeo.teleport,
                new THREE.MeshStandardMaterial({
                    color: 0x22d3ee, emissive: 0x06b6d4, emissiveIntensity: 1.2,
                    metalness: 0.8, roughness: 0.1,
                })
            );
            ring.rotation.x = -Math.PI / 2;
            ring.position.y = tileH / 2 + 0.03;
            tile.add(ring);

            const ring2 = ring.clone();
            ring2.scale.setScalar(0.65);
            ring2.position.y = tileH / 2 + 0.04;
            tile.add(ring2);
        }

        gridGroup.add(tile);
        tiles[`${row},${col}`] = tile;

        if (type === 2) goalTile = tile;

        // Rise-from-below entry animation
        if (startBelow && animate) {
            const delay = (Math.abs(row - startRow) + Math.abs(col - startCol)) * 50;
            const startTime = performance.now() + delay;
            const dur = 600;
            tile.visible = false;
            function rise() {
                const now = performance.now();
                if (now < startTime) { requestAnimationFrame(rise); return; }
                tile.visible = true;
                const p = Math.min((now - startTime) / dur, 1.0);
                const c1 = 1.70158;
                const c3 = c1 + 1;
                const ease = 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2);
                tile.position.y = (targetY - 4) + ease * 4;
                if (p < 1.0) requestAnimationFrame(rise);
                else tile.position.y = targetY;
            }
            requestAnimationFrame(rise);
        }

        return tile;
    }

    // Build grid from layout
    for (let r = 0; r < levelLayout.length; r++) {
        for (let c = 0; c < levelLayout[r].length; c++) {
            const type = levelLayout[r][c];
            if (type === 0) continue;

            const bridgeKey = `${r},${c}`;
            if (bridgeKey in bridgeDefs) {
                if (bridgeDefs[bridgeKey]) {
                    createBridgeMesh(r, c, animate);
                } else {
                    levelLayout[r][c] = 0;
                }
                continue;
            }

            createTileMesh(r, c, type, animate);
        }
    }

    scene.add(gridGroup);

    // ── Bridge helpers ──

    function createBridgeMesh(row, col, withAnimation = false) {
        const key = `${row},${col}`;
        if (tiles[key]) return;

        const mat = createTileMaterial(1); // bridge uses normal-ish material
        mat.color.set(TILE_CONFIGS.bridge.color);
        mat.emissive = new THREE.Color(TILE_CONFIGS.bridge.emissive);
        mat.emissiveIntensity = TILE_CONFIGS.bridge.emissiveIntensity;

        const tile = new THREE.Mesh(geometry, mat);
        tile.receiveShadow = true;
        tile.castShadow = true;

        const targetY = -tileH / 2;
        tile.position.set(col * tileSize, withAnimation ? targetY - 3 : targetY, row * tileSize);

        gridGroup.add(tile);
        tiles[key] = tile;
        levelLayout[row][col] = 1;
        bridgeStates[key] = true;

        if (withAnimation) {
            const startTime = performance.now();
            function rise() {
                const p = Math.min((performance.now() - startTime) / 400, 1.0);
                const ease = 1 - (1 - p) * (1 - p);
                tile.position.y = (targetY - 3) + ease * 3;
                if (p < 1.0) requestAnimationFrame(rise);
                else tile.position.y = targetY;
            }
            requestAnimationFrame(rise);
        }
    }

    // ── API ──

    function getTileType(row, col) {
        if (row < 0 || row >= levelLayout.length) return 0;
        if (col < 0 || col >= levelLayout[row].length) return 0;
        return levelLayout[row][col];
    }

    function removeTile(row, col) {
        const key = `${row},${col}`;
        const tile = tiles[key];
        if (!tile) return;

        levelLayout[row][col] = 0;
        delete tiles[key];

        const startY = tile.position.y;
        const startTime = performance.now();
        function fall() {
            const p = Math.min((performance.now() - startTime) / 600, 1.0);
            tile.position.y = startY - p * p * 8;
            if (tile.material.transparent) tile.material.opacity = 1 - p;
            if (p >= 1.0) gridGroup.remove(tile);
            else requestAnimationFrame(fall);
        }
        requestAnimationFrame(fall);
    }

    function addBridgeTile(row, col) {
        createBridgeMesh(row, col, true);
    }

    function removeBridgeTile(row, col) {
        const key = `${row},${col}`;
        bridgeStates[key] = false;
        removeTile(row, col);
    }

    function toggleBridges(targetKeys) {
        for (const key of targetKeys) {
            const [r, c] = key.split(',').map(Number);
            if (bridgeStates[key]) {
                removeBridgeTile(r, c);
            } else {
                addBridgeTile(r, c);
            }
        }
    }

    function getSwitchData(row, col) {
        return switchDefs[`${row},${col}`] || null;
    }

    // Animate emissive — only goal tile pulses strongly
    function updateTime(time) {
        if (goalTile) {
            const pulse = Math.sin(time * 3) * 0.5 + 0.5;
            goalTile.material.emissiveIntensity = 0.35 + pulse * 0.25;
        }
    }

    function restoreLayout(savedLayout, savedBridgeStates) {
        for (const key in tiles) {
            const [r, c] = key.split(',').map(Number);
            if (savedLayout[r][c] === 0) {
                gridGroup.remove(tiles[key]);
                delete tiles[key];
            }
        }
        for (let r = 0; r < savedLayout.length; r++) {
            for (let c = 0; c < savedLayout[r].length; c++) {
                const key = `${r},${c}`;
                if (savedLayout[r][c] !== 0 && !tiles[key]) {
                    const isBridge = key in bridgeDefs;
                    if (isBridge) {
                        createBridgeMesh(r, c, false);
                    } else {
                        createTileMesh(r, c, levelData.layout[r][c], false);
                    }
                }
            }
        }
        for (let r = 0; r < savedLayout.length; r++) {
            for (let c = 0; c < savedLayout[r].length; c++) {
                levelLayout[r][c] = savedLayout[r][c];
            }
        }
        for (const key in savedBridgeStates) {
            bridgeStates[key] = savedBridgeStates[key];
        }
    }

    function fallAway() {
        const goalX = goalTile ? goalTile.position.x : 0;
        const goalZ = goalTile ? goalTile.position.z : 0;

        Object.entries(tiles).forEach(([key, tile]) => {
            const dist = Math.abs(tile.position.x - goalX) + Math.abs(tile.position.z - goalZ);
            const delay = dist * 70 + Math.random() * 50;
            const startTime = performance.now() + delay;
            const startY = tile.position.y;
            const rotX = (Math.random() - 0.5) * 0.08;
            const rotZ = (Math.random() - 0.5) * 0.08;
            // Slight drift outward from center
            const driftX = (tile.position.x - goalX) * 0.15;
            const driftZ = (tile.position.z - goalZ) * 0.15;

            function step() {
                const now = performance.now();
                if (now < startTime) { requestAnimationFrame(step); return; }
                const t = Math.min((now - startTime) / 1800, 1);
                const ease = t * t * t; // slow start, accelerates late
                tile.position.y = startY - ease * 40;
                tile.position.x += driftX * 0.003;
                tile.position.z += driftZ * 0.003;
                tile.rotation.x += rotX * 0.02;
                tile.rotation.z += rotZ * 0.02;
                // Fade out in the last third
                if (t > 0.6) {
                    tile.material.transparent = true;
                    tile.material.opacity = 1 - (t - 0.6) / 0.4;
                }
                if (t < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        });
    }

    return {
        gridGroup, levelLayout, tiles, goalTile, bridgeStates,
        getTileType, removeTile, addBridgeTile, removeBridgeTile,
        toggleBridges, getSwitchData, restoreLayout, updateTime,
        fallAway, startRow, startCol,
    };
}
