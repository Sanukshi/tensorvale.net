import { motion } from 'framer-motion'
import AnimatedCounter from './ui/AnimatedCounter'
import { statusColor } from '../data/content'

const experiments = [
  { id: 'EXP-024', model: 'Model A', score: '96.8%', latency: '42ms', status: 'Completed' },
  { id: 'EXP-023', model: 'Model B', score: '94.2%', latency: '48ms', status: 'Completed' },
  { id: 'EXP-022', model: 'Model C', score: '97.1%', latency: '41ms', status: 'Running' },
]

export default function ProductDashboard() {
  return (
    <section id="dashboard" className="section-pad section-light scroll-mt-20">
      <div className="container-tv">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="label-eyebrow-dark mb-3">The Product</p>
          <h2 className="heading-lg text-slate-900">
            Your AI Evaluation <span className="text-tv-blue">Command Center.</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Bring experiments, model performance, benchmarks, and evaluation results into one
            engineering environment.
          </p>
        </div>

        <div className="relative">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-2 top-10 z-10 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lift lg:block"
          >
            <p className="text-[10px] text-slate-400">GPU</p>
            <p className="font-display text-xl font-bold text-slate-900">74%</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-2 bottom-16 z-10 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lift lg:block"
          >
            <p className="text-[10px] text-slate-400">Throughput</p>
            <p className="font-display text-xl font-bold text-tv-blue">1.24K/s</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950 shadow-soft sm:rounded-[2rem]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
              <p className="font-display text-sm font-bold tracking-wide">TENSORVALE</p>
              <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                LIVE
              </span>
            </div>

            <div className="p-4 sm:p-6">
              <div className="mb-6 grid grid-cols-3 gap-3">
                {[
                  { v: 24, l: 'Experiments' },
                  { v: 148, l: 'Models' },
                  { v: 92.6, l: 'Avg Score', suffix: '%', decimals: 1 },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center sm:p-4">
                    <p className="font-display text-2xl font-bold sm:text-3xl">
                      <AnimatedCounter value={s.v} suffix={s.suffix ?? ''} decimals={s.decimals ?? 0} />
                    </p>
                    <p className="mt-1 text-[10px] text-tv-muted sm:text-xs">{s.l}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="mb-3 text-xs font-medium text-tv-muted">Performance Graph</p>
                <svg viewBox="0 0 400 100" className="h-24 w-full" aria-hidden>
                  <motion.path
                    d="M0,70 C40,65 60,50 100,55 C140,60 160,30 200,35 C240,40 260,20 300,25 C340,30 360,15 400,18"
                    fill="none"
                    stroke="#22D3EE"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3 }}
                  />
                </svg>
              </div>

              <p className="mb-3 text-sm font-medium">Recent Experiments</p>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full min-w-[520px] text-left text-xs">
                  <tbody>
                    {experiments.map((e) => (
                      <tr key={e.id} className="border-b border-white/5 last:border-0">
                        <td className="px-4 py-3 font-mono text-tv-cyan">{e.id}</td>
                        <td className="px-4 py-3">{e.model}</td>
                        <td className="px-4 py-3 font-mono">{e.score}</td>
                        <td className="px-4 py-3 font-mono text-tv-muted">{e.latency}</td>
                        <td className={`px-4 py-3 ${statusColor(e.status)}`}>{e.status}</td>
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
