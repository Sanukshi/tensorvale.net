import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const quotes = [
  {
    text: 'TensorVale turned our scattered notebook evals into a repeatable engineering workflow. Model selection is finally evidence-based.',
    name: 'Aisha Rahman',
    role: 'Staff ML Engineer',
  },
  {
    text: 'We can benchmark latency and accuracy side-by-side before every release. That alone saved us from shipping a slow model.',
    name: 'Marcus Chen',
    role: 'MLOps Lead',
  },
  {
    text: 'The comparison view makes trade-offs obvious. Our team ships with confidence instead of debating anecdotes.',
    name: 'Elena Volkov',
    role: 'AI Platform Manager',
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad bg-tv-cream">
      <div className="container-tv">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="heading-lg mt-3">
            Trusted by Teams Who <span className="text-tv-orange">Evaluate Seriously</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-3xl border border-tv-line bg-white p-6 shadow-sm"
            >
              <p className="font-display text-4xl leading-none text-tv-orange">“</p>
              <p className="mt-2 text-sm leading-relaxed text-tv-muted">{q.text}</p>
              <div className="mt-4 flex gap-0.5 text-tv-orange">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-tv-orange" />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tv-navy text-xs font-bold text-white">
                  {q.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-tv-navy">{q.name}</p>
                  <p className="text-xs text-tv-muted">{q.role}</p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
