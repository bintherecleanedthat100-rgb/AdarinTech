import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, Flame, Wrench, Leaf, Zap, Hammer, Star } from 'lucide-react'
import Services from '@/components/Services'

gsap.registerPlugin(ScrollTrigger)

const trades = [
  { icon: Flame,   label: 'HVAC & Heating',    desc: 'Seasonal demand is real. Your site needs to capture it 24/7.' },
  { icon: Wrench,  label: 'Plumbing',           desc: 'Emergency searches happen at 2am. You need to rank when it counts.' },
  { icon: Leaf,    label: 'Landscaping',        desc: 'Your work is visual. Let your portfolio do the selling.' },
  { icon: Zap,     label: 'Electrical',         desc: 'Trust is everything. Your site should look as professional as your work.' },
  { icon: Hammer,  label: 'Roofing',            desc: 'Storm season brings search volume. Be the first result they find.' },
  { icon: Wrench,  label: 'General Contractors',desc: 'Bigger jobs need a bigger digital presence. We build for scale.' },
]

const testimonials = [
  {
    name: 'Steve Kowalski',
    biz: 'Kowalski Electric · Columbus, OH',
    quote: "We've won 3 commercial bids this quarter where the client specifically mentioned our website. That never happened with our old site.",
    result: '3 bids won via site',
    industry: 'Electrical',
  },
  {
    name: 'Jason Briggs',
    biz: 'Briggs Landworks · Nashville, TN',
    quote: "Adiran Tech built us something we're actually proud to send customers to. New residential jobs are up about 40% since launch.",
    result: '+40% new jobs',
    industry: 'Landscaping',
  },
]

const faqs = [
  { q: 'How long does it take to build my site?', a: 'Most sites launch in 14 days or less. The timeline depends on how quickly you can provide photos and content — we handle everything else.' },
  { q: 'What if I already have a website?', a: "We'll audit what you have, identify what's holding you back, and build something that actually works. Most clients see dramatic improvement within 60 days of switching." },
  { q: 'Do you work with my specific trade?', a: "If you're in HVAC, plumbing, landscaping, electrical, roofing, pool service, or construction — yes. We've built for all of them." },
  { q: 'Will my site rank on Google?', a: 'Every site we build is SEO-optimized from day one. We set up Google Business integration, local keywords, and proper site structure. Most clients hit page 1 for their primary keywords within 90 days.' },
  { q: 'What happens if I need changes after launch?', a: 'Every plan includes support time for revisions. We respond within 24 hours and fix issues fast. You\'re never left hanging.' },
]

export default function ServicesPage() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.svc-hero-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      )
      gsap.fromTo('.svc-trade-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '.svc-trades-grid', start: 'top 85%' } }
      )
      gsap.fromTo('.svc-faq-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '.svc-faq', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref}>

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-void overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=2000&q=80"
            alt="" className="w-full h-full object-cover opacity-[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/80 to-void" />
        </div>
        <div className="relative max-w-6xl mx-auto svc-hero-content">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-5">Solutions</p>
          <h1 className="font-hero text-[12vw] md:text-8xl lg:text-9xl text-snow leading-none mb-8">
            WHAT WE<br /><span className="text-cyan">BUILD.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-snow/10 pt-8">
            <p className="font-sans text-snow/50 text-lg leading-relaxed max-w-xl">
              Custom websites and apps for trade businesses. Every product is engineered for one outcome — more leads, more bookings, more revenue.
            </p>
            <div className="flex gap-8 flex-shrink-0">
              <div className="text-center">
                <p className="font-hero text-4xl text-snow">30+</p>
                <p className="font-mono text-xs text-dim mt-1">Sites Built</p>
              </div>
              <div className="text-center">
                <p className="font-hero text-4xl text-snow">8</p>
                <p className="font-mono text-xs text-dim mt-1">Trades Served</p>
              </div>
              <div className="text-center">
                <p className="font-hero text-4xl text-cyan">14</p>
                <p className="font-mono text-xs text-dim mt-1">Day Launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Who This Is For */}
      <section className="py-24 px-6 bg-void">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">Who We Serve</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-4">
            Built Specifically<br /><span className="text-cyan">For Your Trade.</span>
          </h2>
          <p className="font-sans text-snow/50 text-base max-w-xl mb-14">
            We don't build generic websites. Every site is tailored to the specific way your trade business gets and wins jobs.
          </p>
          <div className="svc-trades-grid grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {trades.map((t, i) => (
              <div key={i} className="svc-trade-card flex items-start gap-4 bg-navy border border-snow/5 hover:border-cyan/20 rounded-3xl p-6 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                  <t.icon size={18} className="text-cyan" />
                </div>
                <div>
                  <p className="font-display font-700 text-snow text-base mb-1">{t.label}</p>
                  <p className="font-sans text-snow/40 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 bg-navy/30">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">Proof It Works</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-12">
            Trade Owners Who<br /><span className="text-cyan">Made the Switch.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-navy border border-snow/10 rounded-4xl p-8">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} className="text-cyan fill-cyan" />)}
                </div>
                <blockquote className="font-display font-600 text-xl text-snow leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans font-700 text-snow text-sm">{t.name}</p>
                    <p className="font-mono text-xs text-dim">{t.biz}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                    <span className="font-mono text-xs text-cyan">{t.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-24 px-6 bg-void">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">The Process</p>
              <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight">
                Up and Running<br /><span className="text-cyan">in 14 Days.</span>
              </h2>
            </div>
            <Link to="/process" className="inline-flex items-center gap-2 border border-snow/20 text-snow/60 hover:text-cyan hover:border-cyan/30 font-sans text-sm px-6 py-3 rounded-xl transition-all duration-200 flex-shrink-0">
              See the Full Process <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-snow/10 rounded-4xl overflow-hidden">
            {[
              { num: '01', title: 'Strategy Call', time: 'Day 1', desc: 'Free 20-minute call. We audit your market and scope the project.' },
              { num: '02', title: 'Build', time: 'Days 2–12', desc: 'We build your site. You review a working preview before anything goes live.' },
              { num: '03', title: 'Launch', time: 'Day 14', desc: 'Site goes live. We monitor performance and track your first leads.' },
            ].map((s, i) => (
              <div key={i} className={`p-8 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-snow/10' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-cyan tracking-widest">{s.num}</span>
                  <span className="font-mono text-xs text-dim bg-navy rounded-full px-3 py-1">{s.time}</span>
                </div>
                <h3 className="font-display font-700 text-xl text-snow mb-3">{s.title}</h3>
                <p className="font-sans text-snow/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-faq py-24 px-6 bg-navy/30">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">FAQ</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-12">
            Common Questions.
          </h2>
          <div className="space-y-0">
            {faqs.map((f, i) => (
              <div key={i} className="svc-faq-item border-t border-snow/10 py-7">
                <p className="font-display font-700 text-lg text-snow mb-3">{f.q}</p>
                <p className="font-sans text-snow/50 text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
            <div className="border-t border-snow/10" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-void">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-hero text-5xl md:text-6xl text-snow leading-none mb-6">
            READY TO GET<br /><span className="text-cyan">STARTED?</span>
          </h2>
          <p className="font-sans text-snow/50 text-lg mb-8 leading-relaxed">
            Book a free strategy call. We'll show you exactly what your site needs and give you a quote on the spot. No obligation.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-cyan text-void font-sans font-700 text-sm px-8 py-4 rounded-xl hover:bg-cyan/90 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-cyan/20 group">
            Book a Free Strategy Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="font-mono text-xs text-dim mt-4">No contracts · 90-day lead guarantee · Results or we rebuild free</p>
        </div>
      </section>

    </div>
  )
}
