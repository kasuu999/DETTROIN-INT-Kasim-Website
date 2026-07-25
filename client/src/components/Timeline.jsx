import React from 'react'
import { motion } from 'framer-motion'
import { Flag } from 'lucide-react'

const milestones = [
  { year: '1999', title: 'School Founded', description: 'Excellence International School opens its doors with just 50 students.' },
  { year: '2005', title: 'New Campus', description: 'Expanded to a 10-acre campus with modern classrooms and labs.' },
  { year: '2012', title: 'International Accreditation', description: 'Recognized as an internationally accredited institution.' },
  { year: '2018', title: 'STEM Center Launch', description: 'Opened a state-of-the-art STEM and Robotics innovation center.' },
  { year: '2024', title: '25 Years of Excellence', description: 'Celebrating over two decades of academic achievement and growth.' },
]

const Timeline = () => {
  return (
    <div className="relative max-w-3xl mx-auto py-8">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-100 md:-translate-x-1/2" aria-hidden="true" />

      <div className="space-y-10">
        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0
          return (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className={`relative flex items-start md:items-center gap-6 pl-12 md:pl-0 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full bg-gold shadow-card z-10">
                <Flag className="h-4 w-4 text-navy" />
              </div>

              <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="card inline-block text-left w-full">
                  <span className="text-gold-600 font-bold text-lg">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-navy mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-sm text-navy-400 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline