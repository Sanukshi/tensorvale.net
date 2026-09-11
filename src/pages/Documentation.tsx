import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Lock } from 'lucide-react'

const docs = [
  'Evaluation APIs',
  'Experiment management guides',
  'Benchmarking documentation',
  'Model integration resources',
  'Performance evaluation guides',
]

export default function DocumentationPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
  }

  return (
    <div className="pb-20 pt-10">
      <div className="container-tv max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-tv-muted transition hover:text-tv-ink">
          <ArrowLeft className="h-4 w-4" /> Back to landing
        </Link>

        <span className="mt-8 inline-flex rounded-full border border-tv-line bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-tv-muted">
          Coming Soon
        </span>
        <h1 className="heading-xl mt-4 text-tv-ink">Developer API & Documentation</h1>
        <p className="body-muted mt-4">
          Documentation for evaluation APIs, experiment management, benchmarking, model
          integration, and performance evaluation is on the roadmap.
        </p>

        <ul className="mt-10 space-y-3">
          {docs.map((d) => (
            <li
              key={d}
              className="flex items-center gap-3 rounded-2xl border border-tv-line bg-white px-4 py-4 text-sm text-tv-muted"
            >
              <Lock className="h-4 w-4 shrink-0 opacity-50" />
              <span className="flex-1">{d}</span>
              <span className="font-mono text-[10px] uppercase tracking-wide">Locked</span>
            </li>
          ))}
        </ul>

        <form onSubmit={onSubmit} className="bento-panel mt-10 p-6 sm:p-8">
          <label htmlFor="docs-page-notify" className="text-sm font-semibold text-tv-ink">
            Notify me when docs launch
          </label>
          {sent ? (
            <p className="mt-3 text-sm text-tv-cyan-dim">Thanks — we’ll notify you at launch.</p>
          ) : (
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                id="docs-page-notify"
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
  )
}
