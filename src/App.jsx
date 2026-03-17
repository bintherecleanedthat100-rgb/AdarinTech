import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Philosophy from './components/Philosophy'
import Process from './components/Process'
import ClientTestimonials from './components/ClientTestimonials'
import About from './components/About'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className="font-sans bg-void">
        <Navbar />
        <Hero />
        <TrustBar />
        <Portfolio />
        <Services />
        <WhyUs />
        <Philosophy />
        <Process />
        <ClientTestimonials />
        <About />
        <Pricing />
        <FAQ />
        <Booking />
        <Footer />
      </div>
    </>
  )
}
