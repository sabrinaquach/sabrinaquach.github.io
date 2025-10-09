import React, { useEffect, useState } from "react";
import './projectOne.css'
import '../../../assets/fonts/font.css'
import { BiSearchAlt, BiBook, BiRotateRight, BiSmile, BiPen, BiLayer, BiTargetLock, BiSliderAlt, BiBrain, BiShow } from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';
import Square from "../components/square/square";
import Rectangle from "../components/theme-card/rectangle";
import LargeRectangle from "../components/competitor-card/largeRectangle";
import SmallRectangle from "../components/core-card/smallRectangle";
import DesignCard from "../components/design-iteration-card/designCard";

const ProjectOne = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.state?.scrollTo === 'about') {
        const el = document.getElementById('about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
    
          navigate(location.pathname, { replace: true, state: {} });
        }
      }
    }, [location, navigate]);
    

    const [modalImage, setModalImage] = useState(null);

    return (
        <div className="project1-container" id="AdobeFlux">
            <div className="project1-content">
                <div className="project1-block">
                    <div className="text-column">
                        <h3 className="project1-header">Case Study</h3>
                        <h1 className="project1-title">Adobe Flux</h1>
                        <p className="project1-description">Generative AI tool that creates visuals through actions.</p>
                    </div>
                    <div className="project1-content-items">
                        <img className="project1-image" src="/images/adobeflux-image1.png" alt="Adobe FLux Image"/>
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
                                <li>ChatGBT Image Generator</li>
                                <li>Perplexity</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Team</h2>
                            <ul className="background-design-list">
                                <li>Sierra Mcray</li>
                                <li>Yanfeng Dong</li>
                                <li>Tanisha Damle</li>
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
                                <li>Week 10: Final Touches & Adobe Presentation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>

                {/* Design Process */}
                <div className="design-process-container">
                    <h3 className="section-subheader">design process</h3>
                    <div className="design-process-block">
                        <div className="background-column">
                            <div className="background-row">
                                <BiSearchAlt size={28} />
                                <h2 className="background-subtitle">Research</h2>
                            </div>
                            <ul className="role-tool-list background-design-list">
                                <li>Understand the problem</li>
                                <li>Competitor analysis</li>
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
                        <div className="background-column">
                            <div className="background-row">
                                <BiSmile size={28} /> 
                                <h2 className="background-subtitle">Deliver</h2>
                            </div>
                            <ul className="background-design-list">
                                <li>final design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>

                {/* Research */}
                <div classname="research-container">
                    {/* The Challenge Section */}
                    <div className="challenge-container">
                        <h3 className="section-subheader">research</h3>
                        <h1 className="section-header">the challenge</h1>
                        <div className="challenge-column">
                            <p className="research-description">
                                Many AI-powered creative tools rely on text prompts, limiting control and customization especially for 
                                creatives who think beyond words or prefer hands-on, intuitive workflows. This creates a disconnect 
                                between a designer’s vision and the AI’s output.
                            </p>
                            <p className="research-description">This poses the question on...</p>
                        </div>
                        <p className="challenge-question">How might alternate UI inputs give creatives more expression, engagement, and control? </p>
                        <div className="horizontal-line" />
                    </div>
                    
                    {/* The Solution Section */}
                    <div className="solution-container">
                        <h1 className="section-header">the solution</h1>
                        <div className="solution-column">
                            <p className="research-description">
                                Through competitor analysis, user research, and user testing, we created a solution that explores new 
                                interaction models beyond the traditional text prompts. By using real-time input like sketching, voice, 
                                gestures, and smart guidance, it allows users a more natural, expressive, and collaborative design 
                                process with AI. 
                            </p>
                            <p className="research-description">
                                Adobe Flux is a collaborative design platform that uses AI as a creative assistant, not a replacement. It 
                                helps users quickly generate and refine visuals through intuitive tools, real-time suggestions, and flexible 
                                inputs like sketch, voice, and gesture. This ensures that creatives remain in full control.
                            </p>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    {/* Designing With Intent Section */}
                    <div className="design-with-intent-container">
                        <h1 className="section-header">designing with intent</h1>
                        <div className="design-with-intent-column">
                            <p className="research-description">
                                As AI tools evolve, they often expect users to navigate complex jargon and rigid processes. With Adobe Flux, 
                                we reimagined the experience to be intuitive, accessible, and empowering such that it is designed 
                                specifically for creatives who think and create beyond words. 
                            </p>
                            <p className="research-description">We began by tailoring our questions to understand...</p>
                        </div>
                        <ul className="design-with-intent-list">
                            <li className="design-with-intent-list-item">How do users currently engage with generative AI tools?</li>
                            <li className="design-with-intent-list-item">Where do these interactions fall short or become restrictive?</li>
                            <li className="design-with-intent-list-item">Which input methods resonate most intuitively with various types of creatives?</li>
                        </ul>
                        <div className="horizontal-line" />
                    </div>

                    {/* Current State of AI Section */}
                    <div className="current-state-container">
                        <h1 className="section-header">Current State of AI</h1>
                        <div className="current-state-column">
                            <p className="research-description">
                                Before we designed for generative AI, we needed to understand the current functions, limitations, and 
                                needs that users wanted. To do so, we carried out a comprehensive deep research, utilizing tools such 
                                as Perplexity, Google Gemini, and ChatGPT to process and interpret extensive data from UX case studies.
                            </p>
                            <p className="research-description">From these studies, the main pain points are...</p>
                        </div>
                        <ul className="current-state-list">
                            <li className="current-state-list-item">Increasing frustration with inflexible prompt-based systems</li>
                            <li className="current-state-list-item">Limited support for multimodal inputs (visual, voice, gesture)</li>
                            <li className="current-state-list-item"> AI poses barriers for visual or non-technical users</li>
                        </ul>
                        <div className="horizontal-line" />
                    </div>

                    {/* Interviews With Creatives Section */}
                    <div className="interviews-with-creatives-container">
                        <h1 className="section-header">interviews with creatives</h1>
                        <div className="interviews-with-creatives-column">
                            <p className="research-description">
                                To better understand these pain points and uncover intuitive solutions, we conducted in-depth user interviews with a diverse group of creatives. 
                            </p>

                        {/* Who We Interviewed Subsection */}
                            <h3 className="section-subtitle">Who we interviewed</h3>
                        </div>
                        <p className="research-description">We interviewed around 20 creatives of all different backgrounds to take a closer look into their...</p>
                        <ul className="interviews-with-creatives-list">
                            <li className="interviews-with-creatives-list-item">Daily creative workflows</li>
                            <li className="interviews-with-creatives-list-item">Frustrations with current AI tools</li>
                            <li className="interviews-with-creatives-list-item">More intuitive & expressive control</li>
                        </ul>

                        {/* Empathy Maps Subsection */}
                        <h3 className="section-subtitle">Empathy Maps</h3>
                        <div className="empathy-maps-column">
                            <p className="research-description">
                                Based on our user interviews, we created empathy maps to capture and organize users’ emotions, 
                                thoughts, and behaviors. Each map had categories...
                            </p>
                            <div className="square-row">
                                <Square 
                                    title="say"
                                    text="“It’s impressive, but it doesn’t understand what I’m trying to do.”"
                                />
                                <Square 
                                    title="do"
                                    text="Tweak outputs endlessly, give up on the tool, or go back to doing it by hand."
                                />
                                <Square 
                                    title="think"
                                    text="“I’m not sure this really reflects my creative voice.”"
                                />
                                <Square 
                                    title="feel"
                                    text="Confused, disconnected, creatively blocked."
                                />
                            </div>
                            <p className="research-description">
                                In which we were able to dive deeper into the problem of AI feeling emotionless and taking away 
                                creative control. User interviews helped in honing into creating a product that collaborated under 
                                the users’ control.
                            </p>
                            <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                <img
                                    src="/images/project1-images/empathyMap-1.png"
                                    alt="Empathy Map 1"
                                    className="empathy-map-image"
                                    onClick={() => setModalImage({
                                        src: '/images/project1-images/empathyMap-1.png',
                                        alt: 'Empathy Map 1'
                                    })}
                                />
                                <img
                                    src="/images/project1-images/empathyMap-2.png"
                                    alt="Empathy Map 2"
                                    className="empathy-map-image"
                                    onClick={() => setModalImage({
                                        src: '/images/project1-images/empathyMap-2.png',
                                        alt: 'Empathy Map 2'
                                    })}
                                />
                            </div>

                            {modalImage && (
                                <div className="image-modal" onClick={() => setModalImage(null)}>
                                <img src={modalImage.src} alt={modalImage.alt} className="modal-img" />
                                </div>
                            )}
                        </div>

                        {/* Themes Subsection */}
                        <h3 className="section-subtitle">Themes</h3>
                        <div className="themes-column">
                            <p className="research-description">
                                Based on our user interviews, we created empathy maps to capture and organize users’ 
                                emotions, thoughts, and behaviors. Each map had categories...
                            </p>
                            <div className="themes-wrapper">
                                <div className="theme-rectangle-row">
                                    <Rectangle 
                                        title="Ethics"
                                        text="Users expressed concern about ownership, authorship, and the transparency of 
                                        AI-generated content, highlighting a need for ethical guardrails in creative tools."
                                    />
                                    <Rectangle 
                                        title="Prompts"
                                        text="Prompt-based systems felt limiting and unnatural for many users, especially those 
                                        who preferred more visual or intuitive ways of expressing their ideas."
                                    />
                                    <Rectangle 
                                        title="Originality / User Control"
                                        text="Many creatives felt the AI was producing work that didn’t reflect their voice or 
                                        style, pointing to a need for tools that support originality and keep users in control."
                                    />
                                    <Rectangle 
                                        title="Behavior"
                                        text="Interviews revealed consistent patterns: users would often rework AI results, abandon 
                                        tools mid-process, or revert to manual methods out of frustration or lack of trust."
                                    />
                                    <Rectangle 
                                        title="Efficiency"
                                        text="While AI promised speed, users often found themselves spending more time correcting 
                                        or redoing work, making the process feel inefficient rather than streamlined."
                                    />
                                    <Rectangle 
                                        title="Problem-Solving"
                                        text="Users wanted AI to act more like a creative collaborator—helping them brainstorm, 
                                        iterate, and problem-solve rather than just generate finished outputs."
                                    />
                                    <Rectangle 
                                        title="Contextual Understanding"
                                        text="A major pain point was AI’s inability to understand creative context—missing the 
                                        nuance of a user’s vision, project goals, or aesthetic preferences."
                                    />
                                    <Rectangle 
                                        title="Lack of Human Emotion"
                                        text="Users described AI outputs as “cold” or “soulless,” underscoring a desire for tools 
                                        that feel more emotionally aware and aligned with the human creative process."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Competitor Analysis Subsection */}
                        <h3 className="section-subtitle">Competitor Analysis</h3>
                        <div className="competitor-column">
                            <p className="research-description">
                                We analyzed three companies by categorizing them by their <span className="swot-orange">SWOT </span>
                                (strengths, weaknesses, opportunities, and threats). Overall, Midjourney, Dall-E, and 
                                Sound2Scene had common themes across all three SWOTs...
                            </p>
                            <div className="competitor-wrapper">
                                <div className="competitor-row">
                                    <LargeRectangle
                                        title="Strengths"
                                        text="All three tools demonstrate strong creative capabilities, transforming non-visual 
                                        inputs (text, sketches, or sound) into visual content."
                                        name1="DALL·E"
                                        innerText1="Excels in versatility and sketch-to-image"
                                        name2="MidJourney"
                                        innerText2="Highly customizable and artistic"
                                        name3="Sound2Scene"
                                        innerText3="Uniquely bridges audio with visual generation"
                                    />
                                    <LargeRectangle
                                        title="weaknesses"
                                        text="These three tools face technical and usability challenges, such as the need for highly specific 
                                        prompts, inconsistent realism, limited access."
                                        name1="DALL·E"
                                        innerText1="Need to be very descriptive"
                                        name2="MidJourney"
                                        innerText2="Discord dependency"
                                        name3="Sound2Scene"
                                        innerText3="Alignment issues between input and output"
                                    />
                                    <Rectangle
                                        competitorTitle="Opportunities"
                                        text="Each tool has room to grow by enhancing user personalization, expanding access methods, and 
                                        introducing features like real-time editing, better prompt support, and adaptive learning for 
                                        user-specific styles or audio cues."
                                    />
                                    <Rectangle
                                        competitorTitle="Threats"
                                        text="The fast-moving AI landscape poses threats from advanced competitors and ethical concerns 
                                        around misuse (e.g., deepfakes), while tools like Sound2Scene also face low visibility and 
                                        adoption risks."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="horizontal-line" />
                    </div>

                     {/* Overall Pain Points Subsection */}
                    <h3 className="section-header">Overall Pain Points</h3>
                    <div className="competitor-column">
                        <p className="research-description">
                            After conducting user interviews and deep research, the key pain points we deduced are...
                        </p>
                        <div className="competitor-wrapper">
                            <div className="competitor-row">
                                <Rectangle
                                    title="Prompt rigidity"
                                    icon={<BiPen size={28} />}
                                    text="Because Flux aims to move beyond traditional prompts, addressing this limitation is 
                                    core to the redesign."
                                />
                                <Rectangle
                                    title="Lack of multimodal input"
                                    icon={<BiLayer size={28} />}
                                    text="The core innovation of Flux is enabling sketch, voice, and gesture — making this a 
                                    primary design opportunity."
                                />
                                <Rectangle
                                    title="Misalignment with creative vision"
                                    icon={<BiTargetLock size={28} />}
                                    text="The tool must visually reflect the user’s intent, so aligning outputs with creative 
                                    vision is crucial."
                                />
                                <Rectangle
                                    title="Loss of user control"
                                    icon={<BiSliderAlt size={28} />}
                                    text="Ensuring creatives feel in charge of the process drives trust and adoption — a key 
                                    design consideration."
                                />
                                <Rectangle
                                    title="Poor contextual understanding"
                                    icon={<BiBrain size={28} />}
                                    text="Designing AI to better grasp goals and context is essential to making interactions 
                                    feel intelligent and relevant."
                                />
                                <Rectangle
                                    title="Low accessibility for visual thinkers"
                                    icon={<BiShow size={28} />}
                                    text="The interface must feel natural to non-technical, visually-driven users — directly 
                                    shaping design choices."
                                />
                            </div>
                            <div className="horizontal-line" />
                        </div>
                    </div>

                    {/* <div className="horizontal-line" /> */}
                </div>

                {/* Define */}
                <div classname="define-container">
                    {/* Experience Drivers Section */}
                    <div className="experience-drivers-container">
                        <h3 className="section-subheader">Define</h3>
                        <h1 className="section-header">Experience Drivers</h1>
                        <div className="experience-drivers-column">
                            <p className="experience-drivers-question">
                                How might we empower designers with the creative potential of AI while maintaining intuitive, flexible 
                                control and a seamless workflow?
                            </p>
                            <p className="research-description">Using this HMW, we created experience drivers to shape our design...</p>
                            <div className="core-row">
                                <SmallRectangle
                                    text="AI tools need creative flexibility"
                                />
                                <SmallRectangle
                                    text="Manual control is non-negotiable"
                                />
                                <SmallRectangle
                                    text="Contextual assistance improves flow"
                                />
                            </div>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    {/* Early Design Concepts Section */}
                    <div className="early-design-container">
                        <h1 className="section-header">Early Design Concepts</h1>
                        <div className="early-design-column">
                            <p className="research-description">
                                Three design concepts were created to shape what our design would contain to ensure our experience 
                                drivers were met.
                            </p>
                        
                            {/* 3D Modular Design Studio Subsection */}
                            <h3 className="section-subtitle">3D Modular Design Studio</h3>
                            <div className="empathy-maps-column">
                                <p className="research-description">
                                    A design tool that modularizes 3D elements based on user-provided references, allowing intuitive, 
                                    component-level adjustments through gestures and AI suggestions while preserving visual consistency. 
                                    It supports rapid iteration with real-time feedback from an adaptive assistant.
                                </p>
                                <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                    <img
                                        src="/images/project1-images/designConcept-1.png"
                                        alt="3D Modular Design Studio Concept"
                                        className="designConcept-image"
                                        onClick={() => setModalImage({
                                            src: '/images/project1-images/designConcept-1.png',
                                            alt: '3D Modular Design Studio Concept'
                                        })}
                                    />
                                </div>
                            </div>

                            {/* Interactive Visual Design Suite Subsection */}
                            <h3 className="section-subtitle">Interactive Visual Design Suite</h3>
                            <div className="empathy-maps-column">
                                <p className="research-description">
                                    An AI-enhanced design environment for creating and refining visual concepts using mood boards, color 
                                    palettes, and layout compositions—with support for eye/cursor tracking, sketch-to-concept refinement, 
                                    and smart, contextual suggestions.
                                </p>
                                <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                    <img
                                        src="/images/project1-images/designConcept-2.png"
                                        alt="Interactive Visual Design Suite Concept"
                                        className="designConcept-image"
                                        onClick={() => setModalImage({
                                            src: '/images/project1-images/designConcept-2.png',
                                            alt: 'Interactive Visual Design Suite Concept'
                                        })}
                                    />
                                </div>
                            </div>

                            {/* AI Agent Subsection */}
                            <h3 className="section-subtitle">AI Agent</h3>
                            <div className="empathy-maps-column">
                                <p className="research-description">
                                    An AI-enhanced design environment for creating and refining visual concepts using mood boards, color 
                                    palettes, and layout compositions—with support for eye/cursor tracking, sketch-to-concept refinement, 
                                    and smart, contextual suggestions.
                                </p>
                                <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                    <img
                                        src="/images/project1-images/designConcept-3.png"
                                        alt="AI Agent Concept"
                                        className="designConcept-image"
                                        onClick={() => setModalImage({
                                            src: '/images/project1-images/designConcept-3.png',
                                            alt: 'AI Agent Concept'
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    {/* Prioritization Section */}
                    <div className="prioritization-container">
                        <h1 className="section-header">Prioritization</h1>
                        <div className="prioritization-column">
                            <p className="research-description">
                                Prioritization was needed to determine feasibility and desirability to help us determine the direction 
                                of our design. We found that the AI agent, AI Mood Board, Modular Design Studio, Cursor Tracking, 
                                Interactive Design Studio were highly possible for our design.
                            </p>
                            <div className="prioritization-image-row">
                                <div className="prioritization-content-column">
                                    <h4 className="prioritization-image-label">feasibility</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/project1-images/priorization-feasibility.png"
                                            alt="Feasibility Chart"
                                            className="prioritization-image"
                                            onClick={() => setModalImage({
                                                src: '/images/project1-images/priorization-feasibility.png',
                                                alt: 'Feasibility Chart'
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="prioritization-content-column">
                                    <h4 className="prioritization-image-label">desirability</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/project1-images/priorization-desirability.png"
                                            alt="Desirability Chart"
                                            className="prioritization-image"
                                            onClick={() => setModalImage({
                                                src: '/images/project1-images/priorization-desirability.png',
                                                alt: 'Desirability Chart'
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    {/* Low-fidelity Wireframes Section */}
                    <div className="lofi-wireframes-container">
                        <h1 className="section-header">Low-fidelity Wireframes</h1>
                        <div className="lofi-wireframes-column">
                            <p className="research-description">
                                To define what Adobe Flux was going to look like, three versions were explored to get a 
                                visualization of what the platform would look like.
                            </p>
                        </div>

                        {/* Version 1 Subsection */}
                        <div className="lofi-wireframes-content-column">
                            <h3 className="section-subtitle">Version 1</h3>
                            <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                <img
                                    src="/images/project1-images/lofi-wireframe-v1.png"
                                    alt="Low-Fidelity Wireframe Version 1"
                                    className="lofi-wireframes-image"
                                    onClick={() => setModalImage({
                                        src: '/images/project1-images/lofi-wireframe-v1.png',
                                        alt: 'Low-Fidelity Wireframe Version 1'
                                    })}
                                />
                            </div>
                            <p className="research-description">
                                This version looked too much to Adobe’s current platform, it offered nothing too different 
                                from what they already had. This was unintuitive and did not improve the creatives’ workflow.
                            </p>
                        </div>

                        {/* Version 2 Subsection */}
                        <div className="lofi-wireframes-content-column">
                            <h3 className="section-subtitle">Version 2</h3>
                            <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                <img
                                    src="/images/project1-images/lofi-wireframe-v2.png"
                                    alt="Low-Fidelity Wireframe Version 2"
                                    className="lofi-wireframes-image"
                                    onClick={() => setModalImage({
                                        src: '/images/project1-images/lofi-wireframe-v2.png',
                                        alt: 'Low-Fidelity Wireframe Version 2'
                                    })}
                                />
                            </div>
                            <p className="research-description">
                                This version explored the idea of having two modes that users could switch in between to have the 
                                idea of “a platform that you could do everything in”. This also explored the idea of giving 
                                contextualization for generative AI in a more digestible way for the user. 
                            </p>
                        </div>

                        {/* Version 3 Subsection */}
                        <div className="lofi-wireframes-content-column">
                            <h3 className="section-subtitle">Version 3</h3>
                            <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                <img
                                    src="/images/project1-images/lofi-wireframe-v3.png"
                                    alt="Low-Fidelity Wireframe Version 3"
                                    className="lofi-wireframes-image"
                                    onClick={() => setModalImage({
                                        src: '/images/project1-images/lofi-wireframe-v3.png',
                                        alt: 'Low-Fidelity Wireframe Version 3'
                                    })}
                                />
                            </div>
                            <p className="research-description">
                                This version honed in on what Adobe Flux was going to look like, it had clear contextualization and
                                easy visualization of a generated image. In goals, create, and edit, the user could switch in between 
                                to create their desired image easily.
                            </p>
                        </div>
                        <div className="horizontal-line" />
                    </div>
                </div>

                {/* Design & Iterate */}
                <div classname="design-iterate-container">
                    {/* Low-fidelity Wireframes Section */}
                    <div className="style-guide-container">
                        <h3 className="section-subheader">Design & Iterate</h3>
                        <h1 className="section-header">Style Guide</h1>
                        <div className="style-guide-column">
                            <p className="research-description">
                                To stay in tune with Adobe’s brand identity, we chose colors, fonts, and icons 
                                that remained familiar with Adobe users. 
                            </p>
                            <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                <img
                                    src="/images/project1-images/styleGuide.png"
                                    alt="Adobe Flux Style Guide"
                                    className="style-guide-image"
                                    onClick={() => setModalImage({
                                        src: '/images/project1-images/styleGuide.png',
                                        alt: 'Adobe Flux Style Guide'
                                    })}
                                />
                            </div>
                        </div>

                        <div className="horizontal-line" />
                    </div>

                    {/* High-fidelity Wireframes Section */}
                    <div className="hifi-wireframe-container">
                        <h1 className="section-header">High-fidelity wireframe</h1>
                        <div className="style-guide-column">
                            <p className="research-description">
                                For user testing, we used the following high-fidelity wireframe.
                            </p>
                            <video 
                                src="/videos/project1-videos/hi-fidelity-wireframe.mov" 
                                loop 
                                muted
                                autoPlay
                                playsInline
                                className="hifi-wireframe-video"
                            />
                        </div>


                        {/* Key Feedback Subsection */}
                        <h3 className="section-subtitle">Key Feedback</h3>
                        <div className="key-feedback-column">
                            <p className="key-feedback-title">
                                Navigation lacks clarity
                                <ul className="key-feedback-list">
                                    <li>Users struggle to understand where they are, especially within Style Mode.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                Style Mode orientation is unclear
                                <ul className="key-feedback-list">
                                    <li>Consider reinforcing location indicators or section highlights.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                "Regenerate" feels too generic
                                <ul className="key-feedback-list">
                                    <li>Enhance it with language that emphasizes creative agency and personalization.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                Insufficient feedback between sub-headers
                                <ul className="key-feedback-list">
                                    <li>Provide clearer transitions or visual cues to guide the user.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                Transformation tools aren't intuitive
                                <ul className="key-feedback-list">
                                    <li>Make them accessible without requiring gesture-based interactions</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                                Consider reintroducing the "Upload Sketch" option to support mixed-media workflows and ease of access.
                            </p>
                        </div>

                        <div className="horizontal-line" />
                    </div>
                    
                    {/* Design Iterations Section */}
                    <div className="design-iterations-container">
                        <h1 className="section-header">Design Iterations</h1>
                        <div className="design-iterations-column">
                            <p className="research-description">
                                Taking into account the feedback we got from our user testing, we simplified our navigation 
                                and provided clearer indicators of where the user is. 
                            </p>
                            <DesignCard 
                                number="1."
                                title="Improving Context and Streamlining Navigation"
                                image="/images/project1-images/iteration1-before.png"
                                alt="Adobe FLux Iteration 1"

                                text1="❌ Navigation was overcomplex across Goals, Create, and Edit modes"
                                text2="❌ Goal input lacked flexibility"
                                text3="❌ Header design lacked structure and clarity"
                                text4="❌ Gesture button was always visible, creating confusion"

                                text5="✅ Combined into two core modes: Goals and Create"
                                text6="✅ Allowed users to input and customize project descriptions"
                                text7="✅ Redesigned with clear visual hierarchy to anchor the experience"
                                text8="✅ Made gesture prompts appear contextually, only when needed"
                            />
                            <DesignCard 
                                number="2."
                                title="Clarifying Focus & Reducing Cognitive Load"
                                image="/images/project1-images/iteration2-before.png"
                                alt="Adobe FLux Iteration 2"

                                text1="❌ Create screen was cluttered with too many options"
                                text2="❌ No integration for existing Adobe Moodboard workflows"
                                text3="❌ Poor visual hierarchy made it hard to navigate"
                                text4="❌ Users lost track of their original prompt"

                                text5="✅ Simplified to Sketch and AI Generation, moved Moodboards (renamed Reference) to the Goals panel"
                                text6="✅ Added link-out to Adobe Moodboards app for optional inspiration"
                                text7="✅ Strengthened layout with clear headings and typographic contrast"
                                text8="✅ Added a persistent prompt reminder for continuity and direction"
                            />
                            <DesignCard 
                                number="3."
                                title="Strengthening Identity & Edit Mode Clarity"
                                image="/images/project1-images/iteration3-before.png"
                                alt="Adobe FLux Iteration 3"

                                text1="❌ Weak hierarchy made Edit Mode feel ambiguous"
                                text2="❌ Experience felt too close to standard Adobe tools"
                                text3="❌ Unfamiliar terminology created friction"
                                text4="❌ No way to revisit or undo edits"

                                text5="✅ Introduced clear indicators and structure for Edit Mode"
                                text6="✅ Reimagined editing tools for AI-specific workflows"
                                text7="✅ Replaced with industry-recognized language for better clarity"
                                text8="✅ Added a Timeline feature to view and revert to previous states"
                            />
                        </div>

                        <div className="horizontal-line" />
                    </div>

                </div>
                
                {/* Deliver */}
                <div classname="deliver-container">
                    {/* Say Hello to Adobe Flux Section */}
                    <div className="final-design-container">
                    <h3 className="section-subheader">Deliver</h3>
                    <h1 className="section-header">Say Hello to Adobe Flux</h1>
                    <p className="research-description">
                        Flux redefines creative flow by centering the designer from the very first interaction. Built for intuitive 
                        control and expressive freedom, Flux adapts to how you think, create, and iterate—on your terms.
                    </p>

                        {/* Design with Purpose Subsection */}
                        <div className="final-design-content">
                            <h3 className="section-subtitle">Design with Purpose</h3>
                            <div className="final-design-column">
                                <p className="research-description">
                                    Before creating, Adobe Flux invites users to define their goals and moodboards, building AI context 
                                    to ensure visuals match their creative intent.
                                </p>
                                <video 
                                    src="/videos/project1-videos/adobeFlux-vid1.mov" 
                                    loop 
                                    muted
                                    autoPlay
                                    playsInline
                                    className="final-design-video"
                                />
                            </div>
                        </div>
                        
                        {/* Sketch for Control Subsection */}
                        <div className="final-design-content">
                            <h3 className="section-subtitle">Sketch for Control</h3>
                            <div className="final-design-column">
                                <p className="research-description">
                                    Sketch Mode allows users to quickly express ideas, transforming them into polished AI visuals. 
                                    Cursor tracking adds precision, enabling element-level refinements.
                                </p>
                                <video 
                                    src="/videos/project1-videos/adobeFlux-vid2.mov" 
                                    loop 
                                    muted
                                    autoPlay
                                    playsInline
                                    className="final-design-video"
                                />
                            </div>
                        </div>

                        {/* Smart Edits with AI Subsection */}
                        <div className="final-design-content">
                            <h3 className="section-subtitle">Smart Edits with AI</h3>
                            <div className="final-design-column">
                                <p className="research-description">
                                    Edit Mode offers tools for refining AI-generated images. Context-aware AI suggestions adapt to 
                                    each user’s evolving creative direction.
                                </p>
                                <video 
                                    src="/videos/project1-videos/adobeFlux-vid3.mov" 
                                    loop 
                                    muted
                                    autoPlay
                                    playsInline
                                    className="final-design-video"
                                />
                            </div>
                        </div>

                        {/* Gesture-Driven Interaction Subsection */}
                        <div className="final-design-content">
                            <h3 className="section-subtitle">Gesture-Driven Interaction</h3>
                            <div className="final-design-column">
                                <p className="research-description">
                                    Users can resize, rotate, and reposition elements on the canvas using intuitive gestures—enabling 
                                    fast, hands-on adjustments without breaking flow.
                                </p>
                                <video 
                                    src="/videos/project1-videos/adobeFlux-vid4.mov" 
                                    loop 
                                    muted
                                    autoPlay
                                    playsInline
                                    className="final-design-video"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                                

            </section>
        </div>
    )
}

export default ProjectOne;