import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: 'Will I own my website once it\'s built?',
    a: 'Yes — 100%. You own the code, the content, and the domain. If you ever decide to move on, we\'ll hand you a full zip of your site, no questions asked. You\'re never locked in.',
  },
  {
    q: 'How long does it take to build?',
    a: 'Most sites are live within 14 days of our strategy call. Complex web apps or multi-page builds can take 3–6 weeks. We\'ll give you a firm timeline before any money changes hands.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. Both the Launch and Growth packages can be split into 3 equal monthly payments at no extra cost. Enterprise projects are scoped individually with flexible billing. We never want budget to be the reason a good business stays offline.',
  },
  {
    q: 'What if I\'m not happy with the result?',
    a: 'We offer unlimited revisions during the build phase — we don\'t stop until it\'s right. If your new site doesn\'t measurably increase your leads within 90 days, we\'ll rebuild it for free. No fine print.',
  },
  {
    q: 'Can I update my site myself, or do I have to call you every time?',
    a: 'Depends on the package. Growth and Enterprise clients get a simple admin interface for basic updates (hours, services, photos). For anything structural, just shoot us a message — small changes are included in your monthly support.',
  },
  {
    q: 'Do you actually understand my trade?',
    a: 'Yes. Layne ran a landscaping company for over 10 years. The team has built for HVAC, plumbing, electrical, roofing, pool service, construction, and landscaping. We\'re not a generic agency — we know the difference between a service call and a maintenance contract.',
  },
  {
    q: 'What do I need to get started?',
    a: 'Nothing technical. Just book a free strategy call. We\'ll ask about your business, your goals, and what you don\'t like about your current site. We handle the rest — design, copy, hosting, domain setup, Google integration. Everything.',
  },
  {
    q: 'What happens if I want to cancel monthly hosting?',
    a: 'You can cancel at any time with 30 days notice. We\'ll give you a full export of your site so you can host it anywhere else. No early termination fees, ever.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
      gsap.fromTo('.faq-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: '.faq-list', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="faq" className="py-28 px-6 bg-void">
      <div className="max-w-4xl mx-auto">
        <div className="faq-header text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">FAQ</p>
          <h2 className="font-display font-700 text-5xl md:text-6xl text-snow leading-tight mb-4">
            Straight Answers.<br /><span className="text-cyan">No Runaround.</span>
          </h2>
          <p className="font-sans text-snow/50 max-w-xl mx-auto">
            The questions every trade business owner asks before working with us.
          </p>
        </div>

        {/* Guarantee banner */}
        <div className="bg-cyan/5 border border-cyan/20 rounded-3xl p-6 mb-10 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={22} className="text-cyan" />
          </div>
          <div>
            <div className="font-display font-700 text-snow text-lg mb-1">90-Day Lead Guarantee</div>
            <p className="font-sans text-snow/60 text-sm leading-relaxed">
              If your new site doesn't generate measurably more leads within 90 days of launch, we rebuild it for free. No conditions, no fine print. We stand behind every site we ship.
            </p>
          </div>
        </div>

        <div className="faq-list space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="faq-item bg-navy border border-snow/10 rounded-3xl overflow-hidden hover:border-snow/20 transition-all duration-200">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                <span className="font-display font-700 text-base text-snow">{f.q}</span>
                <ChevronDown size={18} className={`text-cyan flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="font-sans text-snow/60 text-sm leading-relaxed border-t border-snow/5 pt-4">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
