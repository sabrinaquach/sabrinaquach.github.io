import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import ProjectTags from "../components/project-tags/tags";
import CaseStudyNav from "../components/case-study-nav/caseStudyNav";

import './projectFour.css';

const ProjectFour = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.scrollTo === 'RealityCheck') {
            setTimeout(() => {
                const el = document.getElementById('RealityCheck');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    navigate(location.pathname, { replace: true, state: {} });
                }
            }, 0);
        }
    }, [location, navigate]);

    // `match` is the heading's own text; `label` is the tab. Lets a long
    // heading sit behind a short tab without renaming the section.
    const navSections = [
        { match: 'Work overview', label: 'Overview' },
        { match: 'Introducing Reality Check', label: 'Deliver' },
        { match: 'The Problem', label: 'Problem' },
        { match: 'The Solution', label: 'Solution' },
        { match: 'Designing Through Feedback', label: 'Process' },
        { match: 'Key Design Decisions', label: 'Decisions' },
        { match: 'Reflection', label: 'Reflection' },
    ];

    return (
    <div className="project-container" id="RealityCheck">
        <CaseStudyNav sections={navSections} />
        <section className="case-study-container">
            <div className="project-content">
                <div className="project-block">
                    <div className="project-content-block">
                        <div className="text-column">
                            <h3 className="project-header">— Case Study 04</h3>
                            <h1 className="project-title">Reality Check</h1>
                            <p className="project-description">
                                Most listing sites tell you what an apartment looks like. Reality Check tells you what living
                                there would actually be like — how long the commute really is, what the neighborhood's safety
                                looks like, and what you'd actually pay each month once utilities and parking are counted in.
                            </p>
                            <div className="live-app-block">
                                <div className="live-app-buttons">
                                    <a
                                        className="live-app-link"
                                        href="https://realitycheck.fly.dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View live app ↗
                                    </a>
                                    <a
                                        className="repo-link"
                                        href="https://github.com/sabrinaquach/reality-check"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View code ↗
                                    </a>
                                </div>
                                <span className="live-app-note">Score any address — no signup</span>
                            </div>
                            <div className='project-tags'>
                                <ProjectTags text="Product Design" color="#FFE0C0" />
                                <ProjectTags text="Full-stack" color="#AAFFD8" />
                                <ProjectTags text="Data Modeling" color="#F9FF8F" />
                                <ProjectTags text="Interaction Design" color="#FFA6E3" />
                                <ProjectTags text="Design Engineering" color="#5AACDC" />
                            </div>
                        </div>
                        <div className="project-content-items">
                            <video
                                src="/videos/reality-check-videos/rc-single-listing-laptop.mp4"
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
                            <li>July 2026 - Present</li>
                        </ul>
                    </div>
                    <div className="background-column">
                        <h2 className="background-subtitle">Disciplines</h2>
                        <ul className="background-design-list">
                            <li>Product Design</li>
                            <li>Interaction Design</li>
                            <li>Data Modeling</li>
                            <li>Design Engineering</li>
                            <li>Full-stack Development</li>
                        </ul>
                    </div>
                    <div className="background-column">
                        <h2 className="background-subtitle">Responsibilities</h2>
                        <ul className="background-design-list">
                            <li>Problem Framing</li>
                            <li>Scoring Model Design</li>
                            <li>Interface Design</li>
                            <li>Prototyping</li>
                            <li>Building &amp; Shipping</li>
                            <li>Auth / Infrastructure</li>
                        </ul>
                    </div>
                    <div className="background-column">
                        <h2 className="background-subtitle">Tools</h2>
                        <ul className="background-design-list">
                            <li>Figma</li>
                            <li>Claude Code</li>
                            <li>TypeScript</li>
                            <li>React / Vite</li>
                            <li>Mapbox GL</li>
                            <li>SQLite</li>
                            <li>Fly.io</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Deliver */}
            <div className="research-container">
                <div className="horizontal-line" />
                <h3 className="project-header">Deliver</h3>
                <h2 className="section-header">Introducing Reality Check</h2>
                <div className="solution-column">
                <p className="research-description">
                    Reality Check is live. You give it where you work and what matters to you, paste in a
                    listing's address and rent, and it scores that address on commute, safety, cost and
                    amenities using real city data — then puts any two listings side by side so the choice
                    is a comparison rather than a hunch.
                </p>
                <p className="research-description">
                    It runs on eight cities today, and anyone can score an address without making an
                    account.
                </p>
                </div>
                <div className="live-app-block">
                    <div className="live-app-buttons">
                        <a
                            className="live-app-link"
                            href="https://realitycheck.fly.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View live app ↗
                        </a>
                        <a
                            className="repo-link"
                            href="https://github.com/sabrinaquach/reality-check"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View code ↗
                        </a>
                    </div>
                    <span className="live-app-note">Score any address — no signup</span>
                </div>

                <h2 className="section-subtitle">The core loop</h2>
                <div className="rc-figure-row">
                    <figure className="rc-figure">
                        <video src="/videos/reality-check-videos/rc-onboarding-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">1 — Tell it where you work and what matters most. The weighting follows that answer.</figcaption>
                    </figure>
                    <figure className="rc-figure">
                        <video src="/videos/reality-check-videos/rc-single-listing-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">2 — Score a listing. Every pillar opens into the data it came from.</figcaption>
                    </figure>
                </div>
                <div className="rc-figure-row">
                    <figure className="rc-figure">
                        <video src="/videos/reality-check-videos/rc-comparison-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">3 — Drop a second listing into the open slot, then compare: both addresses on every pillar at once.</figcaption>
                    </figure>
                </div>
            </div>

            {/* The Problem */}
            <div className="research-container">
                <div className="horizontal-line" />
                <h2 className="section-header">The Problem</h2>
                <div className="solution-column">
                <p className="research-description">
                    Apartment listings answer "what does this place look like and cost on paper?" — but not
                    "is this actually the right place for me?" Commute time, neighborhood safety, and true
                    monthly cost (not just rent) are the factors that actually determine whether an apartment
                    works, and no listing site surfaces them together in one place.
                </p>
                <p className="research-description">
                    I considered pulling live listings directly from Zillow, Craigslist, or Facebook
                    Marketplace, but each blocks or restricts automated access to their data. Rather than
                    build something fragile on top of scraped data, I designed around manual entry instead —
                    the user enters an address and rent, and Reality Check does the analysis. This kept the
                    product legitimate to build and let me focus design effort on the part that actually
                    matters: the analysis itself, not the listing data.
                </p>
                </div>
            </div>

            {/* The Solution */}
            <div className="research-container">
                <div className="horizontal-line" />
                <h2 className="section-header">The Solution</h2>
                <div className="solution-column">
                <p className="research-description">
                    Four pillars, because those are the four a renter can't check from a photo — each
                    measured the way the decision actually gets made: commute at 8am with real traffic,
                    safety per block rather than per neighbourhood, rent against what that tract typically
                    pays. Amenities count for less on purpose. Being near a café is a preference; the other
                    three are constraints.
                </p>
                <p className="research-description">
                    The renter sets the weighting, because any weighting I picked would be my opinion
                    presented as arithmetic. Two people can score the same address, get different numbers,
                    and both be right.
                </p>
                <p className="research-description">
                    And it refuses to guess. A pillar that can't reach real data drops out rather than
                    filling the gap — a score a renter trusts and shouldn't is worse than no score.
                </p>
                </div>
                <div className="rc-figure-row">
                    <figure className="rc-figure">
                        <img src="/images/reality-check-images/scored.jpg" alt="A scored listing with its pillar breakdown" />
                        <figcaption className="rc-caption">The plain-language read sits above the number — "commute good; safety is the weak point" tells a renter what to do with a 96 in a way the 96 cannot.</figcaption>
                    </figure>
                </div>
            </div>

            {/* Process */}
            <div className="process-container">
                <div className="horizontal-line" />
                <h3 className="project-header">Process</h3>
                <h2 className="section-header">Designing Through Feedback</h2>
                <p className="research-description">
                    I met regularly with my design mentor, Qin, throughout this project. Her questions led
                    me to think more carefully about my design choices, and working through them is what
                    got me to the final design.
                </p>

                <h2 className="section-subtitle">Cutting steps to reach the core value</h2>
                <p className="research-description">
                    Early versions required checking a listing, saving it, navigating to a separate
                    comparison screen, and repeating that for a second listing — 7+ screens before seeing an
                    actual comparison. Qin's feedback was direct: "Is the next screen really necessary?" That
                    question reshaped the entire flow. The final version lets users drag a suggested listing
                    directly into a comparison slot, or add one through an inline form — no separate screens,
                    no forced detours. Adding a second listing now auto-navigates straight into the
                    comparison result.
                </p>
                <div className="rc-figure-row">
                    <figure className="rc-figure">
                        <video src="/videos/reality-check-videos/rc-comparison-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">Drag a listing from the row below straight into a comparison slot — the flow that replaced seven screens.</figcaption>
                    </figure>
                </div>

                <h2 className="section-subtitle">Scoping color to meaning, not decoration</h2>
                <p className="research-description">
                    An early comparison screen used green for nearly everything — the top-ranked badge, the
                    Sign In button, every winning category, the score ring — which meant the color stopped
                    communicating anything specific. I rebuilt the palette so each color has exactly one job:
                    green means "wins this category," and every other action (Sign In, primary buttons) uses a
                    distinct color that can't be confused with a comparison result.
                </p>
                <div className="rc-figure-row">
                    <figure className="rc-figure">
                        <img src="/images/reality-check-images/green-before.jpg" alt="Earlier design with green on the sign-in button, the best-match card, every winning category and the score rings" />
                        <figcaption className="rc-caption">Before — green on Sign In, on the best-match card, on every winning category and inside the score rings. When everything is green, none of it means anything in particular.</figcaption>
                    </figure>
                    <figure className="rc-figure">
                        <img src="/images/reality-check-images/green-after.jpg" alt="Current design where green marks only the winning category" />
                        <figcaption className="rc-caption">After — same screen. Green appears in one role only: the category a listing wins. The best-match card, the score rings and Sign In all gave it up.</figcaption>
                    </figure>
                </div>

                <h2 className="section-subtitle">Simplifying navigation labels to match what's actually there</h2>
                <p className="research-description">
                    The saved-listings screen was originally labeled "Saved &amp; compare" — an attempt to
                    signal the comparison feature was accessible from there. Once comparison became something
                    the screen's content demonstrated on its own (a ranked list, visible scores), the label no
                    longer needed to do that explanatory work. It became simply "Saved."
                </p>
                <div className="rc-figure-row">
                    <figure className="rc-figure">
                        <video src="/videos/reality-check-videos/rc-signin-saved-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">The Saved screen demonstrates comparison on its own — a ranked list with visible scores — so the label no longer has to explain it.</figcaption>
                    </figure>
                </div>
            </div>

            {/* Key Design Decisions */}
            <div className="process-container">
                <div className="horizontal-line" />
                <h2 className="section-header">Key Design Decisions</h2>

                <h2 className="section-subtitle">A transparent, user-weighted scoring formula</h2>
                <p className="research-description">
                    Rather than a black-box percentage, Reality Check lets users indicate which factor —
                    commute, safety, or cost — matters most to them, and weights the score accordingly (their
                    priority counts for half the total score; the other two split the remainder). Every score
                    is paired with a plain-language explanation of how it was calculated, directly addressing
                    feedback that an opaque number wouldn't earn user trust.
                </p>
                <div className="rc-figure-row">
                    <figure className="rc-figure">
                        <video src="/videos/reality-check-videos/rc-onboarding-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">Onboarding asks before it scores — a workplace, then what matters most — so the weighting is the renter's opinion rather than mine.</figcaption>
                    </figure>
                    <figure className="rc-figure">
                        <video src="/videos/reality-check-videos/rc-breakdown-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">Any score opens into the reasoning behind it — in plain language, including where the higher-scoring listing loses.</figcaption>
                    </figure>
                </div>

                <h2 className="section-subtitle">One map component, reused everywhere</h2>
                <p className="research-description">
                    Rather than designing a separate map for each screen, I built a single "Commute &amp;
                    safety zone" map with toggleable Commute/Safety/Cost layers, reused across the
                    listing-check screen, the saved list, and the comparison view — showing different data
                    depending on context, but always in the same visual language.
                </p>
                <div className="rc-figure-row">
                    <figure className="rc-figure">
                        <video src="/videos/reality-check-videos/rc-map-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">One component, switching layers: drive-time bands, then block-level safety, then the good, moderate and poor areas behind that score.</figcaption>
                    </figure>
                </div>

                <h2 className="section-subtitle">Designing for both mobile and desktop from one system</h2>
                <p className="research-description">
                    Mobile patterns (a bottom sheet for adding a listing, a sticky address header while
                    scrolling) needed real rethinking for desktop — the sheet became a persistent side panel,
                    the sticky header became a header row above the comparison content. Building both forced
                    the underlying design system (Manrope type scale, spacing tokens, color roles) to hold up
                    across genuinely different interaction models, not just different screen widths.
                </p>
                <div className="rc-figure-row">
                    <figure className="rc-figure rc-figure-phone">
                        <video src="/videos/reality-check-videos/rc-mobile.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">Mobile — adding a listing is a bottom sheet, the address header stays put while the results scroll, and comparison lives behind a tab bar.</figcaption>
                    </figure>
                    <figure className="rc-figure">
                        <video src="/videos/reality-check-videos/rc-comparison-laptop.mp4" loop muted autoPlay playsInline />
                        <figcaption className="rc-caption">Desktop — the same sheet becomes a persistent side panel and the sticky header becomes a header row, so both listings and the map stay on screen at once.</figcaption>
                    </figure>
                </div>
            </div>

            {/* Reflection */}
            <div className="process-container reflection-container">
                <div className="horizontal-line" />
                <h2 className="section-header">Reflection</h2>
                <div className="solution-column">
                <p className="research-description">
                    Reality Check's biggest constraint was data access — there's no clean, universal source
                    for neighborhood safety data, so the current version scopes to areas with accessible
                    public data rather than promising nationwide coverage. Cost estimates for utilities and
                    parking are regional averages, not per-unit figures, which I made a deliberate choice to
                    be upfront about rather than imply false precision.
                </p>
                <p className="research-description">
                    If I continued building this, the next additions would be: letting users save notes on
                    why they chose one listing over another, and expanding safety-data coverage to more
                    cities as better sources become available.
                </p>
                </div>
            </div>
        </section>
    </div>
    );
};

export default ProjectFour;
