import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const contactDetails = [
  { icon: MapPin, label: 'Address', value: '123 Knowledge Avenue, Excellence City, EC 45678' },
  { icon: Phone, label: 'Phone', value: '+1 (123) 456-7890' },
  { icon: Mail, label: 'Email', value: 'info@excellenceschool.edu' },
  { icon: Clock, label: 'Office Hours', value: 'Mon - Fri: 8:00 AM - 4:00 PM' },
]

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Excellence International School</title>
        <meta
          name="description"
          content="Get in touch with Excellence International School. Find our address, phone number, email, and send us a message."
        />
      </Helmet>

      <section className="gradient-navy pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="section-subtitle text-gold">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">We'd Love to Hear From You</h1>
          <p className="text-navy-100 mt-4">
            Reach out with any questions about admissions, academics, or general enquiries.
          </p>
        </div>
      </section>

      <section className="container-section grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {contactDetails.map((item) => (
              <div key={item.label} className="card">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-navy-50 mb-3">
                  <item.icon className="h-6 w-6 text-navy" />
                </div>
                <p className="text-sm font-semibold text-navy">{item.label}</p>
                <p className="text-sm text-navy-400 mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-card aspect-video-custom">
            <iframe
              title="Excellence International School Location"
              src="https://www.google.com/maps?q=New%20York&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <h2 className="text-xl font-semibold text-navy mb-5">Send Us a Message</h2>
          <ContactForm />
        </motion.div>
      </section>
    </>
  )
}

export default Contact