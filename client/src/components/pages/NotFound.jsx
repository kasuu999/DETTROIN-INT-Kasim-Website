import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Home as HomeIcon, GraduationCap } from 'lucide-react'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Excellence International School</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center gradient-navy px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gold mx-auto mb-6">
            <GraduationCap className="h-9 w-9 text-navy" />
          </div>
          <h1 className="text-7xl font-bold text-white mb-4">404</h1>
          <p className="text-navy-100 text-lg mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary">
            <HomeIcon className="h-4 w-4" />
            Go Home
          </Link>
        </motion.div>
      </section>
    </>
  )
}

export default NotFound