# Presentation And Report Notes

## Five-Minute Presentation Flow

1. **Project overview (20s)**  
   Bloxorz 3D is an interactive WebGL puzzle game. The player rolls a rectangular block across a tile mesh and solves levels with fragile tiles, switches, bridges, and split-cube teleport mechanics.

2. **Demo first (60-90s)**  
   Show Level 1 movement, undo/restart, hint, then jump to a switch/bridge level and the split level. Mention that official levels are verified by `npm run check:levels`.

3. **Graphics pipeline connection (45s)**  
   The app creates geometric meshes in JavaScript, sends them through Three.js/WebGL, and the GPU rasterizes them into the frame buffer. This maps to the lecture pipeline: geometry, transformation, projection, rasterization, fragment shading, frame buffer.

4. **Transformations and animation (45s)**  
   The block state is discrete (`standing`, `lying_x`, `lying_z`), but the visual roll is continuous. Position uses LERP; orientation uses quaternions and SLERP-like interpolation to avoid Euler-angle instability.

5. **Viewing and interaction (45s)**  
   The game uses a perspective camera with smooth third-person following. Input is event-driven: keyboard, touch, and editor raycasting.

6. **Lighting/materials/effects (60s)**  
   Tiles and blocks use Three.js physical materials: roughness, metalness, clearcoat, emissive goal tiles, directional shadows, fog, bloom, vignette, and anti-aliasing. This connects to local illumination, material properties, diffuse/specular behavior, and visibility/shadow concepts from the shading lectures.

7. **Advanced rendering and engineering (30s)**  
   The idle renderer attempts path tracing for higher-quality settled views and falls back to the raster/postprocessing pipeline when unsupported. Game logic is modular, persistent progress is stored in `localStorage`, and level correctness is checked by a solver script.

## Lecture Connections

- **Graphics systems / frame buffer:** the browser canvas is the display surface; WebGL renders into a pixel buffer shown every frame.
- **Pipeline:** meshes are transformed by model, view, and projection matrices before rasterization.
- **3D modeling:** levels are tile grids converted into mesh instances/groups; the block and cubes are rounded box geometries.
- **Input and callbacks:** gameplay is event-driven through keyboard, touch, mouse/pointer-lock, and editor placement events.
- **Transformations:** translation, rotation, scaling, quaternions, and camera transforms are central to rolling, falling, splitting, and menu transitions.
- **Viewing/projection:** perspective projection is used for gameplay; the menu uses a camera view offset to compose UI and 3D content.
- **Hidden-surface/depth:** WebGL depth testing and shadows keep tile/block ordering visually correct.
- **Shading:** physical materials approximate light-material interaction using surface orientation, light sources, and material parameters.
- **Texture mapping:** the sky is a procedural `CanvasTexture`; tile visuals primarily use procedural material parameters instead of image textures.
- **Ray/path tracing:** optional idle path tracing demonstrates the lecture contrast between fast local illumination and more expensive light-path simulation.

## Accurate Claims To Make

- We use Three.js/WebGL shader programs through `MeshPhysicalMaterial`, postprocessing effects, and the Sparkles helper.  
- We should **not** claim that the block itself uses a custom hand-written GLSL shader unless custom shader files are added later.
- We can say the project is shader-based because WebGL/Three.js compiles GPU vertex/fragment programs for the materials and effects.

## Report Outline

1. **Abstract:** one paragraph summarizing a 3D Bloxorz puzzle game and the graphics/interaction goals.
2. **System Overview:** Vite + Three.js, module structure, render loop, game state.
3. **Game Mechanics:** block orientation states, tile types, switches, bridges, split mode, editor, persistence.
4. **Graphics Techniques:** geometry, transformations, camera/projection, lighting/materials, shadows, fog/postprocessing, particles, optional path tracing.
5. **Algorithms:** move validation, BFS solver, verified par values, localStorage progress.
6. **Implementation Details:** important modules with code references and data structures.
7. **Testing/Validation:** `npm run build`, `npm run check:levels`, `npm audit`, browser visual checks.
8. **Limitations/Future Work:** split-mode hints, texture assets, more editor tooling, more levels, optional code splitting for the large renderer bundle.

## Demo Checklist

- Start from a clean browser or clear progress only if you want to show locked levels.
- Run `npm install` and `npm run dev`.
- Show Level 1 movement and par counter.
- Press `H` on a normal level to show BFS hint highlighting.
- Demonstrate a switch/bridge level.
- Demonstrate Level 6 split mode: roll onto teleport, move cube to switch, use Space to switch cubes, merge.
- Open the editor, place start/goal/tiles, and play the custom level.
- Mention `npm run check:levels` as verification.
