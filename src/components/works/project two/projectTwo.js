import React, { useEffect, useState } from "react";
import './projectTwo.css'
import { BiSearchAlt, BiBook, BiRotateRight, BiSmile } from "react-icons/bi";
import { TbClipboardX, TbClipboardCheck, TbMoodSearch, TbArrowRight } from "react-icons/tb";
import { useLocation, useNavigate } from 'react-router-dom';

import Square from "../components/square/square";
import Rectangle from "../components/theme-card/rectangle";
import LargeRectangle from "../components/competitor-card/largeRectangle";
import PercentSquare from "../components/percent-square/percent-square";

const ProjectTwo = () => {
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
        <div className="project-container" id="SpartanSync">
            <div className="project-content" id="top">
                <div className="project-block">
                    <div className="text-column">
                        <h3 className="project-header">Case Study</h3>
                        <h1 className="project-title">SpartanSync</h1>
                        <p className="project1description">Smart scheduling for busy students.</p>
                    </div>
                    <div className="project-content-items">
                        <img className="project2-image" src="/images/spartansync-image1.png" alt="SpartanSync"/>
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
                                <li>Figjam</li>
                                <li>Google Form</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Team</h2>
                            <ul className="background-design-list">
                                <li>Sabrina Quach</li>
                                <li>SJSU Students (client)</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">My Role</h2>
                            <ul className="role-tool-list background-design-list">
                                <li>Ideation</li>
                                <li>UX Research / Testing</li>
                                <li>Interface Design</li>
                                <li>Prototyping</li>
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
                    <h1 className="section-header">Meet SpartanSync</h1>
                    <p className="research-description">
                        SpartanSync simplifies course planning for SJSU students by turning a stressful, fragmented process into a clear 
                        and visual experience. Designed to eliminate tab-hopping and manual cross-checking, SpartanSync helps students 
                        quickly generate, compare, and refine valid class schedules all in one place. Ensuring that students can make confident 
                        academic decisions with less conflict and stress.
                    </p>

                        {/* Degree-Aware Planning Subsection */}
                        <div className="final-design-content">
                            <div className="final-design-row">
                                <div className="p-final-design-column">
                                    <h3 className="p-section-subtitle">Degree-Aware Planning</h3>
                                    <p className="research-description">
                                        SpartanSync shows students their degree progress, requirements, and scheduling limits upfront, so they know exactly 
                                        where they stand before building a schedule. Academic progress is shown through clear progress bars, allowing students 
                                        to instantly understand what’s done, what remains, and how close they are to graduating.
                                    </p>
                                </div>
                                
                                <video 
                                    src="/videos/project2-videos/Degree-Aware-Planning-Video.mov"
                                    loop 
                                    muted
                                    autoPlay
                                    playsInline
                                    className="p-final-design-video"
                                />
                            </div>
                        </div>
                        
                        {/* Guided Progress Flow Subsection */}
                        <div className="final-design-content">
                            <div className="final-design-row">
                                <div className="p-final-design-column">
                                    <h3 className="p-section-subtitle">Guided Progress Flow</h3>
                                    <p className="research-description">
                                        SpartanSync uses a clear, step-by-step progress indicator to direct students throughout the scheduling journey. Moreover, 
                                        student-centered language is integrated into each step, replacing system-heavy terminology with wording students already 
                                        understand. This combination helps reduce confusion, reinforces clarity, and allows students to move through the process 
                                        confidently without needing additional explanation.
                                    </p>
                                </div>
                                
                                <video 
                                    src="/videos/project2-videos/Guided-Progress-Flow-Video.mov"
                                    loop 
                                    muted
                                    autoPlay
                                    playsInline
                                    className="p-final-design-video"
                                />
                            </div>
                        </div>

                        {/* Focused Schedule Exploration Subsection */}
                        <div className="final-design-content">
                            <div className="final-design-row">
                                <div className="p-final-design-column">
                                    <h3 className="p-section-subtitle">Focused Schedule Exploration</h3>
                                    <p className="research-description">
                                        To prevent cognitive overload, class times are organized into structured, digestible blocks that make it easier to scan, compare, 
                                        and evaluate options in one place. Students can quickly see all the details they usually check like course, time, professor, and 
                                        ratings. This focused layout organizes class options into a single, easy-to-scan view, showing only schedules that fit without conflicts.
                                    </p>
                                </div>
                                
                                <video 
                                    src="/videos/project2-videos/Focused-Schedule-Exploration-Video.mov"
                                    loop 
                                    muted
                                    autoPlay
                                    playsInline
                                    className="p-final-design-video"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>

                {/* Research */}
                <div className="research-container">
                    {/* Setting the Scene Section */}
                    <div className="setting-the-scene-container">
                        <h3 className="section-subheader">research</h3>
                        <h1 className="section-header">Setting the Scene</h1>
                        <div className="challenge-column">
                            <p className="research-description">
                                Course registration at SJSU is a pivotal, time-sensitive process. Students must juggle degree requirements, 
                                class availability, professor preferences, and personal schedules often across multiple disconnected systems.
                                <br /> <br />
                                Today, many students rely on a patchwork of tools: MyScheduler, MyPlanner, class listings, Google Sheets, 
                                RateMyProfessor, and third-party sites. This fragmented experience makes planning slow, error-prone, and 
                                mentally exhausting.
                                <br /> <br />
                            </p>
                        </div>
                        <p className="challenge-question">SpartanSync was designed to replace this chaos with a single, intuitive scheduling experience. </p>
                        <div className="horizontal-line" />
                    </div>
                    
                    {/* The Problem Section */}
                    <div className="problem-container">
                        <h1 className="section-header">the Problem</h1>
                        <div className="solution-column">
                            <p className="research-description">
                                There is no simple, centralized way for SJSU students to generate and compare all valid course schedules in one 
                                place. As a result, students waste time, feel overwhelmed, and risk missing ideal class combinations.
                            </p>
                        </div>
                        <h3 className="section-subtitle">Why this matters</h3>
                        <ul className="design-with-intent-list">
                            <li className="design-with-intent-list-item">Registration windows are limited</li>
                            <li className="design-with-intent-list-item">Schedule conflicts can delay graduation</li>
                            <li className="design-with-intent-list-item">Stress disproportionately affects working students and commuters</li>
                        </ul>
                        <div className="horizontal-line" />
                    </div>

                    {/* The Solution Section */}
                    <div className="solution-container">
                        <h1 className="section-header">the Solution</h1>
                        <div className="solution-column">
                            <p className="research-description">
                                SpartanSync streamlines class planning by integrating degree progress, course availability, and schedule visualization into one cohesive flow.
                                By pulling relevant academic data upfront, students can instantly explore all valid schedule combinations—without switching tabs or manually cross-checking information.
                            </p>
                        </div>
                        <h3 className="section-subtitle-orange">Why i care</h3>
                            <p className="research-description">
                                As an SJSU student, I’ve personally experienced the frustration of learning and relearning the university’s scheduling 
                                systems each semester. Designing SpartanSync meant designing a solution I genuinely needed, one that reduces stress and 
                                empowers students to make faster, better informed academic decisions.
                            </p>
                        <div className="horizontal-line" />
                    </div>

                    {/* Where the Current System Falls Short Section */}
                    <div className="understanding-challenges-container">
                    <h1 className="section-header">Where the Current System Falls Short</h1>
                        <div className="interviews-with-creatives-column">
                            <p className="research-description">
                                Initial analysis revealed major usability issues across the existing scheduling tools. Students often felt lost when first 
                                entering the system due to unclear starting points and fragmented workflows spread across MyPlanner, MyScheduler, and class 
                                listings. Added classes and time conflicts were difficult to see early, forcing students to rely on external notes or 
                                spreadsheets to keep track of information. As a result, students expended significant cognitive effort just to piece together 
                                a basic schedule, making the process stressful and error-prone.
                            </p>
                            <div className="current-state-image-row">
                                <div className="prioritization-content-column">
                                    <h4 className="current-state-image-label">Students don’t know where to start</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/project2-images/opening-view.png"
                                            alt="Feasibility Chart"
                                            className="current-state-image"
                                            onClick={() => setModalImage({
                                                src: '/images/project2-images/opening-view.png',
                                                alt: 'Enrollment opening view'
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="prioritization-content-column">
                                    <h4 className="current-state-image-label">Must jump back and forth to see added classes</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/project2-images/added-class-in-cart.png"
                                            alt="Feasibility Chart"
                                            className="current-state-image"
                                            onClick={() => setModalImage({
                                                src: '/images/project2-images/added-class-in-cart.png',
                                                alt: 'Added class in cart'
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="current-state-image-row">
                                <div className="prioritization-content-column">
                                    <h4 className="current-state-image-label">Class listings are dense and lack key details</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/project2-images/class-list.png"
                                            alt="Feasibility Chart"
                                            className="current-state-image"
                                            onClick={() => setModalImage({
                                                src: '/images/project2-images/class-list.png',
                                                alt: 'List of classes'
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="prioritization-content-column">
                                    <h4 className="current-state-image-label">Text-heavy MyProgress is difficult to interpret</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/project2-images/myprogress.png"
                                            alt="Feasibility Chart"
                                            className="current-state-image"
                                            onClick={() => setModalImage({
                                                src: '/images/project2-images/myprogress.png',
                                                alt: 'MyProgress student view'
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="research-description current-state-description">
                                This analysis revealed that students spend a significant amount of mental effort just to piece together basic information, 
                                turning what should be a planning task into a stressful, error-prone process. Screens showing class search, added courses, 
                                and degree progress lack visual continuity, forcing students to constantly shift attention and piece together information 
                                across multiple pages.
                            </p>
                        </div>
                        <div className="horizontal-line" /> 
                    </div>

                    {/* Understanding Student Scheduling Challenges Section */}
                    <div className="current-state-container">
                    <h1 className="section-header">Understanding Student Scheduling Challenges</h1>
                        <div className="current-state-column">
                            <p className="research-description">
                                The goal of research was to identify where students struggle most when building schedules and what features would 
                                meaningfully improve the experience. By understanding these challenges, the objective is to design a tool that 
                                streamlines scheduling and enhances the student experience.
                            </p>
                            <p className="research-description">To stay focused, I defined SMART objectives...</p>
                        </div>
                        <div className="p-square-row">
                            <Square 
                                title="Specific"
                                text="Identify common scheduling challenges and desired features"
                            />
                            <Square 
                                title="Measurable"
                                text="Collect insights through surveys and interviews"
                            />
                            <Square 
                                title="Achievable"
                                text="Improve usability through clear, flexible design"
                            />
                            <Square 
                                title="Relevant"
                                text="Address visualization, conflicts, and inefficiency"
                            />
                            <Square 
                                title="Time-bound"
                                text="Complete research within two weeks"
                            />
                        </div>

                        {/* Who I Spoke With Subsection */}
                        <h3 className="section-subtitle">Who I Spoke With</h3>
                        <div className="empathy-maps-column">
                            <p className="research-description">
                                My target audience consisted of current SJSU undergraduate and graduate students across different majors and academic years.
                            </p>
                            <div className="painpoints-row">
                                <Rectangle
                                    title="Inclusion Criteria"
                                    icon={<TbClipboardCheck />}
                                    text="Current SJSU students, Prior use of SJSU registration tools, Actively plan their own schedules"
                                />
                                <Rectangle
                                    title="Exclusion Criteria"
                                    icon={<TbClipboardX />}
                                    text="Incoming freshmen, Students who rely entirely on advisors, University staff or faculty"
                                />
                                <Rectangle
                                    title="Methods"
                                    icon={<TbMoodSearch />}
                                    text="User interviews, Surveys, Observations, Cognitive walkthroughs, Think-aloud protocols"
                                />
                            </div>
                            <p className="research-description">
                                In which we were able to dive deeper into the problem of AI feeling emotionless and taking away 
                                creative control. User interviews helped in honing into creating a product that collaborated under 
                                the users’ control.
                            </p>
                        </div>

                        {/* Key Research Questions Subsection */}
                        <h3 className="section-subtitle">Key Research Questions</h3>
                        <div className="research-question-row">
                            <LargeRectangle
                                title="Primary"
                                name1="Question 1"
                                innerText1="What challenges do students face when creating schedules?"
                                name2="Question 2"
                                innerText2="What tools do they currently use?"
                                name3="Question 3"
                                innerText3="What features would save the most time?"
                            />
                            <LargeRectangle
                                title="Secondary"
                                name1="Question 1"
                                innerText1="How do other universities design scheduling tools?"
                                name2="Question 2"
                                innerText2="Why do students turn to third-party platforms?"
                                name3="Question 3"
                                innerText3="What reduces stress during scheduling?"
                            />
                        </div>

                        {/* What I Learned Subsection */}
                        <h3 className="section-subtitle">What I Learned </h3>
                        <p className="research-description">
                            I interviewed 20 SJSU students and found that most rely on third-party sites due to the fragmented experience 
                            of the official enrollment system. 
                            When asked on the biggest challenges SJSU students face when creating their class schedules, students said...
                        </p>
                        <div className="research-question-row">
                            <div className="interview-quote-column">
                                <img className="interview-quote-circle" src="/images/project2-images/student1.png" alt="Student 1"/>
                                <p className="interview-quote-description">
                                    "I think a lot of the time the software glitches so that’s annoying. Also, I have to input a lot of information 
                                    in order to find a specific class."
                                </p>
                            </div>
                            <div className="interview-quote-column">
                                <img className="interview-quote-circle" src="/images/project2-images/student2.png" alt="Student 2"/>
                                <p className="interview-quote-description">
                                    "I feel like we’re all left to figure out what we need and I have to take pictures of "MyProgress",
                                    class listings, “MyRoadmap”, etc because it only allows one tab open."
                                </p>
                            </div>
                            <div className="interview-quote-column">
                                <img className="interview-quote-circle" src="/images/project2-images/student3.png" alt="Student 3"/>
                                <p className="interview-quote-description">
                                    "The scheduler tool isn’t built into the class search, so I can’t see how one choice affects my next class selection."
                                </p>
                            </div>
                        </div>
                        
                        <div className="research-question-row">
                            <PercentSquare
                                percent="75%"
                                text="found the official SJSU enrollment system difficult to use."
                            />
                            <PercentSquare
                                percent="90%"
                                text="relied on external sites to create schedules."
                            />
                        </div>
                        <div className="horizontal-line" />
                    </div>
                </div>

                {/* Define */}
                <div className="define-container">
                    <h3 className="section-subheader">Define</h3>

                    {/* Persona Section */}
                    <h3 className="section-header">Persona</h3>
                    <p className="research-description">To guide my design, a student-centered persona was created to understand scheduling challenges.</p>
                    <div className="persona-row">
                        <div className="persona-circle" />
                        <p className="research-description">
                            Giselle is a student at San Jose State University, she is a fourth year Management Information Systems 
                            major. During her four years at SJSU, she has always dreaded planning her schedule every semester. The 
                            constant back and forth between “MyScheduler”, “MyPlanner”, class time listings, and Google sheets is 
                            overwhelming every time. She wishes that there was an application that would make her life easier each 
                            semester.
                        </p>
                    </div>
                    <div className="horizontal-line" />

                    {/* Key Findings & Opportunities Section */}
                    <div className="findings-container">
                        <h1 className="section-header">Key Findings & Opportunities</h1>
                        <div className="experience-drivers-column">
                            <p className="research-description">Research revealed consistent frustrations</p>
                            <ul className="findings-list">
                                <li className="design-with-intent-list-item">Tabs automatically close, forcing students to write information down</li>
                                <li className="design-with-intent-list-item">Core features live in separate systems</li>
                                <li className="design-with-intent-list-item">No way to plan schedules collaboratively</li>
                                <li className="design-with-intent-list-item">No degree-aware recommendations</li>
                                <li className="design-with-intent-list-item">Professor ratings require external tools</li>
                                <li className="design-with-intent-list-item">“My Progress” is difficult to interpret</li>
                            </ul>
                            <p className="findings-question">
                                How might we provide an intuitive, visual scheduling tool that allows SJSU students to plan 
                                courses efficiently without conflicts or wasted effort?
                            </p>
                        </div>
                        <div className="horizontal-line" />
                    </div>
                </div>

                {/* Design & Iterate */}
                <div className="design-iterate-container">
                    {/* High-fidelity Wireframes Section */}
                    <div className="hifi-wireframe-container">
                        <h3 className="section-subheader">Design & Iterate</h3>
                        <h1 className="section-header">High-fidelity wireframe</h1>
                        <div className="style-guide-column">
                            <p className="research-description">
                                For user testing, we used the following high-fidelity wireframe.
                            </p>
                            <video 
                                src="/videos/project2-videos/SpartanSync-HiFi-wireframe.mov" 
                                loop 
                                muted
                                autoPlay
                                playsInline
                                className="p-hifi-wireframe-video"
                            />
                        </div>


                        {/* Key Feedback Subsection */}
                        <h3 className="section-subtitle">Key Feedback</h3>
                        <div className="key-feedback-column">
                            <p className="key-feedback-title">
                                No clear indication of progress in the process
                                <ul className="key-feedback-list">
                                    <li>Users were left wondering how many more steps until they finish scheduling.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                “My Progress” was difficult to understand
                                <ul className="key-feedback-list">
                                    <li>Users felt it was an improvement, yet still not clear enough.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                Too many steps slowed the process
                                <ul className="key-feedback-list">
                                    <li>Extra steps made the scheduling process longer than needed.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                Confusing language made it unclear what the next step was
                                <ul className="key-feedback-list">
                                    <li>Provide clearer language to guide the user.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                Class listings were still overwhelming and provided no additional information
                                <ul className="key-feedback-list">
                                    <li>Reduce cognitive load and add key information students' look for.</li>
                                </ul>
                            </p>
                        </div>

                        <div className="horizontal-line" />
                    </div>
                    
                    {/* Design Iterations Section */}
                    <div className="design-iterations-container">
                        <h1 className="section-header">Design Iterations</h1>
                        <p className="research-description">
                            Taking into account the feedback we got from our user testing, we simplified our navigation 
                            and provided clearer indicators of where the user is. 
                        </p>

                        <h3 className="design-iterations-subtitle">Progress Clarity</h3>
                        <div className="design-iterations-row">
                            <div className="design-iterations-content-row">
                                <div className="design-iterations-inner-row">
                                    <div className="arrow-before-after">
                                        <div className="design-iteration-inner-inner-column">
                                            <h3 className="design-iterations-subtitle-content">before</h3>
                                            <img className="design-iteration-img" src="/images/project2-images/before1.png" alt="Before Design Iteration 1"/>
                                        </div>
                                        <TbArrowRight className="arrow-icon" />
                                        <div className="design-iteration-inner-inner-column">
                                            <h3 className="design-iterations-subtitle-content">after</h3>
                                            <img className="design-iteration-img" src="/images/project2-images/after1.png" alt="After Design Iteration 1"/>                                    </div>
                                    </div>
                                </div>

                                    <div className="design-iterations-inner-column">
                                        <div className="design-iteration-card">
                                            <h3 className="problem-solution-subtitle">Problem</h3>
                                            <div className="problem-solution-column">
                                                <p className="problem-solution-text">❌ Users didn’t know where they were or when they would finish</p>
                                            </div>
                                        </div>
                                        <div className="design-iteration-card">
                                            <h3 className="problem-solution-subtitle">Solution</h3>
                                            <div className="problem-solution-column">
                                                <p className="problem-solution-text">✅ Added a clear, persistent progress indicator</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <h3 className="design-iterations-subtitle">Reducing Cognitive Load</h3>
                        <div className="design-iterations-row">
                            <div className="design-iterations-content-row">
                                <div className="design-iterations-inner-row">
                                    <div className="arrow-before-after">
                                        <div className="design-iteration-inner-inner-column">
                                            <h3 className="design-iterations-subtitle-content">before</h3>
                                            <img className="design-iteration-img" src="/images/project2-images/before2.png" alt="Before Design Iteration 2"/>
                                        </div>
                                        <TbArrowRight className="arrow-icon" />
                                        <div className="design-iteration-inner-inner-column">
                                            <h3 className="design-iterations-subtitle-content">after</h3>
                                            <img className="design-iteration-img" src="/images/project2-images/after2.png" alt="After Design Iteration 2"/>                                    </div>
                                    </div>
                                </div>

                                    <div className="design-iterations-inner-column">
                                        <div className="design-iteration-card">
                                            <h3 className="problem-solution-subtitle">Problem</h3>
                                            <div className="problem-solution-column">
                                                <p className="problem-solution-text">❌ Class times were cluttered</p>
                                            </div>
                                        </div>
                                        <div className="design-iteration-card">
                                            <h3 className="problem-solution-subtitle">Solution</h3>
                                            <div className="problem-solution-column">
                                                <p className="problem-solution-text">✅ Grouped class options into structured, scannable blocks</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <h3 className="design-iterations-subtitle">Rethinking Progress Visualization</h3>
                        <div className="design-iterations-row">
                            <div className="design-iterations-content-row">
                                <div className="design-iterations-inner-row">
                                    <div className="arrow-before-after">
                                        <div className="design-iteration-inner-inner-column">
                                            <h3 className="design-iterations-subtitle-content">before</h3>
                                            <img className="design-iteration-img" src="/images/project2-images/before3.png" alt="Before Design Iteration 3"/>
                                        </div>
                                        <TbArrowRight className="arrow-icon" />
                                        <div className="design-iteration-inner-inner-column">
                                            <h3 className="design-iterations-subtitle-content">after</h3>
                                            <img className="design-iteration-img" src="/images/project2-images/after3.png" alt="After Design Iteration 3"/>                                    </div>
                                    </div>
                                </div>

                                    <div className="design-iterations-inner-column">
                                        <div className="design-iteration-card">
                                            <h3 className="problem-solution-subtitle">Problem</h3>
                                            <div className="problem-solution-column">
                                                <p className="problem-solution-text">❌ Stacked bars felt abstract and unhelpful</p>
                                                <p className="problem-solution-text">❌ Confusing terminology</p>
                                            </div>
                                        </div>
                                        <div className="design-iteration-card">
                                            <h3 className="problem-solution-subtitle">Solution</h3>
                                            <div className="problem-solution-column">
                                                <p className="problem-solution-text">✅ Reworked progress visualization to clearly show completion per category</p>
                                                <p className="problem-solution-text">✅ Replaced system language with student-friendly terms</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="horizontal-line" />
                    </div>
                </div>

                {/* Exploring What’s Next */}
                <div className="reflection-container">
                    <h1 className="section-header">Exploring What’s Next</h1>
                    <p className="research-description">
                        Designing SpartanSync was personal, it came from my own frustration with SJSU’s enrollment system and a desire 
                        to create the tool I wish I had as a student. Through interviews, testing, and iteration, I saw how much stress 
                        scheduling causes and how powerful clarity can be in reducing that burden. This project reinforced that thoughtful 
                        design can genuinely make difficult processes feel more manageable.
                        <br/> <br/> 
                        Looking ahead, I see SpartanSync evolving beyond scheduling into a trusted academic companion. With deeper integration 
                        into degree progress, smarter recommendations, and collaborative planning features, it has the potential to help students 
                        feel more confident, supported, and in control of their path to graduation.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ProjectTwo;