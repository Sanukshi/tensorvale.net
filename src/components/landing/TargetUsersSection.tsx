import { motion } from 'framer-motion'
import {
  Code2,
  Microscope,
  Workflow,
  ChartScatter,
  Server,
  Braces,
  Building2,
  Network,
} from 'lucide-react'

const users = [
  {
    title: 'AI/ML engineers',
    blurb: 'Run reproducible evaluations before promoting models.',
    icon: Code2,
  },
  {
    title: 'ML researchers',
    blurb: 'Compare configurations and track experiment outcomes.',
    icon: Microscope,
  },
  {
    title: 'MLOps teams',
    blurb: 'Standardize evaluation workflows across environments.',
    icon: Workflow,
  },
  {
    title: 'Data science teams',
    blurb: 'Benchmark candidates with shared metrics and reports.',
    icon: ChartScatter,
  },
  {
    title: 'AI infrastructure engineers',
    blurb: 'Measure latency, throughput, and GPU utilization.',
    icon: Server,
  },
  {
    title: 'Model developers',
    blurb: 'Validate checkpoints against evaluation datasets.',
    icon: Braces,
  },
  {
    title: 'Enterprise AI teams',
    blurb: 'Align selection decisions to operational criteria.',
    icon: Building2,
  },
  {
    title: 'Technology organizations',
    blurb: 'Adopt a shared experimentation layer across groups.',
    icon: Network,
  },
]

export default function TargetUsersSection() {
  return (
    <section className="section-pad">
      <div className="container-tv">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Target Users</p>
          <h2 className="heading-lg mt-3 text-tv-ink">Built for people who ship models</h2>
          <p className="body-muted mt-4">
            If your role owns evaluation quality, experiment rigor, or production readiness —
            TensorVale is designed for you.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {users.map((u, i) => {
            const Icon = u.icon
            return (
              <motion.article
                key={u.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="bento-panel tv-shine group p-5"
              >
                <motion.span
                  whileHover={{ scale: 1.08 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-tv-ink text-tv-cyan"
                >
                  <Icon className="h-5 w-5" />
                </motion.span>
                <h3 className="mt-4 font-display text-base font-bold text-tv-ink">{u.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-tv-muted">{u.blurb}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
