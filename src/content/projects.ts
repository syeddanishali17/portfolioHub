// Project records. Every number here comes from the project’s own public README
// (see docs/content-source-audit.md). They are repository-reported results, not
// independently reproduced measurements, and most use synthetic data. Say so visibly.

export type Metric = { value: string; label: string; context: string };

export type Project = {
  slug: string;
  title: string;
  /** Short name used in tight spaces such as the CV. */
  shortTitle: string;
  headline: string;
  category: string[];
  kind: string;
  status: "live" | "repo only";
  year: number;
  featured: boolean;
  order: number;
  /** 2–3 sentence card text, first person. */
  summary: string;
  /** Small caps line under the text, e.g. "My part · everything". */
  myPart: string;
  /** Honest scope label, always shown next to results. */
  caveat: string;
  problem: string;
  role: string;
  approach: string[];
  metrics: Metric[];
  evidenceNote: string;
  demoNotes: string[];
  limitations: string[];
  learned: string[];
  tech: string[];
  image?: { src: string; alt: string; width: number; height: number };
  extraImage?: { src: string; alt: string; width: number; height: number; caption: string };
  demoUrl?: string;
  repoUrl: string;
  methodologyUrl?: string;
  /** Curated one-paragraph CV text. */
  cv: string;
};

const GH = "https://github.com/syeddanishali17";

export const projects: Project[] = [
  {
    slug: "biolab-ecg",
    title: "ECG Noise Stress-Test Bench",
    shortTitle: "BioLab ECG",
    headline: "Stress-testing heartbeat detectors with real recorded noise.",
    category: ["Biomedical signals", "Signal processing", "Verification"],
    kind: "Independent research and teaching tool",
    status: "repo only",
    year: 2026,
    featured: true,
    order: 1,
    summary:
      "Heartbeat detectors are usually judged on clean recordings. I built a bench that mixes real electrode, muscle and baseline noise into annotated ECG and watches five open-source detectors until they break. Next to it is a learning track that explains ECG, heart sounds, PPG and breathing with real recordings.",
    myPart:
      "My part · Test protocol, code, app and write-up",
    caveat: "Research and education tool. Not a medical device, not for diagnosis or monitoring.",
    problem:
      "Any device that reads a heartbeat has to keep finding beats while electrodes move, muscles fire and the baseline drifts. Detection algorithms are usually reported on clean data. I wanted to see, with a repeatable protocol, how quickly they break when the signal gets noisy, and why.",
    role:
      "Independent project. I designed the test protocol, reimplemented PhysioNet’s noise mixer, wired five detectors behind one interface, built the evaluation and the Streamlit app, and wrote the verification report and learning chapters.",
    approach: [
      "Clean ECG with expert-annotated beats from the MIT-BIH databases, plus recorded electrode-motion, muscle and baseline-wander noise.",
      "Noise mixed at controlled signal-to-noise ratios from 24 dB down to −6 dB, using a reimplementation of PhysioNet’s nst tool that matches the official records within 0.06 dB.",
      "Five open-source QRS detectors (NeuroKit2, Pan-Tompkins, Hamilton, Elgendi, XQRS), each run with and without an extra pre-filter.",
      "Beats matched one-to-one within ±150 ms; sensitivity, positive predictive value, F1 and heart-rate error with block-bootstrap confidence intervals.",
    ],
    metrics: [
      { value: "2,820", label: "detector runs", context: "282 test signals × 5 detectors × 2 pre-filter settings" },
      { value: "61 h", label: "of noisy test ECG", context: "every hour scored by all 10 detector configurations" },
      { value: "66–73%", label: "+P at 6 dB electrode motion", context: "while sensitivity stays at 88–97%: noise adds false beats rather than hiding real ones" },
    ],
    evidenceNote:
      "Results as reported in the project’s verification report. They come from public PhysioNet data and default detector settings.",
    demoNotes: [
      "Noise lab: mix any noise into any of 15 records at any SNR and overlay a detector live.",
      "Filter designer: magnitude, phase, group delay and the beat delay a causal filter adds.",
      "Failure gallery: the worst ten-second windows per detector, with the failure mode explained.",
      "Learn track: eight short chapters and a 128-term glossary built on real recordings.",
    ],
    limitations: [
      "Not a medical device. It reports detection performance and robustness, never a diagnosis.",
      "Detectors run with default settings; tuned settings could rank differently.",
      "The matching rule is EC57-style, but no EC57 compliance is claimed.",
      "No public demo link at the moment. The app runs locally from the repository with a few commands.",
    ],
    learned: [
      "Read the data before trusting it. An audit found offset 'clean' segments and a wrong baseline in the official headers.",
      "A pre-filter barely helps (under 0.5 points of F1) when every detector already band-limits its input. Measure before adding steps.",
      "Some failures, like T-wave oversensing, have nothing to do with noise level. Averages alone would have hidden them.",
    ],
    tech: ["Python", "Streamlit", "NeuroKit2", "wfdb", "NumPy", "pytest"],
    // demoUrl removed: https://biolab-ecg.streamlit.app showed Streamlit "not found" on 20 Nov 2026.
    // Redeploy the app, then restore the link here (it flows to the site and the CV).
    repoUrl: `${GH}/BioLab-ECG`,
    methodologyUrl: `${GH}/BioLab-ECG/blob/main/docs/verification_report.md`,
    cv: "Python test bench that mixes real recorded noise into annotated ECG to find where five open-source heartbeat detectors fail. Across 2,820 runs, electrode motion was the limiting noise and added false beats rather than hiding real ones. Research tool, not a medical device.",
  },
  {
    slug: "lastmilelab",
    title: "LastMile Lab",
    shortTitle: "LastMileLab2",
    headline: "Comparing a simple dispatch rule with an optimisation model.",
    category: ["Optimisation", "Decision support", "Python web app"],
    kind: "Independent project, fictional operator, synthetic data",
    status: "live",
    year: 2026,
    featured: true,
    order: 2,
    summary:
      "Every morning a dispatcher has to decide which van takes which order, and in what order to drive. I built an app for a made-up Vienna delivery company that compares a simple nearest-stop rule with Google OR-Tools and shows exactly where the kilometres go.",
    myPart:
      "My part · Model, API, interface and tests",
    caveat: "Fictional operator. Synthetic customers, demand and distances. No live traffic.",
    problem:
      "A dispatcher starts the morning with every order, every address and a few identical vans. Each van loads once and comes back to the depot. Which van gets which order, and in what sequence, so that nobody is skipped, no van is overloaded and the total distance is as short as possible?",
    role:
      "Independent project. I wrote the problem formulation, the baseline, the OR-Tools model, the FastAPI service, the Streamlit interface and the tests.",
    approach: [
      "Capacity-aware nearest-neighbour baseline that is fully deterministic and covered by tests.",
      "Google OR-Tools RoutingModel with guided local search under a fixed time limit.",
      "FastAPI service owns the planning; the Streamlit interface never solves anything itself.",
      "Independent solution checks rebuild loads and distances from the returned routes, so every KPI can be reconciled.",
    ],
    metrics: [
      { value: "20.6%", label: "shorter total route", context: "OR-Tools vs nearest-neighbour baseline, synthetic Vienna Standard 24 scenario" },
      { value: "97.2 km", label: "vs 122.4 km", context: "OR-Tools (5 s search) vs baseline, both serving 24 of 24 customers" },
      { value: "1 vs 3", label: "route crossings", context: "the optimised plan also reads better for a dispatcher, though only distance was optimised" },
    ],
    evidenceNote:
      "Published comparison from the project README (4 September 2026). OR-Tools returns the best plan found within its time limit, not a proven optimum.",
    demoNotes: [
      "Three scenario presets plus a custom demand editor with live capacity checks.",
      "Side-by-side route maps, a search-convergence chart and a shift timeline.",
      "A solver-free distance estimate before anything runs, as a plausibility check.",
      "JSON and CSV downloads of every plan.",
    ],
    limitations: [
      "Fictional operator and synthetic data; distances are illustrative, not road geometry.",
      "No time windows, live traffic, split deliveries or multiple depots in this release.",
      "This is a modelled comparison, not a measured saving in real delivery operations.",
    ],
    learned: [
      "Keep the solver out of the interface. Separating API, core and UI made the results testable.",
      "A good baseline matters as much as the optimiser. Without it, '20.6%' would mean nothing.",
      "Dispatchers care about more than distance, so I added crossings and territory overlap as read-outs.",
    ],
    tech: ["Python", "OR-Tools", "FastAPI", "Streamlit", "Plotly", "DuckDB", "pytest"],
    image: {
      src: "/projects/lastmilelab/routing.webp",
      alt: "Two route maps of the same 24 synthetic Vienna customers: the nearest-neighbour baseline at 122.4 km and the OR-Tools plan at 97.2 km, 20.6% shorter.",
      width: 1440,
      height: 1400,
    },
    extraImage: {
      src: "/projects/lastmilelab/insights.webp",
      alt: "Search convergence chart, shift timeline and dispatcher measures comparing the two plans.",
      width: 1192,
      height: 1560,
      caption: "Plan page beyond distance: search convergence, shift timeline and dispatcher measures.",
    },
    demoUrl: "https://lastmilelab.streamlit.app/",
    repoUrl: `${GH}/LastMileLab2`,
    methodologyUrl: `${GH}/LastMileLab2/blob/main/docs/methodology.md`,
    cv: "Routing app for a fictional Vienna delivery operator that assigns orders to vans and sequences the stops. In a synthetic 24-customer scenario the OR-Tools plan was 20.6% shorter than a nearest-neighbour baseline. Built with a FastAPI service behind a Streamlit interface.",
  },
  {
    slug: "demandplanninglab",
    title: "DemandPlanningLab",
    shortTitle: "DemandPlanningLab",
    headline: "Turning demand forecasts into reorder decisions.",
    category: ["Time series", "Data analytics", "Decision systems"],
    kind: "Independent project, fictitious retailer, synthetic data",
    status: "live",
    year: 2026,
    featured: true,
    order: 3,
    summary:
      "Which of 48 products should a planner reorder this week, and how much? I built the logic in Excel first, then in Python, and checked that both give the same answer for every product. Then I replayed 16 weeks against a simpler rule, including what the better service costs in stock.",
    myPart:
      "My part · Excel prototype, Python engine, tests and app",
    caveat: "Fictitious e-tailer and synthetic data. Backtest results are not real business outcomes.",
    problem:
      "A planner has to decide every week which of 48 products to reorder and how much, knowing that forecasts miss and suppliers take one to six weeks to deliver. Order too little and shelves go empty; order too much and money sits in the warehouse.",
    role:
      "Independent project. I prototyped and hand-checked the planning logic in Excel, then built the Python engine, the tests that compare it with the workbook, and the Streamlit app.",
    approach: [
      "Four explainable forecasting methods scored walk-forward, so no future data leaks into past decisions.",
      "Forecast error turned into safety stock, a reorder point and an order size (EOQ rounded to the case pack).",
      "A 12-week inventory projection that flags each product as stockout risk, reorder, excess or healthy, in plain English.",
      "A 16-week replay against a simple 'four weeks of stock' rule, with no look-ahead.",
    ],
    metrics: [
      { value: "95.8%", label: "fill rate vs 92.8%", context: "proposed policy vs four-weeks-of-stock rule, 16-week synthetic backtest" },
      { value: "71 vs 145", label: "stockout SKU-weeks", context: "out of 768 SKU-weeks in the same replay" },
      { value: "+76%", label: "average inventory value", context: "€110,963 vs €63,091: better service costs stock, a trade-off, not a free win" },
    ],
    evidenceNote:
      "Backtest from the project README. Python results match the Excel workbook for all 48 SKUs at a tolerance of 1e-9 (69 tests).",
    demoNotes: [
      "Dashboard with stockout risks, orders to place and the backtest at a glance.",
      "SKU Explorer that tells each product’s story from demand history to this week’s decision.",
      "A service-level slider that recalculates safety stock, orders and the backtest live.",
      "Per-SKU Excel export with live formulas.",
    ],
    limitations: [
      "One synthetic scenario. Evidence of trade-offs, not proof that the policy is better in general.",
      "Flat forecasts with no trend or seasonality; fixed supplier lead times.",
      "Safety stock covers the lead time but not the review period, which I’d change first.",
    ],
    learned: [
      "Building it in Excel first gave me a reference to test every number against.",
      "A headline metric is only half the story. The inventory cost had to sit right next to the fill rate.",
      "A rule that ignores lead time looks fine on average and collapses for slow suppliers.",
    ],
    tech: ["Python", "pandas", "Streamlit", "Plotly", "Excel", "pytest"],
    image: {
      src: "/projects/demandplanninglab/dashboard.webp",
      alt: "Planner dashboard showing stockout risks, orders to place, inventory value, forecast accuracy and the backtest result for 48 synthetic SKUs.",
      width: 1440,
      height: 900,
    },
    extraImage: {
      src: "/projects/demandplanninglab/backtest.webp",
      alt: "Policy backtest page comparing fill rate, stockouts, orders and inventory value of the proposed policy and the four-weeks-of-stock rule.",
      width: 1440,
      height: 900,
      caption: "Policy backtest: better service with fewer orders, but more inventory.",
    },
    demoUrl: "https://demandplanninglab.streamlit.app/",
    repoUrl: `${GH}/DemandPlanningLab`,
    methodologyUrl: `${GH}/DemandPlanningLab/blob/main/docs/METHODOLOGY.md`,
    cv: "Python planning engine that turns weekly forecasts into reorder decisions for 48 synthetic products. Matches an independent Excel prototype for every product; in a 16-week backtest it raised fill rate from 92.8% to 95.8% against a simple rule, while holding 76% more inventory.",
  },
];

export type SmallProject = {
  title: string;
  line: string;
  caveat: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
};

export const moreProjects: SmallProject[] = [
  {
    title: "BloodTypeLab",
    line: "Agent-based simulation of ABO and RhD inheritance. Starts from published Austrian blood-group shares and asks what can move them: chance, selection, or a shock like immigration.",
    caveat: "Synthetic population, illustrative assumptions. Not a forecast or medical advice.",
    tags: ["Simulation", "NumPy", "Streamlit"],
    repoUrl: `${GH}/BloodtypeLab-edu`,
    demoUrl: "https://bloodtypelab-edu.streamlit.app/",
  },
  {
    title: "CircularLoop Lab",
    line: "Decision support for industrial components: checks a lifecycle record, predicts remaining useful life, then ranks repair, reuse, refurbishment, remanufacturing and recycling with transparent rules.",
    caveat: "Independent synthetic demonstrator. Not validated for real or safety-relevant decisions.",
    tags: ["Machine learning", "MCDA", "Streamlit"],
    repoUrl: `${GH}/circularloopLab`,
  },
  {
    title: "Signal Tutor",
    line: "Interactive lessons on sensor electronics, signal conditioning and circuits. Every lesson runs explore, name, derive, break it, check, explain it, on one shared simulation.",
    caveat: "Independent educational project, not affiliated with any university.",
    tags: ["Education", "Circuits", "Streamlit"],
    repoUrl: `${GH}/SignalTutor`,
  },
];

export const featuredProjects = () =>
  projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug);
