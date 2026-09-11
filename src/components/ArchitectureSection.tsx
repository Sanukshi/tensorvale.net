import { motion } from 'framer-motion'

const layers = ['Evaluation', 'Experimentation', 'Benchmarking', 'Analytics']

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="section-pad scroll-mt-20">
      <div className="container-tv grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
          className="panel p-6 shadow-soft"
        >
          <FlowNode label="AI MODELS" />
          <Connector />
          <FlowNode label="DATASETS" />
          <Connector />
          <div className="rounded-2xl border border-tv-cyan/40 bg-tv-cyan/10 p-4">
            <p className="text-center font-mono text-[10px] tracking-widest text-tv-cyan">TENSORVALE</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {layers.map((l) => (
                <div key={l} className="rounded-lg border border-white/10 bg-black/30 px-2 py-2 text-center text-xs">
                  {l}
            </div>
          ))}
        </div>
          </div>
          <Connector />
          <FlowNode label="MODEL COMPARISON" />
          <Connector />
          <FlowNode label="PRODUCTION" accent />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="label-eyebrow mb-3">System Architecture</p>
          <h2 className="heading-lg">
            Built for Repeatable{' '}
            <span className="text-tv-cyan">AI Evaluation.</span>
          </h2>
          <p className="body-muted mt-5">
            TensorVale provides a centralized evaluation layer for AI engineering workflows — from
            model and dataset intake through comparison and production-ready decisions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function FlowNode({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-xl border px-3 py-3 text-center font-mono text-xs ${
        accent
          ? 'border-tv-cyan/40 bg-tv-cyan/10 text-tv-cyan'
          : 'border-white/10 bg-black/30 text-white/90'
      }`}
    >
      {label}
    </div>
  )
}

function Connector() {
  return <div className="mx-auto h-4 w-px bg-gradient-to-b from-tv-cyan/60 to-tv-blue/20" />
}
