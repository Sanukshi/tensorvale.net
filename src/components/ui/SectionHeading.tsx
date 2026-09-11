import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Props = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  light = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      className={cn('mb-10 max-w-3xl lg:mb-14', align === 'center' && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <p className={cn('mb-3 text-xs font-semibold uppercase tracking-[0.22em]', light ? 'text-tv-blue' : 'text-tv-cyan')}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn('heading-lg text-balance', light ? 'text-tv-ink' : 'text-white')}>{title}</h2>
      {description && (
        <p className={cn('mt-4 text-balance text-base leading-relaxed sm:text-lg', light ? 'text-slate-600' : 'text-tv-muted')}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
