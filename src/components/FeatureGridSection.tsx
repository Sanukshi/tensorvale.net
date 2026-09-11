import { motion } from 'framer-motion'
import { features } from '../data/content'
import { cn } from '../lib/utils'

export default function FeatureGridSection() {
  return (
    <section className="section-pad bg-tv-light">
      <div className="container-tv">
        <h2 className="heading-lg mb-12 max-w-lg text-tv-ink">
          A complete evaluation <span className="accent">feature set</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                'rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-card',
                i % 5 === 0 && 'lg:col-span-2',
              )}
            >
              <h3 className="font-display font-semibold text-tv-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-tv-muted">{f.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
