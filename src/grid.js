import * as THREE from 'three';

export function createGrid(scene) {
    // 2D Array layout (1 = tile, 0 = empty)
    const levelLayout = [
        [1, 1, 1, 1, 1, 0, 0],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1]
    ];

    const blockDimensions = 1.0;
    const tileHeight = 0.5;

    // Use a standard material for the grid that receives lights
    const geometry = new THREE.BoxGeometry(blockDimensions, tileHeight, blockDimensions);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x4a5a6a, 
        roughness: 0.5,
        metalness: 0.2
    });

    const gridGroup = new THREE.Group();

    for (let r = 0; r < levelLayout.length; r++) {
        for (let c = 0; c < levelLayout[r].length; c++) {
            if (levelLayout[r][c] === 1) {
                const tile = new THREE.Mesh(geometry, material);
                tile.receiveShadow = true;
                // Position top of tile at Y=0
                tile.position.set(c * blockDimensions, -tileHeight / 2, r * blockDimensions);
                gridGroup.add(tile);
            }
        }
    }

    scene.add(gridGroup);
    return { gridGroup, levelLayout };
}
