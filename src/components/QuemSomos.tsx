import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  { icon: '/assets/certificacao.jpg', title: 'Certificação', text: 'Produtos certificados pelos mais rigorosos padrões nacionais e internacionais, incluindo IEC 61439 e ABNT NBR IEC 60439.' },
  { icon: '/assets/suporte.jpg', title: 'Suporte', text: 'Atendimento técnico disponível 24 horas por dia, 7 dias por semana, para garantir a continuidade da sua operação.' },
  { icon: '/assets/helder.jpg', title: 'ASTEC', text: 'Assistência Técnica Autorizada WEG. Suporte especializado em inversores de frequência e soft-starters de baixa tensão.' },
  { icon: '/assets/automacao.jpg', title: 'Automação Industrial', text: 'Soluções de automação industrial para otimizar processos e aumentar a eficiência operacional.' },
]


export default function QuemSomos() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="quem-somos" className="relative py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-green/8 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-28 items-center">
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
          </motion.div>

          {/* ── Right – Image ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-visible h-[650px] bg-gray-100 border border-gray-200 flex items-center justify-center">
              <img
                src="/assets/cnc.jpeg"
                alt="CNC em funcionamento"
                className="w-[110%] h-[110%] object-cover rounded-3xl shadow-xl"
              />
            </div>

            {/* Floating badge reduzido e mais deslocado */}
            <div className="absolute -bottom-16 -right-20 glass-card rounded-2xl p-4 text-center shadow-2xl border border-green/40 bg-white/95 min-w-[120px] min-h-[60px] flex flex-col items-center justify-center">
              <p className="font-display font-extrabold text-3xl text-green drop-shadow-lg">25+</p>
              <p className="text-xs text-gray-600 mt-1 font-semibold">Anos no mercado</p>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-green/5 blur-2xl -z-10 scale-110" />
          </motion.div>
        </div>

        {/* Highlights moved below both columns, now full-width and visually enhanced */}
        <div className="mt-16 flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 xl:gap-48 justify-items-center">
            {highlights.map((h) => (
              ['ASTEC', 'Certificação', 'Suporte', 'Automação Industrial'].includes(h.title) ? (
                <div
                  key={h.title}
                  className="group relative rounded-3xl shadow-2xl border-4 overflow-hidden cursor-pointer transition-all duration-300 mx-auto"
                  style={{ width: '300px', height: '420px', borderColor: 'rgba(34,197,94,0.35)', transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.width = '340px';
                    e.currentTarget.style.height = '470px';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.width = '300px';
                    e.currentTarget.style.height = '420px';
                  }}
                >
                  <img
                    src={h.icon}
                    alt={h.title}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full p-8">
                    <p className="font-bold text-white text-2xl mb-1 text-center">
                      {h.title === 'Automação Industrial' ? (<><span>Automação</span><br /><span>Industrial</span></>) : h.title}
                    </p>
                    <div style={{ width: '48px', height: '4px', backgroundColor: 'rgba(34,197,94,0.35)', borderRadius: '2px', margin: '0 auto', marginTop: '4px' }} />
                  </div>
                  {/* Sobreposição ao expandir */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white px-10 py-12 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                    {/* Botão seta canto superior direito */}
                    <button
                      type="button"
                      className="absolute top-5 right-5 bg-green-100 hover:bg-green-200 text-green-700 rounded-full p-2 shadow transition-colors duration-200"
                      aria-label="Ver mais"
                      tabIndex={0}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 17V7H7" />
                      </svg>
                    </button>
                    <div className="flex flex-col justify-center h-full w-full pt-8 pb-4 px-2 lg:px-8">
                      <p className="font-bold text-green-900 text-2xl mb-4 text-center leading-tight">
                        {h.title === 'Automação Industrial' ? (<><span>Automação</span><br /><span>Industrial</span></>) : h.title}
                      </p>
                      <p className="text-gray-700 text-base leading-relaxed text-center mx-auto w-full" style={{minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '0.5rem', paddingRight: '0.5rem'}}>
                        {h.text}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={h.title}
                  className="relative bg-gradient-to-br from-green-100/80 via-white to-green-50/80 border-2 border-green/30 shadow-xl rounded-3xl p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl duration-300"
                >
                  <div className="text-4xl mb-3 drop-shadow-lg">{h.icon}</div>
                  <p className="font-bold text-green-900 text-lg mb-1 text-center">{h.title}</p>
                  <p className="text-gray-700 text-sm leading-relaxed text-center">{h.text}</p>
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md border-2 border-white/80 opacity-80 pointer-events-none select-none" style={{display: h.title === 'Certificação' ? 'block' : 'none'}}>★</div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
