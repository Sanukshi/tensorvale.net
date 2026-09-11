import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Quote } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Reveal, easeOut } from '../../lib/motion'
import Logo from '../ui/Logo'

const items = [
  {
    quote:
      'TensorVale made our model comparisons reproducible — everyone trusts the same evaluation path.',
    name: 'Aisha Rahman',
    role: 'ML Engineer',
    photo: '/images/tv-avatar-aisha.png',
    ring: '#B58863',
    glow: 'rgba(181,136,99,0.45)',
  },
  {
    quote:
      'One place for workloads, benchmarks, and selection — latency and throughput sit beside accuracy.',
    name: 'Marcus Chen',
    role: 'MLOps Lead',
    photo: '/images/tv-avatar-marcus.png',
    ring: '#D3C3B9',
    glow: 'rgba(211,195,185,0.4)',
  },
  {
    quote: 'Experiment versioning cut weeks of notebook chaos before production decisions.',
    name: 'Elena Voss',
    role: 'Research Scientist',
    photo: '/images/tv-avatar-elena.png',
    ring: '#3D4D55',
    glow: 'rgba(61,77,85,0.55)',
  },
]

export default function TestimonialsSection() {
  const reduce = useReducedMotion()

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#B58863] py-10 sm:py-14 lg:py-16">
      <div className="container-tv relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#121210] shadow-[0_40px_100px_rgba(24,24,22,0.35)] sm:rounded-[2.25rem]">
            {/* Grid atmosphere */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.22]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(211,195,185,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(181,136,99,0.14) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#B58863]/20 blur-[90px]"
              animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-16 bottom-8 h-48 w-48 rounded-full bg-[#D3C3B9]/15 blur-[80px]"
              animate={reduce ? undefined : { opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            />

            <div className="relative px-5 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              {/* Header */}
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B58863]">
                    Social proof
                  </p>
                  <h2 className="mt-3 break-words font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
                    Trusted{' '}
                    <span className="text-[#B58863]">testimonials</span>
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                    Teams use TensorVale to evaluate, benchmark, and select models with shared
                    evidence — not scattered notebooks.
                  </p>
                </div>

                  <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
                    <Logo
                      variant="full"
                      to="/"
                      className="max-w-full [&_img]:h-10 [&_img]:max-w-[min(100%,220px)] sm:[&_img]:h-14 sm:[&_img]:max-w-none"
                    />
                    <Link
                      to="/#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#B58863] transition hover:text-[#D3C3B9]"
                    >
                      Request access <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
              </div>

              {/* Capsule cards */}
              <div className="mt-14 grid items-start gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:gap-10">
                {items.map((item, index) => (
                  <motion.article
                    key={item.name}
                    initial={reduce ? false : { opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
                    className={cn(
                      'group relative mx-auto w-full max-w-[280px] pt-14 sm:max-w-none',
                      index === 1 && 'sm:mt-14 lg:mt-16',
                    )}
                  >
                      {/* Avatar overlapping capsule */}
                      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
                        <span
                          className="absolute -inset-2 rounded-full opacity-70 blur-md transition group-hover:opacity-100"
                          style={{ background: item.glow }}
                        />
                        <div
                          className="relative h-[7.25rem] w-[7.25rem] overflow-hidden rounded-full border-[5px] border-[#121210] shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:h-32 sm:w-32"
                          style={{ backgroundColor: item.ring }}
                        >
                          <img
                            src={item.photo}
                            alt={item.name}
                            className="h-full w-full object-cover object-top"
                            width={160}
                            height={160}
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Capsule body */}
                      <div className="relative flex min-h-[300px] flex-col rounded-[2.5rem] border border-white/10 bg-[#1c1c1a] px-7 pb-10 pt-[5.75rem] text-center shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:min-h-[380px] sm:rounded-[999px] sm:px-7 sm:pt-28 lg:min-h-[400px]">
                        <Quote
                          className="mx-auto h-5 w-5 text-[#B58863]/70"
                          aria-hidden
                        />
                        <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                          {item.name.split(' ')[0]}
                        </h3>
                        <p className="mt-1 text-xs font-medium lowercase tracking-wide text-white/45">
                          {item.role}
                        </p>
                        <p className="mt-5 flex-1 text-sm leading-relaxed text-white/70">
                          “{item.quote}”
                        </p>

                        {/* Accent dots */}
                        <div className="mt-6 flex items-end justify-center gap-1.5">
                          <span
                            className="h-3.5 w-3.5 rounded-full"
                            style={{ backgroundColor: item.ring }}
                          />
                          <span
                            className="mb-0.5 h-2 w-2 rounded-full opacity-70"
                            style={{ backgroundColor: item.ring }}
                          />
                        </div>
                      </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
