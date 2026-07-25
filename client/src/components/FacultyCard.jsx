import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Award } from 'lucide-react'

const FacultyCard = ({ faculty, index = 0 }) => {
  const { name, subject, qualification, photoSeed } = faculty

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card text-center"
    >
      <img
        src={`https://picsum.photos/seed/${photoSeed || name}/200/200`}
        alt={`Portrait of ${name}`}
        className="h-24 w-24 rounded-full object-cover mx-auto mb-4 border-4 border-navy-50"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-navy">{name}</h3>
      <p className="text-gold-600 font-medium text-sm mb-2">{subject}</p>
      <p className="text-navy-400 text-xs flex items-center justify-center gap-1 mb-3">
        <Award className="h-3.5 w-3.5" /> {qualification}
      </p>
      <div className="flex items-center justify-center gap-1 text-navy-300 text-xs">
        <Mail className="h-3.5 w-3.5" />
        <span>{name.split(' ')[0].toLowerCase()}@excellenceschool.edu</span>
      </div>
    </motion.div>
  )
}

export default FacultyCard