import { LEVELS } from '../src/levels.js';
import { solveBFS } from '../src/solver.js';

const MOVES = [
    { dx: 1, dz: 0, name: 'R' },
    { dx: -1, dz: 0, name: 'L' },
    { dx: 0, dz: 1, name: 'D' },
    { dx: 0, dz: -1, name: 'U' },
];

function solveWithSplit(level) {
    const bridgeKeys = Object.keys(level.bridges || {}).sort();
    const bridgeIndex = Object.fromEntries(bridgeKeys.map((key, index) => [key, index]));

    let startMask = 0;
    bridgeKeys.forEach((key, index) => {
        if (level.bridges[key]) startMask |= (1 << index);
    });

    function tileAt(row, col, mask) {
        if (row < 0 || row >= level.layout.length) return 0;
        if (col < 0 || col >= level.layout[row].length) return 0;
        const key = `${row},${col}`;
        if (key in bridgeIndex) return (mask & (1 << bridgeIndex[key])) ? 1 : 0;
        return level.layout[row][col];
    }

    function toggle(mask, targets = []) {
        for (const key of targets) {
            const index = bridgeIndex[key];
            if (index !== undefined) mask ^= (1 << index);
        }
        return mask;
    }

    function occupiedCells(x, z, orientation) {
        if (orientation === 'standing') return [{ row: Math.round(z), col: Math.round(x) }];
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

    function moveBlock(state, move) {
        let x = state.x;
        let z = state.z;
        let orientation = state.orientation;

        if (orientation === 'standing') {
            x += move.dx * 1.5;
            z += move.dz * 1.5;
            orientation = move.dx !== 0 ? 'lying_x' : 'lying_z';
        } else if (orientation === 'lying_x') {
            if (move.dx !== 0) {
                x += move.dx * 1.5;
                orientation = 'standing';
            } else {
                z += move.dz;
            }
        } else if (move.dz !== 0) {
            z += move.dz * 1.5;
            orientation = 'standing';
        } else {
            x += move.dx;
        }

        const cells = occupiedCells(x, z, orientation);
        if (!cells.every(cell => tileAt(cell.row, cell.col, state.mask) !== 0)) return null;

        if (orientation === 'standing') {
            const cell = cells[0];
            if (tileAt(cell.row, cell.col, state.mask) === 3) return null;
        }

        let mask = state.mask;
        for (const cell of cells) {
            const sw = level.switches?.[`${cell.row},${cell.col}`];
            if (sw?.type === 'soft') mask = toggle(mask, sw.targets);
        }

        if (orientation === 'standing') {
            const cell = cells[0];
            const sw = level.switches?.[`${cell.row},${cell.col}`];
            if (sw?.type === 'heavy') mask = toggle(mask, sw.targets);
            if (sw?.type === 'teleport') {
                return {
                    mode: 'split',
                    cubes: sw.teleportTo.map(([row, col]) => ({ row, col })),
                    activeCubeIndex: 0,
                    mask,
                };
            }
            if (tileAt(cell.row, cell.col, mask) === 2) return { mode: 'won' };
        }

        return { mode: 'block', x, z, orientation, mask };
    }

    function stateKey(state) {
        if (state.mode === 'block') {
            return `b|${Math.round(state.x * 10)}|${Math.round(state.z * 10)}|${state.orientation}|${state.mask}`;
        }
        return `s|${state.cubes[0].row},${state.cubes[0].col}|${state.cubes[1].row},${state.cubes[1].col}|${state.activeCubeIndex}|${state.mask}`;
    }

    const start = {
        mode: 'block',
        x: level.startCol,
        z: level.startRow,
        orientation: 'standing',
        mask: startMask,
    };

    const queue = [{ ...start, parentIndex: -1, move: null }];
    const visited = new Set([stateKey(start)]);

    for (let head = 0; head < queue.length; head++) {
        const state = queue[head];
        const successors = [];

        if (state.mode === 'block') {
            for (const move of MOVES) {
                const next = moveBlock(state, move);
                if (next) successors.push([next, move.name]);
            }
        } else {
            const switched = {
                mode: 'split',
                cubes: state.cubes.map(cube => ({ ...cube })),
                activeCubeIndex: state.activeCubeIndex === 0 ? 1 : 0,
                mask: state.mask,
            };
            successors.push([switched, null]);

            for (const move of MOVES) {
                const cubes = state.cubes.map(cube => ({ ...cube }));
                const cube = cubes[state.activeCubeIndex];
                const targetRow = cube.row + move.dz;
                const targetCol = cube.col + move.dx;

                if (tileAt(targetRow, targetCol, state.mask) === 0) continue;

                const other = cubes[state.activeCubeIndex === 0 ? 1 : 0];
                if (targetRow === other.row && targetCol === other.col) continue;

                cube.row = targetRow;
                cube.col = targetCol;

                let mask = state.mask;
                const sw = level.switches?.[`${targetRow},${targetCol}`];
                if (sw?.type === 'soft') mask = toggle(mask, sw.targets);

                const rowDelta = Math.abs(cubes[0].row - cubes[1].row);
                const colDelta = Math.abs(cubes[0].col - cubes[1].col);

                if ((rowDelta === 1 && colDelta === 0) || (rowDelta === 0 && colDelta === 1)) {
                    const [a, b] = cubes;
                    successors.push([{
                        mode: 'block',
                        x: a.row === b.row ? (a.col + b.col) / 2 : a.col,
                        z: a.row === b.row ? a.row : (a.row + b.row) / 2,
                        orientation: a.row === b.row ? 'lying_x' : 'lying_z',
                        mask,
                    }, move.name]);
                } else {
                    successors.push([{ mode: 'split', cubes, activeCubeIndex: state.activeCubeIndex, mask }, move.name]);
                }
            }
        }

        for (const [next, move] of successors) {
            if (next.mode === 'won') return buildPath(queue, head, move);

            const key = stateKey(next);
            if (visited.has(key)) continue;

            visited.add(key);
            queue.push({ ...next, parentIndex: head, move });
        }
    }

    return null;
}

function buildPath(queue, parentIndex, lastMove) {
    const path = [];
    if (lastMove) path.push(lastMove);

    let index = parentIndex;
    while (index > 0) {
        if (queue[index].move) path.push(queue[index].move);
        index = queue[index].parentIndex;
    }

    path.reverse();
    return path;
}

let failed = false;

for (const level of LEVELS) {
    const hasTeleport = Object.values(level.switches || {}).some(sw => sw.type === 'teleport');
    const solution = hasTeleport
        ? solveWithSplit(level)
        : solveBFS(level.layout.map(row => [...row]), level.startRow, level.startCol, level.switches || {}, level.bridges || {});

    if (!solution) {
        console.error(`Level ${level.id} (${level.name}) has no verified solution.`);
        failed = true;
        continue;
    }

    if (solution.length !== level.par) {
        console.error(`Level ${level.id} (${level.name}) par is ${level.par}, but verified shortest path is ${solution.length}.`);
        failed = true;
        continue;
    }

    console.log(`Level ${level.id} (${level.name}): ${solution.length} moves`);
}

if (failed) process.exit(1);
