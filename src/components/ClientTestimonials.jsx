import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  {
    name: 'Mike Hartley',
    business: "Mike's HVAC & Cooling",
    location: 'Phoenix, AZ',
    quote: "I was skeptical — I've been burned by web agencies before. But Layne built us a site that actually looks like a real company. Within 60 days our Google leads went from basically zero to booking 3–4 new jobs every week. The phone rings now.",
    result: '+4 jobs/week from Google',
    industry: 'HVAC',
  },
  {
    name: 'Carlos Vega',
    business: 'Vega Plumbing Co.',
    location: 'San Antonio, TX',
    quote: "Layne took the time to understand my business before building anything. The online booking form alone saves my office manager about 5 hours a week in phone calls. Best investment I made this year.",
    result: '5 hrs/wk saved on scheduling',
    industry: 'Plumbing',
  },
  {
    name: 'Jason Briggs',
    business: 'Briggs Landworks',
    location: 'Nashville, TN',
    quote: "We were operating on a Facebook page and a $500 Wix site. Adiran Tech built us something we're actually proud to send customers to. New residential jobs are up about 40% since launch.",
    result: '+40% new residential jobs',
    industry: 'Landscaping',
  },
  {
    name: 'Steve Kowalski',
    business: 'Kowalski Electric',
    location: 'Columbus, OH',
    quote: "I told Layne I wanted a site that looked as professional as the big electrical contractors in our area. He delivered. We've won 3 commercial bids this quarter where the client specifically mentioned our website.",
    result: '3 commercial bids won via site',
    industry: 'Electrical',
  },
  {
    name: 'Dave Nunez',
    business: 'Nunez Pool & Spa',
    location: 'Tampa, FL',
    quote: "The best part is I don't have to think about it. Layne set everything up, got us on Google, and I just get the leads. Six months in and we're booked 3 weeks out — first time in 12 years in business.",
    result: 'Booked 3 weeks out',
    industry: 'Pool Service',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="text-cyan fill-cyan" />
      ))}
    </div>
  )
}

export default function ClientTestimonials() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % reviews.length), 5000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.reviews-header',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
      gsap.fromTo('.review-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.reviews-grid', start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const r = reviews[active]

  return (
    <section ref={ref} id="testimonials" className="py-28 px-6 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="reviews-header text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-4">Client Results</p>
          <h2 className="font-display font-700 text-5xl md:text-6xl text-snow leading-tight mb-4">
            Real Businesses.<br /><span className="text-cyan">Real Results.</span>
          </h2>
          <p className="font-sans text-snow/50 max-w-xl mx-auto">
            Don't take our word for it. Here's what trade business owners say after working with us.
          </p>
        </div>

        {/* Featured review */}
        <div className="bg-navy border border-cyan/20 rounded-4xl p-10 mb-8 relative overflow-hidden">
          <Quote size={80} className="absolute top-6 right-8 text-cyan/5" />
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <Stars />
              <blockquote className="font-display font-600 text-2xl md:text-3xl text-snow leading-relaxed mt-6 mb-8">
                "{r.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-700 text-cyan text-lg">{r.name[0]}</span>
                </div>
                <div>
                  <div className="font-sans font-700 text-snow">{r.name}</div>
                  <div className="font-mono text-xs text-dim">{r.business} · {r.location}</div>
                </div>
                <div className="ml-auto hidden md:flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan" />
                  <span className="font-mono text-xs text-cyan">{r.result}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Dot indicators */}
          <div className="flex gap-2 mt-8">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'bg-cyan w-6' : 'bg-snow/20 w-1.5 hover:bg-snow/40'}`} />
            ))}
          </div>
        </div>

        {/* All review cards */}
        <div className="reviews-grid grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {reviews.map((rv, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`review-card text-left bg-navy rounded-3xl p-5 border transition-all duration-200 hover:border-cyan/30 ${i === active ? 'border-cyan/40 bg-cyan/5' : 'border-snow/10'}`}>
              <Stars />
              <p className="font-sans text-xs text-snow/50 leading-relaxed mt-3 mb-4 line-clamp-3">"{rv.quote}"</p>
              <div className="font-sans font-600 text-snow text-xs">{rv.name}</div>
              <div className="font-mono text-xs text-dim">{rv.industry}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
