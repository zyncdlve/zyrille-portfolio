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
    title: "Multi-Site Online Platform",
    description:
      "A multi-site online platform where I contributed to authentication and backend features supporting multiple web applications.",
    year: "2026",
    type: "Backend development",
    tags: ["Node.js", "TypeScript", "Authentication"],
    image: "/projects/igamingsolutions.png",
    role: "Associate Software Engineer",
    challenge:
      "Supporting authentication features across multiple web platforms while maintaining a scalable architecture and handling asynchronous account updates.",
    outcome:
      "Contributed to authentication improvements across multiple web platforms, including Google reCAPTCHA integration, authentication architecture updates, and a Verification Lock feature supporting thousands of users.",
    websiteUrl: "",
  },
  {
    title: "Financial Management Information System",
    description:
      "A financial management system where I developed and maintained backend APIs and database solutions for financial and transaction-related processes.",
    year: "2025 - 2026",
    type: "Web application",
    tags: ["C#", ".NET", "SQL Server"],
    image: "/projects/fmis.png",
    role: "Lead Backend Developer",
    challenge:
      "Developing and maintaining backend APIs and database objects while improving the performance and reliability of financial workflows.",
    outcome:
      "Developed and maintained backend functionality, including APIs, stored procedures, and database views, while improving query and API performance.",
    websiteUrl: "",
  },
  {
    title: "Community Digital Management System",
    description:
      "A prototype community management platform designed to provide residents with information about emergencies, flooding, hazards, and municipal document requests.",
    year: "2025",
    type: "Web application prototype",
    tags: ["C#", ".NET", "PostgreSQL", "HERE Maps"],
    image: "/projects/b360.png",
    role: "Backend development, database integration, map features",
    challenge:
      "Creating a centralized platform where community members could access emergency and hazard information while integrating location-based visualization.",
    outcome:
      "Developed a prototype using C# .NET and PostgreSQL through Supabase, integrated HERE Maps on the frontend, and designed heatmap features for visualizing location-based information.",
    websiteUrl: "",
  },
  {
    title: "TeachTrove",
    description:
      "An educational web platform where I developed the PostgreSQL database, integrated APIs for the Help Center, and contributed to the AWS cloud infrastructure.",
    year: "2025",
    type: "Web application",
    tags: ["PostgreSQL", "AWS", "API", "Cloud"],
    image: "/projects/teachtrove.png",
    role: "Database development, API integration, cloud deployment",
    challenge:
      "Building a reliable database foundation while integrating backend services and cloud infrastructure for the platform.",
    outcome:
      "Developed the PostgreSQL database for the system, integrated APIs into the Help Center, and worked with AWS services including Lambda, API Gateway, Cognito, RDS, and S3 for deployment and cloud storage.",
    websiteUrl: "https://www.teachtrove.com/",
  },
  {
    title: "Packet3D",
    description:
      "A capstone project focused on a virtual reality networking game designed to create interactive social and networking experiences.",
    year: "2023 - 2025",
    type: "Virtual reality game",
    tags: ["VR", "Backend", "Game Development"],
    image: "/projects/packet3d.png",
    role: "Backend development, storyboard design",
    challenge:
      "Contributing to both the technical and creative aspects of a virtual reality networking experience.",
    outcome:
      "Contributed backend development for the forum feature and created the storyboard used to plan the project's user experience and flow.",
    websiteUrl: "https://packet3d-daniellecscs-projects.vercel.app/",
  },
  {
    title: "World of Reyland",
    description:
      "A game development project where I contributed to creative planning by creating the storyboard and helping design the project showcase.",
    year: "2024",
    type: "Game development",
    tags: ["Game Development", "Storyboard", "Design"],
    image: "/projects/worldofreyland.png",
    role: "Storyboard and project showcase design",
    challenge:
      "Helping communicate the game's concept and experience through visual planning and presentation.",
    outcome:
      "Created the project's storyboard and contributed to designing the project showcase used to present the game.",
    websiteUrl:
      "https://sites.google.com/bulsu.edu.ph/it-312-mgd-23-24/project-showcase-23-24/bsit-3d-g2/g1?pli=1&authuser=0",
  },
];

export const experience = [
  {
    company: "ScaleForge Information Technology Solutions",
    role: "Associate Software Engineer",
    period: "May 2026 — July 2026",
    detail:
      "Developed authentication features and backend APIs using Node.js and TypeScript across multiple web platforms.",
  },
  {
    company: "Simplevia Technologies Inc.",
    role: "Lead Backend Developer",
    period: "August 2025 — May 2026",
    detail:
      "Developed backend APIs and database solutions using C# .NET and SQL Server for financial management systems.",
  },
  {
    company: "Results Marketing Partners",
    role: "Backend Developer Intern",
    period: "January 2025 — May 2025",
    detail:
      "Contributed to backend development and database tasks while gaining hands-on experience building web applications.",
  },
];

export const stacks = [
  { name: "C# .NET", category: "Backend", note: "APIs and business systems" },
  { name: "Node.js", category: "Backend", note: "Modern API development" },
  {
    name: "TypeScript",
    category: "Build",
    note: "Reliable and maintainable code",
  },
  { name: "React", category: "Frontend", note: "Component-based interfaces" },
  { name: "Next.js", category: "Frontend", note: "Modern web applications" },
  { name: "PostgreSQL", category: "Database", note: "Relational data systems" },
  {
    name: "SQL Server",
    category: "Database",
    note: "Queries and database design",
  },
  { name: "MongoDB", category: "Database", note: "Document-based data" },
  { name: "AWS", category: "Cloud", note: "Cloud services and deployment" },
  { name: "Docker", category: "DevOps", note: "Containerized development" },
  { name: "Git", category: "Tools", note: "Version control and collaboration" },
  {
    name: "HERE Maps",
    category: "Integration",
    note: "Location and map features",
  },
];
