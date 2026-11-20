# Content source audit

Last checked: 20 November 2026. Sources: the one-page CV `Syed Danish Ali_CV.pdf` (baseline), each project's public README on GitHub, and a real-browser visit to each live app.

Status key: **OK** matches source · **Reworded** same facts, plainer language · **Needs Danish** decision or confirmation required · **Removed** not published

## Identity and contact

| Claim | Source | Status |
|---|---|---|
| Syed Danish Ali, Vienna, Austria | CV header | OK |
| danishraza16@gmail.com, +43 676 4983601 (CV only) | CV header | OK. Phone is not on the website. |
| linkedin.com/in/syeddanishali16, github.com/syeddanishali17 | CV header; both resolve | OK |
| "Open to engineering, data and technical product roles" | Spec §3.3 suggested line | Needs Danish. Approve wording; no availability date or work-permit claim is made. |

## Education

| Claim | Source | Status |
|---|---|---|
| MSc Information and Communication Engineering, Technische Universität Wien, Oct 2026 to present | CV | OK |
| Current courses: Introduction to Biostatistics, Modern Sensor Technologies | CV ("Ongoing coursework") | OK. Remove when no longer current. |
| BSc Electrical Engineering, UET Lahore | CV | OK. **No date shown**; the CV has none. Add the year in `profile.ts` once confirmed. |

## Experience

Titles, employers and dates are unchanged from the CV. The descriptions were rewritten as short prose in a plainer voice; no numbers or outcomes were added.

| Role | Status | Notes |
|---|---|---|
| Regional Product Specialist · Alibaba Group (Daraz), Jul 2025 to Aug 2026 | Reworded | Same facts: retention analysis, search-visibility change, abandoned-cart notification, requirements across five markets. |
| Product Analyst · Airlift Technologies, May 2024 to Apr 2025 | Reworded | "Supported the resulting rule change" became "supported the rollout". |
| Management Trainee, Engineering Services · Mondelēz International (LU Biscuits), Feb 2023 to Mar 2024 | Reworded / Needs Danish | Employer label kept exactly as on the CV. If it should be "Continental Biscuits Limited (Mondelēz International)", change it once in `experience.ts`. |

## Projects

All project numbers are **repository-reported**, from the README of each project. They were not reproduced for this site.

| Claim | Source | Status |
|---|---|---|
| BioLab ECG: 2,820 detector runs, 61 h of noisy ECG, five detectors | BioLab-ECG README, "Key results" | OK |
| BioLab ECG: +P 66–73% at 6 dB electrode motion, Se 88–97% | README, result 1 | OK |
| BioLab ECG: nst reimplementation within 0.06 dB | README, result 2 | OK |
| BioLab ECG: pre-filter changes F1 by < 0.5 points | README, result 3 | OK |
| BioLab ECG live app `https://biolab-ecg.streamlit.app` | README | **Removed.** Browser visit on 20 Nov 2026 landed on Streamlit's "not found" page. Site and CV link to GitHub only. |
| LastMile Lab: 20.6% shorter, 97.193 km vs 122.394 km, Vienna Standard 24 | LastMileLab2 README | OK. Labelled synthetic; "best found within 5 s", not optimal. |
| LastMile Lab: 1 vs 3 route crossings | README, analytical read-outs | OK |
| DemandPlanningLab: fill rate 95.8% vs 92.8%, stockout SKU-weeks 71 vs 145 | DemandPlanningLab README backtest table | OK |
| DemandPlanningLab: average inventory €110,963 vs €63,091 (+76%) | Same table and README text | OK. Shown next to the fill rate as a trade-off. |
| DemandPlanningLab: matches Excel for all 48 SKUs at 1e-9, 69 tests | README, Validation | OK |
| BloodTypeLab, CircularLoop Lab, Signal Tutor one-liners and caveats | Each README | OK |

## Images

| Image | Source | Status |
|---|---|---|
| `public/projects/lastmilelab/routing.webp`, `insights.webp` | LastMileLab2 `docs/screenshots/` | OK (Danish's own repo) |
| `public/projects/demandplanninglab/dashboard.webp`, `backtest.webp` | DemandPlanningLab `docs/screenshots/` | OK (Danish's own repo) |
| BioLab ECG figure | Drawn in code (`EcgNoiseFigure.tsx`), labelled "schematic, not real data" | OK. Replace with a real screenshot once the app is live again. |
| Hero line motif, favicon, `og-cover.png` | Original, made for this site | OK |
| Photos of anyone | None used | OK |

## Design reference

Palette direction (warm grey paper, near-black ink, forest-green accent), the Instrument Serif / Instrument Sans pairing, and the CV's label-column layout were inspired by Selina Meusel's public portfolio and CV, as requested. No code, text, images, logos or photographs from that site or CV were copied. All copy on this site is written for Danish from his own sources.

## Supply chain (website only, added 20 Nov 2026)

Danish asked for his supply-chain background on the website but not on the engineering CV. The CV generator filters these out (`webOnly`, `webExtra`), and a unit test checks that they stay off it.

| Claim | Source | Status |
|---|---|---|
| Executive MS Supply Chain and Retail Management, LUMS | Supply-chain CVs in `Danish CVs Stash`; thesis title page | OK. Shown without dates. |
| Thesis: CVRP and VRPTW MILP models, Excel and OpenSolver, 30 racks, about 40% lower modelled annual costs | Thesis PDF abstract and figure list (dated 1 May 2023) | OK. Worded as "across the modelled scenarios, the thesis reports". |
| Teaching Assistant, Logistics Management, LUMS | Several supply-chain CVs | OK. Shown without dates (they differ between CV versions). |
| Airlift: dark-store storage, retrieval and inventory processes; distribution models and delivery zones | Supply-chain CVs, transport cover letter | OK |
| Daraz: 3PL coordination, logistics rollouts, SOPs | Supply-chain CVs, transport cover letter | OK |
| Mondelēz: supported warehouse activities | Supply-chain CVs | OK |
| Supply-chain skills (forecasting, safety stock, EOQ, MILP, CVRP/VRPTW, OpenSolver, Power BI, BigQuery, 3PL) | Supply-chain CVs and project READMEs | OK |
| Role dates | Engineering CV | Danish confirmed the engineering CV has the right dates. Other versions are ignored. |

## Photo

| Item | Source | Status |
|---|---|---|
| `public/me/hero-wide.webp`, `hero-tall.webp`, `avatar.webp` (Vienna photo) and `about.webp` (Frankfurt photo) | Photos Danish supplied on 20 Nov 2026, prepared by `npm run portrait` | Retouched for lighting only: neutral white balance, face exposure lifted, orange sunset cast removed, light sharpening. No skin smoothing, no reshaping, no change of skin colour. Source kept in `photo-source/` (git-ignored). Not used on the CV. |
