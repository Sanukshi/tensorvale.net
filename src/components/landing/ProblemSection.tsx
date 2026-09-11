import { motion } from 'framer-motion'

const chains = [
  { model: 'MODEL A', tool: 'Notebook' },
  { model: 'MODEL B', tool: 'Scripts' },
  { model: 'MODEL C', tool: 'Benchmark Tool' },
]

export default function ProblemSection() {
  return (
    <section className="section-pad bg-[#f4f6f9] text-slate-900">
      <div className="container-tv grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-tv-blue">
            The Challenge
          </p>
          <h2 className="heading-lg text-slate-900">
            AI Model Selection Should Be Measured,{' '}
            <span className="text-tv-blue">Not Guessed.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Engineering teams still stitch evaluation together from notebooks, scripts, and
            one-off tools — creating slow, inconsistent decisions.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700 sm:text-base">
            {[
              'Fragmented evaluation across tools',
              'Manual testing and copy-paste results',
              'Inconsistent environments and datasets',
              'Difficult side-by-side comparisons',
              'Hidden performance trade-offs',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tv-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="panel-light relative overflow-hidden p-6"
        >
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
          <div className="relative space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {chains.map((c, i) => (
                <motion.div
                  key={c.model}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-3 text-center"
                >
                  <p className="font-mono text-[10px] font-bold text-slate-800">{c.model}</p>
                  <div className="my-2 flex justify-center">
                    <div className="h-6 w-px bg-slate-300" />
                  </div>
                  <p className="rounded-lg bg-white px-2 py-1.5 text-xs text-slate-500 shadow-sm">
                    {c.tool}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <div className="h-8 w-px bg-gradient-to-b from-slate-300 to-amber-400" />
              <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
                Manual Comparison
              </div>
              <div className="h-8 w-px bg-gradient-to-b from-amber-400 to-red-400" />
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                Slow Decision
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
