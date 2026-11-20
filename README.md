# Danish Ali: portfolio and CV

Personal portfolio site and a matching one-page A4 CV for Syed Danish Ali. One content source feeds both.

- **Site:** Vite + React + TypeScript + React Router. Plain CSS with design tokens (`src/styles/tokens.css`). No backend, no analytics, no cookies.
- **CV:** generated from the same content files by `scripts/export-cv.mjs` (HTML → A4 PDF via Playwright's Chromium).
- **Type:** Instrument Serif (display) and Instrument Sans (body), self-hosted via `@fontsource` (SIL Open Font License).

The brief is in [`SPEC.md`](SPEC.md). What each public claim is based on is in [`docs/content-source-audit.md`](docs/content-source-audit.md).

## Edit content

All facts live in `src/content/`. Components never hard-code facts.

| File | What it holds |
|---|---|
| `src/content/profile.ts` | Name, links, status line, education, skills, languages |
| `src/content/experience.ts` | Roles, employers, dates, the short story for each role |
| `src/content/projects.ts` | Featured projects (order, metrics, caveats, case-study text) and the smaller "More work" cards |
| `cv/cv-data.ts` | CV-only profile text, subtitle and which two projects each CV variant uses |

After editing anything the CV uses, run `npm run cv` to rebuild the PDFs.

## Commands

Requires Node 23.6+ (the CV script imports the `.ts` content files directly).

```bash
npm install
```

```bash
npm run dev          # http://localhost:5173
```

```bash
npm run cv           # cv/out/*.pdf, and copies the default CV to public/cv/
```

```bash
npm run verify       # lint, typecheck, unit tests, build, browser tests
```

Photo: put the original at `photo-source/portrait-original.jpeg` (git-ignored) and run `npm run portrait`. It writes `public/me/hero-wide.webp` (landscape screens), `hero-tall.webp` (phones) and `avatar.webp` with a lighting retouch: neutral white balance, brighter face, sunset cast removed, light sharpening. No skin smoothing or reshaping.

Other scripts: `npm run build`, `npm run preview`, `npm run test`, `npm run test:e2e`, `npm run check:links`, `node scripts/make-og.mjs` (social preview image).

Browser tests use Playwright's Chromium. If it is missing: `npx playwright install chromium`.

## CV variants

| File | Projects | Use for |
|---|---|---|
| `Syed_Danish_Ali_CV.pdf` (default, linked from the site) | BioLab ECG + LastMileLab2 | Engineering and technical roles |
| `Syed_Danish_Ali_CV_Data_Operations.pdf` | DemandPlanningLab + LastMileLab2 | Data, analytics and operations roles |

Both are one A4 page with no photo, embedded fonts, selectable text and clickable links. Add a variant in `cv/cv-data.ts`.

## Deploy

Any static host works. The build output is `dist/`.

- **Cloudflare Pages / Netlify:** build command `npm run build`, output directory `dist`. `public/_redirects` sends every path to `index.html`, so `/projects/...` URLs survive a refresh.
- After the first deploy, open a project URL directly and refresh it to confirm the fallback works.

**Rollback:** both hosts keep previous deployments. Promote the last good deployment in the dashboard, or redeploy the last accepted commit. The previous approved CV stays in git history under `public/cv/`.

## GitHub profile README

`github-profile/` holds a profile README in the same style (banner, badges, About me, project overviews). See `github-profile/PUBLISH.md`.

## Before going public

See [`docs/launch-checklist.md`](docs/launch-checklist.md). Open items include the BioLab ECG live app (its URL currently shows "not found"), the BSc graduation year, and a domain for canonical URLs.
