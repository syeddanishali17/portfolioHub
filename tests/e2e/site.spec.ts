import { expect, test } from "@playwright/test";

const routes = ["/", "/projects/biolab-ecg", "/projects/lastmilelab", "/projects/demandplanninglab"];

test.describe("pages", () => {
  for (const path of routes) {
    test(`loads ${path} directly with one h1 and no console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(String(e)));
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      await page.goto(path);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(errors).toEqual([]);
    });
  }

  test("unknown route shows the 404 page", async ({ page }) => {
    await page.goto("/projects/does-not-exist");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(/doesn.t exist/);
  });
});

test("nav anchors reach every section", async ({ page }) => {
  await page.goto("/");
  for (const id of ["projects", "about", "supply-chain", "experience", "skills", "contact"]) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  }
  await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Skills" }).click();
  await expect(page).toHaveURL(/#skills$/);
});

test("case study link opens the project and back link returns", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /Read the case study about LastMile Lab/ }).click();
  await expect(page).toHaveURL(/\/projects\/lastmilelab$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("LastMile Lab");
  await page.getByRole("link", { name: "← All projects" }).click();
  await expect(page).toHaveURL(/\/#projects$/);
});

test("CV download serves a PDF", async ({ page, request }) => {
  await page.goto("/");
  const href = await page.locator("a[download]").first().getAttribute("href");
  expect(href).toBe("/cv/Syed_Danish_Ali_CV.pdf");
  const res = await request.get(href!);
  expect(res.status()).toBe(200);
  expect((await res.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

test("external links open safely", async ({ page }) => {
  await page.goto("/");
  const ext = page.locator('a[target="_blank"]');
  const n = await ext.count();
  expect(n).toBeGreaterThan(3);
  for (let i = 0; i < n; i++) await expect(ext.nth(i)).toHaveAttribute("rel", /noopener/);
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 320, height: 640 } });

  test("no horizontal overflow at 320px", async ({ page }) => {
    for (const path of routes) {
      await page.goto(path);
      const sw = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(sw, path).toBeLessThanOrEqual(320);
    }
  });

  test("menu opens, closes on Escape and on selection", async ({ page }) => {
    await page.goto("/");
    const btn = page.getByRole("button", { name: "Menu" });
    await btn.click();
    await expect(page.getByRole("button", { name: "Close" })).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(page.locator("#mobile-menu")).toBeHidden();
    await page.getByRole("button", { name: "Menu" }).click();
    await page.locator("#mobile-menu").getByRole("link", { name: "Experience" }).click();
    await expect(page.locator("#mobile-menu")).toBeHidden();
    await expect(page).toHaveURL(/#experience$/);
  });
});

test("portrait is black and white with a colour spotlight under the pointer", async ({ page }) => {
  await page.goto("/");
  const fig = page.locator(".portrait");
  await expect(fig).toHaveAttribute("data-lit", "false");
  await expect(fig.locator("img.bw")).toHaveCSS("filter", /grayscale/);
  const box = (await fig.boundingBox())!;
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 3);
  await expect(fig).toHaveAttribute("data-lit", "true");
  await page.mouse.move(box.x + 20, box.y + box.height + 80);
  await expect(fig).toHaveAttribute("data-lit", "false");
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });
  test("revealed content is visible without scrolling animations", async ({ page }) => {
    await page.goto("/");
    const card = page.locator(".sc-card").first();
    await card.scrollIntoViewIfNeeded();
    await expect(card).toHaveCSS("opacity", "1");
    await expect(page.locator(".marquee-track")).toHaveCSS("animation-name", "none");
  });
});

test("supply-chain material appears on the website", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#supply-chain")).toContainText("Shorter walks in an e-commerce warehouse");
  await expect(page.locator("#experience")).toContainText("Teaching Assistant, Logistics Management");
});
