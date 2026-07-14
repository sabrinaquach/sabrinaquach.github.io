import React, { useEffect, useState } from 'react';
import './navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowToTop, BiMenu, BiX } from "react-icons/bi";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import DecryptedText from '../../utilities/DecryptedText';

gsap.registerPlugin(ScrollTrigger); 

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const isMenuVisible = isHovering;
  
  const isProjectPage =
  location.pathname === "/Pip" ||
  location.pathname === "/AdobeFlux" ||
  location.pathname === "/Aura";

  const isWorkActive = isProjectPage || location.pathname === "/";
  const isAboutActive = location.pathname === "/about";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsHovering(false); 
  }, [location.pathname]);

    const handleLogoClick = () => {
        const el = document.getElementById('hero');
        if (location.pathname === '/') {
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          navigate('/', { state: { scrollTo: 'hero' } });
        }
    };
    
    const handleWorkClick = () => {
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
        const el = document.getElementById('about');
        if (location.pathname === '/about') {
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          navigate('/about', { state: { scrollTo: 'about' } });
        }
    };       

    const handleContactClick = () => {
        const el = document.getElementById('footer');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
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
    
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const pathname = location.pathname;

    return (
        <nav className="navbar">
            <div className='nav-content'>
                <div className="nav-row nav-buttons">
                    <p className='initial' 
                        onClick={handleLogoClick}
                    >
                      s.q.
                    </p>
                    <div
                      className="burger-wrapper"
                      onMouseEnter={() => { if (!isMobile) setIsHovering(true); }}
                      onMouseLeave={() => { if (!isMobile) setIsHovering(false); }}
                    >
                        <button
                            className="burger"
                            onClick={() => {
                              if (isMobile) {
                                setIsHovering(prev => !prev); // toggle open/closed on tap
                              } else {
                                setIsHovering(false); // desktop: click just closes, as before
                              }
                            }}
                        >
                            {isHovering ? <BiX size={30} color="#000" /> : <BiMenu size={30} color="#fff" />}
                        </button>
                        <div className={`mobile-menu ${isHovering ? "open" : ""}`}>
                        <DecryptedText
                            text="Work"
                            onClick={handleWorkClick}
                            parentClassName={`desktopMenuListItem ${isWorkActive ? "active" : ""}`}
                            encryptedClassName="encrypted-char1"
                            animateOn="hover"
                            revealDirection="start"
                            sequential="true"
                            speed={200}
                        />
                        <DecryptedText
                            text="About"
                            onClick={handleAboutClick}
                            parentClassName={`desktopMenuListItem ${isAboutActive ? "active" : ""}`}
                            className="decrypted-char"
                            encryptedClassName="encrypted-char1"
                            animateOn="hover"
                            revealDirection="start"
                            sequential="true"
                            speed={120}
                        />
                        <DecryptedText
                            text="Contact"
                            onClick={handleContactClick}
                            parentClassName="desktopMenuListItem"
                            className="decrypted-char"
                            encryptedClassName="encrypted-char1"
                            animateOn="hover"
                            revealDirection="start"
                            sequential="true"
                            speed={120}
                        />
                    </div>
                    </div>
                </div>
                <div className='desktopMenuList'>
                    <div 
                      onClick={handleWorkClick} 
                      className={`desktopMenuListItem ${isWorkActive ? "active" : ""}`}
                    >
                        Work
                    </div>
                    <div 
                      onClick={handleAboutClick} 
                      className={`desktopMenuListItem ${isAboutActive ? "active" : ""}`}
                    >
                        About
                    </div>
                    <div 
                      onClick={handleContactClick} 
                      className="desktopMenuListItem">
                        Contact
                    </div>
                </div>

                <div className='nav-buttons-wrapper'>
                  <div className='nav-buttons'>
                      {/* <div className='circle-button'>
                          <button 
                              className='sun-button' 
                              onClick={handleContactClick}
                          >
                              <BiSun />
                          </button>
                      </div> */}
                      <div className='circle-button'>
                          <button 
                              className='top-button' 
                              onClick={handleScrollToTop}
                          >
                              <BiArrowToTop />
                          </button>
                      </div>
                  </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;