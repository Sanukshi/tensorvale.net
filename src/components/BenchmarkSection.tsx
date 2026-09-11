import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { comparisonRows } from '../data/content'
import { cn } from '../lib/utils'

export default function BenchmarkSection() {
  return (
    <section id="benchmarks" className="section-pad scroll-mt-20">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Benchmarking"
          title={
            <>
              Benchmark Models Across <span className="text-tv-cyan">Real Workloads</span>
            </>
          }
          description="Surface latency, throughput, accuracy, and GPU trade-offs before you commit to production."
        />

        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-3xl border border-white/[0.08] bg-tv-surface"
          >
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] text-left text-xs uppercase tracking-wider text-tv-muted">
                  <th className="px-5 py-3.5 font-medium">Metric</th>
                  <th className="px-5 py-3.5 font-medium">Model A</th>
                  <th className="px-5 py-3.5 font-medium">Model B</th>
                  <th className="px-5 py-3.5 font-medium">Model C</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.metric} className="border-b border-white/[0.04]">
                    <td className="px-5 py-3.5 text-tv-muted">{row.metric}</td>
                    {(['a', 'b', 'c'] as const).map((key) => (
                      <td
                        key={key}
                        className={cn(
                          'px-5 py-3.5 font-mono',
                          row.best === key ? 'text-tv-cyan' : 'text-white/80',
                        )}
                      >
                        <span className={cn(row.best === key && 'rounded-md bg-tv-cyan/10 px-2 py-0.5')}>
                          {row[key]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/[0.08] bg-tv-surface p-5"
          >
            <p className="mb-4 text-sm font-medium">Performance Trend</p>
            <svg viewBox="0 0 320 160" className="h-40 w-full" aria-label="Performance line chart">
              <defs>
                <linearGradient id="benchArea" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[40, 80, 120].map((y) => (
                <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(255,255,255,0.06)" />
              ))}
              <path
                d="M0,110 L53,95 L106,100 L159,70 L212,75 L265,45 L320,50 L320,160 L0,160 Z"
                fill="url(#benchArea)"
              />
              <motion.path
                d="M0,110 L53,95 L106,100 L159,70 L212,75 L265,45 L320,50"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />
              {/* Bars */}
              {[
                [40, 90],
                [100, 70],
                [160, 100],
                [220, 60],
                [280, 80],
              ].map(([x, h], i) => (
                <motion.rect
                  key={i}
                  x={x}
                  y={160 - h}
                  width="18"
                  height={h}
                  rx="4"
                  fill="rgba(59,130,246,0.35)"
                  initial={{ height: 0, y: 160 }}
                  whileInView={{ height: h, y: 160 - h }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                />
              ))}
            </svg>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              {['Accuracy', 'Latency', 'Throughput'].map((l) => (
                <div key={l} className="rounded-xl border border-white/10 bg-black/25 py-2 text-tv-muted">
                  {l}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
