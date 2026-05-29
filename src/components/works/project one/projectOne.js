import React, { useEffect, useState } from "react";
import './projectOne.css'
import { BiSearchAlt, BiBook, BiRotateRight, BiSmile, BiPen, BiLayer, BiTargetLock, BiSliderAlt, BiBrain, BiShow, } from "react-icons/bi";
import { TbScale, TbTerminal2, TbMoodSearch, TbTrendingUp, TbBulb, TbCloudCheck, TbMoodOff } from "react-icons/tb";
import { useLocation, useNavigate } from 'react-router-dom';

import Square from "../components/square/square";
import Rectangle from "../components/theme-card/rectangle";
import LargeRectangle from "../components/competitor-card/largeRectangle";
import SmallRectangle from "../components/core-card/smallRectangle";
import DesignCard from "../components/design-iteration-card/designCard";
import ProjectTags from "../components/project-tags/tags";

const ProjectOne = () => {
    const [modalImage, setModalImage] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.scrollTo === 'Pip') {
          setTimeout(() => {
            const el = document.getElementById('Pip');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
              navigate(location.pathname, { replace: true, state: {} });
            }
          }, 0);
        }
      }, [location, navigate]);      

    return (
    <div className="project-container" id="Pip">
        <section className="case-study-container">
            <div className="project-content">
                <div className="project-block">
                    <div className="project-content-block">
                        <div className="text-column">
                            <h3 className="project-header">— Case Study 01</h3>
                            <h1 className="project-title">Pip</h1>
                            <p className="project-description">A beginner-friendly skincare ingredient scanner that helps users understand what's in their products — personalized to their skin type, jargon-free, and guided by a friendly mascot named Pip.</p>
                            <div className='project-tags'>
                                <ProjectTags
                                    text="UX Design"
                                    color="#B1FFA6"
                                />
                                <ProjectTags
                                    text="Product Design"
                                    color="#FFE0C0"
                                />
                                <ProjectTags
                                    text="Mobile Design"
                                    color="#5AACDC"
                                />
                                <ProjectTags
                                    text="User Research"
                                    color="#FFE97B"
                                />
                                <ProjectTags
                                    text="Interaction Design"
                                    color="#FFA6E3"
                                />
                                <ProjectTags
                                    text="End-to-end Product Design"
                                    color="#D0B2FA"
                                />
                            </div>
                        </div>
                        <div className="project-content-items">
                            <img className="project2-image" src="/images/pip-images/pip-home.png" alt="Pip app"/>
                        </div>
                    </div>
                </div>
            </div>
                {/* Background */}
                <div className="pinned-section background-container">
                    <div className="horizontal-line" />
                    <h3 className="pinned-inner project-header">Work overview</h3>
                    <div className="background-block">
                        <div className="background-column">
                            <h2 className="background-subtitle">Timeline</h2>
                            <ul className="background-design-list">
                                <li>February 2026 - Present</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Disciplines</h2>
                            <ul className="background-design-list">
                                <li>UX Design</li>
                                <li>Interaction Design</li>
                                <li>Mobile Design</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Responsibilities</h2>
                            <ul className="background-design-list">
                                <li>Ideation</li>
                                <li>UX Research / Testing</li>
                                <li>Interface Design</li>
                                <li>Prototyping</li>
                            </ul>
                        </div>
                        <div className="background-column">
                            <h2 className="background-subtitle">Tools</h2>
                            <ul className="background-design-list">
                                <li>Figma</li>
                                <li>Figjam</li>
                                <li>Claude</li>
                                <li>ChatGBT (Image)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>

                {/* Deliver */}
                <div className="deliver-container">
                    {/* Final Design Section */}
                    <div className="final-design-container">
                    <h3 className="project-header">Deliver</h3>
                    <h2 className="section-header">Introducing Pip</h2>
                    <div class="solution-column">
                        <p className="research-description">
                            Pip isn't just a skincare app. It's the first one that actually talks to you like a friend who knows what they're doing.
                        </p>
                        <p className="research-description">
                            Most skincare tools hand you data and leave you to figure out what it means. Pip does something different: it takes that same 
                            ingredient information and translates it — into plain English, personalized to your skin, delivered with a warmth that makes 
                            learning about skincare feel like a conversation rather than a lecture.
                        </p>
                    </div>

                        {/* Scan Subsection */}
                        <div className="final-design-content">
                            <div className="final-design-column">
                                <div className="project-content-breakdown-block">
                                    <div className="text-column">
                                        <h2 className="section-subtitle">scan</h2>
                                        <p className="project-description">Pip's core screen. Leads with a numeric breakdown of your ingredient results, surfaces the five most relevant ingredients for your specific skin type with plain-English explanations, and tells you exactly why each one works — or doesn't — for you. The full list is one tap away for users who want to go deeper.</p>
                                        <h2 className="project-section-subtitle">why?</h2>
                                        <div className='project-tags'>
                                            <ProjectTags
                                                text="Match percentage instead of pass/fail — Ingredient safety isn't binary. A percentage gives users a personalized signal without requiring them to understand the logic behind it."
                                                color="#F8B966"
                                            />
                                        </div>
                                    </div>
                                    <video 
                                        src="/videos/pip-videos/scan-pip.mp4" 
                                        loop 
                                        muted
                                        autoPlay
                                        playsInline
                                        className="p2-final-design-video"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Explore Subsection */}
                        <div className="final-design-content">
                            <div className="final-design-column">
                                <div className="project-content-breakdown-block">
                                    <div className="text-column">
                                        <h1 className="section-subtitle">Explore</h1>
                                        <p className="project-description">Personalized product recommendations ranked by match percentage. A hero card anchors the top result; a compact ranked list follows below. Editorial hierarchy that communicates priority without making the user think about it.</p>
                                        <h2 className="project-section-subtitle">why?</h2>
                                        <div className='project-tags'>
                                            <ProjectTags
                                                text="Editorial layout instead of bento grid — The grid looked dynamic but buried the benefit tags and created too much visual competition. The hero card gives the top result the space it deserves."
                                                color="#F8B966"
                                            />
                                        </div>
                                    </div>
                                    <video 
                                        src="/videos/pip-videos/explore-pip.mp4" 
                                        loop 
                                        muted
                                        autoPlay
                                        playsInline
                                        className="p2-final-design-video"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Skin Diary Subsection */}
                        <div className="final-design-content">
                            <div className="final-design-column">
                                <div className="project-content-breakdown-block">
                                    <div className="text-column">
                                        <h1 className="section-subtitle">Skin Diary</h1>
                                        <p className="project-description">Daily check-ins that track hydration, breakouts, sensitivity, and texture over time — so users can see whether their routine is actually working, not just guess. Emoji-anchored descriptors keep self-reporting consistent across days. Pip's character responds to streaks and missed check-ins to keep the habit going.</p>
                                        <h2 className="project-section-subtitle">why?</h2>
                                        <div className='project-tags'>
                                            <ProjectTags
                                                text="Emoji-anchored scales instead of numbers — Numbers drift in meaning day to day. Anchoring each option to a plain-English descriptor keeps ratings consistent over time and makes the check-in feel conversational."
                                                color="#F8B966"
                                            />
                                        </div>
                                    </div>
                                    <video 
                                        src="/videos/pip-videos/diary-pip.mp4" 
                                        loop 
                                        muted
                                        autoPlay
                                        playsInline
                                        className="p2-final-design-video"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* My Routine Subsection */}
                        <div className="final-design-content">
                            <div className="final-design-column">
                                <div className="project-content-breakdown-block">
                                    <div className="text-column">
                                        <h1 className="section-subtitle">My Routine</h1>
                                        <p className="project-description">What to use, in what order, and when. Fast to open, faster to read.</p>
                                        <h2 className="project-section-subtitle">why?</h2>
                                        <div className='project-tags'>
                                            <ProjectTags
                                                text="Single container instead of card per step — Nested cards inside cards added visual weight without adding information. Spacing and dividers do the same job more cleanly."
                                                color="#F8B966"
                                            />
                                        </div>
                                    </div>
                                    <video 
                                        src="/videos/pip-videos/routine-pip.mp4" 
                                        loop 
                                        muted
                                        autoPlay
                                        playsInline
                                        className="p2-final-design-video"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="horizontal-line" />
                </div>

                {/* Research */}
                <div className="research-container">
                    {/* The Problem Section */}
                    <div className="challenge-container">
                        <h3 className="project-header">research</h3>
                        <h1 className="section-header">the problem</h1>
                        <div class="solution-column">
                            <p className="research-description">
                            Skincare should be simple. But walk into any drugstore or open any skincare app and you're immediately confronted with ingredient 
                            lists that read like chemistry textbooks, conflicting advice from every corner of the internet, and products that promise everything 
                            without explaining anything.
                            </p>
                            <p className="research-description">
                            For beginners — especially people who are just starting to care about their skin — this experience is overwhelming enough to give up entirely. 
                            They don't know what niacinamide does. They don't know if glycerin is good or bad for oily skin. And they definitely don't know which of the 
                            47 moisturizers on the shelf is right for them.
                            </p>
                            <p className="challenge-question">That's the gap Pip was designed to fill.</p>
                        </div>
                        <div className="horizontal-line" />
                    </div>
                    
                    {/* The Solution Section */}
                    <div className="solution-container">
                        <h1 className="section-header">the opportunity</h1>
                        <div className="solution-column">
                            <p className="research-description">
                            Most skincare apps are built for people who already know what they're doing. They surface ingredient data, flag potential irritants, and provide 
                            detailed analysis — but they present it in the same dense, jargon-heavy way that made skincare confusing in the first place.

                            </p>
                            <p className="research-description">
                            The opportunity wasn't to build another ingredient database. It was to build the first skincare app that genuinely meets beginners where they are — 
                            with plain-English explanations, personalized recommendations, and a warm, character-driven experience that makes learning about your skin feel 
                            approachable rather than intimidating.
                            </p>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    {/* Users Section */}
                    <div className="design-with-intent-container">
                        <h1 className="section-header">Who I'm designing for</h1>
                        <div className="design-with-intent-column">
                            <p className="research-description">
                            To understand who I was designing for, I conducted 12 user interviews across a range of ages, skin types, and skincare experience levels. I wanted to 
                            understand not just what people knew about skincare, but how they felt about not knowing — and what that gap was costing them.
                            </p>
                            <p className="research-description">A few patterns emerged consistently from themes and pain points:</p>
                        </div>
                        <ul className="design-with-intent-list">
                            <li className="design-with-intent-list-item">People trusted recommendations from friends, partners, and online communities far more than marketing claims or app suggestions</li>
                            <li className="design-with-intent-list-item">Scientific ingredient names were a major barrier — users would abandon a product page the moment they felt out of their depth
                            </li>
                            <li className="design-with-intent-list-item">Most users had no idea what their skin type actually was, let alone how to shop for it</li>
                            <li className="design-with-intent-list-item">The emotional stakes were higher than expected — bad product experiences didn't just waste money, they damaged confidence</li>
                        </ul>
                        <div className={`users-column ${modalImage ? 'blurred' : ''}`}>
                            <img
                                src="/images/pip-images/themes-pip.png"
                                alt="Themes from user interviews"
                                className="themes-image"
                                onClick={() => setModalImage({
                                    src: '/images/pip-images/themes-pip.png',
                                    alt: 'Themes from user interviews'
                                })}
                            />
                            <img
                                src="/images/pip-images/pain-points-pip.png"
                                alt="Painpoints from user interviews"
                                className="themes-image"
                                onClick={() => setModalImage({
                                    src: '/images/pip-images/pain-points-pip.png',
                                    alt: 'Painpoints from user interviews'
                                })}
                            />
                        </div>
                        {modalImage && (
                            <div className="image-modal" onClick={() => setModalImage(null)}>
                            <img src={modalImage.src} alt={modalImage.alt} className="modal-img" />
                            </div>
                        )}

                        <div className="subsection-container">
                            <h2 className="section-subtitle">Personas</h2>
                            <div class="solution-column">
                            <p className="research-description">From these interviews I developed two core personas.</p>
                            <div className="persona-row">
                                <div className="persona-circle1" />
                                <p className="research-description">
                                Andre is a 28-year-old product manager with oily, sensitive skin who hits the gym five days a week. He built his routine from his partner's recommendations and has never 
                                really understood why he uses what he uses. He wants to learn, but every time he tries, the jargon shuts him down. He trusts people over marketing, and he's skeptical of 
                                anything that feels like an ad.
                                </p>
                            </div>
                            <div className="persona-row">
                                <div className="persona-circle2" />
                                <p className="research-description">
                                Jade is a 24-year-old grad student with dry, sensitive skin who has been trying to build a consistent routine for two years. She's done her research, she knows the basics, but 
                                she still feels uncertain every time she tries something new. She wants confidence, not another overwhelming product page.
                                </p>
                            </div>
                            <p className="research-description">These two users shaped every design decision that followed — from the tone of Pip's copy to the structure of the ingredient breakdown. They also served as the foundation for the user journey map below.</p>
                            </div>
                            <div className={`users-column ${modalImage ? 'blurred' : ''}`}>
                                <img
                                    src="/images/pip-images/journey-map-pip.png"
                                    alt="Themes from user interviews"
                                    className="themes-image"
                                    onClick={() => setModalImage({
                                        src: '/images/pip-images/journey-map-pip.png',
                                        alt: 'User journey map'
                                    })}
                                />
                            </div>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    {/* Competitive Anaylsis Section */}
                    <div className="current-state-container">
                        <h1 className="section-header">Competitive landscape</h1>
                        <div className="current-state-column">
                            <p className="research-description">
                            I analyzed 5 direct competitors to understand what the market was already doing and where the gaps were.
                            </p>
                            <div className="themes-wrapper">
                                <div className="theme-rectangle-row">
                                    <Rectangle 
                                        title="SkinSort"
                                        text="Great ingredient depth and visual taste, but skews scientific over supportive. Built for enthusiasts, not beginners."
                                    />
                                    <Rectangle 
                                        title="Skin Bliss"
                                        text="Solid concepts buried under a lengthy onboarding and cluttered UI. Tries to build trust through thoroughness — and overshoots."
                                    />
                                    <Rectangle 
                                        title="Lóvi"
                                        text="Great visual design with real moments of delight. Doesn't always follow through — the routine presentation undermines what the rest of the app sets up well."
                                    />
                                    <Rectangle 
                                        title="CareSkin"
                                        text="Clean, quick, and practical. Loses points for engagement — ingredients and tips presented as walls of text that are hard to stay with."
                                    />
                                    <Rectangle 
                                        title="Thea"
                                        text="The most polished product discovery experience, with cross-platform reviews and intuitive controls. The detail layer lets it down — match explanations need structure, not paragraphs."
                                    />
                                </div>
                            </div>
                            <p className="research-description">
                                Every competitor did at least one thing well. But across all five, the same problem kept surfacing: they were designed for people who 
                                were already engaged with skincare, not for people trying to get there. The ingredient data was dense. The explanations assumed knowledge. 
                                The tone was clinical. And none of them had a personality — they felt like tools, not companions.
                            </p>
                            <p className="challenge-question">That insight became Pip's main purpose: not just what your ingredients do, but what they mean for you, explained like a knowledgeable friend.</p>
                        </div>
                        <div className="horizontal-line" />
                    </div>
                </div>

                {/* Process */}
                <div className="define-container">
                    {/* AI in my workflow Section */}
                    <div className="interviews-with-creatives-container">
                        <h3 className="project-header">Process</h3>
                        <h1 className="section-header">AI in my workflow</h1>
                        <div className="solution-column">
                            <p className="research-description">
                            I used Claude as a thinking partner, not a generator. During research synthesis, I'd paste interview observations and ask it to flag surface-level 
                            groupings — it caught assumptions in my affinity map that directly sharpened how I framed Jade and Andre. For competitive research, it helped me 
                            synthesize patterns across five apps into the gap analysis that shaped Pip's main purpose.
                            </p>
                            <p className="research-description">
                            In the design phase, I used Claude to stress-test microcopy and explore design directions quickly. I'd ask it to generate multiple versions 
                            of ingredient explanations, onboarding copy, or skin diary prompts — then use those variations as a starting point to iterate against, 
                            narrowing down until the tone and structure felt unmistakably like Pip. It was a faster way to find the edges of an idea before committing 
                            to one direction. I also used it to flag anywhere the copy felt clinical, vague, or assumed prior knowledge the user wouldn't have.
                            </p>
                            <p className="research-description">
                            The framing that made it useful: "here's what I'm thinking — where am I wrong?" I treated Claude as a critic, not a co-designer.
                            </p>
                        </div>

                        <div className="horizontal-line" />
                    </div>

                    {/* Design Principles Section */}
                    <h3 className="section-header">Design Principles</h3>
                    <div className="competitor-column">
                        <p className="research-description">
                        Before moving into wireframes, I established three principles that would guide every decision:
                        </p>
                        <div className="competitor-wrapper">
                            <div className="square-row">
                                <Rectangle
                                    title="Beginner-first, always."
                                    text="If a feature requires prior knowledge to use, it's not ready."
                                />
                                <Rectangle
                                    title="Personalization over information."
                                    text="Raw data isn't helpful. Knowing whether this ingredient works for your skin is."
                                />
                                <Rectangle
                                    title="Warm, not clinical."
                                    text="Pip has a personality. Advice from a knowledgeable friend — not a product label."
                                />
                            </div>
                            <div className="horizontal-line" />
                        </div>
                    </div>

                    <div className="experience-drivers-container">
                        <h1 className="section-header">Lo-fi wireframes</h1>
                        <div className="solution-column">
                            <p className="research-description">
                            After synthesizing my 12 interviews into an affinity map, I moved into lo-fi wireframes to test the core information architecture before investing 
                            in visual design. The key questions at this stage were structural: what does the product detail page need to contain? How should the ingredient 
                            breakdown be organized? What's the right flow from scan to recommendation to diary entry?
                            </p>
                            <p className="research-description">
                            I explored several directions for the ingredient breakdown — a traffic light summary bar, tabbed categories, color-coded cards — and landed on a combination: 
                            a numeric summary (22 good / 3 caution / 1 bad) that gives the at-a-glance verdict, followed by a scrollable list of the top ingredients with plain-English 
                            one-liners and benefit tags.
                            </p>
                            <div className="prioritization-image-row">
                                <div className="prioritization-content-column">
                                    <h4 className="prioritization-image-label">Onboarding</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/pip-images/onboarding-pip.png"
                                            alt="Lo-fi onboarding wireframes"
                                            className="prioritization-image"
                                            onClick={() => setModalImage({
                                                src: '/images/pip-images/onboarding-pip.png',
                                                alt: 'Lo-fi onboarding wireframes'
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="prioritization-content-column">
                                    <h4 className="prioritization-image-label">Core features</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/pip-images/core-features-pip.png"
                                            alt="Lo-fi core features wireframes"
                                            className="prioritization-image"
                                            onClick={() => setModalImage({
                                                src: '/images/pip-images/core-features-pip.png',
                                                alt: 'Lo-fi core features wireframes'
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    <div className="experience-drivers-container">
                        <h1 className="section-header">Hi-fi wireframes</h1>
                        <div className="solution-column">
                            <p className="research-description">
                            The first major iteration focused on getting the visual system right. Pip's palette — soft yellow, light blue, and warm white — was chosen to feel approachable 
                            and calm rather than clinical or overly medical. The mascot character was developed through several rounds of exploration, moving from a cowboy/western theme 
                            that felt too playful toward a warmer companion tone that felt more trustworthy.
                            </p>
                            <p className="research-description">
                            The ingredient cards went through multiple rounds of iteration, ultimately landing on white cards with a colored left border and a single benefit badge — clean 
                            enough to scan quickly, informative enough to be useful.
                            </p>
                            <div className="prioritization-image-row">
                                <div className="prioritization-content-column">
                                    <h4 className="prioritization-image-label">Onboarding</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/pip-images/hifi-onboarding-pip.png"
                                            alt="Hi-fi onboarding wireframes"
                                            className="prioritization-image"
                                            onClick={() => setModalImage({
                                                src: '/images/pip-images/hifi-onboarding-pip.png',
                                                alt: 'Lo-fi onboarding wireframes'
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="prioritization-content-column">
                                    <h4 className="prioritization-image-label">Core features</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/pip-images/hifi-core-pip.png"
                                            alt="Hi-fi core features wireframes"
                                            className="prioritization-image"
                                            onClick={() => setModalImage({
                                                src: '/images/pip-images/hifi-core-pip.png',
                                                alt: 'Lo-fi core features wireframes'
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    <div className="experience-drivers-container">
                        <h1 className="section-header">Refining</h1>
                        <div className="solution-column">
                            <p className="research-description">
                            The second major iteration came directly out of 3 mentor feedback sessions with Qin, a senior designer who pushed hard on two things: visual hierarchy and container 
                            complexity. Her feedback on My Routine was the most impactful — too many nested containers (a card inside a card inside a card). She pointed to Spotify, Luma, and 
                            Airbnb as references for how modern apps use spacing and typography rather than containers to organize information. I rebuilt the routine section as a clean list 
                            inside a single outer container, separated by dividers alone.
                            </p>
                            <p className="research-description">
                            She also pushed back on typography — too many text styles across the product detail page. I audited every screen and reduced variation to three consistent levels: 
                            section headers, body text, and secondary labels. The product detail page felt significantly more cohesive after this pass.
                            </p>
                            <p className="research-description">
                            The Explore page went through the most visual iterations — bento grid, list view, and finally the editorial layout that made it into the current design.
                            </p>
                            <div className="prioritization-image-row">
                                <div className="prioritization-content-column">
                                    <h4 className="prioritization-image-label">Core features</h4>
                                    <div className={`empathy-map-image-row ${modalImage ? 'blurred' : ''}`}>
                                        <img
                                            src="/images/pip-images/refined1-core-pip.png"
                                            alt="Refined core features wireframes"
                                            className="refined-image"
                                            onClick={() => setModalImage({
                                                src: '/images/pip-images/refined1-core-pip.png',
                                                alt: 'Refined core features wireframes'
                                            })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    {/* Exploring What’s Next */}
                    <div className="experience-drivers-container">
                        <h1 className="section-header">Key design decisions</h1>
                        <div className="solution-column">
                            <p className="key-feedback-title">
                            Why a match percentage instead of just good/bad/caution
                                <ul className="key-feedback-list">
                                    <li>A simple pass/fail didn't capture the nuance of ingredient safety — an ingredient might be safe for most people but worth watching for someone with oily skin specifically. A match percentage gave users a personalized signal without requiring them to understand the underlying logic.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                            Why the ingredient list shows only the top 5 by default
                                <ul className="key-feedback-list">
                                    <li>Showing all 26 ingredients at once was overwhelming in testing. Leading with the 5 most relevant ingredients for the user's skin type — with a "Show all" option — reduced cognitive load without hiding information from users who wanted to dig deeper.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                            Why Pip's character appears sparingly
                                <ul className="key-feedback-list">
                                    <li>Early iterations had Pip appearing in every section, which diluted the character's impact and made the interface feel cluttered. The final design reserves Pip for moments where personality adds real value — the "Why this works for you" callout, the skin diary streak interactions, and the onboarding flow — so each appearance feels intentional rather than decorative.</li>
                                </ul>
                            </p>
                            <p className="key-feedback-title">
                            Why the skin diary uses emoji-anchored scales instead of numbers
                                <ul className="key-feedback-list">
                                    <li>Numbers alone are inconsistent — what felt like a 4 last Tuesday might feel like a 3 today. Anchoring each option to a short plain-English descriptor with a face to match ("Bad" through "Super") keeps ratings consistent over time and makes the check-in feel conversational rather than clinical.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="horizontal-line" />
                    </div>

                    {/* Exploring What’s Next */}
                    <div className="reflection-container">
                        <h1 className="section-header">What I learned</h1>
                        <div className="solution-column">
                            <p className="research-description">
                            Designing Pip taught me that the hardest design problems aren't about features — they're about trust. Andre doesn't need more information 
                            about his skincare. He needs to feel like someone who actually knows what they're talking about is looking out for him. Every decision in 
                            Pip was ultimately a trust decision: how do you present complex ingredient data without overwhelming? How do you make a recommendation feel 
                            personal rather than algorithmic? How do you build a habit that encourages without shaming?
                            </p>
                            <p className="research-description">
                            Working through 3 rounds of mentor critique also taught me how to separate my attachment to a design from whether it's actually working. Some 
                            of my favorite early decisions — the nested ingredient cards, the mascot in every section — were the first things Qin pushed back on. Learning 
                            to hear that feedback, understand the reasoning, and iterate quickly without losing Pip's core personality is the skill I'm most proud of 
                            developing through this project.
                            </p>
                        </div>
                        <div className="subsection-container">
                            <h2 className="section-subtitle">What's next</h2>
                            <ul className="design-with-intent-list">
                                <li className="design-with-intent-list-item">
                                    Usability testing with 5 beginner skincare users to validate the ingredient breakdown and skin diary flows
                                </li>
                                <li className="design-with-intent-list-item">
                                    Accessibility audit across all screens — particularly contrast ratios on the benefit tags and match score badges
                                </li>
                                <li className="design-with-intent-list-item">
                                    Exploring a routine builder onboarding flow that helps users set up their first routine from scratch using Pip's recommendations
                                </li>
                                <li className="design-with-intent-list-item">
                                    Refine visuals further and continue to add moments of delight
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>   
        </section>
    </div>
    )
}

export default ProjectOne;