import { motion } from 'framer-motion'
import {
  FlaskConical,
  Beaker,
  Gauge,
  LineChart,
  GitCompare,
  History,
  Database,
  Settings2,
  GitBranch,
  CheckCircle2,
  Cpu,
  FileBarChart,
  type LucideIcon,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { features } from '../data/content'

const icons: LucideIcon[] = [
  FlaskConical,
  Beaker,
  Gauge,
  LineChart,
  GitCompare,
  History,
  Database,
  Settings2,
  GitBranch,
  CheckCircle2,
  Cpu,
  FileBarChart,
]

export default function FeaturesSection() {
  return (
    <section className="section-pad bg-tv-ink">
      <div className="container-tv">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Features"
              title={
                <>
                  Everything teams need to evaluate{' '}
                  <span className="text-tv-cyan">with rigor</span>
                </>
              }
              description="From metric configuration to evaluation reporting — designed for engineering workflows."
              className="mb-0"
            />
            {/* Graphic panel */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 hidden overflow-hidden rounded-3xl border border-white/10 bg-tv-surface lg:block"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#12203a] to-[#0a1018] p-6">
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
                <div className="relative grid h-full grid-cols-2 gap-3">
                  {['Eval', 'Bench', 'Compare', 'Report'].map((t, i) => (
                    <div
                      key={t}
                      className="flex flex-col justify-end rounded-2xl border border-white/10 bg-black/30 p-4"
                    >
                      <p className="font-mono text-[10px] text-tv-cyan">0{i + 1}</p>
                      <p className="mt-1 font-display font-semibold">{t}</p>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-tv-cyan"
                          style={{ width: `${70 + i * 7}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = icons[i]
              return (
                <motion.article
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 6) * 0.03 }}
                  className="card-surface p-4"
                >
                  <Icon className="mb-3 h-4 w-4 text-tv-cyan" />
                  <h3 className="font-display text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-tv-muted">{f.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
