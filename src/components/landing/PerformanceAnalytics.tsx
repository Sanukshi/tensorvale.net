import { motion } from 'framer-motion'

const panels = [
  { label: 'Latency', value: '42ms', delta: '↓ 12.4%', good: true },
  { label: 'Throughput', value: '1.24K req/s', delta: '↑ 18.7%', good: true },
  { label: 'GPU Utilization', value: '74%', delta: 'Optimized', good: true },
]

export default function PerformanceAnalytics() {
  return (
    <section className="section-pad bg-tv-ink">
      <div className="container-tv grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-3">Performance Analytics</p>
          <h2 className="heading-lg">
            See What Your Models Are <span className="text-tv-cyan">Really Doing.</span>
          </h2>
          <p className="body-muted mt-5">
            Understand model behavior across latency, throughput, accuracy, and resource
            utilization — before you commit to production.
          </p>
        </motion.div>

        <div className="relative">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
            viewBox="0 0 400 280"
            aria-hidden
          >
            <motion.path
              d="M0,200 L50,180 L100,190 L150,140 L200,150 L250,100 L300,110 L350,70 L400,80"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3 }}
            />
          </svg>
          <div className="relative space-y-3">
            {panels.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="panel flex items-center justify-between p-5"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-tv-muted">{p.label}</p>
                  <p className="mt-1 font-display text-2xl font-bold">{p.value}</p>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
                  {p.delta}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
