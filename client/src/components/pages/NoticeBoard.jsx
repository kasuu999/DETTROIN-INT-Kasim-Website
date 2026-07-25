import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { getNotices } from '../services/api'
import NoticeCard from '../components/NoticeCard'
import Loader from '../components/Loader'

const NoticeBoard = () => {
  const [notices, setNotices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true
    const fetchNotices = async () => {
      setLoading(true)
      setError('')
      try {
        const data = await getNotices()
        const list = data?.data || data || []
        const sorted = [...list].sort((a, b) => new Date(b.date) - new Date(a.date))
        if (isMounted) setNotices(sorted)
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
    <>
      <Helmet>
        <title>Notice Board | Excellence International School</title>
        <meta
          name="description"
          content="Stay updated with the latest announcements, events, and important notices from Excellence International School."
        />
      </Helmet>

      <section className="gradient-navy pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="section-subtitle text-gold">Announcements</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Notice Board</h1>
          <p className="text-navy-100 mt-4">Stay informed with the latest updates and announcements.</p>
        </div>
      </section>

      <section className="container-section">
        {loading && <Loader label="Loading notices..." fullScreen />}

        {!loading && error && (
          <p className="text-center text-red-500 bg-red-50 rounded-lg py-6 px-4 max-w-xl mx-auto">{error}</p>
        )}

        {!loading && !error && notices.length === 0 && (
          <p className="text-center text-navy-400 py-10">No notices have been posted yet. Please check back later.</p>
        )}

        {!loading && !error && notices.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-5">
            {notices.map((notice, index) => (
              <motion.div
                key={notice._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06 }}
              >
                <NoticeCard notice={notice} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default NoticeBoard