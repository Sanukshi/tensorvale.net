import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell, Search } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import AnimatedCounter from './ui/AnimatedCounter'
import { dashboardStats, experiments, statusColor } from '../data/content'
import { cn } from '../lib/utils'

const sidebar = ['Overview', 'Experiments', 'Models', 'Datasets', 'Evaluations', 'Benchmarks', 'Reports']

export default function DashboardPreview() {
  const [active, setActive] = useState('Overview')

  return (
    <section id="dashboard" className="section-pad scroll-mt-20">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Product Dashboard"
          title={
            <>
              Your AI Evaluation <span className="text-tv-cyan">Command Center</span>
            </>
          }
          description="A production-grade view of experiments, models, benchmarks, and evaluation history."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-tv-elevated to-tv-surface shadow-soft"
        >
          <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-full border border-white/[0.06] bg-black/30 px-3 py-1.5">
              <Search className="h-3.5 w-3.5 text-tv-muted" />
              <span className="font-mono text-[11px] text-tv-muted">Search experiments, models…</span>
            </div>
            <Bell className="h-4 w-4 text-tv-muted" aria-hidden />
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-tv-blue to-tv-violet text-[10px] font-bold">
              TV
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <aside className="flex gap-1 overflow-x-auto border-b border-white/[0.06] p-3 lg:w-44 lg:flex-col lg:border-b-0 lg:border-r">
              {sidebar.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActive(item)}
                  className={cn(
                    'whitespace-nowrap rounded-lg px-3 py-2 text-left text-xs font-medium transition',
                    active === item ? 'bg-tv-cyan/15 text-tv-cyan' : 'text-tv-muted hover:bg-white/[0.04] hover:text-white',
                  )}
                >
                  {item}
                </button>
              ))}
            </aside>

            <div className="flex-1 p-4 sm:p-5">
              <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {dashboardStats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="rounded-2xl border border-white/[0.06] bg-black/30 p-3"
                  >
                    <p className="text-[11px] text-tv-muted">{s.label}</p>
                    <p className="mt-1 font-display text-xl font-bold">
                      <AnimatedCounter
                        value={s.value}
                        suffix={s.suffix ?? ''}
                        decimals={s.suffix === '%' ? 1 : 0}
                      />
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.06] bg-black/25 p-4">
                  <p className="mb-3 text-sm font-medium">Evaluation Performance</p>
                  <svg viewBox="0 0 320 100" className="h-24 w-full" aria-hidden>
                    <motion.path
                      d="M0,70 L40,62 L80,65 L120,45 L160,48 L200,28 L240,32 L280,18 L320,22"
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1 }}
                    />
                  </svg>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-black/25 p-4">
                  <p className="mb-3 text-sm font-medium">Resource Utilization</p>
                  <div className="flex items-center gap-5">
                    <svg viewBox="0 0 100 100" className="h-20 w-20" aria-hidden>
                      <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="9" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="34"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="9"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                        initial={{ strokeDasharray: '0 214' }}
                        whileInView={{ strokeDasharray: `${72 * 2.14} 214` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
                      <text x="50" y="54" textAnchor="middle" className="fill-white text-[14px] font-bold">
                        72%
                      </text>
                    </svg>
                    <div className="space-y-1.5 text-xs text-tv-muted">
                      <p>GPU avg <span className="text-white">72%</span></p>
                      <p>Mem peak <span className="text-white">18.4 GB</span></p>
                      <p>Cost / 1K <span className="text-white">$0.42</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-black/25">
                <p className="border-b border-white/[0.06] px-4 py-2.5 text-sm font-medium">
                  Recent Experiments
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[480px] text-left text-xs">
                    <thead>
                      <tr className="text-tv-muted">
                        <th className="px-4 py-2 font-medium">ID</th>
                        <th className="px-4 py-2 font-medium">Model</th>
                        <th className="px-4 py-2 font-medium">Score</th>
                        <th className="px-4 py-2 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {experiments.slice(0, 4).map((e) => (
                        <tr key={e.id} className="border-t border-white/[0.04]">
                          <td className="px-4 py-2.5 font-mono text-tv-cyan">{e.id}</td>
                          <td className="px-4 py-2.5">{e.model}</td>
                          <td className="px-4 py-2.5 font-mono">{e.score ? `${e.score}%` : '—'}</td>
                          <td className={`px-4 py-2.5 ${statusColor(e.status)}`}>{e.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
