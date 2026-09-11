import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { evalModels } from '../data/content'

export default function EvaluationEngine() {
  return (
    <section id="evaluation" className="section-pad scroll-mt-20">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Evaluation Engine"
          title={
            <>
              Evaluate Models With <span className="text-tv-cyan">Confidence</span>
            </>
          }
          description="Configure datasets and metrics, run structured evaluations, and validate results with clear pass/fail signals."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {evalModels.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-surface p-5 sm:p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] text-tv-muted">MODEL</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{m.name}</h3>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-400">
                  Evaluation {m.status}
                </span>
              </div>
              <dl className="space-y-2.5 text-sm">
                <Row label="Dataset" value={m.dataset} />
                <Row label="Evaluation Score" value={`${m.score}%`} accent />
                <Row label="Accuracy" value={`${m.accuracy}%`} />
                <Row label="Latency" value={`${m.latency}ms`} />
              </dl>
              <div className="mt-5">
                <div className="mb-1.5 flex justify-between text-xs text-tv-muted">
                  <span>Progress</span>
                  <span>100%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-tv-blue to-tv-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/contact" className="btn-primary">
            Explore Evaluation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-tv-muted">{label}</dt>
      <dd className={accent ? 'font-mono font-semibold text-tv-cyan' : 'font-mono text-white'}>{value}</dd>
    </div>
  )
}
