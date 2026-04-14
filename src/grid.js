import * as THREE from 'three';

// Tile types: 0 = empty, 1 = normal, 2 = goal, 3 = fragile
const LEVEL_DATA = {
    startRow: 0,
    startCol: 0,
    layout: [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [0, 0, 3, 1, 1, 0],
        [0, 0, 1, 1, 2, 0],
    ],
};

export function createGrid(scene) {
    // Deep copy layout so we can modify at runtime (fragile tiles)
    const levelLayout = LEVEL_DATA.layout.map(row => [...row]);
    const startRow = LEVEL_DATA.startRow;
    const startCol = LEVEL_DATA.startCol;

    const tileSize = 1.0;
    const tilePad = 0.93;
    const tileHeight = 0.4;

    const geometry = new THREE.BoxGeometry(tilePad, tileHeight, tilePad);
    const edgeGeo = new THREE.EdgesGeometry(geometry);

    // PBR materials — bright, high-contrast palette
    const materials = {
        normal: new THREE.MeshStandardMaterial({
            color: 0xcdd5e0, roughness: 0.45, metalness: 0.15
        }),
        fragile: new THREE.MeshStandardMaterial({
            color: 0xf59e0b, roughness: 0.4, metalness: 0.1,
            transparent: true, opacity: 1.0,
            emissive: 0xf59e0b, emissiveIntensity: 0.15
        }),
        goal: new THREE.MeshStandardMaterial({
            color: 0x10b981, roughness: 0.3, metalness: 0.3,
            emissive: 0x10b981, emissiveIntensity: 0.4
        }),
    };

    // Subtle edge lines for tile definition
    const edgeMaterials = {
        normal: new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 }),
        fragile: new THREE.LineBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.4 }),
        goal: new THREE.LineBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.5 }),
    };

    const gridGroup = new THREE.Group();
    const tiles = {};
    let goalTile = null;

    for (let r = 0; r < levelLayout.length; r++) {
        for (let c = 0; c < levelLayout[r].length; c++) {
            const type = levelLayout[r][c];
            if (type === 0) continue;

            let mat, edgeMat;
            if (type === 2) { mat = materials.goal; edgeMat = edgeMaterials.goal; }
            else if (type === 3) { mat = materials.fragile; edgeMat = edgeMaterials.fragile; }
            else { mat = materials.normal; edgeMat = edgeMaterials.normal; }

            const tile = new THREE.Mesh(geometry, mat.clone());
            tile.receiveShadow = true;
            tile.position.set(c * tileSize, -tileHeight / 2, r * tileSize);

            // Edge wireframe overlay
            const edges = new THREE.LineSegments(edgeGeo, edgeMat);
            tile.add(edges);

            gridGroup.add(tile);
            tiles[`${r},${c}`] = tile;

            if (type === 2) goalTile = tile;
        }
    }

    scene.add(gridGroup);

    function getTileType(row, col) {
        if (row < 0 || row >= levelLayout.length) return 0;
        if (col < 0 || col >= levelLayout[row].length) return 0;
        return levelLayout[row][col];
    }

    function removeTile(row, col) {
        const key = `${row},${col}`;
        const tile = tiles[key];
        if (tile) {
            levelLayout[row][col] = 0;
            delete tiles[key];

            // Animate tile falling away
            const startY = tile.position.y;
            const startTime = performance.now();

            function fall() {
                const p = Math.min((performance.now() - startTime) / 600, 1.0);
                tile.position.y = startY - p * p * 8;
                tile.material.opacity = 1 - p;

                if (p >= 1.0) {
                    gridGroup.remove(tile);
                } else {
                    requestAnimationFrame(fall);
                }
            }
            requestAnimationFrame(fall);
        }
    }

    return {
        gridGroup, levelLayout, tiles, goalTile,
        getTileType, removeTile,
        startRow, startCol
    };
}
