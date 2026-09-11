/**
 * Small reusable SVG graphics for capability / pricing cards.
 */
export function CapabilityArt({ tone = 0 }: { tone?: number }) {
  const fills = ['#B58863', '#D3C3B9', '#A79E9C', '#3D4D55', '#B58863']
  const a = fills[tone % fills.length]
  return (
    <svg viewBox="0 0 320 140" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={`cg${tone}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={a} stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10232A" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect width="320" height="140" fill={`url(#cg${tone})`} />
      <circle cx="250" cy="40" r="48" fill={a} opacity="0.18" />
      <circle cx="60" cy="100" r="36" fill={a} opacity="0.12" />
      <rect x="28" y="36" width="90" height="14" rx="7" fill={a} opacity="0.55" />
      <rect x="28" y="58" width="130" height="10" rx="5" fill="#D3C3B9" opacity="0.22" />
      <rect x="28" y="76" width="100" height="10" rx="5" fill="#D3C3B9" opacity="0.14" />
      <path
        d="M180 95 L210 70 L235 82 L270 48"
        fill="none"
        stroke={a}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="270" cy="48" r="5" fill={a} />
    </svg>
  )
}

export function MetricSpark({ values = [40, 55, 48, 70, 62, 85, 78, 92] }: { values?: number[] }) {
  return (
    <div className="flex h-12 items-end gap-1" aria-hidden>
      {values.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-tv-cyan/80"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}
