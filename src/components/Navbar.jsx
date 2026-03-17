import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    )
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Solutions', href: '#services' },
    { label: 'How It Works', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 rounded-2xl px-6 py-3 flex items-center justify-between ${
        scrolled
          ? 'bg-navy/98 backdrop-blur-md shadow-2xl shadow-black/40 border border-snow/8'
          : 'bg-void/40 backdrop-blur-sm border border-snow/5'
      }`}
    >
      <a href="#" className="flex items-center gap-2">
        <img src="/logo.png" alt="Adiran Tech" className="h-14 w-14 object-contain" />
        <span className="font-display font-700 text-snow text-base tracking-tight">ADIRAN<span className="text-cyan">_</span>TECH</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <a key={l.label} href={l.href}
            className="font-sans text-sm font-500 text-snow/60 hover:text-cyan transition-colors duration-200">
            {l.label}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <a href="#contact"
          className="bg-cyan text-void font-sans font-700 text-sm px-5 py-2.5 rounded-xl hover:bg-cyan/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-cyan/20">
          Book a Free Call
        </a>
      </div>

      <button className="md:hidden text-snow" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-navy border border-cyan/20 rounded-2xl shadow-2xl shadow-cyan/10 p-6 flex flex-col gap-4 md:hidden">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="font-sans text-base text-snow/70 hover:text-cyan transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}
            className="bg-cyan text-void text-center font-sans font-700 text-sm px-5 py-3 rounded-xl">
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  )
}
