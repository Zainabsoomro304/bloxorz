import * as THREE from 'three';

export function createScene(container) {
    const scene = new THREE.Scene();

    // Purple-pink to light blue gradient sky (matching original Bloxorz style)
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Sky gradient — lavender top, pink-purple horizon
    const grad = ctx.createLinearGradient(0, 0, 0, 1024);
    grad.addColorStop(0.0, '#A8C4E0');   // soft blue
    grad.addColorStop(0.15, '#B8CCE8');  // light lavender blue
    grad.addColorStop(0.35, '#C8D0E8');  // pale lavender
    grad.addColorStop(0.55, '#D8C8E0');  // light purple
    grad.addColorStop(0.7, '#E0B8D0');   // pink-purple
    grad.addColorStop(0.82, '#E8B0C0');  // warm pink
    grad.addColorStop(0.92, '#E0A0A8');  // dusty rose
    grad.addColorStop(1.0, '#D890A0');   // muted magenta
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    // Mountain/hill silhouettes at the horizon
    function drawMountains(baseY, color, amplitude, freq) {
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

    drawMountains(900, 'rgba(180, 140, 170, 0.25)', 50, 1.0);
    drawMountains(930, 'rgba(200, 160, 180, 0.2)', 35, 1.4);
    drawMountains(955, 'rgba(210, 170, 190, 0.15)', 20, 2.0);

    // Soft clouds — using radial gradients for feathered edges
    function drawSoftCloud(cx, cy, w, h, opacity) {
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
            grd.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.9})`);
            grd.addColorStop(0.4, `rgba(255, 255, 255, ${opacity * 0.7})`);
            grd.addColorStop(0.7, `rgba(255, 255, 255, ${opacity * 0.3})`);
            grd.addColorStop(1.0, 'rgba(255, 255, 255, 0)');

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

    // Scatter soft clouds across the sky
    drawSoftCloud(140, 200, 150, 50, 0.7);
    drawSoftCloud(450, 140, 180, 55, 0.75);
    drawSoftCloud(760, 210, 140, 48, 0.65);
    drawSoftCloud(950, 160, 110, 38, 0.6);
    drawSoftCloud(300, 300, 100, 35, 0.5);
    drawSoftCloud(600, 270, 120, 40, 0.55);
    drawSoftCloud(50, 310, 80, 28, 0.45);
    drawSoftCloud(850, 330, 90, 32, 0.4);
    // Smaller wispy ones higher up
    drawSoftCloud(200, 100, 70, 22, 0.4);
    drawSoftCloud(550, 80, 65, 20, 0.35);
    drawSoftCloud(380, 350, 75, 25, 0.35);

    // Small accent clouds near horizon — pinkish tint
    function drawTintedCloud(cx, cy, w, h, opacity, tint) {
        const puffs = [
            { x: 0, y: 0, rx: w * 0.45, ry: h * 0.5 },
            { x: -w * 0.3, y: 0, rx: w * 0.3, ry: h * 0.4 },
            { x: w * 0.3, y: 0, rx: w * 0.32, ry: h * 0.42 },
        ];
        puffs.forEach(p => {
            const grd = ctx.createRadialGradient(
                cx + p.x, cy + p.y, 0,
                cx + p.x, cy + p.y, Math.max(p.rx, p.ry)
            );
            grd.addColorStop(0, `rgba(${tint}, ${opacity * 0.8})`);
            grd.addColorStop(0.5, `rgba(${tint}, ${opacity * 0.4})`);
            grd.addColorStop(1.0, `rgba(${tint}, 0)`);

            ctx.beginPath();
            ctx.save();
            ctx.scale(1, p.ry / p.rx);
            ctx.arc(cx + p.x, (cy + p.y) * (p.rx / p.ry), p.rx, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
            ctx.restore();
        });
    }

    drawTintedCloud(120, 780, 100, 30, 0.4, '240, 180, 200');
    drawTintedCloud(800, 800, 120, 35, 0.35, '230, 170, 190');
    drawTintedCloud(500, 820, 80, 25, 0.3, '235, 175, 195');

    scene.background = new THREE.CanvasTexture(canvas);

    // Very light fog
    scene.fog = new THREE.FogExp2(0xD0C8E0, 0.004);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
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
