import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  'Model testing',
  'Evaluation datasets',
  'Metric configuration',
  'Automated evaluation',
  'Result validation',
]

export default function FeatureEvaluation() {
  return (
    <section id="evaluation" className="section-pad scroll-mt-24 bg-[#f4f6f9] text-slate-900">
      <div className="container-tv mb-12 text-center lg:mb-16">
        <h2 className="heading-lg text-slate-900">
          Everything You Need to{' '}
          <span className="text-tv-blue">Evaluate AI Models.</span>
        </h2>
      </div>

      <div className="container-tv grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-xs text-tv-blue">01 / MODEL EVALUATION</p>
          <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Measure Model Quality With Confidence.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Evaluate AI models against structured datasets and configurable evaluation metrics —
            with reproducible runs your whole team can trust.
          </p>
          <ul className="mt-6 space-y-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-tv-cyan/20">
                  <Check className="h-3 w-3 text-tv-blue" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-200 bg-slate-900 p-5 text-white shadow-xl sm:p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-tv-cyan">
            Model Evaluation
          </p>
          <div className="mt-5 space-y-4">
            {[
              { l: 'Accuracy', v: 96.8 },
              { l: 'Quality', v: 94.2 },
              { l: 'Consistency', v: 91.7 },
            ].map((m, i) => (
              <div key={m.l}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-slate-400">{m.l}</span>
                  <span className="font-mono text-tv-cyan">{m.v}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-tv-blue to-tv-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="mb-1.5 flex justify-between text-xs text-slate-400">
              <span>Evaluation Progress</span>
              <span>94%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/10 font-mono tracking-tighter text-tv-cyan">
              <motion.div
                className="h-full rounded-full bg-tv-cyan"
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
