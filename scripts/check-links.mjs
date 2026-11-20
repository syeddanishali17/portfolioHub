// Checks every external link in the content files. Streamlit Cloud answers plain HTTP
// clients with a 303 to a login/wake page, so app links still need a real-browser check
// (see docs/launch-checklist.md). GitHub links must return 200.
import { profile } from "../src/content/profile.ts";
import { projects, moreProjects } from "../src/content/projects.ts";

const urls = new Set(
  [
    profile.linkedin,
    profile.github,
    ...projects.flatMap((p) => [p.repoUrl, p.demoUrl, p.methodologyUrl]),
    ...moreProjects.flatMap((p) => [p.repoUrl, p.demoUrl]),
  ].filter(Boolean),
);

let failed = 0;
for (const url of urls) {
  try {
    const res = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(20000) });
    const ok = res.status < 400 || (url.includes("linkedin.com") && res.status === 999);
    const note = url.includes("streamlit.app") ? " (Streamlit: confirm in a browser)" : "";
    console.log(`${ok ? "ok  " : "FAIL"} ${res.status} ${url}${note}`);
    if (!ok) failed++;
  } catch (e) {
    console.log(`FAIL ---  ${url} ${e.message}`);
    failed++;
  }
}
process.exit(failed ? 1 : 0);
