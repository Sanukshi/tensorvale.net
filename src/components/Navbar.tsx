import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './ui/Logo'
import { cn, navItems } from '../lib/utils'

/** Section ids that map to hash nav links (order = page order). */
const SECTION_IDS = ['platform', 'architecture', 'pricing', 'faq', 'contact'] as const

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  // Sync from URL when user clicks a nav link
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveHash('')
      return
    }
    setActiveHash(location.hash.replace(/^#/, '') || '')
  }, [location.pathname, location.hash])

  // Scroll-spy: highlight navbar as sections enter the viewport
  useEffect(() => {
    if (location.pathname !== '/') return

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (!elements.length) return

    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio)
          } else {
            visible.delete(id)
          }
        }

        // Near top of page → Home
        if (window.scrollY < 120) {
          setActiveHash((prev) => {
            if (prev !== '') {
              window.history.replaceState(null, '', '/')
            }
            return ''
          })
          return
        }

        if (!visible.size) return

        // Prefer the section closest to the top of the viewport among visible ones
        let bestId = ''
        let bestTop = Number.POSITIVE_INFINITY
        for (const id of SECTION_IDS) {
          if (!visible.has(id)) continue
          const el = document.getElementById(id)
          if (!el) continue
          const top = Math.abs(el.getBoundingClientRect().top - 100)
          if (top < bestTop) {
            bestTop = top
            bestId = id
          }
        }

        if (!bestId) return

        setActiveHash((prev) => {
          if (prev === bestId) return prev
          window.history.replaceState(null, '', `/#${bestId}`)
          return bestId
        })
      },
      {
        // Offset for fixed navbar; activate when section crosses upper third
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))

    // Also handle scroll-to-top / bottom edge cases
    const onScrollEdge = () => {
      if (window.scrollY < 120) {
        setActiveHash((prev) => {
          if (prev !== '') window.history.replaceState(null, '', '/')
          return ''
        })
        return
      }
      const doc = document.documentElement
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 40
      if (atBottom) {
        setActiveHash((prev) => {
          if (prev === 'contact') return prev
          window.history.replaceState(null, '', '/#contact')
          return 'contact'
        })
      }
    }
    window.addEventListener('scroll', onScrollEdge, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScrollEdge)
    }
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isItemActive = (href: string) => {
    if (location.pathname !== '/') return false
    if (href === '/') return activeHash === ''
    if (href.startsWith('/#')) return activeHash === href.slice(2)
    return false
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'border-b border-tv-line/60 bg-[#10232A]/95 backdrop-blur-xl transition-all duration-300 ease-out',
          scrolled && 'shadow-soft',
        )}
      >
        <div className="container-tv flex h-[76px] min-w-0 items-center justify-between gap-3">
          <Link to="/" aria-label="TensorVale home" className="relative z-10 min-w-0 shrink">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = isItemActive(item.href)
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition duration-200',
                    active
                      ? 'bg-tv-cyan/15 text-tv-cyan'
                      : 'text-white/60 hover:text-white',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="relative z-10 flex items-center gap-2 sm:gap-3">
            <Link
              to="/tensoreval"
              className="hidden items-center gap-2 rounded-full bg-tv-cyan px-5 py-2.5 text-sm font-semibold text-tv-panel transition hover:bg-[#c9a07a] sm:inline-flex"
            >
              TensorEval <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              key="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#0a151a]/65 backdrop-blur-[2px] lg:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="mobile-nav-panel"
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute inset-x-3 top-[80px] z-50 overflow-hidden rounded-[1.5rem] border border-tv-line bg-tv-card shadow-soft lg:hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {navItems.map((item) => {
                  const active = isItemActive(item.href)
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'rounded-xl px-4 py-3.5 text-sm font-medium',
                        active ? 'bg-tv-cyan/15 text-tv-cyan' : 'text-white hover:bg-white/5',
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <Link to="/tensoreval" className="btn-primary mt-2 w-full">
                  TensorEval <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
