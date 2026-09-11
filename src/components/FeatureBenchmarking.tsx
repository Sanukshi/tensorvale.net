import { motion } from 'framer-motion'

const filters = ['Accuracy', 'Latency', 'Throughput', 'GPU', 'Memory']
const points = [
  { name: 'A', x: 28, y: 62, acc: 94.8, lat: 32 },
  { name: 'B', x: 58, y: 38, acc: 96.2, lat: 48 },
  { name: 'C', x: 72, y: 28, acc: 97.1, lat: 41 },
]

export default function FeatureBenchmarking() {
  return (
    <section id="benchmarks" className="section-pad section-light scroll-mt-20">
      <div className="container-tv grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="label-eyebrow-dark mb-3">03 / Performance Benchmarking</p>
          <h3 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
            Benchmark Before You Deploy.
          </h3>
          <p className="mt-4 leading-relaxed text-slate-600">
            Measure model performance across workloads and environments before production.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-slate-700">
            {['Latency', 'Throughput', 'GPU utilization', 'Memory usage', 'Performance score'].map(
              (m) => (
                <li key={m} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-tv-blue" />
                  {m}
                </li>
              ),
            )}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lift sm:p-6"
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {filters.map((f, i) => (
              <span
                key={f}
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  i === 0 ? 'bg-tv-cyan text-slate-900' : 'border border-slate-200 text-slate-500'
                }`}
              >
                {f}
              </span>
            ))}
          </div>
          <p className="mb-3 text-sm font-semibold text-slate-800">Accuracy vs Latency</p>
          <svg viewBox="0 0 100 80" className="h-48 w-full" aria-label="Accuracy vs latency scatter">
            <line x1="10" y1="70" x2="95" y2="70" stroke="#cbd5e1" strokeWidth="0.4" />
            <line x1="10" y1="70" x2="10" y2="8" stroke="#cbd5e1" strokeWidth="0.4" />
            <text x="50" y="78" textAnchor="middle" className="fill-slate-400 text-[3px]">
              Latency →
            </text>
            <text x="4" y="40" textAnchor="middle" className="fill-slate-400 text-[3px]" transform="rotate(-90 4 40)">
              Accuracy
            </text>
            {points.map((p, i) => (
              <g key={p.name}>
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r="3.5"
                  fill={i === 2 ? '#22D3EE' : '#3B82F6'}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                />
                <text x={p.x} y={p.y - 5} textAnchor="middle" className="fill-slate-700 text-[3px] font-bold">
                  {p.name}
                </text>
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
