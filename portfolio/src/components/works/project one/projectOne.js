import React, { useEffect } from "react";
import './projectOne.css'
import '../../../assets/fonts/font.css'
import { FiMessageSquare } from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';

const ProjectOne = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.state?.scrollTo === 'about') {
        const el = document.getElementById('about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
    
          // optional: clear state after scrolling so it doesn't re-trigger
          navigate(location.pathname, { replace: true, state: {} });
        }
      }
    }, [location, navigate]);
    
    const handleContactClick = () => {
        const el = document.getElementById('footer');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };   

    return (
        <div className="project1-container" id="AdobeFlux">
            <div className="project1-content">
                <div className="project-block">
                    <div className="text-column">
                        <h1 className="project1-title">Adobe Flux</h1>
                        <p className="project1-description">Generative AI tool that creates visuals through actions.</p>
                    </div>
                    <div className="content-items">
                        <img className="project1-image" src="/images/adobeflux-image1.png"/>
                    </div>
                </div>
            </div>

            <section className="case-study-container">
                <div className="background-container">
                    <div className="horizontal-line" />
                    <div className="background-block">
                        <div className="background-column">
                            <h2 className="background-subtitle">Tools</h2>
                            <ul className="role-tool-list">
                                <li>Figma</li>
                                <li>Figjam</li>
                                <li>ChatGBT Image Generator</li>
                                <li>Perplexity</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Team</h2>
                            <ul>
                                <li>Sierra Mcray</li>
                                <li>Yanfeng Dong</li>
                                <li>Tanisha Damle</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">My Role</h2>
                            <ul className="role-tool-list">
                                <li>Ideation</li>
                                <li>UX Research / Testing</li>
                                <li>Interface Design</li>
                                <li>Prototyping</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Timeline</h2>
                            <ul className="timeline-list">
                                <li>Week 1–3: Research & Problem Definition</li>
                                <li>Week 4–6: Ideation & Early Prototyping</li>
                                <li>Week 7–9: High-Fidelity Design & Motion</li>
                                <li>Week 10: Final Touches & Adobe Presentation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>
                
                <div className="background-container">
                    <div className="background-block">
                        <div className="background-column">
                            <h2 className="background-subtitle">Research</h2>
                            <ul className="role-tool-list">
                                <li>Understand the problem</li>
                                <li>Competitor analysis</li>
                                <li>user research</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Define</h2>
                            <ul>
                                <li>establish core needs</li>
                                <li>early design concepts</li>
                                <li>deciding a direction</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Design & Iterate</h2>
                            <ul className="role-tool-list">
                                <li>style guide</li>
                                <li>high-fidelity wireframes</li>
                                <li>user testing feedback</li>
                                <li>design iterations</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Deliver</h2>
                            <ul className="timeline-list">
                                <li>final design</li>
                                <li>next steps</li>
                            </ul>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>

            </section>
        </div>
    )
}

export default ProjectOne;