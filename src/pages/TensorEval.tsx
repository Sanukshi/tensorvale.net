import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FlaskConical,
  GitCompare,
  LayoutDashboard,
  LineChart,
  Scale,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '../lib/utils'
import { easeOut } from '../lib/motion'

type Capability = {
  title: string
  short: string
  desc: string
  features: string[]
  image: string
  icon: LucideIcon
}

const capabilities: Capability[] = [
  {
    title: 'Model Evaluation Engine',
    short: 'Evaluation',
    desc: 'Run structured evaluation workloads against candidate models with shared metrics and validated results.',
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
    title: 'Experimentation Platform',
    short: 'Experiment',
    desc: 'Create, version, and track experiments so teams share one clear audit trail from idea to result.',
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
    title: 'Model Benchmarking Engine',
    short: 'Benchmark',
    desc: 'Measure latency, throughput, and resource utilization under consistent production-like workloads.',
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
    title: 'Comparison Intelligence',
    short: 'Compare',
    desc: 'Place models and configurations side by side to surface accuracy, speed, and cost trade-offs.',
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
    title: 'AI Evaluation Dashboard',
    short: 'Dashboard',
    desc: 'Track active experiments and historical evaluation signals — scores, latency, throughput, GPU util, and run history.',
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

const pipeline = [
  { n: '01', title: 'AI Models', tag: 'Ingest' },
  { n: '02', title: 'Evaluation Workloads', tag: 'Run' },
  { n: '03', title: 'Benchmarking', tag: 'Measure' },
  { n: '04', title: 'Performance Analysis', tag: 'Analyze' },
  { n: '05', title: 'Model Selection', tag: 'Decide' },
]

const stack = [
  { name: 'NeMo', image: '/images/tv-tech-nemo.png', blurb: 'Training & customization pathways' },
  { name: 'TensorRT', image: '/images/tv-tech-tensorrt.png', blurb: 'Optimized inference builds' },
  { name: 'Triton', image: '/images/tv-tech-triton.png', blurb: 'Production model serving' },
  { name: 'NIM', image: '/images/tv-tech-nim.png', blurb: 'Inference microservices' },
]

export default function TensorEval() {
  const reduce = useReducedMotion()

  return (
    <div className="pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-tv-line/60">
        <div className="pointer-events-none absolute inset-0 bg-[#0c1a20]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 15% 10%, rgba(181,136,99,0.28), transparent 55%), radial-gradient(ellipse 50% 45% at 90% 80%, rgba(61,77,85,0.5), transparent 50%), linear-gradient(165deg, #10232A 0%, #0c1a20 50%, #181816 100%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 grid-dots-dark opacity-30" />

        <div className="container-tv relative py-10 sm:py-14 lg:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/55 transition hover:text-tv-cyan"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: easeOut }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-tv-cyan/30 bg-tv-cyan/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-tv-cyan">
                <Sparkles className="h-3.5 w-3.5" />
                Product
              </span>
              <h1 className="mt-5 font-winked text-4xl leading-[1.05] tracking-tight text-tv-sand sm:text-5xl lg:text-[4rem]">
                Tensor<span className="text-tv-cyan">Eval</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                The TensorVale evaluation product — systematically test, benchmark, compare, and
                select AI models with repeatable evidence before production.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link to="/#contact" className="btn-primary w-full justify-center sm:w-auto">
                  Request Access <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/#architecture" className="btn-outline-light w-full justify-center sm:w-auto">
                  View Architecture
                </Link>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-3 max-w-md">
                {[
                  { v: '5', l: 'Engines' },
                  { v: '5', l: 'Pipeline stages' },
                  { v: '1', l: 'Evidence path' },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center"
                  >
                    <dt className="font-display text-2xl font-bold text-tv-cyan">{s.v}</dt>
                    <dd className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45">
                      {s.l}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: easeOut }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-tv-cyan/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#0c1a20] shadow-soft">
                <img
                  src="/images/tv-cta-hub.png"
                  alt="TensorEval evaluation intelligence hub"
                  className="aspect-[4/3] w-full object-cover object-center"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a20] via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-[#10232A]/85 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tv-cyan">
                    TensorEval
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Evaluation → Experiment → Benchmark → Compare → Select
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="section-pad relative overflow-hidden bg-[#F3EEE9]">
        <div className="container-tv relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7354]">
              How TensorEval works
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#181816] sm:text-4xl">
              One evidence path from ingest to selection
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5c5654]">
              Every stage is versioned, measurable, and shared across engineering, MLOps, and research
              teams.
            </p>
          </div>

          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {pipeline.map((step, i) => (
              <motion.li
                key={step.n}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35, ease: easeOut }}
                className="rounded-2xl border border-[#181816]/8 bg-white p-5 shadow-[0_12px_36px_rgba(24,24,22,0.06)]"
              >
                <p className="font-mono text-xs font-bold text-[#B58863]">{step.n}</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a6a4e]">
                  {step.tag}
                </p>
                <p className="mt-1.5 font-display text-base font-bold text-[#181816]">{step.title}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-pad relative">
        <div className="container-tv">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Capabilities</p>
            <h2 className="heading-lg mt-3 text-white">Five engines. One product.</h2>
            <p className="body-muted mt-4">
              TensorEval packages TensorVale’s evaluation stack into a single product surface your
              team can run every release cycle.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon
              const reverse = i % 2 === 1
              return (
                <motion.article
                  key={cap.short}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: 0.04, ease: easeOut }}
                  className={cn(
                    'grid items-center gap-6 overflow-hidden rounded-[1.75rem] border border-tv-line bg-tv-card p-5 sm:p-7 lg:grid-cols-2 lg:gap-10',
                    reverse && 'lg:[&>*:first-child]:order-2',
                  )}
                >
                  <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#0c1a20]">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="h-full w-full object-contain object-center p-4"
                      width={640}
                      height={512}
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-2 text-tv-cyan">
                      <Icon className="h-4 w-4" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                        {cap.short}
                      </span>
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-[1.75rem]">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-tv-muted sm:text-base">{cap.desc}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {cap.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tv-cyan/20 text-tv-cyan">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section-pad relative overflow-hidden border-y border-tv-line/60">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(181,136,99,0.12), transparent 55%)',
          }}
        />
        <div className="container-tv relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Compatibility</p>
            <h2 className="heading-lg mt-3 text-white">Built for your stack</h2>
            <p className="body-muted mt-4">
              TensorEval works with NeMo, TensorRT, Triton, and NIM pathways — interoperability
              references, not brand positioning.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((t, i) => (
              <motion.div
                key={t.name}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="overflow-hidden rounded-[1.5rem] border border-tv-line bg-tv-card"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-[#0c1a20]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-[65%] w-[65%] object-contain mix-blend-screen"
                    width={240}
                    height={180}
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-xl font-bold text-white">{t.name}</p>
                  <p className="mt-1.5 text-sm text-tv-muted">{t.blurb}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-14 sm:py-16">
        <div className="container-tv">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-tv-cyan/30 px-6 py-12 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14">
            <div className="absolute inset-0 bg-[#0c1a20]" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 80% at 0% 50%, rgba(181,136,99,0.28), transparent 55%), linear-gradient(135deg, #181816 0%, #10232A 50%, #162A32 100%)',
              }}
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start evaluating with <span className="text-tv-cyan">TensorEval</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                Request access or talk to sales about enterprise evaluation programs and dedicated
                deployments.
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link to="/#contact" className="btn-primary justify-center">
                  Request Access <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:connect@tensorvale.net"
                  className="btn-outline-light justify-center"
                >
                  connect@tensorvale.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
