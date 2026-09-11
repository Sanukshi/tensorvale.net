import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Gauge, FlaskConical, GitCompare, LineChart } from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter'

const stats = [
  { icon: FlaskConical, value: 148, suffix: '+', label: 'Models Evaluated' },
  { icon: Gauge, value: 1284, suffix: '+', label: 'Benchmark Runs' },
  { icon: LineChart, value: 92.6, suffix: '%', label: 'Avg Eval Score', decimals: 1 },
  { icon: GitCompare, value: 24, suffix: '', label: 'Active Experiments' },
]

const checks = [
  'Repeatable evaluation workflows',
  'Side-by-side model comparison',
  'Latency & throughput benchmarking',
  'Production-readiness signals',
]

export default function AboutStats() {
  return (
    <section id="platform" className="section-pad scroll-mt-24 bg-tv-beige">
      <div className="container-tv grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="frame-graphic order-2 bg-white p-3 shadow-soft lg:order-1"
        >
          <div className="rounded-2xl bg-tv-navy p-5 text-white sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-tv-orange">
              TensorVale Core
            </p>
            <h3 className="mt-2 font-display text-xl font-bold">Evaluation Command Center</h3>
            <div className="mt-5 space-y-3">
              {['Ingest Models', 'Configure Metrics', 'Run Experiments', 'Select Winner'].map(
                (step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tv-orange/20 font-mono text-xs text-tv-orange">
                      0{i + 1}
                    </span>
                    <div className="flex-1 rounded-xl bg-white/5 px-3 py-2 text-sm">{step}</div>
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <p className="eyebrow">About TensorVale</p>
          <h2 className="heading-lg mt-3">
            One Platform for Systematic{' '}
            <span className="text-tv-orange">AI Model Evaluation</span>
          </h2>
          <p className="body-muted mt-4">
            TensorVale helps AI engineering teams stop guessing and start measuring — with
            evaluation, experimentation, benchmarking, and comparison in one place.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="rounded-2xl border border-tv-line bg-white p-4 shadow-sm">
                  <Icon className="mb-2 h-5 w-5 text-tv-orange" />
                  <p className="font-display text-2xl font-bold text-tv-navy">
                    <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </p>
                  <p className="mt-1 text-xs text-tv-muted">{s.label}</p>
                </div>
              )
            })}
          </div>

          <ul className="mt-6 space-y-2.5">
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-sm text-tv-navy">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-tv-orange/15">
                  <Check className="h-3 w-3 text-tv-orange" />
                </span>
                {c}
              </li>
            ))}
          </ul>

          <Link to="/#services" className="btn-outline mt-8">
            Explore Platform <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
