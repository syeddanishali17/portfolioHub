import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { featuredProjects, getProject } from "../content/projects";
import { Metrics, ProjectMedia } from "../components/ProjectFeature";
import { ExternalLink } from "../components/ExternalLink";
import { NotFoundPage } from "./NotFoundPage";
import { useDocumentMeta } from "../lib/meta";

export function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  useDocumentMeta(
    project ? `${project.title} | Danish Ali` : "Not found | Danish Ali",
    project ? `${project.headline} ${project.caveat}` : undefined,
  );
  if (!project) return <NotFoundPage />;

  const list = featuredProjects();
  const next = list[(list.findIndex((p) => p.slug === project.slug) + 1) % list.length];
  const sections: { title: string; body: ReactNode }[] = [
    { title: "The problem", body: <p>{project.problem}</p> },
    { title: "My role", body: <p>{project.role}</p> },
    {
      title: "Approach",
      body: (
        <ul>
          {project.approach.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Evidence",
      body: (
        <>
          <Metrics project={project} />
          <p className="muted">{project.evidenceNote}</p>
        </>
      ),
    },
    {
      title: "What the demo shows",
      body: (
        <>
          <ProjectMedia project={project} lazy={false} />
          <ul>
            {project.demoNotes.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          {project.extraImage && (
            <figure className="media-card">
              <img
                src={project.extraImage.src}
                alt={project.extraImage.alt}
                width={project.extraImage.width}
                height={project.extraImage.height}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{project.extraImage.caption}</figcaption>
            </figure>
          )}
        </>
      ),
    },
    {
      title: "Limits and trade-offs",
      body: (
        <>
          <p className="caveat">{project.caveat}</p>
          <ul>
            {project.limitations.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "What I learned",
      body: (
        <ul>
          {project.learned.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Links",
      body: (
        <div className="feature-links" style={{ marginTop: 0 }}>
          {project.demoUrl && (
            <ExternalLink className="text-link ext" href={project.demoUrl}>
              Open live app
            </ExternalLink>
          )}
          <ExternalLink className="text-link ext" href={project.repoUrl}>
            Source code on GitHub
          </ExternalLink>
          {project.methodologyUrl && (
            <ExternalLink className="text-link ext" href={project.methodologyUrl}>
              Methodology
            </ExternalLink>
          )}
        </div>
      ),
    },
  ];

  return (
    <article>
      <header className="case-head">
        <div className="wrap">
          <Link className="back" to={{ pathname: "/", hash: "#projects" }}>
            ← All projects
          </Link>
          <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
            {project.category.join(" · ")}
          </p>
          <h1 className="display">{project.title}</h1>
          <p className="lede">{project.headline}</p>
          <div className="hero-ctas">
            {project.demoUrl && (
              <ExternalLink className="btn btn-primary" href={project.demoUrl}>
                Open live app ↗
              </ExternalLink>
            )}
            <ExternalLink className={`btn${project.demoUrl ? "" : " btn-primary"}`} href={project.repoUrl}>
              View code ↗
            </ExternalLink>
          </div>
          <dl className="case-meta">
            <div>
              <dt>Type</dt>
              <dd>{project.kind}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>Sole developer</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>{project.tech.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </header>
      <div className="wrap">
        {sections.map((s, i) => (
          <section className="case-section" key={s.title} aria-labelledby={`cs-${i}`}>
            <h2 id={`cs-${i}`}>
              <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              {s.title}
            </h2>
            <div className="case-body">{s.body}</div>
          </section>
        ))}
        <nav className="case-next" aria-label="More projects">
          <Link to={{ pathname: "/", hash: "#projects" }}>
            <span className="label">Back</span>
            <span className="title">All projects</span>
          </Link>
          {next && next.slug !== project.slug && (
            <Link to={`/projects/${next.slug}`} style={{ textAlign: "right" }}>
              <span className="label">Next project</span>
              <span className="title">{next.title} →</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
