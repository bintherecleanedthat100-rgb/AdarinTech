import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Flame, Leaf, Star } from 'lucide-react'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'

gsap.registerPlugin(ScrollTrigger)

const works = [
  {
    name: 'Gruter HVAC',
    industry: 'HVAC',
    result: 'Online bookings up 3x in 60 days',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    icon: Flame,
  },
  {
    name: 'KB Landworks',
    industry: 'Landscaping',
    result: '+40% inbound quote requests',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    icon: Leaf,
  },
]

const testimonials = [
  {
    name: 'Mike Hartley',
    biz: "Mike's HVAC & Cooling · Phoenix, AZ",
    quote: "Within 60 days our Google leads went from basically zero to booking 3–4 new jobs every week. The phone rings now.",
    result: '+4 jobs/week',
  },
  {
    name: 'Carlos Vega',
    biz: 'Vega Plumbing Co. · San Antonio, TX',
    quote: "The online booking form alone saves my office manager about 5 hours a week in phone calls. Best investment I made this year.",
    result: '5 hrs/wk saved',
  },
]

const processSteps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We audit your market, research competitors, and map out exactly what your site needs to win locally.' },
  { num: '02', title: 'Design & Build', desc: 'Custom site built mobile-first in 14 days. No templates. Engineered to convert visitors into calls.' },
  { num: '03', title: 'Launch & Grow', desc: 'We launch, track rankings, and keep improving. Your site gets better as your business grows.' },
]

export default function HomePage() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.home-problem',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.home-problem', start: 'top 85%' } }
      )
      gsap.fromTo('.home-work-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.home-work-grid', start: 'top 85%' } }
      )
      gsap.fromTo('.home-process-step',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.home-process-grid', start: 'top 85%' } }
      )
      gsap.fromTo('.home-testimonial',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.home-testimonials', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref}>
      <Hero />
      <TrustBar />

      {/* Problem Agitation */}
      <section className="py-20 px-6 bg-navy/30">
        <div className="max-w-4xl mx-auto home-problem text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-dim mb-6">Sound Familiar?</p>
          <h2 className="font-hero text-4xl md:text-5xl lg:text-6xl text-snow leading-tight mb-6">
            Your Competitor Has a Better Website.<br />
            <span className="text-cyan">You're Losing Jobs Because of It.</span>
          </h2>
          <p className="font-sans text-snow/50 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Most trade businesses run on referrals and Facebook. That works until a better-looking competitor shows up on Google. We fix that — with a site that works as hard as you do.
          </p>
          <Link to="/services"
            className="inline-flex items-center gap-2 border border-cyan/30 text-cyan font-sans font-600 text-sm px-6 py-3 rounded-xl hover:bg-cyan/10 transition-all duration-200">
            See What We Build
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-void">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">What We Build</p>
              <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight">
                Three Ways We<br /><span className="text-cyan">Grow Your Business.</span>
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-snow/40 hover:text-cyan text-sm font-sans transition-colors">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Business Websites', desc: 'Custom-built to rank on Google, load fast, and turn visitors into calls and booked jobs.' },
              { num: '02', title: 'Web Applications', desc: 'Scheduling systems, customer portals, and dispatch tools that save your team hours every week.' },
              { num: '03', title: 'Full Stack Infrastructure', desc: 'End-to-end digital ecosystems for growing operations — CRM integrations, field platforms, and more.' },
            ].map((s, i) => (
              <Link key={i} to="/services"
                className="group bg-navy border border-snow/5 hover:border-cyan/30 rounded-4xl p-8 transition-all duration-300">
                <p className="font-mono text-xs text-cyan tracking-widest mb-4">{s.num}</p>
                <h3 className="font-display font-700 text-xl text-snow mb-3 leading-tight">{s.title}</h3>
                <p className="font-sans text-snow/50 text-sm leading-relaxed mb-6">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-cyan text-xs font-mono group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Work Samples */}
      <section className="py-20 px-6 bg-navy/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">Our Work</p>
              <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight">
                Sites That<br /><span className="text-cyan">Actually Work.</span>
              </h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-snow/40 hover:text-cyan text-sm font-sans transition-colors">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="home-work-grid grid md:grid-cols-2 gap-6">
            {works.map((w, i) => (
              <div key={i} className="home-work-card group bg-navy rounded-4xl border border-snow/10 hover:border-cyan/30 transition-all duration-300 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <img src={w.img} alt={w.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                </div>
                <div className="p-7 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <w.icon size={13} className="text-cyan" />
                      <span className="font-mono text-xs text-cyan uppercase tracking-widest">{w.industry}</span>
                    </div>
                    <p className="font-display font-700 text-xl text-snow">{w.name}</p>
                    <p className="font-mono text-xs text-cyan/70 mt-1">{w.result}</p>
                  </div>
                  <Link to="/work"
                    className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center hover:bg-cyan hover:text-void text-cyan transition-all duration-200">
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 px-6 bg-void">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">How It Works</p>
              <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight">
                From Zero to Live<br /><span className="text-cyan">in 14 Days.</span>
              </h2>
            </div>
            <Link to="/process" className="inline-flex items-center gap-2 text-snow/40 hover:text-cyan text-sm font-sans transition-colors">
              See Full Process <ArrowRight size={14} />
            </Link>
          </div>
          <div className="home-process-grid grid md:grid-cols-3 gap-6">
            {processSteps.map((s, i) => (
              <div key={i} className="home-process-step border-t border-snow/10 pt-8">
                <p className="font-hero text-6xl text-snow/8 leading-none mb-4">{s.num}</p>
                <span className="font-mono text-xs text-cyan tracking-widest block mb-3">{s.num} —</span>
                <h3 className="font-display font-700 text-xl text-snow mb-3">{s.title}</h3>
                <p className="font-sans text-snow/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-navy/30">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">Client Results</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-12">
            Real Businesses.<br /><span className="text-cyan">Real Results.</span>
          </h2>
          <div className="home-testimonials grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="home-testimonial bg-navy border border-snow/10 rounded-4xl p-8">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-cyan fill-cyan" />)}
                </div>
                <blockquote className="font-display font-600 text-xl text-snow leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans font-700 text-snow text-sm">{t.name}</p>
                    <p className="font-mono text-xs text-dim">{t.biz}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                    <span className="font-mono text-xs text-cyan">{t.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-void">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-mono text-xs text-cyan tracking-widest uppercase">Only 3 spots left this quarter</span>
          </div>
          <h2 className="font-hero text-5xl md:text-6xl lg:text-7xl text-snow leading-none mb-6">
            READY TO GET<br /><span className="text-cyan">MORE CALLS?</span>
          </h2>
          <p className="font-sans text-snow/50 text-lg mb-10 leading-relaxed">
            Book a free 20-minute strategy call. We'll audit your current online presence and show you exactly what's costing you jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-cyan text-void font-sans font-700 text-sm px-8 py-4 rounded-xl hover:bg-cyan/90 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-cyan/20 group">
              Book a Free Strategy Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-snow/20 text-snow font-sans font-600 text-sm px-8 py-4 rounded-xl hover:border-cyan/40 hover:text-cyan transition-all duration-200">
              See Pricing
            </Link>
          </div>
          <p className="font-mono text-xs text-dim mt-6">No contracts. No BS. 90-day lead guarantee.</p>
        </div>
      </section>
    </div>
  )
}
