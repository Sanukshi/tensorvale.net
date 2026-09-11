import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function ModelDecision() {
  return (
    <section className="section-pad bg-[#f4f6f9] text-slate-900">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3"
        >
          <div className="flex flex-col items-center gap-3 md:pt-10">
            <div className="panel-light w-full p-5 text-center">
              <p className="font-mono text-xs text-slate-500">MODEL A</p>
              <p className="mt-2 font-display text-3xl font-bold">94.8%</p>
            </div>
            <div className="hidden h-10 w-px bg-slate-300 md:block" />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full rounded-3xl border border-tv-cyan/40 bg-slate-900 p-6 text-center text-white shadow-glow">
              <p className="font-mono text-[10px] tracking-widest text-tv-cyan">TENSORVALE</p>
              <p className="mt-1 font-display text-xl font-bold">ANALYSIS</p>
              <div className="mt-4 space-y-2 text-left text-xs text-slate-300">
                <p>• Score normalization</p>
                <p>• Latency trade-off</p>
                <p>• Resource efficiency</p>
              </div>
            </div>
            <div className="my-3 h-8 w-px bg-gradient-to-b from-tv-cyan to-emerald-400" />
            <div className="flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
              <Star className="h-4 w-4 fill-emerald-600 text-emerald-600" />
              Recommended Model
            </div>
            <div className="mt-3 w-full rounded-2xl border-2 border-tv-cyan bg-white p-5 text-center shadow-lg">
              <p className="font-mono text-xs text-tv-blue">MODEL C</p>
              <p className="mt-1 font-display text-3xl font-bold text-slate-900">97.1%</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:pt-10">
            <div className="panel-light w-full p-5 text-center">
              <p className="font-mono text-xs text-slate-500">MODEL B</p>
              <p className="mt-2 font-display text-3xl font-bold">96.2%</p>
            </div>
            <div className="hidden h-10 w-px bg-slate-300 md:block" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
