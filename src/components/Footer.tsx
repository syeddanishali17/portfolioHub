import { profile } from "../content/profile";
import { ExternalLink } from "./ExternalLink";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          © {YEAR} {profile.fullName} · {profile.location}
        </p>
        <nav aria-label="Elsewhere">
          <a href={`mailto:${profile.email}`}>Email</a>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <a href={profile.cvPath} download>
            CV (PDF)
          </a>
        </nav>
      </div>
    </footer>
  );
}
