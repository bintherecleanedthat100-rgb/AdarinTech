import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Gruter HVAC',
    description: 'High-converting site for a Cincinnati HVAC contractor.',
    year: '2024',
    link: '#',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
  },
  {
    title: 'KB Landworks',
    description: 'Cinematic landing page for a premium landscaping company.',
    year: '2024',
    link: '#',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'Ridgeline Roofing',
    description: 'Mobile-first lead gen site driving 3× more booked estimates.',
    year: '2023',
    link: '#',
    image: 'https://images.unsplash.com/photo-1632889345808-f8a8b0b1b8a8?w=800&q=80',
  },
  {
    title: 'Peak Electric',
    description: 'Trust-forward site for a residential electrical contractor.',
    year: '2023',
    link: '#',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
  },
]

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [mousePosition])

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-3xl mx-auto px-6 py-20"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-cyan mb-2">Our Work</p>
      <h2 className="font-hero text-5xl md:text-6xl text-snow mb-12">Selected Projects</h2>

      {/* Floating preview image */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-2xl shadow-2xl"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 110}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.85,
          transition: 'opacity 0.3s cubic-bezier(0.4,0,0.2,1), scale 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="relative w-[280px] h-[180px] bg-navy rounded-2xl overflow-hidden">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.08,
                filter: hoveredIndex === index ? 'none' : 'blur(8px)',
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-void/30 to-transparent" />
        </div>
      </div>

      {/* Project list */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block"
            onMouseEnter={() => { setHoveredIndex(index); setIsVisible(true) }}
            onMouseLeave={() => { setHoveredIndex(null); setIsVisible(false) }}
          >
            <div className="relative py-5 border-t border-grid transition-all duration-300 ease-out">
              {/* Hover highlight */}
              <div
                className={`absolute inset-0 -mx-4 px-4 bg-navy/60 rounded-xl transition-all duration-300 ease-out
                  ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="font-display font-semibold text-xl text-snow">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`absolute left-0 -bottom-0.5 h-px bg-cyan transition-all duration-300 ease-out
                            ${hoveredIndex === index ? 'w-full' : 'w-0'}`}
                        />
                      </span>
                    </h3>
                    <ArrowUpRight
                      className={`w-4 h-4 text-cyan transition-all duration-300 ease-out
                        ${hoveredIndex === index ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-2 translate-y-2'}`}
                    />
                  </div>
                  <p className={`font-sans text-sm mt-1 leading-relaxed transition-colors duration-300
                    ${hoveredIndex === index ? 'text-snow/70' : 'text-dim'}`}>
                    {project.description}
                  </p>
                </div>

                <span className={`font-mono text-xs tabular-nums transition-colors duration-300
                  ${hoveredIndex === index ? 'text-snow/60' : 'text-dim'}`}>
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
        <div className="border-t border-grid" />
      </div>
    </section>
  )
}
