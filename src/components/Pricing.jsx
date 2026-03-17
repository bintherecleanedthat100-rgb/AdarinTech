import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  {
    name: 'Launch',
    price: '$1,497',
    period: 'one-time or 3 × $499',
    desc: 'Perfect for small trade businesses ready to get online professionally.',
    features: [
      'Custom 5-page website',
      'Mobile-first design',
      'Online contact & quote form',
      'Google Business integration',
      'Basic SEO setup',
      '3 months support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$2,997',
    period: 'one-time or 3 × $999',
    desc: 'For established businesses serious about dominating their local market.',
    features: [
      'Custom 10-page website',
      'Online booking system',
      'Reviews & testimonials section',
      'Advanced SEO & content strategy',
      'Google Ads landing page',
      'Performance dashboard',
      '6 months support',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'project',
    desc: 'Full digital infrastructure for multi-location or high-growth operations.',
    features: [
      'Everything in Growth',
      'Custom web application',
      'Customer portal & scheduling',
      'CRM integration',
      'Team management tools',
      'Dedicated account manager',
      '12 months support',
    ],
    cta: "Let's Talk",
    featured: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
      gsap.fromTo('.pricing-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.pricing-grid', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="pricing" className="py-28 px-6 bg-navy/30">
      <div className="max-w-6xl mx-auto">
        <div className="pricing-header text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">Pricing</p>
          <h2 className="font-display font-700 text-5xl md:text-6xl text-snow leading-tight mb-4">
            Simple, Transparent<br /><span className="text-cyan">Pricing.</span>
          </h2>
          <p className="font-sans text-snow/50 max-w-xl mx-auto">
            No monthly fees. No hidden costs. You own everything we build.
          </p>
          <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-mono text-xs text-cyan">Only 3 spots remaining this quarter</span>
          </div>
        </div>

        <div className="pricing-grid grid md:grid-cols-3 gap-6 items-start" id="pricing">
          {tiers.map((t, i) => (
            <div key={i}
              className={`pricing-card rounded-4xl p-8 border transition-all duration-300 relative ${
                t.featured
                  ? 'bg-cyan/5 border-cyan/40 shadow-2xl shadow-cyan/10 md:scale-105'
                  : 'bg-navy border-snow/10 hover:border-snow/20'
              }`}>
              {t.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan text-void font-mono font-700 text-xs px-4 py-1 rounded-full flex items-center gap-1.5">
                  <Zap size={10} fill="currentColor" /> Most Popular
                </div>
              )}
              <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-2">{t.name}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display font-700 text-4xl text-snow">{t.price}</span>
                <span className="font-mono text-xs text-dim">/ {t.period}</span>
              </div>
              <p className="font-sans text-sm text-snow/50 mb-6 leading-relaxed">{t.desc}</p>
              <ul className="space-y-3 mb-8">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-snow/70">
                    <Check size={15} className="text-cyan mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`block w-full text-center py-3.5 rounded-2xl font-sans font-700 text-sm transition-all duration-200 active:scale-[0.97] ${
                  t.featured
                    ? 'bg-cyan text-void hover:bg-cyan/90 shadow-lg shadow-cyan/20'
                    : 'border border-snow/20 text-snow hover:border-cyan/40 hover:text-cyan'
                }`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-10 bg-cyan/5 border border-cyan/20 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
            <Check size={22} className="text-cyan" />
          </div>
          <div>
            <p className="font-display font-700 text-snow text-base">90-Day Lead Guarantee</p>
            <p className="font-sans text-snow/50 text-sm mt-1">If your new site doesn't generate more leads in 90 days, we rebuild it for free. No conditions, no fine print.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
