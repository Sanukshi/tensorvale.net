import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function ModelDecision() {
  return (
    <section className="section-pad section-light">
      <div className="container-tv">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg mx-auto mb-12 max-w-3xl text-center text-slate-900"
        >
          Turn Evaluation Results Into{' '}
          <span className="text-tv-blue">Better Decisions.</span>
        </motion.h2>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3 sm:items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
          >
            <p className="text-xs text-slate-400">MODEL A</p>
            <p className="mt-1 font-display text-3xl font-bold text-slate-900">94.8%</p>
          </motion.div>

          <div className="flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full rounded-2xl border border-tv-cyan/40 bg-slate-900 px-4 py-5 text-center text-white shadow-glow-sm"
            >
              <p className="font-mono text-[10px] text-tv-cyan">TENSORVALE</p>
              <p className="mt-1 font-display text-lg font-bold">ANALYSIS</p>
            </motion.div>
            <div className="h-6 w-px bg-tv-cyan" />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-tv-cyan px-4 py-4 text-slate-900 shadow-glow"
            >
              <Star className="h-4 w-4 fill-current" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider">Recommended</p>
                <p className="font-display text-xl font-bold">Model C · 97.1%</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
          >
            <p className="text-xs text-slate-400">MODEL B</p>
            <p className="mt-1 font-display text-3xl font-bold text-slate-900">96.2%</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
