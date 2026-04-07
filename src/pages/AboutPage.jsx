import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Star, Flame, Wrench, Leaf, Zap, Hammer } from 'lucide-react'
import ClientTestimonials from '@/components/ClientTestimonials'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { title: 'We show prices upfront.', desc: 'Every client knows what they\'re paying before we start. No surprises, no scope creep invoices.' },
  { title: 'We respond within 24 hours.', desc: 'You\'re a business owner. You don\'t have time to chase down your agency. We don\'t make you.' },
  { title: 'No contracts.', desc: 'You own everything we build. You can take your site anywhere, anytime. We earn your business every month.' },
  { title: 'Results or we rebuild free.', desc: '90-day guarantee. If your site doesn\'t generate more leads, we rebuild it at no cost. We\'ve never had to.' },
]

const trades = [
  { icon: Flame,   label: 'HVAC & Heating' },
  { icon: Wrench,  label: 'Plumbing' },
  { icon: Leaf,    label: 'Landscaping' },
  { icon: Zap,     label: 'Electrical' },
  { icon: Hammer,  label: 'Roofing' },
  { icon: Wrench,  label: 'Construction' },
]

export default function AboutPage() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-hero-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      )
      gsap.fromTo('.about-value',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.about-values', start: 'top 85%' } }
      )
      gsap.fromTo('.about-trade',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)', stagger: 0.07,
          scrollTrigger: { trigger: '.about-trades', start: 'top 90%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref}>

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-void overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=2000&q=80"
            alt="" className="w-full h-full object-cover opacity-[0.08]" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/80 to-void" />
        </div>
        <div className="relative max-w-6xl mx-auto about-hero-content">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-5">The Founder</p>
          <h1 className="font-hero text-[12vw] md:text-8xl lg:text-9xl text-snow leading-none mb-8">
            I'VE BEEN IN<br /><span className="text-cyan">YOUR BOOTS.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-8 border-t border-snow/10 pt-8">
            <p className="font-sans text-snow/50 text-lg leading-relaxed max-w-xl">
              Before building websites for trade businesses, I ran one. I know what it's like to be incredible at your craft but invisible online.
            </p>
            <div className="flex gap-6 flex-shrink-0">
              {[{ v: '10+', l: 'Years in Trades' }, { v: '30+', l: 'Sites Built' }, { v: '8', l: 'Trades Served' }].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="font-hero text-3xl text-cyan">{s.v}</p>
                  <p className="font-mono text-xs text-dim mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story + Photo */}
      <section className="py-24 px-6 bg-navy/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-4xl overflow-hidden bg-navy border border-snow/10">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Layne Mason, Founder of Adiran Tech"
                className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-navy border border-cyan/30 rounded-2xl px-5 py-4 shadow-xl shadow-cyan/10">
              <p className="font-display font-700 text-2xl text-cyan">Layne Mason</p>
              <p className="font-mono text-xs text-dim">Founder, Adiran Tech</p>
            </div>
          </div>

          {/* Story */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-5">The Origin</p>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-8">
              Built for the Trade<br /><span className="text-cyan">World. From the Inside.</span>
            </h2>
            <div className="space-y-5 mb-10">
              <p className="font-sans text-snow/60 text-base leading-relaxed">
                Before Adiran Tech, I ran a landscaping company for over a decade. I know what it's like to work a full day in the field and come home to a website you're embarrassed to hand out.
              </p>
              <p className="font-sans text-snow/60 text-base leading-relaxed">
                The best trade workers I met were incredible at their craft — but the tech side of running a business? That was a different story. Not because they weren't smart. Because nobody ever built it for them without charging $10,000 and disappearing for 6 months.
              </p>
              <p className="font-sans text-snow/60 text-base leading-relaxed">
                I started Adiran Tech with one goal: give blue-collar business owners the same digital tools that big companies have — at a price that makes sense, built by someone who actually understands how your business works.
              </p>
              <p className="font-sans text-snow/60 text-base leading-relaxed">
                Every site I build is the site I wish I had when I was running my company.
              </p>
            </div>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-cyan text-void font-sans font-700 text-sm px-6 py-3.5 rounded-xl hover:bg-cyan/90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-cyan/20 group">
              Work With Layne
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-6 bg-void">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">Who We Work With</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-4">
            1–20 Employee<br /><span className="text-cyan">Trade Businesses.</span>
          </h2>
          <p className="font-sans text-snow/50 text-base max-w-xl mb-10">
            We specifically built Adiran Tech for small-to-mid trade operations. Not enterprise. Not e-commerce. Trade businesses that need more calls and more booked jobs.
          </p>
          <div className="about-trades grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {trades.map((t, i) => (
              <div key={i} className="about-trade flex items-center gap-3 bg-navy border border-snow/5 rounded-2xl p-5">
                <t.icon size={18} className="text-cyan flex-shrink-0" />
                <span className="font-display font-700 text-snow text-base">{t.label}</span>
              </div>
            ))}
          </div>
          <div className="bg-navy/50 border border-snow/10 rounded-3xl p-6 flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-48">
              <p className="font-display font-700 text-snow text-base mb-1">Not in this list?</p>
              <p className="font-sans text-snow/50 text-sm">If you're a service-based trade business with a local market, we can help.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-cyan/30 text-cyan font-sans font-600 text-sm px-5 py-3 rounded-xl hover:bg-cyan/10 transition-all">
              Let's Talk <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-navy/30">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">How We Operate</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-12">
            Commitments We<br /><span className="text-cyan">Make to Every Client.</span>
          </h2>
          <div className="about-values grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div key={i} className="about-value flex items-start gap-4 bg-navy border border-snow/5 hover:border-cyan/20 rounded-3xl p-7 transition-all duration-200">
                <div className="w-8 h-8 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-cyan" />
                </div>
                <div>
                  <p className="font-display font-700 text-snow text-lg mb-2">{v.title}</p>
                  <p className="font-sans text-snow/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ClientTestimonials />

      {/* Final CTA */}
      <section className="py-24 px-6 bg-void">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-hero text-5xl md:text-6xl text-snow leading-none mb-6">
            LET'S BUILD<br /><span className="text-cyan">SOMETHING.</span>
          </h2>
          <p className="font-sans text-snow/50 text-lg mb-8 leading-relaxed">
            Book a free 20-minute strategy call with Layne. No agency speak, no sales pitch — just a straight conversation about your business and what it needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-cyan text-void font-sans font-700 text-sm px-8 py-4 rounded-xl hover:bg-cyan/90 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-cyan/20 group">
              Work With Layne
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/work"
              className="inline-flex items-center justify-center gap-2 border border-snow/20 text-snow font-sans font-600 text-sm px-8 py-4 rounded-xl hover:border-cyan/40 hover:text-cyan transition-all duration-200">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
