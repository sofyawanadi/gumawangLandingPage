import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function AboutUs() {
  const { t } = useTranslation()
  return (
    <section id="about" className="bg-cream-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
              {t('about.label')}
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-coffee-700 md:text-6xl">
              {t('about.title1')}
              <br />
              <span className="italic text-gold-700">{t('about.title2')}</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-dark-600 md:text-lg">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80"
                alt={t('about.altImage')}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-coffee-700 px-8 py-6 text-white shadow-xl md:block">
              <p className="font-heading text-3xl font-bold text-gold-500">{t('about.years')}</p>
              <p className="text-sm text-cream-300">{t('about.yearsLabel')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
