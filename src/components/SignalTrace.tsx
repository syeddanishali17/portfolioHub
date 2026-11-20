import { Link } from "react-router-dom";

// Original hero motif: one continuous line that starts as an ECG trace,
// turns into a delivery route and ends as an inventory sawtooth.
// It mirrors the three featured projects. Decorative; the legend carries the meaning.

function ecgBeat(x: number, base: number) {
  return [
    `L ${x} ${base}`,
    `Q ${x + 10} ${base - 12} ${x + 20} ${base}`,
    `L ${x + 30} ${base}`,
    `L ${x + 34} ${base + 8}`,
    `L ${x + 40} ${base - 80}`,
    `L ${x + 46} ${base + 20}`,
    `L ${x + 52} ${base}`,
    `L ${x + 68} ${base}`,
    `Q ${x + 82} ${base - 22} ${x + 96} ${base}`,
  ].join(" ");
}

const BASE = 120;
const stops: [number, number][] = [
  [470, 72], [520, 98], [565, 52], [615, 108], [662, 70], [712, 134], [756, 92],
];

const path = [
  `M 0 ${BASE}`,
  ecgBeat(40, BASE),
  ecgBeat(175, BASE),
  ecgBeat(310, BASE),
  `L 430 ${BASE}`,
  ...stops.map(([x, y]) => `L ${x} ${y}`),
  `L 800 ${BASE}`,
  `L 806 52 L 900 124 L 905 56 L 998 128 L 1003 58 L 1098 122 L 1103 60 L 1200 112`,
].join(" ");

const legend = [
  { n: "01", what: "Signal", slug: "biolab-ecg", name: "BioLab ECG" },
  { n: "02", what: "Route", slug: "lastmilelab", name: "LastMile Lab" },
  { n: "03", what: "Stock", slug: "demandplanninglab", name: "DemandPlanningLab" },
];

export function SignalTrace() {
  return (
    <div className="trace">
      <svg viewBox="0 0 1200 170" aria-hidden="true" focusable="false">
        <line className="grid" x1="415" y1="10" x2="415" y2="165" />
        <line className="grid" x1="785" y1="10" x2="785" y2="165" />
        <line className="grid" x1="800" y1="116" x2="1200" y2="116" strokeDasharray="4 6" />
        <path className="path draw" d={path} pathLength={1} />
        {stops.map(([x, y], i) => (
          <circle key={x} className="dot fade" cx={x} cy={y} r="5" style={{ animationDelay: `${1.2 + i * 0.08}s` }} />
        ))}
        <rect className="fade" x="425" y={BASE - 6} width="12" height="12" fill="currentColor" style={{ animationDelay: "1.1s" }} />
      </svg>
      <ol className="trace-legend">
        {legend.map((l) => (
          <li key={l.slug}>
            <span className="muted">{l.n}</span> {l.what} ·{" "}
            <Link to={`/projects/${l.slug}`}>{l.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
