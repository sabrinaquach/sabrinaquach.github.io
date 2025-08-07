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
  once = false,
  className = "",
  toggleActions = "play reverse play reverse",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;

    const anim = gsap.fromTo(
      el,
      from,
      { ...to, duration, paused: true }
    );

    const trigger = ScrollTrigger.create({
      trigger: el,
      scroller,
      start,
      end,
      scrub,
      toggleActions,
      once,
      onEnter: () => anim.play(),
      onLeave: () => anim.reverse(),
      onEnterBack: () => anim.play(),
      onLeaveBack: () => anim.reverse(),
    });

    return () => {
      trigger.kill();
      anim.kill();
    };
  }, [scrollContainerRef, from, to, start, end, duration, scrub, toggleActions, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollRevealImage;
