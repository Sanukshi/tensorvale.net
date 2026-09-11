import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Box,
  Database,
  FileCode2,
  Server,
  Cpu,
  Settings2,
  AppWindow,
  Activity,
} from 'lucide-react'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import { cn } from '../lib/utils'

const inputs = [
  { label: 'AI models', icon: Box },
  { label: 'Evaluation datasets', icon: Database },
  { label: 'Model checkpoints', icon: FileCode2 },
  { label: 'Inference environments', icon: Server },
  { label: 'GPU infrastructure', icon: Cpu },
  { label: 'Experiment configs', icon: Settings2 },
  { label: 'AI applications', icon: AppWindow },
  { label: 'Performance metrics', icon: Activity },
]

const workflow = [
  'Model ingestion',
  'Dataset selection',
  'Experiment configuration',
  'Model evaluation',
  'Performance benchmarking',
  'Result comparison',
  'Evaluation reporting',
]

const metrics = [
  { label: 'Active experiments', value: 24, suffix: '' },
  { label: 'Models evaluated', value: 128, suffix: '' },
  { label: 'Eval score', value: 94.2, suffix: '', decimals: 1 },
  { label: 'Accuracy', value: 91.4, suffix: '%', decimals: 1 },
  { label: 'Inference latency', value: 42, suffix: 'ms' },
  { label: 'Throughput', value: 1.8, suffix: 'k req/s', decimals: 1 },
  { label: 'GPU utilization', value: 71, suffix: '%' },
  { label: 'Benchmark score', value: 88, suffix: '' },
]

const experiments = [
  { name: 'llama-3-8b · latency suite', status: 'Running' },
  { name: 'mistral-7b · accuracy sweep', status: 'Queued' },
  { name: 'custom-ckpt-v12 · throughput', status: 'Complete' },
  { name: 'bert-base · resource profile', status: 'Running' },
]

const bars = [42, 68, 55, 82, 74, 91, 63, 88, 77, 95]

export default function DashboardPage() {
  return (
    <div className="pb-20 pt-10">
      <div className="container-tv">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-tv-muted transition hover:text-tv-ink">
          <ArrowLeft className="h-4 w-4" /> Back to landing
        </Link>
        <div className="mt-6 max-w-2xl">
          <p className="eyebrow">Product Interface</p>
          <h1 className="heading-xl mt-3 text-tv-ink">The Dashboard</h1>
          <p className="body-muted mt-4">
            Input layer, evaluation process, and evaluation metrics — the three widgets that define
            TensorVale.
          </p>
        </div>

        <section className="bento-panel mt-10 p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-tv-ink">Widget A — Input Layer</h2>
          <p className="mt-1 text-sm text-tv-muted">Connection panel for evaluation sources</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {inputs.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-tv-line bg-tv-bg px-3 py-5 text-center"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tv-ink text-tv-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium text-tv-ink">{item.label}</span>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bento-dark mt-5 p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold">Widget B — Model Evaluation Process</h2>
          <p className="mt-1 text-sm text-white/45">End-to-end workflow</p>
          <ol className="mt-6 space-y-3">
            {workflow.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="font-mono text-sm text-tv-cyan">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-medium text-white/85">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="bento-panel mt-5 p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-tv-ink">Widget C — Evaluation Dashboard</h2>
          <p className="mt-1 text-sm text-tv-muted">Live metrics, benchmarks, and active experiments</p>

          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
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

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-tv-line bg-tv-bg p-5">
              <p className="text-sm font-semibold text-tv-ink">Benchmark results</p>
              <div className="mt-4 flex h-40 items-end gap-2">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className={cn('flex-1 rounded-t-md', i === bars.length - 1 ? 'bg-tv-cyan' : 'bg-tv-ink')}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-tv-line bg-tv-ink p-5 text-white">
              <p className="text-sm font-semibold">Active Experiments</p>
              <ul className="mt-4 space-y-3">
                {experiments.map((ex) => (
                  <li key={ex.name} className="flex justify-between gap-3 border-b border-white/10 pb-3 last:border-0">
                    <span className="text-sm text-white/75">{ex.name}</span>
                    <span
                      className={cn(
                        'shrink-0 rounded-lg px-2 py-0.5 font-mono text-[10px] uppercase',
                        ex.status === 'Running' && 'bg-tv-cyan/20 text-tv-cyan',
                        ex.status === 'Queued' && 'bg-tv-amber/20 text-tv-amber',
                        ex.status === 'Complete' && 'bg-white/10 text-white/60',
                      )}
                    >
                      {ex.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
