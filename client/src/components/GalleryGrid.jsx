import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

const categories = ['All', 'Events', 'Sports', 'Campus', 'Activities']

const galleryImages = [
  { id: 1, category: 'Events', src: 'https://picsum.photos/seed/event1/600/450', alt: 'Annual Day celebration' },
  { id: 2, category: 'Sports', src: 'https://picsum.photos/seed/sport1/600/450', alt: 'Inter-house football match' },
  { id: 3, category: 'Campus', src: 'https://picsum.photos/seed/campus1/600/450', alt: 'School campus building' },
  { id: 4, category: 'Activities', src: 'https://picsum.photos/seed/activity1/600/450', alt: 'Art and craft workshop' },
  { id: 5, category: 'Events', src: 'https://picsum.photos/seed/event2/600/450', alt: 'Science exhibition' },
  { id: 6, category: 'Sports', src: 'https://picsum.photos/seed/sport2/600/450', alt: 'Annual sports day' },
  { id: 7, category: 'Campus', src: 'https://picsum.photos/seed/campus2/600/450', alt: 'School library' },
  { id: 8, category: 'Activities', src: 'https://picsum.photos/seed/activity2/600/450', alt: 'Music class in session' },
  { id: 9, category: 'Events', src: 'https://picsum.photos/seed/event3/600/450', alt: 'Graduation ceremony' },
  { id: 10, category: 'Sports', src: 'https://picsum.photos/seed/sport3/600/450', alt: 'Basketball tournament' },
  { id: 11, category: 'Campus', src: 'https://picsum.photos/seed/campus3/600/450', alt: 'Science laboratory' },
  { id: 12, category: 'Activities', src: 'https://picsum.photos/seed/activity3/600/450', alt: 'Drama club rehearsal' },
]

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryImages
    return galleryImages.filter((img) => img.category === activeCategory)
  }, [activeCategory])

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % filteredImages.length)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-navy text-white shadow-card'
                : 'bg-navy-50 text-navy hover:bg-navy-100'
            }`}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map((image, index) => (
          <motion.button
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
            onClick={() => setActiveIndex(index)}
            className="block w-full break-inside-avoid rounded-xl overflow-hidden shadow-card group relative"
            aria-label={`View image: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-colors duration-300 flex items-end p-3">
              <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={filteredImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  )
}

export default GalleryGrid