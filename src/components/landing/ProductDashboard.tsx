import { motion } from 'framer-motion'

const experiments = [
  { id: 'EXP-024', model: 'Model A', score: '96.8%', latency: '42ms', status: 'Completed' },
  { id: 'EXP-023', model: 'Model B', score: '94.2%', latency: '48ms', status: 'Completed' },
  { id: 'EXP-022', model: 'Model C', score: '97.1%', latency: '41ms', status: 'Running' },
]

export default function ProductDashboard() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#f4f6f9] text-slate-900">
      <div className="container-tv">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-tv-blue">
            The Product
          </p>
          <h2 className="heading-lg text-slate-900">
            Your AI Evaluation <span className="text-tv-blue">Command Center.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Bring experiments, model performance, benchmarks, and evaluation results into one
            engineering environment.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-2 top-10 z-20 hidden rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-lg lg:block"
          >
            <p className="text-[10px] text-slate-500">GPU</p>
            <p className="font-display text-lg font-bold text-tv-blue">74%</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, delay: 0.5 }}
            className="absolute -right-2 bottom-20 z-20 hidden rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-lg lg:block"
          >
            <p className="text-[10px] text-slate-500">Score</p>
            <p className="font-display text-lg font-bold text-emerald-600">92.6%</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950 text-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <p className="font-display text-sm font-semibold tracking-wide">TENSORVALE</p>
              <span className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                LIVE
              </span>
            </div>
            <div className="p-5">
              <div className="mb-5 grid grid-cols-3 gap-3">
                {[
                  { v: '24', l: 'Experiments' },
                  { v: '148', l: 'Models' },
                  { v: '92.6%', l: 'Avg Score' },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="font-display text-2xl font-bold sm:text-3xl">{s.v}</p>
                    <p className="mt-1 text-xs text-slate-400">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="mb-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="mb-3 text-xs font-medium text-slate-400">Performance Graph</p>
                <svg viewBox="0 0 480 120" className="h-28 w-full" aria-hidden>
                  <motion.path
                    d="M0,90 L40,78 L80,82 L120,60 L160,65 L200,42 L240,48 L280,30 L320,35 L360,22 L400,28 L440,18 L480,20"
                    fill="none"
                    stroke="#22D3EE"
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4 }}
                  />
                </svg>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <p className="border-b border-white/10 px-4 py-2.5 text-sm font-medium">
                  Recent Experiments
                </p>
                <table className="w-full min-w-[520px] text-left text-xs">
                  <tbody>
                    {experiments.map((e) => (
                      <tr key={e.id} className="border-t border-white/5">
                        <td className="px-4 py-3 font-mono text-tv-cyan">{e.id}</td>
                        <td className="px-4 py-3">{e.model}</td>
                        <td className="px-4 py-3 font-mono">{e.score}</td>
                        <td className="px-4 py-3 font-mono text-slate-400">{e.latency}</td>
                        <td className="px-4 py-3 text-slate-300">{e.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
