import { Zap, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const cols = [
    {
      head: 'Solutions',
      links: [
        { l: 'Business Websites', to: '/services' },
        { l: 'Web Applications',  to: '/services' },
        { l: 'Full Stack Dev',    to: '/services' },
        { l: 'Pricing',           to: '/pricing'  },
      ],
    },
    {
      head: 'Company',
      links: [
        { l: 'About Layne',      to: '/about'   },
        { l: 'How It Works',     to: '/process' },
        { l: 'Our Work',         to: '/work'    },
        { l: 'Book a Free Call', to: '/contact' },
      ],
    },
    {
      head: 'Industries',
      links: [
        { l: 'HVAC & Heating', to: '/contact' },
        { l: 'Plumbing',       to: '/contact' },
        { l: 'Landscaping',    to: '/contact' },
        { l: 'Construction',   to: '/contact' },
      ],
    },
  ]

  return (
    <footer id="footer" className="bg-navy border-t border-snow/5 rounded-t-[3rem] px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-cyan flex items-center justify-center">
                <Zap size={14} className="text-void" fill="currentColor" />
              </div>
              <span className="font-display font-700 text-snow text-base tracking-tight">ADIRAN<span className="text-cyan">_</span>TECH</span>
            </Link>
            <p className="font-sans text-snow/40 text-sm leading-relaxed mb-6">
              Digital upgrades for blue-collar businesses. Websites and apps that work as hard as you do.
            </p>
            <div className="space-y-2">
              <a href="tel:+15139082475" className="flex items-center gap-2 text-snow/40 hover:text-cyan transition-colors group">
                <Phone size={13} className="group-hover:text-cyan" />
                <span className="font-mono text-xs">(513) 908-2475</span>
              </a>
              <a href="mailto:adarintech@gmail.com" className="flex items-center gap-2 text-snow/40 hover:text-cyan transition-colors group">
                <Mail size={13} className="group-hover:text-cyan" />
                <span className="font-mono text-xs">adarintech@gmail.com</span>
              </a>
            </div>
          </div>

          {cols.map(col => (
            <div key={col.head}>
              <p className="font-mono text-xs uppercase tracking-widest text-dim mb-4">{col.head}</p>
              <ul className="space-y-3">
                {col.links.map(({ l, to }) => (
                  <li key={l}>
                    <Link to={to} className="font-sans text-sm text-snow/50 hover:text-cyan transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-snow/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-xs text-dim">
            © {new Date().getFullYear()} Adiran Tech LLC. All rights reserved. Founded by Layne Mason.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="font-mono text-xs text-cyan">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
