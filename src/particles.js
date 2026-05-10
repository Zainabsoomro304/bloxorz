import * as THREE from 'three';

const MAX_PARTICLES = 150;
const GRAVITY = -9.8;

/**
 * Creates a particle manager that owns a single pooled Points object.
 * Call update(delta) every frame.
 */
export function createParticleManager(scene) {
    // ── Pool storage ─────────────────────────────────────────────────────────
    const pool = new Array(MAX_PARTICLES);
    for (let i = 0; i < MAX_PARTICLES; i++) {
        pool[i] = {
            alive: false,
            age: 0,
            lifetime: 0,
            x: 0, y: 0, z: 0,
            vx: 0, vy: 0, vz: 0,
            r: 1, g: 1, b: 1,
            size: 0.06,
            opacity: 1,
        };
    }

    // ── Geometry + attributes ────────────────────────────────────────────────
    const positions = new Float32Array(MAX_PARTICLES * 3);
    const colors    = new Float32Array(MAX_PARTICLES * 4); // RGBA
    const sizes     = new Float32Array(MAX_PARTICLES);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 4));
    geometry.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
        size: 0.06,
        sizeAttenuation: true,
        transparent: true,
        depthWrite: false,
        vertexColors: true,
        opacity: 1,
    });

    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    scene.add(points);

    // ── Helpers ──────────────────────────────────────────────────────────────

    /** Grab the next dead particle from the pool, or null if full. */
    function allocate() {
        for (let i = 0; i < MAX_PARTICLES; i++) {
            if (!pool[i].alive) return pool[i];
        }
        return null;
    }

    /** Seed a particle with common fields and mark alive. */
    function spawn(p, x, y, z, vx, vy, vz, r, g, b, size, lifetime) {
        p.alive    = true;
        p.age      = 0;
        p.lifetime = lifetime;
        p.x  = x;  p.y  = y;  p.z  = z;
        p.vx = vx; p.vy = vy; p.vz = vz;
        p.r  = r;  p.g  = g;  p.b  = b;
        p.size    = size;
        p.opacity = 1;
    }

    /** Random float in [min, max). */
    function rand(min, max) {
        return min + Math.random() * (max - min);
    }

    // ── Emitters ─────────────────────────────────────────────────────────────

    /**
     * 20 small buff/white particles bursting outward in a ring from the
     * block's base. Gravity pulls down, opacity fades over 400 ms.
     */
    function emitDust(position) {
        const count = 20;
        const lifetime = 0.4; // 400 ms

        for (let i = 0; i < count; i++) {
            const p = allocate();
            if (!p) break;

            const angle = (i / count) * Math.PI * 2 + rand(-0.15, 0.15);
            const speed = rand(1.2, 2.5);

            // Buff / warm-white palette
            const tint = rand(0.85, 1.0);

            spawn(
                p,
                position.x, position.y, position.z,
                Math.cos(angle) * speed,
                rand(0.3, 0.8),
                Math.sin(angle) * speed,
                tint, tint * 0.95, tint * 0.85,
                0.06,
                lifetime,
            );
        }
    }

    /**
     * 25 particles matching the given color, flying outward + downward with
     * slight random spin. Fade over 600 ms.
     */
    function emitShatter(position, color) {
        const count = 25;
        const lifetime = 0.6; // 600 ms
        const c = new THREE.Color(color);

        for (let i = 0; i < count; i++) {
            const p = allocate();
            if (!p) break;

            const angle = rand(0, Math.PI * 2);
            const speed = rand(1.5, 4.0);
            const upSpeed = rand(-1.0, 1.5);

            spawn(
                p,
                position.x + rand(-0.2, 0.2),
                position.y + rand(-0.1, 0.3),
                position.z + rand(-0.2, 0.2),
                Math.cos(angle) * speed,
                upSpeed,
                Math.sin(angle) * speed,
                c.r, c.g, c.b,
                0.08,
                lifetime,
            );
        }
    }

    /**
     * 50 multi-colored particles (gold, white, pink, cyan) bursting upward
     * in a cone, arcing back down with gravity. Fade over 1200 ms.
     */
    function emitCelebration(position) {
        const count = 50;
        const lifetime = 1.2; // 1200 ms

        const palette = [
            { r: 1.0,  g: 0.84, b: 0.0  }, // gold
            { r: 1.0,  g: 1.0,  b: 1.0  }, // white
            { r: 1.0,  g: 0.41, b: 0.71 }, // pink
            { r: 0.0,  g: 0.9,  b: 0.9  }, // cyan
        ];

        for (let i = 0; i < count; i++) {
            const p = allocate();
            if (!p) break;

            // Cone spread: mostly upward, some horizontal scatter
            const angle = rand(0, Math.PI * 2);
            const hSpeed = rand(0.5, 3.0);
            const upSpeed = rand(4.0, 8.0);

            const col = palette[i % palette.length];

            spawn(
                p,
                position.x + rand(-0.15, 0.15),
                position.y,
                position.z + rand(-0.15, 0.15),
                Math.cos(angle) * hSpeed,
                upSpeed,
                Math.sin(angle) * hSpeed,
                col.r, col.g, col.b,
                0.1,
                lifetime,
            );
        }
    }

    // ── Per-frame update ─────────────────────────────────────────────────────

    function update(delta) {
        const posAttr  = geometry.getAttribute('position');
        const colAttr  = geometry.getAttribute('color');
        const sizeAttr = geometry.getAttribute('size');

        let anyAlive = false;

        for (let i = 0; i < MAX_PARTICLES; i++) {
            const p = pool[i];

            if (!p.alive) {
                // Park dead particles off-screen and fully transparent
                posAttr.array[i * 3]     = 0;
                posAttr.array[i * 3 + 1] = -100;
                posAttr.array[i * 3 + 2] = 0;
                colAttr.array[i * 4 + 3] = 0;
                sizeAttr.array[i] = 0;
                continue;
            }

            anyAlive = true;

            // Integrate
            p.vy += GRAVITY * delta;
            p.x  += p.vx * delta;
            p.y  += p.vy * delta;
            p.z  += p.vz * delta;
            p.age += delta;

            // Fade opacity linearly
            const t = Math.min(p.age / p.lifetime, 1);
            p.opacity = 1 - t;

            if (p.age >= p.lifetime) {
                p.alive = false;
                p.opacity = 0;
            }

            // Write into buffers
            posAttr.array[i * 3]     = p.x;
            posAttr.array[i * 3 + 1] = p.y;
            posAttr.array[i * 3 + 2] = p.z;

            colAttr.array[i * 4]     = p.r;
            colAttr.array[i * 4 + 1] = p.g;
            colAttr.array[i * 4 + 2] = p.b;
            colAttr.array[i * 4 + 3] = p.opacity;

            sizeAttr.array[i] = p.size * (1 - t * 0.3); // shrink slightly
        }

        posAttr.needsUpdate  = true;
        colAttr.needsUpdate  = true;
        sizeAttr.needsUpdate = true;
    }

    // ── Public API ───────────────────────────────────────────────────────────

    return {
        emitDust,
        emitShatter,
        emitCelebration,
        update,
        get isActive() {
            for (let i = 0; i < MAX_PARTICLES; i++) {
                if (pool[i].alive) return true;
            }
            return false;
        },
    };
}
