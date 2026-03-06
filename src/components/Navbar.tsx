import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Quem Somos', href: '/#quem-somos' },
  { label: 'Parceiros', href: '/#parceiros' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'WEG', href: '/#weg' },
  { label: 'Contato', href: '/#contato' },
]


export default function Navbar() {
  const [isSobreImagemFundo, setIsSobreImagemFundo] = useState(true)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isCatalogo = location.pathname === '/produtos' || location.pathname === '/catalogo';

  useEffect(() => {
    if (isCatalogo) {
      function onScroll() {
        const nav = document.querySelector('header');
        const section = document.querySelector('section');
        if (!nav || !section) return setIsSobreImagemFundo(false);
        const navRect = nav.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        setIsSobreImagemFundo(navRect.bottom > sectionRect.top && navRect.top < sectionRect.bottom);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    } else {
      const home = document.getElementById('home');
      const quemSomos = document.getElementById('quem-somos');
      if (!home || !quemSomos) return;
      function onScroll() {
        const navHeight = 96;
        const quemSomosRect = quemSomos ? quemSomos.getBoundingClientRect() : { top: 9999 };
        setIsSobreImagemFundo(quemSomosRect.top > navHeight);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [isCatalogo]);

  useEffect(() => { setOpen(false) }, [location])

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      <div className="w-full flex justify-center mt-6 pointer-events-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`w-[98vw] max-w-[1500px] rounded-2xl border border-white/40 shadow-xl backdrop-blur-2xl flex items-center px-6 lg:px-20 h-24 ${isSobreImagemFundo ? '' : ''}`}
          style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)', background: 'rgba(255,255,255,0.15)' }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group mr-8">
            <img
              src={isSobreImagemFundo ? '/assets/logo-branca.png' : '/assets/logo.png'}
              alt="Albernaz Electric Group"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-12 flex-1 justify-center">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-lg font-semibold tracking-wide transition-colors relative group ${
                    isSobreImagemFundo
                      ? 'text-white hover:text-green-light'
                      : 'text-gray-800 hover:text-green'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green group-hover:w-full transition-all duration-300" />
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-lg font-semibold tracking-wide transition-colors relative group ${
                    isSobreImagemFundo
                      ? 'text-white hover:text-green-light'
                      : 'text-gray-800 hover:text-green'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green group-hover:w-full transition-all duration-300" />
                </Link>
              )
            ))}
            <a
              href="/#contato"
              onClick={() => handleNavClick('/#contato')}
              className={`btn-primary ml-8 !text-white ${isSobreImagemFundo ? '!bg-white/10 !border-white/40 hover:!bg-green hover:!text-white' : '!bg-white !border-gray-200 hover:!bg-green hover:!text-white'}`}
            >
              Solicitar Orçamento
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
            aria-label="Menu"
          >
            <span className={`block w-7 h-0.5 transition-all duration-300 ${isSobreImagemFundo ? 'bg-white' : 'bg-gray-700'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-7 h-0.5 transition-all duration-300 ${isSobreImagemFundo ? 'bg-white' : 'bg-gray-700'} ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 transition-all duration-300 ${isSobreImagemFundo ? 'bg-white' : 'bg-gray-700'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </motion.div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden overflow-hidden border-t w-full max-w-3xl mx-auto mt-2 rounded-xl border-white/40 shadow-xl backdrop-blur-2xl`}
            style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)', background: 'rgba(255,255,255,0.35)' }}
          >
            <nav className="flex flex-col px-8 py-5 gap-5">
              {navLinks.map((link) =>
                  link.href.startsWith('/#') ? (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className={`text-base font-semibold text-left transition-colors ${isSobreImagemFundo ? 'text-white hover:text-green-light' : 'text-gray-700 hover:text-green'}`}
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`text-base font-semibold transition-colors ${isSobreImagemFundo ? 'text-white hover:text-green-light' : 'text-gray-700 hover:text-green'}`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              <button
                onClick={() => handleNavClick('/#contato')}
                className={`btn-primary self-start !text-white ${isSobreImagemFundo ? '!bg-white/10 !border-white/40 hover:!bg-green hover:!text-white' : '!bg-white !border-gray-200 hover:!bg-green hover:!text-white'}`}
              >
                Solicitar Orçamento
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
