# Bloxorz 3D — Progress Presentation
**Ali Mursaliyev & Zainab Soomro**
Computer Graphics — April 2026

---

## Presentation Tips

> **Lead with CG concepts, not game design.** The professor wants to hear about shaders, shadow mapping, and quaternions — not game rules. Keep the game explanation under 30 seconds.

> **Never say "Three.js does this for us."** Always explain what's happening underneath. Show you understand what the library abstracts away.

> **Don't read slides or show code line-by-line.** Show the visual result first, then explain the CG concept behind it.

---

## The Game (30 Seconds Max)

Bloxorz is a puzzle game — roll a block across tiles to reach a goal hole. Built with Three.js/WebGL, runs in the browser. Move on to the CG stuff quickly.

---

## What We Built — CG Concepts to Present

### 1. Custom GLSL Shaders (Our Main Highlight — Spend the Most Time Here)

Instead of using a pre-built material, we wrote our own programs that run on the GPU:

- **Vertex shader** — runs for every vertex of the block. Transforms each vertex through the full pipeline: `projectionMatrix * modelViewMatrix * vec4(position, 1.0)` — that's Projection x View x Model. We also displace vertices with a sine wave to create a breathing effect.

- **Fragment shader** — runs for every pixel. Calculates color using **Lambertian diffuse lighting**: `max(dot(normal, lightDirection), 0.0)`. The dot product measures how directly a surface faces the light — facing the light = bright, facing away = dark. We added a time-based emissive glow on top.

- **Normal matrix** — we use `normalMatrix` instead of the model matrix for normals because non-uniform scaling would distort them. The normal matrix (transpose of inverse) corrects this.

> **If asked "Walk me through vertex to pixel":**
> Vertex -> Model transform -> View transform -> Projection -> Clipping -> Rasterization -> Fragment shading -> Framebuffer

### 2. Shadow Mapping

Shadows use a **two-pass technique**:
1. Render the scene from the **light's point of view** to create a depth texture (shadow map)
2. In the main render, each pixel checks: "Am I further from the light than what the shadow map says?" If yes, it's in shadow

We use **PCF (Percentage-Closer Filtering)** — samples multiple points around each shadow lookup to soften edges. Resolution: 2048x2048.

> **If asked "How does shadow mapping work?"** — describe the two passes.

### 3. Quaternion Rotation (SLERP)

The block rolls using **quaternions** instead of Euler angles:

- **Why not Euler angles?** They have **gimbal lock** — at certain angles you lose a degree of freedom and rotations break
- **Quaternions** are a 4D number system that avoid this problem
- **SLERP** (Spherical Linear Interpolation) smoothly blends between two rotations at constant speed

Position uses **LERP** (Linear Interpolation) with a sine-wave arc on top for natural rolling feel.

> **If asked "Why quaternions?"** — gimbal lock avoidance + smooth interpolation.

### 4. PBR Materials

Tiles use **MeshStandardMaterial** which implements the **Cook-Torrance BRDF**:

- **Roughness** — how blurry/sharp reflections are (rough = matte, smooth = shiny)
- **Metalness** — reflects like plastic (0) or metal (1)
- Goal tile is metallic with emissive glow, fragile tile is rougher

> **If asked "What is PBR?"** — Physically realistic shading using roughness and metalness, based on Cook-Torrance.

### 5. Perspective Projection Camera

- Defined by FOV (45deg), aspect ratio, near clip (0.1), far clip (1000)
- These create a **view frustum** — a pyramid-shaped volume, anything outside gets clipped
- Camera follows the block with LERP interpolation (third-person view)

### 6. Particle System

- 200 particles using **BufferGeometry** with **Float32Array** — typed array that maps directly to GPU vertex buffers
- Rendered as **GL_POINTS** — each particle is one vertex drawn as a screen-space square
- `depthWrite: false` prevents transparent particles from writing to the Z-buffer (otherwise they'd hide particles behind them)
- `needsUpdate = true` tells Three.js to re-upload position data to the GPU each frame

> **If asked "Why depthWrite false?"** — transparent objects shouldn't write to depth buffer or they block things behind them.

### 7. Atmosphere

- **Fog** — fades distant tiles into background (linear fog with start/end distance)
- **Vignette** — CSS radial gradient darkens edges, focuses eye on center
- **ACES Tone Mapping** — maps HDR to screen range, like how movies are color graded
- **Goal pulse** — emissive intensity animated with sine wave

---

## Demo Plan (Under 4 Minutes)

| Step | Show | Say (CG focus) | Time |
|------|------|----------------|------|
| 1 | Running app | "WebGL renderer, perspective camera, scene graph" | 10s |
| 2 | Lighting & shadows | "Ambient prevents darkness, directional simulates sun and casts shadows via shadow mapping, fill lights add depth" | 30s |
| 3 | Block up close | "Custom GLSL shader — vertex displacement for pulsation, Lambertian diffuse in fragment shader, runs on GPU" | 60s |
| 4 | Tile materials | "PBR materials — notice metallic goal vs rough normal tiles" | 20s |
| 5 | Roll the block | "Quaternion SLERP avoids gimbal lock, sine arc for physics feel" | 30s |
| 6 | Particles, fog | "GL_POINTS with buffer geometry, fog for depth, ACES tone mapping" | 15s |
| 7 | Future work | Quick list | 20s |

---

## What's Coming Next

- **More levels** (3-4) with JSON-based level format
- **Switches & bridges** — interactive tiles that toggle other tiles
- **Teleporter tiles** — splits block into two controllable pieces
- **Texture mapping** on surfaces
- **Post-processing** — bloom (glow around bright areas), ambient occlusion (darkening in corners)
- **Level select screen**
- **First-person camera** (stretch goal)

---

## Quick Q&A Cheat Sheet

| Question | Answer |
|----------|--------|
| Vertex to pixel pipeline? | Vertex -> Model -> View -> Projection -> Clip -> Rasterize -> Fragment -> Framebuffer |
| Why quaternions? | Euler angles have gimbal lock. Quaternions + SLERP give smooth, glitch-free rotation |
| How do shadows work? | Two-pass: render depth from light's view, compare in main render |
| What lighting model? | Lambertian diffuse: `max(dot(N, L), 0.0)` + ambient + emissive |
| Why normal matrix? | Corrects for non-uniform scaling that would distort normals |
| Why depthWrite false? | Transparent particles shouldn't block things behind them in Z-buffer |
| What is PBR? | Cook-Torrance BRDF — roughness + metalness simulate real material behavior |
| What is tone mapping? | Maps wide-range HDR colors to displayable screen range |
