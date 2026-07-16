import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useInView } from '@/hooks/useInView'

export default function CTA() {
  const { t } = useTranslation()
  const { ref, inView } = useInView()

  return (
    <section className="relative overflow-hidden bg-dark-700 py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=1920&q=80&fm=webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className={`mx-auto mb-8 h-px w-16 bg-gold-600 ${inView ? 'animate-scale-x' : 'opacity-0'}`} />

        <h2
          className={`font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl ${inView ? 'animate-slide-up' : 'opacity-0'}`}
        >
          {t('cta.title1')}
          <br />
          <span className="text-gold-500">{t('cta.title2')}</span>
        </h2>

        <p
          className={`mt-6 text-lg text-cream-300 md:text-xl ${inView ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}
        >
          {t('cta.description')}
        </p>

        <div className={inView ? 'animate-slide-up animate-delay-200' : 'opacity-0'}>
          <a
            href="#contact"
            className="mt-10 inline-flex h-13 cursor-pointer items-center justify-center gap-2 rounded-md bg-gold-700 px-10 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-700"
          >
            {t('cta.contact')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
