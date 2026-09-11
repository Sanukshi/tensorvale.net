import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function PageHero({
  eyebrow,
  title,
  description,
  badge,
  cta,
}: {
  eyebrow: string
  title: string
  description: string
  badge?: string
  cta?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-25" />
      <div className="container-tv relative py-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tv-cyan">{eyebrow}</p>
            {badge && <span className="badge">{badge}</span>}
          </div>
          <h1 className="heading-lg">{title}</h1>
          <p className="body-muted mt-5 max-w-2xl">{description}</p>
          {cta && <div className="mt-8">{cta}</div>}
        </motion.div>
      </div>
    </section>
  )
}
