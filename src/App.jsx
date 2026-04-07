import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import ProcessPage from './pages/ProcessPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {loading && pathname === '/' && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className="font-sans bg-void">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <span className="font-hero text-5xl text-snow">404</span>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </>
  )
}
