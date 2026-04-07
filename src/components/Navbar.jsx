import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

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
    { label: 'Solutions',    to: '/services' },
    { label: 'Our Work',     to: '/work'     },
    { label: 'How It Works', to: '/process'  },
    { label: 'Pricing',      to: '/pricing'  },
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
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Adiran Tech" className="h-14 w-14 object-contain" />
        <span className="font-display font-700 text-snow text-base tracking-tight">ADIRAN<span className="text-cyan">_</span>TECH</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <NavLink key={l.label} to={l.to}
            className={({ isActive }) =>
              `font-sans text-sm font-500 transition-colors duration-200 ${
                isActive ? 'text-cyan' : 'text-snow/60 hover:text-cyan'
              }`
            }>
            {l.label}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <Link to="/contact"
          className="bg-cyan text-void font-sans font-700 text-sm px-5 py-2.5 rounded-xl hover:bg-cyan/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-cyan/20">
          Book a Free Call
        </Link>
      </div>

      <button className="md:hidden text-snow" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-navy border border-cyan/20 rounded-2xl shadow-2xl shadow-cyan/10 p-6 flex flex-col gap-4 md:hidden">
          {links.map(l => (
            <NavLink key={l.label} to={l.to} onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `font-sans text-base transition-colors ${isActive ? 'text-cyan' : 'text-snow/70 hover:text-cyan'}`
              }>
              {l.label}
            </NavLink>
          ))}
          <Link to="/about" onClick={() => setMobileOpen(false)}
            className="font-sans text-base text-snow/70 hover:text-cyan transition-colors">
            About
          </Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}
            className="bg-cyan text-void text-center font-sans font-700 text-sm px-5 py-3 rounded-xl">
            Book a Free Call
          </Link>
        </div>
      )}
    </nav>
  )
}
