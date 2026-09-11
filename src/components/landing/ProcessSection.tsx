import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  FlaskConical,
  LineChart,
  Scale,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import { Reveal, easeOut } from '../../lib/motion'

type Step = {
  n: string
  tag: string
  title: string
  desc: string
  hint: string
  icon: LucideIcon
  image: string
}

const steps: Step[] = [
  {
    n: '01',
    tag: 'Ingest',
    title: 'AI Models',
    desc: 'Connect candidate models, checkpoints, and configurations ready for evaluation.',
    hint: 'Models · checkpoints · configs',
    icon: Boxes,
    image: '/images/tv-arch-icon-models.png',
  },
  {
    n: '02',
    tag: 'Run',
    title: 'Evaluation Workloads',
    desc: 'Run structured experiments with datasets, metrics, and versioned test configurations.',
    hint: 'Datasets · metrics · versions',
    icon: FlaskConical,
    image: '/images/tv-arch-icon-workloads.png',
  },
  {
    n: '03',
    tag: 'Measure',
    title: 'Benchmarking',
    desc: 'Measure latency, throughput, accuracy, and resource utilization under consistent workloads.',
    hint: 'Latency · throughput · cost',
    icon: Scale,
    image: '/images/tv-arch-icon-benchmark.png',
  },
  {
    n: '04',
    tag: 'Analyze',
    title: 'Performance Analysis',
    desc: 'Inspect trade-offs, gaps, and cost signals so teams share one evidence trail.',
    hint: 'Trade-offs · gaps · evidence',
    icon: LineChart,
    image: '/images/tv-arch-icon-analysis.png',
  },
  {
    n: '05',
    tag: 'Decide',
    title: 'Model Selection',
    desc: 'Choose production-ready models with reproducible comparison and clear selection rationale.',
    hint: 'Compare · select · ship',
    icon: CheckCircle2,
    image: '/images/tv-arch-icon-select.png',
  },
]

export default function ProcessSection() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()

  return (
    <section id="architecture" className="section-pad relative scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[#0a151a]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 45% at 50% -5%, rgba(181,136,99,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 60%, rgba(61,77,85,0.5), transparent 50%), radial-gradient(ellipse 45% 35% at 100% 80%, rgba(181,136,99,0.12), transparent 50%), linear-gradient(180deg, #10232A 0%, #0c1a20 45%, #181816 100%)',
        }}
      />
      <img
        src="/images/tv-about-hero.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c1a20]/40 via-transparent to-[#0c1a20]/90" />
      <div className="pointer-events-none absolute inset-0 grid-dots-dark opacity-30" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 h-64 w-64 -translate-x-1/2 rounded-full bg-tv-cyan/20 blur-[100px]"
        animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-tv relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-tv-cyan/30 bg-tv-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-tv-cyan">
            Architecture
          </span>
          <h2 className="heading-lg mt-5 text-white">Evaluation pipeline, step by step</h2>
          <p className="body-muted mt-4">
            From first model ingest to production selection — one evidence path your whole team can
            trust.
          </p>
        </Reveal>

        {/* Pipeline strip — desktop / tablet; mobile uses the timeline list below */}
        <Reveal className="mx-auto mt-10 hidden max-w-4xl md:block" delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm sm:gap-1 sm:px-5">
            {steps.map((s, i) => (
              <button
                key={s.n}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 text-xs font-semibold transition sm:px-3 sm:text-[13px]',
                  active === i
                    ? 'bg-tv-cyan text-tv-bg shadow-glow'
                    : 'text-white/50 hover:bg-white/5 hover:text-white',
                )}
              >
                <span
                  className={cn(
                    'flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg border',
                    active === i ? 'border-tv-bg/25 bg-tv-bg/90' : 'border-white/10 bg-[#0c1a20]',
                  )}
                >
                  <img
                    src={s.image}
                    alt=""
                    className="h-[70%] w-[70%] object-contain mix-blend-screen"
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                </span>
                <span className="hidden sm:inline">{s.title}</span>
                <span className="sm:hidden">{s.tag}</span>
                {i < steps.length - 1 && (
                  <ArrowRight
                    className={cn(
                      'ml-0.5 hidden h-3 w-3 sm:inline',
                      active === i ? 'text-tv-bg/60' : 'text-white/25',
                    )}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Featured stage preview — tablet/desktop; mobile uses timeline */}
        <Reveal className="mx-auto mt-8 hidden max-w-4xl md:block" delay={0.08}>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-tv-cyan/25 bg-gradient-to-br from-[#1a3038] via-[#162A32] to-[#10232A] p-5 shadow-soft sm:p-7">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-tv-cyan/15 blur-3xl" />
            <div className="relative grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="relative mx-auto flex aspect-square w-full max-w-[200px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0c1a20] sm:mx-0">
                <img
                  key={steps[active].image}
                  src={steps[active].image}
                  alt={`${steps[active].title} architecture icon`}
                  className="h-[72%] w-[72%] object-contain mix-blend-screen"
                  width={400}
                  height={400}
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 rounded-lg bg-tv-cyan px-2.5 py-1 font-mono text-xs font-bold text-tv-bg">
                  {steps[active].n}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tv-cyan">
                  Stage {steps[active].n} · {steps[active].tag}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  {steps[active].title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-tv-ink-soft sm:text-base">
                  {steps[active].desc}
                </p>
                <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-tv-cyan">
                  {steps[active].hint}
                </p>
                <div className="mt-5 flex gap-1.5" aria-hidden>
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        'h-1.5 flex-1 rounded-full transition',
                        i <= active ? 'bg-tv-cyan' : 'bg-white/10',
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Desktop zig-zag */}
        <div className="relative mx-auto mt-14 hidden max-w-5xl md:block">
          <svg
            className="pointer-events-none absolute inset-x-0 top-6 bottom-6 left-1/2 h-[calc(100%-3rem)] w-28 -translate-x-1/2"
            viewBox="0 0 112 900"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="archPath" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B58863" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#D3C3B9" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#B58863" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path
              d="M56 0 C56 40 30 90 30 140 C30 200 82 240 82 300 C82 360 30 400 30 460 C30 520 82 560 82 620 C82 680 56 720 56 900"
              fill="none"
              stroke="url(#archPath)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {[140, 300, 460, 620, 760].map((y, i) => (
              <g key={y}>
                <circle cx="56" cy={y} r="9" fill="rgba(181,136,99,0.2)" />
                <circle
                  cx="56"
                  cy={y}
                  r="5"
                  fill={i === active ? '#B58863' : '#D3C3B9'}
                  opacity={i === active ? 1 : 0.55}
                />
              </g>
            ))}
          </svg>

          <ol className="relative space-y-8 lg:space-y-10">
            {steps.map((step, i) => {
              const iconLeft = i % 2 === 0
              const isActive = active === i
              return (
                <motion.li
                  key={step.n}
                  initial={{ opacity: 0, x: iconLeft ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: easeOut }}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 lg:gap-6"
                  onMouseEnter={() => setActive(i)}
                >
                  <div className="flex justify-end">
                    {iconLeft ? (
                      <StepIcon image={step.image} active={isActive} />
                    ) : (
                      <StepCard
                        step={step}
                        align="right"
                        active={isActive}
                        onSelect={() => setActive(i)}
                      />
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      'relative z-10 flex h-14 min-w-[5rem] items-center justify-center rounded-full border px-4 transition sm:h-16 sm:min-w-[5.75rem]',
                      isActive
                        ? 'border-tv-cyan bg-tv-cyan shadow-glow scale-105'
                        : 'border-tv-cyan/35 bg-gradient-to-r from-[#3D4D55] to-[#10232A] hover:border-tv-cyan/60',
                    )}
                    aria-label={`Select stage ${step.n}: ${step.title}`}
                    aria-pressed={isActive}
                  >
                    <span
                      className={cn(
                        'font-mono text-base font-bold sm:text-lg',
                        isActive ? 'text-tv-bg' : 'text-tv-cyan',
                      )}
                    >
                      {step.n}
                    </span>
                  </button>

                  <div className="flex justify-start">
                    {iconLeft ? (
                      <StepCard
                        step={step}
                        align="left"
                        active={isActive}
                        onSelect={() => setActive(i)}
                      />
                    ) : (
                      <StepIcon image={step.image} active={isActive} mirror />
                    )}
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>

        {/* Mobile */}
        <ol className="relative mx-auto mt-10 max-w-md space-y-4 md:hidden">
          <div className="pointer-events-none absolute bottom-6 left-10 top-6 w-px -translate-x-1/2 bg-gradient-to-b from-tv-cyan via-white/25 to-tv-cyan/40" />
          {steps.map((step, i) => {
            const Icon = step.icon
            const isActive = active === i
            return (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    'relative flex w-full gap-4 rounded-2xl border p-4 text-left transition',
                    isActive
                      ? 'border-tv-cyan/45 bg-tv-cyan/10 shadow-glow'
                      : 'border-white/12 bg-white/[0.05] hover:border-tv-cyan/30',
                  )}
                >
                  <span
                    className={cn(
                      'relative z-10 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-[#0c1a20]',
                      isActive ? 'border-tv-cyan ring-2 ring-tv-cyan/35' : 'border-white/15',
                    )}
                  >
                    <img
                      src={step.image}
                      alt=""
                      className="h-[70%] w-[70%] object-contain mix-blend-screen"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 text-tv-cyan">
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                        {step.tag}
                      </span>
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold text-white">
                      {step.title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-tv-muted">
                      {step.desc}
                    </span>
                  </span>
                </button>
              </motion.li>
            )
          })}
        </ol>

        <Reveal className="mt-12 flex w-full flex-col items-stretch gap-3 text-center sm:flex-row sm:items-center sm:justify-center" delay={0.1}>
          <Link to="/#contact" className="btn-primary w-full justify-center sm:w-auto">
            Request Access <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/#platform" className="btn-outline-light w-full justify-center sm:w-auto">
            Explore engines
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function StepCard({
  step,
  align,
  active,
  onSelect,
}: {
  step: Step
  align: 'left' | 'right'
  active: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'w-full max-w-sm rounded-2xl border p-5 text-left shadow-soft backdrop-blur-md transition duration-300 sm:p-6',
        align === 'right' ? 'text-right' : 'text-left',
        active
          ? 'border-tv-cyan/50 bg-tv-cyan/10 scale-[1.02]'
          : 'border-white/15 bg-white/[0.06] hover:border-tv-cyan/35 hover:bg-white/[0.09]',
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-tv-cyan">{step.tag}</p>
      <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-tv-ink-soft">{step.desc}</p>
      <p
        className={cn(
          'mt-3 font-mono text-[10px] text-tv-cyan/80',
          align === 'right' ? 'text-right' : 'text-left',
        )}
      >
        {step.hint}
      </p>
    </button>
  )
}

function StepIcon({
  image,
  active,
  mirror,
}: {
  image: string
  active: boolean
  mirror?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-2', mirror && 'flex-row-reverse')} aria-hidden>
      <span
        className={cn(
          'hidden h-px w-8 transition lg:block lg:w-12',
          active ? 'bg-tv-cyan' : 'bg-white/25',
        )}
      />
      <ArrowRight
        className={cn(
          'hidden h-3.5 w-3.5 sm:block',
          mirror && 'rotate-180',
          active ? 'text-tv-cyan' : 'text-white/35',
        )}
      />
      <span
        className={cn(
          'relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border bg-[#0c1a20] transition sm:h-[4.75rem] sm:w-[4.75rem]',
          active
            ? 'border-tv-cyan shadow-glow ring-2 ring-tv-cyan/40'
            : 'border-white/20',
        )}
      >
        <img
          src={image}
          alt=""
          className="h-[72%] w-[72%] object-contain mix-blend-screen"
          width={96}
          height={96}
          loading="lazy"
        />
      </span>
    </div>
  )
}
