import React, { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Lightbox = ({ images, activeIndex, onClose, onNext, onPrev }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    },
    [onClose, onNext, onPrev]
  )

  useEffect(() => {
    if (activeIndex === null) return
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex, handleKeyDown])

  if (activeIndex === null) return null

  const image = images[activeIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-navy-900/95 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        onClick={onClose}
      >
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          aria-label="Close lightbox"
          className="absolute top-5 right-5 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous image"
          className="absolute left-3 md:left-8 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <motion.img
          key={image.src}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={image.src}
          alt={image.alt}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next image"
          className="absolute right-3 md:right-8 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <p className="absolute bottom-6 text-navy-100 text-sm">
          {activeIndex + 1} / {images.length}
        </p>
      </motion.div>
    </AnimatePresence>
  )
}

export default Lightbox