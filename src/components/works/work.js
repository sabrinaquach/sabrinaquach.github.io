import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import ScrollRevealImage from "../../utilities/ScrollRevealImage";
import DecryptedText from "../../utilities/DecryptedText";
import Hero from "../hero/hero";
import './work.css';
import '../../assets/fonts/font.css';

const Work = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    const el = document.getElementById('footer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };   

  useEffect(() => {
    if (location.state?.scrollTo === 'hero') {
      const el = document.getElementById('hero');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleProjectOneClick = () => {
    const el = document.getElementById('about');
    if (location.pathname === '/AdobeFlux') {
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/AdobeFlux', { state: { scrollTo: 'AdobeFlux' } });
    }
  }; 

  const handleProjectTwoClick = () => {
    const el = document.getElementById('about');
    if (location.pathname === '/SpartanSync') {
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/SpartanSync', { state: { scrollTo: 'SpartanSync' } });
    }
  }; 

  const handleProjectThreeClick = () => {
    const el = document.getElementById('about');
    if (location.pathname === '/Aura') {
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/Aura', { state: { scrollTo: 'Aura' } });
    }
  }; 

  return (
    <div className="main-content">
      <div className="work-container">
        <Hero onMessageClick={handleContactClick} />
      </div>
        <section id="work" className="work-section">
            {/* <h2 className="work-title">Work</h2>
            <div className="link-list-work">
                <a className="resume-button" href="https://drive.google.com/file/d/1vh-xTEQ21noU3d0xxoUGupWvtbcraZHV/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume ↗</a>
                <a className="linkedin-button" href="https://www.linkedin.com/in/sabrina-quach-sjsu/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a className="github-button" href="https://github.com/sabrinaquach" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div> */}
            <div className="project-column">
                <section className="project-section">
                    <div className="project-block" onClick={handleProjectOneClick}>
                        <div className="project-text-laptop">
                            <DecryptedText 
                                className="project-title"
                                encryptedClassName="encrypted-char"
                                text="Adobe Flux"
                                animateOn="view"
                                revealDirection="start"
                                sequential="true"
                                speed="120"
                            />
                            <p className="project-description">
                                Generative AI tool that creates visuals through actions.
                            </p>
                        </div>
                        <ScrollRevealImage
                            baseOpacity={0}
                            enableBlur={true}
                            baseRotation={5}
                            blurStrength={10}
                        >
                            <div className="project-image">
                                <img
                                    className="laptop-mockup"
                                    src="/images/adobeflux-image1.png"
                                    alt="Adobe Flux mockup"
                                />
                            </div>
                        </ScrollRevealImage>
                    </div>
                </section>

                <section className="project-section">
                    <div className="project-block" onClick={handleProjectTwoClick}>
                        <div className="project-text-phone">
                            <DecryptedText 
                                className="project-title"
                                encryptedClassName="encrypted-char"
                                text="SpartanSync"
                                animateOn="view"
                                revealDirection="start"
                                sequential="true"
                                speed="150"
                            />
                            <p className="project-description">
                              Smart scheduling for busy students.
                            </p>
                        </div>
                        <ScrollRevealImage
                            baseOpacity={0}
                            enableBlur={true}
                            baseRotation={5}
                            blurStrength={10}
                        >
                            <div className="project-image">
                                <img 
                                    className="phone-mockup" 
                                    src="/images/spartansync-image1.png" 
                                    alt="SpartanSync mockup" 
                                />
                            </div>
                        </ScrollRevealImage>
                    </div>
                </section>

                <section className="project-section">
                    <div className="project-block" onClick={handleProjectThreeClick}>
                        <div className="project-text-phone">
                            <DecryptedText 
                                className="project-title"
                                encryptedClassName="encrypted-char"
                                text="Aura"
                                animateOn="view"
                                revealDirection="start"
                                sequential="true"
                                speed="120"
                            />
                            <p className="project-description">
                              Smart home app to view energy levels and change temperature in multiple rooms.
                            </p>
                        </div>
                        <ScrollRevealImage
                            baseOpacity={4}
                            enableBlur={true}
                            baseRotation={3}
                            blurStrength={4}
                        >
                            <div className="project-image">
                                <img 
                                    className="phone-mockup" 
                                    src="/images/aura-image1.png" 
                                    alt="Aura mockup" 
                                />
                            </div>
                        </ScrollRevealImage>
                    </div>
                </section>
            </div>
        </section>
    </div>
  );
};

export default Work;