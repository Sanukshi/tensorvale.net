import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { cn } from '../lib/utils'

const rows = [
  { metric: 'Accuracy', a: '94.8%', b: '96.2%', c: '97.1%', best: 'c' },
  { metric: 'Latency', a: '32ms', b: '48ms', c: '41ms', best: 'a' },
  { metric: 'Throughput', a: '1.4K/s', b: '1.1K/s', c: '1.3K/s', best: 'a' },
  { metric: 'GPU Usage', a: '61%', b: '74%', c: '68%', best: 'a' },
  { metric: 'Overall', a: '91.2', b: '93.6', c: '95.1', best: 'c' },
]

export default function FeatureComparison() {
  return (
    <section id="compare" className="section-pad scroll-mt-20">
      <div className="container-tv grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 overflow-x-auto rounded-3xl border border-white/10 bg-tv-surface shadow-soft lg:order-1"
        >
          <table className="w-full min-w-[420px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs text-tv-muted">
                <th className="px-4 py-3 font-medium">Metric</th>
                <th className="px-4 py-3 font-medium">Model A</th>
                <th className="px-4 py-3 font-medium">Model B</th>
                <th className="px-4 py-3 font-medium">
                  Model C <Star className="ml-1 inline h-3 w-3 fill-tv-cyan text-tv-cyan" />
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.metric} className="border-b border-white/5">
                  <td className="px-4 py-3 text-tv-muted">{r.metric}</td>
                  {(['a', 'b', 'c'] as const).map((k) => (
                    <td
                      key={k}
                      className={cn(
                        'px-4 py-3 font-mono',
                        r.best === k ? 'text-tv-cyan' : 'text-white/80',
                      )}
                    >
                      <span className={cn(r.best === k && 'rounded-md bg-tv-cyan/10 px-1.5 py-0.5')}>
                        {r[k]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <p className="label-eyebrow mb-3">04 / Model Comparison</p>
          <h3 className="heading-lg">
            Compare Models. Make{' '}
            <span className="text-tv-cyan">Better Decisions.</span>
          </h3>
          <p className="body-muted mt-5">
            TensorVale surfaces performance trade-offs across accuracy, latency, throughput, and
            resource cost — so teams select the most suitable configuration with evidence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
