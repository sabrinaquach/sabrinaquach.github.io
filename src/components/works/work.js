import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import ScrollRevealImage from "../../utilities/ScrollRevealImage";
import DecryptedText from "../../utilities/DecryptedText";
import Hero from "../hero/hero";
import ProjectTags from "./components/project-tags/tags";
import SeeCaseStudyButton from "./components/see-portfolio/see-portfolio";

import './work.css';

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
            <div className="project-column">
                <section className="project-section">
                    <div className="project-block" onClick={handleProjectOneClick}>
                        <div className="project-text-laptop">
                            <div className="button-wrapper">
                              <SeeCaseStudyButton click={handleProjectOneClick} />
                            </div>
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
                            <div className='project-tags'>
                              <ProjectTags
                                text="AI-Driven Design"
                                color="#B1FFA6"
                              />
                              <ProjectTags
                                text="Desktop"
                                color="#FFE0C0"
                              />
                              <ProjectTags
                                text="Customer Journeys"
                                color="#5AACDC"
                              />
                              <ProjectTags
                                text="Creative Tools"
                                color="#FFE97B"
                              />
                              <ProjectTags
                                text="UX design"
                                color="#FFA6E3"
                              />
                            </div>
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
                            <div className="button-wrapper">
                              <SeeCaseStudyButton click={handleProjectTwoClick} />
                            </div>
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
                            <div className='project-tags'>
                              <ProjectTags
                                text="Data-Driven"
                                color="#D0B2FA"
                              />
                              <ProjectTags
                                text="Mobile"
                                color="#B2E4FA"
                              />
                              <ProjectTags
                                text="Academic"
                                color="#F6FAB2"
                              />
                              <ProjectTags
                                text="Student Productivity"
                                color="#E9A060"
                              />
                              <ProjectTags
                                text="Degree Planning"
                                color="#5DD371"
                              />
                              <ProjectTags
                                text="UX design"
                                color="#FFA6E3"
                              />
                            </div>
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
                            <div className="button-wrapper">
                              <SeeCaseStudyButton click={handleProjectThreeClick} />
                            </div>
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
                            <div className='project-tags'>
                              <ProjectTags
                                text="IoT Design"
                                color="#18FF08"
                              />
                              <ProjectTags
                                text="UX design"
                                color="#FFA6E3"
                              />
                              <ProjectTags
                                text="Home Automation"
                                color="#F9FF8F"
                              />
                              <ProjectTags
                                text="Mobile"
                                color="#B2E4FA"
                              />
                              <ProjectTags
                                text="Full-Stack"
                                color="#AAFFD8"
                              />
                              <ProjectTags
                                text="HTML"
                                color="#B5B6FF"
                              />
                              <ProjectTags
                                text="CSS"
                                color="#F8B966"
                              />
                              <ProjectTags
                                text="JavaScript"
                                color="#66A8F8"
                              />
                              <ProjectTags
                                text="Supabase"
                                color="#34b27b"
                              />
                            </div>
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