import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Flame, Leaf, Hammer, Wrench, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: 'Gruter Heating & Air',
    industry: 'HVAC',
    trade: 'hvac',
    location: 'Columbus, OH',
    problem: 'Losing local jobs to better-looking competitors. No online booking, no Google presence.',
    approach: 'Trust-first site with Google Business integration and a streamlined online booking flow.',
    result: 'Online appointments up 3x in 60 days',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    icon: Flame,
    tags: ['Website', 'Online Booking', 'SEO'],
  },
  {
    name: 'KB Landworks LLC',
    industry: 'Landscaping',
    trade: 'landscaping',
    location: 'Nashville, TN',
    problem: "Incredible work, no way to show it off. Operating on Facebook and a $500 Wix site.",
    approach: 'Portfolio-first site built to let job photos do the selling, with a quote request form.',
    result: '+40% inbound quote requests',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    icon: Leaf,
    tags: ['Website', 'Portfolio', 'Contact Form'],
  },
  {
    name: 'Ridgeline Roofing',
    industry: 'Roofing',
    trade: 'roofing',
    location: 'Denver, CO',
    problem: 'Invisible on Google during storm season when search volume spikes.',
    approach: 'SEO-heavy site targeting storm-season search terms, with urgency CTAs and quick quote form.',
    result: '3x estimate requests in first month',
    img: 'https://images.unsplash.com/photo-1632889345808-f8a8b0b1b8a8?w=800&q=80',
    icon: Hammer,
    tags: ['Website', 'Local SEO', 'Lead Gen'],
  },
  {
    name: 'Kowalski Electric',
    industry: 'Electrical',
    trade: 'electrical',
    location: 'Columbus, OH',
    problem: "Couldn't compete with larger electrical contractors for commercial jobs.",
    approach: 'Professional, credibility-first design with licensing and certifications front and center.',
    result: '3 commercial bids won via site',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    icon: Wrench,
    tags: ['Website', 'Trust Signals', 'Commercial'],
  },
]

const filters = ['All', 'HVAC', 'Landscaping', 'Roofing', 'Electrical']

export default function WorkPage() {
  const ref = useRef(null)
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.industry === active)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.work-hero-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      )
      gsap.fromTo('.work-stat',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 0.4 }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    gsap.fromTo('.work-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }
    )
  }, [active])

  return (
    <div ref={ref}>

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-void overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=80"
            alt="" className="w-full h-full object-cover opacity-[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/80 to-void" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="work-hero-content">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-5">Our Work</p>
            <h1 className="font-hero text-[12vw] md:text-8xl lg:text-9xl text-snow leading-none mb-8">
              RESULTS<br /><span className="text-cyan">WE'VE BUILT.</span>
            </h1>
            <p className="font-sans text-snow/50 text-lg leading-relaxed max-w-xl mb-10">
              Every project here is a real trade business that hired us because they were losing jobs. Here's what happened after we built their site.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 border-t border-snow/10 pt-8">
            {[
              { v: '30+', l: 'Sites Built' },
              { v: '+180%', l: 'Avg Lead Increase' },
              { v: '14 Days', l: 'Avg Launch' },
              { v: '100%', l: 'Client Retention' },
            ].map((s, i) => (
              <div key={i} className="work-stat">
                <p className="font-hero text-3xl md:text-4xl text-cyan">{s.v}</p>
                <p className="font-mono text-xs text-dim mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="py-20 px-6 bg-navy/30">
        <div className="max-w-6xl mx-auto">
          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-12">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)}
                className={`font-mono text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl border transition-all duration-200 ${
                  active === f
                    ? 'bg-cyan text-void border-cyan'
                    : 'border-snow/15 text-snow/50 hover:border-cyan/30 hover:text-cyan'
                }`}>
                {f}
              </button>
            ))}
          </div>

          {/* Project cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((p, i) => (
              <div key={i} className="work-card bg-navy rounded-4xl border border-snow/10 hover:border-cyan/30 transition-all duration-300 overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {p.tags.map((t, j) => (
                      <span key={j} className="bg-void/80 backdrop-blur-sm border border-snow/10 rounded-full font-mono text-xs text-snow/60 px-3 py-1">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p.icon size={13} className="text-cyan" />
                        <span className="font-mono text-xs text-cyan uppercase tracking-widest">{p.industry} · {p.location}</span>
                      </div>
                      <h3 className="font-display font-700 text-2xl text-snow">{p.name}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  {/* Mini case study */}
                  <div className="space-y-3 mb-6">
                    <div className="flex gap-3 text-sm">
                      <span className="font-mono text-xs text-dim w-20 flex-shrink-0 pt-0.5">Problem</span>
                      <span className="font-sans text-snow/60 leading-relaxed">{p.problem}</span>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <span className="font-mono text-xs text-dim w-20 flex-shrink-0 pt-0.5">Approach</span>
                      <span className="font-sans text-snow/60 leading-relaxed">{p.approach}</span>
                    </div>
                  </div>
                  <div className="bg-void rounded-2xl px-4 py-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan flex-shrink-0" />
                    <span className="font-mono text-xs text-cyan">{p.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 px-6 bg-void">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-8">What They Say</p>
          <div className="bg-navy border border-cyan/20 rounded-4xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 font-hero text-[200px] leading-none text-cyan/3 select-none pointer-events-none">"</div>
            <div className="flex gap-0.5 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-cyan fill-cyan" />)}
            </div>
            <blockquote className="font-display font-600 text-2xl md:text-3xl text-snow leading-relaxed mb-10">
              "I was skeptical — I've been burned by web agencies before. But Layne built us a site that actually looks like a real company. Within 60 days our Google leads went from basically zero to booking 3–4 new jobs every week. The phone rings now."
            </blockquote>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-700 text-cyan text-lg">M</span>
                </div>
                <div>
                  <p className="font-sans font-700 text-snow">Mike Hartley</p>
                  <p className="font-mono text-xs text-dim">Mike's HVAC & Cooling · Phoenix, AZ</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <span className="font-mono text-xs text-cyan">+4 jobs/week from Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-navy/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-hero text-5xl md:text-6xl text-snow leading-none mb-6">
            WANT RESULTS<br /><span className="text-cyan">LIKE THESE?</span>
          </h2>
          <p className="font-sans text-snow/50 text-lg mb-8 leading-relaxed">
            We'll build a free demo site for your business — no commitment, no credit card. Just a real preview of what your digital presence could look like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-cyan text-void font-sans font-700 text-sm px-8 py-4 rounded-xl hover:bg-cyan/90 transition-all duration-200 shadow-xl shadow-cyan/20 group">
              Request a Free Demo Site
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-snow/20 text-snow font-sans font-600 text-sm px-8 py-4 rounded-xl hover:border-cyan/40 hover:text-cyan transition-all duration-200">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
