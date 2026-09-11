import { motion } from 'framer-motion'
import { trustItems } from '../data/content'

export default function CapabilityStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-tv-navy/80 py-12 sm:py-14">
      <div className="container-tv">
        <p className="mb-8 text-center font-display text-lg font-semibold text-white sm:text-xl">
          Built for Systematic <span className="text-tv-cyan">AI Evaluation</span>
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-surface p-5"
            >
              <p className="font-mono text-xs text-tv-cyan">{item.id}</p>
              <h3 className="mt-2 font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm text-tv-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
