// Builds the one-page A4 CV from the shared content and prints it to PDF.
//   node scripts/export-cv.mjs            -> all variants into cv/out/, default copied to public/cv/
// Requires Node 23.6+ (imports the .ts content files directly) and @playwright/test's Chromium.
import { mkdirSync, writeFileSync, copyFileSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "@playwright/test";

import { profile, education, skills, languages } from "../src/content/profile.ts";
import { cvExperience } from "../src/content/experience.ts";
import { projects } from "../src/content/projects.ts";
import { cvProfile, cvSubtitle, cvVariants } from "../cv/cv-data.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "cv", "out");
mkdirSync(outDir, { recursive: true });
mkdirSync(join(root, "public", "cv"), { recursive: true });

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const SEP = '<span class="sep">·</span>';
const bare = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// Embed fonts as data URIs so the PDF always carries the right faces.
const font = (pkg, file) =>
  `data:font/woff2;base64,${readFileSync(join(root, "node_modules", "@fontsource", pkg, "files", file)).toString("base64")}`;
const fontCss = `
@font-face{font-family:"Instrument Serif";font-weight:400;src:url(${font("instrument-serif", "instrument-serif-latin-400-normal.woff2")}) format("woff2");}
@font-face{font-family:"Instrument Sans";font-weight:400;src:url(${font("instrument-sans", "instrument-sans-latin-400-normal.woff2")}) format("woff2");}
@font-face{font-family:"Instrument Sans";font-weight:400;src:url(${font("instrument-sans", "instrument-sans-latin-ext-400-normal.woff2")}) format("woff2");unicode-range:U+0100-024F,U+1E00-1EFF;}
@font-face{font-family:"Instrument Sans";font-weight:600;src:url(${font("instrument-sans", "instrument-sans-latin-600-normal.woff2")}) format("woff2");}
@font-face{font-family:"Instrument Sans";font-weight:600;src:url(${font("instrument-sans", "instrument-sans-latin-ext-600-normal.woff2")}) format("woff2");unicode-range:U+0100-024F,U+1E00-1EFF;}
`;

const css = `
@page { size: A4; margin: 13mm 17mm 11mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: "Instrument Sans", "Helvetica Neue", Arial, sans-serif; font-size: 9.5pt; line-height: 1.42; color: #3d4341; }
a { color: inherit; text-decoration: none; }
header { display: flex; justify-content: space-between; align-items: flex-end; gap: 10mm; padding-bottom: 4.5mm; border-bottom: 0.6pt solid #d3d6d0; }
h1 { font-family: "Instrument Serif", Georgia, serif; font-weight: 400; font-size: 34pt; line-height: 1; color: #15181a; letter-spacing: -0.01em; }
.sub { margin-top: 2.4mm; font-size: 10pt; color: #3d4341; }
.contact { text-align: right; font-size: 8.9pt; line-height: 1.55; white-space: nowrap; }
.contact .loc { color: #15181a; }
.contact a { color: #2f5a3e; }
section { display: grid; grid-template-columns: 28mm 1fr; column-gap: 4mm; padding: 3mm 0; border-bottom: 0.6pt solid #d3d6d0; }
section:last-of-type { border-bottom: none; }
h2 { font-size: 7.4pt; font-weight: 600; letter-spacing: 0.11em; text-transform: uppercase; color: #2f5a3e; padding-top: 0.9mm; }
.body > * + * { margin-top: 2.2mm; }
.sep { margin: 0 0.32em; color: #9a9f9b; }
.body p + p { margin-top: 1.4mm; }
.lead { color: #15181a; }
.row { display: flex; justify-content: space-between; align-items: baseline; gap: 4mm; }
h3 { font-size: 9.6pt; font-weight: 600; color: #15181a; }
.date { flex: none; font-size: 8.6pt; color: #6b706c; white-space: nowrap; }
.entry p { margin-top: 0.6mm; }
.meta { margin-top: 0.8mm; font-size: 8.5pt; color: #6b706c; }
.meta a, .date a { color: #2f5a3e; }
.skills p { margin-top: 0.4mm; }
.skills b, .entry b { font-weight: 600; color: #15181a; }
`;

const entry = (title, date, text, meta = "", dateHtml = false) => `
  <div class="entry">
    <div class="row"><h3>${title}</h3>${date ? `<span class="date">${dateHtml ? date : esc(date)}</span>` : ""}</div>
    ${text ? `<p>${esc(text)}</p>` : ""}${meta}
  </div>`;

function render(variant) {
  const picked = variant.projectSlugs.map((slug) => {
    const p = projects.find((x) => x.slug === slug);
    if (!p) throw new Error(`Unknown project slug in CV variant: ${slug}`);
    return p;
  });

  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(profile.fullName)} · CV</title>
<meta name="author" content="${esc(profile.fullName)}">
<style>${fontCss}${css}</style></head><body>
<header>
  <div>
    <h1>${esc(profile.fullName)}</h1>
    <p class="sub">${esc(cvSubtitle)}</p>
  </div>
  <div class="contact">
    <div class="loc">${esc(profile.location)}</div>
    <div>${esc(profile.phoneCvOnly)}</div>
    <div><a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a></div>
    <div><a href="${esc(profile.github)}">${esc(bare(profile.github))}</a></div>
    <div><a href="${esc(profile.linkedin)}">${esc(bare(profile.linkedin))}</a></div>
  </div>
</header>

<section>
  <h2>Profile</h2>
  <div class="body">${cvProfile.map((t, i) => `<p${i === 0 ? ' class="lead"' : ""}>${esc(t)}</p>`).join("")}</div>
</section>

<section>
  <h2>Experience</h2>
  <div class="body">${cvExperience()
    .map((r) => entry(`${esc(r.title)}${SEP}${esc(r.company)}`, r.dates, r.story))
    .join("")}</div>
</section>

<section>
  <h2>Projects</h2>
  <div class="body">${picked
    .map((p) =>
      entry(
        `${esc(p.title)}${p.shortTitle !== p.title ? ` <span style="font-weight:400;color:#6b706c">(${esc(p.shortTitle)})</span>` : ""}`,
        `Independent, ${p.year}${SEP}${p.demoUrl ? `<a href="${esc(p.demoUrl)}">Live app</a>${SEP}` : ""}<a href="${esc(p.repoUrl)}">GitHub</a>`,
        p.cv,
        "",
        true,
      ),
    )
    .join("")}</div>
</section>

<section>
  <h2>Education</h2>
  <div class="body">${education
    .filter((e) => !e.webOnly)
    .map((e) => entry(`${esc(e.degree)}${SEP}${esc(e.school)}`, e.dates ?? "", e.note ?? ""))
    .join("")}</div>
</section>

<section>
  <h2>Skills</h2>
  <div class="body skills">
    ${skills.map((g) => `<p><b>${esc(g.label)}:</b> ${g.items.map(esc).join(", ")}</p>`).join("")}
    <p><b>Languages:</b> ${languages.map((l) => `${esc(l.name)} (${esc(l.level)})`).join(", ")}</p>
  </div>
</section>
</body></html>`;
}

const browser = await chromium.launch();
try {
  for (const v of cvVariants) {
    const htmlPath = join(outDir, v.file.replace(/\.pdf$/, ".html"));
    const pdfPath = join(outDir, v.file);
    writeFileSync(htmlPath, render(v), "utf8");
    const page = await browser.newPage();
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: pdfPath, format: "A4", printBackground: true, preferCSSPageSize: true, tagged: true });
    await page.close();
    console.log(`wrote ${pdfPath}`);
  }
  copyFileSync(join(outDir, cvVariants[0].file), join(root, "public", "cv", cvVariants[0].file));
  console.log(`copied default CV to public/cv/${cvVariants[0].file}`);
} finally {
  await browser.close();
}
