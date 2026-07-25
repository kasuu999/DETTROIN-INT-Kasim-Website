import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const initialState = { name: '', email: '', message: '' }

const validate = (values) => {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required'
  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address'
  }
  if (!values.message.trim()) errors.message = 'Message is required'
  return errors
}

const ContactForm = () => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)
    setToast(null)
    try {
      // Simulated submission since there is no dedicated contact endpoint.
      await new Promise((resolve) => setTimeout(resolve, 800))
      setToast({ type: 'success', message: 'Thank you! Your message has been sent successfully.' })
      setValues(initialState)
    } catch (err) {
      setToast({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setSubmitting(false)
      setTimeout(() => setToast(null), 6000)
    }
  }

  return (
    <div>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 rounded-lg px-4 py-3 mb-6 text-sm font-medium ${
            toast.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
          }`}
          role="alert"
        >
          {toast.type === 'success' ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <AlertCircle className="h-5 w-5 shrink-0" />}
          {toast.message}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="label-field">Full Name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="label-field">Email Address *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="input-field"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-message" className="label-field">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            className="input-field resize-none"
            placeholder="How can we help you?"
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
          {submitting ? 'Sending...' : 'Send Message'}
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  )
}

export default ContactForm