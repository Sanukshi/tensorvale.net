import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  GitCompare,
  LayoutDashboard,
  LineChart,
  Scale,
  X,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import { Reveal, easeOut } from '../../lib/motion'

type Engine = {
  id: string
  title: string
  short: string
  summary: string
  desc: string
  details: string
  features: string[]
  image: string
  icon: LucideIcon
}

const engines: Engine[] = [
  {
    id: 'evaluation',
    title: 'Model Evaluation Engine',
    short: 'Evaluation',
    summary: 'Test models with structured workloads and shared metrics.',
    desc: 'Model testing, datasets, metric configuration, automated evaluation, and result validation — so teams stop guessing and start measuring.',
    details:
      'Run structured evaluation workloads against candidate models so every production decision is backed by repeatable evidence — not notebooks or ad-hoc scripts.',
    features: [
      'Model testing workloads',
      'Dataset & metric configuration',
      'Automated evaluation runs',
      'Result validation',
    ],
    image: '/images/tv-engine-eval.png',
    icon: FlaskConical,
  },
  {
    id: 'experimentation',
    title: 'Experimentation Platform',
    short: 'Experiment',
    summary: 'Create, version, and track experiments in one place.',
    desc: 'Experiment creation, config management, versioning, test runs, and result tracking for controlled iteration across the team.',
    details:
      'Create and version experiments with controlled configs so teams share one clear audit trail from idea to result.',
    features: [
      'Experiment creation',
      'Config management',
      'Versioned test runs',
      'Result tracking',
    ],
    image: '/images/tv-engine-experiment.png',
    icon: LineChart,
  },
  {
    id: 'benchmarking',
    title: 'Model Benchmarking Engine',
    short: 'Benchmark',
    summary: 'Measure latency, throughput, and resource cost.',
    desc: 'Latency, throughput, resource utilization, and standardized workload benchmarks under consistent conditions.',
    details:
      'Measure performance under consistent workloads so production readiness is visible before every release.',
    features: [
      'Latency measurement',
      'Throughput benchmarks',
      'Resource utilization',
      'Standardized workloads',
    ],
    image: '/images/tv-engine-bench.png',
    icon: Scale,
  },
  {
    id: 'comparison',
    title: 'Comparison Intelligence',
    short: 'Compare',
    summary: 'See trade-offs side by side before you select.',
    desc: 'Side-by-side model and configuration analysis with clear accuracy, speed, and cost trade-offs.',
    details:
      'Place models and configurations side by side to surface trade-offs — then select with shared team evidence.',
    features: [
      'Side-by-side model views',
      'Configuration analysis',
      'Trade-off clarity',
      'Selection support',
    ],
    image: '/images/tv-engine-compare.png',
    icon: GitCompare,
  },
  {
    id: 'dashboard',
    title: 'AI Evaluation Dashboard',
    short: 'Dashboard',
    summary: 'Track scores, runs, and history in one view.',
    desc: 'Active experiments, scores, latency, throughput, GPU util, and evaluation history for the full program.',
    details:
      'Track active experiments and historical evaluation signals in one place — scores, latency, throughput, GPU util, and run history.',
    features: [
      'Active experiments',
      'Evaluation scores',
      'Latency & throughput',
      'GPU util & history',
    ],
    image: '/images/tv-engine-dash.png',
    icon: LayoutDashboard,
  },
]

const STACK_DEPTH = 3

function stackOffset(index: number, active: number, total: number) {
  return (index - active + total) % total
}

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0)
  const [detail, setDetail] = useState<Engine | null>(null)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const reduce = useReducedMotion()
  const titleId = useId()
  const descId = useId()

  const engine = engines[active]

  const openDetail = (e: Engine, index?: number) => {
    setPaused(true)
    if (typeof index === 'number') {
      setActive(index)
    } else {
      const i = engines.findIndex((x) => x.id === e.id)
      if (i >= 0) setActive(i)
    }
    setDetail(e)
  }

  const showDetailAt = (index: number) => {
    const i = (index + engines.length) % engines.length
    setActive(i)
    setDetail(engines[i])
  }

  useEffect(() => {
    if (paused || reduce) return
    const id = window.setInterval(() => {
      setDirection(1)
      setActive((v) => (v + 1) % engines.length)
    }, 5500)
    return () => window.clearInterval(id)
  }, [paused, reduce])

  useEffect(() => {
    if (!detail) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDetail(null)
      if (e.key === 'ArrowRight') showDetailAt(active + 1)
      if (e.key === 'ArrowLeft') showDetailAt(active - 1)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [detail, active])

  const go = (dir: -1 | 1) => {
    setPaused(true)
    setDirection(dir)
    setActive((v) => (v + dir + engines.length) % engines.length)
  }

  const select = (i: number) => {
    setPaused(true)
    setDirection(i > active || (active === engines.length - 1 && i === 0) ? 1 : -1)
    setActive(i)
  }

  return (
    <section id="platform" className="relative scroll-mt-24 overflow-hidden bg-[#CFCAC4] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(181,136,99,0.18), transparent 55%)',
        }}
      />

      <div className="container-tv relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6a4e]">Platform</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#181816] sm:text-4xl lg:text-[2.85rem]">
            Five engines. One evaluation stack.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5c5654] sm:text-lg">
            Explore each engine in the stack — evaluate, experiment, benchmark, compare, and track —
            then open details for the full capability list.
          </p>
        </Reveal>

        {/* Reference-style stage: copy left · stacked cards right */}
        <div
          className="relative mt-12 overflow-hidden rounded-[1.75rem] bg-[#EBEBEB] shadow-[0_32px_90px_rgba(24,24,22,0.12)] sm:rounded-[2.5rem]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid items-stretch lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)]">
            {/* Left content */}
            <div className="relative flex gap-3 px-4 py-8 sm:gap-7 sm:px-9 sm:py-12 lg:px-11 lg:py-14">
              <div
                className="relative flex shrink-0 flex-col items-center justify-between self-stretch py-3"
                role="tablist"
                aria-label="Platform engines"
                aria-orientation="vertical"
              >
                <div className="absolute bottom-5 top-5 w-px bg-[#222]/15" />
                {engines.map((e, i) => {
                  const selected = i === active
                  return (
                    <button
                      key={e.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-label={e.title}
                      onClick={() => select(i)}
                      className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full transition"
                    >
                      {selected ? (
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222] text-xs font-bold text-white shadow-md">
                          {i + 1}
                        </span>
                      ) : (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#222]/28 transition group-hover:bg-[#222]/5" />
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={engine.id}
                    custom={direction}
                    initial={
                      reduce
                        ? false
                        : { opacity: 0, y: direction > 0 ? 18 : -18 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: direction > 0 ? -14 : 14 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">
                      Engine {String(active + 1).padStart(2, '0')} /{' '}
                      {String(engines.length).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 break-words font-winked text-3xl leading-[1.02] tracking-tight text-[#1a1a1a] sm:text-6xl lg:text-[4.5rem]">
                      {engine.short}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-[#B58863] sm:text-base">
                      {engine.title}
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-[#666] sm:text-[0.95rem]">
                      {engine.desc}
                    </p>

                    <ul className="mt-6 hidden gap-2.5 sm:grid sm:grid-cols-2">
                      {engine.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[#444]">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#222] text-white">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <button
                    type="button"
                    onClick={() => openDetail(engine, active)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#B58863] hover:text-[#181816] sm:w-auto"
                  >
                    View details <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center justify-center gap-1.5 py-2 text-sm font-semibold text-[#222] transition hover:text-[#B58863] sm:justify-start"
                  >
                    Request access <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous engine"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#222]/18 bg-transparent text-[#222] transition hover:border-[#222] hover:bg-[#222] hover:text-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next engine"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#222]/18 bg-transparent text-[#222] transition hover:border-[#222] hover:bg-[#222] hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right stacked image deck */}
            <div className="relative flex items-center overflow-hidden bg-[#E4E0DB]/55 px-4 pb-10 pt-5 sm:px-8 sm:pb-14 sm:pt-6 lg:px-8 lg:pb-16 lg:pt-12 xl:pr-12">
              <div className="relative mx-auto aspect-[5/6] w-full max-w-[min(100%,360px)] sm:max-w-[440px] lg:mx-0 lg:max-w-[480px] lg:w-[92%]">
                {engines.map((e, i) => {
                  const offset = stackOffset(i, active, engines.length)
                  const inStack = offset < STACK_DEPTH
                  const isFront = offset === 0
                  const IconEl = e.icon

                  return (
                    <motion.button
                      key={e.id}
                      type="button"
                      onClick={() => {
                        if (isFront) openDetail(e, i)
                        else select(i)
                      }}
                      aria-label={isFront ? `Open details for ${e.title}` : `Show ${e.short}`}
                      aria-hidden={!inStack}
                      tabIndex={inStack ? 0 : -1}
                      className={cn(
                        'group absolute inset-y-0 left-0 w-[88%] overflow-hidden rounded-[1.35rem] text-left sm:rounded-[1.6rem]',
                        !inStack && 'pointer-events-none',
                      )}
                      initial={false}
                      animate={{
                        x: offset * (reduce ? 28 : 36),
                        y: offset * (reduce ? -14 : -20),
                        scale: 1 - offset * 0.055,
                        opacity: inStack ? 1 - offset * 0.06 : 0,
                        zIndex: STACK_DEPTH - offset,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 280,
                        damping: 30,
                        mass: 0.85,
                      }}
                      whileHover={
                        isFront && !reduce ? { y: -6, transition: { duration: 0.22 } } : undefined
                      }
                      style={{
                        boxShadow:
                          offset === 0
                            ? '0 28px 60px rgba(0,0,0,0.22)'
                            : '0 16px 40px rgba(0,0,0,0.14)',
                      }}
                    >
                      <div className="relative h-full w-full bg-[#141414]">
                        <img
                          src={e.image}
                          alt={e.title}
                          className="h-full w-full object-contain object-center"
                          width={1024}
                          height={1024}
                          loading={offset < 2 ? 'eager' : 'lazy'}
                          decoding="async"
                          draggable={false}
                        />

                        {isFront && (
                          <>
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-[#0f0f0f]/82 via-[#0f0f0f]/28 to-transparent" />
                            <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a]/85 text-white backdrop-blur-sm transition group-hover:bg-[#B58863] group-hover:text-[#181816] sm:right-4 sm:top-4">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-md">
                                <IconEl className="h-3 w-3 text-[#B58863]" />
                                {e.short}
                              </span>
                              <p className="mt-2 line-clamp-2 font-display text-base font-bold text-white sm:text-lg">
                                {e.title}
                              </p>
                            </div>
                          </>
                        )}

                        {!isFront && (
                          <div
                            aria-hidden
                            className="absolute inset-0 bg-[#CFCAC4]/30"
                            style={{ opacity: Math.min(offset * 0.22, 0.45) }}
                          />
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {detail && (
              <motion.div
                className="fixed inset-0 z-[200] flex items-end justify-center p-3 sm:items-center sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  type="button"
                  aria-label="Close details"
                  className="absolute inset-0 bg-[#10232A]/75 backdrop-blur-md"
                  onClick={() => setDetail(null)}
                />

                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={titleId}
                  aria-describedby={descId}
                  initial={{ opacity: 0, y: 28, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="relative z-10 flex max-h-[min(92vh,880px)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border border-[#3D4D55] bg-[#10232A] shadow-[0_40px_100px_rgba(0,0,0,0.55)] sm:rounded-[1.85rem]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3.5 sm:px-6">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B58863]">
                        Platform · Engine details
                      </p>
                      <p className="mt-0.5 truncate text-sm font-semibold text-[#F5EDE6]">
                        {String(active + 1).padStart(2, '0')} / {String(engines.length).padStart(2, '0')}{' '}
                        · {detail.short}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => showDetailAt(active - 1)}
                        aria-label="Previous engine details"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F5EDE6]/80 transition hover:border-[#B58863] hover:text-[#B58863]"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => showDetailAt(active + 1)}
                        aria-label="Next engine details"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F5EDE6]/80 transition hover:border-[#B58863] hover:text-[#B58863]"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setDetail(null)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F5EDE6]/80 transition hover:border-[#B58863] hover:text-[#B58863]"
                        aria-label="Close"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-2 overflow-x-auto border-b border-white/10 px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
                    {engines.map((e, i) => {
                      const IconEl = e.icon
                      const selected = e.id === detail.id
                      return (
                        <button
                          key={e.id}
                          type="button"
                          onClick={() => showDetailAt(i)}
                          className={cn(
                            'inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-wide transition',
                            selected
                              ? 'bg-[#B58863] text-[#181816]'
                              : 'bg-white/5 text-[#F5EDE6]/65 hover:bg-white/10 hover:text-[#F5EDE6]',
                          )}
                        >
                          <IconEl className="h-3.5 w-3.5" />
                          {e.short}
                        </button>
                      )
                    })}
                  </div>

                  <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative border-b border-white/10 bg-[#0c1a20] lg:border-b-0 lg:border-r">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={detail.id}
                          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.28, ease: easeOut }}
                          className="relative aspect-square w-full lg:aspect-auto lg:h-full lg:min-h-[420px]"
                        >
                          <img
                            src={detail.image}
                            alt={detail.title}
                            className="absolute inset-0 h-full w-full object-contain object-center"
                            width={1024}
                            height={1024}
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10232A]/80 via-transparent to-transparent lg:from-[#10232A]/50" />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="relative flex flex-col p-5 sm:p-7 lg:p-8">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={detail.id}
                          initial={reduce ? false : { opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.28, ease: easeOut }}
                          className="flex min-h-0 flex-1 flex-col"
                        >
                          {(() => {
                            const DetailIcon = detail.icon
                            return (
                              <div className="flex items-start gap-3">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B58863] text-[#181816]">
                                  <DetailIcon className="h-5 w-5" />
                                </span>
                                <div className="min-w-0">
                                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B58863]">
                                    {detail.short}
                                  </p>
                                  <h3
                                    id={titleId}
                                    className="mt-1 font-display text-xl font-bold leading-snug text-[#F5EDE6] sm:text-2xl"
                                  >
                                    {detail.title}
                                  </h3>
                                </div>
                              </div>
                            )
                          })()}

                          <p
                            id={descId}
                            className="mt-5 text-sm leading-relaxed text-[#D3C3B9] sm:text-[0.95rem]"
                          >
                            {detail.details}
                          </p>

                          <p className="mt-4 text-sm leading-relaxed text-[#A79E9C]">{detail.desc}</p>

                          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                            {detail.features.map((f) => (
                              <li
                                key={f}
                                className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-[#F5EDE6]/85"
                              >
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B58863]/20 text-[#B58863]">
                                  <Check className="h-3 w-3" strokeWidth={3} />
                                </span>
                                {f}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-auto flex flex-col gap-2 pt-8 sm:flex-row">
                            <Link
                              to="/#contact"
                              onClick={() => setDetail(null)}
                              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#B58863] px-5 py-3.5 text-sm font-semibold text-[#181816] transition hover:bg-[#c9a07a]"
                            >
                              Talk about this engine <ArrowRight className="h-4 w-4" />
                            </Link>
                            <button
                              type="button"
                              onClick={() => setDetail(null)}
                              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-semibold text-[#F5EDE6] transition hover:border-[#B58863] hover:text-[#B58863]"
                            >
                              Close
                            </button>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}

    </section>
  )
}
