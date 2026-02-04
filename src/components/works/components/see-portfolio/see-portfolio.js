import React, { useEffect, useRef } from "react";
import { TbArrowRight } from "react-icons/tb";
import gsap from "gsap";

import "./see-portfolio.css";

const SeeCaseStudyButton = ({ click }) => {
  const orangeRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });

    tl.current
      // whole bubble expands
      .to(orangeRef.current, {
        width: "calc(100% + 1.3em)",
        ease: "elastic.out(0.25)",
        duration: 0.5,
      })
      // arrow bubble
      .to(orangeRef.current, {
        width: "2em",
        left: "calc(100% - 1.65em)",
        ease: "elastic.out(0.25)",
        duration: 0.5,
      });

    return () => tl.current.kill();
  }, []);

  return (
    <div className="wrapper">
      <a className="link" onClick={click}>
        <div ref={orangeRef} className="orange" />
        <span>SEE CASE STUDY</span>
        <TbArrowRight className="icon" size={22} />
      </a>
    </div>
  );
};

export default SeeCaseStudyButton;
