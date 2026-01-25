import React, { useEffect, useRef, useState } from "react";
import './projectThree.css'
import { BiSearchAlt, BiBook, BiRotateRight, BiSmile } from "react-icons/bi";
import { TbBoltOff, TbBrandCss3, TbBrandFigma, TbBrandHtml5, TbBrandJavascript, TbBrandReact, TbBrandSupabase, TbBrandVisualStudio, TbHeartHandshake, TbMoodConfuzed, TbRepeat, TbUserCheck, TbWorldDollar } from "react-icons/tb";
import { useLocation, useNavigate } from 'react-router-dom';

import Rectangle from "../components/theme-card/rectangle";
import SmallRectangle from "../components/core-card/smallRectangle";

const ProjectThree = () => {
    const [modalImage, setModalImage] = useState(null);
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

    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
      
    useEffect(() => {
        const v1 = video1Ref.current;
        const v2 = video2Ref.current;
      
        if (!v1 || !v2) return;
      
        const syncVideos = () => {
            v2.currentTime = v1.currentTime;
        };
      
        //start both videos together
            Promise.all([v1.play(), v2.play()]).catch(() => {
        });
      
            v1.addEventListener("timeupdate", syncVideos);
      
            v1.addEventListener("ended", () => {
                v2.currentTime = 0;
                v2.play();
                v1.play();
            });
      
            return () => {
                v1.removeEventListener("timeupdate", syncVideos);
            };
    }, []);      

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

                    {/* Design Process */}
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
                                <h2 className="background-subtitle design-iterate">Design & Develop</h2>
                            </div>
                            <ul className="role-tool-list background-design-list">
                                <li>Hardware components</li>
                                <li>Software components</li>
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
                                        Aura’s physical dial is designed to feel familiar, tactile, and effortless. Like a traditional thermostat, users can turn the dial to 
                                        quickly adjust the temperature for the entire home. As users enable more advanced features, the dial adapts to support smarter, more 
                                        precise control—while still keeping the interaction simple and intuitive.
                                    </p>
                                </div>
                            </div>

                            {/* Motion On */}
                            <div className="final-design-content">
                                <div className="two-final-design-row">
                                    <div className="p-final-design-column">
                                        <h3 className="p-section-subtitle">Motion On</h3>
                                        <p className="research-description">
                                            When motion sensing is turned on, the dial becomes smarter and lets users control the temperature in only the rooms that are being used. 
                                            This helps keep people comfortable while avoiding wasted energy in empty rooms. The experience stays simple for everyday use, but becomes 
                                            more powerful as users explore Aura’s smarter features.
                                        </p>
                                    </div>
                                    <div className="p-final-design-row-vids">
                                        <video 
                                            ref={video1Ref}
                                            src="/videos/project3-videos/Aura-App-Motion-On.mov"
                                            loop 
                                            muted
                                            autoPlay
                                            playsInline
                                            className="p2-final-design-video"
                                        />
                                        <video 
                                            ref={video2Ref}
                                            src="/videos/project3-videos/Aura-Hardware-App-Motion-On1.mov"
                                            loop 
                                            muted
                                            autoPlay
                                            playsInline
                                            className="p2-final-design-video video2-border"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Motion Off */}
                            <div className="final-design-content">
                                <div className="two-final-design-row">
                                    <div className="p-final-design-column">
                                        <h3 className="p-section-subtitle">Motion Off</h3>
                                        <p className="research-description">
                                            When motion sensing is disabled, the dial behaves like a standard thermostat. Adjustments apply to the whole home, giving users 
                                            straightforward, predictable control over their environment.
                                        </p>
                                    </div>
                                    
                                    <div className="p-final-design-row-vids">
                                        <video 
                                            ref={video1Ref}
                                            src="/videos/project3-videos/Aura-App-Motion-Off.mov"
                                            loop 
                                            muted
                                            autoPlay
                                            playsInline
                                            className="p2-final-design-video"
                                        />
                                        <video 
                                            ref={video2Ref}
                                            src="/videos/project3-videos/Aura-Hardware-App-Motion-Off.mov"
                                            loop 
                                            muted
                                            autoPlay
                                            playsInline
                                            className="p2-final-design-video video2-border"
                                        />
                                    </div>
                                </div>
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
                                    src="/videos/project3-videos/Aura-App-History.mov"
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
                            <div className="two-final-design-row">
                                <div className="p-final-design-column">
                                    <h3 className="p-section-subtitle">Everything In Action</h3>
                                    <p className="research-description">
                                        Aura differs from traditional thermostats by combining smart sensing and real-time app feedback. Motion sensors 
                                        detect which rooms are occupied, the system adjusts comfort accordingly, and the app updates to reflect these changes instantly. 
                                        <br/> <br/>
                                        The app is fully functional, with login, register, onboarding, settings, profile uploads, energy tracking, and a history of room activity 
                                        and temperature changes. For more direct control, the dial allows quick, tactile adjustments for the whole home or individual rooms. Clear 
                                        notifications explain changes and highlight impact over time, creating an experience that feels intuitive and responsive.
                                    </p>
                                </div>

                                <div className="p-final-design-row-vids">
                                    <video 
                                        ref={video1Ref}
                                        src="/videos/project3-videos/Aura-App.mov"
                                        loop 
                                        muted
                                        autoPlay
                                        playsInline
                                        className="p2-final-design-video"
                                    />
                                    <video 
                                        ref={video2Ref}
                                        src="/videos/project3-videos/Aura-Hardware-App.mov"
                                        loop 
                                        muted
                                        autoPlay
                                        playsInline
                                        className="p2-final-design-video video2-border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>

                {/* Research */}
                <div className="research-container">
                    {/* The Current Experience Section */}
                    <div className="current-experience-container">
                        <h3 className="section-subheader">research</h3>
                        <h1 className="section-header">The Current Experience</h1>
                        <div className="current-experience-column">
                            <p className="research-description">
                                Smart thermostats are meant to improve energy efficiency, but most still control the whole home without considering which 
                                rooms are actually in use. This results in:
                            </p>
                            <ul className="design-with-intent-list">
                                <li className="design-with-intent-list-item">Unnecessary energy consumption</li>
                                <li className="design-with-intent-list-item">Higher utility bills</li>
                                <li className="design-with-intent-list-item">Shortened HVAC lifespan</li>
                                <li className="design-with-intent-list-item">Increased environmental impact</li>
                            </ul>
                            <p className="research-description">
                                These issues disproportionately affect low‑income households, where access to advanced smart home technology is limited and utility 
                                costs consume a significantly larger portion of income.
                            </p>
                            <p className="challenge-question">Aura was created to rethink how thermostats respond to real human behavior, not static schedules.</p>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    {/* The Problem Section */}
                    <div className="problem-container">
                        <h1 className="section-header">the Issue</h1>
                        <div className="challenge-column">
                            <p className="research-description">
                                Most homes waste energy and money because heating and cooling systems treat the entire house the same, even when only one or two rooms are 
                                actually being used. While smart thermostats offer convenience, they still heat or cool every room at once rather than responding to real, 
                                room-level occupancy. This inefficiency disproportionately affects low-income households, who face higher energy burdens with fewer accessible 
                                ways to reduce costs. The result is a system that is technically “smart,” but still misaligned with how people actually live in their homes.
                            </p>
                            <p className="research-description">This poses the question on...</p>
                        </div>

                        <p className="challenge-question">How might we reduce energy waste and utility costs by making heating and cooling responsive to actual room usage, while remaining affordable and accessible?</p>
                        <div className="horizontal-line" />
                    </div>

                    {/* The Solution Section */}
                    <div className="solution-container">
                        <h1 className="section-header">the Solution</h1>
                        <div className="solution-column">
                            <p className="research-description">
                                Aura uses motion sensors to detect room occupancy in real time, dynamically adjusting temperature settings to focus only on spaces in use.
                                The system prioritizes efficiency, comfort, and affordability, making smart energy management accessible to a wider range of households.
                                <br/> <br/>
                                Paired with the Aura app, users receive:
                            </p>
                        </div>
                        <ul className="design-with-intent-list">
                            <li className="design-with-intent-list-item">Quick, tactile control via the dial for the whole home or individual rooms</li>
                            <li className="design-with-intent-list-item">Real‑time notifications</li>
                            <li className="design-with-intent-list-item">Energy usage summaries</li>
                        </ul>
                        <div className="horizontal-line" />
                    </div>

                    {/* Understanding Real Behavior Section */}
                    <div className="understanding-challenges-container">
                        <h1 className="section-header">Understanding Real Behavior</h1>
                        <div className="real-behavior-column">
                            <p className="research-description">
                                We began by examining how people actually interact with thermostats in daily life. A key insight quickly emerged:
                            </p>
                            <p className="real-behavior-question">People do not behave according to predictable schedules.</p>
                            <p className="research-description">
                                They move fluidly between rooms, work irregular hours, and rarely update thermostat settings to reflect daily changes. 
                                This mismatch between human behavior and system logic is where most energy waste occurs.
                            </p>
                        </div>

                        {/* Social & Environmental Context Subsection */}
                        <h3 className="section-subtitle">Social & Environmental Context</h3>
                        <p className="research-description">
                            Research also revealed that low-income households spend over twice the percentage of their income on energy compared to the national 
                            average. High upfront costs and complex installations prevent many families from benefiting from existing smart thermostat solutions.
                            <br/><br/>
                            This reframed Aura as more than a convenience product, it became a design problem centered on:
                        </p>
                        <ul className="design-with-intent-list">
                            <li className="design-with-intent-list-item">Accessibility</li>
                            <li className="design-with-intent-list-item">Affordability</li>
                            <li className="design-with-intent-list-item">Equity</li>
                            <li className="design-with-intent-list-item">Sustainability</li>
                        </ul>

                        {/* Technical & Engineering Constraints Subsection */}
                        <h3 className="section-subtitle">Technical & Engineering Constraints</h3>
                        <p className="research-description">
                            Working closely with engineers meant every UX decision had to stay grounded in technical reality. We carefully considered…
                        </p>
                        <ul className="design-with-intent-list">
                            <li className="design-with-intent-list-item">Motion sensor accuracy</li>
                            <li className="design-with-intent-list-item">Placement limitations</li>
                            <li className="design-with-intent-list-item">Latency between detection and HVAC response</li>
                            <li className="design-with-intent-list-item">Hardware cost tradeoffs</li>
                            <li className="design-with-intent-list-item">Scalability for different home sizes</li>
                        </ul>
                        <p className="research-description">
                            <br/>
                            Rather than designing idealized interfaces, I shaped the UX around what the system could realistically support, ensuring 
                            the experience felt reliable and trustworthy instead of misleading.
                        </p>

                        {/* Key Feedback Subsection */}
                        <h3 className="section-subtitle">Key Insights</h3>
                        <p className="research-description">From research and technical constraints, several themes emerged: <br/><br/></p>
                        <div className="themes-wrapper">
                            <div className="theme-rectangle-row">
                                <Rectangle 
                                    title="Energy Waste"
                                    icon={<TbBoltOff />}
                                    text="Much of the energy loss happens when heating or cooling runs in spaces no one is using."
                                />
                                <Rectangle 
                                    title="Adaptive Automation"
                                    icon={<TbRepeat />}
                                    text="Systems should respond to how people actually live, not fixed schedules."
                                />
                                <Rectangle 
                                    title="Transparency"
                                    icon={<TbHeartHandshake />}
                                    text="Users are more comfortable with automation when they understand why changes happen."
                                />
                                <Rectangle 
                                    title="Trust Gap"
                                    icon={<TbMoodConfuzed />}
                                    text="Unclear feedback makes smart systems feel intimidating. When system behavior isn’t explained, users feel unsure and disconnected."
                                />
                                <Rectangle 
                                    title="Accessible Sustainable Solutions"
                                    icon={<TbWorldDollar />}
                                    text="Energy-saving tools only work at scale when they are affordable for all households."
                                />
                                <Rectangle 
                                    title="Habit Alignment"
                                    icon={<TbUserCheck />}
                                    text="Smart systems work best when they naturally fit into users’ existing habits, making them feel natural and easy to use."
                                />
                            </div>
                        </div>

                        <div className="horizontal-line" /> 
                    </div>  
                </div>

                {/* Define */}
                <div className="define-container">
                    <h3 className="section-subheader">Define</h3>

                    {/* Design Principles Section */}
                    <div className="design-principles-container">
                        <h1 className="section-header">Design Principles</h1>
                        <div className="design-principles-column">
                            <p className="research-description">I established guiding principles to anchor product decisions across both UX and system behavior...</p>
                            <div className="core-row">
                                <SmallRectangle
                                    text="Behavior-aware, not schedule-dependent"
                                />
                                <SmallRectangle
                                    text="Automation with transparency"
                                />
                                <SmallRectangle
                                    text="Low effort, high impact interactions"
                                />
                                <SmallRectangle
                                    text="Accessible by design (financially and cognitively)"
                                />
                                <SmallRectangle
                                    text="Clarity over complexity"
                                />
                            </div>
                        </div>
                        <div className="horizontal-line" />
                    </div>
                    
                    {/* Dial Design Exploration Section */}
                    <div className="dial-design-exploration-container">
                        <h1 className="section-header">Design Explorations</h1>
                        <p className="research-description">
                            A core challenge for Aura was designing a thermostat dial that allowed users to control both whole-home and room-level 
                            temperatures intuitively. I explored several interaction patterns, testing how users might understand and manipulate 
                            the dial without confusion.
                        </p>

                        <h3 className="section-subtitle">Dial Design Exploration</h3>
                        <div className="final-design-content">
                            <div className="dial-design-iteration-row">
                                <div className="dial-design-iteration-column">
                                    <img 
                                        src="/images/project3-images/full-circle.png"
                                        alt="Full Circle Thermostat Design 1"
                                        className="dial-design-iteration-img"
                                    />
                                    <p className="dial-design-iteration-description">
                                        Inspired by popular smart thermostats, the full circular dial felt heavy on screen and 
                                        didn’t align with Aura’s goal of being unique.
                                    </p>
                                </div>

                                <div className="dial-design-iteration-column">
                                    <img 
                                        src="/images/project3-images/bottom-half-circle.png"
                                        alt="Half Circle Thermostat At the Bottom Design 2"
                                        className="dial-design-iteration-img"
                                    />
                                    <p className="dial-design-iteration-description">
                                        The bottom half-circle was visually lighter but awkward to reach with the thumb, making precise control more difficult.
                                    </p>
                                </div>
                                
                                <div className="dial-design-iteration-column">
                                    <img 
                                        src="/images/project3-images/cutoff-circle.png"
                                        alt="Cut Off Circle Design 3"
                                        className="dial-design-iteration-img"
                                    />
                                    <p className="dial-design-iteration-description">
                                        Attempted to maximize top/bottom space while keeping a circular interaction, but the cut-off edges caused confusion 
                                        about touch targets.
                                    </p>
                                </div>

                                <div className="dial-design-iteration-column">
                                    <img 
                                        src="/images/project3-images/bar-graph.png"
                                        alt="Bar Graph Dial Design 4"
                                        className="dial-design-iteration-img"
                                    />
                                    <p className="dial-design-iteration-description">
                                        Made per-room adjustments visible simultaneously, but overwhelmed users with too much information at once and did 
                                        not feel intuitive to use.
                                    </p>
                                </div>

                                <div className="dial-design-iteration-column">
                                    <img 
                                        src="/images/project3-images/floor-plan.png"
                                        alt="Floor Plan Design 4"
                                        className="dial-design-iteration-img"
                                    />
                                    <p className="dial-design-iteration-description">
                                        A floor plan layout showed all rooms, but it wasn’t realistic to implement in our timeline, and some users found it confusing.
                                    </p>
                                </div>
                            </div>

                            <h3 className="section-subtitle">Multi-Level Temperature Control Exploration</h3>
                            <div className="design-interation-column">
                                <div className="room-design-iteration-row">
                                    <img 
                                        src="/images/project3-images/temp-control-image1.png"
                                        alt="Temperature Control Design 1"
                                        className="dial-design-iteration-img"
                                    />
                                    <img 
                                        src="/images/project3-images/temp-control-image2.png"
                                        alt="Temperature Control Design 2"
                                        className="dial-design-iteration-img"
                                    />
                                    <img 
                                        src="/images/project3-images/temp-control-image3.png"
                                        alt="Temperature Control Design 3"
                                        className="dial-design-iteration-img"
                                    />
                                    <img 
                                        src="/images/project3-images/temp-control-image4.png"
                                        alt="Temperature Control Design 4"
                                        className="dial-design-iteration-img"
                                    />
                                    <img 
                                        src="/images/project3-images/temp-control-image5.png"
                                        alt="Temperature Control Design 5"
                                        className="dial-design-iteration-img"
                                    />
                                </div>
                                <p className="research-description">
                                    I explored several ways for users to adjust whole-home and room-level temperatures. Early ideas included a dropdown above
                                    the target temperature, a dropdown in the top-left corner, and a dropdown over the occupied room, but these either felt 
                                    cluttered, disconnected from the room being adjusted, or obscured important information. Through iteration, I settled on 
                                    a bottom half-circle dial with tabs, which allowed users to quickly and intuitively switch between rooms or adjust the whole 
                                    home, creating a consistent and approachable interaction throughout the app.
                                </p>
                            </div>

                            <div className="final-design-row">
                                <div className="p-final-design-column">
                                    <h3 className="p-section-subtitle">Final design – half circle with tabs</h3>
                                    <p className="research-description">
                                        The final solution combined a bottom half-circle dial with a tab system to switch between rooms. The tab was inspired by the 
                                        History view and provided a consistent interaction pattern throughout the app. This design balances simplicity, quick access, 
                                        and clarity, allowing users to control individual rooms or the whole home without cognitive overload.
                                    </p>
                                </div>
                                
                                <img 
                                    src="/images/aura-image1.png"
                                    alt="Floor Plan Design 5"
                                    className="design-iteration-img"
                                />
                            </div>
                        </div>
                        <div className="horizontal-line" />
                    </div>
                </div>

                {/* Design & Develop */}
                <div className="design-develop-container">
                    <h3 className="section-subheader">Design & Develop</h3>

                    {/* System & UX Design Section */}
                    <div className="design-principles-container">
                        <h1 className="section-header">System & UX Design</h1>
                        <p className="research-description">
                            Aura was designed to make smart home comfort intuitive and seamless. The intelligence behind the system operates mostly 
                            invisibly, but the reasoning for its actions is always communicated to the user, building trust and understanding. My 
                            work focused on the software experience and UX design, translating complex system behavior into clear, actionable insights 
                            for users, rather than the engineering of the hardware itself.
                        </p>

                        <h3 className="section-subtitle">Hardware & Firmware Specs</h3>
                        <div className="hardware-row">
                            <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                <img
                                    src="/images/project3-images/Aura-Hardware.jpeg"
                                    alt="AuraTherm Hardware Specs"
                                    className="current-state-image"
                                    onClick={() => setModalImage({
                                        src: '/images/project3-images/Aura-Hardware.jpeg',
                                        alt: 'AuraTherm Hardware Specs'
                                    })}
                                />
                            </div>

                            {modalImage && (
                                <div className="image-modal" onClick={() => setModalImage(null)}>
                                <img src={modalImage.src} alt={modalImage.alt} className="modal-img" />
                                </div>
                            )}

                            <div className="hardware-column">
                                <p className="research-description">
                                    The AuraTherm system integrates several hardware components to detect occupancy and manage comfort efficiently...
                                    <br/><br/>
                                </p>
                                <div className="key-feedback-column">
                                    <p className="key-feedback-title">
                                        ESP32 Microcontroller
                                        <ul className="key-feedback-list">
                                            <li>Core processing unit that connect sensors and relays data to the Aura app.</li>
                                        </ul>
                                    </p>
                                    <p className="key-feedback-title">
                                        PIR Motion Sensor (HC-SR501)
                                        <ul className="key-feedback-list">
                                            <li>Consider reinforcing location indicators or section highlights.</li>
                                        </ul>
                                    </p>
                                    <p className="key-feedback-title">
                                        BME280 Environmental Sensor
                                        <ul className="key-feedback-list">
                                            <li>Monitor real-time room temperature and humidity for precise control.</li>
                                        </ul>
                                    </p>
                                    <p className="key-feedback-title">
                                        SSD1306 OLED Display
                                        <ul className="key-feedback-list">
                                            <li>Displays real-time environmental information and status.</li>
                                        </ul>
                                    </p>
                                    <p className="key-feedback-title">
                                        Blue & Orange LEDs
                                        <ul className="key-feedback-list">
                                            <li>Used to simulate HVAC system control.</li>
                                        </ul>
                                    </p>
                                    <p className="key-feedback-title">
                                        PlatformIO using Arduino Framework
                                        <ul className="key-feedback-list">
                                            <li>Written in C++, the ESP32 and sensors are programmed for real-time occupancy detection.</li>
                                        </ul>
                                    </p>
                        
                                </div>
                            </div>
                        </div>

                        <h3 className="section-subtitle">Software & Aura App Overview</h3>
                        <p className="research-description">
                            The Aura software stack powers both the backend intelligence and the mobile app experience. The mobile app, which I coded, 
                            translates sensor data into a clear, intuitive, and engaging user interface.
                            <br/><br/>
                        </p>
                        <div className="themes-wrapper">
                            <div className="theme-rectangle-row">
                                <Rectangle 
                                    title="React Native Expo"
                                    icon={<TbBrandReact />}
                                    text="Powers the cross-platform mobile app interface, enabling smooth animations, interactive room-level controls, and real-time feedback."
                                />
                                <Rectangle 
                                    title="Supabase"
                                    icon={<TbBrandSupabase />}
                                    text="Used for authentication and to store user preferences, profile pictures, and energy usage trends for analytics and reporting."
                                />
                                <Rectangle 
                                    title="Visual Studio Code"
                                    icon={<TbBrandVisualStudio />}
                                    text="Used as the primary code editor for developing, debugging, and managing the application codebase."
                                />
                                <Rectangle 
                                    title="Figma"
                                    icon={<TbBrandFigma />}
                                    text="Used for prototyping, iterating, and testing UX flows."
                                />
                            </div>
                        </div>

                        <h3 className="section-subtitle">Programming Languages</h3>
                        <div className="themes-wrapper">
                            <div className="rectangle-row">
                                <Rectangle 
                                    title="HTML"
                                    icon={<TbBrandHtml5 />}
                                    text="Structures the app’s content and layout, forming the foundation for each screen and component."
                                />
                                <Rectangle 
                                    title="CSS"
                                    icon={<TbBrandCss3 />}
                                    text="Styles the interface with typography, spacing, color, and layout to create a cohesive and visually polished experience."
                                />
                                <Rectangle 
                                    title="JavaScript"
                                    icon={<TbBrandJavascript />}
                                    text="Powers interactivity and application logic, enabling dynamic behaviors like state changes, navigation, and real-time feedback."
                                />
                            </div>
                        </div>

                        <h3 className="section-subtitle">App Features & UX Work</h3>
                        <div className="key-feedback-column">
                            <p className="key-feedback-title">
                                Room-level dashboards
                                <ul className="key-feedback-list">
                                    <li>I designed and built interactive visualizations that clearly communicate occupancy, temperature, and system prioritization per room, making system behavior easy to understand at a glance.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                Energy summaries & trends
                                <ul className="key-feedback-list">
                                    <li>Displays cumulative energy impact using plain language instead of technical metrics, helping users grasp efficiency gains and build confidence in the system.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                Intuitive controls
                                <ul className="key-feedback-list">
                                    <li>Supports both whole-home adjustments and per-room fine-tuning through a tactile dial interface designed to feel natural and easy to use.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                Real-time updates
                                <ul className="key-feedback-list">
                                    <li>Motion sensing triggers immediate visual feedback, allowing users to see the system respond instantly to changes in occupancy and comfort.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>
                
                {/* Exploring What’s Next */}
                <div className="reflection-container">
                    <h1 className="section-header">Lessons from Aura</h1>
                    <p className="research-description">
                        Designing Aura fundamentally changed how I approach smart products. The project pushed me to translate complex system behavior 
                        into intuitive experiences, design automation that feels supportive rather than controlling, and balance real-world feasibility 
                        with ideal user outcomes. Working closely with engineers strengthened my systems thinking and reinforced the role of UX as the 
                        bridge between technical capability and human understanding, while treating accessibility as a core design constraint rather 
                        than an afterthought.
                        <br/> <br/> 
                        With more time and resources, I would continue evolving Aura’s experience by refining multi-room temperature switching for smoother 
                        control, expanding room-level analytics for deeper behavioral insight, and introducing adaptive learning so the system personalizes 
                        over time. Looking ahead, Aura could expand through broader smart home integration and partnerships that help bring accessible solutions 
                        to more households. The vision is to make sustainable living effortless, transparent, and accessible.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ProjectThree;