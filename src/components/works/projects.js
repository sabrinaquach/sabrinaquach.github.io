// Single source of truth for the work section.
//
// Shipped and case-study are two independent facts, not one category, because
// the best work is both:
//   shipped: true  — it is deployed and a stranger can use it right now
//   route          — there is a written page on this site at that path
//   concept: true  — a design concept that was never built to ship
//
// A project with both shows up under both filter chips and wears both badges.
//
// Having a page and being a case study are not the same thing. Reality Check
// and Spacescan have written pages, but they document what got built and why
// rather than a research-and-iteration process — no interviews, personas or
// competitive work — so they stay out of the case-study filter and wear no
// case-study badge. A route still implies a case study by default; those two
// opt out with `caseStudy: false`, which keeps the exception visible on the
// project rather than buried in the predicate.

const projects = [
  {
    id: 'pip',
    title: 'Pip',
    shipped: true,
    layout: 'phone',
    description:
      "A beginner-friendly skincare ingredient scanner that helps users understand what's in their products — personalized to their skin type, jargon-free, and guided by a friendly mascot named Pip.",
    route: '/Pip',
    media: { type: 'video', src: '/videos/pip-videos/scan-pip.mp4', className: 'p2-final-design-video' },
    links: {
      demo: 'https://pip-skincare.vercel.app',
      repo: 'https://github.com/sabrinaquach/pip-skincare',
      note: 'Try the demo — no signup',
    },
  },
  {
    id: 'reality-check',
    title: 'Reality Check',
    shipped: true,
    layout: 'laptop',
    description:
      "Most listing sites tell you what an apartment looks like. Reality Check tells you what living there would actually be like — how long the commute really is, what the neighborhood's safety looks like, and what you'd actually pay each month once utilities and parking are counted in.",
    route: '/RealityCheck',
    caseStudy: false,
    // Laptop is rendered into the file, same as Adobe Flux, so this takes the
    // plain treatment rather than the CSS shell that `frame: 'laptop'` draws.
    media: { type: 'video', src: '/videos/reality-check-videos/rc-single-listing-laptop.mp4', className: 'final-design-video' },
    links: {
      demo: 'https://realitycheck.fly.dev',
      repo: 'https://github.com/sabrinaquach/reality-check',
      note: 'Live — score any address',
    },
  },
  {
    id: 'spacescan',
    title: 'Spacescan',
    shipped: true,
    layout: 'laptop',
    description:
      "A Figma plugin that audits a file against its own design system — compares spacing, padding and type against a defined scale and flags every value that doesn't match, grouped by layer.",
    route: '/Spacescan',
    caseStudy: false,
    // Laptop is rendered into the file, same as Reality Check, so this takes the
    // plain treatment rather than the CSS shell that `frame: 'laptop'` draws.
    media: { type: 'video', src: '/videos/spacescan-videos/spacescan-checks-laptop.mp4', className: 'final-design-video' },
    links: {
      // TODO: add the Figma Community listing URL as `demo` once published
      repo: 'https://github.com/sabrinaquach/Spacescan',
      note: 'Figma plugin',
    },
  },
  {
    id: 'adobe-flux',
    title: 'Adobe Flux',
    shipped: false,
    concept: true,
    layout: 'laptop',
    description: 'Generative AI tool that creates visuals through actions.',
    route: '/AdobeFlux',
    media: { type: 'video', src: '/videos/project1-videos/adobeFlux-vid1.mov', className: 'final-design-video' },
  },
  {
    id: 'aura',
    title: 'Aura',
    shipped: false,
    concept: true,
    layout: 'phone',
    description: 'Smart home app to view energy levels and change temperature in multiple rooms.',
    route: '/Aura',
    media: { type: 'video', src: '/videos/project3-videos/Aura-App-Motion-Off.mov', className: 'p2-final-design-video' },
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);

export const hasCaseStudy = (project) => Boolean(project.route) && project.caseStudy !== false;

export default projects;
