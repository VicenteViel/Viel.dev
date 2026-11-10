// All site content lives here. Empty links are hidden.
export const profile = {
  name: "Vicente Viel",
  role: "Full-stack developer",
  yearsOfExperience: 3,
  location: "Chile",
  email: "", // e.g. "you@example.com"
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
  github: "https://github.com/VicenteViel",
};

export type Project = {
  id: "mesa" | "rumi" | "site";
  name: string;
  kind: string;
  summary: string;
  role: string;
  highlights: string[];
  stack: string[];
  note?: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "mesa",
    name: "Mesa",
    kind: "Comandea, a restaurant management platform in production",
    summary:
      "Software that restaurant teams use during service to take orders, manage tables and close bills.",
    role: "Full-stack developer on a live product used by real restaurants.",
    highlights: [
      "Built and improved point-of-sale workflows: orders, tables and bill closing.",
      "Worked on role-based permissions so each person sees only the actions their job needs.",
      "Shipped UI improvements for staff working fast on busy shifts.",
      "Wrote and maintained application tests to keep releases reliable.",
    ],
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    note: "The codebase is private. I'm happy to walk through my work in an interview.",
    links: [{ label: "Visit comandea.com", href: "https://comandea.com" }],
  },
  {
    id: "rumi",
    name: "Rumi",
    kind: "Mobile app for shared expenses, independent product",
    summary:
      "An Android and iOS app for roommates, couples and families to log shared expenses, split them fairly and see who owes whom.",
    role: "Sole developer: product, data model, backend and mobile app.",
    highlights: [
      "Equal and custom splits in integer pesos, with a deterministic rule for leftover cents.",
      "Every money operation is an atomic Postgres function with an idempotency key.",
      "Row Level Security isolates each group's data; admin rules are enforced in the database.",
      "Invitations by code, QR or link, receipts in private storage, and a full history.",
      "Money logic and permissions covered by tests that run in CI on every pull request.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "TanStack Query", "Jest"],
    links: [{ label: "View on GitHub", href: "https://github.com/VicenteViel/Rumi" }],
  },
  {
    id: "site",
    name: "Viel.dev",
    kind: "This portfolio",
    summary:
      "A small, fast portfolio built without UI or animation libraries. Motion is plain CSS and respects reduced-motion settings.",
    role: "Design and development.",
    highlights: [],
    stack: ["Next.js", "React", "TypeScript", "CSS"],
    links: [{ label: "View source", href: "https://github.com/VicenteViel/Viel.dev" }],
  },
];

// Ordered from most recent.
export const experience = [
  {
    period: "Present",
    title: "Full-stack developer",
    place: "Restaurant management platform",
    detail:
      "Contributing to production software: POS workflows, permissions, UI improvements and testing.",
  },
  {
    period: "2026",
    title: "Independent product developer",
    place: "Rumi",
    detail:
      "Designing and building a mobile app end to end, from the Postgres data model to the React Native interface.",
  },
  {
    period: "Ongoing",
    title: "Web developer",
    place: "BLStudio",
    detail: "Building websites and web projects with Next.js, React, TypeScript and Tailwind CSS.",
  },
];

export const principles = [
  "Clean, readable code that the next person can maintain.",
  "Tests around the parts that handle money, permissions and data.",
  "Small pull requests and honest code reviews.",
  "Interfaces designed for the people who use them every day.",
];

export const stack = [
  {
    group: "Frontend and mobile",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "React Native", "Expo", "Tailwind CSS"],
  },
  { group: "Backend and data", items: ["Node.js", "PostgreSQL", "Supabase", "REST APIs"] },
  {
    group: "Cloud and tooling",
    items: ["AWS", "Docker", "Git", "GitHub Actions", "Linux", "Jest"],
  },
];
