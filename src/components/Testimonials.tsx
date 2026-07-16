import { Quote, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useInView } from '@/hooks/useInView'

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
  const { ref: headerRef, inView: headerInView } = useInView()
  const { ref: gridRef, inView: gridInView } = useInView()

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`mb-16 text-center ${headerInView ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
            {t('testimonials.label')}
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-coffee-700 md:text-6xl">
            {t('testimonials.title')}
          </h2>
        </div>

        <div ref={gridRef} className="grid gap-8 md:grid-cols-3">
          {testimonialKeys.map((key, i) => (
            <article
              key={key}
              className={`rounded-lg border border-cream-200 bg-cream-50 p-8 ${gridInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
