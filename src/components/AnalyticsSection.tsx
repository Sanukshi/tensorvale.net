import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

const flow = [
  'Evaluation Data',
  'Performance Metrics',
  'Benchmark Analysis',
  'Model Comparison',
  'Performance Insights',
  'Production Decision',
]

export default function AnalyticsSection() {
  return (
    <section className="section-pad">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Analytics & Insights"
          title={
            <>
              Turn Evaluation Data Into{' '}
              <span className="text-tv-cyan">Engineering Decisions</span>
            </>
          }
          description="TensorVale transforms evaluation outputs into clear signals for production decisions."
        />
        <div className="mx-auto max-w-lg">
          {flow.map((step, i) => (
            <div key={step} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`w-full rounded-2xl border px-5 py-3.5 text-center text-sm font-medium ${
                  i === flow.length - 1
                    ? 'border-tv-cyan/40 bg-tv-cyan/10 text-tv-cyan shadow-glow-sm'
                    : 'border-white/10 bg-tv-surface text-white'
                }`}
              >
                {step}
              </motion.div>
              {i < flow.length - 1 && (
                <div className="my-1 h-5 w-px bg-gradient-to-b from-tv-blue to-tv-cyan/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
