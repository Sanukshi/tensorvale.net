import { motion } from 'framer-motion'
import { Code2, Workflow, FlaskConical, Building2 } from 'lucide-react'

const cases = [
  { icon: Code2, title: 'AI / ML Engineering', desc: 'Evaluate and optimize models.' },
  { icon: Workflow, title: 'MLOps', desc: 'Track experiments and performance.' },
  { icon: FlaskConical, title: 'AI Research', desc: 'Run controlled experiments.' },
  { icon: Building2, title: 'Enterprise AI', desc: 'Evaluate before production deployment.' },
]

export default function UseCases() {
  return (
    <section className="section-pad section-light">
      <div className="container-tv">
        <h2 className="heading-lg mb-10 text-center text-slate-900 sm:mb-14">
          Built for Every <span className="text-tv-blue">AI Team.</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-tv-cyan">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
