import { motion } from 'framer-motion'

const fragments = [
  { model: 'MODEL A', tool: 'Notebook' },
  { model: 'MODEL B', tool: 'Scripts' },
  { model: 'MODEL C', tool: 'Benchmark Tool' },
]

export default function ProblemSection() {
  return (
    <section className="section-pad section-light">
      <div className="container-tv grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="label-eyebrow-dark mb-3">The Challenge</p>
          <h2 className="heading-lg text-slate-900">
            AI Model Selection Should Be Measured,{' '}
            <span className="text-tv-blue">Not Guessed.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Teams struggle with fragmented evaluation, manual testing, inconsistent environments,
            difficult comparisons, and hidden performance trade-offs — slowing every production
            decision.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
            {[
              'Fragmented evaluation across tools',
              'Manual testing without versioning',
              'Inconsistent environments',
              'Difficult side-by-side comparisons',
              'Hidden latency and cost trade-offs',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tv-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel-light relative overflow-hidden p-6"
        >
          <p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-slate-400">
            Fragmented Workflows
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {fragments.map((f, i) => (
              <motion.div
                key={f.model}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-3 text-center"
              >
                <p className="font-mono text-xs font-semibold text-slate-800">{f.model}</p>
                <div className="mx-auto my-2 h-5 w-px bg-slate-300" />
                <p className="text-xs text-slate-500">{f.tool}</p>
              </motion.div>
            ))}
          </div>
          <div className="my-4 flex justify-center">
            <div className="h-8 w-px bg-gradient-to-b from-slate-300 to-tv-cyan" />
          </div>
          <div className="mx-auto max-w-xs rounded-2xl border border-amber-300/50 bg-amber-50 px-4 py-3 text-center">
            <p className="text-sm font-semibold text-amber-800">Manual Comparison</p>
            <div className="mx-auto my-2 h-4 w-px bg-amber-300" />
            <p className="text-xs font-medium text-amber-700">Slow Decision</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
