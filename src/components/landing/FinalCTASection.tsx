import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal, easeOut, Float } from '../../lib/motion'

const signals = [
  'Model evaluation',
  'Experimentation',
  'Benchmarking',
  'Comparison',
  'Selection',
]

export default function FinalCTASection() {
  const reduce = useReducedMotion()

  return (
    <section id="final-cta" className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
      <div className="container-tv">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-tv-cyan/30 sm:rounded-[2.5rem]">
            {/* Background layers */}
            <div className="absolute inset-0 bg-[#0c1a20]" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 80% at 0% 50%, rgba(181,136,99,0.28), transparent 55%), radial-gradient(ellipse 60% 70% at 100% 20%, rgba(61,77,85,0.5), transparent 50%), linear-gradient(135deg, #181816 0%, #10232A 45%, #162A32 100%)',
              }}
            />
            <div className="absolute inset-0 grid-dots-dark opacity-30" />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-tv-cyan/25 blur-[90px]"
              animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-tv-line/50 blur-[80px]"
              animate={reduce ? undefined : { opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            />

            <div className="relative grid items-center gap-8 px-5 py-10 sm:gap-10 sm:px-10 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-14 lg:py-20">
              {/* Copy */}
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-tv-cyan/30 bg-tv-cyan/10 px-3 py-1.5 text-xs font-semibold text-tv-cyan">
                  <Sparkles className="h-3.5 w-3.5" />
                  Ready when you are
                </span>

                <h2 className="mt-5 max-w-xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                  Gain clarity. Build confidence.{' '}
                  <span className="text-tv-cyan">Evaluate with TensorVale.</span>
                </h2>

                <p className="mt-4 max-w-lg text-base leading-relaxed text-tv-ink-soft sm:text-lg">
                  Request access or talk to sales about enterprise evaluation and dedicated
                  deployments.
                </p>

                <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
                  <Link to="/#contact" className="btn-primary w-full justify-center sm:w-auto">
                    Request Access <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:hello@tensorvale.net?subject=Talk%20to%20Sales"
                    className="btn-outline-light w-full justify-center sm:w-auto"
                  >
                    <Mail className="h-4 w-4" />
                    Talk to Sales
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {signals.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.35, ease: easeOut }}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-tv-ink-soft"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Visual panel */}
              <Float className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end" amplitude={9} duration={6}>
                <div className="absolute -inset-3 rounded-[1.75rem] bg-tv-cyan/15 blur-2xl motion-safe:animate-pulse-glow" />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-tv-bg/50 shadow-soft backdrop-blur-sm sm:rounded-[1.75rem]">
                  <img
                    src="/images/tv-cta-hub.png"
                    alt="TensorVale evaluation intelligence hub"
                    className="aspect-[4/3] w-full object-cover object-center"
                    width={640}
                    height={480}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a20] via-[#0c1a20]/35 to-transparent" />

                  <div className="absolute inset-x-4 bottom-4 space-y-3 sm:inset-x-5 sm:bottom-5">
                    <div className="rounded-2xl border border-white/10 bg-tv-bg/80 p-4 backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tv-cyan text-tv-bg">
                          <ShieldCheck className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">Production-ready selection</p>
                          <p className="text-xs text-tv-muted">Evidence before every release</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {[
                          { l: 'Score', v: '94.8' },
                          { l: 'Latency', v: '82ms' },
                          { l: 'GPU', v: '71%' },
                        ].map((m) => (
                          <div
                            key={m.l}
                            className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2 text-center"
                          >
                            <p className="font-mono text-sm font-semibold text-tv-cyan">{m.v}</p>
                            <p className="text-[10px] uppercase tracking-wider text-tv-muted">{m.l}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Float>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
