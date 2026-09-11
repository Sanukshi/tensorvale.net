import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Lock, ArrowRight, BookOpen, Bell } from 'lucide-react'

const docs = [
  {
    title: 'Evaluation APIs',
    desc: 'Programmatic access to model evaluation endpoints and result payloads.',
  },
  {
    title: 'Experiment management guides',
    desc: 'Create, version, and track experiments across configurations.',
  },
  {
    title: 'Benchmarking documentation',
    desc: 'Latency, throughput, and resource utilization benchmark patterns.',
  },
  {
    title: 'Model integration resources',
    desc: 'Connect models, checkpoints, and inference environments.',
  },
  {
    title: 'Performance evaluation guides',
    desc: 'Interpret scores, trade-offs, and selection criteria.',
  },
]

export default function DocumentationSection() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
  }

  const [featured, ...rest] = docs

  return (
    <section id="docs-preview" className="section-pad bg-tv-white">
      <div className="container-tv">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-tv-line bg-tv-bg px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-tv-muted">
            Coming Soon
          </span>
          <p className="eyebrow !normal-case !tracking-normal">Developer resources</p>
        </div>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="heading-lg text-tv-ink">Developer API & Documentation</h2>
            <p className="body-muted mt-4">
              Evaluation APIs, experiment guides, benchmarking docs, model integration resources,
              and performance evaluation guides — launching soon. Preview the roadmap below.
            </p>
          </div>
          <Link to="/docs" className="btn-outline shrink-0">
            Open docs page <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {/* Featured locked doc */}
          <div className="bento relative overflow-hidden border border-tv-line bg-tv-ink p-7 text-white sm:p-8 lg:col-span-5">
            <div className="pointer-events-none absolute inset-0 grid-dots-dark opacity-40" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-tv-cyan">
                <Lock className="h-3 w-3" /> Featured · Locked
              </span>
              <BookOpen className="mt-8 h-10 w-10 text-tv-cyan" />
              <h3 className="mt-4 font-display text-2xl font-bold">{featured.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{featured.desc}</p>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                Documentation · Coming Soon
              </p>
            </div>
          </div>

          {/* Locked list + notify */}
          <div className="flex flex-col gap-3 lg:col-span-7">
            {rest.map((d) => (
              <div
                key={d.title}
                className="flex items-start gap-4 rounded-2xl border border-tv-line bg-tv-bg px-4 py-4 sm:px-5"
              >
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-tv-muted/50" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-tv-ink">{d.title}</h4>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-tv-muted/70">
                      Locked
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-tv-muted">{d.desc}</p>
                </div>
              </div>
            ))}

            <form
              onSubmit={onSubmit}
              className="mt-1 rounded-2xl border border-tv-line bg-white p-5 sm:p-6"
            >
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-tv-cyan-dim" />
                <label htmlFor="docs-notify" className="text-sm font-semibold text-tv-ink">
                  Notify me when docs launch
                </label>
              </div>
              {sent ? (
                <p className="mt-3 text-sm text-tv-cyan-dim">
                  Thanks — we’ll notify you when documentation is available.
                </p>
              ) : (
                <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <input
                    id="docs-notify"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 rounded-2xl border border-tv-line bg-tv-bg px-4 py-3 text-sm outline-none ring-tv-cyan focus:ring-2"
                  />
                  <button type="submit" className="btn-dark shrink-0">
                    Notify me
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
