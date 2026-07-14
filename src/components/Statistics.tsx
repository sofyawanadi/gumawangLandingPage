import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Package, MapPin, Users, Calendar } from 'lucide-react'

const stats = [
  { icon: Package, label: 'Coffee Roasted', target: 5000, display: '5,000', suffix: ' Kg' },
  { icon: MapPin, label: 'Coffee Origins', target: 20, display: '20', suffix: '+' },
  { icon: Users, label: 'Business Partners', target: 100, display: '100', suffix: '+' },
  { icon: Calendar, label: 'Years Experience', target: 5, display: '5', suffix: '+' },
]

function Counter({ target, display, suffix }: { target: number; display: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const steps = 30
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count >= target ? display : count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Statistics() {
  return (
    <section className="bg-coffee-700 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border border-gold-600/40 bg-gold-600/10 text-gold-500">
                <stat.icon size={24} strokeWidth={1.5} />
              </div>
              <p className="font-heading text-3xl font-bold text-white md:text-5xl">
                <Counter target={stat.target} display={stat.display} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-cream-400 md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
