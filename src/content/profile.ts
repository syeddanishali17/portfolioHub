// Single source of truth for identity, links, education, skills and languages.
// The website and the CV both read from here. Anything marked "website only" never reaches the CV.

export const profile = {
  fullName: "Syed Danish Ali",
  displayName: "Danish Ali",
  firstName: "Danish",
  location: "Vienna, Austria",
  email: "danishraza16@gmail.com",
  /** Shown on the CV only, never on the public website. */
  phoneCvOnly: "+43 676 4983601",
  linkedin: "https://www.linkedin.com/in/syeddanishali16",
  github: "https://github.com/syeddanishali17",
  cvPath: "/cv/Syed_Danish_Ali_CV.pdf",
  /** Website portrait, produced by `npm run portrait`. The site hides it if the file is missing. */
  portrait: {
    wide: { src: "/me/hero-wide.webp", width: 1700, height: 1002 },
    tall: { src: "/me/hero-tall.webp", width: 900, height: 1200 },
    alt: "Danish Ali above Vienna at dusk, the city lights and a sunset behind him",
    about: { src: "/me/about.webp", width: 800, height: 1000, alt: "Danish Ali in a knit sweater in front of a city skyline" },
  },
  focus: ["Electrical Engineering", "Data", "Supply Chain"],
  /** Editable availability line (website). No work-permit or date claims without Danish’s approval. */
  status: "MSc student at Technische Universität Wien · Open to engineering, data and supply chain roles",
} as const;

export type EducationEntry = {
  degree: string;
  school: string;
  /** Leave undefined until verified against an official record. */
  dates?: string;
  note?: string;
  /** Website only: never printed on the engineering CV. */
  webOnly?: boolean;
};

export const education: EducationEntry[] = [
  {
    degree: "MSc Information and Communication Engineering",
    school: "Technische Universität Wien",
    dates: "Oct 2026 to present",
    note: "Current courses include Introduction to Biostatistics and Modern Sensor Technologies.",
  },
  {
    degree: "Executive MS Supply Chain and Retail Management",
    school: "Lahore University of Management Sciences (LUMS)",
    note: "Thesis: optimising putaway and retrieval in e-commerce warehouses with vehicle-routing models.",
    webOnly: true,
  },
  {
    degree: "BSc Electrical Engineering",
    school: "University of Engineering and Technology (UET) Lahore",
    // TODO: confirm graduation year against the degree certificate before adding `dates`.
  },
];

export type SkillGroup = { label: string; items: string[] };

/** Printed on the CV and shown on the website. */
export const skills: SkillGroup[] = [
  { label: "Code and data", items: ["Python", "pandas", "SQL", "Microsoft Excel"] },
  {
    label: "Testing and analysis",
    items: ["Time-series forecasting", "Backtesting against baselines", "KPI tracking", "Excel cross-checks"],
  },
  {
    label: "Technical operations",
    items: ["Root-cause analysis", "Troubleshooting", "Downtime KPIs", "Maintenance coordination"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "FastAPI", "Streamlit", "OR-Tools", "Jira", "Confluence", "Cursor", "Claude"],
  },
];

/** Website only. Supply-chain skills, sourced from Danish’s supply-chain CVs, thesis and projects. */
export const supplyChainSkills: SkillGroup[] = [
  {
    label: "Planning and inventory",
    items: [
      "Demand forecasting",
      "Forecast accuracy (WAPE, bias)",
      "Safety stock",
      "Reorder points",
      "EOQ",
      "Replenishment planning",
      "Policy backtesting",
    ],
  },
  {
    label: "Logistics and warehousing",
    items: [
      "Warehouse putaway and retrieval",
      "Dark-store operations",
      "Distribution and delivery zones",
      "3PL coordination",
      "SOP writing",
    ],
  },
  {
    label: "Optimisation",
    items: ["MILP", "Vehicle routing (CVRP, VRPTW)", "OR-Tools", "OpenSolver", "Excel Solver"],
  },
  { label: "Reporting", items: ["Power BI", "BigQuery", "KPI dashboards"] },
];

/** Website only. Shown as large outlined pills. */
export const interests = [
  "Signal processing",
  "Vehicle routing",
  "Demand and inventory planning",
  "Decision support",
  "Sensors and biosignals",
];

export const languages = [
  { name: "English", level: "C1, fluent" },
  { name: "German", level: "A1, studying" },
];
