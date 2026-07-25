import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Notice Board', path: '/notices' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-gold-600' : scrolled ? 'text-navy hover:text-gold-600' : 'text-white hover:text-gold-200'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-2 z-50" aria-label="Excellence International School home">
            <div className={`flex items-center justify-center h-10 w-10 rounded-full ${scrolled ? 'bg-navy' : 'bg-gold'}`}>
              <GraduationCap className={`h-6 w-6 ${scrolled ? 'text-gold' : 'text-navy'}`} />
            </div>
            <span className={`font-serif font-bold text-lg leading-tight ${scrolled ? 'text-navy' : 'text-white'}`}>
              Excellence
              <span className="block text-xs font-sans font-medium tracking-widest uppercase">
                International School
              </span>
            </span>
          </NavLink>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass} end={link.path === '/'}>
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/admissions" className="btn-primary !py-2 !px-5 text-sm">
              Apply Now
            </NavLink>
          </div>

          <button
            className="lg:hidden z-50 p-2"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={`h-7 w-7 ${scrolled || isOpen ? 'text-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`h-7 w-7 ${scrolled ? 'text-navy' : 'text-white'}`} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-lg font-medium transition-colors ${
                      isActive ? 'bg-navy-50 text-gold-600' : 'text-navy hover:bg-navy-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-2 justify-center"
              >
                Apply Now
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar