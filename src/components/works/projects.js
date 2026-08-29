// Single source of truth for the work section.
//
// Shipped and case-study are two independent facts, not one category, because
// the best work is both:
//   shipped: true  — it is deployed and a stranger can use it right now
//   route          — there is a written case study on this site at that path
//
// A project with both shows up under both filter chips and wears both badges.
// Deriving "has a case study" from `route` keeps them from drifting apart: the
// badge and the chip both read the same field.

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
    tags: [
      { text: 'UX design', color: '#B1FFA6' },
      { text: 'Product design', color: '#FFE0C0' },
      { text: 'Mobile design', color: '#5AACDC' },
      { text: 'User research', color: '#FFE97B' },
      { text: 'Interaction design', color: '#FFA6E3' },
      { text: 'End-to-end product design' },
    ],
  },
  {
    id: 'reality-check',
    title: 'Reality Check',
    shipped: true,
    layout: 'laptop',
    description:
      "Most listing sites tell you what an apartment looks like. Reality Check tells you what living there would actually be like — how long the commute really is, what the neighborhood's safety looks like, and what you'd actually pay each month once utilities and parking are counted in.",
    route: '/RealityCheck',
    // Laptop is rendered into the file, same as Adobe Flux, so this takes the
    // plain treatment rather than the CSS shell that `frame: 'laptop'` draws.
    media: { type: 'video', src: '/videos/reality-check-videos/rc-single-listing-laptop.mp4', className: 'final-design-video' },
    links: {
      demo: 'https://realitycheck.fly.dev',
      repo: 'https://github.com/sabrinaquach/reality-check',
      note: 'Live — score any address',
    },
    tags: [
      { text: 'Full-stack', color: '#AAFFD8' },
      { text: 'Product design', color: '#FFE0C0' },
      { text: 'TypeScript', color: '#66A8F8' },
      { text: 'React', color: '#5AACDC' },
      { text: 'Data modeling', color: '#F9FF8F' },
      { text: 'Mapbox', color: '#B5B6FF' },
    ],
  },
  {
    id: 'spacescan',
    title: 'Spacescan',
    shipped: true,
    layout: 'laptop',
    description:
      "A Figma plugin that audits a file against its own design system — compares spacing, padding and type against a defined scale and flags every value that doesn't match, grouped by layer.",
    media: null, // TODO: a screen recording of the plugin panel would sell this one
    links: {
      // TODO: add the Figma Community listing URL as `demo` once published
      repo: 'https://github.com/sabrinaquach/Spacescan',
      note: 'Figma plugin',
    },
    tags: [
      { text: 'Design systems', color: '#FFA6E3' },
      { text: 'Design tooling', color: '#18FF08' },
      { text: 'Figma plugin API', color: '#F6FAB2' },
      { text: 'TypeScript', color: '#66A8F8' },
    ],
  },
  {
    id: 'adobe-flux',
    title: 'Adobe Flux',
    shipped: false,
    layout: 'laptop',
    description: 'Generative AI tool that creates visuals through actions.',
    route: '/AdobeFlux',
    media: { type: 'video', src: '/videos/project1-videos/adobeFlux-vid1.mov', className: 'final-design-video' },
    tags: [
      { text: 'AI-driven design', color: '#18FF08' },
      { text: 'Desktop', color: '#FFE0C0' },
      { text: 'Creative tools', color: '#F6FAB2' },
      { text: 'UX design', color: '#FFA6E3' },
      { text: 'Customer journeys', color: '#5AACDC' },
    ],
  },
  {
    id: 'aura',
    title: 'Aura',
    shipped: false,
    layout: 'phone',
    description: 'Smart home app to view energy levels and change temperature in multiple rooms.',
    route: '/Aura',
    media: { type: 'video', src: '/videos/project3-videos/Aura-App-Motion-Off.mov', className: 'p2-final-design-video' },
    tags: [
      { text: 'IoT design', color: '#18FF08' },
      { text: 'UX design', color: '#FFA6E3' },
      { text: 'Home automation', color: '#F9FF8F' },
      { text: 'Mobile', color: '#B2E4FA' },
      { text: 'Full-stack', color: '#AAFFD8' },
      { text: 'HTML', color: '#B5B6FF' },
      { text: 'CSS', color: '#F8B966' },
      { text: 'JavaScript', color: '#66A8F8' },
      { text: 'Supabase', color: '#34b27b' },
    ],
  },
];

export const hasCaseStudy = (project) => Boolean(project.route);

export default projects;
