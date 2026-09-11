import { motion } from 'framer-motion'
import { statusColor } from '../data/content'

const rows = [
  { id: 'EXP-024', status: 'Running' },
  { id: 'EXP-023', status: 'Completed' },
  { id: 'EXP-022', status: 'Completed' },
  { id: 'EXP-021', status: 'Failed' },
]

export default function FeatureExperimentation() {
  return (
    <section id="experiments" className="section-pad scroll-mt-20">
      <div className="container-tv grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel overflow-hidden shadow-soft"
        >
          <div className="border-b border-white/10 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-tv-cyan">Experiments</p>
          </div>
          <div className="divide-y divide-white/5">
            {rows.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between px-4 py-3.5"
              >
                <span className="font-mono text-sm text-white">{r.id}</span>
                <span className={`text-xs font-medium ${statusColor(r.status)}`}>{r.status}</span>
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

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="label-eyebrow mb-3">02 / Experimentation</p>
          <h3 className="heading-lg">
            Every Experiment. Every Result.{' '}
            <span className="text-tv-cyan">One Place.</span>
          </h3>
          <p className="body-muted mt-5">
            Create controlled experiments, configure models and datasets, version every run, and
            track results with full reproducibility — so nothing is lost between iterations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
