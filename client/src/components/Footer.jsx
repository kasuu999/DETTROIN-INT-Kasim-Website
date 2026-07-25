import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Users, GraduationCap as Teacher, CalendarCheck, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Students', value: 2000, suffix: '+' },
  { icon: Teacher, label: 'Teachers', value: 150, suffix: '+' },
  { icon: CalendarCheck, label: 'Years of Excellence', value: 25, suffix: '+' },
  { icon: TrendingUp, label: 'Results', value: 98, suffix: '%' },
]

const Counter = ({ value, suffix }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {display}
      {suffix}
    </span>
  )
}

const StatsCounter = () => {
  return (
    <section className="bg-navy-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gold/10 mb-2">
                <stat.icon className="h-7 w-7 text-gold" />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-navy-200 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default  