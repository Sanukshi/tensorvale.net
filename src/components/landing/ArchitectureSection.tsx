import { motion } from 'framer-motion'

const layers = [
  'AI MODELS',
  'DATASETS',
  'TENSORVALE CORE',
  'MODEL COMPARISON',
  'PRODUCTION',
]

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="section-pad scroll-mt-24 bg-tv-navy">
      <div className="container-tv grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel p-6"
        >
          {layers.map((layer, i) => (
            <div key={layer} className="flex flex-col items-center">
              <div
                className={`w-full rounded-xl border px-4 py-3 text-center font-mono text-xs sm:text-sm ${
                  layer === 'TENSORVALE CORE'
                    ? 'border-tv-cyan/40 bg-tv-cyan/10 text-tv-cyan'
                    : 'border-white/10 bg-black/30 text-white'
                }`}
              >
                {layer === 'TENSORVALE CORE' ? (
                  <div>
                    <p className="font-semibold">TENSORVALE</p>
                    <p className="mt-2 text-[10px] text-white/70">
                      Evaluation · Experimentation · Benchmarking · Analytics
                    </p>
                  </div>
                ) : (
                  layer
                )}
              </div>
              {i < layers.length - 1 && (
                <div className="my-1.5 h-5 w-px bg-gradient-to-b from-tv-cyan to-tv-blue/30" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-3">System Architecture</p>
          <h2 className="heading-lg">
            Built for Repeatable <span className="text-tv-cyan">AI Evaluation.</span>
          </h2>
          <p className="body-muted mt-5">
            TensorVale provides a centralized evaluation layer for AI engineering workflows —
            connecting models and datasets to comparison and production decisions through
            reproducible experiments and benchmarks.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
