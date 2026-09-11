import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, LineChart, Play, X } from 'lucide-react'
import { Reveal, easeOut } from '../../lib/motion'

const pillars = [
  {
    title: 'Evidence before production',
    desc: 'Replace ad-hoc notebook tests with repeatable evaluation workloads and shared metrics.',
    image: '/images/tv-about-icon-evidence.png',
  },
  {
    title: 'Benchmark with clarity',
    desc: 'Measure latency, throughput, and resource cost under standardized workloads.',
    image: '/images/tv-about-icon-benchmark.png',
  },
  {
    title: 'Built for ML teams',
    desc: 'Give engineers, MLOps, and researchers one evidence trail for model selection.',
    image: '/images/tv-about-icon-teams.png',
  },
]

export default function ProblemSolutionSection() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="about" className="section-pad relative scroll-mt-24 bg-[#F3EEE9]">
      <div
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(181,136,99,0.22), transparent 70%)' }}
      />

      <div className="container-tv relative">
        <Reveal>
          <span className="inline-flex rounded-full border border-[#B58863]/35 bg-[#B58863]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9A7354]">
            About us
          </span>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-12">
            <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-[#181816] sm:text-4xl lg:text-[2.85rem]">
              Introduction to a better{' '}
              <span className="text-[#B58863]">evaluation platform</span> for AI teams.
            </h2>
            <p className="text-sm leading-relaxed text-[#5c5654] sm:text-[0.95rem]">
              TensorVale unifies model evaluation, experimentation, and benchmarking so every
              production decision is backed by reproducible evidence.
            </p>
          </div>
        </Reveal>

        {/* Feature cards with custom icons */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4, ease: easeOut }}
              className="rounded-[1.5rem] border border-[#181816]/6 bg-white p-6 shadow-[0_18px_40px_rgba(24,24,22,0.08)] sm:p-7"
            >
              <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-[#181816]">
                <img
                  src={p.image}
                  alt=""
                  className="h-10 w-10 object-contain mix-blend-screen"
                  width={80}
                  height={80}
                  loading="lazy"
                />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-[#181816]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b6562]">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Media band */}
        <Reveal delay={0.1} className="relative mt-10 sm:mt-12 sm:pb-28 md:pb-32">
          <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
            <img
              src="/images/tv-about-hero.png"
              onError={(e) => {
                e.currentTarget.src = '/images/tv-about-team.png'
              }}
              alt="TensorVale evaluation intelligence — models evaluated with verified outcomes"
              className="aspect-[16/9] w-full object-cover object-center sm:aspect-[2.2/1]"
              width={1400}
              height={700}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181816]/55 via-[#181816]/15 to-transparent" />

            {/* Desktop caption (avoids collision with play card) */}
            <div className="absolute bottom-5 left-5 z-10 hidden max-w-md sm:bottom-7 sm:left-7 sm:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                Evaluation culture
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-white">
                Driven by rigor. Guided by metrics.
              </p>
              <Link to="/#platform" className="btn-primary mt-4 inline-flex">
                Explore platform <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile play control — top-right, no overlap with caption */}
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="absolute right-3 top-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#B58863] text-[#181816] shadow-glow sm:hidden"
              aria-label="Play overview"
            >
              <Play className="h-5 w-5 fill-current" />
            </button>
          </div>

          {/* Mobile caption + CTA under image */}
          <div className="mt-5 sm:hidden">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a6a4e]">
              Evaluation culture
            </p>
            <p className="mt-1 font-display text-xl font-bold text-[#181816]">
              Driven by rigor. Guided by metrics.
            </p>
            <Link to="/#platform" className="btn-primary mt-4 inline-flex w-full justify-center sm:w-auto">
              Explore platform <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <motion.button
            type="button"
            onClick={() => setVideoOpen(true)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="group absolute bottom-0 right-3 z-20 hidden w-[38%] max-w-[200px] overflow-hidden rounded-[1.25rem] border-4 border-[#F3EEE9] bg-[#181816] shadow-soft sm:right-6 sm:block sm:max-w-[240px] sm:rounded-[1.5rem] md:right-8 md:max-w-[260px] md:w-[26%]"
            aria-label="Play overview"
          >
            <img
              src="/images/tv-about-video-ai.png"
              alt=""
              className="aspect-[3/4] w-full object-cover object-center"
              width={400}
              height={520}
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-[#181816]/25">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B58863] text-[#181816] shadow-glow sm:h-14 sm:w-14">
                <Play className="h-5 w-5 fill-current sm:h-6 sm:w-6" />
              </span>
            </span>
          </motion.button>
        </Reveal>
      </div>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#10232A]/75 backdrop-blur-sm"
              aria-label="Close"
              onClick={() => setVideoOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="about-video-title"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[1.5rem] border border-tv-line bg-[#162A32] shadow-soft"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2 text-tv-cyan">
                  <LineChart className="h-4 w-4" />
                  <h3 id="about-video-title" className="text-sm font-semibold text-white">
                    TensorVale overview
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-tv-cyan"
                  aria-label="Close dialog"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="relative aspect-video bg-[#0c1a20]">
                <img
                  src="/images/tv-about-video-ai.png"
                  alt=""
                  className="h-full w-full object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-tv-cyan text-tv-bg">
                    <Play className="h-7 w-7 fill-current" />
                  </span>
                  <p className="mt-4 max-w-md text-sm text-white/75">
                    Walk through evaluation → experimentation → benchmarking → comparison → selection
                    with TensorVale.
                  </p>
                  <Link
                    to="/#contact"
                    onClick={() => setVideoOpen(false)}
                    className="btn-primary mt-5"
                  >
                    Request a live walkthrough <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
