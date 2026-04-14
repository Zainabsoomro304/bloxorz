# Bloxorz 3D — Progress Presentation
**Ali Mursaliyev & Zainab Soomro**
Computer Graphics — April 2026

---

## The Game

Bloxorz is a puzzle game where you roll a rectangular block across a grid of tiles to reach a goal hole. The block can stand upright or lie on its side. If it falls off the edge, you lose. Simple rules, tricky puzzles.

---

## Tech Stack

- **Three.js** — a JavaScript library that makes 3D graphics easy in the browser using WebGL
- **Vite** — a fast build tool that runs our project locally
- **No backend** — everything runs in the browser

---

## What We've Done

### Scene Setup
- Created the 3D world with a camera, lights, and a renderer that draws everything to the screen
- The renderer uses **shadow mapping** — a technique where the scene is rendered from the light's point of view to figure out which areas are in shadow

### Lighting
- **Ambient light** — a soft, even light everywhere so nothing is completely dark
- **Directional light** — like sunlight, comes from one direction and casts shadows
- **Fill lights** — extra lights from other angles so the scene doesn't look flat

### The Block (Player)
- A 1x2x1 box that the player controls
- Uses a **custom shader** — instead of using a pre-made material, we wrote our own small programs (GLSL) that run directly on the GPU:
  - **Vertex shader** — runs on every corner of the block, adds a subtle breathing/pulsing effect
  - **Fragment shader** — runs on every pixel of the block, calculates lighting and a glowing color effect
- The block tracks whether it's standing upright or lying on its side

### Tile Grid
- The level is defined as a simple 2D number grid (0 = empty, 1 = normal, 2 = goal, 3 = fragile)
- Each tile uses **PBR material** (Physically Based Rendering) — a material model that simulates how real surfaces reflect light using roughness and metalness values
- Small gaps between tiles and subtle edge lines make the grid easy to read

### Movement & Animation
- Movement uses **quaternion interpolation (SLERP)** — quaternions are a way to represent rotations without the glitching problems that regular angles can have. SLERP smoothly blends between two rotations
- Position is animated with **linear interpolation (LERP)** — smoothly sliding from point A to point B
- A sine-wave arc is added on top so the block feels like it's actually rolling, not sliding

### Game Mechanics
- **Fall detection** — after every move, we check if the block is still on valid tiles. If not, it falls
- **Win condition** — if the block stands upright on the green goal tile, you win
- **Fragile tiles** (orange) — they break if the block stands upright on them, but survive if the block is lying flat (weight is spread across two tiles)
- **Move counter** — counts how many moves you've made
- **Restart** — press R anytime to reset

### Animations
- **Falling** — the block drops straight down and shrinks to nothing (cubic easing for acceleration)
- **Winning** — the block bounces up slightly, then gets sucked down into the goal hole
- **Fragile tile breaking** — the tile falls away and fades out before the block drops

### Camera
- Follows the block from above and behind (third-person view)
- Smoothly catches up to the block using interpolation
- Stays in place when the block is falling so you can see it drop

### Visual Atmosphere
- **Vignette** — screen edges are slightly darkened to focus attention on the center
- **Fog** — tiles far from the camera gradually blend into the background color, adding depth
- **Particles** — small dots floating upward in the background for a living feel
- **Goal tile glow** — the green goal tile pulses to guide the player
- **Tone mapping (ACES)** — a color processing step that makes the final image look more cinematic, similar to how movies are color graded

---

## Graphics Techniques We Used

| Technique | What It Does |
|-----------|-------------|
| Custom Shaders (GLSL) | Small GPU programs that control how the block looks |
| Shadow Mapping | Figures out where shadows fall by rendering from the light's perspective |
| PBR Materials | Realistic surface shading based on roughness and metalness |
| Quaternion SLERP | Smooth rotation blending without glitches |
| Perspective Projection | Makes closer things look bigger, like real human vision |
| Tone Mapping | Color grading step that improves the final image |
| Particle System | Many small floating dots rendered efficiently as points |
| Fog | Fades distant objects into the background for depth |

---

## What's Coming Next

- **More levels** — 3-4 levels with increasing difficulty
- **Level file format** — define levels in JSON so they're easy to create and edit
- **Switches & bridges** — tiles that toggle other tiles on/off when pressed
- **Teleporter tiles** — split the block into two small cubes that you control separately
- **Texture mapping** — adding images/patterns onto tile and block surfaces
- **Post-processing effects** — bloom (glow around bright areas) and ambient occlusion (darkening in corners/crevices)
- **Level select screen** and better UI flow
- **First-person camera** (stretch goal) — see the world from the block's perspective

---

## Live Demo

1. Basic movement — rolling in all directions
2. Block orientation — standing vs lying flat
3. Falling off the edge — fall animation + auto reset
4. Fragile tile — step on it upright and watch it break
5. Winning — reach the goal hole
6. Move counter and restart
