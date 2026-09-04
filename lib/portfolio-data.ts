export type Project = {
  title: string;
  description: string;
  year: string;
  type: string;
  tags: string[];
  image: string;
  role: string;
  challenge: string;
  outcome: string;
  websiteUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Arc / Finance",
    description: "A calmer operating system for modern money teams.",
    year: "2024",
    type: "Product design",
    tags: ["UX", "Strategy", "Web"],
    image: "/projects/arc-finance.png",
    role: "Product strategy, UX, UI",
    challenge:
      "Making complex financial workflows feel clear and confident for fast-moving teams.",
    outcome:
      "A flexible operating system that helped finance teams make decisions with less friction.",
    websiteUrl: "",
  },
  {
    title: "Relay Health",
    description: "Turning clinical complexity into a clear daily rhythm.",
    year: "2023",
    type: "Digital product",
    tags: ["Research", "UI", "Prototype"],
    image: "/projects/relay-health.png",
    role: "Research, product design",
    challenge:
      "Reducing cognitive load for clinicians moving between high-stakes tasks.",
    outcome:
      "A calmer daily rhythm with clearer priorities and fewer handoff points.",
    websiteUrl: "https://example.com/relay-health",
  },
  {
    title: "Northstar",
    description:
      "A visual identity and launch system for a new kind of studio.",
    year: "2023",
    type: "Brand system",
    tags: ["Identity", "Motion", "Web"],
    image: "/projects/northstar.png",
    role: "Identity, art direction, web",
    challenge:
      "Giving an ambitious new studio a distinctive voice without adding noise.",
    outcome:
      "A modular identity that carried from launch film to website and social.",
    websiteUrl: "https://example.com/northstar",
  },
  {
    title: "Kinetic",
    description: "A motion language for products that move at human speed.",
    year: "2022",
    type: "Motion system",
    tags: ["Motion", "Systems", "Prototyping"],
    image: "/projects/kinetic.png",
    role: "Motion direction, prototyping",
    challenge:
      "Creating motion principles that made a complex platform easier to understand.",
    outcome:
      "A reusable motion toolkit used across product, marketing, and launch moments.",
    websiteUrl: "https://example.com/kinetic",
  },
  {
    title: "Field Notes",
    description: "A climate research tool designed for the real world.",
    year: "2021",
    type: "Service design",
    tags: ["Research", "Service", "Web"],
    image: "/projects/field-notes.png",
    role: "Service design, UX, facilitation",
    challenge:
      "Connecting field observations with the people making long-term climate decisions.",
    outcome:
      "A shared research language that helped teams move from notes to action.",
    websiteUrl: "https://example.com/field-notes",
  },
];

export const experience = [
  {
    company: "Independent",
    role: "Product designer & developer",
    period: "2022 — now",
    detail:
      "Partnering with ambitious teams to shape useful, distinctive digital products.",
  },
  {
    company: "Sonder Studio",
    role: "Senior product designer",
    period: "2019 — 2022",
    detail:
      "Led end-to-end product work across healthcare, finance, and climate.",
  },
  {
    company: "Fieldwork",
    role: "Designer",
    period: "2016 — 2019",
    detail: "Built brands and experiences for organizations in transition.",
  },
];

export const stacks = [
  { name: "Figma", category: "Design", note: "Systems + prototypes" },
  { name: "Next.js", category: "Build", note: "Interfaces that ship" },
  { name: "TypeScript", category: "Build", note: "Reliable foundations" },
  { name: "React", category: "Build", note: "Component thinking" },
  { name: "Notion", category: "Think", note: "Clarity in the work" },
  { name: "Framer", category: "Motion", note: "Fast visual ideas" },
];
