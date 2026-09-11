import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const pipeline = [
  'AI MODELS',
  'DATASETS',
  'EXPERIMENTS',
  'EVALUATION',
  'BENCHMARKING',
  'PERFORMANCE ANALYSIS',
  'MODEL COMPARISON',
  'PRODUCTION DECISION',
]

export default function SolutionSection() {
  return (
    <section id="platform" className="section-pad scroll-mt-24 bg-tv-black">
      <div className="container-tv grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel relative order-2 overflow-hidden p-5 lg:order-1"
        >
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-25" />
          <div className="relative space-y-1">
            {pipeline.map((step, i) => (
              <div key={step}>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-xl border px-3 py-2.5 font-mono text-xs sm:text-sm ${
                    i === pipeline.length - 1
                      ? 'border-tv-cyan/40 bg-tv-cyan/10 text-tv-cyan'
                      : 'border-white/10 bg-black/30 text-white/90'
                  }`}
                >
                  {step}
                </motion.div>
                {i < pipeline.length - 1 && (
                  <div className="relative ml-4 h-3 w-px bg-gradient-to-b from-tv-cyan/70 to-tv-blue/20">
                    <motion.span
                      className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-tv-cyan"
                      animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.12 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <p className="eyebrow mb-3">The TensorVale Approach</p>
          <h2 className="heading-lg">
            One Evaluation Layer for{' '}
            <span className="text-tv-cyan">Every Model Decision.</span>
          </h2>
          <p className="body-muted mt-5">
            TensorVale brings evaluation, experimentation, benchmarking, comparison, and
            performance analysis into one engineering environment — so teams stop guessing and
            start measuring.
          </p>
          <Link to="/#evaluation" className="btn-primary mt-8">
            Explore Platform <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
