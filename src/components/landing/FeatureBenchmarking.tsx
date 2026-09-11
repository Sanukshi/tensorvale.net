import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const filters = ['Accuracy', 'Latency', 'Throughput', 'GPU', 'Memory']

const points = [
  { name: 'A', x: 28, y: 62, color: '#3B82F6' },
  { name: 'B', x: 58, y: 38, color: '#6366F1' },
  { name: 'C', x: 72, y: 28, color: '#22D3EE' },
]

export default function FeatureBenchmarking() {
  const [active, setActive] = useState('Accuracy')

  return (
    <section id="benchmarks" className="section-pad scroll-mt-24 bg-[#f4f6f9] text-slate-900">
      <div className="container-tv grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-xs text-tv-blue">03 / Performance Benchmarking</p>
          <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Benchmark Before You Deploy.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Measure model performance across workloads and environments before production — latency,
            throughput, GPU, memory, and composite scores.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Latency', 'Throughput', 'GPU utilization', 'Memory usage', 'Performance score'].map(
              (m) => (
                <span
                  key={m}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {m}
                </span>
              ),
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-200 bg-slate-900 p-5 text-white shadow-xl"
        >
          <div className="mb-4 flex flex-wrap gap-1.5">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  'rounded-full px-3 py-1 text-[11px] font-medium transition',
                  active === f ? 'bg-tv-cyan text-slate-900' : 'bg-white/10 text-slate-300 hover:bg-white/15',
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="mb-3 text-sm font-medium text-slate-300">Accuracy vs Latency</p>
          <svg viewBox="0 0 100 80" className="h-48 w-full" aria-label="Accuracy vs Latency chart">
            <line x1="10" y1="70" x2="95" y2="70" stroke="rgba(255,255,255,0.15)" />
            <line x1="10" y1="10" x2="10" y2="70" stroke="rgba(255,255,255,0.15)" />
            <text x="48" y="78" fill="#8b95a8" fontSize="4" textAnchor="middle">
              Latency →
            </text>
            <text
              x="4"
              y="42"
              fill="#8b95a8"
              fontSize="4"
              transform="rotate(-90 4 42)"
            >
              Accuracy
            </text>
            {points.map((p, i) => (
              <motion.g key={p.name}>
                <motion.circle
                  cx={p.x}
                  cy={p.y}
                  r="3.5"
                  fill={p.color}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                />
                <text x={p.x + 5} y={p.y + 1.5} fill="#fff" fontSize="4">
                  Model {p.name}
                </text>
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
