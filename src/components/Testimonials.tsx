import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'The consistency and flavor are exceptional.',
    author: 'Coffee Shop Owner',
    location: 'Jakarta',
  },
  {
    quote: "Our customers immediately noticed the difference. Best coffee we've ever served.",
    author: 'Cafe Manager',
    location: 'Bandung',
  },
  {
    quote: "Gumawang's single-origin beans are a game changer for our menu.",
    author: 'Restaurant Owner',
    location: 'Bali',
  },
]

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
      ))
      }
    </div>
  )
}

export default function Testimonials() {
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
            Testimonials
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-coffee-700 md:text-6xl">
            What Partners Say
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg border border-cream-200 bg-cream-50 p-8"
            >
              <div className="flex items-center justify-between">
                <Quote className="text-gold-600/40" size={32} strokeWidth={1.5} />
                <Stars />
              </div>
              <p className="mt-6 text-base leading-relaxed text-dark-700 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-cream-200 pt-4">
                <p className="font-heading text-lg font-semibold text-coffee-700">
                  {t.author}
                </p>
                <p className="text-sm text-dark-500">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
