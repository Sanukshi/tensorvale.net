import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { cn } from '../lib/utils'

const models = {
  A: { name: 'Model A', acc: 94.8, lat: 82, thru: 120, gpu: 72, score: 93.4 },
  B: { name: 'Model B', acc: 92.6, lat: 61, thru: 156, gpu: 68, score: 91.8 },
  C: { name: 'Model C', acc: 95.1, lat: 74, thru: 138, gpu: 75, score: 94.2 },
}
type Key = keyof typeof models

export default function ModelComparison() {
  const [left, setLeft] = useState<Key>('A')
  const [right, setRight] = useState<Key>('C')
  const L = models[left]
  const R = models[right]
  const winner = R.score >= L.score ? right : left

  return (
    <section id="comparison" className="section-pad bg-tv-navy/50 scroll-mt-20">
      <div className="container-tv">
        <SectionHeading
          eyebrow="Model Comparison"
          title={
            <>
              Compare Models. Understand <span className="text-tv-cyan">Trade-offs.</span>
            </>
          }
          description="Select candidates and inspect performance, resource cost, and evaluation score side-by-side."
        />

        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <Select value={left} onChange={setLeft} />
          <span className="text-tv-muted">vs</span>
          <Select value={right} onChange={setRight} />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {[
            { key: left, m: L },
            { key: right, m: R },
          ].map(({ key, m }) => {
            const isRec = key === winner
            return (
              <motion.article
                key={key + m.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  'rounded-3xl border p-6',
                  isRec ? 'border-tv-cyan/40 bg-tv-cyan/5 shadow-glow' : 'border-white/[0.08] bg-tv-surface',
                )}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                  {isRec && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-tv-cyan/30 bg-tv-cyan/10 px-2.5 py-1 text-[11px] text-tv-cyan">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Recommended Configuration
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <Stat label="Accuracy" value={`${m.acc}%`} />
                  <Stat label="Latency" value={`${m.lat}ms`} />
                  <Stat label="Throughput" value={`${m.thru}/s`} />
                  <Stat label="GPU Usage" value={`${m.gpu}%`} />
                </div>
                <div className="mt-5">
                  <p className="text-xs text-tv-muted">Evaluation Score</p>
                  <p className="mt-1 font-display text-3xl font-bold">{m.score}</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-tv-blue to-tv-cyan"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Select({ value, onChange }: { value: Key; onChange: (v: Key) => void }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Key)}
      className="rounded-full border border-white/15 bg-tv-surface px-4 py-2 text-sm text-white outline-none focus:border-tv-cyan/50"
      aria-label="Select model"
    >
      <option value="A">Model A</option>
      <option value="B">Model B</option>
      <option value="C">Model C</option>
    </select>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-black/25 p-3">
      <p className="text-xs text-tv-muted">{label}</p>
      <p className="mt-1 font-mono font-medium">{value}</p>
    </div>
  )
}
