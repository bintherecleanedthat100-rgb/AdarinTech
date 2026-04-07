import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { Phone, Mail, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react'

export default function ContactPage() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', phone: '', trade: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-hero',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      )
      gsap.fromTo('.contact-form-block',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.3 }
      )
      gsap.fromTo('.contact-info-block',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={ref}>

      {/* Page Hero */}
      <section className="relative pt-40 pb-20 px-6 bg-void overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=2000&q=80"
            alt="" className="w-full h-full object-cover opacity-[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/80 to-void" />
        </div>
        <div className="relative max-w-6xl mx-auto contact-hero">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-5">Free Strategy Call</p>
          <h1 className="font-hero text-[12vw] md:text-8xl lg:text-9xl text-snow leading-none mb-8">
            LET'S<br /><span className="text-cyan">TALK.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-8 border-t border-snow/10 pt-8">
            <p className="font-sans text-snow/50 text-lg leading-relaxed max-w-xl">
              Book a free 20-minute call. We'll audit your current site, show you what's costing you jobs, and give you a clear plan. No pitch, no pressure.
            </p>
            <div className="flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-2xl px-5 py-3 flex-shrink-0">
              <Clock size={14} className="text-cyan" />
              <span className="font-mono text-xs text-cyan">We respond within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-void">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16">

          {/* Left: Info */}
          <div className="contact-info-block">
            {/* What happens next */}
            <div className="mb-12">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-6">What Happens Next</p>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'You fill out the form or call', desc: 'Takes about 2 minutes. Tell us your trade, your situation, and what you\'re looking for.' },
                  { num: '2', title: "Layne reviews your info", desc: 'We research your market and your current site before the call so we\'re ready to help immediately.' },
                  { num: '3', title: '20-minute strategy call', desc: "We walk through what's hurting you online, what a fix looks like, and what it costs. No obligation." },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-mono text-xs text-cyan font-700">{s.num}</span>
                    </div>
                    <div>
                      <p className="font-display font-700 text-snow mb-1">{s.title}</p>
                      <p className="font-sans text-snow/50 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact */}
            <div className="mb-12 space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-dim mb-4">Prefer to Reach Out Directly?</p>
              <a href="tel:+15139082475"
                className="flex items-center gap-3 bg-navy border border-snow/10 hover:border-cyan/30 rounded-2xl p-4 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-cyan" />
                </div>
                <div>
                  <p className="font-sans font-700 text-snow text-sm">(513) 908-2475</p>
                  <p className="font-mono text-xs text-dim">Call or text anytime</p>
                </div>
                <ArrowRight size={14} className="text-snow/30 ml-auto group-hover:text-cyan group-hover:translate-x-1 transition-all" />
              </a>
              <a href="mailto:bintherecleanedthat100@gmail.com"
                className="flex items-center gap-3 bg-navy border border-snow/10 hover:border-cyan/30 rounded-2xl p-4 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-cyan" />
                </div>
                <div>
                  <p className="font-sans font-700 text-snow text-sm">Send an email</p>
                  <p className="font-mono text-xs text-dim">bintherecleanedthat100@gmail.com</p>
                </div>
                <ArrowRight size={14} className="text-snow/30 ml-auto group-hover:text-cyan group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Trust testimonial */}
            <div className="bg-navy border border-snow/10 rounded-3xl p-6">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-cyan fill-cyan" />)}
              </div>
              <p className="font-display font-600 text-snow text-base leading-relaxed mb-4">
                "Reached out on a Tuesday, had a strategy call Wednesday morning. By Friday I had a quote and timeline. I've never worked with an agency that moved this fast."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs text-cyan font-700">J</span>
                </div>
                <div>
                  <p className="font-sans font-700 text-snow text-xs">Jason Briggs</p>
                  <p className="font-mono text-xs text-dim">Briggs Landworks · Nashville, TN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-block">
            {submitted ? (
              <div className="bg-navy border border-cyan/30 rounded-4xl p-12 text-center h-full flex flex-col items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                  <CheckCircle size={28} className="text-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-700 text-2xl text-snow mb-3">Message Received.</h3>
                  <p className="font-sans text-snow/50 text-base leading-relaxed max-w-sm mx-auto">
                    Layne will review your info and reach out within 24 hours to schedule the free strategy call.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  <span className="font-mono text-xs text-cyan">Response within 24 hours</span>
                </div>
                <Link to="/" className="font-mono text-xs text-snow/40 hover:text-cyan transition-colors mt-4">
                  ← Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-navy border border-snow/10 rounded-4xl p-10 space-y-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-2">Book a Free Call</p>
                  <h2 className="font-display font-700 text-2xl text-snow">Tell us about your business.</h2>
                </div>
                <div>
                  <label className="font-mono text-xs text-dim uppercase tracking-widest block mb-2">Your Name *</label>
                  <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Mike Hartley"
                    className="w-full bg-void border border-snow/10 focus:border-cyan/50 rounded-xl px-4 py-3.5 font-sans text-snow text-sm placeholder-snow/20 outline-none transition-colors" />
                </div>
                <div>
                  <label className="font-mono text-xs text-dim uppercase tracking-widest block mb-2">Phone or Email *</label>
                  <input required type="text" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    placeholder="(513) 555-0100 or email@company.com"
                    className="w-full bg-void border border-snow/10 focus:border-cyan/50 rounded-xl px-4 py-3.5 font-sans text-snow text-sm placeholder-snow/20 outline-none transition-colors" />
                </div>
                <div>
                  <label className="font-mono text-xs text-dim uppercase tracking-widest block mb-2">Your Trade *</label>
                  <select required value={form.trade} onChange={e => setForm({...form, trade: e.target.value})}
                    className="w-full bg-void border border-snow/10 focus:border-cyan/50 rounded-xl px-4 py-3.5 font-sans text-snow text-sm outline-none transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>Select your trade...</option>
                    {['HVAC & Heating', 'Plumbing', 'Landscaping', 'Electrical', 'Roofing', 'Pool Service', 'Construction', 'Other'].map(t => (
                      <option key={t} value={t} className="bg-navy">{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-mono text-xs text-dim uppercase tracking-widest block mb-2">What Are You Looking For?</label>
                  <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="New website, fix my current site, custom app, not sure yet..."
                    rows={3}
                    className="w-full bg-void border border-snow/10 focus:border-cyan/50 rounded-xl px-4 py-3.5 font-sans text-snow text-sm placeholder-snow/20 outline-none transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-cyan text-void font-sans font-700 text-sm py-4 rounded-xl hover:bg-cyan/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-cyan/20">
                  Send My Info — Let's Talk
                </button>
                <p className="font-mono text-xs text-dim text-center">No contracts · Free call · We respond within 24 hours</p>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  )
}
