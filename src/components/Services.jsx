import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, AppWindow, Code2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GlowingEffect } from '@/components/ui/glowing-effect'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Globe,
    tag: '01 / Websites',
    title: 'High-Converting Business Websites',
    desc: 'Not a template. A custom-built digital presence engineered to rank on Google, load in under a second, and turn visitors into booked jobs. Every page is a sales machine.',
    bullets: ['SEO-optimized from day one', 'Mobile-first, lightning fast', 'Online booking & quote forms', 'Google Business integration'],
    accent: 'cyan',
  },
  {
    icon: AppWindow,
    tag: '02 / Web Apps',
    title: 'Custom Business Apps & Portals',
    desc: 'Streamline your operations with custom-built web apps. Customer portals, scheduling systems, dispatch dashboards, and quote tools that save your team hours every week.',
    bullets: ['Job scheduling & dispatch', 'Customer self-service portals', 'Quote & invoice automation', 'Team management tools'],
    accent: 'pulse',
  },
  {
    icon: Code2,
    tag: '03 / Full Stack',
    title: 'End-to-End Digital Infrastructure',
    desc: 'Need something bigger? We architect complete digital ecosystems — from CRM integrations to proprietary field-service platforms built specifically for your trade business.',
    bullets: ['CRM & software integrations', 'API development', 'Field service platforms', 'Data dashboards & reporting'],
    accent: 'cyan',
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
      gsap.fromTo('.service-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.services-grid', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="services" className="py-28 px-6 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="service-header mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">Solutions</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-700 text-5xl md:text-6xl text-snow leading-tight">
              What We Build<br /><span className="text-cyan">For You.</span>
            </h2>
            <p className="font-sans text-snow/50 max-w-sm text-base leading-relaxed">
              Every product is designed for one outcome: more leads, more bookings, more revenue for your trade business.
            </p>
          </div>
        </div>

        <div className="services-grid grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className={`service-card group relative bg-navy rounded-4xl p-8 border border-snow/5 hover:border-${s.accent}/30 transition-all duration-300 flex flex-col`}>
              <GlowingEffect spread={40} glow={false} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              <div className={`w-12 h-12 rounded-2xl bg-${s.accent}/10 border border-${s.accent}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <s.icon size={22} className={`text-${s.accent}`} />
              </div>
              <p className={`font-mono text-xs text-${s.accent} uppercase tracking-widest mb-2`}>{s.tag}</p>
              <h3 className="font-display font-700 text-xl text-snow mb-4 leading-tight">{s.title}</h3>
              <p className="font-sans text-snow/50 text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-snow/60">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${s.accent} flex-shrink-0`} />
                    {b}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`flex items-center gap-2 text-${s.accent} font-sans font-600 text-sm group/btn mt-auto`}>
                Learn More
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
