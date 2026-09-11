import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    desc: 'For individual developers and small experiments.',
    features: ['500 evaluation runs', 'Experiment tracking', 'Core benchmarking', 'Model comparison'],
  },
  {
    name: 'Professional',
    price: '$199',
    desc: 'For AI/ML engineering teams.',
    featured: true,
    features: ['5,000 evaluation runs', 'Shared workspaces', 'Full benchmarking', 'API & analytics', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For large-scale AI evaluation programs.',
    features: ['Unlimited runs', 'SSO & RBAC', 'Custom metrics', 'Dedicated support'],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="section-pad scroll-mt-24 bg-tv-beige">
      <div className="container-tv">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="heading-lg mt-3">
            Plans for Every <span className="text-tv-orange">Evaluation Stage</span>
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={cn(
                'flex flex-col rounded-3xl border p-6 sm:p-7',
                p.featured
                  ? 'border-tv-orange bg-tv-navy text-white shadow-lift'
                  : 'border-tv-line bg-white text-tv-navy shadow-sm',
              )}
            >
              {p.featured && (
                <span className="mb-3 w-fit rounded-full bg-tv-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className={cn('mt-1 text-sm', p.featured ? 'text-white/70' : 'text-tv-muted')}>{p.desc}</p>
              <p className="mt-5 font-display text-4xl font-bold">
                {p.price}
                {p.price !== 'Custom' && (
                  <span className={cn('text-base font-normal', p.featured ? 'text-white/60' : 'text-tv-muted')}>
                    /mo
                  </span>
                )}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={cn('mt-0.5 h-4 w-4 shrink-0', p.featured ? 'text-tv-orange' : 'text-tv-orange')} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={cn('mt-8 w-full', p.featured ? 'btn-primary' : 'btn-dark')}>
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
