import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const badges = ['MODEL EVALUATION', 'EXPERIMENTATION', 'BENCHMARKING', 'PERFORMANCE ANALYSIS']

const pipeline = [
  'AI MODELS',
  'EVALUATION WORKLOADS',
  'EXPERIMENTATION',
  'BENCHMARKING',
  'PERFORMANCE ANALYSIS',
  'MODEL SELECTION',
]

const metrics = [
  { label: 'Accuracy', value: '94.8%' },
  { label: 'Latency', value: '82ms' },
  { label: 'Throughput', value: '1,240/s' },
  { label: 'GPU Util', value: '72%' },
  { label: 'Eval Score', value: '95.2' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-14">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="container-tv relative">
        {/* Large rounded stage — G.O.A.T. layout */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="round-stage relative overflow-hidden border border-white/10 bg-tv-charcoal shadow-soft"
          >
            {/* Atmosphere inside stage */}
            <div className="absolute inset-0 bg-gradient-to-br from-tv-elevated via-tv-charcoal to-tv-navy" />
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-25" />
            <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-tv-blue/20 blur-[100px]" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-tv-cyan/15 blur-[90px]" />

            <div className="relative grid items-center gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-14 lg:py-16">
              {/* Left copy */}
              <div className="relative z-10 max-w-xl">
                <div className="mb-5 flex flex-wrap gap-2">
                  {badges.map((b) => (
                    <span key={b} className="badge">
                      {b}
                    </span>
                  ))}
                </div>
                <h1 className="heading-xl text-white">
                  Evaluate Better Models.{' '}
                  <span className="text-tv-cyan">Build With Confidence.</span>
                </h1>
                <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                  Systematically evaluate, benchmark, compare, and optimize AI models across
                  datasets, workloads, configurations, and deployment environments.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/#platform" className="btn-primary">
                    Explore Platform <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/documentation" className="btn-secondary">
                    View Documentation
                  </Link>
                </div>
                <p className="mt-8 font-mono text-[11px] tracking-wide text-tv-muted">
                  MODEL INPUT → EVALUATION → EXPERIMENT → BENCHMARK → COMPARE → DEPLOY
                </p>
              </div>

              {/* Spacer for overlapping card on desktop */}
              <div className="hidden lg:block lg:h-[420px]" />
            </div>
          </motion.div>

          {/* Overlapping evaluation visual — right side */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-20 mt-6 lg:absolute lg:right-6 lg:top-10 lg:mt-0 lg:w-[46%] xl:right-10 xl:w-[44%]"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-tv-ink shadow-lift sm:rounded-[2rem]">
              {/* Mini chrome */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-tv-cyan">
                    Evaluation Engine
                  </p>
                  <p className="text-sm font-semibold text-white">Pipeline Run #2481</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              <div className="relative bg-gradient-to-b from-[#0d1524] to-[#0a1018] p-4 sm:p-5">
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

                {/* Pipeline */}
                <div className="relative space-y-1.5">
                  {pipeline.map((stage, i) => (
                    <div key={stage}>
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.07 }}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-tv-cyan/15 font-mono text-[10px] font-bold text-tv-cyan">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 font-mono text-[11px] text-white/90 sm:text-xs">
                          {stage}
                        </span>
                        <div className="h-1 w-10 overflow-hidden rounded-full bg-white/10 sm:w-14">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-tv-blue to-tv-cyan"
                            initial={{ width: 0 }}
                            animate={{ width: `${65 + ((i * 9) % 30)}%` }}
                            transition={{ delay: 0.6 + i * 0.08, duration: 0.7 }}
                          />
                        </div>
                      </motion.div>
                      {i < pipeline.length - 1 && (
                        <div className="ml-[18px] h-2 w-px bg-gradient-to-b from-tv-cyan/60 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Floating metric chips */}
                <div className="relative mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {metrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.05 }}
                      className="rounded-xl border border-white/10 bg-black/40 px-2 py-2 text-center backdrop-blur-sm"
                    >
                      <p className="font-mono text-[9px] text-tv-muted">{m.label}</p>
                      <p className="mt-0.5 text-xs font-bold text-white sm:text-sm">{m.value}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Mini sparkline */}
                <div className="relative mt-4 rounded-xl border border-white/10 bg-black/30 p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs text-tv-muted">Score trend</p>
                    <Link to="/#dashboard" className="text-[10px] text-tv-cyan hover:underline">
                      Open dashboard <ArrowUpRight className="inline h-3 w-3" />
                    </Link>
                  </div>
                  <svg viewBox="0 0 280 56" className="h-12 w-full" aria-hidden>
                    <motion.path
                      d="M0,40 L40,36 L80,38 L120,28 L160,30 L200,18 L240,20 L280,12"
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.4, delay: 1 }}
                    />
                    <motion.path
                      d="M0,40 L40,36 L80,38 L120,28 L160,30 L200,18 L240,20 L280,12 L280,56 L0,56 Z"
                      fill="url(#spark)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    />
                    <defs>
                      <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="#22D3EE" stopOpacity="0.25" />
                        <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Circular accent sticker like G.O.A.T. */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-4 -left-4 hidden h-16 w-16 items-center justify-center rounded-full bg-tv-cyan text-[9px] font-bold uppercase tracking-wider text-tv-ink shadow-glow sm:flex lg:-left-6"
            >
              Eval
              <br />
              Engine
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
