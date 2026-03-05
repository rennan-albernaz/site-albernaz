import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  const scrollDown = () => {
    const el = document.getElementById('quem-somos')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col">

      {/* ── Admin Button (hover to reveal) ───────────────────── */}
      <div className="absolute top-0 right-0 z-50 group">
        {/* Área sensível invisível no canto */}
        <div className="w-14 h-14 cursor-pointer" />
        
        {/* Botão que aparece no hover */}
        <Link 
          to="/admin/login" 
          className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110 pointer-events-none group-hover:pointer-events-auto"
          title="Acesso Admin"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>

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
              className="btn-primary !text-white"
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

      {/* ── Social Media Icons ──────────────────────────────── */}
      <div className="absolute bottom-20 right-6 lg:right-10 flex flex-col gap-3" style={{ zIndex: 4 }}>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/albernaz/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0A66C2] hover:border-white transition-all"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19H5v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.27h-3v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3V8h2.88v1.5h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.55V19z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/albernaz.industrial/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#E1306C] hover:border-white transition-all"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/553835614522"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#25D366] hover:border-white transition-all"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </a>
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
