import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  { icon: '📃', title: 'Certificação', text: 'Produtos certificados pelos mais rigorosos padrões nacionais e internacionais, incluindo IEC 61439 e ABNT NBR IEC 60439.' },
  { icon: '📞', title: 'Suporte', text: 'Atendimento técnico disponível 24 horas por dia, 7 dias por semana, para garantir a continuidade da sua operação.' },
  { icon: '🔧', title: 'ASTEC', text: 'Assistência Técnica Autorizada WEG. Suporte especializado em inversores de frequência e soft-starters de baixa tensão.' },
]

export default function QuemSomos() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="quem-somos" className="relative py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-green/8 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left – Text ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Quem Somos</span>
            <h2 className="section-title mt-3 mb-6">
              Grupo Albernaz Electric:{' '}
              <span className="text-green">liderança em soluções elétricas</span>{' '}
              inteligentes.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Fundada em 14 de outubro de 2010 em João Pinheiro, Minas Gerais, a<strong className="text-gray-900"> Albernaz Electric </strong>nasceu com o propósito de fornecer soluções de alta 
                qualidade para o setor elétrico industrial. Ao longo de mais de uma década, construímos uma reputação sólida baseada na excelência 
                técnica e no compromisso com a satisfação do cliente.
              </p>

              <p>
                Hoje, o <strong className="text-gray-900">Grupo Albernaz Electric</strong> consolidou-se como uma empresa brasileira referência na fabricação de painéis elétricos, quadros de distribuição e componentes de média e baixa tensão. 
                Com unidades estrategicamente localizadas em <strong className="text-gray-900">João Pinheiro (MG) e Catalão (GO)</strong>, atendemos indústrias de grande porte em todo o território nacional, oferecendo produtos e serviços que 
                combinam tecnologia de ponta com a confiabilidade que o mercado exige.
              </p>

              <p>
                Nossa estrutura verticalizada integra o ciclo completo — do projeto ao produto pronto — com controle total de qualidade em cada etapa. Além da nossa força fabril, somos <strong className="text-gray-900">Assistência 
                Técnica Autorizada WEG</strong>, oferecendo toda a linha de componentes e suporte técnico certificado para energizar o sucesso do seu negócio com rapidez e precisão.
                Nossa estrutura verticalizada integra o ciclo completo — do projeto ao produto pronto —
                com controle total de qualidade em cada etapa.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="glass-card rounded-2xl p-4">
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{h.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right – Image ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main video */}
            <div className="relative rounded-3xl overflow-hidden h-[560px] bg-gray-100 border border-gray-200">
              <video
                src="/assets/cnc.jpeg"
                className="absolute inset-0 w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
                playsInline
                poster="/assets/cnc.jpeg"
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
              {/* Corner accent */}
              <div className="absolute top-4 left-4 bg-white/90 border border-green/30 rounded-xl px-3 py-1.5 text-xs font-semibold text-green">
                Padrão Albernaz
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 text-center shadow-xl">
              <p className="font-display font-bold text-3xl text-green">25+</p>
              <p className="text-xs text-gray-500 mt-0.5">Anos de mercado</p>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-green/5 blur-2xl -z-10 scale-110" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
