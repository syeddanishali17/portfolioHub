# Launch checklist

Tick these before the site goes public. Items marked **(done 20 Nov 2026)** were checked during the build.

## Decisions for Danish

- [ ] Approve all copy on the site and both CVs (especially the profile paragraph and the role descriptions).
- [ ] Approve the status line in `src/content/profile.ts`.
- [ ] BSc Electrical Engineering graduation year: add to `education` in `profile.ts`, or leave it out.
- [ ] Employer label for the Mondelēz role (current CV wording vs "Continental Biscuits Limited (Mondelēz International)").
- [ ] BioLab ECG live app: redeploy on Streamlit Community Cloud, then restore `demoUrl` in `projects.ts` and run `npm run cv`.
- [ ] Domain name. Then add canonical URLs, an absolute `og:image`, and a sitemap line in `public/robots.txt`.
- [ ] Legal/privacy page: decide once the host is chosen (no cookies, analytics or forms are used today).

- [ ] Approve the touched-up photo (`public/me/hero-wide.webp`, `hero-tall.webp`) and the black-and-white treatment.
- [ ] Approve the website-only supply-chain section and the LUMS degree and TA role (shown without dates).

## Checks

- [x] Lint, typecheck, 10 unit tests, production build, 11 browser tests pass **(done 20 Nov 2026)**
- [x] No horizontal scroll at 320, 375, 390, 768, 1024, 1440 px on all four pages **(done 20 Nov 2026)**
- [x] Direct load of every `/projects/...` route and the 404 page (on `vite preview`) **(done 20 Nov 2026)**
- [x] Mobile menu: opens, closes on Escape and on selection, `aria-expanded` set **(done 20 Nov 2026)**; outside-click close is implemented but untested
- [x] CV PDFs: one A4 page each, fonts embedded, every link annotation points at a checked URL, text extracts in order **(done 20 Nov 2026)**
- [x] GitHub links return 200; LastMile, DemandPlanning and BloodTypeLab apps open in a real browser **(done 20 Nov 2026)**
- [ ] Keyboard-only pass in a real browser (skip link, nav, menu, all CTAs)
- [ ] 200% browser zoom pass
- [ ] Screen-reader spot check (NVDA or VoiceOver)
- [ ] Lighthouse on the deployed preview (target: performance ≥ 90, accessibility ≥ 95)
- [ ] After deploying: refresh a `/projects/...` URL on the host to confirm the SPA fallback
- [ ] Open every Streamlit app the day you send applications (free tier sleeps after inactivity)
