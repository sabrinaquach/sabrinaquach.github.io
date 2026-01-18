import React, { useEffect, useState } from "react";
import './projectThree.css'
import { BiSearchAlt, BiBook, BiRotateRight, BiSmile } from "react-icons/bi";
import { TbClipboardX, TbClipboardCheck, TbMoodSearch, TbArrowRight } from "react-icons/tb";
import { useLocation, useNavigate } from 'react-router-dom';

import Square from "../components/square/square";
import Rectangle from "../components/theme-card/rectangle";
import LargeRectangle from "../components/competitor-card/largeRectangle";
import PercentSquare from "../components/percent-square/percent-square";
// import SmallRectangle from "../components/core-card/smallRectangle";
// import DesignCard from "../components/design-iteration-card/designCard";

const ProjectThree = () => {
    const location = useLocation();
    const navigate = useNavigate();
        
    useEffect(() => {
        setTimeout(() => {
          if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
            navigate(location.pathname, { replace: true, state: {} });
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }
        }, 0);
    }, [location, navigate]);

    const [modalImage, setModalImage] = useState(null);

    return (
        <div className="project-container" id="Aura">
            <div className="project-content">
                <div className="project-block">
                    <div className="text-column">
                        <h3 className="project-header">Case Study</h3>
                        <h1 className="project-title">Aura</h1>
                        <p className="project-description">Smart home app to view energy levels and change temperature in multiple rooms.</p>
                    </div>
                    <div className="project-content-items">
                        <img className="project2-image" src="/images/aura-image1.png" alt="Aura"/>
                    </div>
                </div>
            </div>

            <section className="case-study-container">
                {/* Background */}
                <div className="background-container">
                    <div className="horizontal-line" />
                    <h3 className="section-subheader">background</h3>
                    <div className="background-block">
                        <div className="background-column">
                            <h2 className="background-subtitle">Tools</h2>
                            <ul className="role-tool-list background-design-list">
                                <li>Figma</li>
                                <li>System Diagrams</li>
                                <li>Google Docs</li>
                                <li>Visual Studio Code</li>
                                <li>Canva</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Team</h2>
                            <ul className="background-design-list">
                                <li>Sabrina Quach</li>
                                <li>Roger Huynh</li>
                                <li>Jeric Montepalco</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">My Role</h2>
                            <ul className="role-tool-list background-design-list">
                                <li>UX/Product Design</li>
                                <li>System Thinking</li>
                                <li>Software Engineering</li>
                                <li>Collaboration with Hardware Engineering</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Timeline</h2>
                            <ul className="timeline-list background-design-list">
                                <li>Week 1–3: Research & Problem Definition</li>
                                <li>Week 4–6: Ideation & Early Prototyping</li>
                                <li>Week 7–9: High-Fidelity Design & Motion</li>
                                <li>Week 10: Final Touches & Final Presentation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                {/* </div> */}

                {/* Design Process */}
                {/* <div className="design-process-container"> */}
                    <h3 className="pinned-inner section-subheader">design process</h3>
                    <div className="design-process-block">
                        <div className="background-column">
                            <div className="background-row">
                                <BiSmile size={28} /> 
                                <h2 className="background-subtitle">Deliver</h2>
                            </div>
                            <ul className="background-design-list">
                                <li>final design</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <div className="background-row">
                                <BiSearchAlt size={28} />
                                <h2 className="background-subtitle">Research</h2>
                            </div>
                            <ul className="role-tool-list background-design-list">
                                <li>Understand the problem</li>
                                <li>Offical system analysis</li>
                                <li>user research</li>
                            </ul>
                        </div>
                        <div className="background-column">
                        <div className="background-row">
                            <BiBook size={28} />
                            <h2 className="background-subtitle">Define</h2>
                        </div>
                            <ul className="background-design-list">
                                <li>establish core needs</li>
                                <li>early design concepts</li>
                                <li>deciding a direction</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <div className="background-row">
                                <BiRotateRight size={28}/> 
                                <h2 className="background-subtitle design-iterate">Design & Iterate</h2>
                            </div>
                            <ul className="role-tool-list background-design-list">
                                <li>high-fidelity wireframes</li>
                                <li>user testing feedback</li>
                                <li>design iterations</li>
                            </ul>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>

                {/* Deliver */}
                <div className="deliver-container">
                    {/* Meet SpartanSync Section */}
                    <div className="final-design-container">
                    <h3 className="section-subheader">Deliver</h3>
                    <h1 className="section-header">Introducing Aura</h1>
                    <p className="research-description">
                        Aura (AuraTherm) is a motion‑sensed smart thermostat system paired with a companion mobile app that adjusts heating and cooling based 
                        on room occupancy. By responding to how people actually use their homes, Aura reduces wasted energy, lowers utility costs, and supports 
                        more sustainable living without sacrificing comfort.
                    </p>

                        {/* Dial Functionality Subsection */}
                        <div className="final-design-content">
                            <div className="final-design-row">
                                <div className="p-final-design-column">
                                    <h3 className="p-section-subtitle">Dial Functionality</h3>
                                    <p className="research-description">
                                        Aura’s physical dial is designed to feel familiar, tactile, and effortless. Aura’s dial works like a regular thermostat, making 
                                        it easy to adjust the temperature for the whole home by simply turning the dial. When motion sensing is turned on, the dial becomes 
                                        smarter and lets users control the temperature in only the rooms that are being used. This helps keep people comfortable while avoiding 
                                        wasted energy in empty rooms. The experience stays simple for everyday use, but becomes more powerful as users explore Aura’s smarter 
                                        features.
                                    </p>
                                </div>
                                
                                <video 
                                    src="/videos/project3-videos/Aura-Dial-Function.mov"
                                    loop 
                                    muted
                                    autoPlay
                                    playsInline
                                    className="p-final-design-video"
                                />
                            </div>
                        </div>
                        
                        {/* Room-Level Awareness Subsection */}
                        <div className="final-design-content">
                            <div className="final-design-row">
                                <div className="p-final-design-column">
                                    <h3 className="p-section-subtitle">Room-Level Awareness</h3>
                                    <p className="research-description">
                                        Aura makes occupancy visible and understandable. The system highlights which rooms are currently active and shows how heating or cooling 
                                        is being prioritized based on real behavior. By clearly reflecting how the system is responding to movement throughout the home, users 
                                        develop a stronger mental model of how Aura works, which builds trust and reinforces transparency.
                                    </p>
                                </div>
                                
                                <video 
                                    src="/videos/project3-videos/Aura-History.mov"
                                    loop 
                                    muted
                                    autoPlay
                                    playsInline
                                    className="p-final-design-video"
                                />
                            </div>
                        </div>

                        {/* Everything In Action Subsection */}
                        <div className="final-design-content">
                            <div className="final-design-row">
                                <div className="p-final-design-column">
                                    <h3 className="p-section-subtitle">Everything In Action</h3>
                                    <p className="research-description">
                                        Aura differs from traditional thermostats by combining smart sensing and real-time app feedback. Motion sensors 
                                        detect which rooms are occupied, the system adjusts comfort accordingly, and the app updates to reflect these changes instantly. The app 
                                        is fully functional, allowing users to log in, register, complete onboarding, manage settings, upload profile pictures, track energy savings, 
                                        and view a history of room occupancy, temperature changes, and motion on/off. For more direct control, the dial offers quick, tactile adjustments 
                                        for the whole home or specific rooms. Informative notifications and insights explain changes and show impact over time, creating an experience 
                                        that feels intuitive, responsive, and supportive.
                                    </p>
                                </div>
                                
                                {/* <video 
                                    src="/videos/project3-videos/Aura-All.mov"
                                    loop 
                                    muted
                                    autoPlay
                                    playsInline
                                    className="p-final-design-video"
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>

                {/* Research */}
                <div className="research-container">
                    <h1 className="section-header">More coming soon...</h1>  
                </div>
            </section>
        </div>
    )
}

export default ProjectThree;