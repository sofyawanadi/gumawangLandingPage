import { useTranslation } from 'react-i18next'
import { useInView } from '@/hooks/useInView'

export default function AboutUs() {
  const { t } = useTranslation()
  const { ref: textRef, inView: textInView } = useInView()
  const { ref: imgRef, inView: imgInView } = useInView()

  return (
    <section id="about" className="bg-cream-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div
            ref={textRef}
            className={textInView ? 'animate-slide-left' : 'opacity-0'}
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
          </div>

          <div
            ref={imgRef}
            className={`relative ${imgInView ? 'animate-scale-in' : 'opacity-0'}`}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80&fm=webp"
                alt={t('about.altImage')}
                width={800}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-coffee-700 px-8 py-6 text-white shadow-xl md:block">
              <p className="font-heading text-3xl font-bold text-gold-500">{t('about.years')}</p>
              <p className="text-sm text-cream-300">{t('about.yearsLabel')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
