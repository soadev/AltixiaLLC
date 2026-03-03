import { Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { useLanguage } from '../contexts/LanguageContext'

export function Footer() {
  const content = useContent()
  const { language } = useLanguage()
  const { logo, description, columns, contact, copyright } = content.footer

  return (
    <footer className="bg-[#333A49] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <img
              src="/logo/logoaltixia.svg"
              alt={logo}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {description}
            </p>
          </div>

          {/* Dynamic Columns (Navigation & Services) */}
          {columns.map((column, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#9BCAEF]">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#9BCAEF] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#9BCAEF]">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#9BCAEF] shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#9BCAEF] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#9BCAEF] shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-snug">
                  {contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs tracking-wide">
            {copyright}
          </p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              {language === 'fr' ? 'Mentions légales' : 'Legal Notice'}
            </Link>
            <Link to="/confidentialite" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              {language === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
