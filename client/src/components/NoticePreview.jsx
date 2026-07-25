import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Megaphone } from 'lucide-react'
import { getNotices } from '../services/api'
import NoticeCard from './NoticeCard'
import Loader from './Loader'

const NoticePreview = () => {
  const [notices, setNotices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true
    const fetchNotices = async () => {
      try {
        const data = await getNotices()
        if (isMounted) {
          setNotices((data?.data || data || []).slice(0, 3))
        }
      } catch (err) {
        if (isMounted) setError(err.message || 'Unable to load notices right now.')
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    fetchNotices()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="container-section">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <p className="section-subtitle flex items-center gap-2">
            <Megaphone className="h-4 w-4" /> Latest Updates
          </p>
          <h2 className="section-title">Notice Board</h2>
        </div>
        <Link to="/notices" className="btn-outline-navy w-fit">
          View All Notices
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {loading && <Loader label="Loading latest notices..." />}

      {!loading && error && (
        <p className="text-center text-red-500 bg-red-50 rounded-lg py-6 px-4">{error}</p>
      )}

      {!loading && !error && notices.length === 0 && (
        <p className="text-center text-navy-400 py-6">No notices available at the moment.</p>
      )}

      {!loading && !error && notices.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notices.map((notice, index) => (
            <motion.div
              key={notice._id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NoticeCard notice={notice} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

export default NoticePreview