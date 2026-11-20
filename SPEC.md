# Danish Portfolio + CV: Product Requirements and Implementation Specification

**Version:** 1.0  
**Prepared:** 20 November 2026  
**Deliverable:** A production-ready personal portfolio website and a coordinated, downloadable one-page CV  
**Intended users of this document:** Danish, Cursor, Claude Code, other development agents, and future collaborators  
**Source of inspiration:** https://selinameusel.com/ and the uploaded *Selina Meusel CV.pdf*  
**Primary factual source:** Uploaded *Syed Danish Ali_CV(1).pdf*, supplemented by the public project READMEs in the owner's GitHub account  
**Status:** Specification, not an already implemented website

> **Non-negotiable:** Draw inspiration from the reference's information architecture, editorial simplicity, project storytelling, and CV layout principles. Do not clone the website, use Selina's photographs, copy her original text, reuse her graphics, use her branding, or impersonate her. Danish's own website should have an original identity. **A personal photograph is neither required nor the default.**

---

## 1. What we are building

Build two related deliverables under a single visual and content system:

1. **An elegant, interactive, responsive portfolio website** that tells Danish's story through actual technical work, clear explanations, and evidence, not exaggerated buzzwords.
2. **A minimalist, one-page, ATS-friendly CV** that borrows the reference CV's strengths, especially typographic hierarchy, ample whitespace, concise job descriptions, a restrained accent, and clear left-aligned section labels. It will be visually coordinated with the website and downloadable as a PDF.

The website and CV should complement one another rather than duplicate everything. The CV is a fast professional overview. The website provides proof, demonstrations, architecture, trade-offs, screenshots, project stories, and links to code.

**Primary goals:**

- Introduce Danish as an electrical engineer and current MSc Information and Communication Engineering student at Technische Universität Wien.
- Present a credible technical identity spanning engineering, Python/data analysis, product development, and technical operations.
- Make applied, independently built projects the central evidence of technical capability.
- Enable recruiters, professors, research groups, and startup teams to understand the work quickly.
- Support applications across engineering, technical operations, data/analytics, product analyst, and technical product roles without making supply chain/logistics the sole identity.
- Let a visitor access the CV, LinkedIn, GitHub, and live apps in one or two clicks.

**Not goals:**

- A direct copy of the reference's code or design.
- An AI-generated image resembling Selina or anyone else.
- A blog, newsletter, payment system, login, database, or custom admin dashboard in version 1.
- Pretending synthetic tests are real-world field results.
- Claiming affiliation, endorsement, clinical validation, or commercial deployment where none is established.
- Publishing private repositories, personal secrets, or proprietary data.

---

## 2. What to borrow and what to change

### 2.1 Reference website observations

The reference portfolio uses a large, identity-first opening and an editorial, scrolling structure. Its visible navigation includes **Projects, Motivation, Experience, Highlights, Interests, Gallery, Newsletter, Socials, and Contact**, plus a direct **Download CV** action. Project entries combine short category/status labels, clear descriptions, and demonstrations. A separate motivation section explains why the creator builds things. There are language controls and a prominent contact section.

These are observed content and navigation elements from the public website, accessed on 20 November 2026. The exact visual tokens and source implementation were not audited, so the measurements and colors below are **our original proposed design**, not claims about Selina's CSS.

### 2.2 Reference CV observations

The two-page reference PDF uses:

- A name-led header with contact details aligned in a tidy block.
- Small uppercase, muted green section labels in a narrow left column.
- A wider right column containing experience, education, and skills.
- Simple dividers, generous spacing, restrained emphasis, and concise descriptions.
- A modern serif-like display treatment for the name and a clean sans-serif body.
- A portrait in the original document. **Do not reproduce this element for Danish.**

### 2.3 Adaptation decisions

| Reference idea | Danish's implementation |
|---|---|
| Personal portrait in hero/CV | No portrait by default; use large typography, monogram, original geometric motif, or project visualization |
| Large animated personal identity | Original wordmark `DANISH / ALI` or `DA`, subtle and accessible |
| Project-led storytelling | Engineering case studies and live Python applications, each with problem, approach, evidence, limitations |
| Motivation text | A concise, grounded account of bridging engineering, data, and software |
| Experience timeline | Product and manufacturing experience, plus current MSc |
| Personal gallery/social feed | Optional later; do not manufacture personal photos or lifestyle content |
| Newsletter | Omit in version 1 unless there is a genuine newsletter to subscribe to |
| Multilingual interface | English first; future German only with human-reviewed translations |
| Two-page reference CV | Keep Danish's **one-page** application CV, since that is the established format |

**Design character:** Editorial, technically literate, quiet confidence, approachable, precise, and fast. Avoid stock-template cards, neon gradients, gratuitous animations, chat widgets, inflated claims, and decorative skill progress bars.

---

## 3. Brand, audience, and positioning

### 3.1 Professional identity

**Name:** Syed Danish Ali  
**Preferred prominent display name:** Danish Ali (full legal name should remain on the CV)  
**Base:** Vienna, Austria  
**Current studies:** MSc Information and Communication Engineering, Technische Universität Wien, October 2026 to present  
**Background:** BSc Electrical Engineering, University of Engineering and Technology (UET) Lahore  
**Professional focus:** Electrical Engineering | Data Analytics | Technical Operations; product development demonstrated through prior roles and projects.

Do not portray Danish as a formally employed software engineer, a clinical researcher, or a founder of an established company without source evidence.

### 3.2 Intended audiences

| Audience | What they should learn within 30 seconds |
|---|---|
| Engineering / technical hiring manager | He has an electrical engineering foundation and can approach operational and measurement problems analytically |
| Data / analytics hiring manager | He uses Python, SQL, validation, backtesting, baseline comparisons, and transparent metrics |
| Product hiring manager | He has worked on product requirements, marketplace features, cross-team implementation, and end-to-end apps |
| TU Wien professor or researcher | He is studying ICE, builds educational/research-oriented prototypes, and documents technical assumptions and limitations |
| Startup team | He can move from a concrete problem to a demonstrable prototype and explain design decisions |

### 3.3 Tone and claims

Use first person on the website. Prefer ordinary English, concrete verbs, and measured language. Every metric must identify its benchmark and whether the data are synthetic. Do not claim that experiments established commercial impact when they only demonstrated modeled or benchmark improvements.

**Example homepage headline:**

> I turn engineering and operational problems into tested, useful software.

**Example supporting text:**

> I'm Danish, an electrical engineering graduate currently studying Information and Communication Engineering at TU Wien. I've worked across manufacturing operations and digital products, and I build Python tools that make complex decisions easier to understand and test.

**Example short status:**

> Based in Vienna | MSc at TU Wien | Open to relevant engineering, product, and analytical opportunities

This availability line is editable. Do not invent an employment contract, exact work-hour eligibility, or availability date. If immigration/work-authorization details are published, Danish must approve the wording for the particular application.

**Three proof themes:**

1. **Build:** Deployed applications with documented methods and readable interfaces.
2. **Verify:** Baselines, repeatable test cases, comparisons, reproducible experiments.
3. **Explain:** Design choices, limitations, and technical reasoning in plain language.

---

## 4. Visual design system

These values are recommendations for a new brand, not a pixel copy of the reference.

### 4.1 Palette

| Token | Proposed value | Purpose |
|---|---|---|
| `--bg` | `#F7F7F3` | Warm off-white page |
| `--surface` | `#FFFFFF` | Panels and project-image surfaces |
| `--ink` | `#202720` | Primary text |
| `--muted` | `#666E67` | Supporting text |
| `--accent` | `#426653` | Restrained deep green |
| `--accent-soft` | `#E5ECE6` | Minimal highlight |
| `--line` | `#D9DED7` | Dividers and borders |
| `--focus` | `#245A9C` | Clearly visible keyboard focus |

Verify WCAG contrast on all final text and button combinations. No accent-colored body copy on low-contrast backgrounds.

### 4.2 Typography

- **Display:** a licensed/open-source editorial serif, for example `DM Serif Display` or `Fraunces`.
- **Body and UI:** `Inter`, `IBM Plex Sans`, or `Source Sans 3`.
- **Technical labels:** optional `IBM Plex Mono`, sparingly.
- Use self-hosted or correctly licensed fonts; system fallbacks must render cleanly.
- Do not use the reference creator's exact custom identity marks or typographic logo.

**Suggested desktop scale:** hero name 64-96 px, H1 52-72 px, H2 34-44 px, H3 22-28 px, body 16-18 px, captions 12-14 px. Scale with CSS `clamp()` and check real mobile viewports.

### 4.3 Grid, spacing, and components

- Website content max width: approximately 1160-1240 px.
- Comfortable reading width: approximately 620-740 px for prose.
- Main columns: 12-column grid on wide screens, 1 column on mobile.
- Navigation: persistent or sticky after scrolling, with accessible mobile menu.
- Section labels: uppercase, letter-spaced, small, with a section number optional.
- Dividers: hairline and understated.
- Project components: minimal border, strong title, screenshot or purposeful technical visualization, small status/technology labels, short explanatory text.
- No autoplay carousels or large scroll-jacking effects.
- Hover treatments should not be the only way information is revealed.

### 4.4 Photography and visual assets

**Do not use any photograph of Selina. Do not use scraped headshots, personal images, visual assets from her website, or AI-generated lookalikes.**

Preferred visuals, in order:

1. Screenshots captured from Danish's own live apps or public repository documentation.
2. Original architecture diagrams, routing illustrations, waveform plots, or analysis visualizations derived from the projects.
3. A custom typographic monogram or tasteful, original abstract technical diagram.
4. A genuine portrait of Danish only if he explicitly supplies one and requests it to be added later.

For the CV, **no photograph**. Use the name and relevant links in the header. Never add an empty portrait placeholder.

### 4.5 Motion and interaction

- Restrict motion to subtle opacity/position transitions (150-300 ms) and a restrained project-card hover.
- Respect `prefers-reduced-motion: reduce`.
- No decorative mouse follower, continuous marquee required for functionality, or heavy animation library in the MVP.
- Animation must not delay navigation or block reading.

---

## 5. Website structure and navigation

**Recommended architecture:** Single-page editorial portfolio with anchor navigation and dedicated project detail pages. This preserves the exploratory feel of the reference without making every project a very long homepage section.

### 5.1 Navigation

`DA` | Projects | About | Experience | Skills | Contact | **Download CV**

- Top navigation anchors: `/#projects`, `/#about`, `/#experience`, `/#skills`, `/#contact`.
- Dedicated detail routes: `/projects/lastmilelab`, `/projects/demandplanninglab`, `/projects/biolab-ecg`, etc.
- Mobile menu must close on selection, Escape, and outside click where appropriate.
- A skip-to-content link must work with keyboard navigation.
- CV opens `/cv/Syed_Danish_Ali_CV.pdf` (actual path must exist).

### 5.2 Page order

| Order | Section | Goal | Priority |
|---|---|---|---|
| 01 | Hero | Establish who Danish is and what he builds | Must have |
| 02 | Featured Projects | Demonstrate technical competence immediately | Must have |
| 03 | About / Motivation | Explain the engineering-to-product/software path | Must have |
| 04 | Experience | Provide career and practical-work context | Must have |
| 05 | Education | Show current TU Wien course of study and engineering foundation | Must have |
| 06 | Skills and tools | Make capabilities scannable without empty claims | Must have |
| 07 | Selected additional work | Show optional breadth without diluting featured projects | Should have |
| 08 | Contact | Make outreach effortless | Must have |
| Optional | Writing, Gallery, Now page | Only after real material exists | Later |

### 5.3 Hero wireframe

```text
+----------------------------------------------------------------------------+
| DA             Projects   About   Experience   Skills   Contact   [CV PDF] |
|----------------------------------------------------------------------------|
|                                                                            |
|  ELECTRICAL ENGINEERING / DATA / TECHNICAL OPERATIONS                       |
|                                                                            |
|  Hi, I'm Danish.                                                           |
|  I build tools that turn complicated problems                               |
|  into decisions you can test.                                               |
|                                                                            |
|  MSc Information and Communication Engineering at TU Wien.                  |
|  Background in product analytics and manufacturing operations.              |
|                                                                            |
|  [Explore projects]  [Download CV]  [GitHub]                                |
|                                                                            |
|                                  [Original abstract diagram or typographic  |
|                                   motif: NO borrowed photograph]           |
|                                                                            |
|  Vienna, Austria                               Scroll to selected work      |
|----------------------------------------------------------------------------|
```

Above the fold must be intelligible without animation, image loading, or scrolling.

---

## 6. Content source of truth

Create one strongly typed content module, for example `src/content/site.ts` and `src/content/projects.ts`, so the portfolio and CV reference common factual records, links, dates, technologies, and results. The CV should still have its own curated shortened copy. Do not force every website paragraph into the CV.

### 6.1 Canonical public links

```yaml
person:
  full_name: "Syed Danish Ali"
  display_name: "Danish Ali"
  location: "Vienna, Austria"
  email: "danishraza16@gmail.com"
  phone_cv_only: "+43 676 4983601"
  linkedin: "https://www.linkedin.com/in/syeddanishali16"
  github: "https://github.com/syeddanishali17"
  university: "Technische Universität Wien"
  degree: "MSc Information and Communication Engineering"

live_projects:
  lastmilelab: "https://lastmilelab.streamlit.app/"
  demandplanninglab: "https://demandplanninglab.streamlit.app/"
  biolab_ecg: "https://biolab-ecg.streamlit.app/"
  bloodtypelab: "https://bloodtypelab-edu.streamlit.app/"

repositories:
  lastmilelab: "https://github.com/syeddanishali17/LastMileLab2"
  demandplanninglab: "https://github.com/syeddanishali17/DemandPlanningLab"
  biolab_ecg: "https://github.com/syeddanishali17/BioLab-ECG"
  bloodtypelab: "https://github.com/syeddanishali17/BloodtypeLab-edu"
  circularlooplab: "https://github.com/syeddanishali17/circularloopLab"
  signal_tutor: "https://github.com/syeddanishali17/SignalTutor"
```

The live links above were taken from public project documentation, **not validated through a live browser session**, so check each link before launch. The repo URLs were cross-checked against the connected account. Do not invent a public live demo for projects whose README does not confirm one. The older BioLab URL sometimes circulated in notes differs from the current README link; use the README's URL subject to final browser check.

### 6.2 Global copy guidelines

- Max 2-3 sentences for project cards.
- Max 250-450 words for a project case study in the MVP, excluding collapsible technical detail.
- Use sentences understandable to someone outside the technical field.
- Provide a technical details panel for specialists.
- Include actual technologies only when documented.
- Distinguish **independent project**, **course-linked learning**, **professional role**, **research demonstrator**, and **commercial production deployment** accurately.
- Mark synthetic, illustrative, nonclinical, and unvalidated elements visibly rather than hiding them in a footer.

---

## 7. Featured project content, order, and presentation

**Recommended default featured order:** BioLab ECG, LastMileLab2, DemandPlanningLab. This prioritizes a current engineering/biomedical signal-processing project before logistics-oriented work and still demonstrates the full engineering, data, and product skill set. The order must be editable in content data.

### Project 1: BioLab ECG / ECG Noise Stress-Test Bench

- **Headline:** Stress-testing heartbeat detection algorithms under realistic signal noise.
- **Category:** Biomedical signals | Signal processing | Verification.
- **Type:** Independent educational and technical benchmark.
- **Problem:** Heartbeat-detection algorithms must identify beats when signals are distorted by electrode motion, muscle activity, or baseline drift.
- **Approach:** Use annotated ECG data and recorded noise, introduce controlled noise levels, compare five open-source QRS detectors, and examine where methods fail. Include learning modules that explain ECG, PPG, heart sounds, breathing, and motion.
- **Evidence:** The public README describes 2,820 detector runs and 61 hours of noisy test ECG, with sensitivity, positive predictive value, F1, and failure-mode analysis. Treat these as **repository-reported benchmark results** pending reproduction in the project environment.
- **Technologies:** Python, Streamlit, signal analysis tools and methods documented in the repository. Read `requirements`/project metadata before presenting an exhaustive package list.
- **Visuals:** Noise-overlaid ECG trace, comparison curves, filter response, and a screenshot of the learning interface.
- **CTA:** `Explore case study` | `Open demo` | `View code`.
- **Limitation label:** Research/education tool. Not a medical device. Not for diagnosis or clinical monitoring.
- **Public links:** `https://biolab-ecg.streamlit.app` and `https://github.com/syeddanishali17/BioLab-ECG`.
- **Image source:** Capture or adapt `BioLab-ECG` project-owned screenshots and charts; do not use patient photos.

**Suggested card text:**

> I built a Python test bench to see how heartbeat detectors behave when ECG recordings get noisy. It compares detection methods against annotated signals and makes the failure modes visible, alongside an interactive learning track for biosignals.

### Project 2: LastMileLab2 / Routing and Decision-Support Application

- **Headline:** Comparing practical vehicle routes with an optimization baseline.
- **Category:** Optimization | Decision support | Python web app.
- **Type:** Independent project using a fictional operator and synthetic delivery data.
- **Problem:** Assign delivery orders to capacity-constrained vans and sequence stops while serving all customers.
- **Approach:** Compare a capacity-aware nearest-neighbour heuristic against Google OR-Tools, calculate route distance and constraints, and expose results in an interactive Streamlit interface backed by FastAPI.
- **Evidence:** In the documented **synthetic Vienna Standard 24 scenario**, the OR-Tools route was **20.6% shorter** than the nearest-neighbour baseline (122.394 km versus 97.193 km under the published settings). This is **not** a claim of a measured reduction in real commercial delivery routes.
- **Technologies:** Python, OR-Tools, FastAPI, Streamlit, GitHub.
- **Visuals:** Two side-by-side route illustrations, scenario editor, results summary, architecture diagram.
- **CTA:** `Explore case study` | `Run demo` | `View code`.
- **Limitation label:** Fictional operator, synthetic demand and locations, illustrative distances, no live traffic.
- **Public links:** `https://lastmilelab.streamlit.app/` and `https://github.com/syeddanishali17/LastMileLab2`.
- **Image source:** Repository's own `docs/screenshots/plan_vienna_standard_24.png` or fresh screenshots.

**Suggested card text:**

> I built a vehicle-routing application that compares a simple dispatch rule with an OR-Tools optimization model. In a synthetic 24-customer scenario, the optimized plan reduced total route distance by 20.6% against the stated baseline.

### Project 3: DemandPlanningLab / Forecasting and Inventory Decision Engine

- **Headline:** Turning demand forecasts into practical replenishment decisions.
- **Category:** Time series | Data analytics | Decision systems.
- **Type:** Independent application with synthetic retail data.
- **Problem:** Identify which items need replenishment, when, and in what quantity, while accounting for forecasting uncertainty and supplier lead times.
- **Approach:** Evaluate explainable forecasting methods, size safety stock, calculate reorder points and EOQ, project inventory, then backtest against a simpler inventory policy. Independently validate Python calculations with Excel.
- **Evidence:** The documented synthetic 48-SKU, 104-week dataset and 16-week policy replay report fill rate of **95.8% vs 92.8%** for the baseline and **71 vs 145** stockout SKU-weeks, but also a **higher average inventory value (€110,963 vs €63,091)**. Show this as a real trade-off, not an unqualified improvement.
- **Technologies:** Python, pandas, Streamlit, Plotly, Excel.
- **Visuals:** Replenishment dashboard, SKU explorer, backtest chart, short forecast-to-order diagram.
- **CTA:** `Explore case study` | `Open demo` | `View code`.
- **Limitation label:** Fictitious e-tailer and synthetic data. Backtest results are not real business outcomes.
- **Public links:** `https://demandplanninglab.streamlit.app/` and `https://github.com/syeddanishali17/DemandPlanningLab`.
- **Image source:** Repository's own `docs/screenshots/dashboard.png`, `docs/screenshots/sku_story.png`, or fresh screenshots.

**Suggested card text:**

> I built a planning engine that turns weekly forecasts into replenishment recommendations. I checked the Python calculations against Excel and tested the policy against a simpler baseline, including the inventory cost of improved service.

### Additional projects: smaller gallery

Show no more than 3-4 secondary projects initially. Display as smaller, calmer cards, and include a link only if the destination exists.

| Project | One-line explanation | Link status | Important limitation |
|---|---|---|---|
| **BloodTypeLab** | Agent-based Python simulation of ABO/RhD inheritance and population change under different assumptions | Public repo and documented live app | Synthetic agents and assumptions; not a medical prediction |
| **CircularLoop Lab** | Decision-support demonstrator ranking repair, reuse, refurbishment, remanufacture and recycling from lifecycle data | Public repo verified; no live link confirmed | Independent, synthetic, not official or safety-validated |
| **Signal Tutor** | Interactive application to build intuition in circuits, sensors and signal conditioning | Public repo verified; no live link confirmed | Independent educational application |
| **Ustad German-learning PWA** | Optional later showcase; practical speaking coach for Vienna | Repo is public; review whether the personal app is suitable for public promotion | Personal learning product; avoid exposing private study data |

**Selection rule:** Featured work should be promoted based on documented technical quality and completed demonstrations, not number of projects. A smaller set of compelling case studies is preferable to a long grid of shallow cards.

### Standard project case-study template

Every `/projects/:slug` route must include:

1. **Header:** title, honest status, category, year, role, and a 1-sentence outcome.
2. **The problem:** who the imagined or real user is, the actual decision/problem, and why it matters.
3. **My role:** what Danish personally built or contributed; avoid suggesting a team outcome was solely his work.
4. **Technical approach:** architecture diagram, data flow, methods, key dependencies, and validation steps.
5. **Evidence and results:** numbers with context, units, comparison, dataset, and reproducibility information.
6. **What the demo shows:** screenshot or a short annotated walkthrough; link to live app.
7. **Limits and trade-offs:** where assumptions fail, what the tool does not prove, and what would be needed for deployment.
8. **What I learned / next version:** 2-3 concrete engineering lessons or next steps.
9. **Links:** source repository, live demo if real, and relevant methodology or verification report.
10. **Back to all projects** and an optional next-project link.

Avoid long inline code blocks in case-study pages. Prefer compact diagrams and expandable technical subsections.

---

## 8. About, experience, education, skills, contact: suggested copy

### 8.1 About / motivation draft

> My background started in electrical engineering and manufacturing operations, where I learned to work with equipment, process constraints, and the reasons systems fail. Later I worked with product and operational data, turning problems into requirements and decisions.
>
> I now study Information and Communication Engineering at Technische Universität Wien. Alongside my studies, I build Python applications to explore optimization, signal analysis, and decision support. I enjoy the whole process: understanding a problem, designing a workable approach, testing the result, and explaining the trade-offs clearly.

Edit for voice before public release. Do not add an unsupported inspirational origin story, unverifiable employers, or invented lab roles.

### 8.2 Experience source records

**Regional Product Specialist, Alibaba Group (Daraz), five markets**  
*July 2025 to August 2026*

- Analyzed seller-retention data and investigated weak early sales as a contributor to new-seller churn.
- Designed and tested a new-seller search-visibility change and an abandoned-cart notification concept.
- Gathered requirements across five markets and worked with engineering teams during implementation.

**Product Analyst, Airlift Technologies**  
*May 2024 to April 2025*

- Analyzed order, demand, and inventory data in SQL to investigate recurring operational problems.
- Translated analysis into structured, data-driven product requirements and supported implementation with product and operations teams.

**Management Trainee, Engineering Services, Mondelēz International (LU Biscuits)**  
*February 2023 to March 2024*

- Tracked utilization and downtime KPIs in a manufacturing environment.
- Supported preventive/breakdown maintenance coordination and root-cause analysis of line failures.

**Important employer-name review:** The current uploaded CV uses the employer label above. If the legally precise employer should instead be shown as `Continental Biscuits Limited (Mondelēz International)`, obtain Danish's approval and apply the same choice consistently across the website and CV. Do not silently substitute one for another.

### 8.3 Education

- **MSc Information and Communication Engineering**, Technische Universität Wien. October 2026 to present.
- **BSc Electrical Engineering**, University of Engineering and Technology (UET) Lahore. Degree completion year to confirm against an official record if placed on the public CV. Do not invent an enrollment or graduation date from missing CV text.

**Optional current-course detail:** Introduction to Biostatistics and Modern Sensor Technologies, as stated in the uploaded CV. Display only if still accurate when launched. Do not list coursework as completed unless it has been completed.

**Optional additional degrees/credentials:** Do not add, remove, or conceal other qualifications based solely on this specification. The uploaded one-page CV intentionally presents a narrow education list. Any expanded public academic timeline should be reviewed with Danish for accuracy, application context, and consistency.

### 8.4 Skills presentation

Use four grouped lists rather than percentages or proficiency bars:

- **Programming and analytics:** Python, pandas, SQL, Microsoft Excel.
- **Verification and analysis:** time-series analysis, benchmark comparison, KPI tracking, backtesting, numerical cross-checks.
- **Technical operations:** root-cause analysis, equipment troubleshooting, downtime analysis, maintenance coordination.
- **Building and collaboration:** Git, GitHub, FastAPI, Streamlit, OR-Tools, Jira, Confluence, Cursor, Claude.

**Languages:** English (C1, fluent), German (A1, studying). Keep claims conservative and up to date.

Do not list new frameworks merely because they are used to build this portfolio. React and TypeScript may be added to the skills section later if Danish can personally explain and maintain the code to a suitable standard.

### 8.5 Contact

**Heading:** Have a technical problem or project worth discussing?  
**Text:** I'm interested in engineering, product, data, and applied research work where clear analysis and useful software can make a difference.  
**Actions:** Email Danish | LinkedIn | GitHub | Download CV.

- `mailto:danishraza16@gmail.com` with no prefilled confidential content.
- LinkedIn and GitHub as defined in the canonical links.
- Phone number appears on the CV but is optional on the public website.
- No third-party contact-form service by default. This reduces maintenance and privacy complexity.

---

## 9. CV requirements

### 9.1 Objective

Produce a PDF that is professionally compatible with the website while being easier to scan and parse than a highly decorative resume. **One A4 page, no photograph, no icons for contact information, and no multi-column text flow that harms reading order.**

### 9.2 Visual layout

```text
+------------------------------------------------------------------+
| SYED DANISH ALI                                                  |
| Electrical Engineering | Data Analytics | Technical Operations  |
| Vienna | phone | email | LinkedIn | GitHub                       |
|__________________________________________________________________|
| PROFILE          | 3 concise lines                              |
|__________________|_______________________________________________|
| EDUCATION        | TU Wien MSc / UET BSc                          |
|__________________|_______________________________________________|
| EXPERIENCE       | Role and company                     Dates     |
|                  | 1-2 short, evidence-led bullets               |
|                  | [repeat for 3 roles]                          |
|__________________|_______________________________________________|
| TECHNICAL        | 2 selected projects with metrics, caveats     |
| PROJECTS         | and short link labels                        |
|__________________|_______________________________________________|
| SKILLS           | 3-4 readable grouped lines                   |
| LANGUAGES        | English and German                           |
+------------------------------------------------------------------+
```

**Recommended design settings:**

- A4 portrait (210 x 297 mm).
- Margins approximately 14-17 mm, adjusted after rendering.
- Header uses strong name typography and a compact contact block.
- Two-column section treatment: left label rail around 21-24%; right content around 76-79%. This is **a visual layout**, but the PDF's extracted text must remain in correct reading order.
- Labels in small uppercase deep green, with restrained letter spacing.
- Dividers in pale gray-green.
- Body around 9.5-10.5 pt; do not shrink below 9 pt to force content to fit.
- Use bold for position and company, dates aligned consistently.
- Links must be live/clickable, but visible URLs should remain readable.
- No table borders, charts, skill bars, logos, portraits, excessive symbols, or footnotes.

### 9.3 Baseline CV copy

**Header:**

Syed Danish Ali  
Electrical Engineering | Data Analytics | Technical Operations  
Vienna, Austria | +43 676 4983601 | danishraza16@gmail.com  
linkedin.com/in/syeddanishali16 | github.com/syeddanishali17

**Profile:**

Electrical Engineering graduate pursuing an MSc in Information and Communication Engineering at Technische Universität Wien. Experience in product analytics, manufacturing downtime tracking, and operational problem-solving. Builds and validates Python tools for signal analysis, optimization, and decision support.

**Education:**

- MSc Information and Communication Engineering | Technische Universität Wien | Oct 2026-present.
- BSc Electrical Engineering | University of Engineering and Technology Lahore | [date to verify before publishing].

**Professional experience:** Preserve the three roles, employers, and date ranges in section 8.2. Target 1-2 bullets per role; do not invent numerical professional outcomes or change job titles.

**Selected technical projects:**

1. **BioLab ECG:** Python test bench for heartbeat detector robustness under recorded ECG noise; includes detector comparisons, failure-mode inspection, and learning tools. Independent educational/research project, not a medical device.
2. **LastMileLab2:** Built a Python / OR-Tools / FastAPI / Streamlit routing demonstrator. In a synthetic 24-customer scenario, route distance was 20.6% lower than a specified nearest-neighbour baseline.
3. **DemandPlanningLab:** Built a Python forecasting and replenishment engine validated against Excel and backtested against a simple stock policy on synthetic data.

**CV selection rule:** Fit **two** of these projects by default. Choose BioLab ECG + LastMileLab2 for engineering/technical applications, or DemandPlanningLab + LastMileLab2 for data/operations; make an easily maintainable third version if required. The third project should always remain featured on the website. Do not use automatic keyword stuffing or dishonest role-specific rewrites.

**Skills:** Python, pandas, SQL, Excel | Backtesting, KPI analysis, numerical validation | Root-cause analysis, equipment troubleshooting | Git/GitHub, FastAPI, Streamlit, OR-Tools, Jira, Confluence, Cursor, Claude.

**Languages:** English C1 | German A1.

### 9.4 CV generation and ATS checks

- Prefer an HTML/CSS print source or a well-controlled document export that consistently generates A4 PDF.
- Preserve selectable text, embedded fonts, working hyperlinks, and logical reading order.
- Use `@page { size: A4; margin: ... }` plus a dedicated print stylesheet.
- CV content may share source data with the site, but layout must be separately controlled.
- Validate visually at 100% scale and via text extraction (`pdftotext -layout` or equivalent).
- Verify all important terms (name, title, education, employers, dates, projects, email) appear in extraction.
- Verify the PDF is exactly one page, contains no overlapping text, and has no huge empty area.
- Keep an editable source file under version control. Store only the final approved PDF under `public/cv/`.
- Ensure the downloadable PDF reflects the currently approved CV; no stale or broken URL.

**Important:** A styled visual column is not inherently ATS-friendly. If a left label rail causes reading-order problems, favor a single-column CV with left-aligned section headings over aesthetic fidelity.

---

## 10. Responsive and accessible interaction specifications

### Desktop

- Header remains minimal, with navigation and CV button visible.
- Featured projects display in alternating or asymmetrical editorial sections, not a repetitive 3-card commercial grid.
- Screenshots should be large enough to understand; click-to-enlarge is optional.
- Optional lightweight section progress line, only if it adds clarity.

### Tablet

- Reduce to 2-column layout where appropriate; no horizontal overflow.
- Keep long project titles and links readable.

### Mobile

- 320 px width minimum supported, with primary QA at 375 and 390 px.
- Single-column project sections, readable text, comfortable tap targets of at least roughly 44x44 CSS px where practical.
- Mobile nav must be fully keyboard and screen-reader operable.
- Hero CTAs should stack or wrap without crowding.
- Project diagrams must scroll/scale or have text alternatives.

### Accessibility

- Semantic `header`, `main`, `section`, `article`, `nav`, `footer`.
- One primary H1 per page; meaningful heading order.
- Alt text for charts and screenshots that describes information rather than repeating the title.
- `aria-expanded` on menus, sensible focus management, visible focus rings.
- Respect reduced motion and browser zoom to 200%.
- No important content accessible only by hover, animation, or color.
- All off-site links clearly identifiable; use `rel="noopener noreferrer"` on relevant new-tab links.

---

## 11. Recommended implementation stack

**First-choice stack:**

- **Vite + React + TypeScript** for a small, maintainable single-page application with route-based project views.
- **Tailwind CSS** for consistent styling, paired with explicit design tokens in CSS.
- **React Router** (or an equivalent minimal router) for project pages.
- **Lucide icons** only where they improve comprehension, not as decorative badges.
- **No backend or database** for portfolio version 1.
- **Deployment:** Cloudflare Pages or Netlify from a separate GitHub repository, with preview deploys and an optional custom domain.
- **Content:** TypeScript objects and Markdown/MDX case studies. For a small portfolio, avoid unnecessary CMS complexity.
- **Testing:** Vitest for data helpers and link functions; Playwright for page navigation and browser-level checks.

If using a React build, verify the hosting platform supports SPA route fallback for direct visits to `/projects/:slug` (for example, an explicit rewrite rule). An alternative static-site generator may be chosen if it better serves project-page SEO; do not add complexity just to use a fashionable framework.

### 11.1 Suggested repository structure

```text
danish-portfolio/
  README.md
  SPEC.md                         # this document
  package.json
  index.html
  public/
    favicon.svg                   # original DA monogram
    og-cover.png                  # original Open Graph visual
    cv/
      Syed_Danish_Ali_CV.pdf      # approved, one-page download
    projects/
      biolab-ecg/
        hero.webp
        benchmark.webp
      lastmilelab/
        routing.webp
      demandplanninglab/
        dashboard.webp
      bloodtypelab/
        overview.webp
  src/
    app/
      App.tsx
      routes.tsx
    components/
      Header.tsx
      Footer.tsx
      Hero.tsx
      SectionHeading.tsx
      ProjectFeature.tsx
      ProjectCard.tsx
      ExperienceTimeline.tsx
      DownloadCV.tsx
      ContactLinks.tsx
    content/
      profile.ts
      projects.ts
      experience.ts
    pages/
      HomePage.tsx
      ProjectPage.tsx
      NotFoundPage.tsx
    styles/
      tokens.css
      global.css
      print.css
    lib/
      projects.ts
  cv/
    CVPage.tsx                    # optional editable print source
    cv-data.ts
  tests/
    links.test.ts
    content.test.ts
    navigation.spec.ts
    mobile.spec.ts
    cv.spec.ts
  scripts/
    export-cv.mjs
    check-links.mjs
  docs/
    content-source-audit.md
    launch-checklist.md
  .gitignore
```

Avoid importing full screenshot PNGs into the JS bundle. Store optimized static assets in `public/`, with explicit dimensions and responsive alternatives.

### 11.2 Content schema example

```ts
type Project = {
  slug: string;
  title: string;
  category: string[];
  status: "published" | "prototype" | "in-progress";
  year: number;
  featured: boolean;
  order: number;
  summary: string;
  problem: string;
  approach: string;
  evidence: string[];
  limitations: string[];
  tech: string[];
  image: { src: string; alt: string };
  demoUrl?: string;
  repoUrl?: string;
  methodologyUrl?: string;
};
```

Do not compute or invent `status` from whether a repo exists. Confirm what is deployed and functional. Use one record per project, independently tested and editable.

---

## 12. Search visibility, performance, privacy, and reliability

### SEO and sharing

- Page title: `Danish Ali | Engineering, Python & Technical Projects`.
- Description: `Portfolio of Syed Danish Ali, an electrical engineering graduate and TU Wien MSc student building tested Python applications in signal analysis, optimization and decision support.`
- Unique metadata for each project page.
- Canonical URLs only after a domain is chosen.
- Sitemap and robots file.
- Open Graph and Twitter card images created from original text/diagram artwork, not other people's portraits.
- Clean readable slugs, descriptive link labels, and correct 404 handling.

### Performance

- Target Lighthouse performance >= 90 and accessibility >= 95 on representative mobile and desktop tests, without hiding real content for the audit.
- Keep page weight low: lazy-load below-fold screenshots, preload only critical fonts, minimize JavaScript.
- Convert original project screenshot assets to modern formats while preserving readability of charts and text.
- Use image width/height to limit layout shift.
- Never autoplay large video files; make demonstrations optional and user-initiated.
- External Streamlit apps may sleep or take time to wake; explain this with a small neutral note rather than loading them invisibly.

### Privacy and legal

- No analytics or tracking cookies by default.
- No hidden forms that collect personal information.
- Add appropriate privacy/legal information once hosting, analytics choices, and legal applicability are known. As the site is operated from Austria, check which Austrian/EU notice and data-protection requirements apply instead of copying the reference's legal pages.
- Do not make third-party embedded services load automatically if a plain external link works.
- Do not publish confidential employment data, proprietary screenshots, private API keys, personal cloud credentials, or nonpublic GitHub repositories.

### Reliability

- External links must be checked in a real browser before deployment.
- Graceful handling of an unavailable live app, without making the portfolio itself fail.
- Test both normal navigation and direct loading/refresh of every project URL.
- Use actual screenshots from the version of each app being described; mark old screenshots if an app changes significantly.

---

## 13. End-to-end implementation plan

Work incrementally. Do not replace an existing working project, overwrite the current CV, or commit unreviewed public content.

### Phase 0: Preparation and verification

1. Start a **new** repository, separate from every existing application repository.
2. Preserve uploaded PDFs locally as reference input. Do not commit them automatically.
3. Validate repo links and live URLs using a browser.
4. Confirm job titles, dates, university naming, employer naming, project metrics and limitations against source documents.
5. Capture original screenshots from approved public apps or public repository assets.
6. Make a `docs/content-source-audit.md` file with each claim, source, last check, and approval status.

**Gate:** No invented claims or unapproved images; all inputs identified.

### Phase 1: Design foundation

1. Build global tokens, fonts, spacing, typography, and responsive grid.
2. Implement navbar, hero, footer, focus styles, and section headings.
3. Build a reusable project-feature component with original screenshots.
4. Test phone and desktop views before adding all content.

**Gate:** Clean original identity, no reference assets, no mobile overflow, no broken navigation.

### Phase 2: Content and project pages

1. Add three featured project entries with source-based content.
2. Implement detail pages using the standard case-study template.
3. Add smaller projects, experience, education, skills, about and contact.
4. Add accurate methodology labels and limitations to project metrics.
5. Make direct links to actual public demo and GitHub URLs.

**Gate:** A recruiter can identify three credible examples of technical work and access the source/demo easily.

### Phase 3: CV

1. Build and approve the CV content from the uploaded one-page baseline.
2. Create the editorial A4 print version using the restrained label-column approach.
3. Generate the final PDF without a photograph.
4. Extract PDF text and inspect the rendered page.
5. Verify download path, link annotations, page count, and readable contact information.

**Gate:** One-page PDF, no clipping, correct dates, correct text extraction, working download.

### Phase 4: Quality assurance and launch

1. Run build, type checking, linting, unit tests, and browser tests.
2. Review keyboard-only navigation, reduced-motion behavior, and 200% zoom.
3. Test widths 320, 375, 390, 768, 1024, and 1440 px.
4. Test contact mailto, LinkedIn, GitHub, all project links, direct routes and CV download.
5. Check meta tags, social previews, image alt text, 404 page and SEO metadata.
6. Deploy a preview; manually approve screenshots, content and PDF before production.
7. Deploy production only after preview acceptance, keeping the previous release available for rollback.

**Gate:** All acceptance criteria in section 14 pass.

---

## 14. Acceptance criteria and test checklist

The website is accepted only if all critical conditions below are met.

### Content and identity

- [ ] Name, profile, roles, dates and employer labels match the approved sources.
- [ ] No photographs of Selina, original logos/assets from her site, or copied personal text.
- [ ] No portrait of Danish unless he explicitly adds one in a later request.
- [ ] Featured projects include BioLab ECG, LastMileLab2 and DemandPlanningLab.
- [ ] Every numerical result includes scenario, dataset or comparison context.
- [ ] Synthetic results and medical/research limitations are conspicuous.
- [ ] No fabricated work experience, institutional affiliation, user counts or business impact.
- [ ] CV is one A4 page with no photograph and an accurate contact block.

### Functionality

- [ ] Site builds and deploys from a clean checkout using documented commands.
- [ ] All visible nav anchors and project detail routes work.
- [ ] Direct refresh of `/projects/...` works in production.
- [ ] All source and demo links resolve or are deliberately omitted if unavailable.
- [ ] CV download delivers the approved PDF.
- [ ] Email, LinkedIn and GitHub CTAs work.
- [ ] No runtime errors in browser console during normal use.

### Design and accessibility

- [ ] Distinct original visual identity inspired by editorial principles, not a cloned site.
- [ ] Strong hierarchy and balanced whitespace on desktop and mobile.
- [ ] No horizontal scrolling at 320 px.
- [ ] Text remains legible at 200% zoom.
- [ ] Fully keyboard accessible nav, buttons and links.
- [ ] Correct headings, meaningful image alt text, visible focus states.
- [ ] Reduced-motion preference supported.

### PDF

- [ ] CV PDF is exactly one A4 page.
- [ ] No clipping, overlap, unreadably small font, or blank portrait placeholder.
- [ ] Text remains selectable and extracts in a sensible reading order.
- [ ] Contact hyperlinks work.
- [ ] Correct file is installed at the actual public download path.

### Engineering and maintenance

- [ ] No secrets or proprietary files committed.
- [ ] Content can be changed without editing page layout components.
- [ ] README documents development, build, preview and deployment steps.
- [ ] Tests and production build pass.
- [ ] Rollback to the previous deployment is documented.

---

## 15. Verification strategy and rollback

**Verification commands (adapt to actual package scripts):**

```bash
npm install
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

These commands are **acceptance targets**. Implement scripts in `package.json`; do not assume they exist before creating the project.

**Manual review:** Compare homepage and CV screenshots against this spec. Verify the app under real browser conditions. Check every external link and all PDF metadata. Review technical claims with the project README and, where feasible, reproduce the documented demo cases.

**Safe change policy:**

1. Make one feature or one content section at a time on a development branch.
2. Keep working project components intact; do not redesign or replace functioning unrelated code without cause.
3. Run tests and compare key page screenshots before merging.
4. Preserve source project repos and the previously approved CV file.
5. If a change breaks navigation, PDF output, accessibility, or source fidelity, revert the specific change and return to the last passing commit.
6. Deployment rollback: use the host's previous successful deployment or redeploy the last accepted commit. Do not attempt destructive fixes under pressure.

---

## 16. Builder instructions for Cursor / Claude Code

Copy this section as the initial instruction to your coding agent, together with the complete `SPEC.md` file.

> Build a new, original portfolio website and coordinated one-page CV for Syed Danish Ali, following `SPEC.md` as the canonical project brief. Use the observed structural principles of `selinameusel.com` and the uploaded reference CV only for general editorial inspiration. Do not clone code, wording, branding or photographs, and do not create a personal photo placeholder.
>
> First inspect the source files and confirm public GitHub project documentation, live links, and available screenshots. Produce a short implementation plan and a content verification checklist. Then create the site incrementally using React, TypeScript, Tailwind CSS, typed content objects and accessible responsive components. Keep the three featured project case studies fact-based, especially their synthetic-data and research limitations. Use new original design tokens and lightweight interactions.
>
> Preserve the supplied one-page CV's factual baseline and create a distinct, readable, ATS-friendly A4 PDF export without a photo. Do not invent dates, companies, academic achievements, production outcomes, or unsupported skills. If information remains unresolved, use an explicit `TODO: confirm` in source content or omit it from public output. Implement navigation, links, direct-route fallback, tests, and documentation. Do not deploy to production or publish private information until review.
>
> **Prerequisites:** Node and package manager installed; a new Git repository; approved source content; project-owned screenshots; platform account for preview deployment.
>
> **Verification:** typecheck, lint, unit tests, browser tests, mobile checks, link validation, a visual pass, one-page CV PDF check, and extracted PDF text verification.
>
> **Rollback:** work in a feature branch, use granular commits, keep prior accepted code and PDF, and revert failing changes rather than overwrite working components.
>
> **Acceptance:** every checkbox in section 14, with explicit report of any incomplete item. If the result is only partially complete, identify what works and what has not been verified. Do not claim success without running the checks.

---

## 17. Decisions and approvals required before public launch

These do not prevent building a working local/preview version. They **do** require explicit review before publication:

| Decision | Suggested default | Why it matters |
|---|---|---|
| Domain name | Use preview hosting URL initially | Avoid guessing domain ownership |
| Personal portrait | None | Deliberate text-first design choice |
| Header display name | Danish Ali, full name on CV | Friendlier site, formal application identity |
| CV format | One-page A4 | Consistent with existing application strategy |
| Primary project order | BioLab ECG, LastMileLab2, DemandPlanningLab | Balanced engineering/data/product story |
| Which 2 CV projects | Role-dependent curated selection | Avoid CV overcrowding |
| Employer naming | Use current uploaded CV until confirmed | Prevent inconsistent or inaccurate claims |
| BSc date | Verify before showing | Missing from uploaded one-page CV |
| Contact phone on website | Omit; keep on CV | Limit unnecessary exposure |
| German version | Not included in MVP | Avoid unreviewed translations |
| Legal/privacy pages | Decide based on actual host and features | Austrian/EU compliance depends on site details |
| Live project links | Browser-check before publication | Streamlit apps may sleep/change URLs |

---

## 18. Reference and evidence register

**Reference design only**

- Selina Meusel's live portfolio: https://selinameusel.com/ (observed 20 November 2026).
- Uploaded *Selina_Meusel_CV.pdf*, two pages. Used to study typographic hierarchy, section structure, and layout principles only. The original includes a portrait; ours will not.

**User-provided CV**

- Uploaded *Syed Danish Ali_CV(1).pdf*, one page. Used as the factual baseline for identity, employment, educational presentation, skills, and the two technical projects appearing on that CV.

**Public, owner-controlled project documentation**

- https://github.com/syeddanishali17/LastMileLab2 (README and documented synthetic route benchmark).
- https://github.com/syeddanishali17/DemandPlanningLab (README and documented synthetic inventory-policy backtest).
- https://github.com/syeddanishali17/BioLab-ECG (README and documented ECG detector benchmark, educational disclaimer).
- https://github.com/syeddanishali17/BloodtypeLab-edu (README and documented synthetic agent-based model).
- https://github.com/syeddanishali17/circularloopLab (README and synthetic independent demonstrator disclaimer).
- https://github.com/syeddanishali17/SignalTutor (README and independent educational project disclaimer).

**Evidence policy:** Claims from repository READMEs are project-documented claims, not independently reproduced measurements. Public app availability was not established by the text-retrieval tool; the build process must test live URLs in a regular browser. Any contradiction between source documents must be flagged for human resolution, not silently reconciled.

---

## 19. Definition of done

A successful release is **not** merely a beautiful landing page. It is a coherent professional portfolio that:

- Establishes a credible engineering identity within seconds.
- Shows real technical reasoning and verifiable projects rather than decorative buzzwords.
- Explains baselines, numerical evidence, limitations and ownership honestly.
- Looks polished, original and accessible on desktop and mobile.
- Provides a functioning CV PDF and accurate contact links.
- Is maintainable by Danish using normal GitHub/Cursor workflows.
- Can be updated safely as his studies, skills and projects develop.

**Suggested product principle:** **Build it. Test it. Explain it.**
