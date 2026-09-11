import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { docsCards } from '../data/content'

export default function DocumentationSection() {
  return (
    <section className="section-pad bg-tv-navy/50">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Documentation"
          title={
            <>
              Developer API & <span className="text-tv-cyan">Documentation</span>
            </>
          }
          description="Evaluation APIs, experiment management, benchmarking guides, model integration, and performance evaluation."
        />
        <div className="mb-8 flex justify-center">
          <span className="badge">COMING SOON</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {docsCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-white/[0.08] bg-tv-surface p-5"
            >
              <h3 className="font-display font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-tv-muted">{c.description}</p>
              <span className="mt-4 inline-block text-xs text-tv-cyan">Coming Soon →</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/documentation" className="btn-secondary">
            Documentation Coming Soon
          </Link>
        </div>
      </div>
    </section>
  )
}
