import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { inputs, outputs } from '../data/content'

export default function PlatformOverview() {
  return (
    <section id="platform" className="section-pad scroll-mt-20">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Platform"
          title={
            <>
              One Platform for{' '}
              <span className="text-tv-cyan">AI Model Evaluation</span>
            </>
          }
          description="TensorVale brings model evaluation, experimentation, benchmarking, comparison, and result tracking into one engineering environment."
        />

        {/* Asymmetrical G.O.A.T.-style layout */}
        <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="round-stage overflow-hidden border border-white/10 bg-tv-surface p-6 shadow-lift sm:p-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-tv-cyan">Inputs</p>
            <ul className="mt-4 space-y-2.5">
              {inputs.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 px-3 py-2.5 text-sm text-white/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-tv-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="round-stage relative overflow-hidden border border-white/10 bg-gradient-to-b from-tv-elevated to-tv-navy p-6 shadow-soft sm:p-8"
          >
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
            <div className="relative">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-3 h-8 w-px bg-gradient-to-b from-transparent to-tv-cyan" />
                <div className="rounded-2xl border border-tv-cyan/40 bg-tv-cyan/10 px-5 py-5 shadow-glow-sm">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-tv-cyan">
                    TensorVale
                  </p>
                  <p className="mt-1 font-display text-xl font-bold sm:text-2xl">Evaluation Engine</p>
                </div>
                <div className="mx-auto mt-3 h-8 w-px bg-gradient-to-b from-tv-cyan to-transparent" />
              </div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-tv-muted">
                Outputs
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {outputs.map((o, i) => (
                  <motion.div
                    key={o}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.04 }}
                    className="rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-center text-xs font-medium text-white/90"
                  >
                    {o}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
