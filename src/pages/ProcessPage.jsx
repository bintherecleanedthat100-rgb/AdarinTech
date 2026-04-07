import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, CheckCircle, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    time: 'Day 1 — Free, 20 min',
    headline: 'We learn your business before we build anything.',
    desc: "A 20-minute call where we audit your current online presence, research your local competitors, and map out exactly what your site needs to win. You'll walk away with a clear picture of what's costing you jobs — whether you hire us or not.",
    details: ['Local competitor analysis', 'SEO keyword research', 'Site architecture planning', 'Free audit of your current site'],
    clientTime: '~20 minutes of your time',
    youGet: 'A free audit + a clear scope of work with a fixed price quote',
  },
  {
    num: '02',
    title: 'Design & Build',
    time: 'Days 2–12',
    headline: 'We build. You give feedback once.',
    desc: "We design and develop your custom site — no templates, no drag-and-drop builders. Built mobile-first, load-tested, and conversion-optimized from the first line of code. At the halfway point you'll see a working preview and give us one round of feedback.",
    details: ['Custom design — your brand, your style', 'Mobile-first development', 'Online booking & quote form setup', 'Speed & SEO optimization baked in'],
    clientTime: '~1 hour to review and give feedback',
    youGet: 'A working site preview with all your content, ready to go live',
  },
  {
    num: '03',
    title: 'Launch & Handoff',
    time: 'Day 13–14',
    headline: 'We go live and hand you the keys.',
    desc: "Once you approve the site, we launch it to your domain, set up Google Search Console, connect your Google Business profile, and walk you through everything. You'll know where your leads are coming from from day one.",
    details: ['Domain setup & SSL', 'Google Search Console connected', 'Google Business integration', 'Analytics dashboard walkthrough'],
    clientTime: '~30 minutes for the launch walkthrough',
    youGet: 'A live site with analytics tracking and a Google Business profile ready to rank',
  },
  {
    num: '04',
    title: 'Grow & Improve',
    time: 'Ongoing — included in your plan',
    headline: "We don't launch and disappear.",
    desc: "Every site includes ongoing support time. We monitor your Google rankings, track what pages visitors land on, and iterate. Most clients see consistent ranking improvement in months 2 and 3 as Google indexes and trusts the new site.",
    details: ['Monthly performance reports', 'Google ranking monitoring', 'Site updates & revisions', 'Priority 24-hour support'],
    clientTime: 'Zero — we handle this for you',
    youGet: 'A site that gets better over time with no extra work from you',
  },
]

const faqs = [
  { q: 'How long does the whole process take?', a: 'Most sites launch in 14 days or less from the strategy call. The main factor is how quickly you can provide photos and any specific copy you want — we handle everything else.' },
  { q: 'How much time do I need to put in?', a: "About 2 hours total: 20 minutes for the strategy call, 1 hour to review the site preview and give feedback, 30 minutes for the launch walkthrough. That's it — we do the heavy lifting." },
  { q: 'What if I want changes after launch?', a: "Every plan includes revision rounds and support time. We respond within 24 hours and fix issues fast. You're never stuck waiting." },
  { q: 'What happens after my support period ends?', a: 'We offer monthly maintenance plans to keep your site updated, backed up, and improving in search rankings. Or you can take over completely — we hand you all the files and access.' },
  { q: "What if I don't like the design?", a: "We share a working preview before launch and include a revision round. If it's not right, we fix it. We don't bill you for extra revisions if we missed the mark." },
]

export default function ProcessPage() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.proc-hero-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      )
      gsap.fromTo('.proc-step',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.proc-steps', start: 'top 80%' } }
      )
      gsap.fromTo('.proc-faq-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '.proc-faq', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref}>

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-void overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=2000&q=80"
            alt="" className="w-full h-full object-cover opacity-[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/80 to-void" />
        </div>
        <div className="relative max-w-6xl mx-auto proc-hero-content">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-5">No Surprises</p>
          <h1 className="font-hero text-[12vw] md:text-8xl lg:text-9xl text-snow leading-none mb-8">
            HERE'S EXACTLY<br /><span className="text-cyan">HOW IT WORKS.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-8 border-t border-snow/10 pt-8">
            <p className="font-sans text-snow/50 text-lg leading-relaxed max-w-xl">
              Most trade owners are nervous about hiring an agency because they don't know what they're getting into. This page fixes that. Every step, every timeline, every expectation — spelled out.
            </p>
            <div className="flex gap-2 flex-wrap flex-shrink-0">
              {['14-Day Launch', 'Fixed Price', 'No Contracts'].map((b, i) => (
                <span key={i} className="flex items-center gap-1.5 bg-cyan/10 border border-cyan/20 rounded-full font-mono text-xs text-cyan px-4 py-2">
                  <CheckCircle size={11} /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Bar */}
      <section className="py-6 px-6 bg-navy border-y border-snow/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-0 overflow-x-auto">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-0 flex-shrink-0">
                <div className="flex items-center gap-3 px-5 py-3">
                  <span className="font-mono text-xs text-cyan">{s.num}</span>
                  <span className="font-sans text-sm text-snow/60">{s.title}</span>
                  <span className="font-mono text-xs text-dim bg-void rounded-full px-3 py-0.5">{s.time}</span>
                </div>
                {i < steps.length - 1 && <span className="text-snow/15 font-mono">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step Details */}
      <section className="py-20 px-6 bg-void">
        <div className="max-w-6xl mx-auto proc-steps">
          {steps.map((s, i) => (
            <div key={i} className="proc-step border-t border-snow/10 py-16 grid md:grid-cols-[180px_1fr_280px] gap-8 md:gap-12 hover:border-snow/20 transition-colors duration-300">
              {/* Giant number */}
              <div className="font-hero text-[120px] md:text-[160px] leading-none text-snow/5 select-none -mt-6 flex-shrink-0">
                {s.num}
              </div>
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-xs text-cyan tracking-widest">{s.num}</span>
                  <span className="flex-1 h-px bg-snow/10" />
                  <span className="font-mono text-xs text-dim flex items-center gap-1.5">
                    <Clock size={11} /> {s.time}
                  </span>
                </div>
                <h2 className="font-display font-700 text-3xl md:text-4xl text-snow mb-3">{s.title}</h2>
                <p className="font-display font-600 text-lg text-cyan mb-5">{s.headline}</p>
                <p className="font-sans text-snow/50 text-base leading-relaxed mb-8 max-w-2xl">{s.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-navy border border-snow/10 rounded-2xl p-4">
                    <p className="font-mono text-xs text-dim mb-1">Your time required</p>
                    <p className="font-sans text-sm text-snow font-600">{s.clientTime}</p>
                  </div>
                  <div className="bg-cyan/5 border border-cyan/20 rounded-2xl p-4">
                    <p className="font-mono text-xs text-cyan mb-1">What you get</p>
                    <p className="font-sans text-sm text-snow leading-relaxed">{s.youGet}</p>
                  </div>
                </div>
              </div>
              {/* Detail list */}
              <div className="hidden md:block flex-shrink-0">
                <p className="font-mono text-xs text-dim uppercase tracking-widest mb-4">Includes</p>
                <ul className="space-y-3">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-snow/50">
                      <CheckCircle size={14} className="text-cyan mt-0.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="border-t border-snow/10" />
        </div>
      </section>

      {/* FAQ */}
      <section className="proc-faq py-20 px-6 bg-navy/30">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">Questions</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-12">
            What People Ask<br />Before They Hire Us.
          </h2>
          <div className="space-y-0">
            {faqs.map((f, i) => (
              <div key={i} className="proc-faq-item border-t border-snow/10 py-7">
                <p className="font-display font-700 text-lg text-snow mb-3">{f.q}</p>
                <p className="font-sans text-snow/50 text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
            <div className="border-t border-snow/10" />
          </div>
        </div>
      </section>

      {/* Testimonial about the experience */}
      <section className="py-20 px-6 bg-void">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-8">On Working With Us</p>
          <div className="bg-navy border border-snow/10 rounded-4xl p-10 md:p-14">
            <div className="flex gap-0.5 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-cyan fill-cyan" />)}
            </div>
            <blockquote className="font-display font-600 text-2xl md:text-3xl text-snow leading-relaxed mb-10">
              "Layne took the time to understand my business before building anything. The whole process took less than two weeks and I barely had to do anything — just show up for the calls and give some photos. Easiest thing I've done for my business all year."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                <span className="font-display font-700 text-cyan text-lg">C</span>
              </div>
              <div>
                <p className="font-sans font-700 text-snow">Carlos Vega</p>
                <p className="font-mono text-xs text-dim">Vega Plumbing Co. · San Antonio, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-navy/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-hero text-5xl md:text-6xl text-snow leading-none mb-6">
            START THE<br /><span className="text-cyan">PROCESS.</span>
          </h2>
          <p className="font-sans text-snow/50 text-lg mb-8 leading-relaxed">
            Step one is a free 20-minute call. No sales pitch — just an audit of your current site and a clear plan for what to build.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-cyan text-void font-sans font-700 text-sm px-8 py-4 rounded-xl hover:bg-cyan/90 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-cyan/20 group">
            Book the Free Strategy Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="font-mono text-xs text-dim mt-4">Free · No obligation · 20 minutes</p>
        </div>
      </section>

    </div>
  )
}
