import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, X, Zap, Star } from 'lucide-react'
import Pricing from '@/components/Pricing'

gsap.registerPlugin(ScrollTrigger)

const comparison = [
  { feature: 'Custom design',         diy: false, cheap: false, adiran: true  },
  { feature: 'Mobile-first build',    diy: false, cheap: true,  adiran: true  },
  { feature: 'SEO from day 1',        diy: false, cheap: false, adiran: true  },
  { feature: 'Online booking setup',  diy: false, cheap: false, adiran: true  },
  { feature: 'Google Business setup', diy: false, cheap: true,  adiran: true  },
  { feature: 'Loads under 2 seconds', diy: false, cheap: false, adiran: true  },
  { feature: 'Support included',      diy: false, cheap: false, adiran: true  },
  { feature: '90-day guarantee',      diy: false, cheap: false, adiran: true  },
]

const faqs = [
  { q: "Why not just use Squarespace or Wix?", a: "Template builders are fine for a brochure. But they don't rank well on Google, load slowly on mobile, and look generic. When someone searches 'HVAC near me', you're competing against custom-built sites. A template puts you at the back of the line." },
  { q: 'Is this a monthly fee or a one-time cost?', a: "One-time build cost. Some clients add a monthly maintenance plan for ongoing SEO and updates, but that's optional. You own everything we build — no ongoing lock-in." },
  { q: 'What if I want to cancel or switch?', a: "We don't lock you into contracts. You own the site files, domain, and all content from day one. You can take it anywhere. We just hope our results keep you around." },
  { q: 'Do you offer payment plans?', a: "Yes — every tier can be split into 3 equal monthly payments at no extra cost. Launch is 3 × $499. Growth is 3 × $999. Just ask during the strategy call." },
  { q: "What's the 90-day guarantee exactly?", a: "If your new site doesn't generate more leads than your old one in 90 days, we rebuild it for free. No conditions, no fine print. We've never had to do it." },
  { q: "How is this cheaper than other agencies?", a: "We're a lean operation — no account managers, no overhead, no middlemen. Layne builds your site personally. That's how you get agency-quality results at a fraction of the price." },
]

export default function PricingPage() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.price-hero-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      )
      gsap.fromTo('.price-roi-item',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.price-roi', start: 'top 85%' } }
      )
      gsap.fromTo('.price-faq-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '.price-faq', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref}>

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-void overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=2000&q=80"
            alt="" className="w-full h-full object-cover opacity-[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/80 to-void" />
        </div>
        <div className="relative max-w-6xl mx-auto price-hero-content">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-5">Pricing</p>
          <h1 className="font-hero text-[12vw] md:text-8xl lg:text-9xl text-snow leading-none mb-8">
            HONEST PRICING.<br /><span className="text-cyan">NO SURPRISES.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-8 border-t border-snow/10 pt-8">
            <p className="font-sans text-snow/50 text-lg leading-relaxed max-w-xl">
              We show our prices because you deserve to know what you're getting into. Most agencies hide pricing because they're making it up as they go. We don't do that.
            </p>
            <div className="flex gap-2 flex-wrap flex-shrink-0">
              {['No Contracts', 'Payment Plans', '90-Day Guarantee'].map((b, i) => (
                <span key={i} className="flex items-center gap-1.5 border border-snow/20 rounded-full font-mono text-xs text-snow/60 px-4 py-2">
                  <Check size={11} className="text-cyan" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Framing */}
      <section className="price-roi py-16 px-6 bg-navy/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">Think About It This Way</p>
              <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-6">
                One New Client<br /><span className="text-cyan">Pays for the Site.</span>
              </h2>
              <p className="font-sans text-snow/50 text-base leading-relaxed">
                For most trade businesses, one new job generates $500–$2,000+ in revenue. Our sites are built to get you those jobs from Google — consistently, without running ads.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Launch package', cost: '$1,497', offset: '2–3 average jobs', detail: 'An HVAC tune-up at $300 × 5 new customers = paid off in month one.' },
                { label: 'Growth package', cost: '$2,997', offset: '3–6 average jobs', detail: 'A landscaping contract at $800 × 4 new clients = ROI in the first month.' },
                { label: 'Ongoing value', cost: '+180%', offset: 'avg lead increase', detail: "Based on client results in the first 90 days after launch. Your competitors don't have this." },
              ].map((r, i) => (
                <div key={i} className="price-roi-item flex items-start gap-4 bg-navy border border-snow/10 rounded-3xl p-5">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan mt-2" />
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-display font-700 text-snow">{r.label}</span>
                      <span className="font-mono text-xs text-cyan">{r.cost}</span>
                    </div>
                    <p className="font-mono text-xs text-cyan/70 mb-1">Offset by: {r.offset}</p>
                    <p className="font-sans text-xs text-snow/40 leading-relaxed">{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <Pricing />

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-void">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">How We Compare</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-12">
            DIY vs Cheap Freelancer<br /><span className="text-cyan">vs Adiran Tech.</span>
          </h2>
          <div className="rounded-4xl overflow-hidden border border-snow/10">
            {/* Header */}
            <div className="grid grid-cols-4 bg-navy border-b border-snow/10">
              <div className="p-5 col-span-1" />
              {['DIY / Wix', 'Cheap Freelancer', 'Adiran Tech'].map((h, i) => (
                <div key={i} className={`p-5 text-center border-l border-snow/10 ${i === 2 ? 'bg-cyan/5' : ''}`}>
                  <p className={`font-display font-700 text-sm ${i === 2 ? 'text-cyan' : 'text-snow/50'}`}>{h}</p>
                  {i === 2 && <div className="flex items-center justify-center gap-1 mt-1">
                    <Zap size={10} className="text-cyan" fill="currentColor" />
                    <span className="font-mono text-xs text-cyan">Recommended</span>
                  </div>}
                </div>
              ))}
            </div>
            {comparison.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 border-b border-snow/5 last:border-b-0 ${i % 2 === 0 ? 'bg-navy/30' : ''}`}>
                <div className="p-4 pl-5">
                  <p className="font-sans text-sm text-snow/70">{row.feature}</p>
                </div>
                {[row.diy, row.cheap, row.adiran].map((val, j) => (
                  <div key={j} className={`p-4 flex items-center justify-center border-l border-snow/5 ${j === 2 ? 'bg-cyan/5' : ''}`}>
                    {val
                      ? <Check size={16} className="text-cyan" />
                      : <X size={16} className="text-snow/20" />
                    }
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="price-faq py-20 px-6 bg-navy/30">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-3">Common Questions</p>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-snow leading-tight mb-12">
            Pricing Questions<br />Answered Upfront.
          </h2>
          <div className="space-y-0">
            {faqs.map((f, i) => (
              <div key={i} className="price-faq-item border-t border-snow/10 py-7">
                <p className="font-display font-700 text-lg text-snow mb-3">{f.q}</p>
                <p className="font-sans text-snow/50 text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
            <div className="border-t border-snow/10" />
          </div>
        </div>
      </section>

      {/* Social Proof at CTA */}
      <section className="py-20 px-6 bg-void">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy border border-snow/10 rounded-4xl p-8 mb-10">
            <div className="flex gap-0.5 mb-5">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-cyan fill-cyan" />)}
            </div>
            <blockquote className="font-display font-600 text-xl md:text-2xl text-snow leading-relaxed mb-6">
              "The best part is I don't have to think about it. Layne set everything up, got us on Google, and I just get the leads. Six months in and we're booked 3 weeks out — first time in 12 years in business."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                <span className="font-display font-700 text-cyan">D</span>
              </div>
              <div>
                <p className="font-sans font-700 text-snow text-sm">Dave Nunez</p>
                <p className="font-mono text-xs text-dim">Nunez Pool & Spa · Tampa, FL</p>
              </div>
              <div className="ml-auto flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                <span className="font-mono text-xs text-cyan">Booked 3 weeks out</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="font-hero text-5xl md:text-6xl text-snow leading-none mb-6">
              READY TO<br /><span className="text-cyan">GET STARTED?</span>
            </h2>
            <p className="font-sans text-snow/50 text-lg mb-8">
              Book a free 20-minute call. We'll scope your project, answer every question, and give you a fixed price quote on the spot.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-cyan text-void font-sans font-700 text-sm px-8 py-4 rounded-xl hover:bg-cyan/90 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-cyan/20 group">
              Book a Free Strategy Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="font-mono text-xs text-dim mt-4">No contracts · Payment plans available · 90-day guarantee</p>
          </div>
        </div>
      </section>

    </div>
  )
}
