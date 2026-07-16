import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-coffee-700">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=80&fm=webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-800/60 via-coffee-800/20 to-coffee-800/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div
          className={`mx-auto mb-8 h-px w-16 bg-gold-600 ${mounted ? 'animate-scale-x' : 'opacity-0'}`}
        />

        <p
          className={`mb-8 text-sm font-medium uppercase tracking-[0.3em] text-gold-500 ${mounted ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}
        >
          {t('hero.subtitle')}
        </p>

        <h1
          className={`font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl ${mounted ? 'animate-slide-up animate-delay-200' : 'opacity-0'}`}
        >
          {t('hero.title1')}
          <br />
          <span className="text-gold-500">{t('hero.title2')}</span>
        </h1>

        <p
          className={`mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream-300 md:text-xl ${mounted ? 'animate-slide-up animate-delay-400' : 'opacity-0'}`}
        >
          {t('hero.description')}
        </p>

        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row ${mounted ? 'animate-slide-up animate-delay-600' : 'opacity-0'}`}
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
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cream-400/40 pt-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-cream-400/60" />
        </div>
      </div>
    </section>
  )
}
