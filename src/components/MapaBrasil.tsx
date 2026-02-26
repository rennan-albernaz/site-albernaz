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
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23247034' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green/5 rounded-full blur-3xl pointer-events-none" />

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
          {/* ── Map ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
              {/* Mapa 3D do Brasil */}
              <div className="w-full h-full bg-white rounded-3xl border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/mapa-brasil.png"
                  alt="Mapa 3D do Brasil com unidades Albernaz"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  style={{ filter: 'drop-shadow(0 8px 32px rgba(36,112,52,0.18))' }}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                {/* Fallback SVG caso a imagem não exista */}
                <svg
                  viewBox="0 0 400 520"
                  className="absolute inset-0 w-full h-full p-8 opacity-20"
                  fill="currentColor"
                >
                  <path
                    className="text-green"
                    d="M200 20 C160 30 120 45 90 70 C60 95 40 130 30 165 C20 200 25 240 40 270
                       C55 300 80 325 85 360 C90 395 75 430 90 455 C105 480 140 490 170 495
                       C200 500 235 490 260 475 C285 460 300 435 310 408 C320 381 315 350 330 328
                       C345 306 370 295 375 270 C380 245 365 215 360 190 C355 165 355 135 340 112
                       C325 89 295 78 270 60 C245 42 230 15 200 20Z"
                  />
                </svg>
                {/* Pin markers */}
                {units.map((unit) => (
                  <div
                    key={unit.id}
                    style={{ top: unit.top, left: unit.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group"
                  >
                    <span className="map-pin block" />
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                      {unit.city}, {unit.state}
                    </span>
                  </div>
                ))}
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
