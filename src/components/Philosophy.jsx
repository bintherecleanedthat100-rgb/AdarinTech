import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.phil-label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' } }
      )
      const words = ref.current.querySelectorAll('.split-word')
      gsap.fromTo(words,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 70%' } }
      )
      gsap.to('.phil-bg', {
        yPercent: -20, ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const oldWords = ['0', 'leads', 'from', 'Google.', '4.2s', 'load.', 'Zero', 'bookings.']
  const newWords = ['23', 'booked', 'jobs', 'monthly.', '0.8s', 'load.', 'Fully', 'booked.']

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-void">
      <div className="phil-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.06 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="phil-label font-mono text-xs uppercase tracking-widest text-dim mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-dim" />
              Before Adiran Tech
            </p>
            <div className="flex flex-wrap gap-2">
              {oldWords.map((w, i) => (
                <span key={i} className="split-word font-display font-700 text-4xl md:text-5xl text-snow/25 leading-tight">{w}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="phil-label font-mono text-xs uppercase tracking-widest text-cyan mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan" />
              After Adiran Tech
            </p>
            <div className="flex flex-wrap gap-2">
              {newWords.map((w, i) => (
                <span key={i} className="split-word font-display font-700 text-4xl md:text-5xl text-snow leading-tight">{w}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-snow/10">
          <blockquote className="font-display font-700 text-2xl md:text-3xl text-snow/70 max-w-3xl leading-relaxed">
            "Blue-collar businesses are the backbone of America. They deserve digital tools that work as hard as they do."
          </blockquote>
          <p className="font-mono text-sm text-cyan mt-4">— Layne Mason, Founder & CEO of Adiran Tech</p>
        </div>
      </div>
    </section>
  )
}
