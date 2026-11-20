import { useEffect, useRef } from "react";

/**
 * A light field of green dots drifting over the hero photo, denser at the sides than over the face.
 * Canvas, no library. Pauses when off-screen or in a background tab; static with reduced motion.
 */
export function HeroDots() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;

    // Deterministic pseudo-random so the layout is the same on every load.
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

    type Dot = { x: number; y: number; r: number; a: number; vx: number; vy: number; ph: number };
    const dots: Dot[] = [];
    const make = () => {
      dots.length = 0;
      const n = Math.round(Math.min(170, (w * h) / 7500));
      while (dots.length < n) {
        const x = rnd();
        // keep the middle (the face) mostly clear
        if (Math.abs(x - 0.5) < 0.2 && rnd() < 0.85) continue;
        dots.push({
          x: x * w,
          y: rnd() * h,
          r: 0.8 + rnd() * 1.8,
          a: 0.25 + rnd() * 0.55,
          vx: (rnd() - 0.5) * 0.12,
          vy: -0.04 - rnd() * 0.12,
          ph: rnd() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      make();
      draw(0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const tw = 0.75 + 0.25 * Math.sin(t / 900 + d.ph);
        ctx.globalAlpha = d.a * tw;
        ctx.fillStyle = "#2f5a3e";
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = (t: number) => {
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.y < -4) d.y = h + 4;
        if (d.x < -4) d.x = w + 4;
        if (d.x > w + 4) d.x = -4;
      }
      draw(t);
      if (visible) raf = requestAnimationFrame(step);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (!reduce && visible && !document.hidden) raf = requestAnimationFrame(step);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      start();
    });
    io.observe(canvas);
    const onVis = () => start();
    document.addEventListener("visibilitychange", onVis);
    resize();
    start();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} className="hero-dots" aria-hidden="true" />;
}
