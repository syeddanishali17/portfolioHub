import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { profile, education, skills, supplyChainSkills, interests, languages } from "../content/profile";
import { experience } from "../content/experience";
import { featuredProjects, moreProjects } from "../content/projects";
import { supplyChainIntro, supplyChainStories } from "../content/supplyChain";
import { ProjectFeature } from "../components/ProjectFeature";
import { Hero, Marquee } from "../components/Hero";
import { ExternalLink } from "../components/ExternalLink";
import { useDocumentMeta } from "../lib/meta";
import { useReveal } from "../lib/reveal";

const principles = [
  {
    title: "Build something people can actually open.",
    text: "A live app or public code with a short README, not a notebook that only runs on my laptop.",
  },
  {
    title: "Check it against something simpler.",
    text: "Every result sits next to a baseline or an independent check, and made-up data is labelled as made up.",
  },
  {
    title: "Say what it doesn’t prove.",
    text: "Assumptions, limits and trade-offs in plain words, right next to the numbers they belong to.",
  },
];

const delay = (i: number) => ({ "--d": `${i * 80}ms` }) as CSSProperties;

function SectionHead({ num, title, id, children }: { num: string; title: string; id: string; children?: ReactNode }) {
  return (
    <div className="section-head reveal">
      <span className="section-num">{num}</span>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function HomePage() {
  useDocumentMeta(
    "Danish Ali | Engineering, Python & Technical Projects",
    "Portfolio of Syed Danish Ali, an electrical engineer and MSc student at Technische Universität Wien, building tested Python tools for signal analysis, routing and supply chain planning.",
  );
  useReveal("home");
  const featured = featuredProjects();

  return (
    <>
      <Hero />
      <Marquee />

      {/* 01 Projects */}
      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="wrap">
          <SectionHead num="01 · Projects" title="Projects" id="projects-title" />
          <p className="projects-intro lede prose reveal">
            Three things I built end to end. Each one has a baseline to beat, public code, and an honest list of what
            it does not prove.
          </p>
          {featured.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* 02 How I work */}
      <section className="section band" aria-labelledby="work-title">
        <div className="wrap">
          <SectionHead num="02 · Mindset" title="How I work" id="work-title" />
          <ol className="principles">
            {principles.map((p, i) => (
              <li key={p.title} className="reveal" style={delay(i)}>
                <span className="n" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 03 About */}
      <section id="about" className="section" aria-labelledby="about-title">
        <div className="wrap">
          <SectionHead num="03 · Motivation" title="About" id="about-title" />
          <div className="two-col">
            <div className="about-aside reveal">
              <figure className="about-photo">
                <img
                  src={profile.portrait.about.src}
                  alt={profile.portrait.about.alt}
                  width={profile.portrait.about.width}
                  height={profile.portrait.about.height}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <p className="about-lead">I like problems where you can check whether you were right.</p>
              <dl>
                <div>
                  <dt>Studying</dt>
                  <dd>MSc Information and Communication Engineering, Technische Universität Wien</dd>
                </div>
                <div>
                  <dt>Engineering degree</dt>
                  <dd>BSc Electrical Engineering, UET Lahore</dd>
                </div>
                <div>
                  <dt>Supply chain degree</dt>
                  <dd>Executive MS Supply Chain and Retail Management, LUMS</dd>
                </div>
                <div>
                  <dt>Based in</dt>
                  <dd>{profile.location}</dd>
                </div>
              </dl>
            </div>
            <div className="prose lede reveal" style={delay(1)}>
              <p>
                I trained as an electrical engineer, and my first job was on a factory floor, where I learned how
                machines behave and why production lines stop. Then I moved into supply chain and product work: dark
                stores and delivery zones at a quick-commerce startup, seller logistics on Alibaba’s marketplace, and an
                MS thesis on routing warehouse workers.
              </p>
              <p>
                Now I’m back on the engineering side, studying Information and Communication Engineering at Technische Universität Wien.
                Next to my courses I build Python tools: a bench that stress-tests heartbeat detectors, a van-routing
                app, a stock-planning engine. Different topics, same habit. Understand the problem, build something that
                works, test it against something simpler, and explain the trade-offs so someone else can decide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Supply chain */}
      <section id="supply-chain" className="section soft" aria-labelledby="sc-title">
        <div className="wrap">
          <SectionHead num="04 · Background" title="Supply chain" id="sc-title" />
          <p className="lede prose reveal" style={{ marginTop: "1.5rem" }}>
            {supplyChainIntro}
          </p>
          <div className="sc-grid">
            {supplyChainStories.map((s, i) => (
              <article className="sc-card reveal" key={s.title} style={delay(i % 3)}>
                <span className="label">{s.kicker}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.link && (
                  <Link className="text-link" to={s.link.to}>
                    See {s.link.label} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Experience + Education */}
      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="wrap">
          <SectionHead num="05 · Experience" title="Experience" id="experience-title" />
          <div className="timeline-wrap">
          <div className="timeline" role="region" aria-label="Work experience, scrolls sideways" tabIndex={0}>
            {experience.map((r) => (
              <article className="t-card" key={r.title + r.company}>
                <span className="when">{r.dates ?? r.year}</span>
                <h3>{r.title}</h3>
                <p className="org label">
                  {r.company}
                  {r.context ? ` · ${r.context}` : ""}
                </p>
                <p className="story">{r.story}</p>
                {r.webExtra && <p className="extra">{r.webExtra}</p>}
              </article>
            ))}
          </div>
          <p className="timeline-hint" aria-hidden="true">Scroll sideways for more</p>
          </div>

          <div className="edu" id="education">
            <span className="section-num">Education</span>
            <div className="edu-list">
              {education.map((e, i) => (
                <article className="edu-item reveal" key={e.degree} style={delay(i)}>
                  {e.dates && <span className="when label">{e.dates}</span>}
                  <h3>{e.degree}</h3>
                  <p className="org">{e.school}</p>
                  {e.note && <p className="note">{e.note}</p>}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 Skills */}
      <section id="skills" className="section tight-top" aria-labelledby="skills-title">
        <div className="wrap">
          <SectionHead num="06 · Skills and interests" title="Skills" id="skills-title" />
          <span className="label" style={{ display: "block", marginTop: "2rem" }}>
            Interests
          </span>
          <ul className="interests reveal" style={{ marginTop: "0.8rem" }}>
            {interests.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="skills-block reveal">
            <span className="label">Engineering and data</span>
            <div className="skills-grid">
              {skills.map((g) => (
                <div className="skill-group" key={g.label}>
                  <h3>{g.label}</h3>
                  <ul>
                    {g.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-block sc reveal">
            <span className="label">Supply chain</span>
            <div className="skills-grid">
              {supplyChainSkills.map((g) => (
                <div className="skill-group" key={g.label}>
                  <h3>{g.label}</h3>
                  <ul>
                    {g.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-block reveal">
            <span className="label">Languages</span>
            <div className="lang-table">
              {languages.map((l) => (
                <div key={l.name}>
                  <b>{l.name}</b>
                  <span>{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 More work */}
      <section className="section tight-top" aria-labelledby="more-title">
        <div className="wrap">
          <SectionHead num="07 · Side projects" title="More work" id="more-title" />
          <div className="cards">
            {moreProjects.map((p, i) => (
              <article className="card reveal" key={p.title} style={delay(i)}>
                <h3>{p.title}</h3>
                <p>{p.line}</p>
                <p className="note">{p.caveat}</p>
                <div className="pills">
                  {p.tags.map((t) => (
                    <span className="pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="card-links">
                  {p.demoUrl && (
                    <ExternalLink className="link-pill" href={p.demoUrl}>
                      Live app<span className="sr-only"> for {p.title}</span> <span aria-hidden="true">↗</span>
                    </ExternalLink>
                  )}
                  <ExternalLink className="link-pill" href={p.repoUrl}>
                    Code<span className="sr-only"> for {p.title}</span> <span aria-hidden="true">↗</span>
                  </ExternalLink>
                </div>
              </article>
            ))}
          </div>
          <p className="muted reveal" style={{ marginTop: "1.5rem", fontSize: "0.85rem" }}>
            The live apps run on Streamlit’s free tier. If one has been quiet for a while, it takes up to a minute to
            wake up.
          </p>
        </div>
      </section>

      {/* 08 Contact */}
      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div className="wrap reveal">
          <img className="contact-avatar" src="/me/avatar.webp" alt="" width={96} height={96} loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />
          <span className="section-num">08 · Contact</span>
          <h2 id="contact-title">Let’s talk</h2>
          <p className="lede">
            Got an engineering, data or supply chain problem where careful analysis and a working tool would help? I’d
            like to hear about it.
          </p>
          <ul className="contact-links">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            </li>
            <li>
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
            </li>
            <li>
              <a href={profile.cvPath} download>
                Download CV<span className="sr-only"> (PDF)</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
