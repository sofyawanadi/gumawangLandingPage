import { Coffee, Leaf, ShieldCheck, Package } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useInView } from '@/hooks/useInView'

const reasons = [
  { icon: Coffee, titleKey: 'why.reasons.r1.title', descKey: 'why.reasons.r1.desc' },
  { icon: Leaf, titleKey: 'why.reasons.r2.title', descKey: 'why.reasons.r2.desc' },
  { icon: ShieldCheck, titleKey: 'why.reasons.r3.title', descKey: 'why.reasons.r3.desc' },
  { icon: Package, titleKey: 'why.reasons.r4.title', descKey: 'why.reasons.r4.desc' },
]

export default function WhyChooseUs() {
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
            {t('why.label')}
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-coffee-700 md:text-6xl">
            {t('why.title')}
          </h2>
        </div>

        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <div
              key={reason.titleKey}
              className={`group border-t-2 border-cream-200 pt-8 transition-colors duration-300 hover:border-gold-600 ${gridInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-coffee-100 text-coffee-700 transition-colors duration-300 group-hover:bg-gold-700 group-hover:text-white">
                <reason.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-coffee-700">
                {t(reason.titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-600">
                {t(reason.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
