import { motion } from 'framer-motion'
import { Code2, FlaskConical, Server, Building2 } from 'lucide-react'

const cases = [
  { icon: Code2, title: 'AI / ML Engineering', text: 'Evaluate and optimize models with consistent metrics.' },
  { icon: Server, title: 'MLOps', text: 'Track experiments and performance across releases.' },
  { icon: FlaskConical, title: 'AI Research', text: 'Run controlled experiments with full versioning.' },
  { icon: Building2, title: 'Enterprise AI', text: 'Evaluate models before production deployment.' },
]

export default function UseCases() {
  return (
    <section className="section-pad bg-[#f4f6f9] text-slate-900">
      <div className="container-tv">
        <h2 className="heading-lg mb-10 text-center text-slate-900 sm:mb-14">
          Built for Teams That <span className="text-tv-blue">Ship Models.</span>
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
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
                  <Icon className="h-5 w-5 text-tv-cyan" />
                </div>
                <h3 className="font-display font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.text}</p>
                <div className="mt-5 h-16 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 p-2">
                  <div className="flex h-full items-end gap-1">
                    {[40, 65, 45, 80, 55].map((h, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-sm bg-tv-cyan/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
