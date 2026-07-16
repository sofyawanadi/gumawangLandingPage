import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-coffee-700">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-800/60 via-coffee-800/20 to-coffee-800/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 h-px w-16 bg-gold-600"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-gold-500"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          {t('hero.title1')}
          <br />
          <span className="text-gold-500">{t('hero.title2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream-300 md:text-xl"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#coffee"
            className="inline-flex h-13 cursor-pointer items-center justify-center gap-2 rounded-md bg-gold-700 px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-coffee-700"
          >
            {t('hero.explore')}
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex h-13 cursor-pointer items-center justify-center rounded-md border border-cream-400/50 px-8 py-3 text-sm font-medium text-cream-100 transition-colors duration-200 hover:border-cream-300 hover:bg-cream-100/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-300 focus-visible:ring-offset-2 focus-visible:ring-offset-coffee-700"
          >
            {t('hero.contact')}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cream-400/40 pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-cream-400/60"
          />
        </div>
      </motion.div>
    </section>
  )
}
