import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Unit {
  id: string
  city: string
  state: string
  role: string
  top: string
  left: string
  details: string[]
}

const units: Unit[] = [
  {
    id: 'joao-pinheiro',
    city: 'Fábrica e Assistência Técnica',
    state: 'João Pinheiro - MG',
    role: 'Rua Izidoro Nicolau Araujo, 968, Santa Cruz, João Pinheiro - MG',
    top: '58%',
    left: '52%',
    details: [
      'Rua Izidoro Nicolau Araujo, 968, Santa Cruz, João Pinheiro - MG',
    ],
  },
    {
    id: 'joao-pinheiro',
    city: 'Loja Elétrica',
    state: 'João Pinheiro - MG',
    role: 'Av. José Rabelo de Souza, 562, Centro',
    top: '58%',
    left: '52%',
    details: [
      'Av. José Rabelo de Souza, 562, Centro',
    ],
  },
  {
    id: 'catalao',
    city: 'Filial',
    state: 'Catalão - GO',
    role: 'Av. Ricardo Paranhos, SN, Catalão - GO',
    top: '51%',
    left: '46%',
    details: [
      'Av. Ricardo Paranhos, SN, Catalão - GO',
    ],
  },
]

export default function MapaBrasil() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-28 overflow-hidden bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Presença Nacional</span>
          <h2 className="section-title mt-3">
            Infraestrutura que Energiza{' '}
            <span className="text-green">o Futuro e Impulsiona Negócios</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto leading-relaxed">
            Unimos tecnologia de alta precisão e engenharia de ponta para fabricar soluções elétricas que elevam o padrão de performance e confiabilidade da sua indústria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Mapa Único ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center items-center w-full"
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <img
                src="/assets/mapa1.png"
                alt="Mapa Nacional Albernaz"
                className="w-full h-auto object-contain rounded-3xl border border-gray-200 shadow-sm"
                style={{ minHeight: '400px', background: '#fff' }}
                loading="lazy"
              />
              {/* Bolinha direita (João Pinheiro) - subir */}
              <div
                className="absolute z-10 group"
                style={{ top: '54%', left: '67.5%' }}
              >
                <span className="block w-5 h-5 bg-green rounded-full border-2 border-white shadow-lg cursor-pointer transition-transform group-hover:scale-110" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-12 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  Fábrica & Loja | João Pinheiro - MG
                </span>
              </div>
              {/* Bolinha esquerda (Catalão) - subir */}
              <div
                className="absolute z-10 group"
                style={{ top: '55.2%', left: '59.9%' }}
              >
                <span className="block w-5 h-5 bg-green rounded-full border-2 border-white shadow-lg cursor-pointer transition-transform group-hover:scale-110" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-12 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  Filial | Catalão - GO
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Units detail ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {units.map((unit, i) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              >
                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-green flex-shrink-0" />
                    <span className="text-xs text-green-light font-semibold uppercase tracking-wider">
                      {unit.state}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900">{unit.city}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{unit.role}</p>
                </div>
              </motion.div>
            ))}

            {/* Coverage note */}
            <div className="glass-card rounded-2xl p-5 mt-2">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="text-gray-900 font-semibold">Cobertura nacional</span> — Atendemos
                projetos industriais em todos os estados.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
