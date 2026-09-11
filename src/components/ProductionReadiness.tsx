import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { readiness } from '../data/content'

export default function ProductionReadiness() {
  return (
    <section className="section-pad bg-tv-navy/50">
      <div className="container-tv grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          align="left"
          eyebrow="Production readiness"
          title={
            <>
              From Evaluation to{' '}
              <span className="text-tv-cyan">Production Confidence</span>
            </>
          }
          description="Use evaluation results to identify models and configurations suitable for production workloads — with measurable readiness indicators."
          className="mb-0"
        />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/[0.08] bg-tv-surface p-6 shadow-lift"
        >
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm text-tv-muted">Overall Readiness</p>
              <p className="font-display text-4xl font-bold">94%</p>
            </div>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
              Production ready
            </span>
          </div>
          <div className="space-y-4">
            {readiness.map((b, i) => (
              <div key={b.label}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="text-tv-muted">{b.label}</span>
                  <span className="font-mono">{b.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-tv-blue to-tv-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.07 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-primary mt-8 w-full">
            Evaluate Your Models <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
