import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Parent of Grade 5 Student',
    quote:
      'Excellence International School has transformed my daughter\u2019s love for learning. The teachers genuinely care about every child\u2019s progress.',
    avatar: 'https://picsum.photos/seed/parent1/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'Alumnus, Class of 2020',
    quote:
      'The values and knowledge I gained here shaped who I am today. The faculty pushed me to achieve more than I thought possible.',
    avatar: 'https://picsum.photos/seed/alumnus1/100/100',
  },
  {
    name: 'Priya Sharma',
    role: 'Parent of Grade 8 Student',
    quote:
      'The holistic approach to education, from academics to extracurriculars, has helped my son grow into a confident young man.',
    avatar: 'https://picsum.photos/seed/parent2/100/100',
  },
  {
    name: 'David Okafor',
    role: 'Grade 11 Student',
    quote:
      'I love the supportive community here. Teachers are always available to help, and the campus feels like a second home.',
    avatar: 'https://picsum.photos/seed/student1/100/100',
  },
]

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const active = testimonials[index]

  return (
    <section className="bg-navy-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-subtitle text-center">Testimonials</p>
        <h2 className="section-title text-center mb-10">What Our Community Says</h2>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-card p-8 md:p-10 w-full"
            >
              <Quote className="h-8 w-8 text-gold mx-auto mb-4" />
              <p className="text-lg text-navy-700 leading-relaxed mb-6 italic">
                "{active.quote}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-gold"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="font-semibold text-navy">{active.name}</p>
                  <p className="text-sm text-navy-400">{active.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-gold' : 'w-2.5 bg-navy-200 hover:bg-navy-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel