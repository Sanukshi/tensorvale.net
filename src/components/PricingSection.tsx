import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { pricingPlans } from '../data/content'
import { cn } from '../lib/utils'

export default function PricingSection() {
  return (
    <section id="pricing" className="section-pad scroll-mt-20">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Plans for every <span className="text-tv-cyan">evaluation stage</span>
            </>
          }
          description="From individual experiments to enterprise-scale model evaluation."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={cn(
                'relative flex flex-col rounded-3xl border p-6 sm:p-7',
                plan.featured
                  ? 'border-tv-cyan/40 bg-tv-cyan/5 shadow-glow'
                  : 'border-white/[0.08] bg-tv-surface',
              )}
            >
              {plan.featured && <span className="absolute -top-3 left-6 badge">Most popular</span>}
              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-tv-muted">{plan.description}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-tv-muted">{plan.period}</span>}
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-tv-cyan" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={cn('mt-8 w-full', plan.featured ? 'btn-primary' : 'btn-secondary')}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
