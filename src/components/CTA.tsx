import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function CTA() {
  const { t } = useTranslation()
  return (
    <section className="relative overflow-hidden bg-dark-700 py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 h-px w-16 bg-gold-600"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
        >
          {t('cta.title1')}
          <br />
          <span className="text-gold-500">{t('cta.title2')}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 text-lg text-cream-300 md:text-xl"
        >
          {t('cta.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="mt-10 inline-flex h-13 cursor-pointer items-center justify-center gap-2 rounded-md bg-gold-700 px-10 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-700"
          >
            {t('cta.contact')}
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
