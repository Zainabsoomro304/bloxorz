// Procedural sound effects using Web Audio API — no external files needed

let ctx = null;

function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
}

function tone(freq, dur, type = 'sine', vol = 0.08) {
    const c = getCtx();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
    osc.start();
    osc.stop(c.currentTime + dur);
}

function noise(dur, vol = 0.06) {
    const c = getCtx();
    const len = c.sampleRate * dur;
    const buf = c.createBuffer(1, len, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    src.buffer = buf;
    const gain = c.createGain();
    const filter = c.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(c.destination);
    gain.gain.setValueAtTime(vol, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
    src.start();
}

export const sounds = {
    move() {
        tone(180, 0.07, 'square', 0.04);
        noise(0.04, 0.03);
    },

    fall() {
        const c = getCtx();
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.connect(gain);
        gain.connect(c.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, c.currentTime + 0.5);
        gain.gain.setValueAtTime(0.1, c.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.5);
        osc.start();
        osc.stop(c.currentTime + 0.5);
        noise(0.3, 0.05);
    },

    win() {
        tone(523, 0.15, 'sine', 0.08);
        setTimeout(() => tone(659, 0.15, 'sine', 0.08), 100);
        setTimeout(() => tone(784, 0.15, 'sine', 0.08), 200);
        setTimeout(() => tone(1047, 0.3, 'sine', 0.1), 300);
    },

    switchActivate() {
        tone(600, 0.08, 'sine', 0.06);
        setTimeout(() => tone(800, 0.1, 'sine', 0.06), 60);
    },

    bridgeAppear() {
        tone(300, 0.2, 'triangle', 0.05);
        setTimeout(() => tone(450, 0.15, 'triangle', 0.05), 80);
    },

    bridgeDisappear() {
        tone(400, 0.15, 'triangle', 0.05);
        setTimeout(() => tone(250, 0.2, 'triangle', 0.05), 80);
    },

    tileBreak() {
        noise(0.2, 0.08);
        tone(150, 0.15, 'sawtooth', 0.04);
    },

    undo() {
        tone(400, 0.06, 'sine', 0.04);
        setTimeout(() => tone(300, 0.06, 'sine', 0.03), 40);
    },

    split() {
        tone(800, 0.1, 'sine', 0.06);
        setTimeout(() => {
            tone(600, 0.12, 'sine', 0.05);
            tone(1000, 0.12, 'sine', 0.05);
        }, 80);
    },

    merge() {
        tone(500, 0.1, 'sine', 0.05);
        tone(700, 0.1, 'sine', 0.05);
        setTimeout(() => tone(600, 0.2, 'sine', 0.07), 80);
    },

    levelStart() {
        tone(330, 0.1, 'sine', 0.04);
        setTimeout(() => tone(440, 0.15, 'sine', 0.05), 100);
    },
};
