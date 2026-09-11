import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Logo from './ui/Logo'
import { navItems } from '../lib/utils'

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M14 8.5h2.5V5.6c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2V13H6v3.2h2.5V22h3.3v-5.8H15l.5-3.2h-3.2V11c0-.9.3-1.6 1.7-1.6V8.5z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M17.7 3H20.5l-6.9 7.9L21.5 21h-5.6l-4.4-5.7L6.4 21H3.5l7.4-8.5L2.8 3h5.7l4 5.2L17.7 3zm-1 16.2h1.6L7.6 4.7H6L16.7 19.2z" />
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.2-.1-.8-.2-2 0-2.9.2-.8 1.3-5.5 1.3-5.5s-.3-.7-.3-1.6c0-1.5.9-2.7 2-2.7.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.5 1.9 1.6 1.9 1.9 0 3.4-2 3.4-4.9 0-2.6-1.9-4.4-4.5-4.4-3.1 0-4.9 2.3-4.9 4.7 0 .9.4 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2-.5-2.4-1.2l-.6 2.5c-.2.9-.9 2-1.3 2.7 1 .3 2 .5 3.1.5 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M23 12.2s0-3.1-.4-4.5c-.2-.9-.9-1.6-1.8-1.8C19.4 5.5 12 5.5 12 5.5s-7.4 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9.1 1 12.2 1 12.2s0 3.1.4 4.5c.2.9.9 1.6 1.8 1.8 1.4.4 8.8.4 8.8.4s7.4 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.5.4-4.5zM9.8 15.5v-6.6l6.3 3.3-6.3 3.3z" />
      </svg>
    ),
  },
]

const exploreLinks = navItems.filter((l) => l.label !== 'Home')
const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export default function Footer() {
  return (
    <footer id="company" className="relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 bg-[#0a151a]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 10% 0%, rgba(181,136,99,0.2), transparent 50%), radial-gradient(ellipse 55% 45% at 95% 100%, rgba(61,77,85,0.45), transparent 55%), linear-gradient(180deg, #10232A 0%, #0c1a20 55%, #181816 100%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 grid-dots-dark opacity-20" />

      <div className="container-tv relative">
        {/* CTA ribbon */}
        <div className="relative overflow-hidden rounded-b-[1.75rem] border border-t-0 border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent px-6 py-10 sm:rounded-b-[2rem] sm:px-10 sm:py-12 lg:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-tv-cyan/60 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-tv-cyan/15 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="min-w-0 max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-tv-cyan">
                Ready to evaluate
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                Evaluate better.{' '}
                <span className="text-tv-cyan">Ship with confidence.</span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base">
                Request access to TensorVale — systematic evaluation, benchmarking, and model
                selection for production-ready AI teams.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Link to="/#contact" className="btn-primary w-full justify-center sm:w-auto">
                Request Access <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/#platform" className="btn-outline-light w-full justify-center sm:w-auto">
                Explore Platform
              </Link>
            </div>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-12 lg:py-16">
          <div>
            <Logo to="/" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              AI Model Evaluation & Experimentation Platform — test, benchmark, compare, and select
              models with shared evidence before production.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5" aria-label="Social media">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/65 transition hover:border-tv-cyan/50 hover:bg-tv-cyan/15 hover:text-tv-cyan"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-tv-cyan">
              Explore
            </h3>
            <ul className="mt-4 space-y-1">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="inline-flex rounded-lg px-1 py-2 text-sm text-white/55 transition hover:text-tv-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-tv-cyan">
              Legal
            </h3>
            <ul className="mt-4 space-y-1">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="inline-flex rounded-lg px-1 py-2 text-sm text-white/55 transition hover:text-tv-cyan"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                Entities
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Tensorvale PVT LTD
                <span className="mx-2 text-white/25">·</span>
                Tensorvale LLC
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <p className="text-sm text-white/40">© 2026 TensorVale. All rights reserved.</p>
          <p className="text-xs tracking-wide text-white/30">
            Evaluation · Experimentation · Selection
          </p>
        </div>
      </div>
    </footer>
  )
}
