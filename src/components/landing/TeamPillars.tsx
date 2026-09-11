import { motion } from 'framer-motion'
import { Code2, Server, FlaskConical, Building2, Users, Workflow } from 'lucide-react'

const pillars = [
  { icon: Code2, title: 'AI/ML Engineers', role: 'Model evaluation & selection' },
  { icon: Workflow, title: 'MLOps Teams', role: 'Experiment tracking at scale' },
  { icon: FlaskConical, title: 'Researchers', role: 'Controlled experiments' },
  { icon: Server, title: 'Infra Teams', role: 'Latency & GPU benchmarking' },
  { icon: Building2, title: 'Enterprise AI', role: 'Production readiness gates' },
  { icon: Users, title: 'Model Developers', role: 'Faster iteration loops' },
]

export default function TeamPillars() {
  return (
    <section className="section-pad bg-tv-cream">
      <div className="container-tv">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow">Who We Serve</p>
          <h2 className="heading-lg mt-3">
            Built for Teams That <span className="text-tv-orange">Ship Models</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-tv-line bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-tv-navy">
                  <Icon className="h-7 w-7 text-tv-orange" />
                </div>
                <h3 className="font-display text-lg font-bold text-tv-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-tv-muted">{p.role}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
