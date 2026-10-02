import { useEffect, useState } from 'react';

// True while any part of the site footer is on screen. The bottom docks (work
// filter, case-study tabs) hide then, so they never sit on top of the footer.
const useFooterInView = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const footer = document.getElementById('footer');
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return inView;
};

export default useFooterInView;
