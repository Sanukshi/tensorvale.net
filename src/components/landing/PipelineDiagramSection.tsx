import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Gauge,
  LineChart,
  Pause,
  Play,
  Scale,
} from 'lucide-react'
import { cn } from '../../lib/utils'

const nodes = [
  {
    step: '01',
    label: 'AI Models',
    short: 'Models',
    detail: 'Ingest candidate models and checkpoints for evaluation.',
    points: ['Model registration', 'Checkpoint intake', 'Variant tracking'],
    icon: Boxes,
  },
  {
    step: '02',
    label: 'Evaluation Workloads',
    short: 'Workloads',
    detail: 'Run structured workloads against datasets and configs.',
    points: ['Dataset binding', 'Config selection', 'Workload execution'],
    icon: Gauge,
  },
  {
    step: '03',
    label: 'Benchmarking',
    short: 'Benchmarks',
    detail: 'Measure latency, throughput, and resource cost.',
    points: ['Latency measurement', 'Throughput analysis', 'Resource utilization'],
    icon: LineChart,
  },
  {
    step: '04',
    label: 'Performance Analysis',
    short: 'Analysis',
    detail: 'Analyze scores, trade-offs, and operational metrics.',
    points: ['Score review', 'Trade-off analysis', 'Operational metrics'],
    icon: Scale,
  },
  {
    step: '05',
    label: 'Model Selection',
    short: 'Selection',
    detail: 'Choose production-ready models with evidence.',
    points: ['Evidence-backed choice', 'Production readiness', 'Decision report'],
    icon: CheckCircle2,
  },
]

export default function PipelineDiagramSection() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [inView, setInView] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  const current = nodes[active]
  const CurrentIcon = current.icon
  const progress = ((active + 1) / nodes.length) * 100

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    if (mq.matches) setPlaying(false)
    const onChange = () => {
      setReducedMotion(mq.matches)
      if (mq.matches) setPlaying(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting)
        if (!e.isIntersecting) setPlaying(false)
        else if (!reducedMotion) setPlaying(true)
      },
      { threshold: 0.35 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reducedMotion])

  useEffect(() => {
    if (!inView || !playing) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % nodes.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [inView, playing])

  const goTo = useCallback((index: number) => {
    setActive(index)
    setPlaying(false)
  }, [])

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + nodes.length) % nodes.length)
    setPlaying(false)
  }, [])

  const next = useCallback(() => {
    setActive((i) => (i + 1) % nodes.length)
    setPlaying(false)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      }
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [next, prev])

  return (
    <section
      ref={ref}
      id="pipeline"
      tabIndex={0}
      aria-label="Evaluation pipeline interactive diagram"
      className="section-pad scroll-mt-24 outline-none"
    >
      <div className="container-tv">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Evaluation Pipeline</p>
            <h2 className="heading-lg mt-3 text-tv-ink">
              From model ingestion to production decision
            </h2>
            <p className="body-muted mt-4">
              A five-stage linear path — AI Models → Evaluation Workloads → Benchmarking →
              Performance Analysis → Model Selection — so every step is reproducible and reviewable.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex items-center gap-2 rounded-full border border-tv-line bg-tv-white px-4 py-2 text-sm font-medium text-tv-ink transition hover:border-tv-ink/30"
              aria-pressed={playing}
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {playing ? 'Pause tour' : 'Play tour'}
            </button>
            <div className="inline-flex overflow-hidden rounded-full border border-tv-line bg-tv-white">
              <button
                type="button"
                onClick={prev}
                className="px-3 py-2 text-tv-ink transition hover:bg-tv-bg"
                aria-label="Previous stage"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="border-x border-tv-line px-3 py-2 font-mono text-xs text-tv-muted">
                {String(active + 1).padStart(2, '0')} / {String(nodes.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={next}
                className="px-3 py-2 text-tv-ink transition hover:bg-tv-bg"
                aria-label="Next stage"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div
          className="mt-8 h-1.5 overflow-hidden rounded-full bg-tv-line"
          role="progressbar"
          aria-valuenow={active + 1}
          aria-valuemin={1}
          aria-valuemax={nodes.length}
          aria-label="Pipeline progress"
        >
          <motion.div
            className="relative h-full rounded-full bg-tv-ink"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {playing && (
              <motion.span
                key={active}
                className="absolute inset-y-0 right-0 w-full origin-left rounded-full bg-tv-cyan/70"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 3.2, ease: 'linear' }}
              />
            )}
          </motion.div>
        </div>

        {/* Interactive stepper */}
        <div className="mt-6 overflow-x-auto pb-2">
          <ol
            className="flex min-w-[640px] gap-2 sm:min-w-0 sm:grid sm:grid-cols-5 sm:gap-3"
            aria-label="Pipeline stages"
          >
            {nodes.map((n, i) => {
              const Icon = n.icon
              const isActive = i === active
              const isDone = i < active
              return (
                <li key={n.label} className="relative flex-1">
                  {i < nodes.length - 1 && (
                    <div
                      className="absolute left-[calc(50%+28px)] right-[-6px] top-7 hidden h-0.5 overflow-hidden bg-tv-line sm:block"
                      aria-hidden
                    >
                      <motion.div
                        className="h-full origin-left bg-tv-ink"
                        animate={{ scaleX: isDone ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                      />
                    </div>
                  )}
                  <motion.button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={isActive ? 'step' : undefined}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className={cn(
                      'tv-shine relative z-10 flex w-full flex-col items-center rounded-2xl border px-3 py-4 text-center transition duration-200',
                      isActive
                        ? 'border-tv-ink bg-tv-ink text-white shadow-soft'
                        : isDone
                          ? 'border-tv-ink/20 bg-tv-white text-tv-ink hover:border-tv-ink/40'
                          : 'border-tv-line bg-tv-white text-tv-muted hover:border-tv-ink/25 hover:text-tv-ink',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-xl border transition',
                        isActive
                          ? 'tv-pulse-active border-tv-cyan/40 bg-tv-cyan/15 text-tv-cyan'
                          : isDone
                            ? 'border-tv-ink/15 bg-tv-bg text-tv-ink'
                            : 'border-tv-line bg-tv-bg',
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] opacity-70">
                      {n.step}
                    </span>
                    <span className="mt-1 text-sm font-semibold leading-snug">{n.short}</span>
                  </motion.button>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Detail panel */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.step}
              initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bento-dark relative overflow-hidden p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 grid-dots-dark opacity-30" />
              <div
                className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full opacity-50 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(202,170,152,0.28), transparent 70%)',
                }}
              />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <motion.div
                  key={current.step + '-icon'}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-tv-cyan/35 bg-tv-cyan/15 text-tv-cyan"
                >
                  <CurrentIcon className="h-6 w-6" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tv-cyan">
                    Stage {current.step} of 05
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                    {current.label}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-white/55">
                    {current.detail}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                    {current.points.map((p, pi) => (
                      <motion.li
                        key={p}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: 0.05 + pi * 0.06, ease: 'easeOut' }}
                        className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white/75"
                      >
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bento-panel flex flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-tv-muted">
                Pipeline path
              </p>
              <p className="mt-3 text-sm leading-relaxed text-tv-muted">
                Each stage feeds the next — from ingestion through workloads, benchmarks, and
                analysis to a production decision.
              </p>
              <ol className="mt-5 space-y-2">
                {nodes.map((n, i) => (
                  <li key={n.label}>
                    <motion.button
                      type="button"
                      onClick={() => goTo(i)}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.18 }}
                      className={cn(
                        'flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition',
                        i === active
                          ? 'bg-tv-ink text-white'
                          : 'text-tv-muted hover:bg-tv-bg hover:text-tv-ink',
                      )}
                    >
                      <span className="font-mono text-[10px] opacity-70">{n.step}</span>
                      <span className="font-medium">{n.label}</span>
                    </motion.button>
                  </li>
                ))}
              </ol>
            </div>
            <Link to="/dashboard" className="btn-dark mt-6 w-full justify-center">
              See this in the Dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <p className="mt-4 text-center text-xs text-tv-muted">
          Tip: click any stage, use the arrows, or press ← → when this section is focused.
        </p>
      </div>
    </section>
  )
}
