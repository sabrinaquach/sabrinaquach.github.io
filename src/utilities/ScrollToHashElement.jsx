import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    console.log("location", location);
  
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        console.log("Scrolling to", location.hash);
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.state?.scrollToTop) {
      console.log("Scrolling to top");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);
  

  return null;
};

export default ScrollToHashElement;
