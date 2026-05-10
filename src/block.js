import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export function createBlock(scene, startCol = 0, startRow = 0) {
    const geometry = new RoundedBoxGeometry(0.95, 1.95, 0.95, 2, 0.06);

    const material = new THREE.MeshPhysicalMaterial({
        color: 0xE84060,
        metalness: 0.02,
        roughness: 0.3,
        clearcoat: 0.7,
        clearcoatRoughness: 0.06,
        envMapIntensity: 0.35,
    });

    const block = new THREE.Mesh(geometry, material);
    block.castShadow = true;
    block.position.set(startCol, 1, startRow);

    scene.add(block);

    const api = {
        mesh: block,
        state: {
            orientation: 'standing',
            isAnimating: false,
            isFalling: false,
        },
        update(time) {
            // Subtle breathing
            const scale = 1.0 + 0.005 * Math.sin(time * 2.5);
            block.scale.setScalar(scale);
        },
    };

    return api;
}

// 1x1x1 cube for split/teleport mode
export function createCube(scene, col, row, colorHex = 0xf97316) {
    const geometry = new RoundedBoxGeometry(0.82, 0.82, 0.82, 2, 0.06);

    const material = new THREE.MeshPhysicalMaterial({
        color: colorHex,
        metalness: 0,
        roughness: 0.5,
        clearcoat: 0.35,
        clearcoatRoughness: 0.2,
        envMapIntensity: 0.2,
    });

    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.position.set(col, 0.41, row);

    scene.add(cube);

    return {
        mesh: cube,
        material,
        update(time, isActive) {
            // Active cube pulses slightly brighter
            const scale = isActive ? 1.0 + 0.008 * Math.sin(time * 4) : 1.0;
            cube.scale.setScalar(scale);
        },
    };
}

// Quaternion helpers for setting block orientation after merge
export function getOrientationQuaternion(orientation) {
    const q = new THREE.Quaternion();
    if (orientation === 'lying_x') {
        q.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2);
    } else if (orientation === 'lying_z') {
        q.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    }
    return q;
}

export function getBlockYForOrientation(orientation) {
    return orientation === 'standing' ? 1 : 0.5;
}
