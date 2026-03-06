import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { getProducts, getCategories, initializeProducts } from '../utils/productManager'

const PAGE_SIZE = 12

export default function Catalogo() {
  useEffect(() => {
    initializeProducts()
  }, [])

  const [activeCategory, setActiveCategory] = useState<string>('Todos')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState(() => getProducts())
  const [categories, setCategories] = useState(() => ['Todos', ...getCategories()])

  useEffect(() => {
    const handleFocus = () => {
      setProducts(getProducts())
      setCategories(['Todos', ...getCategories()])
    }
    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [])

  const filtered = useMemo(() => {
    let list = products
    if (activeCategory !== 'Todos') list = list.filter((p) => p.category === activeCategory)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q)
      )
    }
    return list
  }, [activeCategory, search, products])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => { setPage(1) }, [activeCategory, search])

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const pageNumbers = () => {
    const pages: (number | '...')[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (page > 3) pages.push('...')
      for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i)
      if (page < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page header com imagem de fundo */}
      <section 
        className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex flex-col justify-center items-center border-b border-gray-100"
        style={{ perspective: '1px', transformStyle: 'preserve-3d' }}
      >
        {/* Imagem de fundo com efeito parallax */}
        <img
          src="/assets/1.png"
          alt="Catálogo de Produtos"
          className="absolute inset-0 w-full h-full object-cover z-0 parallax-bg"
          style={{ willChange: 'transform' }}
        />
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
        {/* Conteúdo sobreposto */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-200 mb-6">
            <Link to="/" className="hover:text-green transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Catálogo</span>
          </nav>
          <span className="section-label !text-white">Catálogo de Produtos</span>
          <h1 className="section-title mt-3 mb-4 text-white">
            Conheça nossa linha completa{' '}
            <span className="text-green"></span>
          </h1>
          <p className="text-gray-100 max-w-xl mx-auto leading-relaxed">
            {products.length}+ produtos fabricados com rigor técnico.
          </p>
        </div>
      </section>

      {/* Espaço extra para afastar a controls bar da imagem de fundo */}
      <div className="h-16 lg:h-24" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">
        {/* ── Controls bar ─────────────────────────────────── */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-250 ${
                  activeCategory === cat
                    ? 'bg-green text-white shadow-lg shadow-green/30'
                    : 'bg-white border border-gray-200 text-gray-600 hover:text-green hover:border-green/40'
                }`}
              >
                {cat}
                {cat !== 'Todos' && (
                  <span className="ml-1.5 text-[10px] opacity-60">
                    ({products.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-200 pl-9 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green/60 rounded-xl transition-colors"
              placeholder="Buscar por nome"
            />
          </div>
        </div>

        {/* ── Results count ─────────────────────────────────── */}
        <p className="text-xs text-gray-400 mb-5">
          Exibindo {paginated.length} de {filtered.length} produto{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* ── Grid ─────────────────────────────────────────── */}
        {paginated.length > 0 ? (
          <motion.div
            key={`${activeCategory}-${page}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {paginated.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium">Nenhum produto encontrado</p>
            <p className="text-sm mt-1">Tente outro termo ou categoria</p>
          </div>
        )}

        {/* ── Pagination ───────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-green hover:border-green/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              ‹
            </button>

            {pageNumbers().map((pn, i) =>
              pn === '...' ? (
                <span key={`dots-${i}`} className="text-gray-400 px-1">…</span>
              ) : (
                <button
                  key={pn}
                  onClick={() => setPage(pn as number)}
                  className={`w-9 h-9 rounded-xl text-sm font-medium transition-all ${
                    page === pn
                      ? 'bg-green text-white shadow-md shadow-green/30'
                      : 'bg-white border border-gray-200 text-gray-600 hover:text-green hover:border-green/40'
                  }`}
                >
                  {pn}
                </button>
              )
            )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-green hover:border-green/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              ›
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
