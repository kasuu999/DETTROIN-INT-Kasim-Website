import React from 'react'
import { motion } from 'framer-motion'
import { BookOpenCheck, Users2, Trophy, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: BookOpenCheck,
    title: 'Modern Curriculum',
    description: 'A future-focused curriculum blending academics, technology, and critical thinking skills.',
  },
  {
    icon: Users2,
    title: 'Expert Faculty',
    description: 'Highly qualified and passionate educators dedicated to every student\u2019s growth.',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Consistent record of academic excellence and outstanding board exam results.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Environment',
    description: 'A secure, nurturing campus with round-the-clock care for student wellbeing.',
  },
]

const FeatureCards = () => {
  return (
    <section className="container-section">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="section-subtitle text-center">Why Choose Us</p>
        <h2 className="section-title text-center">What Makes Us Different</h2>
        <p className="text-navy-400">
          We combine rigorous academics with a supportive community to help every child thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group"
          >
            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-navy-50 group-hover:bg-gold transition-colors duration-300 mb-4">
              <feature.icon className="h-7 w-7 text-navy group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-2">{feature.title}</h3>
            <p className="text-navy-400 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeatureCards