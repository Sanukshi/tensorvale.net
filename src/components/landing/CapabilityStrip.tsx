const items = [
  'MODEL EVALUATION',
  'EXPERIMENT TRACKING',
  'BENCHMARKING',
  'PERFORMANCE ANALYSIS',
  'MODEL COMPARISON',
]

export default function CapabilityStrip() {
  return (
    <section className="border-y border-white/10 bg-tv-charcoal/90">
      <div className="container-tv flex flex-wrap items-center justify-center gap-x-4 gap-y-3 py-5 sm:justify-between">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-4">
            <span className="font-mono text-[11px] font-medium tracking-wider text-white/80 sm:text-xs">
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="hidden h-1 w-1 rounded-full bg-tv-cyan sm:inline-block" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
