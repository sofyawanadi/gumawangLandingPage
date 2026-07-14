import { motion } from 'framer-motion'
import { Coffee, Leaf, ShieldCheck, Package } from 'lucide-react'

const reasons = [
  {
    icon: Coffee,
    title: 'Freshly Roasted',
    desc: 'Every batch is roasted to order, ensuring peak freshness and flavor in every bean.',
  },
  {
    icon: Leaf,
    title: 'Premium Beans',
    desc: "We source only the highest grade beans directly from Indonesia's top growing regions.",
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: 'Rigorous quality checks at every stage — from sourcing to packaging.',
  },
  {
    icon: Package,
    title: 'Wholesale Ready',
    desc: 'Flexible wholesale options for cafes, restaurants, and retail partners.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
            Why Choose Us
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-coffee-700 md:text-6xl">
            Committed to Quality
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border-t-2 border-cream-200 pt-8 transition-colors duration-300 hover:border-gold-600"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-coffee-100 text-coffee-700 transition-colors duration-300 group-hover:bg-gold-700 group-hover:text-white">
                <reason.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-coffee-700">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-600">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
