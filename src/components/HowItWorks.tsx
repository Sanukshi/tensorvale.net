import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { howSteps } from '../data/content'

export default function HowItWorks() {
  return (
    <section className="section-pad bg-tv-ink">
      <div className="container-tv">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-tv-cyan">
              How it works
            </p>
            <h2 className="heading-lg">
              From Model Testing to{' '}
              <span className="text-tv-cyan">Production Confidence</span>
            </h2>
            <div className="mt-8 space-y-1">
              {howSteps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex gap-4 border-b border-white/10 py-4"
                >
                  <span className="font-mono text-sm text-tv-cyan">{step.id}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                      <Play className="h-3 w-3 text-tv-muted opacity-0 transition group-hover:opacity-100" />
                    </div>
                    <p className="mt-1 text-sm text-tv-muted">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tall visual card — G.O.A.T. style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="round-stage overflow-hidden border border-white/10 bg-tv-surface shadow-soft">
              <div className="relative aspect-[4/5] bg-gradient-to-b from-[#12203a] to-[#0a1018] p-5">
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-25" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-mono text-[10px] text-tv-cyan">WORKFLOW VIEW</p>
                    <span className="rounded-full bg-tv-cyan px-2.5 py-1 text-[10px] font-bold text-tv-ink">
                      5 STEPS
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-3">
                    {howSteps.map((s, i) => (
                      <div key={s.id} className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-tv-cyan/40 bg-tv-cyan/10 font-mono text-xs text-tv-cyan">
                          {s.id}
                        </div>
                        <div className="flex-1 rounded-xl border border-white/10 bg-black/30 px-3 py-2">
                          <p className="text-sm font-medium text-white">{s.title}</p>
                        </div>
                        {i < howSteps.length - 1 && null}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary mt-6 w-full">
                    Start Evaluating <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Offset accent */}
            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full border border-tv-cyan/30 bg-tv-cyan/10 blur-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
