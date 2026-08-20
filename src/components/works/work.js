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
    if (location.pathname === '/Pip') {
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/Pip', { state: { scrollTo: 'Pip' } });
    }
  }; 

  const handleProjectTwoClick = () => {
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
                        <div className="project-text-phone">
                            <div className="button-wrapper">
                              <SeeCaseStudyButton click={handleProjectOneClick} />
                            </div>
                            <DecryptedText 
                                className="project-title"
                                encryptedClassName="encrypted-char"
                                text="Pip"
                                animateOn="view"
                                revealDirection="start"
                                sequential="true"
                                speed="120"
                            />
                            <p className="project-description">
                              A beginner-friendly skincare ingredient scanner that helps users understand what's in their products — personalized to their skin type, jargon-free, and guided by a friendly mascot named Pip.
                            </p>
                            <div className="live-app-block">
                              <div className="live-app-buttons">
                                <a
                                  className="card-demo-link"
                                  href="https://pip-skincare.vercel.app"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  View live app ↗
                                </a>
                                <a
                                  className="card-repo-link"
                                  href="https://github.com/sabrinaquach/pip-skincare"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  View code ↗
                                </a>
                              </div>
                              <span className="live-app-note">Try the demo — no signup</span>
                            </div>
                            <div className='project-tags'>
                              <ProjectTags
                                text="UX design"
                                color="#B1FFA6"
                              />
                              <ProjectTags
                                text="Product design"
                                color="#FFE0C0"
                              />
                              <ProjectTags
                                text="Mobile design"
                                color="#5AACDC"
                              />
                              <ProjectTags
                                text="User research"
                                color="#FFE97B"
                              />
                              <ProjectTags
                                text="Interaction design"
                                color="#FFA6E3"
                              />
                              <ProjectTags
                                text="End-to-end product design"
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
                              <video 
                                  src="/videos/pip-videos/scan-pip.mp4" 
                                  loop 
                                  muted
                                  autoPlay
                                  playsInline
                                  className="p2-final-design-video"
                              />
                            </div>
                        </ScrollRevealImage>
                    </div>
                </section>

                <section className="project-section">
                    <div className="project-block" onClick={handleProjectTwoClick}>
                        <div className="project-text-laptop">
                            <div className="button-wrapper">
                              <SeeCaseStudyButton click={handleProjectTwoClick} />
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
                                text="AI-driven design"
                                color="#18FF08"
                              />
                              <ProjectTags
                                text="Desktop"
                                color="#FFE0C0"
                              />
                              <ProjectTags
                                text="Creative tools"
                                color="#F6FAB2"
                              />
                              <ProjectTags
                                text="UX design"
                                color="#FFA6E3"
                              />
                              <ProjectTags
                                text="Customer journeys"
                                color="#5AACDC"
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
                              <video 
                                  src="/videos/project1-videos/adobeFlux-vid1.mov" 
                                  loop 
                                  muted
                                  autoPlay
                                  playsInline
                                  className="final-design-video"
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
                                text="IoT design"
                                color="#18FF08"
                              />
                              <ProjectTags
                                text="UX design"
                                color="#FFA6E3"
                              />
                              <ProjectTags
                                text="Home automation"
                                color="#F9FF8F"
                              />
                              <ProjectTags
                                text="Mobile"
                                color="#B2E4FA"
                              />
                              <ProjectTags
                                text="Full-stack"
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
                            `<video 
                                  src="/videos/project3-videos/Aura-App-Motion-Off.mov"
                                  loop 
                                  muted
                                  autoPlay
                                  playsInline
                                  className="p2-final-design-video"
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