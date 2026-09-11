import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  FlaskConical,
  LayoutDashboard,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import { Reveal, easeOut } from '../../lib/motion'

type Plan = {
  name: string
  tagline: string
  tag: string
  price: string
  billing: string
  features: string[]
  cta: string
  href: string
  dark: boolean
  image: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    tagline: 'Core evaluation for growing ML teams',
    tag: 'Subscription SaaS',
    price: '$70',
    billing: 'Per month',
    features: [
      'Core model evaluation workflows',
      'Experiment creation & tracking',
      'Benchmark basics',
      'Shared evaluation dashboard',
    ],
    cta: 'Choose Starter',
    href: '/#contact',
    dark: false,
    image: '/images/tv-plan-starter.png',
  },
  {
    name: 'Growth',
    tagline: 'Scale experimentation with comparison intelligence',
    tag: 'Most popular',
    price: '$150',
    billing: 'Per month',
    features: [
      'Model evaluation plans',
      'Usage-based experimentation',
      'Comparison intelligence',
      'API access',
      'Priority onboarding',
    ],
    cta: 'Choose Growth',
    href: 'mailto:hello@tensorvale.net?subject=Talk%20to%20Sales',
    dark: true,
    image: '/images/tv-plan-growth.png',
  },
  {
    name: 'Enterprise',
    tagline: 'Licensing, isolation, and dedicated deployments',
    tag: 'Licensing & dedicated',
    price: 'Custom',
    billing: 'Enterprise agreement',
    features: [
      'Enterprise licensing',
      'Dedicated deployments',
      'Security & isolation',
      'Custom evaluation depth',
      'Named support',
    ],
    cta: 'Choose Enterprise',
    href: '/#contact',
    dark: false,
    image: '/images/tv-plan-enterprise.png',
  },
]

export default function MonetizationSection() {
  return (
    <section id="pricing" className="section-pad relative scroll-mt-24 overflow-hidden bg-[#F3EEE9]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[32rem] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(181,136,99,0.2), transparent 70%)' }}
      />

      <div className="container-tv relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7354]">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#181816] sm:text-4xl lg:text-[2.75rem]">
            Plans that fit your evaluation program
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5c5654] sm:text-lg">
            Subscription SaaS, enterprise licensing, and dedicated deployments — pick the plan that
            matches your evaluation program.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, idx) => (
            <PricingCard key={plan.name} plan={plan} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const dark = plan.dark
  const isMail = plan.href.startsWith('mailto:')

  const footerClass = cn(
    'absolute inset-x-3 bottom-0 z-0 flex h-16 items-end justify-center rounded-[1.5rem] pb-4 text-sm font-bold tracking-wide transition',
    dark
      ? 'bg-[#B58863] text-[#181816] hover:bg-[#c9a07a]'
      : 'bg-[#181816] text-[#D3C3B9] hover:bg-[#2a2a28]',
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: easeOut }}
      whileHover={{ y: -6 }}
      className="relative flex h-full min-w-0 flex-col pb-12"
    >
      {/* Single CTA — layered footer tab */}
      {isMail ? (
        <a href={plan.href} className={footerClass}>
          <span className="inline-flex items-center gap-1.5">
            {plan.cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </a>
      ) : (
        <Link to={plan.href} className={footerClass}>
          <span className="inline-flex items-center gap-1.5">
            {plan.cta}
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      )}

      <div
        className={cn(
          'relative z-10 flex min-w-0 flex-1 flex-col rounded-[1.75rem] p-5 shadow-[0_24px_50px_rgba(24,24,22,0.16)] sm:p-7',
          dark
            ? 'bg-gradient-to-br from-[#2a2a28] via-[#181816] to-[#121210] text-[#D3C3B9]'
            : 'bg-gradient-to-br from-[#E8D5C4] via-[#D3C3B9] to-[#C4B0A0] text-[#181816]',
        )}
      >
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#0c1a20]">
            <img
              src={plan.image}
              alt=""
              className="h-[72%] w-[72%] object-contain mix-blend-screen"
              width={48}
              height={48}
              loading="lazy"
            />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{plan.name}</h3>
              {dark && (
                <span className="rounded-full bg-[#B58863] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#181816]">
                  {plan.tag}
                </span>
              )}
            </div>
            <p className={cn('mt-1 text-sm leading-snug', dark ? 'text-[#A79E9C]' : 'text-[#3d3835]/75')}>
              {plan.tagline}
            </p>
          </div>
        </div>

        <ul className="mt-7 flex flex-1 flex-col gap-3.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm font-medium">
              <Check
                className={cn('mt-0.5 h-4 w-4 shrink-0', dark ? 'text-[#B58863]' : 'text-[#181816]')}
                strokeWidth={2.5}
              />
              <span className={dark ? 'text-[#D3C3B9]/90' : 'text-[#2a2420]'}>{f}</span>
            </li>
          ))}
        </ul>

        <div
          className="mt-8 flex flex-wrap items-end justify-between gap-3 border-t pt-5"
          style={{ borderColor: dark ? 'rgba(211,195,185,0.15)' : 'rgba(24,24,22,0.12)' }}
        >
          <div className="min-w-0">
            <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{plan.price}</p>
            <p className={cn('mt-0.5 text-xs', dark ? 'text-[#A79E9C]' : 'text-[#5c5654]')}>
              {plan.billing}
            </p>
          </div>
          <span
            className={cn(
              'inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold',
              dark ? 'bg-[#D3C3B9] text-[#181816]' : 'bg-[#181816] text-[#D3C3B9]',
            )}
          >
            {dark ? (
              <LayoutDashboard className="h-3.5 w-3.5 shrink-0" />
            ) : (
              <FlaskConical className="h-3.5 w-3.5 shrink-0" />
            )}
            <span className="truncate">{plan.tag}</span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}
