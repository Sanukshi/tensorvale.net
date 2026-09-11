import { motion } from 'framer-motion'
import { Users, Workflow, FlaskConical, Code2, Server, Building2, type LucideIcon } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { solutions } from '../data/content'

const icons: LucideIcon[] = [Users, Workflow, FlaskConical, Code2, Server, Building2]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="section-pad scroll-mt-20">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Solutions"
          title={
            <>
              Built for every <span className="text-tv-cyan">AI engineering</span> role
            </>
          }
          description="From individual model developers to enterprise AI organizations — TensorVale fits how teams evaluate."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => {
            const Icon = icons[i]
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="card-surface group p-6"
              >
                <Icon className="mb-4 h-5 w-5 text-tv-blue transition group-hover:text-tv-cyan" />
                <h3 className="font-display font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-tv-muted">{s.description}</p>
                <p className="mt-4 text-xs font-medium text-tv-cyan">{s.useCase}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
