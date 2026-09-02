import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import ProjectTags from "../components/project-tags/tags";
import CaseStudyNav from "../components/case-study-nav/caseStudyNav";
import DetailCallout from "../components/detail-callout/detailCallout";

import './projectFive.css';

const ProjectFive = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.scrollTo === 'Spacescan') {
            setTimeout(() => {
                const el = document.getElementById('Spacescan');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    navigate(location.pathname, { replace: true, state: {} });
                }
            }, 0);
        }
    }, [location, navigate]);

    // `match` is the heading's own text; `label` is the tab. Lets a long
    // heading sit behind a short tab without renaming the section.
    //
    // Five tabs where Reality Check has seven: this project is one loop rather
    // than four pillars, so Solution folds into Deliver and Decisions, and
    // there is no Process section — see the note above Key Design Decisions.
    const navSections = [
        { match: 'Work overview', label: 'Overview' },
        { match: 'Introducing Spacescan', label: 'Deliver' },
        { match: 'Problem', label: 'Problem' },
        { match: 'Key Design Decisions', label: 'Decisions' },
        { match: 'Lessons from Spacescan', label: 'Reflection' },
    ];

    return (
    <div className="project-container" id="Spacescan">
        <CaseStudyNav sections={navSections} />
        <section className="case-study-container">
            <div className="project-content">
                <div className="project-block">
                    <div className="project-content-block">
                        <div className="text-column">
                            <h3 className="project-header">— Case Study 05</h3>
                            <h1 className="project-title">Spacescan</h1>
                            <p className="project-description">
                                A design system is only real if something enforces it. Spacescan is a Figma plugin that
                                audits a file against its own — it compares every spacing, padding and type value against
                                the scale the file already defines, and flags the ones that don't match.
                            </p>
                            <div className="live-app-block">
                                <div className="live-app-buttons">
                                    <a
                                        className="repo-link"
                                        href="https://github.com/sabrinaquach/Spacescan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View code ↗
                                    </a>
                                </div>
                                <span className="live-app-note">Figma plugin — Community listing to come</span>
                            </div>
                            <div className='project-tags'>
                                <ProjectTags text="Design Systems" color="#FFA6E3" />
                                <ProjectTags text="Design Tooling" color="#18FF08" />
                                <ProjectTags text="Figma Plugin API" color="#F6FAB2" />
                                <ProjectTags text="TypeScript" color="#66A8F8" />
                                <ProjectTags text="Design Engineering" color="#5AACDC" />
                            </div>
                        </div>
                        <div className="project-content-items">
                            <video
                                src="/videos/spacescan-videos/spacescan-fix-laptop.mp4"
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

            {/* Work overview */}
            <div className="pinned-section background-container">
                <div className="horizontal-line" />
                <h3 className="pinned-inner project-header">Work overview</h3>
                <div className="background-block">
                    <div className="background-column">
                        <h2 className="background-subtitle">Timeline</h2>
                        <ul className="background-design-list">
                            <li>August 2026 - Present</li>
                        </ul>
                    </div>
                    <div className="background-column">
                        <h2 className="background-subtitle">Disciplines</h2>
                        <ul className="background-design-list">
                            <li>Design Systems</li>
                            <li>Design Tooling</li>
                            <li>Interaction Design</li>
                            <li>Design Engineering</li>
                        </ul>
                    </div>
                    <div className="background-column">
                        <h2 className="background-subtitle">Responsibilities</h2>
                        <ul className="background-design-list">
                            <li>Problem Framing</li>
                            <li>Plugin Architecture</li>
                            <li>Interface Design</li>
                            <li>Building &amp; Shipping</li>
                        </ul>
                    </div>
                    <div className="background-column">
                        <h2 className="background-subtitle">Tools</h2>
                        <ul className="background-design-list">
                            <li>Figma</li>
                            <li>Figma Plugin API</li>
                            <li>TypeScript</li>
                            <li>Claude Code</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Deliver */}
            <div className="research-container">
                <div className="horizontal-line" />
                <h3 className="project-header">Deliver</h3>
                <h2 className="section-header">Introducing Spacescan</h2>
                <div className="solution-column">
                <p className="research-description">
                    Spacescan audits a Figma file against its own design system. You give it a scale — or let it
                    read one out of the file — select a frame, and it lists every spacing, padding and type value
                    that doesn't match, each with the layer path that leads to it. Fix a value on the canvas and
                    the plugin confirms the fix where it stands, without a second scan.
                </p>
                <p className="research-description">
                    Six checks today: item spacing, padding, font size, font family, font weight and line height.
                    Each one can be switched off on its own, because not every file has an opinion about every
                    property.
                </p>
                </div>
                <div className="live-app-block">
                    <div className="live-app-buttons">
                        <a
                            className="repo-link"
                            href="https://github.com/sabrinaquach/Spacescan"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View code ↗
                        </a>
                    </div>
                    <span className="live-app-note">Runs locally today — Community listing to come</span>
                </div>

                <h2 className="section-subtitle">The core loop</h2>
                <div className="rc-figure-row">
                    <figure className="rc-figure">
                        <video src="/videos/spacescan-videos/spacescan-checks-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">1 — The plugin runs in a panel beside the canvas. Set the scale there: the spacing steps, sizes, families and weights this file is allowed to use.</figcaption>
                    </figure>
                </div>
                {/* Marker verified against the source with ffmpeg's drawbox: the panel
                    sits at 180-540px across and 324-826px down of the 1600x978 frame,
                    and holds that position from the first violation to the last fix. */}
                <DetailCallout
                    wide="/videos/spacescan-videos/spacescan-fix-laptop.mp4"
                    zoom="/videos/spacescan-videos/spacescan-fix-panel.mp4"
                    wideLabel="A Figma file being scanned, with the Spacescan panel listing its violations"
                    zoomLabel="The Spacescan panel close up, violations turning to FIXED as they are corrected"
                    marker={{ left: 11.25, top: 33.13, width: 22.5, height: 51.33 }}
                    caption="2 — Scan a frame and every off-scale value is listed, grouped by type, with the layer path to each one. Fix one on the canvas and the row flips to FIXED where it sits, counted off in the header, through to no violations left."
                />
            </div>

            {/* The Problem */}
            <div className="research-container">
                <div className="horizontal-line" />
                <h3 className="project-header">Problem</h3>
                <h2 className="section-header">Nothing enforces it</h2>
                <div className="solution-column">
                <p className="research-description">
                    Figma lets you define variables and text styles, but nothing stops you from ignoring them.
                    Type 21px into the inspector and the file takes it, same as a 24px value bound to a token.
                    So small things slip in: an Inter label in a Manrope file, 15px of padding on a 4px scale.
                    Nothing breaks, so no one notices.
                </p>
                <p className="research-description">
                    You can find them by hand — click a layer, check the inspector, repeat. It works, but it's
                    slow and easy to lose track of. And it only helps once: the file starts drifting again the
                    moment you go back to work. That's what a plugin is for.
                </p>
                </div>
            </div>

            {/* Key Design Decisions
                No Process section: no mentor critique or before/after screens exist for this
                project, and one written without them would be decoration. */}
            <div className="process-container">
                <div className="horizontal-line" />
                <h3 className="project-header">Key Design Decisions</h3>

                <div className="ss-split">
                    <div className="ss-split-text">
                        <h2 className="section-subtitle">You define the scale</h2>
                        <p className="research-description">
                            Type it in, or press Detect from file and Spacescan reads it out of the document's
                            own variables and text styles. Either way, it checks against your system rather
                            than one I invented.
                        </p>
                        <p className="research-description">
                            All five checks run by default. Line heights come with one caveat — Figma gives no
                            number when a line height is set to auto, so those layers are left alone rather
                            than flagged.
                        </p>
                    </div>
                    <figure className="rc-figure ss-figure-panel">
                        <video src="/videos/spacescan-videos/spacescan-add-checks-panel.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">Setting the checks by hand — the spacing steps, sizes, families and weights this file is allowed to use.</figcaption>
                    </figure>
                </div>

                <h2 className="section-subtitle">It re-checks itself as you fix</h2>
                <p className="research-description">
                    The obvious build is scan, read the list, go fix things, scan again — and that last step is
                    where an audit tool loses you, because the new list has lost your place in it. Instead the
                    plugin subscribes to document changes while results are open and re-runs the check on just
                    the nodes it flagged. Change a 21px gap to 24px and that row turns green where it sits.
                    The list holds still; only the rows you fixed move.
                </p>
                <div className="rc-figure-row">
                    <figure className="rc-figure">
                        <video src="/videos/spacescan-videos/spacescan-fix-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">Each fix is confirmed in place — the violation becomes a FIXED row rather than disappearing — through to the end state, where the values that passed are listed back so you can see what the file actually settled on.</figcaption>
                    </figure>
                </div>
            </div>

            {/* Reflection */}
            <div className="process-container reflection-container">
                <div className="horizontal-line" />
                <h3 className="project-header">Reflection</h3>
                <h1 className="section-header">Lessons from Spacescan</h1>
                <div className="solution-column">
                <p className="research-description">
                    Building Spacescan changed how I think about tools that live inside someone else's work.
                    Every other project I've designed had a user I had to go and find; here the user was me,
                    mid-file, halfway through something else. That framing decided almost everything — the
                    plugin had to be quick to set up, quiet until it was asked, and specific enough that a
                    flagged value could be found and fixed without ever leaving the panel.
                </p>
                <p className="research-description">
                    The most useful thing I did was run the first working version on my own Reality Check file.
                    It found drift I'd looked straight past for weeks — 21px sitting beside 24px, an Inter
                    label in a Manrope file. That's the argument for the plugin, and also an uncomfortable
                    thing to learn about your own work. I read my files differently now, and trust my eyes a
                    lot less than I used to.
                </p>
                </div>
            </div>
        </section>
    </div>
    );
};

export default ProjectFive;
