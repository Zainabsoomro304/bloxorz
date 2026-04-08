import * as THREE from 'three';

export function createBlock(scene) {
    // A 1x2x1 block (width: 1, height: 2, depth: 1)
    const geometry = new THREE.BoxGeometry(1, 2, 1);
    
    // WebGL Custom Shader Material demonstrating vertex and fragment shaders
    const customUniforms = {
        time: { value: 0.0 },
        baseColor: { value: new THREE.Color(0xd9381e) }
    };

    const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: customUniforms,
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vNormal;
            uniform float time;

            void main() {
                vUv = uv;
                // Standard transformation of normal matrix to pass into fragment shader
                vNormal = normalize(normalMatrix * normal);
                
                // Slight vertex displacement scaling for a pulsating effect
                vec3 pos = position;
                float scale = 1.0 + 0.03 * sin(time * 4.0);
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

            void main() {
                // Fake directional light logic inside the shader
                vec3 lightDir = normalize(vec3(1.0, 1.5, 0.5));
                float diffuse = max(dot(vNormal, lightDir), 0.0);
                
                // Pulsating brightness
                float pulse = 0.1 * sin(time * 4.0);
                vec3 glowColor = vec3(1.0, 0.6, 0.2) * pulse;
                
                // Illumination model combining ambient, diffuse, and emissive pulse
                vec3 finalColor = (baseColor + glowColor) * (diffuse * 0.7 + 0.3);

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `
    });

    // Create mesh
    const block = new THREE.Mesh(geometry, shaderMaterial);
    block.castShadow = true;
    
    // Set initial position (standing up at 0,0, top of grid is Y=0, height is 2, center is Y=1) 
    block.position.set(0, 1, 0);
    scene.add(block);

    const api = {
        mesh: block,
        state: {
            orientation: 'standing', // 'standing', 'lying_x', 'lying_z'
            isAnimating: false
        },
        update(time) {
            customUniforms.time.value = time; // Update shader variable
        }
    };

    return api;
}
