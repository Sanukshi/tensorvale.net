import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, Mail } from 'lucide-react'
import { cn } from '../../lib/utils'

const faqs = [
  {
    q: 'What is TensorVale?',
    a: 'TensorVale is an AI Model Evaluation & Experimentation Platform for testing, benchmarking, comparing, and improving ML and generative AI models before production.',
  },
  {
    q: 'What problem does TensorVale solve?',
    a: 'Model testing is often fragmented. TensorVale unifies evaluation, experimentation, benchmarking, comparison, and tracking into repeatable workflows.',
  },
  {
    q: 'What are the five platform engines?',
    a: 'Model Evaluation Engine, Experimentation Platform, Model Benchmarking Engine, Model Comparison Intelligence, and the AI Evaluation Dashboard.',
  },
  {
    q: 'Does TensorVale integrate with NeMo, TensorRT, Triton, or NIM?',
    a: 'Yes — those appear in the Technology Integration showcase as compatibility references only.',
  },
  {
    q: 'How do teams engage commercially?',
    a: 'Subscription SaaS, enterprise licensing, model evaluation plans, usage-based experimentation, API access, and dedicated enterprise deployments.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)
  const visible = useMemo(() => faqs, [])

  return (
    <section id="faq" className="section-pad scroll-mt-24">
      <div className="container-tv grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="heading-lg mt-3 text-white">Frequently asked questions</h2>
          <p className="body-muted mt-4">
            Answers for AI/ML engineers, MLOps, researchers, and enterprise AI teams.
          </p>
          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-tv-line bg-[#0c1a20] shadow-soft">
            <img
              src="/images/tv-faq-support.png"
              alt="FAQ — evaluation support and guidance"
              className="aspect-[16/9] w-full object-cover object-center sm:h-56 sm:aspect-auto"
              width={1200}
              height={600}
              loading="lazy"
            />
          </div>
          <Link to="/#contact" className="btn-primary mt-6 w-full justify-center sm:w-auto">
            Contact form <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="mailto:hello@tensorvale.net"
            className="mt-4 flex items-center gap-2 text-sm font-medium text-tv-cyan transition hover:text-white"
          >
            <Mail className="h-4 w-4" />
            hello@tensorvale.net
          </a>
        </div>

        <div className="space-y-3">
          {visible.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div
                key={item.q}
                className={cn(
                  'overflow-hidden rounded-2xl border transition',
                  isOpen ? 'border-tv-cyan/30 bg-tv-card' : 'border-tv-line bg-tv-card/70',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-4"
                >
                  <span className="font-semibold text-white">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-tv-muted transition',
                      isOpen && 'rotate-180 text-tv-cyan',
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="border-t border-tv-line px-5 py-4 text-sm leading-relaxed text-tv-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
