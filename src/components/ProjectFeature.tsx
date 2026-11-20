import { Link } from "react-router-dom";
import type { Project } from "../content/projects";
import { EcgNoiseFigure } from "./EcgNoiseFigure";
import { ExternalLink } from "./ExternalLink";

export function ProjectMedia({ project, lazy = true }: { project: Project; lazy?: boolean }) {
  if (!project.image) return <EcgNoiseFigure />;
  const { src, alt, width, height } = project.image;
  return (
    <figure className="media-card">
      <img src={src} alt={alt} width={width} height={height} loading={lazy ? "lazy" : "eager"} decoding="async" />
      <figcaption>Screenshot from the app. Synthetic scenario data.</figcaption>
    </figure>
  );
}

export function Metrics({ project }: { project: Project }) {
  return (
    <div className="metrics">
      {project.metrics.map((m) => (
        <div className="metric" key={m.label}>
          <b>{m.value}</b>
          <span>{m.label}</span>
          <small>{m.context}</small>
        </div>
      ))}
    </div>
  );
}

export function ProjectFeature({ project, index }: { project: Project; index: number }) {
  const headingId = `p-${project.slug}`;
  return (
    <article className={`feature reveal${index % 2 ? " flip" : ""}`} aria-labelledby={headingId}>
      <div>
        <div className="feature-num" aria-hidden="true">
          {index + 1}
        </div>
        <h3 id={headingId}>{project.title}</h3>
        <p className="headline">{project.headline}</p>
        <div className="pills">
          {project.category.map((c) => (
            <span className="pill" key={c}>
              {c}
            </span>
          ))}
          <span className="pill pill-status">
            {project.status === "live" ? "Live app" : "Code only"} · {project.year}
          </span>
        </div>
        <p className="summary lede">{project.summary}</p>
        <p className="my-part label">{project.myPart}</p>
        <p className="caveat">{project.caveat}</p>
        <Metrics project={project} />
        <div className="feature-links">
          <Link className="link-pill solid" to={`/projects/${project.slug}`}>
            Read the case study<span className="sr-only"> about {project.title}</span> <span aria-hidden="true">→</span>
          </Link>
          {project.demoUrl && (
            <ExternalLink className="link-pill" href={project.demoUrl}>
              Live app<span className="sr-only"> for {project.title}</span> <span aria-hidden="true">↗</span>
            </ExternalLink>
          )}
          <ExternalLink className="link-pill" href={project.repoUrl}>
            Code<span className="sr-only"> for {project.title}</span> <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
      </div>
      <div className="feature-media">
        <ProjectMedia project={project} />
      </div>
    </article>
  );
}
