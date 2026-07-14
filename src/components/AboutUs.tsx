import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section id="about" className="bg-cream-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
              About Us
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-coffee-700 md:text-6xl">
              Every Bean Has
              <br />
              <span className="italic text-gold-700">a Story</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-dark-600 md:text-lg">
              <p>
                At Gumawang Coffee, we believe every coffee bean has a story.
              </p>
              <p>
                We source premium beans directly from Indonesian farmers and
                roast them carefully in small batches to preserve each origin's
                unique character.
              </p>
              <p>
                Whether you're a cafe owner, reseller, or coffee enthusiast,
                we're committed to delivering exceptional quality in every cup.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80"
                alt="Coffee plantation in Indonesia"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-coffee-700 px-8 py-6 text-white shadow-xl md:block">
              <p className="font-heading text-3xl font-bold text-gold-500">5+</p>
              <p className="text-sm text-cream-300">Years of Roasting</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
