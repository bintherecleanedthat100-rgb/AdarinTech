import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: "We audit your current digital presence, research your competitors, and map out exactly what's needed to dominate your local market. No guessing — data-driven from day one.",
    details: ['Competitor analysis', 'SEO keyword research', 'Site architecture planning', 'Tech stack selection'],
  },
  {
    num: '02',
    title: 'Design & Build',
    desc: "We design and develop your custom website or app with performance baked in from the first line of code. Built mobile-first, optimized for conversions, tested on real devices.",
    details: ['Custom design — no templates', 'Mobile-first development', 'Online booking integration', 'Speed & SEO optimization'],
  },
  {
    num: '03',
    title: 'Launch & Grow',
    desc: "We don't just launch and disappear. We monitor performance, track rankings, and iterate. Your site gets better over time as your business grows.",
    details: ['Google Search Console setup', 'Analytics & heatmap tracking', 'Monthly performance reports', 'Ongoing support & updates'],
  },
]

export default function Process() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-header', start: 'top 85%' } }
      )
      gsap.fromTo('.process-row',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.process-steps', start: 'top 80%' } }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="process" className="py-28 px-6 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="process-header mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">How It Works</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-hero text-[10vw] md:text-7xl lg:text-8xl text-snow leading-none">
              FROM ZERO TO<br /><span className="text-cyan">LIVE.</span>
            </h2>
            <p className="font-sans text-snow/50 max-w-sm text-base leading-relaxed">
              Our proven 3-phase process gets your business online and generating leads — typically in 14 days or less.
            </p>
          </div>
        </div>

        <div className="process-steps">
          {steps.map((s, i) => (
            <div key={i} className="process-row border-t border-snow/10 py-12 md:py-16 grid md:grid-cols-[160px_1fr_auto] gap-6 md:gap-12 items-start relative overflow-hidden hover:border-snow/20 transition-colors duration-300">
              {/* Giant ghost number */}
              <div className="font-hero text-[100px] md:text-[140px] leading-none text-snow/6 select-none flex-shrink-0 -mt-4">
                {s.num}
              </div>
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-cyan tracking-widest">{s.num}</span>
                  <span className="flex-1 h-px bg-snow/10" />
                </div>
                <h3 className="font-display font-700 text-2xl md:text-3xl text-snow mb-4">{s.title}</h3>
                <p className="font-sans text-snow/50 text-base leading-relaxed max-w-lg">{s.desc}</p>
              </div>
              {/* Detail list */}
              <div className="hidden md:block flex-shrink-0 min-w-[200px]">
                <ul className="space-y-3">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-snow/40">
                      <span className="w-px h-4 bg-cyan/40 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* Bottom rule */}
          <div className="border-t border-snow/10" />
        </div>
      </div>
    </section>
  )
}
