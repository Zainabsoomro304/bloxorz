// Tile types: 0=empty, 1=normal, 2=goal, 3=fragile, 4=soft_switch, 5=heavy_switch, 6=teleport_switch

export const LEVELS = [
    // ── Level 1: First Steps ─────────────────────────
    {
        id: 1,
        name: 'First Steps',
        par: 8,
        startRow: 0,
        startCol: 0,
        layout: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 2],
        ],
        switches: {},
        bridges: {},
    },

    // ── Level 2: Over the Edge ───────────────────────
    {
        id: 2,
        name: 'Over the Edge',
        par: 7,
        startRow: 0,
        startCol: 0,
        layout: [
            [1, 1, 1, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1],
            [0, 0, 0, 1, 1, 2],
        ],
        switches: {},
        bridges: {},
    },

    // ── Level 3: Fragile Ground ──────────────────────
    {
        id: 3,
        name: 'Fragile Ground',
        par: 6,
        startRow: 0,
        startCol: 2,
        layout: [
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [0, 0, 3, 3, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 1, 2, 0, 0],
        ],
        switches: {},
        bridges: {},
    },

    // ── Level 4: Open Sesame ─────────────────────────
    {
        id: 4,
        name: 'Open Sesame',
        par: 6,
        startRow: 0,
        startCol: 0,
        layout: [
            [1, 1, 4, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0],
            [0, 0, 1, 2, 0],
        ],
        switches: {
            '0,2': { type: 'soft', effect: 'toggle', targets: ['2,1', '2,2', '2,3'] },
        },
        bridges: { '2,1': false, '2,2': false, '2,3': false },
    },

    // ── Level 5: Heavy Duty ──────────────────────────
    {
        id: 5,
        name: 'Heavy Duty',
        par: 12,
        startRow: 0,
        startCol: 0,
        layout: [
            [1, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 5, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 2, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 0],
        ],
        switches: {
            '2,3': { type: 'heavy', effect: 'toggle', targets: ['4,3', '4,4'] },
        },
        bridges: { '4,3': false, '4,4': false },
    },

    // ── Level 6: Split Decision ──────────────────────
    {
        id: 6,
        name: 'Split Decision',
        par: 8,
        startRow: 0,
        startCol: 0,
        layout: [
            [1, 1, 1, 6, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [1, 4, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 2, 1, 1],
            [1, 1, 1, 1, 1, 1],
        ],
        switches: {
            '0,3': { type: 'teleport', teleportTo: [[3, 0], [3, 4]] },
            '3,1': { type: 'soft', effect: 'toggle', targets: ['4,2', '4,3', '4,4'] },
        },
        bridges: { '4,2': false, '4,3': false, '4,4': false },
    },

    // ── Level 7: Twin Bridges ────────────────────────
    {
        id: 7,
        name: 'Twin Bridges',
        par: 13,
        startRow: 0,
        startCol: 2,
        layout: [
            [0, 1, 1, 1, 1, 0],
            [0, 1, 4, 1, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1],
            [1, 1, 1, 5, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1],
            [0, 0, 1, 2, 1, 1],
            [0, 0, 1, 1, 1, 1],
        ],
        switches: {
            '1,2': { type: 'soft', effect: 'toggle', targets: ['3,2', '3,3'] },
            '5,3': { type: 'heavy', effect: 'toggle', targets: ['7,3', '7,4'] },
        },
        bridges: { '3,2': false, '3,3': false, '7,3': false, '7,4': false },
    },

    // ── Level 8: The Gauntlet ────────────────────────
    {
        id: 8,
        name: 'The Gauntlet',
        par: 15,
        startRow: 0,
        startCol: 1,
        layout: [
            [0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 3, 1, 0, 0],
            [0, 1, 1, 1, 4, 0, 0],
            [0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 3, 0],
            [0, 0, 1, 5, 1, 3, 0],
            [0, 0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1],
            [0, 0, 0, 1, 1, 2, 1],
            [0, 0, 0, 1, 1, 1, 1],
        ],
        switches: {
            '2,4': { type: 'soft', effect: 'toggle', targets: ['4,2', '4,3'] },
            '6,3': { type: 'heavy', effect: 'toggle', targets: ['8,4', '8,5'] },
        },
        bridges: { '4,2': false, '4,3': false, '8,4': false, '8,5': false },
    },
];
