import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const testimonialKeys = [
  'testimonials.items.t1',
  'testimonials.items.t2',
  'testimonials.items.t3',
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
  const { t } = useTranslation()
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
            {t('testimonials.label')}
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-coffee-700 md:text-6xl">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonialKeys.map((key, i) => (
            <motion.div
              key={key}
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
                &ldquo;{t(`${key}.quote`)}&rdquo;
              </p>
              <div className="mt-6 border-t border-cream-200 pt-4">
                <p className="font-heading text-lg font-semibold text-coffee-700">
                  {t(`${key}.author`)}
                </p>
                <p className="text-sm text-dark-500">{t(`${key}.location`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
