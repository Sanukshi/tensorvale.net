import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const rows = [
  { id: 'EXP-024', status: 'Running', color: 'text-tv-cyan' },
  { id: 'EXP-023', status: 'Completed', color: 'text-emerald-400' },
  { id: 'EXP-022', status: 'Completed', color: 'text-emerald-400' },
  { id: 'EXP-021', status: 'Failed', color: 'text-red-400' },
]

export default function FeatureExperimentation() {
  return (
    <section id="experiments" className="section-pad scroll-mt-24 bg-tv-navy">
      <div className="container-tv grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel overflow-hidden"
        >
          <div className="border-b border-white/10 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-tv-cyan">Experiments</p>
          </div>
          <div className="divide-y divide-white/5">
            {rows.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center justify-between px-4 py-3.5"
              >
                <span className="font-mono text-sm text-white">{r.id}</span>
                <span className={cn('text-xs font-medium', r.color)}>{r.status}</span>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 border-t border-white/10 p-4 sm:grid-cols-5">
            {['Model', 'Dataset', 'Configuration', 'Version', 'Status'].map((f) => (
              <div key={f} className="rounded-lg border border-white/10 bg-black/30 px-2 py-2 text-center text-[10px] text-tv-muted">
                {f}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-3">02 / Experimentation</p>
          <h3 className="heading-lg">
            Every Experiment. Every Result.{' '}
            <span className="text-tv-cyan">One Place.</span>
          </h3>
          <p className="body-muted mt-5">
            Create controlled experiments, version configurations, run evaluations, and keep a
            complete history of every result — so nothing is lost between iterations.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/80">
            {[
              'Experiment creation & configuration',
              'Model / dataset / version tracking',
              'Runtime status and scoring',
              'Full result history',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-tv-cyan" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
