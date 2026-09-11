import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { faqs } from '../data/content'
import { cn } from '../lib/utils'

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad scroll-mt-20">
      <div className="container-tv max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Answers for <span className="text-tv-cyan">engineering teams</span>
            </>
          }
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-tv-surface">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 shrink-0 text-tv-muted transition-transform',
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
                      transition={{ duration: 0.22 }}
                    >
                      <p className="border-t border-white/[0.06] px-5 py-4 text-sm leading-relaxed text-tv-muted">
                        {faq.a}
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
