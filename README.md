# Bloxorz 3D

Computer Graphics course project: a browser-based 3D Bloxorz implementation built with Three.js, WebGL, Vite, and modular JavaScript.

## Run

Prerequisite: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

Useful checks:

```bash
npm run build
npm run check:levels
npm audit
```

## Controls

- Arrow keys or WASD: roll/move
- Z: undo regular block moves
- R: restart level
- H: show solver hint where supported
- Space: switch active cube in split mode
- Esc: return to menu/level select

## Implemented Features

- Eight verified levels with optimal par values.
- Level progression, completion state, and best moves stored in `localStorage`.
- Standing, lying-x, and lying-z block states with quaternion rolling animation.
- Fragile tiles, soft switches, heavy switches, bridges, teleport/split mode, and cube merge.
- BFS hint solver for normal/switch levels, including hints from non-standing orientations.
- Level editor with normal, fragile, goal, start, soft switch, heavy switch, bridge, and eraser tools.
- Third-person camera and touch swipe controls.
- Procedural sound effects, dust/shatter/celebration particles, screen shake, animated menus, and per-level themes.
- PBR-style materials, directional/hemisphere/ambient lighting, shadows, fog, bloom, vignette, SMAA, and optional idle path tracing with raster fallback.

## Code Map

- `src/main.js`: game lifecycle, UI states, scene transitions, callbacks, renderer loop.
- `src/controls.js`: keyboard/touch input, block rolling, cube movement, switches, fall/win animations.
- `src/grid.js`: tile/bridge mesh generation, layout state, switch data, highlighting.
- `src/levels.js`: official level definitions.
- `src/solver.js`: BFS solver for block states and bridges.
- `src/editor.js`: custom level editor and raycast placement.
- `src/scene.js`, `src/camera.js`, `src/lighting.js`, `src/themes.js`: rendering setup and visual style.
- `src/particles.js`, `src/sounds.js`, `src/shake.js`: feedback systems.

## Notes For Submission

Do not submit `node_modules/` or `dist/`; they are generated. The lockfile is included so dependencies are reproducible with `npm install`.

`npm run check:levels` verifies that each official level has a shortest solution matching its `par` value, including the split-cube level.
