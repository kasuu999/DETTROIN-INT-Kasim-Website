import React from 'react'
import { Helmet } from 'react-helmet-async'
import GalleryGrid from '../components/GalleryGrid'

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Excellence International School</title>
        <meta
          name="description"
          content="Browse photos from school events, sports, campus life, and student activities at Excellence International School."
        />
      </Helmet>

      <section className="gradient-navy pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="section-subtitle text-gold">Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Moments Worth Remembering</h1>
          <p className="text-navy-100 mt-4">
            A glimpse into campus life — events, sports, activities, and everyday moments.
          </p>
        </div>
      </section>

      <section className="container-section">
        <GalleryGrid />
      </section>
    </>
  )
}

export default Gallery