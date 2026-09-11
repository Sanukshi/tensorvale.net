import { FormEvent, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import { Reveal, Float, easeOut } from '../../lib/motion'

const offices = [
  {
    entity: 'Tensorvale PVT LTD',
    region: 'Sri Lanka',
    short: 'SL',
    address: 'No. 450, High Level Road, Nugegoda, Sri Lanka',
    phone: '+94 77 123 4892',
    tel: '+94771234892',
  },
  {
    entity: 'Tensorvale LLC',
    region: 'United States',
    short: 'US',
    address: '7 Washington Pl, New York, NY 10003, USA',
    phone: '+1 585 304 2254',
    tel: '+15853042254',
  },
]

const intents = [
  { value: 'access', label: 'Request Access' },
  { value: 'sales', label: 'Talk to Sales' },
  { value: 'enterprise', label: 'Enterprise' },
  { value: 'other', label: 'Other' },
]

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [intent, setIntent] = useState('access')
  const [focused, setFocused] = useState<string | null>(null)
  const reduce = useReducedMotion()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#D3C3B9]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 12% 10%, rgba(255,255,255,0.55), transparent 55%), radial-gradient(ellipse 55% 45% at 90% 80%, rgba(181,136,99,0.22), transparent 55%), linear-gradient(165deg, #E4D6CB 0%, #D3C3B9 48%, #C9B7AB 100%)',
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-white/50 blur-[100px]"
        animate={reduce ? undefined : { opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#B58863]/25 blur-[90px]"
        animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="container-tv relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14 xl:gap-20">
          {/* Left — brand + channels */}
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a4e]">
                Reach us
              </p>
              <h2 className="mt-3 font-winked text-4xl leading-[0.95] tracking-tight text-[#181816] sm:text-6xl lg:text-[5.25rem]">
                Contact
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[#5c5654] sm:text-lg">
                Tell us about your models, workloads, and evaluation goals. Founded by Roald Dhanel ·
                Feb 10, 2024.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10 space-y-4">
              {offices.map((o, i) => (
                <Float key={o.entity} amplitude={reduce ? 0 : 5} duration={5.5 + i} delay={i * 0.35}>
                  <motion.a
                    href={`tel:${o.tel}`}
                    whileHover={reduce ? undefined : { y: -3, borderColor: 'rgba(181,136,99,0.55)' }}
                    transition={{ duration: 0.22 }}
                    className="group block rounded-2xl border border-[#181816]/10 bg-white/55 p-5 shadow-[0_12px_40px_rgba(24,24,22,0.06)] backdrop-blur-sm transition hover:bg-white/80"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#181816] font-display text-sm font-bold text-[#B58863] transition group-hover:bg-[#B58863] group-hover:text-[#181816]">
                        {o.short}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-display text-base font-bold text-[#181816]">{o.region}</p>
                          <ArrowUpRight className="h-4 w-4 text-[#181816]/25 transition group-hover:text-[#B58863]" />
                        </div>
                        <p className="mt-0.5 text-xs font-medium text-[#181816]/45">{o.entity}</p>
                        <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-[#5c5654]">
                          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B58863]" />
                          {o.address}
                        </p>
                        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#181816] transition group-hover:text-[#B58863]">
                          <Phone className="h-3.5 w-3.5 text-[#B58863]" />
                          {o.phone}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                </Float>
              ))}
            </Reveal>

            <Reveal delay={0.14} className="mt-5 space-y-3">
              <a
                href="mailto:connect@tensorvale.net"
                className="group flex items-center gap-4 rounded-2xl border border-[#B58863]/35 bg-[#B58863]/15 px-5 py-4 transition hover:border-[#B58863]/55 hover:bg-[#B58863]/22"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B58863] text-[#181816] transition group-hover:scale-105">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a6a4e]">
                    Email
                  </p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-[#181816] sm:text-base">
                    connect@tensorvale.net
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#B58863]" />
              </a>

              <p className="mt-2 inline-flex items-center gap-2 text-xs text-[#5c5654]">
                <Clock3 className="h-3.5 w-3.5 text-[#B58863]" />
                Typical reply · 1–2 business days
              </p>
            </Reveal>
          </div>

          {/* Right — form stage */}
          <Reveal delay={0.1}>
            <div className="relative">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-tv-cyan/15 blur-2xl sm:-inset-4"
                animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#181816]/15 bg-[#10232A] shadow-[0_28px_80px_rgba(24,24,22,0.28)] sm:rounded-[2rem]">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(181,136,99,0.55), transparent)',
                  }}
                />
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-tv-cyan/20 blur-3xl"
                  animate={reduce ? undefined : { x: [0, 12, 0], y: [0, 8, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative min-w-0 p-5 text-[#F5EDE6] sm:p-8 lg:p-9">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B58863]">
                        Message
                      </p>
                      <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#F5EDE6] sm:text-[1.75rem]">
                        Get in touch
                      </h3>
                    </div>
                    <motion.span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#B58863]"
                      animate={reduce ? undefined : { rotate: [0, -8, 0, 8, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Send className="h-4 w-4" />
                    </motion.span>
                  </div>

                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.div
                        key="ok"
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: easeOut }}
                        className="mt-10 py-10 text-center"
                      >
                        <motion.span
                          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#B58863] text-[#181816]"
                          initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                        >
                          <CheckCircle2 className="h-8 w-8" />
                        </motion.span>
                        <p className="mt-6 font-winked text-4xl text-[#F5EDE6] sm:text-5xl">Sent</p>
                        <p className="mt-3 text-sm leading-relaxed text-[#F5EDE6]/70">
                          Thanks — we&apos;ll reply within 1–2 business days.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSent(false)}
                          className="mt-7 text-sm font-semibold text-[#B58863] underline-offset-4 transition hover:underline"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={onSubmit}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: easeOut }}
                        className="mt-8 space-y-6"
                      >
                        <div>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5EDE6]/55">
                            What do you need?
                          </p>
                          <div
                            className="relative flex flex-wrap gap-2"
                            role="group"
                            aria-label="Inquiry type"
                          >
                            {intents.map((item) => {
                              const selected = intent === item.value
                              return (
                                <button
                                  key={item.value}
                                  type="button"
                                  onClick={() => setIntent(item.value)}
                                  className={cn(
                                    'relative min-h-11 rounded-full px-4 py-2.5 text-sm font-medium transition',
                                    selected ? 'text-[#181816]' : 'text-[#F5EDE6]/65 hover:text-[#F5EDE6]',
                                  )}
                                >
                                  {selected && (
                                    <motion.span
                                      layoutId="contact-intent"
                                      className="absolute inset-0 rounded-full bg-[#B58863]"
                                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                    />
                                  )}
                                  <span className="relative z-10">{item.label}</span>
                                </button>
                              )
                            })}
                          </div>
                          <input type="hidden" name="intent" value={intent} />
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <UnderlineField
                            label="Name"
                            name="name"
                            required
                            focused={focused}
                            setFocused={setFocused}
                          />
                          <UnderlineField
                            label="Email"
                            name="email"
                            type="email"
                            required
                            focused={focused}
                            setFocused={setFocused}
                          />
                        </div>
                        <UnderlineField
                          label="Phone number"
                          name="phone"
                          type="tel"
                          focused={focused}
                          setFocused={setFocused}
                        />
                        <UnderlineField
                          label="Message"
                          name="message"
                          required
                          multiline
                          focused={focused}
                          setFocused={setFocused}
                        />

                        <motion.button
                          type="submit"
                          whileHover={reduce ? undefined : { y: -2 }}
                          whileTap={{ scale: 0.985 }}
                          className="group mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-tv-cyan px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-tv-bg shadow-[0_12px_40px_rgba(181,136,99,0.28)] transition hover:bg-[#c9a07a]"
                        >
                          Send message
                          <Send className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function UnderlineField({
  label,
  name,
  type = 'text',
  required,
  multiline,
  focused,
  setFocused,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  multiline?: boolean
  focused: string | null
  setFocused: (v: string | null) => void
}) {
  const active = focused === name
  const shared =
    'w-full bg-transparent py-2.5 text-sm text-[#F5EDE6] outline-none transition placeholder:text-[#F5EDE6]/30'

  return (
    <div className="relative">
      <label
        htmlFor={`contact-${name}`}
        className={cn(
          'block text-sm font-medium transition-colors duration-200',
          active ? 'text-[#B58863]' : 'text-[#F5EDE6]/80',
        )}
      >
        {label}
        {required ? <span className="text-[#B58863]"> *</span> : null}
      </label>
      {multiline ? (
        <textarea
          id={`contact-${name}`}
          name={name}
          required={required}
          rows={3}
          placeholder=" "
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          className={cn(shared, 'mt-1 min-h-[5.5rem] resize-y')}
        />
      ) : (
        <input
          id={`contact-${name}`}
          name={name}
          type={type}
          required={required}
          placeholder=" "
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          className={cn(shared, 'mt-1')}
        />
      )}
      <span className="absolute inset-x-0 bottom-0 h-px bg-[#F5EDE6]/25" />
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 origin-left bg-[#B58863]"
        initial={false}
        animate={{ scaleX: active ? 1 : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.28, ease: easeOut }}
        style={{ width: '100%' }}
      />
    </div>
  )
}
