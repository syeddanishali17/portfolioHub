// Renders github-profile/media/banner.png (1600 x 440) for the GitHub profile README.
import { readFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const f = (pkg, file) => readFileSync(join(root, "node_modules/@fontsource", pkg, "files", file)).toString("base64");
const sig = f("mrs-saint-delafield", "mrs-saint-delafield-latin-400-normal.woff2");
const html = `<!doctype html><html><head><style>
@font-face{font-family:IS;src:url(data:font/woff2;base64,${f("instrument-serif", "instrument-serif-latin-400-normal.woff2")})}
@font-face{font-family:IN;font-weight:500;src:url(data:font/woff2;base64,${f("instrument-sans", "instrument-sans-latin-500-normal.woff2")})}
@font-face{font-family:SIG;src:url(data:font/woff2;base64,${sig})}
body{margin:0;width:1600px;height:440px;background:#1f2f25;color:#f1f3f0;font-family:IN;position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(169,194,166,.22) 1.3px,transparent 1.4px);background-size:26px 26px}
svg.trace{position:absolute;left:0;right:0;bottom:8px;opacity:.45}
h1{position:relative;font-family:IS;font-weight:400;font-size:150px;line-height:1;margin:0;letter-spacing:-.01em}
p{position:relative;margin:26px 0 0;font-size:21px;letter-spacing:.28em;text-transform:uppercase;color:#b7c2b6}
.sig{position:absolute;right:120px;top:40px;font-family:SIG;font-size:92px;color:#a9c2a6;rotate:-8deg;opacity:.9}
</style></head><body>
<div class="dots"></div>
<svg class="trace" width="1600" height="110" viewBox="0 0 1600 110"><path fill="none" stroke="#a9c2a6" stroke-width="2.2" stroke-linejoin="round" d="M0 80 L60 80 Q72 66 84 80 L96 80 L101 90 L108 6 L115 100 L122 80 L142 80 Q158 56 174 80 L240 80 Q252 66 264 80 L276 80 L281 90 L288 6 L295 100 L302 80 L322 80 Q338 56 354 80 L560 80 L610 40 L670 64 L725 20 L785 72 L840 36 L900 96 L955 56 L1010 80 L1018 18 L1130 84 L1136 22 L1250 88 L1256 24 L1370 82 L1376 26 L1600 70"/></svg>
<div class="sig">Danish</div>
<h1>Hi, I’m Danish</h1>
<p>Electrical engineering · MSc @ Technische Universität Wien · Data & supply chain</p>
</body></html>`;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1600, height: 440 } });
await p.setContent(html, { waitUntil: "load" });
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: join(root, "github-profile/media/banner.png") });
await b.close();
console.log("wrote github-profile/media/banner.png");
