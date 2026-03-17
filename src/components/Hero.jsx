import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo('.hero-corner',  { opacity: 0 },        { opacity: 1, duration: 0.8, ease: 'power2.out' })
        .fromTo('.hero-tag',     { opacity: 0, y: 10 },  { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-line',    { scaleX: 0 },          { scaleX: 1, duration: 1.2, ease: 'power3.inOut', transformOrigin: 'left' }, '-=0.2')
        .fromTo('.hero-word',    { opacity: 0, y: 80 },  { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08 }, '-=0.8')
        .fromTo('.hero-rule',    { scaleX: 0 },          { scaleX: 1, duration: 1, ease: 'power3.inOut', transformOrigin: 'left' }, '-=0.3')
        .fromTo('.hero-bottom',  { opacity: 0, y: 20 },  { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }, '-=0.5')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col bg-void overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-transparent to-void" />
      </div>

      {/* Corner labels */}
      <div className="relative flex justify-between items-start px-6 pt-32 pb-0">
        <span className="hero-corner font-mono text-xs text-snow/25 tracking-widest uppercase">Adiran Tech · Est. 2023</span>
        <span className="hero-corner font-mono text-xs text-snow/25 tracking-widest uppercase hidden md:block">Blue-Collar Digital Agency</span>
      </div>

      {/* Main content — pushed to bottom */}
      <div className="relative flex-1 flex flex-col justify-end px-6 pb-16 md:pb-20">
        {/* Thin decorative line */}
        <div className="hero-line h-px bg-snow/10 mb-8 origin-left" />

        {/* Availability tag */}
        <div className="hero-tag flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">Only 3 client spots open this quarter</span>
        </div>

        {/* Massive headline */}
        <div className="mb-10 overflow-hidden">
          <h1 className="leading-[0.88] font-hero text-[13vw] md:text-[11vw] lg:text-[10vw]">
            <span className="hero-word block text-snow">WE BUILD</span>
            <span className="hero-word block text-snow">WEBSITES</span>
            <span className="hero-word block">
              <span className="text-snow">THAT </span>
              <span className="text-cyan" style={{ fontStyle: 'italic' }}>CLOSE</span>
              <span className="text-snow"> JOBS.</span>
            </span>
          </h1>
        </div>

        {/* Horizontal rule */}
        <div className="hero-rule h-px bg-snow/15 mb-8 origin-left" />

        {/* Bottom info bar */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-6 md:gap-10 items-center">
          <p className="hero-bottom font-sans text-snow/50 text-base leading-relaxed max-w-xs">
            Custom websites and apps for HVAC, plumbing, landscaping, and every trade in between.
          </p>
          <div className="hero-bottom hidden md:block text-center">
            <div className="font-hero text-4xl text-snow tracking-tight">+180%</div>
            <div className="font-mono text-xs text-dim mt-1 uppercase tracking-widest">Avg Lead Increase</div>
          </div>
          <div className="hero-bottom hidden md:block text-center">
            <div className="font-hero text-4xl text-snow tracking-tight">14 Days</div>
            <div className="font-mono text-xs text-dim mt-1 uppercase tracking-widest">Avg Launch Time</div>
          </div>
          <a href="#contact"
            className="hero-bottom inline-flex items-center gap-2 bg-cyan text-void font-sans font-700 text-sm px-7 py-4 rounded-xl hover:bg-cyan/90 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-cyan/20 group whitespace-nowrap">
            Book a Free Strategy Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
