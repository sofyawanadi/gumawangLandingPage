import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { products } from '@/data/products'

export default function CoffeeProducts() {
  const { t } = useTranslation()
  return (
    <section id="coffee" className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
            {t('products.label')}
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-coffee-700 md:text-6xl">
            {t('products.title1')}
            <br />
            <span className="italic text-gold-700">{t('products.title2')}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-dark-600 md:text-lg">
            {t('products.description')}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => {
            const name = t(`${product.key}.name`)
            const origin = t(`${product.key}.origin`)
            const roast = t(`${product.key}.roast`)
            const notes = t(`${product.key}.notes`, { returnObjects: true }) as string[]
            const description = t(`${product.key}.description`)
            return (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gold-400/50">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${name} coffee beans from ${origin}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-heading text-2xl text-coffee-700">
                          {name}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {origin} &middot; {roast}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm leading-relaxed text-dark-600">
                      {description}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {notes.map((note) => (
                        <Badge
                          key={note}
                          className="border border-gold-400/30 bg-gold-50 text-gold-800 hover:bg-gold-100"
                        >
                          {note}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex h-10 cursor-pointer items-center gap-1.5 text-sm font-semibold text-coffee-700 transition-colors hover:text-gold-700"
                    >
                      {t('products.inquire')}
                      <ArrowUpRight size={16} />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
