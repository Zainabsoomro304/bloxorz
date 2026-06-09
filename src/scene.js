import * as THREE from 'three';

// ── Sky drawing (reusable for theme transitions) ───────────────────────────

let _skyCanvas, _skyCtx, _skyTexture;

function drawMountains(ctx, baseY, color, amplitude, freq) {
    ctx.beginPath();
    ctx.moveTo(0, 1024);
    for (let x = 0; x <= 1024; x += 2) {
        const y = baseY
            - Math.sin(x * freq * 0.003) * amplitude * 0.6
            - Math.sin(x * freq * 0.007 + 1.5) * amplitude * 0.3
            - Math.sin(x * freq * 0.015 + 3.0) * amplitude * 0.1;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(1024, 1024);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

function drawSoftCloud(ctx, cx, cy, w, h, opacity) {
    const puffs = [
        { x: 0, y: 0, rx: w * 0.42, ry: h * 0.55 },
        { x: -w * 0.3, y: h * 0.03, rx: w * 0.32, ry: h * 0.45 },
        { x: w * 0.32, y: -h * 0.02, rx: w * 0.35, ry: h * 0.48 },
        { x: -w * 0.12, y: -h * 0.25, rx: w * 0.28, ry: h * 0.35 },
        { x: w * 0.15, y: -h * 0.22, rx: w * 0.25, ry: h * 0.32 },
        { x: -w * 0.48, y: h * 0.08, rx: w * 0.2, ry: h * 0.3 },
        { x: w * 0.48, y: h * 0.06, rx: w * 0.22, ry: h * 0.32 },
    ];
    puffs.forEach(p => {
        const grd = ctx.createRadialGradient(
            cx + p.x, cy + p.y, 0,
            cx + p.x, cy + p.y, Math.max(p.rx, p.ry)
        );
        grd.addColorStop(0, `rgba(255,255,255,${opacity * 0.9})`);
        grd.addColorStop(0.4, `rgba(255,255,255,${opacity * 0.7})`);
        grd.addColorStop(0.7, `rgba(255,255,255,${opacity * 0.3})`);
        grd.addColorStop(1.0, 'rgba(255,255,255,0)');

        ctx.save();
        ctx.scale(1, p.ry / p.rx);
        const scaledY = (cy + p.y) * (p.rx / p.ry);
        ctx.beginPath();
        ctx.arc(cx + p.x, scaledY, p.rx, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.restore();
    });
}

/**
 * Redraw the sky canvas with the given 4-stop gradient.
 * skyColors = ['#top', '#upperMid', '#lowerMid', '#bottom']
 */
export function updateSky(skyColors) {
    const ctx = _skyCtx;

    // Gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 1024);
    grad.addColorStop(0.0, skyColors[0]);
    grad.addColorStop(0.35, skyColors[1]);
    grad.addColorStop(0.7, skyColors[2]);
    grad.addColorStop(1.0, skyColors[3]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    // Cloud opacity adapts to sky brightness
    const bc = new THREE.Color(skyColors[3]);
    const brightness = (bc.r + bc.g + bc.b) / 3;
    const co = brightness > 0.7 ? 0.35 : 0.65;

    drawSoftCloud(ctx, 140, 200, 150, 50, co);
    drawSoftCloud(ctx, 450, 140, 180, 55, co * 1.05);
    drawSoftCloud(ctx, 760, 210, 140, 48, co * 0.9);
    drawSoftCloud(ctx, 950, 160, 110, 38, co * 0.85);
    drawSoftCloud(ctx, 300, 300, 100, 35, co * 0.7);
    drawSoftCloud(ctx, 600, 270, 120, 40, co * 0.8);
    drawSoftCloud(ctx, 50, 310, 80, 28, co * 0.65);
    drawSoftCloud(ctx, 850, 330, 90, 32, co * 0.6);
    drawSoftCloud(ctx, 200, 100, 70, 22, co * 0.55);
    drawSoftCloud(ctx, 550, 80, 65, 20, co * 0.5);
    drawSoftCloud(ctx, 380, 350, 75, 25, co * 0.5);

    _skyTexture.needsUpdate = true;
}

// ── Scene creation ─────────────────────────────────────────────────────────

export function createScene(container, initialSkyColors) {
    const scene = new THREE.Scene();

    _skyCanvas = document.createElement('canvas');
    _skyCanvas.width = 1024;
    _skyCanvas.height = 1024;
    _skyCtx = _skyCanvas.getContext('2d');

    _skyTexture = new THREE.CanvasTexture(_skyCanvas);
    scene.background = _skyTexture;

    // Draw initial sky
    updateSky(initialSkyColors || ['#A8C4E0', '#C8D0E8', '#E0B8D0', '#D890A0']);

    // Fog
    scene.fog = new THREE.FogExp2(0xD0C8E0, 0.004);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    container.appendChild(renderer.domElement);

    // Environment map for subtle reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0xB8C8E0);

    const panelGeo = new THREE.PlaneGeometry(14, 14);
    const skyPanel = new THREE.Mesh(panelGeo, new THREE.MeshBasicMaterial({ color: 0xA8C4E0, side: THREE.DoubleSide }));
    skyPanel.position.set(0, 12, 0);
    skyPanel.rotation.x = Math.PI / 2;
    envScene.add(skyPanel);
    const groundPanel = new THREE.Mesh(panelGeo, new THREE.MeshBasicMaterial({ color: 0xE0B0C8, side: THREE.DoubleSide }));
    groundPanel.position.set(0, -5, 0);
    groundPanel.rotation.x = Math.PI / 2;
    envScene.add(groundPanel);

    scene.environment = pmremGenerator.fromScene(envScene, 0, 0.1, 100).texture;
    pmremGenerator.dispose();

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return { scene, renderer };
}
