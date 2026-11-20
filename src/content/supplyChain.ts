// Website only. The supply-chain side of Danish’s background, for the soft-green band.
// Sources: LUMS thesis PDF (May 2023), Danish’s supply-chain CVs, and the project READMEs.

export type SupplyChainStory = {
  kicker: string;
  title: string;
  text: string;
  link?: { label: string; to: string; internal?: boolean };
};

export const supplyChainIntro =
  "Before signals and sensors, I spent years on how goods move: warehouses, dark stores, delivery vans and stock levels. I did an MS in supply chain, wrote my thesis on warehouse routing, and keep building tools for the same questions.";

export const supplyChainStories: SupplyChainStory[] = [
  {
    kicker: "MS thesis · LUMS · 2023",
    title: "Shorter walks in an e-commerce warehouse",
    text: "Two MILP routing models for the people who put stock away and pick it again: a capacitated routing model over a 30-rack layout and a version with time windows, solved in Excel and OpenSolver. Across the modelled scenarios, the thesis reports about 40% lower annual costs than the observed practice.",
  },
  {
    kicker: "Airlift Technologies",
    title: "Dark stores and delivery zones",
    text: "Designed storage, retrieval and inventory processes for quick-commerce dark stores fed by a central warehouse, and used SQL to dig into demand, stock and distribution data.",
  },
  {
    kicker: "Daraz (Alibaba Group)",
    title: "Seller logistics in five markets",
    text: "Worked with third-party logistics providers and with operations, commercial and finance teams to roll out logistics changes, and wrote the SOPs that kept them consistent.",
  },
  {
    kicker: "LUMS",
    title: "Teaching logistics",
    text: "Teaching assistant for the Logistics Management course: tutorials, consultations, grading and course material.",
  },
  {
    kicker: "Independent project",
    title: "Routing vans with OR-Tools",
    text: "LastMile Lab picks up where the thesis stopped: capacity-constrained vehicle routing in Python, compared against a simple baseline.",
    link: { label: "LastMile Lab", to: "/projects/lastmilelab", internal: true },
  },
  {
    kicker: "Independent project",
    title: "From forecast to purchase order",
    text: "DemandPlanningLab turns forecasts into safety stock, reorder points and order sizes, checked against Excel and backtested.",
    link: { label: "DemandPlanningLab", to: "/projects/demandplanninglab", internal: true },
  },
];
