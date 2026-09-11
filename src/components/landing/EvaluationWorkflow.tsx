import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const steps = [
  { id: '01', title: 'Model Ingestion' },
  { id: '02', title: 'Dataset Selection' },
  { id: '03', title: 'Experiment Configuration' },
  { id: '04', title: 'Model Evaluation' },
  { id: '05', title: 'Benchmarking' },
  { id: '06', title: 'Analysis' },
  { id: '07', title: 'Model Selection' },
]

export default function EvaluationWorkflow() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % steps.length), 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section-pad overflow-hidden bg-tv-ink">
      <div className="container-tv">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg mx-auto max-w-3xl text-center"
        >
          From Model Input to <span className="text-tv-cyan">Production Decision.</span>
        </motion.h2>

        {/* Desktop horizontal */}
        <div className="mt-12 hidden lg:block">
          <div className="relative flex items-start justify-between gap-2">
            <div className="absolute left-8 right-8 top-7 h-px bg-white/10" />
            <motion.div
              className="absolute left-8 top-7 h-px bg-gradient-to-r from-tv-cyan to-tv-blue"
              animate={{ width: `${(active / (steps.length - 1)) * 85}%` }}
              transition={{ duration: 0.4 }}
            />
            {steps.map((s, i) => (
              <div key={s.id} className="relative z-10 flex w-[12%] flex-col items-center text-center">
                <div
                  className={cn(
                    'flex h-14 w-14 items-center justify-center rounded-2xl border font-mono text-xs transition',
                    i <= active
                      ? 'border-tv-cyan/50 bg-tv-cyan/15 text-tv-cyan shadow-glow-sm'
                      : 'border-white/10 bg-tv-surface text-tv-muted',
                  )}
                >
                  {s.id}
                </div>
                <p className="mt-3 text-xs font-medium text-white/85">{s.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="relative mt-10 space-y-3 lg:hidden">
          <div className="absolute bottom-4 left-[27px] top-4 w-px bg-white/10" />
          {steps.map((s, i) => (
            <div key={s.id} className="relative flex gap-4">
              <div
                className={cn(
                  'relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border font-mono text-xs',
                  i <= active
                    ? 'border-tv-cyan/50 bg-tv-cyan/15 text-tv-cyan'
                    : 'border-white/10 bg-tv-surface text-tv-muted',
                )}
              >
                {s.id}
              </div>
              <div className="rounded-2xl border border-white/10 bg-tv-surface px-4 py-3">
                <p className="text-sm font-medium">{s.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
