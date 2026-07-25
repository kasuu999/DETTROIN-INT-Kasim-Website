import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import Timeline from '../components/Timeline'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Excellence International School</title>
        <meta
          name="description"
          content="Learn about Excellence International School's history, vision, mission, and leadership dedicated to shaping tomorrow's leaders."
        />
      </Helmet>

      <section className="gradient-navy pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="section-subtitle text-gold">
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Our Story of Excellence
          </motion.h1>
        </div>
      </section>

      <section className="container-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://picsum.photos/seed/school-history/700/500"
            alt="Excellence International School campus"
            className="rounded-2xl shadow-card w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Our History</p>
          <h2 className="section-title">A Legacy of Learning Since 1999</h2>
          <p className="text-navy-400 leading-relaxed mb-4">
            Founded in 1999 with a vision to redefine quality education, Excellence International
            School has grown from a single classroom into a thriving campus serving thousands of
            students. Our commitment to academic rigor, character building, and innovation has
            made us a trusted name in education.
          </p>
          <p className="text-navy-400 leading-relaxed">
            Today, we continue to evolve — integrating technology, global perspectives, and
            personalized learning to prepare our students for a rapidly changing world.
          </p>
        </motion.div>
      </section>

      <section className="bg-navy-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-navy text-gold mb-4">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-2">Our Vision</h3>
            <p className="text-navy-400 leading-relaxed">
              To be a globally recognized institution that empowers students to become confident,
              compassionate, and capable leaders of tomorrow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-navy text-gold mb-4">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-2">Our Mission</h3>
            <p className="text-navy-400 leading-relaxed">
              To provide a nurturing, inclusive environment where every child receives a
              world-class education rooted in academic excellence, integrity, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Leadership</p>
          <h2 className="section-title">Principal's Message</h2>
          <p className="text-navy-400 leading-relaxed mb-4">
            "At Excellence International School, we believe every child holds unique potential
            waiting to be discovered. Our dedicated faculty and staff work tirelessly to create an
            environment where curiosity thrives, character is built, and excellence becomes a
            habit."
          </p>
          <p className="text-navy-400 leading-relaxed mb-4">
            "We are proud of our journey and remain committed to preparing our students not just
            for exams, but for life."
          </p>
          <p className="font-semibold text-navy">Dr. Amanda Reyes</p>
          <p className="text-sm text-gold-600">Principal, Excellence International School</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://picsum.photos/seed/principal/600/600"
            alt="Portrait of the school principal"
            className="rounded-2xl shadow-card w-full max-w-md mx-auto h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>

      <section className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="section-subtitle text-center">Our Journey</p>
          <h2 className="section-title text-center">Milestones Over the Years</h2>
        </div>
        <Timeline />
      </section>
    </>
  )
}

export default About