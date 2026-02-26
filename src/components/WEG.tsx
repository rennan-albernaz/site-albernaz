import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const wegLines = [
  {
    icon: '⚙️',
    title: 'Acionamentos de Baixa Tensão',
    desc: 'Especialistas em inversores de frequência e soft-starters WEG, garantindo precisão no controle de motores industriais.',
  },
  {
    icon: '🔌',
    title: 'Proteção & Controle Industrial',
    desc: 'Integração de disjuntores, contatores e CLPs em painéis inteligentes montados com tecnologia de modelagem CNC.',
  },
  {
    icon: '💡',
    title: 'Gestão & Eficiência Energética',
    desc: 'Implementação de transformadores e sistemas de medição em infraestruturas elétricas para otimização do consumo.',
  },
  {
    icon: '🛠️',
    title: 'Assistência Técnica Especializada',
    desc: 'Equipe certificada para manutenção preventiva, corretiva e start-up focada na linha de acionamentos WEG.',
  },
]

export default function WEG() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="weg" className="relative pt-10 pb-28 overflow-hidden">
      {/* Light blue accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-white pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-weg/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-weg/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Centered section label + logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 gap-4"
        >
          <span className="section-label" style={{ color: '#0068CC' }}>Assistência Técnica Autorizada</span>
          <img
            src="/assets/logo-weq.png"
            alt="WEG"
            className="h-24 w-auto object-contain"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title mb-6">Autoridade Técnica WEG</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Como Assistência Técnica Autorizada WEG, entregamos suporte especializado em inversores 
              de frequência e soft-starters de baixa tensão, unindo consultoria avançada e precisão técnica 
              para garantir a continuidade da sua operação.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/#contato"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-weg"
              >
                Falar com Especialista
              </a>
              <a
                href="https://www.weg.net/catalog/weg/BR/pt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Catálogo WEG
              </a>
            </div>
          </motion.div>

          {/* Right – Grid of features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {wegLines.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="glass-card rounded-2xl p-5 border border-blue-100 hover:border-weg/30"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1.5">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
