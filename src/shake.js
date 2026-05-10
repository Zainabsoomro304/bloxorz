import * as THREE from 'three';

export function createShakeManager() {
  let intensity = 0;
  let duration = 0;
  let elapsed = 0;
  let active = false;
  let lastTime = 0;
  const offset = new THREE.Vector3();

  function trigger(newIntensity = 0.15, newDuration = 250) {
    intensity = newIntensity;
    duration = newDuration;
    elapsed = 0;
    active = true;
    lastTime = performance.now();
  }

  function update() {
    if (!active) return;

    const now = performance.now();
    const dt = now - lastTime;
    lastTime = now;
    elapsed += dt;

    if (elapsed >= duration) {
      active = false;
      offset.set(0, 0, 0);
      return;
    }

    const progress = elapsed / duration;
    const decay = Math.exp(-4 * progress);
    const t = elapsed * 0.013;

    offset.set(
      Math.sin(t * 17.0) * Math.cos(t * 31.0) * intensity * decay,
      Math.sin(t * 23.0) * Math.cos(t * 37.0) * intensity * decay,
      Math.sin(t * 29.0) * Math.cos(t * 41.0) * intensity * decay * 0.5
    );
  }

  function getOffset() {
    return offset;
  }

  return {
    trigger,
    update,
    getOffset,
    get isShaking() { return active; }
  };
}
