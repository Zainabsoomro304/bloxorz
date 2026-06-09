// BFS auto-solver for Bloxorz.
// Returns the optimal (shortest) sequence of moves, or null if unsolvable.

const MOVES = [
    { dx: 1,  dz: 0 },   // right
    { dx: -1, dz: 0 },   // left
    { dx: 0,  dz: 1 },   // down
    { dx: 0,  dz: -1 },  // up
];

/**
 * Solve a Bloxorz level using breadth-first search.
 *
 * @param {number[][]} layout  - 2-D grid of tile types (0=empty,1=normal,2=goal,3=fragile,4/5/6=switches)
 * @param {number} startRow    - starting row (block stands here)
 * @param {number} startCol    - starting column
 * @param {Object} switches    - switch definitions keyed by "row,col"
 * @param {Object} bridges     - initial bridge states keyed by "row,col" (true = present)
 * @param {Object} [options]
 * @param {number} [options.startX=startCol] - block center x; use this for non-standing starts
 * @param {number} [options.startZ=startRow] - block center z; use this for non-standing starts
 * @param {'standing'|'lying_x'|'lying_z'} [options.startOrientation='standing']
 * @returns {Array<{dx:number, dz:number}>|null} move sequence, or null if unsolvable
 */
export function solveBFS(layout, startRow, startCol, switches, bridges, options = {}) {
    // Bail out on teleport switches — not supported
    for (const key in switches) {
        if (switches[key].type === 'teleport') return null;
    }

    // Build ordered list of bridge keys so we can pack their state into a bitmask.
    const bridgeKeys = Object.keys(bridges).sort();
    const bridgeKeyIndex = {};
    for (let i = 0; i < bridgeKeys.length; i++) {
        bridgeKeyIndex[bridgeKeys[i]] = i;
    }

    // Compute initial bridge bitmask.
    let startBridgeMask = 0;
    for (let i = 0; i < bridgeKeys.length; i++) {
        if (bridges[bridgeKeys[i]]) startBridgeMask |= (1 << i);
    }

    // ── helpers ──────────────────────────────────────────────────────────────

    // Use x10 integer encoding for positions so 1.5 -> 15, avoiding floats.
    function encodePos(v) {
        return Math.round(v * 10);
    }

    function stateKey(x10, z10, orient, bridgeMask) {
        return x10 + '|' + z10 + '|' + orient + '|' + bridgeMask;
    }

    // Returns the effective tile type at (row, col) given a bridge bitmask and
    // a snapshot of the layout.  Bridge tiles are 0 or 1 depending on the mask.
    function tileAt(row, col, bMask) {
        if (row < 0 || row >= layout.length) return 0;
        if (col < 0 || col >= layout[row].length) return 0;
        const key = row + ',' + col;
        if (key in bridgeKeyIndex) {
            return (bMask & (1 << bridgeKeyIndex[key])) ? 1 : 0;
        }
        return layout[row][col];
    }

    // Occupied cells for a given position + orientation (position stored as floats).
    function occupiedCells(x, z, orient) {
        if (orient === 'standing') {
            return [{ row: Math.round(z), col: Math.round(x) }];
        } else if (orient === 'lying_x') {
            return [
                { row: Math.round(z), col: Math.round(x - 0.5) },
                { row: Math.round(z), col: Math.round(x + 0.5) },
            ];
        } else {
            // lying_z
            return [
                { row: Math.round(z - 0.5), col: Math.round(x) },
                { row: Math.round(z + 0.5), col: Math.round(x) },
            ];
        }
    }

    // Apply a single move and return the new state, or null if invalid.
    // Position is kept as float (x, z).  Orientation as string.
    function applyMove(x, z, orient, dx, dz, bMask) {
        let nx = x, nz = z, no = orient;

        if (orient === 'standing') {
            nx += dx * 1.5;
            nz += dz * 1.5;
            no = (dx !== 0) ? 'lying_x' : 'lying_z';
        } else if (orient === 'lying_x') {
            if (dx !== 0) {
                nx += dx * 1.5;
                no = 'standing';
            } else {
                nz += dz * 1.0;
            }
        } else {
            // lying_z
            if (dz !== 0) {
                nz += dz * 1.5;
                no = 'standing';
            } else {
                nx += dx * 1.0;
            }
        }

        const cells = occupiedCells(nx, nz, no);

        // All cells must be non-empty.
        for (const c of cells) {
            if (tileAt(c.row, c.col, bMask) === 0) return null;
        }

        // Standing on fragile (type 3) — block falls through, treat as invalid.
        if (no === 'standing') {
            const cell = cells[0];
            if (tileAt(cell.row, cell.col, bMask) === 3) return null;
        }

        // Process switches — update bridge mask.
        let newMask = bMask;

        // Soft switches fire on any occupied cell.
        for (const cell of cells) {
            const sw = switches[cell.row + ',' + cell.col];
            if (sw && sw.type === 'soft' && sw.targets) {
                newMask = toggleTargets(newMask, sw.targets);
            }
        }

        // Heavy switches fire only when standing.
        if (no === 'standing') {
            const cell = cells[0];
            const sw = switches[cell.row + ',' + cell.col];
            if (sw && sw.type === 'heavy' && sw.targets) {
                newMask = toggleTargets(newMask, sw.targets);
            }
        }

        // Win check: standing on goal tile (type 2).
        let won = false;
        if (no === 'standing') {
            const cell = cells[0];
            if (tileAt(cell.row, cell.col, newMask) === 2) {
                won = true;
            }
        }

        return { x: nx, z: nz, orient: no, bridgeMask: newMask, won };
    }

    function toggleTargets(mask, targets) {
        for (const key of targets) {
            const idx = bridgeKeyIndex[key];
            if (idx !== undefined) {
                mask ^= (1 << idx);
            }
        }
        return mask;
    }

    // ── BFS ──────────────────────────────────────────────────────────────────

    const startX = options.startX ?? startCol;
    const startZ = options.startZ ?? startRow;
    const startOrient = options.startOrientation || 'standing';

    const startKey = stateKey(
        encodePos(startX), encodePos(startZ), startOrient, startBridgeMask
    );

    const visited = new Set();
    visited.add(startKey);

    // Queue entries carry their own parent index (into the queue) and the move
    // that led to them, so we can reconstruct the path by walking parent links.
    const queue = [
        { x: startX, z: startZ, orient: startOrient, bMask: startBridgeMask, parentIdx: -1, move: null },
    ];
    let head = 0;

    while (head < queue.length) {
        const cur = queue[head];
        const curIdx = head;
        head++;

        for (const move of MOVES) {
            const result = applyMove(cur.x, cur.z, cur.orient, move.dx, move.dz, cur.bMask);
            if (!result) continue;

            const key = stateKey(
                encodePos(result.x), encodePos(result.z), result.orient, result.bridgeMask
            );

            if (result.won) {
                // Reconstruct path from curIdx back to start, then append this move.
                return reconstructPath(queue, curIdx, move);
            }

            if (visited.has(key)) continue;
            visited.add(key);

            queue.push({
                x: result.x,
                z: result.z,
                orient: result.orient,
                bMask: result.bridgeMask,
                parentIdx: curIdx,
                move,
            });
        }
    }

    return null; // unsolvable
}

function reconstructPath(queue, parentIdx, lastMove) {
    const path = [lastMove];
    let idx = parentIdx;
    while (idx > 0) {
        path.push(queue[idx].move);
        idx = queue[idx].parentIdx;
    }
    path.reverse();
    return path;
}
