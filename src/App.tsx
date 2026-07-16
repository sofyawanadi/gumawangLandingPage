import { lazy, Suspense } from 'react'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'

const Statistics = lazy(() => import('@/components/Statistics'))
const CoffeeProducts = lazy(() => import('@/components/CoffeeProducts'))
const RoastingProcess = lazy(() => import('@/components/RoastingProcess'))
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'))
const Gallery = lazy(() => import('@/components/Gallery'))
const Testimonials = lazy(() => import('@/components/Testimonials'))
const CTA = lazy(() => import('@/components/CTA'))
const Footer = lazy(() => import('@/components/Footer'))

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Suspense fallback={null}>
          <Statistics />
          <CoffeeProducts />
          <RoastingProcess />
          <WhyChooseUs />
          <Gallery />
          <Testimonials />
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <BackToTop />
    </div>
  )
}
