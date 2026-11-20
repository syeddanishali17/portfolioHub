// Schematic illustration for the ECG stress-test bench: the same synthetic heartbeat,
// clean and with motion-like artefacts. It shows the failure mode the bench measures
// (detectors keep the real beats but add false ones). Generated here, not real data.

const W = 800;
const PANEL_H = 170;
const BEAT = 0.82; // seconds per beat (~73 bpm)
const SECONDS = 4.2;

function gauss(t: number, mu: number, sd: number, a: number) {
  return a * Math.exp(-(((t - mu) / sd) ** 2));
}
function ecg(t: number) {
  const p = ((t % BEAT) + BEAT) % BEAT;
  return (
    gauss(p, 0.16, 0.03, 0.12) +
    gauss(p, 0.265, 0.008, -0.12) +
    gauss(p, 0.28, 0.011, 1.0) +
    gauss(p, 0.298, 0.01, -0.24) +
    gauss(p, 0.52, 0.06, 0.26)
  );
}
// Deterministic "electrode motion": slow wander, wobble and a few sharp artefacts.
const artefacts = [0.72, 1.98, 3.34];
function noise(t: number) {
  let n = 0.22 * Math.sin(2 * Math.PI * 0.33 * t + 0.4) + 0.08 * Math.sin(2 * Math.PI * 4.7 * t) + 0.05 * Math.sin(2 * Math.PI * 11.3 * t + 1.1);
  for (const a of artefacts) n += gauss(t, a, 0.012, 0.85) + gauss(t, a + 0.025, 0.014, -0.35);
  return n;
}

function toPath(fn: (t: number) => number, top: number) {
  const pts: string[] = [];
  const steps = 900;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * SECONDS;
    const x = (t / SECONDS) * W;
    const y = top + PANEL_H * 0.62 - fn(t) * PANEL_H * 0.5;
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

const beats: number[] = [];
for (let t = 0.28; t < SECONDS; t += BEAT) beats.push(t);
const xOf = (t: number) => (t / SECONDS) * W;

const CLEAN_TOP = 34;
const NOISY_TOP = 34 + PANEL_H + 46;

export function EcgNoiseFigure() {
  return (
    <figure className="media-card ecg-figure">
      <svg viewBox={`0 0 ${W} ${NOISY_TOP + PANEL_H + 20}`} role="img" aria-labelledby="ecg-fig-title ecg-fig-desc">
        <title id="ecg-fig-title">Schematic: clean ECG versus ECG with motion artefacts</title>
        <desc id="ecg-fig-desc">
          Top: a clean synthetic heartbeat trace where every beat is detected. Bottom: the same trace with
          baseline wander and three sharp motion artefacts; all five real beats are still found, but each
          artefact is also flagged as a beat, which lowers positive predictive value.
        </desc>
        <rect x="0" y="0" width={W} height={NOISY_TOP + PANEL_H + 20} fill="#fbfbf9" />
        {[CLEAN_TOP, NOISY_TOP].map((top) =>
          Array.from({ length: 9 }, (_, i) => (
            <line key={`${top}-${i}`} x1={(i * W) / 8} x2={(i * W) / 8} y1={top} y2={top + PANEL_H} stroke="rgba(47,90,62,0.10)" />
          )),
        )}
        <text x="0" y="20" className="fig-lbl">Clean recording</text>
        <text x="0" y={NOISY_TOP - 14} className="fig-lbl">Same beats + electrode-motion noise</text>
        <path d={toPath(ecg, CLEAN_TOP)} fill="none" stroke="#15181a" strokeWidth="1.6" strokeLinejoin="round" />
        <path d={toPath((t) => ecg(t) + noise(t), NOISY_TOP)} fill="none" stroke="#15181a" strokeWidth="1.6" strokeLinejoin="round" />
        {beats.map((b) => (
          <g key={b}>
            <circle cx={xOf(b)} cy={CLEAN_TOP + 8} r="5" fill="#2f5a3e" />
            <circle cx={xOf(b)} cy={NOISY_TOP + 8} r="5" fill="#2f5a3e" />
          </g>
        ))}
        {artefacts.map((a) => (
          <g key={a} stroke="#a26f00" strokeWidth="2.4" strokeLinecap="round">
            <line x1={xOf(a) - 6} y1={NOISY_TOP + 2} x2={xOf(a) + 6} y2={NOISY_TOP + 14} />
            <line x1={xOf(a) + 6} y1={NOISY_TOP + 2} x2={xOf(a) - 6} y2={NOISY_TOP + 14} />
          </g>
        ))}
      </svg>
      <figcaption>
        <span className="legend-dot" /> detected real beat <span className="legend-x">×</span> false beat. Schematic
        drawing of the failure mode the bench measures, not real data.
      </figcaption>
    </figure>
  );
}
