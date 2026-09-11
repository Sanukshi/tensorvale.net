const items = [
  'Model Evaluation',
  'Experiment Tracking',
  'Benchmark Analytics',
  'Latency & Throughput',
  'Model Comparison',
  'Production Readiness',
  'GPU Utilization',
  'Evaluation History',
]

export default function TrustMarquee() {
  const loop = [...items, ...items]
  return (
    <section className="relative border-y border-tv-line bg-tv-card/60 py-5 overflow-hidden" aria-label="Platform focus areas">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-tv-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-tv-bg to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
        {loop.map((label, i) => (
          <span key={`${label}-${i}`} className="inline-flex items-center gap-3 text-sm font-medium text-tv-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-tv-cyan" />
            {label}
          </span>
        ))}
      </div>
    </section>
  )
}
