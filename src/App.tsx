import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Statistics from '@/components/Statistics'
import CoffeeProducts from '@/components/CoffeeProducts'
import RoastingProcess from '@/components/RoastingProcess'
import WhyChooseUs from '@/components/WhyChooseUs'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Statistics />
        <CoffeeProducts />
        <RoastingProcess />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
