// Renders public/og-cover.png (1200x630) from original typography. No photos.
import { readFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const f = (pkg, file) => readFileSync(join(root, "node_modules/@fontsource", pkg, "files", file)).toString("base64");
const photo = `data:image/webp;base64,${readFileSync(join(root, "public/me/hero-tall.webp")).toString("base64")}`;
const html = `<!doctype html><html><head><style>
@font-face{font-family:IS;src:url(data:font/woff2;base64,${f("instrument-serif", "instrument-serif-latin-400-normal.woff2")})}
@font-face{font-family:IN;font-weight:600;src:url(data:font/woff2;base64,${f("instrument-sans", "instrument-sans-latin-600-normal.woff2")})}
@font-face{font-family:IN;font-weight:400;src:url(data:font/woff2;base64,${f("instrument-sans", "instrument-sans-latin-400-normal.woff2")})}
body{margin:0;width:1200px;height:630px;background:#f2f3ef;color:#15181a;font-family:IN;display:flex;flex-direction:column;justify-content:center;padding:0 0 0 80px;box-sizing:border-box;position:relative;overflow:hidden}
.ph{position:absolute;right:0;top:0;width:440px;height:630px;object-fit:cover;object-position:50% 12%;filter:grayscale(1) contrast(1.06)}
.ph-fade{position:absolute;right:300px;top:0;width:160px;height:630px;background:linear-gradient(90deg,#f2f3ef,rgba(242,243,239,0))}
.e{font-weight:600;font-size:20px;letter-spacing:.16em;text-transform:uppercase;color:#2f5a3e}
h1{font-family:IS;font-weight:400;font-size:132px;line-height:1;margin:18px 0 14px}
p{font-size:28px;color:#3d4341;margin:0;max-width:640px;line-height:1.35}
svg{margin-top:38px;color:#2f5a3e}
</style></head><body>
<img class="ph" src="${photo}"><div class="ph-fade"></div>
<div class="e">Electrical Engineering / Data / Supply Chain</div>
<h1>Danish Ali</h1>
<p>Electrical engineer and MSc student at Technische Universität Wien. I build tested Python tools.</p>
<svg width="620" height="70" viewBox="0 0 1200 106"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" d="M0 80 L40 80 Q50 68 60 80 L70 80 L74 88 L80 8 L86 98 L92 80 L108 80 Q122 58 136 80 L175 80 Q185 68 195 80 L205 80 L209 88 L215 8 L221 98 L227 80 L243 80 Q257 58 271 80 L430 80 L470 40 L520 62 L565 22 L615 70 L662 38 L712 92 L756 56 L800 80 L806 20 L900 84 L905 22 L998 88 L1003 24 L1098 82 L1103 26 L1200 72"/></svg>
</body></html>`;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(html, { waitUntil: "load" });
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: join(root, "public", "og-cover.png") });
await b.close();
console.log("wrote public/og-cover.png");
