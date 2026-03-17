import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone } from 'lucide-react'
import Cal, { getCalApi } from '@calcom/embed-react'

gsap.registerPlugin(ScrollTrigger)

const industries = ['HVAC', 'Plumbing', 'Landscaping', 'Electrical', 'Roofing', 'Construction', 'Pool Service', 'Other']

export default function Booking() {
  const ref = useRef(null)

  useEffect(() => {
    getCalApi({ namespace: '30min' }).then(cal => {
      cal('ui', {
        theme: 'dark',
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          dark: {
            'cal-brand': '#FF5C1A',
            'cal-bg': '#141010',
            'cal-bg-emphasis': '#1E1818',
            'cal-border': '#1E1818',
            'cal-text': '#F2EAE0',
            'cal-text-emphasis': '#F2EAE0',
            'cal-text-subtle': '#7A6860',
          }
        }
      })
    })
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.booking-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="contact" className="py-28 px-6 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="booking-content grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">Free Strategy Call</p>
            <h2 className="font-display font-700 text-5xl md:text-6xl text-snow leading-tight mb-6">
              Let's Build<br /><span className="text-cyan">Something</span><br />That Earns.
            </h2>
            <p className="font-sans text-snow/50 text-base leading-relaxed mb-10">
              Book a free 30-minute strategy call with Layne. No pitch, no pressure — just an honest assessment of where your digital presence is leaving money on the table.
            </p>
            <div className="space-y-4">
              <a href="mailto:adarintech@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={18} className="text-cyan" />
                </div>
                <div>
                  <div className="font-sans font-600 text-snow">adarintech@gmail.com</div>
                  <div className="font-mono text-xs text-dim">Reply within 2 hours</div>
                </div>
              </a>
              <a href="tel:+15139082475" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={18} className="text-void" />
                </div>
                <div>
                  <div className="font-sans font-700 text-snow text-lg">(513) 908-2475</div>
                  <div className="font-mono text-xs text-dim">Call or text anytime</div>
                </div>
              </a>
            </div>
            <div className="mt-10 bg-navy rounded-4xl p-6 border border-snow/5">
              <p className="font-mono text-xs text-cyan/60 uppercase tracking-widest mb-2">What to expect</p>
              <ul className="space-y-2">
                {[
                  "Audit of your current digital presence",
                  "Competitor gap analysis",
                  "Honest recommendation — even if it's not us",
                  "Clear scope & pricing if you want to proceed"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-snow/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-navy rounded-4xl border border-snow/5 overflow-hidden">
            <Cal
              namespace="30min"
              calLink="adiran-tech-laj4mf/30min"
              style={{ width: '100%', height: '100%', minHeight: '600px' }}
              config={{ layout: 'month_view', theme: 'dark' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
