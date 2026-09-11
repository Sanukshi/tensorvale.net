import { motion, useReducedMotion } from 'framer-motion'

/**
 * Clean enterprise background — solid navy with soft animated copper/slate atmosphere.
 */
export default function SiteBackground() {
  const reduce = useReducedMotion()

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#10232A]" />

      <div
        className="absolute inset-x-0 top-0 h-[45vh]"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 0%, rgba(181,136,99,0.16), transparent 70%)',
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[40vh]"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 100%, rgba(61,77,85,0.35), transparent 70%)',
        }}
      />

      <motion.div
        className="absolute -left-24 top-1/3 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(24,24,22,0.85), transparent 70%)' }}
        animate={reduce ? undefined : { x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-20 top-1/4 h-64 w-64 rounded-full opacity-35 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(181,136,99,0.16), transparent 70%)' }}
        animate={reduce ? undefined : { x: [0, -20, 0], y: [0, 22, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(61,77,85,0.55), transparent 70%)' }}
        animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 grid-dots-dark opacity-30" />
    </div>
  )
}
