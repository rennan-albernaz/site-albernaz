import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface Product {
  id: number
  name: string
  category: string
  image?: string
  dimensions?: string
  weight?: string
  voltage?: string
  certificacao?: string
  description: string
}

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const [open, setOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const allImages = []
  if (product.image) allImages.push(product.image)
  if ((product as any).additionalImages) {
    allImages.push(...(product as any).additionalImages)
  }

  const standardFields = ['id', 'name', 'category', 'description', 'image', 'dimensions', 'weight', 'voltage', 'certificacao', 'additionalImages']
  const customFields = Object.entries(product)
    .filter(([key]) => !standardFields.includes(key))
    .map(([key, value]) => ({ key, value: String(value) }))

  return (
    <>
      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="glass-card rounded-2xl overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Image area */}
        <div className="aspect-square bg-gray-100 relative flex items-center justify-center overflow-hidden">
          {product.image ? (
            product.image.endsWith('.mp4') ? (
              <video
                src={product.image}
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', margin: 0, padding: 0, background: 'transparent' }}
                autoPlay
                loop
                muted
                playsInline
                poster="/assets/cnc.jpeg"
                tabIndex={-1}
                controls={false}
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            )
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-300">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                  d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9a2 2 0 00-2-2M9 21H5a2 2 0 01-2-2V9a2 2 0 012-2m0 0h6" />
              </svg>
              <span className="text-xs">Sem imagem</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">{product.name}</h3>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-gray-400">{product.dimensions ?? '—'}</span>
            <span className="text-xs text-green font-semibold">Ver detalhes →</span>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-3xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image panel */}
                <div
                  className="bg-gray-100 aspect-square md:aspect-auto flex flex-col items-center justify-center min-h-[260px] relative"
                  style={{ padding: 0, margin: 0, border: 'none', height: '100%', display: 'flex', overflow: 'hidden' }}
                >
                  {allImages.length > 0 ? (
                    <>
                      {allImages[currentImageIndex]?.endsWith('.mp4') ? (
                        <video
                          src={allImages[currentImageIndex]}
                          className="w-full h-full pointer-events-none select-none"
                          style={{ width: '100% !important', height: '100% !important', objectFit: 'cover', objectPosition: 'center' }}
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster="/assets/cnc.jpeg"
                          tabIndex={-1}
                          controls={false}
                          disablePictureInPicture
                          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                        >
                          Seu navegador não suporta o elemento de vídeo.
                        </video>
                      ) : (
                        <img src={allImages[currentImageIndex]} alt={product.name} className="max-w-full max-h-64 object-contain" />
                      )}
                      
                      {/* Navegação de imagens */}
                      {allImages.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                          >
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                          >
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {allImages.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setCurrentImageIndex(idx)
                                }}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="text-gray-300 text-4xl font-display font-black">Sem imagem</div>
                  )}
                </div>

                {/* Info panel */}
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <span className="section-label text-[10px]">{product.category}</span>
                    <h2 className="font-display font-bold text-xl text-gray-900 mt-1 leading-tight">{product.name}</h2>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

                  {/* Specs */}
                  <div className="space-y-2">
                    {/* Dimensões, Peso, Tensão */}
                    {[
                      ['Dimensões', product.dimensions],
                      ['Peso', product.weight],
                      ['Tensão', product.voltage],
                    ]
                      .filter(([, v]) => v)
                      .map(([label, value]) => (
                        <div key={label as string} className="flex justify-between text-sm border-b border-gray-100 pb-1.5">
                          <span className="text-gray-400">{label}</span>
                          <span className="text-gray-900 font-medium">{value}</span>
                        </div>
                      ))}

                    {/* Certificação */}
                    {product.certificacao && (
                      <div className="flex justify-between text-sm border-b border-gray-100 pb-1.5">
                        <span className="text-gray-400">Certificação</span>
                        <span className="text-gray-900 font-medium ml-1">{product.certificacao}</span>
                      </div>
                    )}

                    {/* Campos Customizados */}
                    {customFields.map(({ key, value }) => (
                      <div key={key} className="flex justify-between text-sm border-b border-gray-100 pb-1.5">
                        <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-gray-900 font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 mt-auto pt-2">
                    <a
                      href={`mailto:contato@albernazelectric.com.br?subject=Orçamento – ${product.name}`}
                      className="btn-primary justify-center text-xs !text-white"
                    >
                      Solicitar Orçamento
                    </a>
                    <button
                      onClick={() => setOpen(false)}
                      className="btn-outline justify-center text-xs"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
