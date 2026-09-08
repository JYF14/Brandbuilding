import { ShotType, Silhouette } from "@/lib/types";
import { seededRng, range } from "@/lib/seeded-random";
import { mix, contrastInk } from "@/lib/color-utils";
import { silhouettePaths, hardwareGlyph } from "@/lib/silhouette-paths";

const SNOW = "#F7F6F2";
const IVORY = "#EEEAE1";
const CREAM = "#E5DED1";
const STONE = "#AAA195";
const TAUPE = "#87796B";
const ESPRESSO = "#332A25";

interface ArtPlateProps {
  seed: string;
  colorHex: string;
  silhouette: Silhouette;
  shot: ShotType;
  productName: string;
  shotLabel: string;
  location?: string;
  className?: string;
}

const SHOT_LABELS: Record<ShotType, string> = {
  front: "FRONT VIEW — STUDIO",
  back: "BACK VIEW — STUDIO",
  material: "MATERIAL DETAIL",
  hardware: "HARDWARE DETAIL",
  worn: "STUDIO — WORN",
  lifestyle: "LIFESTYLE",
};

function Garment({
  silhouette,
  fill,
  stroke,
  transform,
}: {
  silhouette: Silhouette;
  fill: string;
  stroke: string;
  transform: string;
}) {
  const paths = silhouettePaths(silhouette);
  return (
    <g transform={transform}>
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={fill}
          stroke={stroke}
          strokeWidth={1.4}
          strokeLinejoin="round"
          fillOpacity={0.92}
        />
      ))}
    </g>
  );
}

function Croquis({ ink }: { ink: string }) {
  return (
    <g opacity={0.28} stroke={ink} strokeWidth={1.6} fill="none">
      <circle cx={200} cy={55} r={16} />
      <line x1={200} y1={71} x2={200} y2={88} />
      <path d="M182,428 L173,486" />
      <path d="M218,428 L227,486" />
      <line x1={165} y1={486} x2={181} y2={486} />
      <line x1={219} y1={486} x2={235} y2={486} />
    </g>
  );
}

function CornerMarks({ ink }: { ink: string }) {
  const s = 16;
  const inset = 18;
  const pts: [number, number, number, number][] = [
    [inset, inset, 1, 1],
    [400 - inset, inset, -1, 1],
    [inset, 500 - inset, 1, -1],
    [400 - inset, 500 - inset, -1, -1],
  ];
  return (
    <g stroke={ink} strokeWidth={1} opacity={0.28}>
      {pts.map(([x, y, dx, dy], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2={x + s * dx} y2={y} />
          <line x1={x} y1={y} x2={x} y2={y + s * dy} />
        </g>
      ))}
    </g>
  );
}

function Wordmark({ ink, y = 250 }: { ink: string; y?: number }) {
  return (
    <text
      x={200}
      y={y}
      textAnchor="middle"
      fill={ink}
      opacity={0.06}
      fontFamily="var(--font-serif), serif"
      fontSize={40}
      style={{ letterSpacing: "0.3em" }}
    >
      MONTREVE
    </text>
  );
}

function Caption({
  ink,
  line1,
  line2,
}: {
  ink: string;
  line1: string;
  line2: string;
}) {
  return (
    <g fontFamily="var(--font-sans), sans-serif">
      <text
        x={22}
        y={466}
        fill={ink}
        opacity={0.62}
        fontSize={9.5}
        style={{ letterSpacing: "0.12em" }}
      >
        {line1.toUpperCase()}
      </text>
      <text
        x={22}
        y={480}
        fill={ink}
        opacity={0.42}
        fontSize={8.5}
        style={{ letterSpacing: "0.14em" }}
      >
        {line2.toUpperCase()}
      </text>
    </g>
  );
}

function studioStops(rng: () => number) {
  const top = mix(SNOW, IVORY, range(rng, 0.1, 0.5));
  const bottom = mix(IVORY, CREAM, range(rng, 0.15, 0.55));
  return { top, bottom };
}

function ridgePoints(
  rng: () => number,
  baseY: number,
  amplitude: number,
  segments: number
) {
  const pts: string[] = [`0,500`, `0,${baseY}`];
  for (let i = 0; i <= segments; i++) {
    const x = (400 / segments) * i;
    const y = baseY - rng() * amplitude - (i % 2 === 0 ? amplitude * 0.35 : 0);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  pts.push(`400,${baseY}`, `400,500`);
  return pts.join(" ");
}

export default function ArtPlate({
  seed,
  colorHex,
  silhouette,
  shot,
  productName,
  shotLabel,
  location,
  className,
}: ArtPlateProps) {
  const rng = seededRng(seed);
  const ink = ESPRESSO;
  const garmentStroke = mix(colorHex, ESPRESSO, 0.55);

  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={shotLabel}
    >
      {shot === "front" || shot === "back" || shot === "worn" ? (
        <>
          <defs>
            <linearGradient id={`bg-${seed}`} x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor={studioStops(rng).top} />
              <stop offset="100%" stopColor={studioStops(rng).bottom} />
            </linearGradient>
            <radialGradient id={`vg-${seed}`} cx="50%" cy="42%" r="75%">
              <stop offset="60%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor={ESPRESSO} stopOpacity="0.06" />
            </radialGradient>
            <filter id={`lift-${seed}`} x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor={ESPRESSO} floodOpacity="0.16" />
            </filter>
          </defs>
          <rect width={400} height={500} fill={`url(#bg-${seed})`} />
          <ellipse
            cx={200}
            cy={440}
            rx={110}
            ry={16}
            fill={ESPRESSO}
            opacity={0.07}
          />
          {shot === "worn" && <Croquis ink={ink} />}
          <g filter={`url(#lift-${seed})`}>
            <Garment
              silhouette={silhouette}
              fill={mix(colorHex, ESPRESSO, 0.06)}
              stroke={garmentStroke}
              transform={
                shot === "worn"
                  ? "translate(70,90) scale(1.3)"
                  : shot === "back"
                    ? "translate(335,80) scale(-1.35,1.35)"
                    : "translate(65,80) scale(1.35)"
              }
            />
          </g>
          <rect
            x={10}
            y={10}
            width={380}
            height={480}
            fill="none"
            stroke={STONE}
            strokeOpacity={0.35}
            strokeWidth={1}
          />
          <rect width={400} height={500} fill={`url(#vg-${seed})`} />
          <Wordmark ink={ink} y={70} />
          <CornerMarks ink={ink} />
          <Caption ink={ink} line1={productName} line2={SHOT_LABELS[shot]} />
        </>
      ) : null}

      {shot === "material" ? (
        <>
          <defs>
            <linearGradient id={`mat-${seed}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={mix(colorHex, SNOW, 0.35)} />
              <stop offset="100%" stopColor={mix(colorHex, CREAM, 0.15)} />
            </linearGradient>
            <radialGradient id={`mat-vg-${seed}`} cx="50%" cy="50%" r="72%">
              <stop offset="55%" stopColor="#000" stopOpacity="0" />
              <stop offset="100%" stopColor={ESPRESSO} stopOpacity="0.14" />
            </radialGradient>
          </defs>
          <rect width={400} height={500} fill={`url(#mat-${seed})`} />
          <g opacity={0.8} strokeLinecap="round">
            {Array.from({ length: 320 }).map((_, i) => {
              const x = range(rng, -20, 420);
              const y = range(rng, -20, 520);
              const len = range(rng, 8, 24);
              const angle = range(rng, 18, 30) * (i % 2 === 0 ? 1 : -1);
              const rad = (angle * Math.PI) / 180;
              // Rounded to avoid SSR/CSR hydration mismatches: Math.cos/sin
              // are not guaranteed bit-identical across JS engines.
              const x2 = Math.round((x + len * Math.cos(rad)) * 100) / 100;
              const y2 = Math.round((y + len * Math.sin(rad)) * 100) / 100;
              const tone =
                i % 3 === 0
                  ? mix(colorHex, ESPRESSO, 0.5)
                  : mix(colorHex, SNOW, 0.45);
              return (
                <line
                  key={i}
                  x1={x}
                  y1={y}
                  x2={x2}
                  y2={y2}
                  stroke={tone}
                  strokeWidth={1.4}
                  opacity={range(rng, 0.4, 0.8)}
                />
              );
            })}
          </g>
          <rect width={400} height={500} fill={`url(#mat-vg-${seed})`} />
          <Caption ink={contrastInk(colorHex)} line1={productName} line2={SHOT_LABELS.material} />
        </>
      ) : null}

      {shot === "hardware" ? (
        <>
          <defs>
            <linearGradient id={`hw-${seed}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={mix(colorHex, SNOW, 0.62)} />
              <stop offset="100%" stopColor={mix(colorHex, IVORY, 0.4)} />
            </linearGradient>
          </defs>
          <rect width={400} height={500} fill={`url(#hw-${seed})`} />
          <rect
            x={40}
            y={40}
            width={320}
            height={420}
            fill="none"
            stroke={mix(colorHex, ESPRESSO, 0.4)}
            strokeOpacity={0.4}
            strokeWidth={1.2}
            strokeDasharray="2 6"
          />
          <HardwareGlyph type={hardwareGlyph(silhouette)} tone={mix(TAUPE, ESPRESSO, 0.3)} />
          <Caption ink={ESPRESSO} line1={productName} line2={SHOT_LABELS.hardware} />
        </>
      ) : null}

      {shot === "lifestyle" ? (
        <>
          <defs>
            <linearGradient id={`sky-${seed}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={mix(SNOW, "#ffffff", 0.4)} />
              <stop offset="55%" stopColor={mix(SNOW, STONE, 0.25)} />
              <stop offset="100%" stopColor={IVORY} />
            </linearGradient>
          </defs>
          <rect width={400} height={500} fill={`url(#sky-${seed})`} />
          <circle
            cx={range(rng, 70, 330)}
            cy={range(rng, 60, 110)}
            r={22}
            fill={CREAM}
            opacity={0.55}
          />
          <polygon points={ridgePoints(rng, 300, 55, 5)} fill={mix(STONE, SNOW, 0.3)} opacity={0.9} />
          <polygon points={ridgePoints(rng, 340, 70, 6)} fill={STONE} opacity={0.9} />
          <polygon points={ridgePoints(rng, 385, 55, 7)} fill={TAUPE} opacity={0.95} />
          {Array.from({ length: 5 }).map((_, i) => {
            const x = range(rng, 20, 380);
            const h = range(rng, 20, 34);
            return (
              <polygon
                key={i}
                points={`${x},${390 + h} ${x + 7},${390} ${x + 14},${390 + h}`}
                fill={ESPRESSO}
                opacity={0.75}
              />
            );
          })}
          <rect x={0} y={385} width={400} height={115} fill={IVORY} opacity={0.55} />
          <g transform="translate(150,220) scale(0.5)">
            <Croquis ink={ESPRESSO} />
            <Garment
              silhouette={silhouette}
              fill={colorHex}
              stroke={garmentStroke}
              transform="translate(65,80) scale(1.35)"
            />
          </g>
          <Wordmark ink={ESPRESSO} y={55} />
          <CornerMarks ink={ESPRESSO} />
          <Caption
            ink={ESPRESSO}
            line1={productName}
            line2={location ? `${location} — LIFESTYLE` : SHOT_LABELS.lifestyle}
          />
        </>
      ) : null}
    </svg>
  );
}

function HardwareGlyph({
  type,
  tone,
}: {
  type: "button" | "zip" | "hook" | "stitch" | "lace" | "buckle";
  tone: string;
}) {
  switch (type) {
    case "button":
      return (
        <g transform="translate(200,250)">
          <circle r={46} fill="none" stroke={tone} strokeWidth={3} />
          <circle r={5} cx={-16} cy={-16} fill={tone} />
          <circle r={5} cx={16} cy={-16} fill={tone} />
          <circle r={5} cx={-16} cy={16} fill={tone} />
          <circle r={5} cx={16} cy={16} fill={tone} />
        </g>
      );
    case "zip":
      return (
        <g transform="translate(200,250)" stroke={tone} strokeWidth={3} fill="none">
          <line x1={0} y1={-140} x2={0} y2={140} />
          {Array.from({ length: 18 }).map((_, i) => (
            <line key={i} x1={-8} y1={-130 + i * 15} x2={8} y2={-130 + i * 15} />
          ))}
          <rect x={-14} y={130} width={28} height={20} rx={4} fill={tone} stroke="none" />
        </g>
      );
    case "hook":
      return (
        <g transform="translate(200,250)" stroke={tone} strokeWidth={3} fill="none">
          <rect x={-50} y={-14} width={100} height={28} rx={4} />
          <path d="M40,-6 Q60,-6 60,10 Q60,26 40,26" />
        </g>
      );
    case "lace":
      return (
        <g transform="translate(200,250)" stroke={tone} strokeWidth={3} fill="none">
          <line x1={-60} y1={-120} x2={60} y2={-40} />
          <line x1={60} y1={-120} x2={-60} y2={-40} />
          <line x1={-60} y1={-40} x2={60} y2={40} />
          <line x1={60} y1={-40} x2={-60} y2={40} />
          <line x1={-60} y1={40} x2={60} y2={120} />
          <line x1={60} y1={40} x2={-60} y2={120} />
        </g>
      );
    case "buckle":
      return (
        <g transform="translate(200,250)" stroke={tone} strokeWidth={4} fill="none">
          <rect x={-40} y={-50} width={80} height={100} rx={10} />
          <line x1={-40} y1={0} x2={40} y2={0} />
        </g>
      );
    default:
      return (
        <g transform="translate(200,250)" stroke={tone} strokeWidth={2.5} fill="none">
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              d={`M-90,${-60 + i * 24} Q-45,${-75 + i * 24} 0,${-60 + i * 24} Q45,${-45 + i * 24} 90,${-60 + i * 24}`}
            />
          ))}
        </g>
      );
  }
}
