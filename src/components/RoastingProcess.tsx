import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Bean Selection', desc: 'Hand-selecting the finest beans from trusted Indonesian farmers.' },
  { number: '02', title: 'Quality Inspection', desc: 'Rigorous screening for size, color, and defect-free beans.' },
  { number: '03', title: 'Small Batch Roasting', desc: 'Artisan roasting in small batches to preserve unique flavor profiles.' },
  { number: '04', title: 'Fresh Packaging', desc: 'Immediately sealed with one-way valves to maintain peak freshness.' },
]

export default function RoastingProcess() {
  return (
    <section className="bg-coffee-800 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
            The Process
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            From Farm to Bag
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-cream-400 md:text-lg">
            Every step is crafted with care and precision.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="mb-2 flex justify-center">
                <span className="font-heading text-6xl font-bold text-gold-700/30 md:text-7xl">
                  {step.number}
                </span>
              </div>
              <div className="mx-auto mb-4 h-px w-12 bg-gold-600" />
              <h3 className="font-heading text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-400">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
