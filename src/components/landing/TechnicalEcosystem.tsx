import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'

const tech = ['NeMo', 'TensorRT', 'Triton', 'NIM']

export default function TechnicalEcosystem() {
  return (
    <section className="border-y border-white/10 bg-tv-charcoal py-14">
      <div className="container-tv">
        <h2 className="mb-8 text-center font-display text-2xl font-bold sm:text-3xl">
          Fits Into Your <span className="text-tv-cyan">AI Stack.</span>
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tech.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-tv-surface px-4 py-5"
            >
              <Cpu className="h-4 w-4 text-tv-cyan" />
              <span className="font-display font-semibold">{t}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-tv-muted">
          Compatibility references for evaluation workloads — not TensorVale brand identity.
        </p>
      </div>
    </section>
  )
}
