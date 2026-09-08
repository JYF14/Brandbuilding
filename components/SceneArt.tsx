import { seededRng, range } from "@/lib/seeded-random";
import { mix } from "@/lib/color-utils";

const SNOW = "#F7F6F2";
const IVORY = "#EEEAE1";
const STONE = "#AAA195";
const TAUPE = "#87796B";
const ESPRESSO = "#332A25";

interface SceneArtProps {
  seed: string;
  caption?: string;
  kicker?: string;
  dark?: boolean;
  className?: string;
  figures?: 0 | 1 | 2;
}

function ridgePoints(
  rng: () => number,
  baseY: number,
  amplitude: number,
  segments: number,
  w: number,
  h: number
) {
  const pts: string[] = [`0,${h}`, `0,${baseY}`];
  for (let i = 0; i <= segments; i++) {
    const x = (w / segments) * i;
    const y = baseY - rng() * amplitude - (i % 2 === 0 ? amplitude * 0.35 : 0);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  pts.push(`${w},${baseY}`, `${w},${h}`);
  return pts.join(" ");
}

function FigureMark({ x, y, scale, tone }: { x: number; y: number; scale: number; tone: string }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} stroke={tone} strokeWidth={2.2} fill="none" opacity={0.85}>
      <circle cx={0} cy={-70} r={9} fill={tone} stroke="none" />
      <line x1={0} y1={-60} x2={0} y2={-5} />
      <path d="M-14,-45 Q0,-52 14,-45" />
      <path d="M-6,-5 L-11,40" />
      <path d="M6,-5 L11,40" />
    </g>
  );
}

export default function SceneArt({
  seed,
  caption,
  kicker,
  dark = false,
  className = "",
  figures = 2,
}: SceneArtProps) {
  const rng = seededRng(seed);
  const w = 1600;
  const h = 1000;
  const ink = ESPRESSO;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={caption || "MONTREVE alpine scene"}
    >
      <defs>
        <linearGradient id={`scene-sky-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={mix(SNOW, "#ffffff", 0.5)} />
          <stop offset="45%" stopColor={mix(SNOW, STONE, dark ? 0.4 : 0.22)} />
          <stop offset="100%" stopColor={dark ? mix(TAUPE, ESPRESSO, 0.3) : IVORY} />
        </linearGradient>
        <radialGradient id={`scene-vg-${seed}`} cx="50%" cy="35%" r="75%">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor={ESPRESSO} stopOpacity={dark ? 0.32 : 0.14} />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#scene-sky-${seed})`} />
      <circle cx={range(rng, w * 0.15, w * 0.85)} cy={range(rng, 110, 220)} r={70} fill="#fff" opacity={0.4} />

      <polygon
        points={ridgePoints(rng, h * 0.42, 110, 8, w, h)}
        fill={mix(STONE, SNOW, 0.35)}
        opacity={0.9}
      />
      <polygon
        points={ridgePoints(rng, h * 0.52, 140, 9, w, h)}
        fill={STONE}
        opacity={0.92}
      />
      <polygon
        points={ridgePoints(rng, h * 0.68, 120, 10, w, h)}
        fill={TAUPE}
        opacity={0.95}
      />

      {Array.from({ length: 14 }).map((_, i) => {
        const x = range(rng, 0, w);
        const treeH = range(rng, 40, 90);
        return (
          <polygon
            key={i}
            points={`${x},${h * 0.78 + treeH} ${x + treeH * 0.28},${h * 0.78} ${x + treeH * 0.56},${h * 0.78 + treeH}`}
            fill={ESPRESSO}
            opacity={0.55}
          />
        );
      })}

      <rect x={0} y={h * 0.76} width={w} height={h * 0.24} fill={IVORY} opacity={dark ? 0.25 : 0.6} />

      {figures > 0 && <FigureMark x={w * 0.42} y={h * 0.88} scale={2.1} tone={ink} />}
      {figures > 1 && <FigureMark x={w * 0.58} y={h * 0.9} scale={2.35} tone={mix(TAUPE, ESPRESSO, 0.2)} />}

      <rect width={w} height={h} fill={`url(#scene-vg-${seed})`} />

      <text
        x={w * 0.06}
        y={h * 0.16}
        fill={dark ? SNOW : ink}
        opacity={0.1}
        fontFamily="var(--font-serif), serif"
        fontSize={160}
        style={{ letterSpacing: "0.05em" }}
      >
        MONTREVE
      </text>

      {kicker ? (
        <text
          x={40}
          y={h - 56}
          fill={dark ? SNOW : ink}
          opacity={0.5}
          fontFamily="var(--font-sans), sans-serif"
          fontSize={16}
          style={{ letterSpacing: "0.22em" }}
        >
          {kicker.toUpperCase()}
        </text>
      ) : null}
      {caption ? (
        <text
          x={40}
          y={h - 30}
          fill={dark ? SNOW : ink}
          opacity={0.35}
          fontFamily="var(--font-sans), sans-serif"
          fontSize={13}
          style={{ letterSpacing: "0.14em" }}
        >
          {caption.toUpperCase()}
        </text>
      ) : null}
    </svg>
  );
}
