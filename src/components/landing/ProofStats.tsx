import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter'
import { cn } from '../../lib/utils'
import { easeOut } from '../../lib/motion'

type Stat = {
  id: string
  value: number
  display?: string
  label: string
  detail: string
  href: string
  image: string
  accent: string
}

const stats: Stat[] = [
  {
    id: 'engines',
    value: 5,
    label: 'Engines',
    detail: 'Evaluation · Experiment · Benchmark · Compare · Dashboard',
    href: '/#platform',
    image: '/images/tv-icon-engines.png',
    accent: 'Explore platform',
  },
  {
    id: 'stages',
    value: 7,
    label: 'Stages',
    detail: 'From model ingest through production selection',
    href: '/#architecture',
    image: '/images/tv-icon-stages.png',
    accent: 'See architecture',
  },
  {
    id: 'entities',
    value: 0,
    display: 'SL+US',
    label: 'Entities',
    detail: 'Tensorvale PVT LTD · Tensorvale LLC',
    href: '/#contact',
    image: '/images/tv-icon-entities.png',
    accent: 'Global offices',
  },
]

type Variant = 'hero' | 'band'

export default function ProofStats({
  variant = 'band',
  className,
}: {
  variant?: Variant
  className?: string
}) {
  const reduce = useReducedMotion()
  const isHero = variant === 'hero'

  const list = (
    <div
      className={cn(
        'grid gap-3',
        isHero
          ? 'max-w-lg grid-cols-1 min-[420px]:grid-cols-3 min-[420px]:gap-2 sm:gap-3'
          : 'sm:grid-cols-3 sm:gap-4',
      )}
    >
      {stats.map((s, i) => {
        return (
          <motion.div
            key={s.id}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.07, duration: 0.4, ease: easeOut }}
          >
            <Link
              to={s.href}
              className={cn(
                'group relative flex h-full flex-col overflow-hidden border transition',
                'focus-visible:outline-none',
                isHero
                  ? 'rounded-2xl border-tv-line bg-tv-card/80 p-3.5 hover:border-tv-cyan/45 hover:bg-tv-card min-[420px]:p-3 sm:p-3.5'
                  : 'rounded-[1.5rem] border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm hover:border-tv-cyan/40 hover:bg-tv-cyan/10 sm:p-6',
              )}
            >
              <div
                className={cn(
                  'pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-tv-cyan/10 blur-2xl transition group-hover:bg-tv-cyan/20',
                )}
              />

              <div className="relative flex items-start justify-between gap-2">
                <span
                  className={cn(
                    'flex items-center justify-center overflow-hidden rounded-xl bg-[#0c1a20]',
                    isHero ? 'h-10 w-10 min-[420px]:h-9 min-[420px]:w-9' : 'h-12 w-12',
                  )}
                >
                  <img
                    src={s.image}
                    alt=""
                    className="h-full w-full object-contain mix-blend-screen p-1"
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                </span>
                <ArrowUpRight
                  className={cn(
                    'text-tv-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-tv-cyan',
                    isHero ? 'h-3.5 w-3.5' : 'h-4 w-4',
                  )}
                />
              </div>

              <p
                className={cn(
                  'relative mt-3 font-display font-bold tracking-tight text-tv-cyan',
                  isHero ? 'text-2xl min-[420px]:text-xl sm:text-3xl' : 'text-4xl sm:text-5xl',
                )}
              >
                {s.display ? (
                  s.display
                ) : (
                  <AnimatedCounter value={s.value} duration={1100} />
                )}
              </p>
              <p
                className={cn(
                  'relative mt-1 font-semibold text-white',
                  isHero ? 'text-xs sm:text-sm' : 'text-base',
                )}
              >
                {s.label}
              </p>
              {!isHero && (
                <>
                  <p className="relative mt-2 text-sm leading-relaxed text-tv-muted">{s.detail}</p>
                  <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-tv-cyan/80 transition group-hover:text-tv-cyan">
                    {s.accent} →
                  </p>
                </>
              )}
            </Link>
          </motion.div>
        )
      })}
    </div>
  )

  if (isHero) {
    return <div className={cn('mt-10', className)}>{list}</div>
  }

  return (
    <section
      className={cn('relative overflow-hidden border-y border-tv-line/80 py-10 sm:py-12', className)}
      aria-label="TensorVale at a glance"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 80% at 20% 50%, rgba(181,136,99,0.14), transparent 55%), radial-gradient(ellipse 45% 70% at 85% 50%, rgba(61,77,85,0.35), transparent 50%), linear-gradient(180deg, #10232A 0%, #162A32 50%, #10232A 100%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 grid-dots-dark opacity-25" />

      <div className="container-tv relative">
        <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">At a glance</p>
            <h2 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
              Built for serious evaluation programs
            </h2>
          </div>
          <p className="max-w-sm text-sm text-tv-muted">
            Tap a metric to jump to engines, architecture, or global offices.
          </p>
        </div>
        {list}
      </div>
    </section>
  )
}
