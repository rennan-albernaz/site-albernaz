import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const logos = [
  { src: '/assets/pc1.jpg', alt: 'Parceiro 1' },
  { src: '/assets/pc2.png', alt: 'Parceiro 2' },
  { src: '/assets/pc3.png', alt: 'Parceiro 3' },
  { src: '/assets/pc4.jpg', alt: 'Parceiro 4' },
]

const track = [...logos, ...logos, ...logos, ...logos]

export default function Parceiros() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="parceiros" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-green-dark/10 via-transparent to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Parceiros & Clientes</span>
          <h2 className="section-title mt-3">
            Quem Confia na{' '}
            <span className="text-green">Força da nossa Engenharia</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Consolidamos alianças com os líderes do setor para integrar componentes de alta performance, assegurando máxima segurança e eficiência operacional em cada projeto
          </p>
        </motion.div>
      </div>

      {/* Infinite marquee carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div
          className="flex gap-10 w-max"
          style={{
            animation: 'marquee 28s linear infinite',
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-44 h-28 glass-card rounded-2xl flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 4)); }
        }
      `}</style>
    </section>
  )
}
