import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const posts = [
  { tag: 'API', title: 'Evaluation APIs for programmable model testing', date: 'Coming Soon' },
  { tag: 'Guide', title: 'Benchmarking latency and throughput under load', date: 'Coming Soon' },
  { tag: 'Guide', title: 'Comparing models with consistent metrics', date: 'Coming Soon' },
  { tag: 'Integration', title: 'Connecting endpoints and serving stacks', date: 'Coming Soon' },
]

export default function ResourcesSection() {
  return (
    <section id="resources" className="section-pad scroll-mt-24 bg-tv-beige">
      <div className="container-tv">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Resources</p>
            <h2 className="heading-lg mt-3">
              Developer Docs & <span className="text-tv-orange">Guides</span>
            </h2>
          </div>
          <Link to="/documentation" className="btn-outline">
            View Documentation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-tv-line bg-tv-navy p-8 text-white shadow-card"
          >
            <span className="rounded-full bg-tv-orange px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
              Featured
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
              Everything developers need to evaluate better
            </h3>
            <p className="mt-4 text-white/70">
              Evaluation APIs, experiment management, benchmarking guides, and model integration —
              designed for AI engineering teams.
            </p>
            <p className="mt-6 font-mono text-xs text-tv-orange">DOCUMENTATION · COMING SOON</p>
          </motion.div>

          <div className="space-y-3">
            {posts.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 rounded-2xl border border-tv-line bg-white p-4 shadow-sm transition hover:border-tv-orange/40"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-tv-cream font-mono text-xs font-bold text-tv-orange">
                  {p.tag}
                </div>
                <div>
                  <p className="text-xs text-tv-muted">{p.date}</p>
                  <h4 className="mt-1 text-sm font-semibold text-tv-navy sm:text-base">{p.title}</h4>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
