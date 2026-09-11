import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Flame,
  FlaskConical,
  Gauge,
  GitCompare,
  Layers,
  LayoutDashboard,
  Lock,
  Scale,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '../lib/utils'
import { easeOut } from '../lib/motion'

type ProductModule = {
  id: string
  title: string
  badge: string
  short: string
  headline: string
  description: string
  features: string[]
  stats: { label: string; value: string }[]
  image: string
  icon: LucideIcon
}

const productModules: ProductModule[] = [
  {
    id: 'evaluation',
    title: 'Automated Evaluation Engine',
    badge: 'Core Engine',
    short: 'Evaluation',
    headline: 'Standardized LLM testing against golden datasets and custom rubrics.',
    description:
      'Run reproducible evaluation suites across candidate models. Define precision, conversational accuracy, semantic correctness, and automated model-as-a-judge scoring with verifiable evidence.',
    features: [
      'Automated Model-as-a-Judge scoring protocols',
      'Golden dataset & domain-specific test suites',
      'Conversational accuracy & hallucination audits',
      'Deterministic regression tracking across prompt variants',
    ],
    stats: [
      { label: 'Evaluation Precision', value: '99.2%' },
      { label: 'Audit Repeatability', value: '100%' },
    ],
    image: '/images/tv-engine-eval.png',
    icon: FlaskConical,
  },
  {
    id: 'benchmark',
    title: 'Model Benchmarking Engine',
    badge: 'Hardware-Calibrated',
    short: 'Benchmarking',
    headline: 'Measure real-world latency decomposition, throughput, and GPU utilization.',
    description:
      'Profile inference viability under simulated multi-tenant production traffic. Compare execution profiles across FP16 and INT8 precisions and detect kernel bottlenecks before launch.',
    features: [
      'P50, P95, and P99 tail latency decomposition',
      'Token throughput & concurrency stress-testing',
      'Memory footprint reduction & kernel profiling',
      'Multi-GPU inference scaling benchmarks',
    ],
    stats: [
      { label: 'Latency Profiling', value: 'Sub-ms' },
      { label: 'Throughput Stress', value: '10k+ req/s' },
    ],
    image: '/images/tv-engine-bench.png',
    icon: Scale,
  },
  {
    id: 'compare',
    title: 'Multi-Model Decision Matrix',
    badge: 'Intelligence Layer',
    short: 'Comparison',
    headline: 'Side-by-side Pareto-frontier analysis for optimal model selection.',
    description:
      'Eliminate subjective guesswork. Rank candidate models across cost, speed, context fidelity, and task-specific accuracy to identify the perfect production configuration.',
    features: [
      'Side-by-side candidate model leaderboards',
      'Pareto-frontier cost vs. latency trade-off visualizer',
      'Weighted multi-criteria decision scoring (MCDS)',
      'Direct export of executive decision audit logs',
    ],
    stats: [
      { label: 'Selection Efficiency', value: '4.8x' },
      { label: 'Inference Cost Saved', value: 'Up to 45%' },
    ],
    image: '/images/tv-engine-compare.png',
    icon: GitCompare,
  },
  {
    id: 'cicd',
    title: 'Continuous CI/CD Release Gates',
    badge: 'Enterprise MLOps',
    short: 'Governance',
    headline: 'Automated release gates preventing regressions in production pipelines.',
    description:
      'Integrate ValeMetric directly into your deployment pipelines. Automatically block checkpoints that fail accuracy or latency SLAs, and promote winning models seamlessly.',
    features: [
      'Programmable pass/fail deployment thresholds',
      'Automated GitHub Actions, GitLab, and CI integrations',
      'Model checkpoint versioning and audit trails',
      'Instant rollback notifications and alerts',
    ],
    stats: [
      { label: 'Regression Prevention', value: 'Zero Drift' },
      { label: 'CI Pipeline Gating', value: 'Automated' },
    ],
    image: '/images/tv-engine-experiment.png',
    icon: Workflow,
  },
]

type CandidateModel = {
  id: string
  name: string
  provider: string
  tag: string
  accuracy: number
  p99Latency: number
  throughput: number
  memory: string
  slaStatus: 'Certified' | 'Exceeds SLA' | 'Review'
}

const candidateModels: CandidateModel[] = [
  {
    id: 'llama-3.3-70b',
    name: 'Llama 3.3 70B Instruct',
    provider: 'Meta AI / Self-Hosted',
    tag: 'FP16 Optimized',
    accuracy: 96.8,
    p99Latency: 38,
    throughput: 142,
    memory: '39.4 GB',
    slaStatus: 'Certified',
  },
  {
    id: 'mistral-large',
    name: 'Mistral Large 2',
    provider: 'Mistral AI',
    tag: 'INT8 Quantized',
    accuracy: 95.4,
    p99Latency: 29,
    throughput: 168,
    memory: '28.2 GB',
    slaStatus: 'Certified',
  },
  {
    id: 'custom-finetune',
    name: 'ValiCore FinLLM v3.2',
    provider: 'Custom Enterprise Checkpoint',
    tag: 'Domain-Tuned',
    accuracy: 98.4,
    p99Latency: 32,
    throughput: 154,
    memory: '34.1 GB',
    slaStatus: 'Exceeds SLA',
  },
  {
    id: 'qwen-2.5-coder',
    name: 'Qwen 2.5 32B Coder',
    provider: 'OpenWeights Foundation',
    tag: 'Specialized Syntax',
    accuracy: 94.1,
    p99Latency: 24,
    throughput: 185,
    memory: '19.8 GB',
    slaStatus: 'Certified',
  },
]

const audienceCards = [
  {
    role: 'AI & ML Engineers',
    icon: FlaskConical,
    tag: 'Model Quality',
    headline: 'Replace subjective prompting with verifiable evaluation runs.',
    points: [
      'Automate golden dataset regression checks',
      'Test multi-turn conversational accuracy',
      'Run automated model-as-a-judge benchmarks',
      'Verify checkpoint quality across prompt variations',
    ],
  },
  {
    role: 'MLOps & Infrastructure',
    icon: Server,
    tag: 'Serving Viability',
    headline: 'Stress-test throughput and latency before scaling GPU clusters.',
    points: [
      'Profile dynamic batching under multi-tenant load',
      'Benchmark FP16 vs INT8 quantization trade-offs',
      'Verify memory footprint reduction and kernel speed',
      'Enforce automated CI/CD deployment gates',
    ],
  },
  {
    role: 'Product & Risk Leaders',
    icon: ShieldCheck,
    tag: 'Governance & Trust',
    headline: 'Deliver compliant AI products backed by immutable evidence logs.',
    points: [
      'Continuous toxicity and hallucination scoring',
      'Audit logs for regulatory and enterprise compliance',
      'Cross-version safety guardrail monitoring',
      'Clear trade-off visualizers for stakeholder sign-off',
    ],
  },
  {
    role: 'Executive & Finance',
    icon: BarChart3,
    tag: 'Cost & Efficiency',
    headline: 'Maximize GPU return on investment and accelerate time-to-market.',
    points: [
      'Save up to 45% in inferencing infrastructure costs',
      'Choose the most cost-effective candidate model per task',
      'Standardize AI evaluation across multiple internal teams',
      'Eliminate catastrophic model regressions in production',
    ],
  },
]

const nvidiaTechStack = [
  {
    name: 'NVIDIA NeMo Framework',
    badge: 'Generative Evaluation Engine',
    summary: 'Core evaluation and validation engine for generative models.',
    detail:
      'NeMo provides the enterprise toolchain required to run structured evaluation workloads on candidate Large Language Models (LLMs), test conversational accuracy, and execute automated model-as-a-judge benchmarking protocols on custom domain datasets.',
    tags: ['Structured Evaluation', 'Conversational Accuracy', 'Model-as-a-Judge'],
    icon: Cpu,
  },
  {
    name: 'NVIDIA TensorRT',
    badge: 'Compiler & Optimization Engine',
    summary: 'High-performance compiler and optimization benchmarking engine.',
    detail:
      'In the Model Benchmarking Engine, TensorRT is used to evaluate candidate models under various precision levels (FP16, INT8), measuring latency decomposition, kernel execution times, and memory footprint reduction to verify production viability.',
    tags: ['FP16 / INT8 Precision', 'Kernel Profiling', 'Memory Reduction'],
    icon: Zap,
  },
  {
    name: 'NVIDIA Triton Inference Server',
    badge: 'Production Stress-Testing Runtime',
    summary: 'Multi-model serving and concurrency stress-testing environment.',
    detail:
      'Triton manages concurrent candidate model execution, dynamic batching evaluations, and throughput stress-tests. It provides the standardized environment needed to measure real-world performance under simulated multi-tenant traffic.',
    tags: ['Dynamic Batching', 'Concurrency Stress-Testing', 'Multi-Tenant Simulation'],
    icon: Server,
  },
  {
    name: 'NVIDIA NIM',
    badge: 'Inference Microservices',
    summary: 'Standardized, hardware-optimized containerized runtimes.',
    detail:
      'Specifically utilizing generative and language NIMs, this technology allows your platform to deploy candidate models within standardized, hardware-optimized containers. This enables teams to benchmark containerized models against enterprise SLAs in an isolated, production-grade runtime environment.',
    tags: ['Standardized Containers', 'Enterprise SLA Verification', 'Isolated Runtime'],
    icon: Layers,
  },
]

const enterpriseFeatures = [
  {
    title: 'Golden Dataset Registry',
    description: 'Version, curate, and partition domain datasets with cryptographic integrity.',
    icon: Database,
  },
  {
    title: 'Automated CI/CD Gates',
    description: 'Block deployment builds if accuracy drops below threshold or P99 latency spikes.',
    icon: CheckCircle2,
  },
  {
    title: 'Granular Role-Based Access',
    description: 'Enterprise SSO (SAML/Okta), team workspaces, and auditable user permissions.',
    icon: Lock,
  },
  {
    title: 'Private VPC & Air-Gap Ready',
    description: 'Deploy ValeMetric in your private cloud, on-premises cluster, or managed cloud.',
    icon: ShieldCheck,
  },
  {
    title: 'Hardware Telemetry',
    description: 'Live GPU utilization, thermal metrics, memory bandwidth, and compute efficiency.',
    icon: Gauge,
  },
  {
    title: 'Executive PDF/CSV Reports',
    description: 'One-click evidence reports ready for compliance reviews and leadership audits.',
    icon: LayoutDashboard,
  },
]

export default function ValeMetric() {
  const [activeTab, setActiveTab] = useState('evaluation')
  const [selectedModel, setSelectedModel] = useState<CandidateModel>(candidateModels[0])
  const [workloadType, setWorkloadType] = useState<'conversational' | 'latency' | 'stress'>('conversational')
  const reduce = useReducedMotion()

  const currentModule = productModules.find((m) => m.id === activeTab) || productModules[0]
  const ModuleIcon = currentModule.icon

  // Dynamic adjustments for the interactive studio based on selected workload
  const dynamicAccuracy =
    workloadType === 'conversational'
      ? selectedModel.accuracy
      : workloadType === 'latency'
        ? Number((selectedModel.accuracy - 0.6).toFixed(1))
        : Number((selectedModel.accuracy - 1.2).toFixed(1))

  const dynamicLatency =
    workloadType === 'conversational'
      ? selectedModel.p99Latency
      : workloadType === 'latency'
        ? Math.round(selectedModel.p99Latency * 0.75)
        : Math.round(selectedModel.p99Latency * 1.35)

  const dynamicThroughput =
    workloadType === 'conversational'
      ? selectedModel.throughput
      : workloadType === 'latency'
        ? Math.round(selectedModel.throughput * 1.4)
        : Math.round(selectedModel.throughput * 0.85)

  return (
    <div className="pb-0">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO (Product Focused + Live Portal CTA)                      */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden border-b border-tv-line/60 pt-6">
        <div className="pointer-events-none absolute inset-0 bg-[#0c1a20]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 55% at 20% 0%, rgba(181,136,99,0.32), transparent 55%), radial-gradient(ellipse 55% 45% at 85% 90%, rgba(61,77,85,0.55), transparent 50%), linear-gradient(165deg, #10232A 0%, #0c1a20 50%, #181816 100%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 grid-dots-dark opacity-35" />

        <div className="container-tv relative py-8 sm:py-12 lg:py-16">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-tv-cyan"
            >
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Live Portal Active
            </span>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: easeOut }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-tv-cyan/30 bg-tv-cyan/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-tv-cyan">
                <Sparkles className="h-3.5 w-3.5" />
                ValeMetric Platform
              </div>

              <h1 className="mt-5 font-winked text-4xl leading-[1.06] tracking-tight text-tv-sand sm:text-5xl lg:text-[4.1rem]">
                Precision Evaluation.{' '}
                <span className="block bg-gradient-to-r from-tv-cyan via-[#E6D7CC] to-tv-cyan bg-clip-text text-transparent">
                  Verified Production AI.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                ValeMetric is TensorVale’s enterprise-grade AI evaluation and model intelligence
                platform. Systematically stress-test candidate models, benchmark hardware latency,
                eliminate hallucination regressions, and deploy with repeatable evidence.
              </p>

              {/* Primary Action Button linking to live portal */}
              <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
                <a
                  href="https://portal.tensorvale.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold shadow-glow"
                >
                  <span>Launch ValeMetric Portal</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#modules"
                  className="btn-outline-light flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold"
                >
                  Explore Core Modules <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* High-level platform proof metrics */}
              <dl className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
                {[
                  { value: '99.4%', label: 'Test Reliability', note: 'Standardized' },
                  { value: '<35ms', label: 'P99 Tail Latency', note: 'Hardware Verified' },
                  { value: 'Zero', label: 'Drift Incidents', note: 'Gated Releases' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center backdrop-blur-sm"
                  >
                    <dt className="font-display text-xl font-bold text-tv-cyan sm:text-2xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/80">
                      {stat.label}
                    </dd>
                    <span className="mt-1 block text-[10px] text-white/45">{stat.note}</span>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Hero Visual Card: Live ValeMetric Studio Preview */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: easeOut }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-r from-tv-cyan/20 to-tv-line/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#10232A] p-5 shadow-soft">
                {/* Console header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-wider text-white/75">
                      valemetric.portal // eval-pipeline#481
                    </span>
                  </div>
                  <span className="rounded-full border border-tv-cyan/30 bg-tv-cyan/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-tv-cyan">
                    Active Run
                  </span>
                </div>

                {/* Main preview body */}
                <div className="mt-4 space-y-4">
                  {/* Candidate model card */}
                  <div className="rounded-xl border border-white/10 bg-[#0c1a20]/90 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-tv-cyan">
                          Top Candidate
                        </span>
                        <h4 className="font-display text-base font-bold text-white">
                          ValiCore FinLLM v3.2 (Domain-Tuned)
                        </h4>
                      </div>
                      <span className="rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 font-mono text-xs font-bold text-emerald-400">
                        98.4 / 100 Score
                      </span>
                    </div>

                    {/* Metric row */}
                    <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
                      <div>
                        <span className="block text-[10px] uppercase text-white/45">TTFT Latency</span>
                        <span className="font-mono text-sm font-semibold text-white">18.4 ms</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-white/45">Throughput</span>
                        <span className="font-mono text-sm font-semibold text-white">154 tok/s</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-white/45">SLA Health</span>
                        <span className="font-mono text-sm font-semibold text-emerald-400">Passed</span>
                      </div>
                    </div>
                  </div>

                  {/* Multi-stage pipeline tracker */}
                  <div className="space-y-2 rounded-xl border border-white/10 bg-[#162a32]/70 p-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-white/80">
                      <span>Evaluation Sequence</span>
                      <span className="text-tv-cyan">4 of 4 Completed</span>
                    </div>

                    <div className="grid grid-cols-4 gap-1.5 pt-1">
                      {[
                        { name: 'NeMo Judge', state: 'Complete' },
                        { name: 'TRT Precision', state: 'Complete' },
                        { name: 'Triton Stress', state: 'Complete' },
                        { name: 'NIM Gate', state: 'Passed' },
                      ].map((stage) => (
                        <div
                          key={stage.name}
                          className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-2 text-center"
                        >
                          <Check className="mx-auto h-3.5 w-3.5 text-emerald-400" />
                          <p className="mt-1 truncate text-[10px] font-medium text-white/70">
                            {stage.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Banner */}
                  <div className="flex items-center justify-between rounded-xl border border-tv-cyan/25 bg-tv-cyan/10 p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-tv-cyan/20 text-tv-cyan">
                        <Flame className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Production Certified</p>
                        <p className="text-[10px] text-white/55">Ready for immediate gateway deployment</p>
                      </div>
                    </div>
                    <a
                      href="https://portal.tensorvale.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-tv-cyan px-3 py-1.5 text-xs font-semibold text-tv-panel transition hover:bg-[#c9a07a]"
                    >
                      Open in Portal <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: INTERACTIVE PRODUCT MODULES (Product Focus)                    */}
      {/* ========================================================================= */}
      <section id="modules" className="section-pad relative overflow-hidden bg-[#10232A]">
        <div className="container-tv relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Product Capabilities</span>
            <h2 className="heading-lg mt-3 text-white">
              Four Mission-Critical Modules. One Unified Intelligence Surface.
            </h2>
            <p className="body-muted mt-4">
              ValeMetric transforms raw model outputs into objective, multi-dimensional decision
              data — giving your engineering and product organizations total certainty before rollout.
            </p>
          </div>

          {/* Module navigation pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {productModules.map((mod) => {
              const Icon = mod.icon
              const isActive = activeTab === mod.id
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveTab(mod.id)}
                  type="button"
                  className={cn(
                    'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200',
                    isActive
                      ? 'border border-tv-cyan bg-tv-cyan text-tv-panel shadow-glow'
                      : 'border border-white/10 bg-white/[0.04] text-white/70 hover:border-tv-cyan/40 hover:bg-white/[0.08] hover:text-white',
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{mod.short}</span>
                </button>
              )
            })}
          </div>

          {/* Active Module Card */}
          <motion.div
            key={currentModule.id}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="mt-10 overflow-hidden rounded-[2rem] border border-tv-line bg-[#162A32] p-6 sm:p-8 lg:p-10"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tv-cyan/20 text-tv-cyan">
                    <ModuleIcon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-tv-cyan">
                    {currentModule.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                  {currentModule.title}
                </h3>

                <p className="mt-2 text-base font-medium text-tv-sand">{currentModule.headline}</p>

                <p className="mt-4 text-sm leading-relaxed text-tv-muted sm:text-base">
                  {currentModule.description}
                </p>

                {/* Features list */}
                <div className="mt-6 space-y-2.5">
                  {currentModule.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-sm text-white/85">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-tv-cyan/20 text-tv-cyan">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Highlight stats */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  {currentModule.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                      <p className="font-display text-2xl font-bold text-tv-cyan">{stat.value}</p>
                      <p className="mt-1 text-xs text-white/55">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <a
                    href="https://portal.tensorvale.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs sm:text-sm"
                  >
                    Launch this module in Portal <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Module Graphic/Screenshot Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1a20] p-4">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#10232A]">
                  <img
                    src={currentModule.image}
                    alt={currentModule.title}
                    className="h-full w-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-2 text-xs text-white/50">
                  <span>Interactive Telemetry & Output</span>
                  <span className="font-mono text-[10px] text-tv-cyan">VALEMETRIC ENGINE v2.4</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: INTERACTIVE EVALUATION STUDIO (Product Experience)            */}
      {/* ========================================================================= */}
      <section className="section-pad relative overflow-hidden border-y border-tv-line/60 bg-[#0C1A20]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(181,136,99,0.12), transparent 60%)',
          }}
        />

        <div className="container-tv relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Interactive Product Studio</span>
            <h2 className="heading-lg mt-3 text-white">Experience ValeMetric in Real Time</h2>
            <p className="body-muted mt-4">
              Select candidate checkpoints and workload profiles to simulate how ValeMetric
              benchmarks performance, enforces SLA compliance, and surfaces optimal configurations.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-tv-line bg-[#162A32] p-6 sm:p-8 lg:p-10 shadow-soft">
            {/* Step 1: Model Selection */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-tv-cyan">
                Step 1: Select Candidate Model
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {candidateModels.map((model) => {
                  const isSelected = selectedModel.id === model.id
                  return (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => setSelectedModel(model)}
                      className={cn(
                        'rounded-xl border p-4 text-left transition duration-200',
                        isSelected
                          ? 'border-tv-cyan bg-tv-cyan/15 ring-1 ring-tv-cyan/50'
                          : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]',
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-tv-cyan">
                          {model.tag}
                        </span>
                        {isSelected && <Check className="h-4 w-4 text-tv-cyan" />}
                      </div>
                      <p className="mt-2 font-display text-sm font-bold text-white sm:text-base">
                        {model.name}
                      </p>
                      <p className="mt-1 text-xs text-white/50">{model.provider}</p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Workload Profile Selector */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-tv-cyan">
                Step 2: Choose Stress-Test Workload
              </p>
              <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
                {[
                  { id: 'conversational', label: 'Conversational QA & Domain Reasoning', icon: FlaskConical },
                  { id: 'latency', label: 'Low-Latency Retrieval & Function Calling', icon: Zap },
                  { id: 'stress', label: 'Multi-Tenant High Concurrency (1,000 req/s)', icon: Flame },
                ].map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setWorkloadType(w.id as any)}
                    className={cn(
                      'flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold sm:text-sm transition duration-150',
                      workloadType === w.id
                        ? 'border-tv-cyan bg-tv-cyan/20 text-white'
                        : 'border-white/10 bg-white/[0.02] text-white/60 hover:text-white',
                    )}
                  >
                    <w.icon className="h-3.5 w-3.5 text-tv-cyan" />
                    <span>{w.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Live Telemetry Scorecard */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0c1a20] p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-tv-cyan">
                    Live Telemetry Output
                  </span>
                  <h4 className="font-display text-lg font-bold text-white sm:text-xl">
                    {selectedModel.name} — Workload Simulation
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Status: {selectedModel.slaStatus}
                  </span>
                </div>
              </div>

              {/* Metric grid */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                    Accuracy Score
                  </p>
                  <p className="mt-2 font-mono text-2xl font-bold text-tv-sand sm:text-3xl">
                    {dynamicAccuracy}%
                  </p>
                  <span className="mt-1 block text-[10px] text-emerald-400">+3.4% vs Baseline</span>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                    P99 Latency
                  </p>
                  <p className="mt-2 font-mono text-2xl font-bold text-tv-cyan sm:text-3xl">
                    {dynamicLatency} ms
                  </p>
                  <span className="mt-1 block text-[10px] text-emerald-400">SLA: &lt;50ms Guaranteed</span>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                    Token Throughput
                  </p>
                  <p className="mt-2 font-mono text-2xl font-bold text-white sm:text-3xl">
                    {dynamicThroughput} <span className="text-xs text-white/50">tok/s</span>
                  </p>
                  <span className="mt-1 block text-[10px] text-tv-cyan">Dynamic Batching On</span>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                    Memory Footprint
                  </p>
                  <p className="mt-2 font-mono text-2xl font-bold text-tv-sand sm:text-3xl">
                    {selectedModel.memory}
                  </p>
                  <span className="mt-1 block text-[10px] text-white/45">TensorRT Optimized</span>
                </div>
              </div>

              {/* Portal CTA ribbon */}
              <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-xl border border-tv-cyan/20 bg-tv-cyan/[0.08] px-4 py-3 sm:flex-row">
                <p className="text-xs text-white/80">
                  Ready to test your actual weights or API endpoints against production datasets?
                </p>
                <a
                  href="https://portal.tensorvale.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary whitespace-nowrap text-xs font-semibold"
                >
                  Launch Full Evaluation in Portal <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: ENTERPRISE ROLE-BASED VALUE (Product Focus)                    */}
      {/* ========================================================================= */}
      <section className="section-pad relative overflow-hidden bg-[#10232A]">
        <div className="container-tv relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Enterprise Workflows</span>
            <h2 className="heading-lg mt-3 text-white">Built for Every AI Stakeholder</h2>
            <p className="body-muted mt-4">
              From low-level kernel engineers to product officers, ValeMetric provides the exact
              clarity each team needs to build, govern, and deploy with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audienceCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.role}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35, ease: easeOut }}
                  className="flex flex-col justify-between rounded-[1.75rem] border border-tv-line bg-[#162A32] p-6 tv-lift"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tv-cyan/15 text-tv-cyan">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-tv-cyan">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold text-white">{card.role}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-tv-muted">{card.headline}</p>

                    <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs text-white/75">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-tv-cyan" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ENTERPRISE INFERENCE STACK (Technical Details - Scannable)     */}
      {/* ========================================================================= */}
      <section className="section-pad relative overflow-hidden border-t border-tv-line/60 bg-[#0C1A20]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(181,136,99,0.18), transparent 60%)',
          }}
        />

        <div className="container-tv relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Enterprise Inference Stack</span>
            <h2 className="heading-lg mt-3 text-white">Powered by Premier NVIDIA AI Solutions</h2>
            <p className="body-muted mt-4">
              To guarantee enterprise throughput and hardware precision, ValeMetric seamlessly
              integrates with industry-standard acceleration SDKs and runtimes for building,
              benchmarking, and operating ValiCore AI.
            </p>
          </div>

          {/* 4 Scannable NVIDIA AI Tech Stack Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {nvidiaTechStack.map((tech, i) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: easeOut }}
                  className="relative overflow-hidden rounded-[1.75rem] border border-tv-line bg-[#162A32] p-6 sm:p-7 tv-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tv-cyan/15 text-tv-cyan">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-tv-cyan">
                          {tech.badge}
                        </span>
                        <h3 className="font-display text-xl font-bold text-white">{tech.name}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-sm font-medium text-tv-sand">{tech.summary}</p>
                  <p className="mt-2 text-xs leading-relaxed text-tv-muted">{tech.detail}</p>

                  {/* Scannable pill tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                    {tech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Architecture compatibility strip */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-[#10232A] p-5 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <h4 className="font-display text-base font-bold text-white">
                Engineered for Multi-Cloud & On-Premises GPU Clusters
              </h4>
              <p className="mt-1 text-xs text-white/60">
                Supports H100, H200, B200, A100, L40S, and cloud instances across AWS, Azure, GCP, and CoreWeave.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <a
                href="https://portal.tensorvale.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light whitespace-nowrap text-xs font-semibold"
              >
                Inspect Runtime Docs <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: ENTERPRISE GOVERNANCE & SECURITY                               */}
      {/* ========================================================================= */}
      <section className="section-pad relative overflow-hidden bg-[#10232A]">
        <div className="container-tv relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Governance & Security</span>
            <h2 className="heading-lg mt-3 text-white">Enterprise Readiness by Design</h2>
            <p className="body-muted mt-4">
              ValeMetric is architected from the ground up to meet stringent security, compliance,
              and data isolation requirements for regulated enterprise environments.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enterpriseFeatures.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="rounded-2xl border border-tv-line bg-[#162A32] p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-tv-cyan/15 text-tv-cyan">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-tv-muted">{f.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: FINAL HIGH-CONVERSION CTA                                      */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 border-t border-tv-line/60">
        <div className="container-tv">
          <div className="relative overflow-hidden rounded-[2rem] border border-tv-cyan/40 p-8 sm:p-12 lg:p-16 shadow-soft">
            <div className="absolute inset-0 bg-[#0c1a20]" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 80% at 0% 50%, rgba(181,136,99,0.32), transparent 60%), linear-gradient(135deg, #181816 0%, #10232A 50%, #162A32 100%)',
              }}
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-tv-cyan/30 bg-tv-cyan/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-tv-cyan">
                <Sparkles className="h-3.5 w-3.5" /> Start Evaluating Today
              </span>

              <h2 className="mt-5 font-winked text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Certify Your Models with <span className="text-tv-cyan">ValeMetric</span>?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                Log in to the live portal to run your first evaluation suite, benchmark hardware
                latency, and unlock empirical confidence for your AI systems.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://portal.tensorvale.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold shadow-glow w-full sm:w-auto"
                >
                  <span>Launch ValeMetric Portal</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <Link
                  to="/#contact"
                  className="btn-outline-light flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold w-full sm:w-auto"
                >
                  Contact Enterprise Sales <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-tv-cyan" /> Instant Portal Access
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-tv-cyan" /> Dedicated VPC & Air-Gap
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-tv-cyan" /> Enterprise SLA Guarantees
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
