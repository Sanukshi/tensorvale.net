import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { techItems } from '../data/content'

export default function TechnologyShowcase() {
  return (
    <section id="technology" className="section-pad bg-tv-navy/60 scroll-mt-20">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              Built for Modern <span className="text-tv-cyan">AI Infrastructure</span>
            </>
          }
          description="Ecosystem compatibility references for the serving and optimization stack your team already uses — evaluation targets, not product identity."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techItems.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-surface p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40">
                  <Cpu className="h-5 w-5 text-tv-cyan" />
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-400">
                  Compatible
                </span>
              </div>
              <h3 className="font-display font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-tv-muted">{t.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
