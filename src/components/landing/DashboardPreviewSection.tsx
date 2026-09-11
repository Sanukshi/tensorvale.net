import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Box,
  Database,
  FileCode2,
  Server,
  Cpu,
  Settings2,
  AppWindow,
  Activity,
} from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter'
import { cn } from '../../lib/utils'

const inputs = [
  { label: 'AI models', icon: Box, hint: 'Candidates & variants' },
  { label: 'Evaluation datasets', icon: Database, hint: 'Ground-truth sets' },
  { label: 'Model checkpoints', icon: FileCode2, hint: 'Saved weights' },
  { label: 'Inference environments', icon: Server, hint: 'Runtime targets' },
  { label: 'GPU infrastructure', icon: Cpu, hint: 'Accelerator pool' },
  { label: 'Experiment configs', icon: Settings2, hint: 'Run parameters' },
  { label: 'AI applications', icon: AppWindow, hint: 'Downstream apps' },
  { label: 'Performance metrics', icon: Activity, hint: 'Score definitions' },
]

const workflow = [
  { step: 'Model ingestion', note: 'Register models & checkpoints' },
  { step: 'Dataset selection', note: 'Choose evaluation data' },
  { step: 'Experiment configuration', note: 'Set metrics & params' },
  { step: 'Model evaluation', note: 'Execute test runs' },
  { step: 'Performance benchmarking', note: 'Latency & throughput' },
  { step: 'Result comparison', note: 'Side-by-side analysis' },
  { step: 'Evaluation reporting', note: 'Decision-ready output' },
]

const metrics = [
  { label: 'Active experiments', value: 24, suffix: '' },
  { label: 'Models evaluated', value: 128, suffix: '' },
  { label: 'Eval score', value: 94.2, suffix: '', decimals: 1 },
  { label: 'Latency', value: 42, suffix: 'ms' },
  { label: 'Throughput', value: 1.8, suffix: 'k/s', decimals: 1 },
  { label: 'GPU util', value: 71, suffix: '%' },
]

const experiments = [
  { name: 'llama-3-8b · latency suite', status: 'Running', meta: 'GPU-A100 · 14m' },
  { name: 'mistral-7b · accuracy sweep', status: 'Queued', meta: 'Dataset v3' },
  { name: 'custom-ckpt-v12 · throughput', status: 'Complete', meta: 'Score 91.4' },
]

const bars = [42, 68, 55, 82, 74, 91, 63, 88]

export default function DashboardPreviewSection() {
  return (
    <section id="dashboard-preview" className="section-pad bg-tv-bg">
      <div className="container-tv">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">The Dashboard</p>
            <h2 className="heading-lg mt-3 text-tv-ink">See the product you will use</h2>
            <p className="body-muted mt-4">
              Three widgets define TensorVale: connect inputs, run the evaluation process, and read
              live metrics — the primary trust moment before you convert.
            </p>
          </div>
          <Link to="/dashboard" className="btn-dark shrink-0 self-start lg:self-auto">
            Explore the Dashboard <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Widget A */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bento-panel mt-12 overflow-hidden"
        >
          <div className="border-b border-tv-line bg-tv-bg/60 px-6 py-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tv-cyan-dim">
                  Widget A · Input Layer
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-tv-ink">
                  Connection panel
                </h3>
              </div>
              <p className="max-w-xs text-sm text-tv-muted">
                Plug in models, datasets, environments, and metrics before a run starts.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-4 sm:p-6">
            {inputs.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: 'easeOut' }}
                  className="group rounded-2xl border border-tv-line bg-white p-4 transition duration-200 hover:border-tv-ink/25 hover:shadow-soft"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tv-ink text-tv-cyan transition group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-tv-ink">{item.label}</p>
                  <p className="mt-0.5 text-xs text-tv-muted">{item.hint}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Widget B */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bento-dark mt-5 overflow-hidden"
        >
          <div className="border-b border-white/10 px-6 py-5 sm:px-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tv-cyan">
              Widget B · Model Evaluation Process
            </p>
            <h3 className="mt-1 font-display text-xl font-bold">Seven-stage workflow rail</h3>
            <p className="mt-2 max-w-xl text-sm text-white/45">
              Model ingestion → Dataset selection → Experiment configuration → Model evaluation →
              Performance benchmarking → Result comparison → Evaluation reporting
            </p>
          </div>
          <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-7 lg:gap-2">
            {workflow.map((w, i) => (
              <div key={w.step} className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                <span className="font-mono text-xs text-tv-cyan">{String(i + 1).padStart(2, '0')}</span>
                <span className="mt-2 text-sm font-semibold leading-snug text-white/90">{w.step}</span>
                <span className="mt-1 text-[11px] leading-snug text-white/40">{w.note}</span>
                {i < workflow.length - 1 && (
                  <div className="absolute -right-1.5 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-white/20 lg:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Widget C */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bento-panel mt-5 overflow-hidden"
        >
          <div className="border-b border-tv-line bg-tv-bg/60 px-6 py-5 sm:px-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-tv-cyan-dim">
              Widget C · Evaluation Dashboard
            </p>
            <h3 className="mt-1 font-display text-xl font-bold text-tv-ink">
              Metrics, charts, and active experiments
            </h3>
          </div>

          <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[1.45fr_1fr]">
            <div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-tv-line bg-tv-bg p-4">
                    <p className="text-xs text-tv-muted">{m.label}</p>
                    <p className="metric-mono mt-2 text-2xl font-semibold text-tv-ink">
                      <AnimatedCounter
                        value={m.value}
                        suffix={m.suffix}
                        decimals={'decimals' in m ? m.decimals : 0}
                      />
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-tv-line bg-tv-bg p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-tv-ink">Benchmark results</p>
                  <p className="font-mono text-xs text-tv-muted">score · last 8 runs</p>
                </div>
                <div className="flex h-36 items-end gap-2">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
                      className={cn(
                        'flex-1 rounded-t-md',
                        i === bars.length - 1 ? 'bg-tv-cyan' : 'bg-tv-ink',
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl border border-tv-line bg-tv-ink p-5 text-white">
              <p className="text-sm font-semibold">Active Experiments</p>
              <p className="mt-1 text-xs text-white/40">Live status from the evaluation dashboard</p>
              <ul className="mt-5 flex-1 space-y-4">
                {experiments.map((ex) => (
                  <li key={ex.name} className="border-b border-white/10 pb-4 last:border-0">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm text-white/80">{ex.name}</span>
                      <span
                        className={cn(
                          'shrink-0 rounded-lg px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide',
                          ex.status === 'Running' && 'bg-tv-cyan/20 text-tv-cyan',
                          ex.status === 'Queued' && 'bg-tv-amber/20 text-tv-amber',
                          ex.status === 'Complete' && 'bg-white/10 text-white/60',
                        )}
                      >
                        {ex.status}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-white/35">{ex.meta}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
