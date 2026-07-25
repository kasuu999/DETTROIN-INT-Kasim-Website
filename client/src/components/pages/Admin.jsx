import React, { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Lock, LogOut, Trash2, PlusCircle, Users, Megaphone, CheckCircle2, AlertCircle } from 'lucide-react'
import { useAdminAuth } from '../context/AdminAuthContext'
import { getEnquiries, getNotices, addNotice, deleteNotice } from '../services/api'
import Loader from '../components/Loader'

const AdminLogin = () => {
  const { login, loginError } = useAdminAuth()
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(password)
  }

  return (
    <section className="min-h-screen flex items-center justify-center gradient-navy px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-card p-8 w-full max-w-sm"
      >
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-navy-50 mx-auto mb-5">
          <Lock className="h-7 w-7 text-navy" />
        </div>
        <h1 className="text-xl font-semibold text-navy text-center mb-1">Admin Login</h1>
        <p className="text-sm text-navy-400 text-center mb-6">Enter the admin password to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="admin-password" className="label-field">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Enter admin password"
              autoFocus
            />
          </div>
          {loginError && <p className="text-red-500 text-xs">{loginError}</p>}
          <button type="submit" className="btn-primary w-full justify-center">
            Login
          </button>
        </form>
      </motion.div>
    </section>
  )
}

const AdminDashboard = () => {
  const { logout } = useAdminAuth()
  const [activeTab, setActiveTab] = useState('enquiries')

  const [enquiries, setEnquiries] = useState([])
  const [enquiriesLoading, setEnquiriesLoading] = useState(true)
  const [enquiriesError, setEnquiriesError] = useState('')

  const [notices, setNotices] = useState([])
  const [noticesLoading, setNoticesLoading] = useState(true)
  const [noticesError, setNoticesError] = useState('')

  const [noticeForm, setNoticeForm] = useState({ title: '', description: '' })
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState(null)

  const loadEnquiries = useCallback(async () => {
    setEnquiriesLoading(true)
    setEnquiriesError('')
    try {
      const data = await getEnquiries()
      setEnquiries(data?.data || data || [])
    } catch (err) {
      setEnquiriesError(err.message || 'Failed to load enquiries.')
    } finally {
      setEnquiriesLoading(false)
    }
  }, [])

  const loadNotices = useCallback(async () => {
    setNoticesLoading(true)
    setNoticesError('')
    try {
      const data = await getNotices()
      const list = data?.data || data || []
      setNotices([...list].sort((a, b) => new Date(b.date) - new Date(a.date)))
    } catch (err) {
      setNoticesError(err.message || 'Failed to load notices.')
    } finally {
      setNoticesLoading(false)
    }
  }, [])

  useEffect(() => {
    loadEnquiries()
    loadNotices()
  }, [loadEnquiries, loadNotices])

  const showToast = (type, message) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 5000)
  }

  const handleNoticeChange = (e) => {
    const { name, value } = e.target
    setNoticeForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddNotice = async (e) => {
    e.preventDefault()
    if (!noticeForm.title.trim() || !noticeForm.description.trim()) {
      showToast('error', 'Please fill in both title and description.')
      return
    }
    setSubmitting(true)
    try {
      await addNotice(noticeForm)
      setNoticeForm({ title: '', description: '' })
      showToast('success', 'Notice added successfully.')
      loadNotices()
    } catch (err) {
      showToast('error', err.message || 'Failed to add notice.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDeleteNotice = async (id) => {
    if (!window.confirm('Are you sure you want to delete this notice?')) return
    try {
      await deleteNotice(id)
      showToast('success', 'Notice deleted successfully.')
      setNotices((prev) => prev.filter((n) => n._id !== id))
    } catch (err) {
      showToast('error', err.message || 'Failed to delete notice.')
    }
  }

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
    } catch {
      return dateString
    }
  }

  return (
    <section className="min-h-screen bg-navy-50 pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="section-subtitle">Admin Panel</p>
            <h1 className="text-3xl font-bold text-navy">Dashboard</h1>
          </div>
          <button onClick={logout} className="btn-outline-navy w-fit">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

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

        <div className="flex gap-2 mb-8 border-b border-navy-100">
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'enquiries' ? 'border-gold text-navy' : 'border-transparent text-navy-300 hover:text-navy'
            }`}
          >
            <Users className="h-4 w-4" /> Enquiries
          </button>
          <button
            onClick={() => setActiveTab('notices')}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'notices' ? 'border-gold text-navy' : 'border-transparent text-navy-300 hover:text-navy'
            }`}
          >
            <Megaphone className="h-4 w-4" /> Notices
          </button>
        </div>

        {activeTab === 'enquiries' && (
          <div className="card overflow-x-auto">
            <h2 className="text-lg font-semibold text-navy mb-4">Admission Enquiries</h2>
            {enquiriesLoading && <Loader label="Loading enquiries..." />}
            {!enquiriesLoading && enquiriesError && (
              <p className="text-red-500 bg-red-50 rounded-lg py-4 px-4 text-sm">{enquiriesError}</p>
            )}
            {!enquiriesLoading && !enquiriesError && enquiries.length === 0 && (
              <p className="text-navy-400 text-sm py-6 text-center">No enquiries submitted yet.</p>
            )}
            {!enquiriesLoading && !enquiriesError && enquiries.length > 0 && (
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="text-left text-navy-400 border-b border-navy-100">
                    <th className="py-3 pr-4 font-semibold">Student</th>
                    <th className="py-3 pr-4 font-semibold">Parent</th>
                    <th className="py-3 pr-4 font-semibold">Phone</th>
                    <th className="py-3 pr-4 font-semibold">Email</th>
                    <th className="py-3 pr-4 font-semibold">Class</th>
                    <th className="py-3 pr-4 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry._id} className="border-b border-navy-50 last:border-0">
                      <td className="py-3 pr-4 text-navy font-medium">{enquiry.studentName}</td>
                      <td className="py-3 pr-4 text-navy-500">{enquiry.parentName}</td>
                      <td className="py-3 pr-4 text-navy-500">{enquiry.phone}</td>
                      <td className="py-3 pr-4 text-navy-500">{enquiry.email}</td>
                      <td className="py-3 pr-4 text-navy-500">{enquiry.classApplying}</td>
                      <td className="py-3 pr-4 text-navy-500 max-w-xs truncate" title={enquiry.message}>
                        {enquiry.message || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === 'notices' && (
          <div className="space-y-8">
            <div className="card">
              <h2 className="text-lg font-semibold text-navy mb-4">Add New Notice</h2>
              <form onSubmit={handleAddNotice} className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                <div>
                  <label htmlFor="notice-title" className="label-field">Title</label>
                  <input
                    id="notice-title"
                    name="title"
                    type="text"
                    value={noticeForm.title}
                    onChange={handleNoticeChange}
                    className="input-field"
                    placeholder="Notice title"
                  />
                </div>
                <div>
                  <label htmlFor="notice-description" className="label-field">Description</label>
                  <input
                    id="notice-description"
                    name="description"
                    type="text"
                    value={noticeForm.description}
                    onChange={handleNoticeChange}
                    className="input-field"
                    placeholder="Notice description"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                    <PlusCircle className="h-4 w-4" />
                    {submitting ? 'Adding...' : 'Add Notice'}
                  </button>
                </div>
              </form>
            </div>

            <div className="card overflow-x-auto">
              <h2 className="text-lg font-semibold text-navy mb-4">All Notices</h2>
              {noticesLoading && <Loader label="Loading notices..." />}
              {!noticesLoading && noticesError && (
                <p className="text-red-500 bg-red-50 rounded-lg py-4 px-4 text-sm">{noticesError}</p>
              )}
              {!noticesLoading && !noticesError && notices.length === 0 && (
                <p className="text-navy-400 text-sm py-6 text-center">No notices found.</p>
              )}
              {!noticesLoading && !noticesError && notices.length > 0 && (
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="text-left text-navy-400 border-b border-navy-100">
                      <th className="py-3 pr-4 font-semibold">Title</th>
                      <th className="py-3 pr-4 font-semibold">Description</th>
                      <th className="py-3 pr-4 font-semibold">Date</th>
                      <th className="py-3 pr-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notices.map((notice) => (
                      <tr key={notice._id} className="border-b border-navy-50 last:border-0">
                        <td className="py-3 pr-4 text-navy font-medium">{notice.title}</td>
                        <td className="py-3 pr-4 text-navy-500 max-w-xs truncate" title={notice.description}>
                          {notice.description}
                        </td>
                        <td className="py-3 pr-4 text-navy-500 whitespace-nowrap">{formatDate(notice.date)}</td>
                        <td className="py-3 pr-4">
                          <button
                            onClick={() => handleDeleteNotice(notice._id)}
                            aria-label={`Delete notice ${notice.title}`}
                            className="flex items-center gap-1 text-red-500 hover:text-red-600 font-medium text-xs"
                          >
                            <Trash2 className="h-4 w-4" /> Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

const Admin = () => {
  const { isAdminLoggedIn } = useAdminAuth()

  return (
    <>
      <Helmet>
        <title>Admin Panel | Excellence International School</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {isAdminLoggedIn ? <AdminDashboard /> : <AdminLogin />}
    </>
  )
}

export default Admin