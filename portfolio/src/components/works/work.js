import React from "react";
import { useEffect, useState } from 'react';
import { FiMessageSquare } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';
import RotatingText from "../../utilities/RotatingText";
import ASCIIText from "../../utilities/ASCIIText";
import './work.css'
import '../../assets/fonts/font.css'

const Work = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleContactClick = () => {
        if (location.pathname === '/') {
          const el = document.getElementById('footer');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate('/');
          setTimeout(() => {
            const el = document.getElementById('footer');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100); 
        }
      };
    useEffect(() => {
        if (location.hash === '#work') {
        const el = document.getElementById('work');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [location]);

    const [showAscii, setShowAscii] = useState(true);
    const [showHero, setShowHero] = useState(false);
    
    useEffect(() => {
      const asciiTimer = setTimeout(() => {
        setShowAscii(false);
        setShowHero(true);
      }, 5000); 
    
      return () => clearTimeout(asciiTimer);
    }, []);
    

    return (
        <div className="main-content">
            <div className="work-container">
                <div className='main-nav'>
                    {showAscii && (
                        <div className="ascii-wrapper">
                            <ASCIIText
                                text="hello"
                                asciiFontSize={8}
                                enableWaves={true}
                            />
                        </div>
                    )}

                    {showHero && (
                        <div className="nav-header fade-in">
                            <h1 className="hello-message">
                                I’M SABRINA,&nbsp;
                                <RotatingText words={["designer", "engineer", "builder"]} />
                            </h1>
                            <p className="description">
                                STUDYING ENGINEERING AND DESIGN HELPED ME SEE TECH PROBLEMS
                                THROUGH A NEW LENS, ONE THAT FOCUSES ON REAL PEOPLE.
                            </p>
                            <div className="message-row nav-buttons">
                            <button 
                                className='message-button' 
                                onClick={handleContactClick}
                            >
                                <FiMessageSquare />
                                Message Me
                            </button>
                        </div>
                        </div>
                    )}
                </div>
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
                        <div className="project-block">
                            <div className="project-text">
                                <h2 className="project-title">Adobe Flux</h2>
                                <p className="project-description">
                                    Generative AI tool that creates visuals through actions.
                                </p>
                            </div>
                            <div className="project-image">
                                <img
                                    className="laptop-mockup"
                                    src="/images/adobeflux-image1.png"
                                    alt="Adobe Flux mockup"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="project-section">
                        <div className="project-block">
                            <div className="project-text">
                                <h2 className="project-title">Aura</h2>
                                <p className="project-description">
                                    Smart home app to view energy levels and change temperature in multiple rooms.
                                </p>
                            </div>
                            <div className="project-image">
                                <img 
                                    className="phone-mockup" 
                                    src="/images/aura-image1.png" 
                                    alt="Aura mockup" 
                                />
                            </div>
                        </div>
                    </section>

                    <section className="project-section">
                        <div className="project-block">
                            <div className="project-text">
                                <h2 className="project-title">SpartanSync</h2>
                                <p className="project-description">
                                    Smart scheduling for busy students.
                                </p>
                            </div>
                            <div className="project-image">
                                <img 
                                    className="phone-mockup" 
                                    src="/images/spartansync-image1.png" 
                                    alt="SpartanSync mockup" 
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Work