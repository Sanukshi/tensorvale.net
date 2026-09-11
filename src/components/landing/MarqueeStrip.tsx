const items = [
  'MODEL EVALUATION',
  'EXPERIMENT TRACKING',
  'BENCHMARKING',
  'PERFORMANCE ANALYSIS',
  'MODEL COMPARISON',
  'PRODUCTION READINESS',
]

export default function MarqueeStrip() {
  const loop = [...items, ...items]
  return (
    <section className="overflow-hidden bg-tv-navy py-4">
      <div className="flex w-max animate-marquee items-center gap-8">
        {loop.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-sm font-semibold tracking-wide text-tv-orange sm:text-base">
              {item}
            </span>
            <span className="text-tv-orange" aria-hidden>
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
