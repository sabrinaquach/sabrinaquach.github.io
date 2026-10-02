import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowToTop, BiMoon, BiSun } from "react-icons/bi";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { scrollPageTo } from '../../utilities/pageScroll';
import useTheme from '../../utilities/useTheme';
import { OPEN_CONTACT_MENU } from '../../utilities/contactMenu';
import { CONTACT_EMAIL, ContactForm, CopyEmail, SocialLinks } from '../footer/contact';

gsap.registerPlugin(ScrollTrigger);

const PROJECT_ROUTES = ["/Pip", "/AdobeFlux", "/Aura", "/RealityCheck", "/Spacescan"];

/*
 * Menu animation, after GreenSock's "different enter and exit animations" pen:
 * one timeline with a pause in the middle. Opening plays up to the pause;
 * closing mid-entrance reverses it (easeReverse swaps the springy ease for a
 * quick one so it gets out of the way), and closing once open plays on into a
 * separate exit where the panels fall away.
 */
const buildTimeline = () => {
  const tl = gsap
    .timeline({ paused: true })
    .set('.menu', { visibility: 'visible', pointerEvents: 'auto' })

    // ═══ ENTER ═══
    .to('.menu-bg', {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
      easeReverse: 'power4.out',
    }, 0)
    .fromTo('.menu-panel',
      { x: '110%', y: 0, rotation: 0 },
      {
        x: '0%',
        y: 0,
        duration: 0.6,
        ease: 'back.out',
        easeReverse: 'power3.in',
        stagger: 0.1,
      }, 0)
    .fromTo('.menu-item',
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'expo.out',
        easeReverse: 'power3.in',
        stagger: 0.03,
      }, 0.1)
    .fromTo('.menu-icon-top',
      { attr: { x1: 3, y1: 7, x2: 17, y2: 7 } },
      {
        attr: { x1: 5, y1: 5, x2: 15, y2: 15 },
        duration: 0.35,
        ease: 'back.out(1.4)',
        easeReverse: 'power3.out',
      }, 0.06)
    .fromTo('.menu-icon-bot',
      { attr: { x1: 3, y1: 13, x2: 17, y2: 13 } },
      {
        attr: { x1: 15, y1: 5, x2: 5, y2: 15 },
        duration: 0.35,
        ease: 'back.out(1.4)',
        easeReverse: 'power3.out',
      }, 0.06)
    .fromTo('.menu-icon-mid',
      { opacity: 1 },
      { opacity: 0, duration: 0.15, ease: 'power1.out' }, 0.06)

    .addPause();

  const enterEnd = tl.duration();

  // ═══ EXIT — X back to lines, panels fall, bottom first ═══
  tl
    .to('.menu-icon-top', { attr: { x1: 3, y1: 7, x2: 17, y2: 7 }, duration: 0.2, ease: 'power3.in' })
    .to('.menu-icon-bot', { attr: { x1: 3, y1: 13, x2: 17, y2: 13 }, duration: 0.2, ease: 'power3.in' }, '<')
    .to('.menu-icon-mid', { opacity: 1, duration: 0.2 }, '<')
    .to('.menu-panel', {
      y: '110vh',
      rotation: 'random(-25, 25)',
      duration: 1,
      ease: 'power3.in',
      stagger: { from: 'end', each: 0.02 },
    }, '<')
    .to('.menu-bg', { opacity: 0, duration: 0.3, ease: 'power2.in' }, '<0.1')
    .set('.menu', { visibility: 'hidden', pointerEvents: 'none' });

  return { tl, enterEnd };
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const rootRef = useRef(null);
  const toggleRef = useRef(null);
  const cornerRef = useRef(null);
  const tlRef = useRef(null);
  const enterEndRef = useRef(0);
  const isOpenRef = useRef(false);

  const isWorkActive = PROJECT_ROUTES.includes(location.pathname) || location.pathname === "/";
  const isAboutActive = location.pathname === "/about";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const { tl, enterEnd } = buildTimeline();
      tlRef.current = tl;
      enterEndRef.current = enterEnd;
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const setMenu = (open) => {
    const tl = tlRef.current;
    if (!tl || open === isOpenRef.current) return;
    isOpenRef.current = open;
    setIsOpen(open);

    const pastEnter = tl.time() >= enterEndRef.current;
    if (open) {
      // Reopening after a full exit starts over; mid-reverse just plays forward.
      if (pastEnter) tl.timeScale(1).restart();
      else tl.timeScale(1).play();
    } else if (!pastEnter) {
      // Still entering: run the entrance backwards, quickly.
      tl.timeScale(1.5).reverse();
    } else {
      tl.timeScale(1).play();
    }
  };

  const toggleMenu = () => setMenu(!isOpenRef.current);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpenRef.current) {
        setMenu(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // The theme / back-to-top buttons ride up with the footer as it scrolls into
  // view, so they sit above it instead of covering its links. Measured from
  // getBoundingClientRect in a capture-phase scroll listener because body,
  // not window, can be the scroll container here.
  useEffect(() => {
    let frame = null;
    const measure = () => {
      frame = null;
      const footer = document.getElementById('footer');
      const corner = cornerRef.current;
      if (!footer || !corner) return;
      const overlap = Math.max(0, window.innerHeight - footer.getBoundingClientRect().top);
      corner.style.setProperty('--footer-offset', `${overlap}px`);
    };
    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(measure);
    };
    measure();
    document.addEventListener('scroll', schedule, true);
    window.addEventListener('resize', schedule);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      document.removeEventListener('scroll', schedule, true);
      window.removeEventListener('resize', schedule);
    };
  }, [location.pathname]);

  // "Message Me" buttons open the menu at the contact form. Once the panels
  // have slid in, desktop gets the cursor in the name field; touch screens
  // just bring the form into view so the keyboard doesn't pop up uninvited.
  useEffect(() => {
    let timer = null;
    const onOpenContact = () => {
      setMenu(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        const form = rootRef.current?.querySelector('.menu-contact-form');
        if (!form) return;
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
          form.querySelector('input')?.focus();
        } else {
          form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 700);
    };
    window.addEventListener(OPEN_CONTACT_MENU, onOpenContact);
    return () => {
      clearTimeout(timer);
      window.removeEventListener(OPEN_CONTACT_MENU, onOpenContact);
    };
  }, []);

  useEffect(() => {
    // Instant, not smooth: a new page should open at the top, not scroll there.
    scrollPageTo(0);
  }, [location.pathname]);

    const handleLogoClick = () => {
        setMenu(false);
        const el = document.getElementById('hero');
        if (location.pathname === '/') {
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            scrollPageTo(0, 'smooth');
          }
        } else {
          navigate('/', { state: { scrollTo: 'hero' } });
        }
    };

  const handleWorkClick = () => {
    setMenu(false);
    if (location.pathname === '/') {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          ScrollTrigger.refresh(true);
        }, 200);
      }
    } else {
      navigate('/#work');
    }
  };

  const handleAboutClick = () => {
    setMenu(false);
    const el = document.getElementById('about');
    if (location.pathname === '/about') {
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        scrollPageTo(0, 'smooth');
      }
    } else {
      navigate('/about', { state: { scrollTo: 'about' } });
    }
  };

  const handleContactClick = () => {
    setMenu(false);
    const el = document.getElementById('footer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollPageTo(0, 'smooth');
    }
  };

    const handleScrollToTop = () => {
      //home
      if (location.pathname === '/') {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      //about page
      if (location.pathname === '/about') {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      //project pages
      if (location.pathname === '/AdobeFlux') {
        document.getElementById('AdobeFlux')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      if (location.pathname === '/Pip') {
        document.getElementById('Pip')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      if (location.pathname === '/Aura') {
        document.getElementById('Aura')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      scrollPageTo(0, 'smooth');
    };

  const links = [
    { label: 'Work', onClick: handleWorkClick, active: isWorkActive },
    { label: 'About', onClick: handleAboutClick, active: isAboutActive },
    { label: 'Contact', onClick: handleContactClick, active: false },
  ];

    return (
        <div ref={rootRef} className={`navbar${isOpen ? ' menu-open' : ''}`}>
            <div className="topbar">
                <button type="button" className='initial' onClick={handleLogoClick}>
                  s.q.
                </button>
                <button
                    ref={toggleRef}
                    type="button"
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="site-menu"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <svg width="28" height="28" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <line className="menu-icon-line menu-icon-top" x1="3" y1="7" x2="17" y2="7" />
                        <line className="menu-icon-line menu-icon-mid" x1="3" y1="10" x2="17" y2="10" />
                        <line className="menu-icon-line menu-icon-bot" x1="3" y1="13" x2="17" y2="13" />
                    </svg>
                </button>
            </div>

            <nav className="menu" id="site-menu" aria-label="Main" aria-hidden={!isOpen}>
                <div className="menu-bg" onClick={() => setMenu(false)} />

                {/* Top panel — page links */}
                <div className="menu-panel menu-top theme-light">
                    <ul className="menu-list">
                        {links.map(({ label, onClick, active }) => (
                            <li key={label} className="menu-item">
                                <button
                                    type="button"
                                    className={`menu-link${active ? ' active' : ''}`}
                                    onClick={onClick}
                                    aria-current={active ? 'page' : undefined}
                                    tabIndex={isOpen ? 0 : -1}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom panel — same contact details and form as the footer */}
                <div className="menu-panel menu-contact theme-light">
                    <div className="menu-contact-details">
                        <div>
                            <p className="inital-subtitle">Say "Hello"</p>
                            <CopyEmail className="inital-email" tabIndex={isOpen ? 0 : -1}>
                                {CONTACT_EMAIL}
                            </CopyEmail>
                        </div>
                        <div>
                            <p className="inital-subtitle">Connect</p>
                            <SocialLinks tabIndex={isOpen ? 0 : -1} />
                        </div>
                    </div>
                    <div className="menu-contact-form">
                        <h2 className="message-title">Send A Message</h2>
                        <ContactForm tabIndex={isOpen ? 0 : -1} />
                    </div>
                </div>
            </nav>

            <div ref={cornerRef} className='nav-buttons-wrapper'>
              <div className='nav-buttons'>
                  <div className='circle-button'>
                      <button
                          className='sun-button'
                          onClick={toggleTheme}
                          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                      >
                          {theme === 'light' ? <BiMoon /> : <BiSun />}
                      </button>
                  </div>
                  <div className='circle-button'>
                      <button
                          className='top-button'
                          onClick={handleScrollToTop}
                          aria-label="Back to top"
                      >
                          <BiArrowToTop />
                      </button>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Navbar;
