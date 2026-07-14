import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80', alt: 'Coffee beans close-up' },
  { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80', alt: 'Coffee roasting process' },
  { src: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80', alt: 'Coffee packaging' },
  { src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80', alt: 'Coffee brewing' },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80', alt: 'Cup of coffee' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', alt: 'Coffee warehouse' },
]

export default function Gallery() {
  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
            Gallery
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-coffee-700 md:text-6xl">
            Our World of Coffee
          </h2>
        </motion.div>

        <div className="columns-2 gap-4 md:columns-3">
          {images.map((image, i) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
