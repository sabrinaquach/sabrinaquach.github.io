import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealImage = ({
  children,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  scrollContainerRef,
  start = "top 80%",
  end = "bottom top",
  duration = 2,
  scrub = false,
  once = false,
  className = "",
  toggleActions = "play reverse play reverse",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
  
    const scroller = scrollContainerRef?.current || window;
  
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        from,
        {
          ...to,
          duration,
          scrollTrigger: {
            trigger: el,
            scroller,
            start,
            end,
            scrub,
            toggleActions,
            once,
            invalidateOnRefresh: true,
          }
        }
      );
    }, el);
  
    ScrollTrigger.refresh();
  
    return () => ctx.revert();
  }, [scrollContainerRef, from, to, start, end, duration, scrub, toggleActions, once]);
  

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollRevealImage;
