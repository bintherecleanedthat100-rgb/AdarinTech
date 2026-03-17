import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '10+', label: 'Years in the Trades' },
  { value: '30+', label: 'Sites Built' },
  { value: '8', label: 'Industries Served' },
  { value: '100%', label: 'Client Retention' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
      gsap.fromTo('.about-stat',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-stats', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="about" className="py-28 px-6 bg-navy/30">
      <div className="max-w-6xl mx-auto">
        <div className="about-content grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-4xl overflow-hidden bg-navy border border-snow/10">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Layne Mason, Founder of Adiran Tech"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-navy border border-cyan/30 rounded-2xl px-5 py-4 shadow-xl shadow-cyan/10">
              <div className="font-display font-700 text-2xl text-cyan">10+</div>
              <div className="font-mono text-xs text-dim">Years in the trades</div>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">The Founder</p>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-6">
              I've Been in<br />Your Boots.
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-snow/60 text-base leading-relaxed">
                Before Adiran Tech, I ran a landscaping company for over a decade. I know what it's like to work a full day in the field and then come home to a website you're embarrassed to hand out.
              </p>
              <p className="font-sans text-snow/60 text-base leading-relaxed">
                The best trade workers I met were incredible at their craft — but the tech side of running a business? That was a different story. Not because they weren't smart. Because nobody ever built it for them without charging agency prices.
              </p>
              <p className="font-sans text-snow/60 text-base leading-relaxed">
                I started Adiran Tech with one goal: give blue-collar business owners the same quality digital tools that big companies have — at a price that doesn't wipe out a month of profit.
              </p>
            </div>
            <div className="about-stats grid grid-cols-2 gap-4 mb-8">
              {stats.map((s, i) => (
                <div key={i} className="about-stat bg-navy rounded-2xl p-4 border border-snow/10">
                  <div className="font-display font-700 text-3xl text-cyan">{s.value}</div>
                  <div className="font-mono text-xs text-dim mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-cyan text-void font-sans font-700 text-sm px-6 py-3.5 rounded-xl hover:bg-cyan/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-cyan/20 group">
              Work With Layne
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
