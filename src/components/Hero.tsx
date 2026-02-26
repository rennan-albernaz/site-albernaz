import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  const scrollDown = () => {
    const el = document.getElementById('quem-somos')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col">

      {/* ── Video background ─────────────────────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/cnc.jpeg"
      >
        <source src="/assets/fabrica_web_fixed.mp4" type="video/mp4" />
        <source src="/assets/fabrica_web.mp4" type="video/mp4" />
        <source src="/assets/fabrica.mp4" type="video/mp4" />
      </video>

      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" style={{ zIndex: 1 }} />
      {/* grid texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" style={{ zIndex: 2 }} />

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full px-6 text-center" style={{ zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5"
        >
          <span className="section-label !text-white">Excelência em Engenharia Elétrica</span>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] text-balance">
            Painéis elétricos inteligentes para projetos de sucesso
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Inovação e tecnologia que energizam o seu negócio.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <button
              onClick={() => {
                const el = document.getElementById('contato')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Solicitar Orçamento
            </button>
            <Link to="/produtos" className="btn-outline !text-white">
              Ver Catálogo
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll down caret ───────────────────────────────── */}
      <div className="relative pb-10 flex justify-center" style={{ zIndex: 3 }}>
        <button
          onClick={scrollDown}
          className="text-white/40 hover:text-white/80 transition-colors animate-bounce"
          aria-label="Rolar para baixo"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <div className="absolute bottom-16 left-0 right-0 hidden lg:flex justify-center gap-0" style={{ zIndex: 3 }}>
        {[
          { value: '2.000+', label: 'Projetos entregues' },
          { value: '300+', label: 'Parceiros & Clientes' },
          { value: '25+', label: 'Anos de mercado' },
        ].map((stat, i) => (
          <div
            key={i}
            className={`px-10 py-3 text-center ${i < 2 ? 'border-r border-white/10' : ''}`}
          >
            <p className="font-display font-bold text-2xl text-white">{stat.value}</p>
            <p className="text-xs text-white/45 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
