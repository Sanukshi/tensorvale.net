import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CapabilityArt } from '../ui/SectionGraphics'

const users = [
  'AI/ML engineers',
  'ML researchers',
  'MLOps teams',
  'Data science teams',
  'AI infrastructure',
  'Model developers',
  'Enterprise AI teams',
  'Technology orgs',
]

const stats = [
  { value: '5', label: 'Engines', href: '/#platform' },
  { value: '7', label: 'Stages', href: '/#architecture' },
  { value: 'SL+US', label: 'Entities', href: '/#contact' },
]

export default function WhyPartnerSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-tv-panel">
      <div className="pointer-events-none absolute inset-0 grid-dots-dark opacity-35" />
      <div className="container-tv relative grid gap-12 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3"
        >
          {['Evaluate', 'Benchmark', 'Compare', 'Select'].map((t, i) => (
            <div
              key={t}
              className={`overflow-hidden rounded-3xl border border-white/10 bg-tv-bg/50 ${
                i === 0 ? 'col-span-2' : ''
              }`}
            >
              <div className={`relative ${i === 0 ? 'h-28' : 'h-16'} overflow-hidden`}>
                <CapabilityArt tone={i + 1} />
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] text-tv-cyan">0{i + 1}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-white">{t}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex rounded-full bg-tv-cyan/15 px-3 py-1 text-xs font-semibold text-tv-cyan">
            Here since Feb 10, 2024
          </span>
          <h2 className="mt-5 heading-lg text-white">
            Why we&apos;re the right partner for evaluation programs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-tv-ink-soft/80">
            Unlike tools that isolate a single testing task, TensorVale unifies experimentation,
            benchmarking, comparison, and tracking.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <Link
                key={s.label}
                to={s.href}
                className="rounded-2xl border border-white/10 bg-tv-bg/40 px-3 py-3 transition hover:border-tv-cyan/40 hover:bg-tv-cyan/10"
              >
                <p className="font-display text-2xl font-bold text-tv-cyan sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs text-tv-muted sm:text-sm">{s.label}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {users.map((u) => (
              <span
                key={u}
                className="rounded-full border border-white/10 bg-tv-bg/40 px-3 py-1.5 text-xs text-tv-ink-soft"
              >
                {u}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
