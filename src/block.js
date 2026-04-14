import * as THREE from 'three';

export function createBlock(scene, startCol = 0, startRow = 0) {
    // A 1x2x1 block (width: 1, height: 2, depth: 1)
    const geometry = new THREE.BoxGeometry(1, 2, 1);

    // WebGL Custom Shader Material demonstrating vertex and fragment shaders
    const customUniforms = {
        time: { value: 0.0 },
        baseColor: { value: new THREE.Color(0xef4444) }
    };

    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: customUniforms,
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vWorldPos;
            uniform float time;

            void main() {
                vUv = uv;
                vNormal = normalize(normalMatrix * normal);
                vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;

                // Subtle vertex displacement for a breathing effect
                vec3 pos = position;
                float scale = 1.0 + 0.015 * sin(time * 2.5);
                pos *= scale;

                // Projection * View * Model transformations
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `,
        fragmentShader: `
            uniform float time;
            uniform vec3 baseColor;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vWorldPos;

            void main() {
                // Multi-directional lighting for better visibility
                vec3 lightDir1 = normalize(vec3(1.0, 1.5, 0.5));
                vec3 lightDir2 = normalize(vec3(-0.5, 0.8, -1.0));
                float diffuse1 = max(dot(vNormal, lightDir1), 0.0);
                float diffuse2 = max(dot(vNormal, lightDir2), 0.0) * 0.4;
                float diffuse = diffuse1 + diffuse2;

                // Subtle pulsing glow
                float pulse = 0.06 * sin(time * 2.5);
                vec3 glowColor = vec3(1.0, 0.7, 0.3) * pulse;

                // Strong ambient so block is never too dark
                vec3 finalColor = (baseColor + glowColor) * (diffuse * 0.5 + 0.55);

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `
    });

    // Create mesh
    const block = new THREE.Mesh(geometry, shaderMaterial);
    block.castShadow = true;

    // Set initial position (standing upright, center at Y=1)
    block.position.set(startCol, 1, startRow);
    scene.add(block);

    const api = {
        mesh: block,
        state: {
            orientation: 'standing', // 'standing', 'lying_x', 'lying_z'
            isAnimating: false,
            isFalling: false
        },
        update(time) {
            customUniforms.time.value = time;
        }
    };

    return api;
}
