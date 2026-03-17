import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Activity, Terminal, CalendarDays } from 'lucide-react'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { getCalApi } from '@calcom/embed-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { label: 'Site Speed Score', value: '99', unit: '/100', trend: '▲ Top 1% of sites' },
  { label: 'Lead Increase', value: '+340', unit: '%', trend: '▲ Avg. after launch' },
  { label: 'Mobile Conversions', value: '4.2', unit: 'x', trend: '▲ vs. old site' },
  { label: 'Page Load Time', value: '0.8', unit: 's', trend: '▼ vs. 4.2s avg' },
]

function PerformanceDashboard() {
  const [cards, setCards] = useState(stats)
  useEffect(() => {
    const t = setInterval(() => {
      setCards(prev => { const next = [...prev]; next.push(next.shift()); return next })
    }, 2500)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Activity size={14} className="text-cyan" />
        <span className="font-mono text-xs text-cyan uppercase tracking-widest">Performance Dashboard</span>
        <span className="ml-auto w-2 h-2 rounded-full bg-cyan animate-pulse" />
      </div>
      <div className="flex-1 relative min-h-48">
        {cards.slice(0, 3).map((s, i) => (
          <div key={s.label}
            className="absolute left-0 right-0 bg-void/80 border border-snow/10 rounded-2xl p-4 transition-all duration-700"
            style={{ top: `${i * 22}px`, zIndex: 3 - i, opacity: 1 - i * 0.28, transform: `scale(${1 - i * 0.04})` }}>
            <div className="font-mono text-xs text-dim mb-1">{s.label}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-700 text-3xl text-cyan">{s.value}</span>
              <span className="font-display font-700 text-xl text-snow/60">{s.unit}</span>
            </div>
            <div className="font-mono text-xs text-cyan/60 mt-1">{s.trend}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const messages = [
  'Auditing your old website...',
  'New site launched in 14 days...',
  'Google ranking: Page 4 → Page 1...',
  'Week 1: 3 new online bookings...',
  'Month 1: phone calls up 180%...',
  'Month 2: Google reviews up 12...',
  'Month 3: ROI achieved. Leads flowing.',
  'Booked 3 weeks out. 🎉',
]

function BuildPipeline() {
  const [msgIndex, setMsgIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (charIdx < messages[msgIndex].length) {
      const t = setTimeout(() => {
        setDisplayed(prev => prev + messages[msgIndex][charIdx])
        setCharIdx(i => i + 1)
      }, 38)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setMsgIndex(i => (i + 1) % messages.length)
        setDisplayed('')
        setCharIdx(0)
      }, 1800)
      return () => clearTimeout(t)
    }
  }, [charIdx, msgIndex])

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Terminal size={14} className="text-cyan" />
        <span className="font-mono text-xs text-cyan uppercase tracking-widest">90-Day Client Journey</span>
        <div className="ml-auto flex gap-1.5">
          {['bg-red-500/60', 'bg-yellow-400/60', 'bg-green-400/60'].map((c, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
          ))}
        </div>
      </div>
      <div className="bg-void rounded-xl p-4 flex-1 font-mono text-xs overflow-hidden">
        <div className="text-dim mb-2">$ client: Gruter HVAC — results log</div>
        {messages.slice(0, msgIndex).map((m, i) => (
          <div key={i} className="text-snow/30 mb-1">✓ {m}</div>
        ))}
        <div className="text-cyan">
          › {displayed}<span className="inline-block w-2 h-4 bg-cyan ml-0.5 animate-pulse align-middle" />
        </div>
      </div>
    </div>
  )
}

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const dates = [null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

function StrategyScheduler() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    getCalApi({ namespace: 'scheduler' }).then(cal => {
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          dark: {
            'cal-brand': '#FF5C1A',
            'cal-bg': '#141010',
            'cal-bg-emphasis': '#1E1818',
            'cal-border': '#1E1818',
            'cal-text': '#F2EAE0',
            'cal-text-subtle': '#7A6860',
          }
        }
      })
    })
  }, [])

  const openCal = () => {
    getCalApi({ namespace: 'scheduler' }).then(cal => {
      cal('modal', { calLink: 'adiran-tech-laj4mf/30min' })
    })
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <CalendarDays size={14} className="text-cyan" />
        <span className="font-mono text-xs text-cyan uppercase tracking-widest">Schedule a Strategy Call</span>
      </div>
      <div className="flex-1 bg-void rounded-xl p-4">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days.map((d, i) => <div key={i} className="font-mono text-xs text-dim text-center">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {dates.map((d, i) => (
            <button key={i} onClick={() => d && setSelected(d)}
              className={`w-full aspect-square rounded-lg font-mono text-xs flex items-center justify-center transition-all duration-300 ${
                !d ? 'invisible' :
                selected === d ? 'bg-cyan text-void font-700 scale-110 shadow-lg shadow-cyan/30' :
                'text-snow/40 hover:bg-navy hover:text-snow'
              }`}>
              {d || ''}
            </button>
          ))}
        </div>
        <button
          onClick={openCal}
          className="mt-4 w-full bg-cyan/10 border border-cyan/30 text-cyan font-sans font-600 text-xs py-2 rounded-xl hover:bg-cyan/20 transition-all cursor-pointer">
          {selected ? `Book for the ${selected}th →` : 'Select a Date'}
        </button>
      </div>
    </div>
  )
}

export default function WhyUs() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.whyus-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
      gsap.fromTo('.whyus-widget',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.widgets-row', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="whyus" className="py-28 px-6 bg-navy/30">
      <div className="max-w-6xl mx-auto">
        <div className="whyus-header text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">Why Adiran Tech</p>
          <h2 className="font-display font-700 text-5xl md:text-6xl text-snow leading-tight mb-4">
            Built Different.<br /><span className="text-cyan">For Trades.</span>
          </h2>
          <p className="font-sans text-snow/50 max-w-xl mx-auto">
            See real client results, watch how a build unfolds, and book your strategy call — all in one place.
          </p>
        </div>

        <div className="widgets-row grid md:grid-cols-3 gap-6">
          {[<PerformanceDashboard />, <BuildPipeline />, <StrategyScheduler />].map((widget, i) => (
            <div key={i} className="whyus-widget relative bg-navy border border-snow/10 rounded-4xl p-6 min-h-72 hover:border-cyan/20 transition-all duration-300">
              <GlowingEffect spread={40} glow={false} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
              {widget}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
