import { useTranslation } from 'react-i18next'
import { useInView } from '@/hooks/useInView'

const images = [
  { src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80&fm=webp', altKey: 'gallery.images.img1' },
  { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80&fm=webp', altKey: 'gallery.images.img2' },
  { src: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80&fm=webp', altKey: 'gallery.images.img3' },
  { src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80&fm=webp', altKey: 'gallery.images.img4' },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80&fm=webp', altKey: 'gallery.images.img5' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&fm=webp', altKey: 'gallery.images.img6' },
]

export default function Gallery() {
  const { t } = useTranslation()
  const { ref: headerRef, inView: headerInView } = useInView()
  const { ref: gridRef, inView: gridInView } = useInView()

  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`mb-16 text-center ${headerInView ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
            {t('gallery.label')}
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-coffee-700 md:text-6xl">
            {t('gallery.title')}
          </h2>
        </div>

        <div ref={gridRef} className="columns-2 gap-4 md:columns-3">
          {images.map((image, i) => (
            <div
              key={image.altKey}
              className={`group mb-4 break-inside-avoid overflow-hidden rounded-lg ${gridInView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${(i % 3) * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={t(image.altKey)}
                width={600}
                height={400}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
