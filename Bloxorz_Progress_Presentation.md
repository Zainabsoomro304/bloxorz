# Bloxorz 3D — Progress Presentation
**Ali Mursaliyev & Zainab Soomro**
Computer Graphics — April 2026

---

## Quick Tips Before Presenting

- Talk about **graphics stuff**, not game rules. Keep the game intro under 30 seconds.
- Don't just say "Three.js handles it." Explain what's actually happening.
- Show the game first, then explain what's going on behind the scenes.

---

## The Game (Say This Fast)

"We built Bloxorz — a puzzle game where you roll a block to reach a goal. It runs in the browser using Three.js and WebGL."

Done. Move on.

---

## What We Built

### 1. Custom Shaders (Talk About This the Most)

We wrote two small programs that run on the graphics card (GPU) instead of the CPU:

- **Vertex shader** — touches every corner point of our block. It moves each point through 3 steps: place it in the world (Model), see it from the camera (View), flatten it onto the screen (Projection). We also make the block "breathe" by slightly growing/shrinking the points over time.

- **Fragment shader** — colors every pixel of the block. It uses a simple rule: if a surface faces the light, it's bright. If it faces away, it's dark. This is calculated with a **dot product** between the surface direction and the light direction. We also added a subtle glow that pulses over time.

> **If asked about the full pipeline:** points go through Model -> View -> Projection -> Clipping -> Rasterization (turning shapes into pixels) -> Fragment shading (coloring pixels) -> Screen

### 2. Shadow Mapping

How we make shadows:
1. First, render the scene **from the light's perspective** — this creates a "depth photo" of what the light can see
2. Then render normally from the camera. For each pixel, compare: is this point further from the light than what the depth photo shows? If yes → shadow

We also use **soft shadows** (PCF) — instead of checking one spot, it checks several nearby spots and averages them, which blurs the shadow edges so they look natural.

### 3. Rotation with Quaternions

The block rolls using **quaternions** instead of regular rotation angles:

- Regular angles (Euler) can break at certain positions — this is called **gimbal lock**, where two rotation axes line up and you lose control of one direction
- Quaternions don't have this problem
- **SLERP** smoothly animates between the start and end rotation so the rolling looks natural

We also smoothly slide the position from A to B (**LERP**) and add a little arc using a sine wave so it looks like real rolling.

### 4. PBR Materials (Tiles)

The tiles use **Physically Based Rendering** — a way to make surfaces look realistic:

- **Roughness** = how smooth or matte the surface is
- **Metalness** = how metallic it looks

The green goal tile is shiny and metallic. The orange fragile tile is rough and matte. These two numbers are enough to create very different looks.

### 5. Camera

- **Perspective projection** — things closer to the camera look bigger, just like your eyes work
- The camera sits behind and above the block, smoothly following it
- When the block falls, the camera stays put so you can watch it drop

### 6. Particles

- 200 small dots floating upward in the background
- Each particle is stored as a point in a big array that gets sent to the GPU
- They're drawn as **points** (one vertex = one dot on screen) which is very efficient

### 7. Atmosphere

- **Fog** — far away tiles slowly fade into the background color, creating a sense of distance
- **Vignette** — edges of the screen are darker, which pulls your eyes to the center
- **Tone mapping** — a color adjustment step that makes everything look more like a movie instead of raw computer colors

---

## Demo Plan

| Step | What to Show | What to Say | Time |
|------|-------------|-------------|------|
| 1 | Open the game | "Here's our scene running in WebGL" | 10s |
| 2 | Point at shadows | "Shadows use a two-pass technique — render from light, then compare" | 30s |
| 3 | Point at the block | "This uses our custom shader — vertex shader moves the points, fragment shader calculates lighting per pixel" | 60s |
| 4 | Point at tiles | "Tiles use PBR — roughness and metalness control how they look" | 20s |
| 5 | Roll the block | "Rolling uses quaternions to avoid gimbal lock, animated with SLERP" | 30s |
| 6 | Point at particles/fog | "Particles are rendered as GPU points, fog adds depth" | 15s |
| 7 | Future plans | "We'll add more levels, switches, textures, and post-processing" | 20s |

---

## What's Coming Next

- More levels (3-4 total) loaded from JSON files
- Switches that open/close bridges
- Teleporter tiles that split the block into two pieces
- Textures (images) on tile and block surfaces
- Bloom effect (glow around bright things) and ambient occlusion (darkening in tight corners)
- Level select screen
- First-person camera (stretch goal)

---

## If The Professor Asks...

| Question | Simple Answer |
|----------|-------------|
| How does the graphics pipeline work? | Points → place in world → view from camera → flatten to screen → clip edges → turn into pixels → color each pixel → display |
| Why quaternions? | Regular angles break at certain positions (gimbal lock). Quaternions don't. |
| How do shadows work? | Render from the light first to get depth info, then use it to check what's in shadow |
| What lighting model do you use? | If the surface faces the light → bright. Faces away → dark. Calculated with a dot product. |
| What is PBR? | Two numbers — roughness and metalness — control how a surface reflects light, based on real physics |
| What is tone mapping? | A color correction step that makes raw computer colors look more natural and cinematic |
