import { motion } from 'framer-motion'

const techs = [
  {
    name: 'NeMo',
    tag: 'Training & customization',
    blurb: 'Compatible pathway for models prepared in NeMo-based workflows.',
    image: '/images/tv-tech-nemo.png',
  },
  {
    name: 'TensorRT',
    tag: 'Inference optimization',
    blurb: 'Evaluate optimized inference builds alongside baseline models.',
    image: '/images/tv-tech-tensorrt.png',
  },
  {
    name: 'Triton',
    tag: 'Model serving',
    blurb: 'Benchmark serving configurations used in production deployment.',
    image: '/images/tv-tech-triton.png',
  },
  {
    name: 'NIM',
    tag: 'Inference microservices',
    blurb: 'Include NIM-packaged services in evaluation and comparison runs.',
    image: '/images/tv-tech-nim.png',
  },
]

export default function TechnicalShowcaseSection() {
  return (
    <section id="technology" className="section-pad">
      <div className="container-tv">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Technology Integration</p>
          <h2 className="heading-lg mt-3 text-white">Technical showcase</h2>
          <p className="body-muted mt-4">
            Compatibility with NeMo, TensorRT, Triton, and NIM — stack interoperability only, not
            brand positioning.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="group overflow-hidden rounded-[1.5rem] border border-tv-line bg-tv-card transition hover:border-tv-cyan/40 hover:shadow-glow"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#0c1a20]">
                <img
                  src={t.image}
                  alt={`${t.name} compatibility`}
                  className="h-[68%] w-[68%] object-contain mix-blend-screen transition duration-500 group-hover:scale-[1.06]"
                  width={480}
                  height={360}
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="font-display text-2xl font-bold tracking-tight text-white transition group-hover:text-tv-cyan">
                  {t.name}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-tv-muted">
                  {t.tag}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-tv-muted/90">{t.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
