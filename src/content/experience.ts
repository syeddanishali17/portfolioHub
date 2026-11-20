// Roles. Titles, employers and dates follow the engineering CV (confirmed by Danish).
// `story` is used on the CV AND the website. `webExtra` adds supply-chain detail on the
// website only. `webOnly` entries never appear on the CV.
// Voice: say what the place is, then what I did, in plain first person. No invented numbers.

export type Role = {
  title: string;
  company: string;
  context?: string;
  /** Omitted for website-only entries whose dates are not on the engineering CV. */
  dates?: string;
  /** Short label for the website timeline card. */
  year?: string;
  story: string;
  webExtra?: string;
  webOnly?: boolean;
};

export const experience: Role[] = [
  {
    title: "Regional Product Specialist",
    company: "Alibaba Group (Daraz)",
    context: "Five markets",
    dates: "Jul 2025 to Aug 2026",
    year: "2025 to 2026",
    story:
      "Alibaba’s marketplace in South Asia, on the seller side. I looked into why new sellers were leaving and linked it to weak early sales, then designed and tested a search-visibility boost for new sellers and an abandoned-cart reminder for shoppers. I collected requirements from all five markets, wrote the specs and stayed with engineering through implementation.",
    webExtra:
      "A lot of it was seller logistics: working with third-party logistics providers, operations, commercial and finance teams on logistics rollouts, and writing SOPs so one process could hold up in markets that run very differently.",
  },
  {
    title: "Product Analyst",
    company: "Airlift Technologies",
    context: "Quick commerce",
    dates: "May 2024 to Apr 2025",
    year: "2024 to 2025",
    story:
      "A quick-commerce startup. One operational problem kept coming back, so I went through the order, demand and inventory data in SQL to find out why. I turned that into requirements for a rule based on stock levels and local demand, and helped product and operations roll it out.",
    webExtra:
      "Much of the job was supply chain: designing warehouse storage, retrieval and inventory processes for dark stores fed by a central warehouse, and analysing distribution models and delivery zones.",
  },
  {
    title: "Management Trainee, Engineering Services",
    // Employer label as on the engineering CV. If it should read "Continental Biscuits Limited
    // (Mondelēz International)", change it here so the website and CV stay consistent.
    company: "Mondelēz International (LU Biscuits)",
    dates: "Feb 2023 to Mar 2024",
    year: "2023 to 2024",
    story:
      "A biscuit factory, in the engineering services team. I tracked how much each line ran and why it stopped, coordinated planned and breakdown maintenance with the maintenance and production teams, and worked through root-cause analysis when a line failed.",
    webExtra: "I also supported the plant’s warehouse activities.",
  },
  {
    title: "Teaching Assistant, Logistics Management",
    company: "LUMS",
    context: "Alongside my MS",
    year: "LUMS",
    story: "Helped run the Logistics Management course: tutorials, student consultations, grading and teaching material.",
    webOnly: true,
  },
];

export const cvExperience = () => experience.filter((r) => !r.webOnly);
