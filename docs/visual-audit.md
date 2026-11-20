# Visual audit (20 Nov 2026)

Danish's site was compared against the reference he chose (selinameusel.com and its CV), measured in a real browser at 1440 px. The goal was to match the feel (type, colour, buttons, motion, voice) without copying its code, text or images.

## Typography

| Element | Reference (measured) | Before | Now |
|---|---|---|---|
| Section titles | Instrument Serif 92.8 px, line-height 1, −0.01em | up to 88 px | up to 92.8 px (`--fs-section`) |
| Project titles | Serif 38.4 px | up to 48 px | up to 38.4 px (`--fs-project`) |
| Role / card titles | Serif 24 px | up to 32 px | 24 px (`--fs-card`) |
| Project and about copy | Instrument Sans 18 px / 1.6, #3d4341 | ~17 px | 18 px / 1.6, #3d4341 |
| Nav links | 11.5 px uppercase, +0.05em, weight 400 | 12.2 px, +0.1em, weight 500 | 11.5 px, +0.05em, weight 400 |
| Small labels ("My part ·", dates) | 12.8 px uppercase, +0.1em, #5a615b | mixed | 12.8 px, +0.1em, #5a615b (`.label`) |
| Header buttons | 12 px / 600, pill | 14 px | 12 px / 600, 36 px tall (44 px on touch) |
| Hero buttons | 14.7 px / 600, 44 px pill | 15 px | 14.7 px / 600, 44 px pill |
| CV name | Instrument Serif 34 pt | 31 pt | 34 pt |

## Colour and buttons

- Background #f2f3ef, ink #15181a, body #3d4341, muted #5a615b, green #2f5a3e, dark band #1f2f25, soft band #e4e8e2. These match the reference palette.
- **Download CV** is a solid green pill and **Email** an outlined, slightly translucent pill, in the header and again in the hero (green first, like the reference). Both work in one click: the CV link uses `download`, and Email opens `mailto:`.
- Contact uses plain underlined text links (email, LinkedIn, GitHub, Download CV) under a large uppercase serif heading, like the reference.
- Project links are outlined pills; the case-study link is the one solid pill.

## Motion (all off with "reduce motion")

| Reference | Here |
|---|---|
| Floating "stickers" that pop in with an overshoot (scale 0.4 → 1, staggered 0.3–0.9 s), then drift 14 px on 5–8 s loops | Same motion and the same sticker types: white cards (Technische Universität Wien, UET Lahore, LUMS), a green pill (Electrical Engineering × Data), an outlined pill (Lahore ⇄ Vienna), a dark glass pill (EN · DE) and a green four-point star. Three stay visible on phones, placed away from the face. |
| Field of green dots over the hero | Canvas of drifting green dots, denser at the sides than over the face; pauses off-screen; static with reduced motion |
| Full-width, centred B&W photo; colour shows only under the pointer | Same: full-width hero photo, centred on the face, with a soft circle of colour following the pointer (or finger) |
| Marquee strips | One marquee band of Danish's themes under the hero; pauses on hover |
| Header scroll-progress line, active-section pill | Both |
| Pinned horizontal Experience cards | Horizontal card row with a timeline line and dots, using normal scrolling (no scroll-jacking) |
| Section fade-ins | `.reveal` fade-up on scroll; content stays visible without JavaScript |

Not adopted: the full-screen pinned hero and the 3D wireframe ball (heavy, and they slow reading), and the personal photo gallery and newsletter (no real material for those).

## Voice

Copy was rewritten in plain first person, the way the reference talks: say what the place is, then what you did ("A biscuit factory, in the engineering services team. I tracked how much each line ran and why it stopped…"). Facts were not changed. The CV uses the same voice, in a shorter form.

## Verified

- No horizontal scroll at 320, 375, 390, 768, 1024 and 1440 px.
- 12 unit tests and 14 browser tests pass, including the spotlight, reduced motion and the supply-chain section.
- Both CVs are one A4 page, and nothing from the supply-chain material appears in them.

## Second pass (20 Nov 2026)

| Found | Fix |
|---|---|
| The sweater badge was half-visible under the CTA bar on desktop | Separate crops: head and shoulders for landscape screens (`hero-wide.webp`, 126 KB), the full photo for phones (`hero-tall.webp`, 165 KB). Both are preloaded. Before, one 398 KB file served every screen. |
| Case-study buttons centred by mistake | Left-aligned again |
| Footer floated mid-screen on short pages; text and links misaligned | Page is a full-height column; footer items centred on one line |
| Straight apostrophes in headings ("doesn't", "LET'S") | Proper typographic apostrophes (’) in all copy and the CV |
| Hero intro repeated the About section's work history | Shortened to two sentences |
| Social-share image still had old wording | Regenerated: new focus line, Technische Universität Wien, B&W photo |
| Accessibility scan (axe, WCAG 2.1 AA, five routes, two widths): logo name didn't include its visible "DA" | Fixed. The scan is now clean (`npm run audit:a11y`). |
| Unused screenshot, internal-sounding BioLab note | Removed; note reworded |

## Third pass (20 Nov 2026)

| Change | Detail |
|---|---|
| New hero photo | Vienna at dusk (Danish's new photo) for the hero, contact avatar and share image; the Frankfurt photo moved to a B&W portrait card in About |
| Reference hero scroll effect | Desktop: as you scroll, the full-width photo closes into a rounded card, giant "Danish Ali" rows (outlined and solid) slide in behind it in opposite directions, a handwritten signature draws itself, and the floating cards drift away. Normal scrolling, nothing hijacked; phones and reduced motion keep the static hero |
| Tilted green ribbon | The topic marquee is now a slightly rotated deep-green ribbon, like the reference |
| Contact avatar | Wider crop (whole head and shoulders, centred); B&W with colour on hover |
| Phone stickers | Repositioned into the sky above the face for the new photo |
