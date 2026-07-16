import { useTranslation } from 'react-i18next'
import { useInView } from '@/hooks/useInView'

const steps = [
  { number: '01', titleKey: 'process.steps.s1.title', descKey: 'process.steps.s1.desc' },
  { number: '02', titleKey: 'process.steps.s2.title', descKey: 'process.steps.s2.desc' },
  { number: '03', titleKey: 'process.steps.s3.title', descKey: 'process.steps.s3.desc' },
  { number: '04', titleKey: 'process.steps.s4.title', descKey: 'process.steps.s4.desc' },
]

export default function RoastingProcess() {
  const { t } = useTranslation()
  const { ref: headerRef, inView: headerInView } = useInView()
  const { ref: gridRef, inView: gridInView } = useInView()

  return (
    <section className="bg-coffee-800 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`mb-16 text-center ${headerInView ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
            {t('process.label')}
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            {t('process.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-cream-400 md:text-lg">
            {t('process.description')}
          </p>
        </div>

        <div ref={gridRef} className="grid gap-12 md:grid-cols-4 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative text-center ${gridInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-2 flex justify-center">
                <span className="font-heading text-6xl font-bold text-gold-700/30 md:text-7xl">
                  {step.number}
                </span>
              </div>
              <div className="mx-auto mb-4 h-px w-12 bg-gold-600" />
              <h3 className="font-heading text-xl font-semibold text-white">
                {t(step.titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-400">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
