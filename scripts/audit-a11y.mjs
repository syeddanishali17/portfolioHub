// Accessibility scan (axe-core, WCAG 2.1 AA) of every route at desktop and phone width.
//   node scripts/audit-a11y.mjs [baseURL]
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const base = process.argv[2] ?? "http://localhost:5173";
const routes = ["/", "/projects/biolab-ecg", "/projects/lastmilelab", "/projects/demandplanninglab", "/nope"];
const browser = await chromium.launch();
let total = 0;
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: "reduce" });
  for (const r of routes) {
    const page = await ctx.newPage();
    await page.goto(base + r, { waitUntil: "networkidle" });
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 30)); } scrollTo(0, 0); });
    const res = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).analyze();
    for (const v of res.violations) {
      total++;
      console.log(`[${w}] ${r}  ${v.impact}  ${v.id}: ${v.help}`);
      for (const n of v.nodes.slice(0, 4)) console.log(`     ${n.target.join(" ")}  ${(n.failureSummary || "").split("\n")[1]?.trim() ?? ""}`);
    }
    await page.close();
  }
  await ctx.close();
}
await browser.close();
console.log(total ? `${total} violation groups` : "no violations");
process.exit(total ? 1 : 0);
