import { motion } from 'framer-motion'

const principles = [
  { id: '01', title: 'REPEATABLE', text: 'Standardize evaluation workflows.' },
  { id: '02', title: 'COMPARABLE', text: 'Compare models using consistent metrics.' },
  { id: '03', title: 'OBSERVABLE', text: 'Track experiments and performance.' },
  { id: '04', title: 'DATA-DRIVEN', text: 'Make decisions using measurable evidence.' },
]

export default function WhyTensorVale() {
  return (
    <section className="section-pad bg-tv-ink">
      <div className="container-tv">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg mb-12 text-center sm:mb-16"
        >
          Built for Better <span className="text-tv-cyan">AI Decisions.</span>
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border-t border-tv-cyan/40 pt-6"
            >
              <p className="font-mono text-sm text-tv-cyan">{p.id}</p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-tv-muted">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
