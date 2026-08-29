import React, { useEffect, useRef } from "react";
import { TbArrowRight } from "react-icons/tb";
import gsap from "gsap";

import "./see-portfolio.css";

// `href` makes this an external link (the shipped projects without a written
// case study point at the live app or the repo); without one it is an in-app
// navigation and `click` does the routing.
const SeeProjectButton = ({ click, href }) => {
  const colorRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });

    tl.current
      // whole bubble expands
      .to(colorRef.current, {
        width: "calc(100% + 1.3em)",
        ease: "elastic.out(0.25)",
        duration: 0.5,
      })
      // arrow bubble
      .to(colorRef.current, {
        width: "2em",
        left: "calc(100% - 1.65em)",
        ease: "elastic.out(0.25)",
        duration: 0.5,
      });

    return () => tl.current.kill();
  }, []);

  return (
    <div className="wrapper">
      <a
        className="link"
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        onClick={click}
      >
        <div ref={colorRef} className="color" />
        <span>SEE PROJECT</span>
        <TbArrowRight className="icon" size={22} />
      </a>
    </div>
  );
};

export default SeeProjectButton;
