import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-navy">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://picsum.photos/seed/school-hero/1600/900')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 gradient-navy-overlay" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-subtitle text-gold"
          >
            Welcome to Excellence International School
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Nurturing Minds,
            <span className="block text-gradient-gold">Building Futures</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-navy-100 max-w-xl mb-10"
          >
            A world-class learning environment where academic excellence meets character
            development, empowering every student to reach their full potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/admissions" className="btn-primary">
              Apply for Admission
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="btn-secondary">
              <PlayCircle className="h-5 w-5" />
              Discover More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection