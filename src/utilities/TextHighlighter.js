import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/*
 * Marker-style highlight that sweeps across its text — Fancy Components'
 * <TextHighlighter /> (fancycomponents.dev/docs/components/text/text-highlighter),
 * ported to plain JS on framer-motion (already a dependency; `motion/react` is
 * the same library under its new name).
 *
 * The highlight is a background gradient whose size animates from 0% to 100%,
 * so it wraps across lines like a real highlighter (box-decoration-break).
 * Triggers once, when scrolled into view.
 */
const SIZES = {
  ltr: ["0% 100%", "100% 100%", "0% 0%"],
  rtl: ["0% 100%", "100% 100%", "100% 0%"],
  ttb: ["100% 0%", "100% 100%", "0% 0%"],
  btt: ["100% 0%", "100% 100%", "0% 100%"],
};

const TextHighlighter = ({
  children,
  color = "var(--highlight)",
  direction = "ltr",
  delay = 0,
  duration = 1,
  className = "",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();
  const [from, to, position] = SIZES[direction] || SIZES.ltr;
  const lit = inView || reduceMotion;

  return (
    <motion.span
      ref={ref}
      // .is-lit switches the words to dark ink (styles.css), so they read on
      // the light highlight in either theme.
      className={`text-highlight${lit ? " is-lit" : ""} ${className}`}
      style={{
        backgroundImage: `linear-gradient(${color}, ${color})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: position,
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
        // Ink darkens as this highlight's own sweep lands (see styles.css).
        transitionDelay: `${delay + 0.35}s`,
      }}
      initial={{ backgroundSize: reduceMotion ? to : from }}
      animate={{ backgroundSize: lit ? to : from }}
      transition={{ type: "spring", duration, delay, bounce: 0 }}
    >
      {children}
    </motion.span>
  );
};

export default TextHighlighter;
