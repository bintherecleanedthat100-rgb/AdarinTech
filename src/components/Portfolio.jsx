import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Flame, Leaf } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: 'Gruter Heating & Air',
    industry: 'HVAC',
    location: 'Columbus, OH',
    desc: 'Family-owned HVAC company that needed to modernize their online presence and stop losing jobs to better-looking competitors. Built a trust-first site with online appointment booking.',
    result: 'Online appointments up 3x in 60 days',
    icon: Flame,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    url: '#contact',
    tags: ['Website', 'Online Booking', 'SEO'],
  },
  {
    name: 'KB Landworks LLC',
    industry: 'Land Clearing & Landscaping',
    location: 'Nashville, TN',
    desc: "Kyle's land clearing and landscaping company had great work but no way to show it off. We built a modern portfolio site that let his job photos do the selling for him.",
    result: '40% increase in inbound quote requests',
    icon: Leaf,
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    url: '#contact',
    tags: ['Website', 'Portfolio', 'Contact Form'],
  },
]

export default function Portfolio() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.portfolio-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
      gsap.fromTo('.portfolio-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.portfolio-grid', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="portfolio" className="py-28 px-6 bg-navy/30">
      <div className="max-w-6xl mx-auto">
        <div className="portfolio-header mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">Our Work</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-700 text-5xl md:text-6xl text-snow leading-tight">
              Sites That<br /><span className="text-cyan">Actually Work.</span>
            </h2>
            <p className="font-sans text-snow/50 max-w-sm text-base leading-relaxed">
              Every site we build is designed for one thing: turning visitors into booked jobs.
            </p>
          </div>
        </div>

        <div className="portfolio-grid grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="portfolio-card group bg-navy rounded-4xl border border-snow/10 hover:border-cyan/30 transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {p.tags.map((t, j) => (
                    <span key={j} className="bg-void/80 backdrop-blur-sm border border-snow/10 rounded-full font-mono text-xs text-snow/60 px-3 py-1">{t}</span>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p.icon size={14} className="text-cyan" />
                      <span className="font-mono text-xs text-cyan uppercase tracking-widest">{p.industry}</span>
                    </div>
                    <h3 className="font-display font-700 text-2xl text-snow">{p.name}</h3>
                    <p className="font-mono text-xs text-dim">{p.location}</p>
                  </div>
                  <a href={p.url}
                    className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center hover:bg-cyan hover:text-void text-cyan transition-all duration-200">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <p className="font-sans text-snow/50 text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="bg-void rounded-2xl px-4 py-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan flex-shrink-0" />
                  <span className="font-mono text-xs text-cyan">{p.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-sans text-snow/40 text-sm mb-4">Want to see more? We'll build a demo for your specific business — free, no commitment.</p>
          <a href="#contact"
            className="inline-flex items-center gap-2 border border-cyan/30 text-cyan font-sans font-600 text-sm px-6 py-3 rounded-xl hover:bg-cyan/10 transition-all duration-200">
            Request a Free Demo Site
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
