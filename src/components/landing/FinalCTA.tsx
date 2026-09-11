import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="final-cta" className="scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8">
      <div className="container-tv">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] bg-tv-orange px-6 py-14 text-center text-white shadow-lift sm:px-10 sm:py-16"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Stop Guessing. Start Evaluating.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/90 sm:text-lg">
            Measure performance, compare models, and make better AI engineering decisions with
            TensorVale.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-dark">
              Start Evaluating <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
