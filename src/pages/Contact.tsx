import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react'
import FinalCTASection from '../components/landing/FinalCTASection'

const offices = [
  {
    entity: 'Tensorvale PVT LTD',
    region: 'Sri Lanka',
    address: 'No. 450, High Level Road, Nugegoda',
    phone: '+94 77 123 4892',
    tel: '+94771234892',
  },
  {
    entity: 'Tensorvale LLC',
    region: 'United States',
    address: '7 Washington Pl, New York, NY 10003',
    phone: '+1 585 304 2254',
    tel: '+15853042254',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="section-pad pt-10">
        <div className="container-tv">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-tv-muted transition hover:text-tv-ink"
          >
            <ArrowLeft className="h-4 w-4" /> Back to landing
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="eyebrow">Contact</p>
              <h1 className="heading-lg mt-3 text-tv-ink">Request access to TensorVale</h1>
              <p className="body-muted mt-4">
                Tell us about your models, workloads, and evaluation goals. Founded by Roald Dhanel,
                Feb 2024.
              </p>

              <div className="mt-8 space-y-4">
                {offices.map((o) => (
                  <div key={o.entity} className="rounded-2xl border border-tv-line bg-white p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-tv-muted">
                      {o.region}
                    </p>
                    <h2 className="mt-1 font-display text-base font-bold text-tv-ink">{o.entity}</h2>
                    <p className="mt-3 flex items-start gap-2 text-sm text-tv-muted">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                      {o.address}
                    </p>
                    <a
                      href={`tel:${o.tel}`}
                      className="mt-2 flex items-center gap-2 text-sm font-medium text-tv-ink transition hover:text-tv-cyan-dim"
                    >
                      <Phone className="h-4 w-4" />
                      {o.phone}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <a
                  href="mailto:connect@tensorvale.net"
                  className="flex items-center gap-2 text-sm font-medium text-tv-cyan-dim transition hover:text-tv-ink"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  connect@tensorvale.net
                </a>
              </div>
            </div>

            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bento-panel p-6 sm:p-8"
            >
              {sent ? (
                <div className="rounded-2xl border border-tv-cyan/30 bg-tv-cyan/10 px-5 py-10 text-center">
                  <p className="font-display text-lg font-bold text-tv-ink">Message sent</p>
                  <p className="mt-2 text-sm text-tv-muted">Thanks — we’ll get back to you shortly.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <Field label="Name" name="name" required />
                  <Field label="Work Email" name="email" type="email" required />
                  <Field label="Company" name="company" />
                  <div>
                    <label className="mb-1.5 block text-sm text-tv-muted" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full rounded-2xl border border-tv-line bg-tv-bg px-3 py-2.5 text-sm outline-none ring-tv-cyan focus:ring-2"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Request Access
                  </button>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>
      <FinalCTASection />
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-tv-muted" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-tv-line bg-tv-bg px-3 py-2.5 text-sm outline-none ring-tv-cyan focus:ring-2"
      />
    </div>
  )
}
