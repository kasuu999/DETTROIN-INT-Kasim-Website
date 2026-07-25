import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { submitEnquiry } from '../services/api'

const initialState = {
  studentName: '',
  parentName: '',
  phone: '',
  email: '',
  classApplying: '',
  message: '',
}

const classOptions = [
  'Pre-Nursery', 'Nursery', 'KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4',
  'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
]

const validate = (values) => {
  const errors = {}
  if (!values.studentName.trim()) errors.studentName = 'Student name is required'
  if (!values.parentName.trim()) errors.parentName = 'Parent/Guardian name is required'
  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number'
  }
  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address'
  }
  if (!values.classApplying) errors.classApplying = 'Please select a class'
  return errors
}

const EnquiryForm = () => {
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
      await submitEnquiry(values)
      setToast({ type: 'success', message: 'Enquiry submitted successfully! We will contact you shortly.' })
      setValues(initialState)
    } catch (err) {
      setToast({ type: 'error', message: err.message || 'Failed to submit enquiry. Please try again.' })
    } finally {
      setSubmitting(false)
      setTimeout(() => setToast(null), 6000)
    }
  }

  return (
    <div className="relative">
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

      <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="studentName" className="label-field">Student Name *</label>
          <input
            id="studentName"
            name="studentName"
            type="text"
            value={values.studentName}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter student's full name"
            aria-invalid={!!errors.studentName}
            aria-describedby={errors.studentName ? 'studentName-error' : undefined}
          />
          {errors.studentName && <p id="studentName-error" className="text-red-500 text-xs mt-1">{errors.studentName}</p>}
        </div>

        <div>
          <label htmlFor="parentName" className="label-field">Parent/Guardian Name *</label>
          <input
            id="parentName"
            name="parentName"
            type="text"
            value={values.parentName}
            onChange={handleChange}
            className="input-field"
            placeholder="Enter parent or guardian name"
            aria-invalid={!!errors.parentName}
            aria-describedby={errors.parentName ? 'parentName-error' : undefined}
          />
          {errors.parentName && <p id="parentName-error" className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="label-field">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="+1 (123) 456-7890"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="label-field">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="input-field"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="classApplying" className="label-field">Class Applying For *</label>
          <select
            id="classApplying"
            name="classApplying"
            value={values.classApplying}
            onChange={handleChange}
            className="input-field"
            aria-invalid={!!errors.classApplying}
            aria-describedby={errors.classApplying ? 'classApplying-error' : undefined}
          >
            <option value="">Select a class</option>
            {classOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.classApplying && <p id="classApplying-error" className="text-red-500 text-xs mt-1">{errors.classApplying}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="label-field">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            className="input-field resize-none"
            placeholder="Any additional information you'd like to share..."
          />
        </div>

        <div className="sm:col-span-2">
          <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
            {submitting ? 'Submitting...' : 'Submit Enquiry'}
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default EnquiryForm