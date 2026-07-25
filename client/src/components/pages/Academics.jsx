import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import FacultyCard from '../components/FacultyCard'

const gradeGroups = [
  {
    id: 'primary',
    name: 'Primary (Grades 1-5)',
    curriculum:
      'A play-based, inquiry-driven curriculum focused on literacy, numeracy, and social-emotional development, building strong foundations for lifelong learning.',
    subjects: ['English', 'Mathematics', 'Environmental Studies', 'Art & Craft', 'Physical Education'],
  },
  {
    id: 'middle',
    name: 'Middle School (Grades 6-8)',
    curriculum:
      'A balanced curriculum introducing science, social studies, and technology alongside core subjects, encouraging critical thinking and collaborative projects.',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Second Language'],
  },
  {
    id: 'secondary',
    name: 'Secondary (Grades 9-10)',
    curriculum:
      'Rigorous board-aligned curriculum preparing students for standardized examinations while offering elective specializations and career guidance.',
    subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Science', 'Computer Applications'],
  },
  {
    id: 'senior-secondary',
    name: 'Senior Secondary (Grades 11-12)',
    curriculum:
      'Stream-based specialization (Science, Commerce, Humanities) with advanced coursework, college counseling, and exam preparation support.',
    subjects: ['Physics', 'Chemistry', 'Mathematics/Biology', 'Economics', 'Business Studies', 'English'],
  },
]

const faculty = [
  { name: 'Dr. Emily Carter', subject: 'Physics', qualification: 'Ph.D. in Physics', photoSeed: 'faculty1' },
  { name: 'Mr. James Wilson', subject: 'Mathematics', qualification: 'M.Sc. Mathematics', photoSeed: 'faculty2' },
  { name: 'Ms. Sofia Martinez', subject: 'English Literature', qualification: 'M.A. English', photoSeed: 'faculty3' },
  { name: 'Mr. Daniel Kim', subject: 'Computer Science', qualification: 'M.Tech CSE', photoSeed: 'faculty4' },
  { name: 'Dr. Ayesha Khan', subject: 'Biology', qualification: 'Ph.D. in Biology', photoSeed: 'faculty5' },
  { name: 'Mr. Robert Lee', subject: 'History', qualification: 'M.A. History', photoSeed: 'faculty6' },
  { name: 'Ms. Grace Thompson', subject: 'Chemistry', qualification: 'M.Sc. Chemistry', photoSeed: 'faculty7' },
  { name: 'Mr. Kevin Osei', subject: 'Physical Education', qualification: 'B.P.Ed', photoSeed: 'faculty8' },
]

const Academics = () => {
  const [openId, setOpenId] = useState('primary')

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <>
      <Helmet>
        <title>Academics | Excellence International School</title>
        <meta
          name="description"
          content="Explore our grade-wise curriculum from Primary to Senior Secondary and meet our dedicated, highly qualified faculty."
        />
      </Helmet>

      <section className="gradient-navy pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="section-subtitle text-gold">Academics</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Curriculum</h1>
          <p className="text-navy-100 mt-4">
            A structured, progressive academic journey from Primary through Senior Secondary.
          </p>
        </div>
      </section>

      <section className="container-section">
        <div className="max-w-3xl mx-auto space-y-4">
          {gradeGroups.map((group) => (
            <div key={group.id} className="border border-navy-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(group.id)}
                className="w-full flex items-center justify-between px-6 py-5 bg-navy-50 hover:bg-navy-100 transition-colors text-left"
                aria-expanded={openId === group.id}
              >
                <span className="font-semibold text-navy">{group.name}</span>
                <ChevronDown
                  className={`h-5 w-5 text-navy transition-transform duration-300 ${openId === group.id ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openId === group.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-white">
                      <p className="text-navy-400 leading-relaxed mb-4">{group.curriculum}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gold-50 text-gold-700"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-subtitle text-center">Meet Our Educators</p>
            <h2 className="section-title text-center">Our Expert Faculty</h2>
            <p className="text-navy-400">
              Passionate, highly qualified educators dedicated to unlocking every student's potential.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {faculty.map((member, index) => (
              <FacultyCard key={member.name} faculty={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Academics