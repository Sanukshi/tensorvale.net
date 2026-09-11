import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  LineChart,
  Pause,
  Play,
  Scale,
  Sparkles,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import { MetricSpark } from '../ui/SectionGraphics'
import { easeOut } from '../../lib/motion'
import ProofStats from './ProofStats'

const pipeline = [
  { id: 'models', label: 'AI Models', short: 'Models', icon: Boxes, detail: 'Ingest candidates & checkpoints' },
  { id: 'workloads', label: 'Workloads', short: 'Workloads', icon: FlaskConical, detail: 'Controlled evaluation runs' },
  { id: 'bench', label: 'Benchmark', short: 'Benchmark', icon: LineChart, detail: 'Latency · throughput · cost' },
  { id: 'analysis', label: 'Analysis', short: 'Analysis', icon: Scale, detail: 'Trade-offs & gaps' },
  { id: 'select', label: 'Selection', short: 'Select', icon: CheckCircle2, detail: 'Production-ready choice' },
]

export default function HeroSection() {
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!playing || reduce) return
    const id = window.setInterval(() => setStep((s) => (s + 1) % pipeline.length), 3200)
    return () => window.clearInterval(id)
  }, [playing, reduce])

  return (
    <section className="relative -mt-[76px] min-h-[100svh] overflow-hidden bg-tv-hero pt-[76px]">
      <div className="pointer-events-none absolute inset-0 grid-dots-dark opacity-40" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-tv-cyan/20 blur-[100px]"
        animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-tv relative grid min-h-[calc(100svh-76px)] items-center gap-8 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <div className="min-w-0">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-tv-cyan/30 bg-tv-cyan/10 px-3 py-1.5 sm:px-4"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-tv-cyan motion-safe:animate-pulse" />
            <span className="min-w-0 text-[10px] font-semibold uppercase tracking-[0.1em] text-tv-cyan sm:text-xs sm:tracking-[0.16em]">
              Enterprise AI Evaluation Platform
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease: easeOut }}
            className="mt-7 max-w-full break-words font-winked text-[2.35rem] font-normal leading-[1.08] tracking-[-0.02em] text-tv-sand sm:text-5xl md:text-6xl lg:text-[4.35rem] lg:leading-[1.05]"
          >
            <motion.span
              className="block"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
            >
              Evaluate{' '}
              <span className="bg-gradient-to-r from-tv-cyan via-[#D3C3B9] to-tv-cyan bg-clip-text text-transparent">
                Better
              </span>{' '}
              Models.
            </motion.span>
            <motion.span
              className="mt-2 block text-tv-cyan sm:mt-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
            >
              Build With Confidence.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14, ease: easeOut }}
            className="mt-6 max-w-xl text-base leading-relaxed text-tv-muted sm:text-lg sm:leading-relaxed"
          >
            TensorVale is the experimentation layer for AI/ML teams — systematically test, benchmark,
            compare, and select models before production with repeatable evidence.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18, ease: easeOut }}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
          >
            <Link to="/product" className="btn-primary w-full justify-center sm:w-auto">
              Explore ValeMetric <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#architecture" className="btn-outline-light w-full justify-center sm:w-auto">
              View Architecture
            </Link>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.4 }}
          >
            <ProofStats variant="hero" />
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
            <div className="relative mx-auto aspect-square w-full max-w-[min(100%,420px)] sm:max-w-[560px]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[10%] rounded-full bg-gradient-to-br from-tv-cyan/15 via-transparent to-[#3B82F6]/10 blur-2xl"
            />

            <img
              src="/images/tv-hero-pipeline.jpg"
              alt="TensorVale evaluation pipeline — models in, verified selection out"
              className="relative z-10 h-full w-full object-contain object-center mix-blend-screen"
              width={1024}
              height={1024}
              fetchPriority="high"
            />

            {/* Pipeline HUD — static */}
            <div className="absolute inset-x-3 bottom-2 z-30 sm:inset-x-6 sm:bottom-4">
              <div className="rounded-2xl border border-white/10 bg-[#10232A]/80 p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-tv-cyan">
                    Pipeline · 0{step + 1} / 05
                  </p>
                  <button
                    type="button"
                    onClick={() => setPlaying((p) => !p)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-tv-ink-soft transition hover:border-tv-cyan/40 hover:text-tv-cyan"
                    aria-label={playing ? 'Pause pipeline tour' : 'Play pipeline tour'}
                  >
                    {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-sm font-semibold text-white">{pipeline[step].label}</p>
                    <p className="mt-0.5 text-xs text-tv-muted">{pipeline[step].detail}</p>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={playing ? `p-${step}` : `s-${step}`}
                    className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] via-tv-cyan to-[#22C55E]"
                    initial={{ width: '0%' }}
                    animate={{
                      width: playing ? '100%' : `${((step + 1) / pipeline.length) * 100}%`,
                    }}
                    transition={
                      playing ? { duration: 3.2, ease: 'linear' } : { duration: 0.25 }
                    }
                  />
                </div>
                <div className="mt-3">
                  <MetricSpark />
                </div>
              </div>
            </div>

            <div className="absolute -left-1 top-12 z-30 hidden rounded-2xl border border-white/10 bg-[#10232A]/85 px-3 py-2 shadow-soft backdrop-blur-md sm:block lg:-left-4">
              <p className="text-[10px] font-semibold uppercase text-tv-muted">Eval score</p>
              <p className="font-mono text-lg font-bold text-tv-cyan">94.8</p>
            </div>
            <div className="absolute -right-1 top-[38%] z-30 hidden rounded-2xl bg-tv-cyan px-3 py-2 text-tv-bg shadow-glow sm:block lg:-right-3">
              <p className="text-[10px] font-bold uppercase opacity-70">p95 latency</p>
              <p className="font-mono text-sm font-bold">42ms</p>
            </div>
            <div className="absolute right-[8%] top-[12%] z-30 hidden rounded-full border border-[#22C55E]/40 bg-[#10232A]/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#22C55E] backdrop-blur sm:block">
              Verified
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-tv relative z-10 pb-12">
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {pipeline.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={p.id} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setStep(i)
                    setPlaying(false)
                  }}
                  className={cn(
                    'inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3.5 py-2.5 text-xs font-semibold transition sm:min-h-0 sm:px-3 sm:py-1.5',
                    i === step
                      ? 'border-tv-cyan/50 bg-tv-cyan/15 text-tv-cyan'
                      : 'border-tv-line text-tv-muted hover:text-white',
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{p.short}</span>
                  <span className="sm:hidden">{i + 1}</span>
                </button>
                {i < pipeline.length - 1 && (
                  <ChevronRight className="hidden h-3.5 w-3.5 text-tv-line-dark md:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
