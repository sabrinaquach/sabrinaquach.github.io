/*
 * The ring from React Bits' <BellToggle /> (reactbits.dev/micro/bell-toggle),
 * without its motion/hugeicons dependencies: an icon swings in decaying arcs
 * about a pivot near its top, while sound-wave arcs pulse on alternating
 * sides. The maths (pass timing, warp, easing) is BellToggle's own.
 *
 * Used by the form's send button and the Message Me button.
 */
const RING = { amplitude: 17, passes: 5, decay: 1, duration: 820 };
const SEG_EASE = "cubic-bezier(0.77, 0, 0.175, 1)";
const WARP = 0.6;

const passOffset = (k, passes) => 1 - Math.pow(1 - (k + 2 / 3) / (passes + 1), WARP);

const ringKeyframes = (from, amplitude, passes, decay) => {
    const frames = [{ transform: `rotate(${from}deg)`, offset: 0, easing: SEG_EASE }];
    for (let k = 0; k < passes; k++) {
        const angle = amplitude * Math.pow(1 - k / passes, decay) * (k % 2 ? 1 : -1);
        frames.push({ transform: `rotate(${angle.toFixed(2)}deg)`, offset: passOffset(k, passes), easing: SEG_EASE });
    }
    frames.push({ transform: "rotate(0deg)", offset: 1 });
    return frames;
};

// Current rotation, so a ring that starts mid-swing picks up from where it is.
const liveAngle = (el) => {
    const tf = getComputedStyle(el).transform;
    if (!tf || tf === "none") return 0;
    const m = new DOMMatrix(tf);
    return (Math.atan2(m.b, m.a) * 180) / Math.PI;
};

const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Ring `glyph` and pulse the two wave elements.
 * @param {Element} glyph  the icon wrapper (its transform-origin is the pivot)
 * @param {Element[]} waves  [left, right] arcs
 */
export const ringBell = (glyph, [waveLeft, waveRight] = []) => {
    if (!glyph || prefersReducedMotion()) return;
    const { amplitude, passes, decay, duration } = RING;

    glyph.getAnimations().forEach((a) => a.cancel());
    glyph.animate(ringKeyframes(liveAngle(glyph), amplitude, passes, decay), { duration, easing: "linear" });

    for (let k = 0; k < passes; k++) {
        const side = k % 2 ? waveRight : waveLeft;
        if (!side) continue;
        const strength = Math.pow(1 - k / passes, decay);
        side.animate(
            [
                { opacity: 0, transform: "scale(0.55)" },
                { opacity: 0.9 * strength, offset: 0.3 },
                { opacity: 0, transform: "scale(1.25)" },
            ],
            { duration: 380, delay: passOffset(k, passes) * duration, easing: "ease-out" }
        );
    }
};
