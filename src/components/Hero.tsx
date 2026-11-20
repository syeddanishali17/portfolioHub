import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { profile } from "../content/profile";
import { SignalTrace } from "./SignalTrace";
import { DownloadIcon } from "./icons";
import { Portrait } from "./Portrait";
import { HeroDots } from "./HeroDots";
import "@fontsource/mrs-saint-delafield/400.css";

// Floating "stickers" over the photo, in the spirit of the reference: they pop in with a
// slight overshoot, then drift. Facts only. `m` = also shown on phones.
type Sticker = { kind: "pill" | "card" | "outline" | "glass" | "star"; b?: string; s?: string; pos: string; m?: boolean };
const stickers: Sticker[] = [
  { kind: "pill", b: "Electrical Engineering × Data", pos: "sk-1", m: true },
  { kind: "card", b: "Technische Universität Wien", s: "MSc Information & Communication Engineering", pos: "sk-2", m: true },
  { kind: "outline", b: "Lahore ⇄ Vienna", pos: "sk-3", m: true },
  { kind: "star", pos: "sk-4" },
  { kind: "card", b: "UET Lahore", s: "BSc Electrical Engineering", pos: "sk-5" },
  { kind: "card", b: "LUMS", s: "MS Supply Chain & Retail Management", pos: "sk-6" },
  { kind: "glass", b: "EN · DE", pos: "sk-7" },
];

function StickerView({ k, i }: { k: Sticker; i: number }) {
  const style = {
    "--pop": `${0.3 + i * 0.12}s`,
    "--dur": `${5 + ((i * 7) % 4)}s`,
    "--neg": `${-((i * 1.3) % 4)}s`,
  } as CSSProperties;
  return (
    <div className={`sticker ${k.pos}${k.m ? " on-mobile" : ""}`} style={style} aria-hidden="true">
      <div className={`sk sk-${k.kind}`}>
        {k.kind === "star" ? (
          <svg viewBox="0 0 40 40" width="40" height="40">
            <path d="M20 0 C21.5 13 27 18.5 40 20 C27 21.5 21.5 27 20 40 C18.5 27 13 21.5 0 20 C13 18.5 18.5 13 20 0 Z" fill="currentColor" />
          </svg>
        ) : (
          <>
            <b>{k.b}</b>
            {k.s && <span>{k.s}</span>}
          </>
        )}
      </div>
    </div>
  );
}

function Ctas() {
  return (
    <>
      <a className="btn btn-primary" href={profile.cvPath} download>
        <DownloadIcon /> Download CV<span className="sr-only"> (PDF)</span>
      </a>
      <a className="btn btn-glass" href={`mailto:${profile.email}`}>
        Email me
      </a>
    </>
  );
}

/**
 * Scroll-linked hero (desktop, motion allowed): as you scroll, the full-width photo closes into a
 * card, a giant name marquee slides in behind it and a signature draws itself. Writes --p (0..1).
 * Normal page scrolling, nothing is hijacked. Phones and reduced motion keep the static hero.
 */
function useHeroScroll(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const wide = window.matchMedia("(min-width: 861px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const run = r.height - (window.innerHeight - 68);
      el.style.setProperty("--p", run > 0 ? Math.min(1, Math.max(0, -r.top / run)).toFixed(4) : "0");
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const apply = () => {
      const on = wide.matches && !reduce.matches;
      el.dataset.scroll = on ? "on" : "off";
      window.removeEventListener("scroll", onScroll);
      if (on) {
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
      } else el.style.setProperty("--p", "0");
    };
    apply();
    wide.addEventListener("change", apply);
    reduce.addEventListener("change", apply);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      wide.removeEventListener("change", apply);
      reduce.removeEventListener("change", apply);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}

function NameRows() {
  const words = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="name-rows" aria-hidden="true">
      {[0, 1].map((row) => (
        <div className={`name-row r${row}`} key={row}>
          {words.map((i) => (
            <span key={i} className={(i + row) % 2 ? "outline" : "solid"}>
              Danish Ali<em>·</em>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function Signature() {
  return (
    <svg className="signature" viewBox="0 0 1000 360" aria-hidden="true">
      <text x="500" y="230" textAnchor="middle">
        Danish Ali
      </text>
    </svg>
  );
}

export function Hero() {
  const [photoOk, setPhotoOk] = useState(true);
  const p = profile.portrait;
  const track = useRef<HTMLDivElement>(null);
  useHeroScroll(track);

  return (
    <>
      {photoOk && (
        <div className="hero-track" ref={track}>
        <section className="hero-full" aria-label="Introduction">
          <NameRows />
          <Portrait wide={p.wide} tall={p.tall} alt={p.alt} onError={() => setPhotoOk(false)} />
          <Signature />
          <p className="status hero-status">
            <span className="status-dot" aria-hidden="true" />
            <span>
              {profile.status.split(" · ")[0]}
              <span className="status-more"> · {profile.status.split(" · ").slice(1).join(" · ")}</span>
            </span>
          </p>
          <HeroDots />
          <div className="stickers">
            {stickers.map((k, i) => (
              <StickerView key={k.pos} k={k} i={i} />
            ))}
          </div>
          <div className="hero-cta-bar">
            <Ctas />
          </div>
        </section>
        </div>
      )}

      <section className="intro" aria-labelledby="hero-title">
        <div className="wrap">
          {!photoOk && (
            <p className="status">
              <span className="status-dot" aria-hidden="true" />
              {profile.status}
            </p>
          )}
          <span className="eyebrow">{profile.focus.join(" / ")}</span>
          <h1 id="hero-title" className="display">
            <span className="hi">Hi, I’m</span>
            {profile.displayName}
          </h1>
          <p className="hero-claim">
            I’m an electrical engineer who builds <em>tested, useful</em> tools.
          </p>
          <p className="hero-text lede">
            Now doing my MSc in Information and Communication Engineering at Technische Universität Wien. I build Python
            tools for heartbeats, delivery vans and stock levels, and I check them before I trust them.
          </p>
          <div className="hero-ctas">
            {!photoOk && <Ctas />}
            <Link className="text-link" to={{ pathname: "/", hash: "#projects" }}>
              See my work ↓
            </Link>
          </div>
          <ul className="chips-static" aria-label="Education">
            <li>Technische Universität Wien · MSc Information and Communication Engineering</li>
            <li>UET Lahore · BSc Electrical Engineering</li>
            <li>LUMS · MS Supply Chain and Retail Management</li>
          </ul>
          <SignalTrace />
        </div>
      </section>
    </>
  );
}

const themes = [
  "Signal processing",
  "Electrical engineering",
  "Vehicle routing",
  "Demand planning",
  "Warehouse optimisation",
  "Python",
  "Decision support",
  "Technische Universität Wien",
];

export function Marquee() {
  // Decorative: the same words appear as real text elsewhere on the page.
  const row = [...themes, ...themes];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-ribbon">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      </div>
    </div>
  );
}
