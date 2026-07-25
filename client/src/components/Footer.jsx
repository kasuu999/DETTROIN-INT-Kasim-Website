import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Notice Board', path: '/notices' },
  { name: 'Contact', path: '/contact' },
]

const socials = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gold">
              <GraduationCap className="h-6 w-6 text-navy" />
            </div>
            <span className="font-serif font-bold text-lg text-white">
              Excellence
              <span className="block text-xs font-sans font-medium tracking-widest uppercase text-navy-200">
                International School
              </span>
            </span>
          </Link>
          <p className="text-sm text-navy-200 leading-relaxed">
            Nurturing minds, building futures. Committed to academic excellence and holistic growth since 1999.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-navy-200 hover:text-gold transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Info</h3>
          <ul className="space-y-3 text-sm text-navy-200">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <span>123 Knowledge Avenue, Excellence City, EC 45678</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gold shrink-0" />
              <a href="tel:+11234567890" className="hover:text-gold transition-colors">+1 (123) 456-7890</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gold shrink-0" />
              <a href="mailto:info@excellenceschool.edu" className="hover:text-gold transition-colors">info@excellenceschool.edu</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Follow Us</h3>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-navy-600 hover:bg-gold hover:text-navy text-white transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-navy-300">
          <p>&copy; {year} Excellence International School. All rights reserved.</p>
          <p>Designed with care for future leaders.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer