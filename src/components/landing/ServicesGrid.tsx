import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Beaker, FlaskConical, Gauge, GitCompare, LineChart, ShieldCheck } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { LucideIcon } from 'lucide-react'

const services: Array<{
  icon: LucideIcon
  title: string
  description: string
  featured?: boolean
  href: string
}> = [
  {
    icon: FlaskConical,
    title: 'Model Evaluation',
    description: 'Score models against structured datasets and configurable metrics with reproducible runs.',
    href: '/#process',
  },
  {
    icon: Beaker,
    title: 'Experimentation',
    description: 'Create controlled experiments, version configs, and track every result in one place.',
    featured: true,
    href: '/#process',
  },
  {
    icon: Gauge,
    title: 'Benchmarking',
    description: 'Measure latency, throughput, GPU utilization, and resource cost under real workloads.',
    href: '/#process',
  },
  {
    icon: GitCompare,
    title: 'Model Comparison',
    description: 'Compare candidates side-by-side and surface the trade-offs that matter for production.',
    href: '/#process',
  },
  {
    icon: LineChart,
    title: 'Performance Analytics',
    description: 'Turn evaluation data into clear engineering insights and readiness signals.',
    href: '/#process',
  },
  {
    icon: ShieldCheck,
    title: 'Production Readiness',
    description: 'Gate deployments with measurable accuracy, latency, and efficiency criteria.',
    href: '/#pricing',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-tv-navy">
      <div className="container-tv">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow">Our Services</p>
          <h2 className="heading-lg mt-3 text-white">
            Unlock Better Model Decisions with{' '}
            <span className="text-tv-orange">Expert Evaluation</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  'flex flex-col rounded-3xl p-6 transition hover:-translate-y-1',
                  s.featured
                    ? 'bg-tv-orange text-white shadow-lift'
                    : 'bg-white text-tv-navy shadow-card',
                )}
              >
                <div
                  className={cn(
                    'mb-4 flex h-12 w-12 items-center justify-center rounded-2xl',
                    s.featured ? 'bg-white/20' : 'bg-tv-orange/10',
                  )}
                >
                  <Icon className={cn('h-6 w-6', s.featured ? 'text-white' : 'text-tv-orange')} />
                </div>
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className={cn('mt-3 flex-1 text-sm leading-relaxed', s.featured ? 'text-white/90' : 'text-tv-muted')}>
                  {s.description}
                </p>
                <Link
                  to={s.href}
                  className={cn(
                    'mt-5 inline-flex items-center gap-1 text-sm font-semibold',
                    s.featured ? 'text-white' : 'text-tv-orange',
                  )}
                >
                  Discover More <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
