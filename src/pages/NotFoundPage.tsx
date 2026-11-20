import { Link } from "react-router-dom";
import { useDocumentMeta } from "../lib/meta";

export function NotFoundPage() {
  useDocumentMeta("Page not found | Danish Ali");
  return (
    <section className="wrap notfound" aria-labelledby="nf-title">
      <p className="eyebrow">404</p>
      <h1 id="nf-title" className="display">
        This page doesn’t exist.
      </h1>
      <p className="lede">The link may be old, or the project may have moved.</p>
      <p>
        <Link className="btn btn-primary" to="/">
          Back to the homepage
        </Link>
      </p>
    </section>
  );
}
