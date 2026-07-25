import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FileText, ClipboardCheck, UserCheck, Award } from 'lucide-react'
import EnquiryForm from '../components/EnquiryForm'

const steps = [
  { icon: FileText, title: 'Submit Enquiry', description: 'Fill out our online enquiry form with student and parent details.' },
  { icon: ClipboardCheck, title: 'Document Review', description: 'Our admissions team reviews your application and required documents.' },
  { icon: UserCheck, title: 'Interaction/Assessment', description: 'Student and parent interaction session scheduled with our faculty.' },
  { icon: Award, title: 'Confirmation', description: 'Receive admission confirmation and complete the enrollment formalities.' },
]

const Admissions = () => {
  return (
    <>
      <Helmet>
        <title>Admissions | Excellence International School</title>
        <meta
          name="description"
          content="Apply for admission at Excellence International School. Learn about our simple admission process and submit your enquiry today."
        />
      </Helmet>

      <section className="gradient-navy pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="section-subtitle text-gold">Admissions</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Join Our School Family</h1>
          <p className="text-navy-100 mt-4">
            We welcome curious minds and eager learners. Begin your admission journey with us today.
          </p>
        </div>
      </section>

      <section className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-subtitle text-center">How It Works</p>
          <h2 className="section-title text-center">Our Admission Process</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-navy text-gold mx-auto mb-4">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="text-gold-600 font-bold text-sm">Step {index + 1}</span>
              <h3 className="text-lg font-semibold text-navy mt-1 mb-2">{step.title}</h3>
              <p className="text-navy-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-subtitle text-center">Get Started</p>
            <h2 className="section-title text-center">Submit Your Enquiry</h2>
            <p className="text-navy-400">
              Fill in the form below and our admissions team will get back to you within 48 hours.
            </p>
          </div>
          <div className="card">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Admissions