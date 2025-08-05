import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealImage = ({
  children,
  scrollContainerRef,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  start = "top 80%",
  end = "bottom top",
  duration = 1,
  scrub = false,
  once = false, // <-- allow repeat
  className = "",
  toggleActions = "play reverse play reverse", // <-- loop behavior
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current ?? window;

    const trigger = ScrollTrigger.create({
      trigger: el,
      scroller,
      start,
      end,
      toggleActions,
      scrub,
      animation: gsap.fromTo(el, from, { ...to, duration }),
      once, // keep as false for replay
    });

    return () => {
      trigger.kill();
    };
  }, [scrollContainerRef, from, to, start, end, duration, scrub, toggleActions, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollRevealImage;
