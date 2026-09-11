import { motion } from 'framer-motion'
import AnimatedCounter from '../ui/AnimatedCounter'

const stats = [
  { value: 148, suffix: '+', label: 'Models Evaluated' },
  { value: 1284, suffix: '+', label: 'Benchmark Runs' },
  { value: 24, suffix: '', label: 'Active Experiments' },
  { value: 92.6, suffix: '%', label: 'Average Evaluation Score', decimals: 1 },
]

export default function KeyMetrics() {
  return (
    <section className="section-pad bg-tv-black">
      <div className="container-tv grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="text-center"
          >
            <p className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-tv-muted sm:text-xs">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
