import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Wrench, Flame, Leaf, Zap, Hammer, Droplets, Building2, HardHat } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  { icon: Flame,     label: 'HVAC' },
  { icon: Wrench,    label: 'Plumbing' },
  { icon: Leaf,      label: 'Landscaping' },
  { icon: Zap,       label: 'Electrical' },
  { icon: Hammer,    label: 'Roofing' },
  { icon: Droplets,  label: 'Pool Service' },
  { icon: Building2, label: 'Construction' },
  { icon: HardHat,   label: 'Contractors' },
]

const stats = [
  'Leads Up +180%',
  'Live in 14 Days',
  '30+ Sites Built',
  'Mobile-First',
  'Google-Optimized',
  '90-Day Guarantee',
]

// interleave industries + stats for a single track
const tickerItems = [
  ...industries.map(i => ({ type: 'industry', ...i })),
  ...stats.map(s => ({ type: 'stat', label: s })),
]
const doubled = [...tickerItems, ...tickerItems]

export default function TrustBar() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 95%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="border-y border-snow/5 bg-navy/30 py-5 overflow-hidden">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 flex-shrink-0">
            {item.type === 'industry' ? (
              <>
                <item.icon size={14} className="text-dim" />
                <span className="font-mono text-sm text-dim uppercase tracking-widest">{item.label}</span>
              </>
            ) : (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                <span className="font-mono text-sm text-cyan uppercase tracking-widest">{item.label}</span>
              </>
            )}
            <span className="text-snow/10 font-mono">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
