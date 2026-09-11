import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { experiments, statusColor } from '../data/content'
import { cn } from '../lib/utils'

const flow = [
  'Create Experiment',
  'Select Model',
  'Select Dataset',
  'Configure Metrics',
  'Run Evaluation',
  'Analyze Results',
]

export default function ExperimentSection() {
  return (
    <section id="experiments" className="section-pad bg-tv-navy/60 scroll-mt-20">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Experimentation"
          title={
            <>
              Run Controlled <span className="text-tv-cyan">AI Experiments</span>
            </>
          }
          description="Version every configuration, track every run, and keep a complete history of evaluation evidence."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {flow.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className="rounded-full border border-white/10 bg-tv-surface px-3 py-1.5 text-xs text-white/85">
                {s}
              </span>
              {i < flow.length - 1 && <span className="hidden text-tv-muted sm:inline">↓</span>}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/[0.08] bg-tv-surface shadow-lift"
        >
          <div className="border-b border-white/[0.06] px-4 py-3 sm:px-5">
            <p className="text-sm font-medium">Experiment Management</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-xs uppercase tracking-wider text-tv-muted">
                  <th className="px-4 py-3 font-medium sm:px-5">Experiment ID</th>
                  <th className="px-4 py-3 font-medium">Model Version</th>
                  <th className="px-4 py-3 font-medium">Dataset</th>
                  <th className="px-4 py-3 font-medium">Config</th>
                  <th className="px-4 py-3 font-medium">Runtime</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Score</th>
                </tr>
              </thead>
              <tbody>
                {experiments.map((e, i) => (
                  <motion.tr
                    key={e.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3.5 font-mono text-tv-cyan sm:px-5">{e.id}</td>
                    <td className="px-4 py-3.5 text-white">{e.model}</td>
                    <td className="px-4 py-3.5 text-tv-muted">{e.dataset}</td>
                    <td className="px-4 py-3.5 font-mono text-tv-muted">{e.config}</td>
                    <td className="px-4 py-3.5 font-mono text-tv-muted">{e.runtime}</td>
                    <td className={cn('px-4 py-3.5 font-medium', statusColor(e.status))}>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {e.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 font-mono">
                      {e.score ? `${e.score}%` : '—'}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
