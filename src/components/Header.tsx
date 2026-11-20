import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../content/profile";
import { DownloadIcon } from "./icons";
import { useScrollProgress } from "../lib/reveal";

const NAV = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "supply-chain", label: "Supply chain" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === "undefined") return;
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
  return enabled ? active : null;
}

export function Header() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  // The menu belongs to the page it was opened on, so it closes itself on navigation.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) =>
    setOpenOn((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null));
  const active = useActiveSection(onHome);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const progressRef = useRef<HTMLDivElement>(null);
  useScrollProgress(progressRef);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        btnRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenOn(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const navLinks = (onPick?: () => void) =>
    NAV.map((n) => (
      <li key={n.id}>
        <Link to={{ pathname: "/", hash: `#${n.id}` }} aria-current={active === n.id ? "true" : undefined} onClick={onPick}>
          {n.label}
        </Link>
      </li>
    ));

  return (
    <header ref={headerRef} className="site-header">
      <div className="wrap">
        <nav className="nav" aria-label="Main">
          <Link to="/" className="monogram">
            DA<span className="sr-only"> · Danish Ali, home</span>
          </Link>
          <ul className="nav-links">{navLinks()}</ul>
          <div className="nav-actions">
            <a className="btn btn-primary btn-small btn-cv" href={profile.cvPath} download>
              <DownloadIcon /> <span className="cv-lbl">Download CV</span>
              <span className="sr-only"> (PDF)</span>
            </a>
            <a className="btn btn-small btn-glass btn-email" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
          <button
            ref={btnRef}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
        <div id="mobile-menu" ref={panelRef} className="mobile-panel" data-open={open} hidden={!open}>
          <ul>{navLinks(() => setOpen(false))}</ul>
          <a className="btn" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>
      </div>
      <div className="progress-track" aria-hidden="true" />
      <div className="progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}
