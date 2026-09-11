import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  'Model testing',
  'Evaluation datasets',
  'Metric configuration',
  'Automated evaluation',
  'Result validation',
]

const metrics = [
  { label: 'Accuracy', value: 96.8 },
  { label: 'Quality', value: 94.2 },
  { label: 'Consistency', value: 91.7 },
]

export default function FeatureEvaluation() {
  return (
    <section id="evaluation" className="section-pad section-light scroll-mt-20">
      <div className="container-tv mb-10 text-center lg:mb-14">
        <h2 className="heading-lg text-slate-900">
          Everything You Need to{' '}
          <span className="text-tv-blue">Evaluate AI Models.</span>
        </h2>
      </div>

      <div className="container-tv grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="label-eyebrow-dark mb-3">01 / Model Evaluation</p>
          <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
            Measure Model Quality With Confidence.
          </h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Evaluate AI models against structured datasets and configurable evaluation metrics.
          </p>
          <ul className="mt-6 space-y-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                <Check className="h-4 w-4 text-tv-blue" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-200 bg-slate-900 p-5 text-white shadow-lift sm:p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-tv-cyan">Model Evaluation</p>
          <div className="mt-5 space-y-4">
            {metrics.map((m, i) => (
              <div key={m.label}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-slate-400">{m.label}</span>
                  <span className="font-mono text-tv-cyan">{m.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-tv-blue to-tv-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="mb-2 text-xs text-slate-400">Evaluation Progress</p>
            <div className="h-3 overflow-hidden rounded-full bg-white/10 font-mono text-[10px] leading-3 tracking-widest text-tv-cyan">
              <motion.div
                className="flex h-full items-center justify-end rounded-full bg-tv-cyan/80 pr-2 text-slate-900"
                initial={{ width: 0 }}
                whileInView={{ width: '94%' }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
