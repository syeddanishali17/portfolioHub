import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { projects, featuredProjects, moreProjects } from "../src/content/projects";
import { profile, education } from "../src/content/profile";
import { experience, cvExperience } from "../src/content/experience";
import { cvVariants } from "../cv/cv-data";

const pub = (p: string) => join(__dirname, "..", "public", p.replace(/^\//, ""));

describe("content integrity", () => {
  it("features BioLab ECG, LastMile Lab and DemandPlanningLab in that order", () => {
    expect(featuredProjects().map((p) => p.slug)).toEqual(["biolab-ecg", "lastmilelab", "demandplanninglab"]);
  });

  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every project a caveat, limitations, metrics with context, and a repo", () => {
    for (const p of projects) {
      expect(p.caveat.length, p.slug).toBeGreaterThan(20);
      expect(p.limitations.length, p.slug).toBeGreaterThan(0);
      expect(p.metrics.length, p.slug).toBeGreaterThan(0);
      for (const m of p.metrics) expect(m.context.length, `${p.slug} ${m.label}`).toBeGreaterThan(10);
      expect(p.repoUrl).toMatch(/^https:\/\/github\.com\/syeddanishali17\//);
    }
  });

  it("labels synthetic data and the non-medical scope visibly", () => {
    const get = (s: string) => projects.find((p) => p.slug === s)!;
    expect(get("biolab-ecg").caveat).toMatch(/not a medical device/i);
    expect(get("lastmilelab").caveat).toMatch(/synthetic/i);
    expect(get("demandplanninglab").caveat).toMatch(/synthetic/i);
  });

  it("only uses https links", () => {
    const urls = [
      profile.linkedin,
      profile.github,
      ...projects.flatMap((p) => [p.demoUrl, p.repoUrl, p.methodologyUrl]),
      ...moreProjects.flatMap((p) => [p.demoUrl, p.repoUrl]),
    ].filter(Boolean) as string[];
    for (const u of urls) expect(u).toMatch(/^https:\/\//);
  });

  it("references images and the CV that exist in public/", () => {
    for (const p of projects) {
      if (p.image) expect(existsSync(pub(p.image.src)), p.image.src).toBe(true);
      if (p.extraImage) expect(existsSync(pub(p.extraImage.src)), p.extraImage.src).toBe(true);
    }
    expect(existsSync(pub(profile.cvPath))).toBe(true);
  });

  it("keeps the phone number off the website content", () => {
    expect(profile.status).not.toContain(profile.phoneCvOnly);
  });

  it("keeps the approved experience titles and dates", () => {
    expect(cvExperience().map((r) => [r.title, r.dates])).toEqual([
      ["Regional Product Specialist", "Jul 2025 to Aug 2026"],
      ["Product Analyst", "May 2024 to Apr 2025"],
      ["Management Trainee, Engineering Services", "Feb 2023 to Mar 2024"],
    ]);
  });

  it("keeps supply-chain extras off the CV", () => {
    expect(cvExperience().some((r) => r.webOnly)).toBe(false);
    expect(experience.some((r) => r.webOnly)).toBe(true);
    expect(education.filter((e) => e.webOnly).map((e) => e.school)).toEqual([
      "Lahore University of Management Sciences (LUMS)",
    ]);
  });

  it("keeps Technische Universität Wien first and the engineering degree on the CV", () => {
    expect(education[0].school).toBe("Technische Universität Wien");
    expect(education.filter((e) => !e.webOnly).map((e) => e.degree)).toEqual([
      "MSc Information and Communication Engineering",
      "BSc Electrical Engineering",
    ]);
  });

  it("does not invent a BSc date", () => {
    expect(education.find((e) => e.degree.startsWith("BSc"))?.dates).toBeUndefined();
  });

  it("CV variants reference real projects, two each", () => {
    for (const v of cvVariants) {
      expect(v.projectSlugs).toHaveLength(2);
      for (const s of v.projectSlugs) expect(projects.some((p) => p.slug === s)).toBe(true);
    }
  });
});
