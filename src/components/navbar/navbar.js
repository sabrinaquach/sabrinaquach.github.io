import React, { useEffect, useState } from 'react';
import './navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiSun, BiArrowToTop, BiMenu, BiX } from "react-icons/bi";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger); 

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMenuOpen(false); 
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
    
      if (location.pathname === '/SpartanSync') {
        document.getElementById('SpartanSync')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    
      if (location.pathname === '/Aura') {
        document.getElementById('Aura')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
       
      
    return (
        <nav className="navbar">
            <div className='nav-content'>
                <div className="nav-row nav-buttons">
                    <p className='initial' 
                        onClick={handleLogoClick}
                    >
                      s.q.
                    </p>
                    <div className="burger-wrapper">
                      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <BiX size={30} /> : <BiMenu size={30} />}
                      </button>
                      {menuOpen && (
                        <div className="mobile-menu open">
                          <div onClick={handleWorkClick} className="desktopMenuListItem">Work</div>
                          <div onClick={handleAboutClick} className="desktopMenuListItem">About</div>
                          <div onClick={handleContactClick} className="desktopMenuListItem">Contact</div>
                        </div>
                      )}
                    </div>
                </div>
                <div className='desktopMenuList'>
                    <div onClick={handleWorkClick} className="desktopMenuListItem">
                        Work
                    </div>
                    <div onClick={handleAboutClick} className="desktopMenuListItem">
                        About
                    </div>
                    <div onClick={handleContactClick} className="desktopMenuListItem">
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