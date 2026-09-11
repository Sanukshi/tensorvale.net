import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/** Bright cyan banner — G.O.A.T. style final CTA */
export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="container-tv">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="round-stage relative overflow-hidden bg-tv-cyan px-6 py-12 text-tv-ink shadow-glow sm:px-10 sm:py-16"
        >
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-grid-pattern bg-grid" style={{ backgroundSize: '32px 32px' }} />
          </div>
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Build With Confidence.
            </h2>
            <p className="mt-4 text-base text-tv-ink/70 sm:text-lg">
              Turn AI model evaluation into a repeatable engineering workflow.
            </p>
            <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="cta-email">
                Work email
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="flex-1 rounded-full border-0 bg-white px-5 py-3 text-sm text-tv-ink outline-none ring-0 placeholder:text-slate-400"
              />
              <button type="submit" className="btn-dark whitespace-nowrap">
                {sent ? 'Submitted' : 'Get Started'}
              </button>
            </form>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-tv-ink underline-offset-4 hover:underline">
                Talk to the team <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <span className="text-tv-ink/40">·</span>
              <Link to="/#platform" className="text-sm font-semibold text-tv-ink/80 underline-offset-4 hover:underline">
                Explore Platform
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
