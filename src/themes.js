// Per-level visual themes — sky gradient, fog, tile/block/sparkle colors.
// sky: [top, upperMid, lowerMid, bottom] CSS color strings for the gradient.

const GOAL_COLOR = 0x40E0D0;

export const THEMES = [
    // 1. First Steps — Soft lavender/pink (welcoming)
    {
        sky: ['#A8C4E0', '#C8D0E8', '#E0B8D0', '#D890A0'],
        fog: 0xD0C8E0,
        tiles: 0xF0F0F0,
        goal: GOAL_COLOR,
        block: 0xE84060,
        sparkle: '#ffe8b0',
    },
    // 2. Over the Edge — Deep ocean
    {
        sky: ['#182840', '#2B5478', '#4890B8', '#80C8D8'],
        fog: 0x2A4868,
        tiles: 0xD0E0F0,
        goal: GOAL_COLOR,
        block: 0xF06848,
        sparkle: '#80C0F0',
    },
    // 3. Fragile Ground — Golden sunset
    {
        sky: ['#B87030', '#D09848', '#E0B868', '#F0D890'],
        fog: 0xC8A860,
        tiles: 0xE8D8C0,
        goal: GOAL_COLOR,
        block: 0xD06828,
        sparkle: '#FFD870',
    },
    // 4. Open Sesame — Jade forest
    {
        sky: ['#183828', '#285840', '#48A070', '#88D098'],
        fog: 0x386048,
        tiles: 0xD0E8D0,
        goal: GOAL_COLOR,
        block: 0xC83870,
        sparkle: '#90F0A0',
    },
    // 5. Heavy Duty — Twilight purple
    {
        sky: ['#181030', '#382068', '#6848A0', '#A878C0'],
        fog: 0x302048,
        tiles: 0xD8D0E8,
        goal: GOAL_COLOR,
        block: 0x3868E0,
        sparkle: '#C0A0F0',
    },
    // 6. Split Decision — Coral sunrise
    {
        sky: ['#E89070', '#D87858', '#C86848', '#B85840'],
        fog: 0xC88868,
        tiles: 0xF0E8E0,
        goal: GOAL_COLOR,
        block: 0xE84880,
        sparkle: '#FFB898',
    },
    // 7. Twin Bridges — Arctic ice
    {
        sky: ['#D0E8F8', '#A8D0E8', '#78A8C8', '#5888A8'],
        fog: 0x98C0D8,
        tiles: 0xE8F0F8,
        goal: GOAL_COLOR,
        block: 0xE85828,
        sparkle: '#C8E0F8',
    },
    // 8. The Gauntlet — Crimson dark
    {
        sky: ['#180810', '#481820', '#882838', '#A04048'],
        fog: 0x281018,
        tiles: 0xB0A8A0,
        goal: GOAL_COLOR,
        block: 0xF0E8E0,
        sparkle: '#F08080',
    },
];
