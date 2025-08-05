import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const RotatingText = ({ words = [], delay = 2 }) => {
  const textRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { y: "100%", opacity: 0 });

      let tl = gsap.timeline({ repeat: -1 });

      words.forEach((_, index) => {
        const el = textRef.current[index];
        tl.to(el, {
          y: "0%",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        })
          .to(el, {
            y: "-100%",
            opacity: 0,
            delay: delay,
            duration: 0.4,
            ease: "power2.in",
          }, "+=0.1");
      });
    }, containerRef);

    return () => ctx.revert();
  }, [words, delay]);

  return (
    <div
      className="rotating-text-container"
      style={{
        overflow: "hidden",
        height: "3.5rem",
        position: "relative",
        display: "inline-block",
        minWidth: "280px",
      }}
      ref={containerRef}
    >
    {words.map((word, index) => (
      <div
        key={index}
        ref={(el) => (textRef.current[index] = el)}
        className={word.toLowerCase() === "builder" ? "gradient-text" : ""}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
          fontWeight: "bold",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          ...(word.toLowerCase() !== "builder" && { color: "#fff" })
        }}
      >
        {word}
      </div>
    ))}
    </div>
  );
};

export default RotatingText;
