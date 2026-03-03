import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle, ArrowRight, Globe, Phone, ChevronDown } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollPosition } from '../hooks/useScrollPosition'

const WHATSAPP_URL = 'https://wa.me/13073105297'

function scrollToSection(href: string) {
  const id = href.replace('#', '')
  const element = document.getElementById(id)
  if (element) {
    const navbarHeight = 80
    const top = element.offsetTop - navbarHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export function Navbar() {
  const content = useContent()
  const { language, setLanguage } = useLanguage()
  const isScrolled = useScrollPosition(50)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Close services dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/' + href)
    } else {
      scrollToSection(href)
    }
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className={[
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-5 md:px-8',
          isScrolled
            ? 'py-4 bg-white/90 backdrop-blur-md border-b border-[#E8EDF2] shadow-sm'
            : 'py-6 bg-white border-b border-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* LEFT: LOGO */}
          <button onClick={handleLogoClick} className="shrink-0 bg-transparent border-none cursor-pointer p-0">
            <img
              src="/logo/logoaltixia.svg"
              alt="Altixia LLC"
              className="h-10 w-auto"
            />
          </button>

          {/* CENTER: NAV LINKS (Desktop) */}
          <div className="hidden lg:flex gap-6 xl:gap-8 items-center text-[#333A49] font-medium font-sans">
            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 hover:text-[#3877AF] transition-colors text-[15px] whitespace-nowrap bg-transparent border-none cursor-pointer font-bold text-[#3877AF]"
              >
                {language === 'fr' ? 'Nos offres' : 'Our Services'}
                <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 bg-white border border-[#E8EDF2] rounded-lg shadow-xl py-2 min-w-[220px] z-50"
                  >
                    <button
                      onClick={() => { handleNavClick('#services'); setIsServicesOpen(false) }}
                      className="block w-full text-left px-4 py-3 text-sm text-[#333A49] hover:bg-[#F7F9FC] hover:text-[#3877AF] transition-colors bg-transparent border-none cursor-pointer"
                    >
                      {language === 'fr' ? 'Tous les services' : 'All Services'}
                    </button>
                    <button
                      onClick={() => { navigate('/llc'); setIsServicesOpen(false) }}
                      className="block w-full text-left px-4 py-3 text-sm text-[#333A49] hover:bg-[#F7F9FC] hover:text-[#3877AF] transition-colors bg-transparent border-none cursor-pointer"
                    >
                      {language === 'fr' ? 'Création de LLC' : 'LLC Formation'}
                    </button>
                    <button
                      onClick={() => { navigate('/itin'); setIsServicesOpen(false) }}
                      className="block w-full text-left px-4 py-3 text-sm text-[#333A49] hover:bg-[#F7F9FC] hover:text-[#3877AF] transition-colors bg-transparent border-none cursor-pointer"
                    >
                      {language === 'fr' ? 'Demande d\'ITIN' : 'ITIN Application'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {content.navbar.links.filter(l => l.href !== '#services').map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#3877AF] transition-colors text-[15px] whitespace-nowrap bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* RIGHT: ACTIONS (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone Icon */}
            <a
              href={`tel:${content.navbar.phone.replace(/\s/g, '')}`}
              className="p-2 text-[#3877AF] hover:bg-[#F7F9FC] rounded-lg transition-colors"
              title={content.navbar.phone}
            >
              <Phone size={20} />
            </a>

            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg hover:bg-[#20bd5a] transition-colors font-bold font-sans text-sm"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            {/* Language Toggle */}
            <div className="flex bg-[#F7F9FC] border border-[#E8EDF2] rounded-full p-1 h-9 w-[76px]">
              <button
                onClick={() => setLanguage('fr')}
                className={[
                  'flex-1 rounded-full text-[11px] font-bold transition-all',
                  language === 'fr'
                    ? 'bg-[#3877AF] text-white shadow-sm'
                    : 'text-[#333A49] hover:bg-[#E8EDF2]',
                ].join(' ')}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={[
                  'flex-1 rounded-full text-[11px] font-bold transition-all',
                  language === 'en'
                    ? 'bg-[#3877AF] text-white shadow-sm'
                    : 'text-[#333A49] hover:bg-[#E8EDF2]',
                ].join(' ')}
              >
                EN
              </button>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-[#333A49] hover:bg-[#F7F9FC] rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className={isScrolled ? 'h-[72px]' : 'h-[88px]'} />

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-[#333A49]/40 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white z-[60] shadow-2xl lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 flex justify-between items-center border-b border-[#E8EDF2]">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo/logoaltixia.svg"
                    alt="Altixia LLC"
                    className="h-8 w-auto"
                  />
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-[#333A49] hover:bg-[#F7F9FC] rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto p-6 space-y-1">
                {/* Services Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full text-left py-4 text-[#3877AF] font-bold text-lg font-sans bg-transparent border-none cursor-pointer"
                  >
                    {language === 'fr' ? 'Nos offres' : 'Our Services'}
                    <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 space-y-1"
                      >
                        <button
                          onClick={() => handleNavClick('#services')}
                          className="block w-full text-left py-3 text-[#333A49] font-medium hover:text-[#3877AF] transition-colors text-base font-sans bg-transparent border-none cursor-pointer"
                        >
                          {language === 'fr' ? 'Tous les services' : 'All Services'}
                        </button>
                        <button
                          onClick={() => { navigate('/llc'); setIsMenuOpen(false) }}
                          className="block w-full text-left py-3 text-[#333A49] font-medium hover:text-[#3877AF] transition-colors text-base font-sans bg-transparent border-none cursor-pointer"
                        >
                          {language === 'fr' ? 'Création de LLC' : 'LLC Formation'}
                        </button>
                        <button
                          onClick={() => { navigate('/itin'); setIsMenuOpen(false) }}
                          className="block w-full text-left py-3 text-[#333A49] font-medium hover:text-[#3877AF] transition-colors text-base font-sans bg-transparent border-none cursor-pointer"
                        >
                          {language === 'fr' ? 'Demande d\'ITIN' : 'ITIN Application'}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {content.navbar.links.filter(l => l.href !== '#services').map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left py-4 text-[#333A49] font-medium hover:text-[#3877AF] transition-colors text-lg border-b border-transparent font-sans bg-transparent border-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-[#F7F9FC] border-t border-[#E8EDF2] space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <a
                    href={`tel:${content.navbar.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-[#333A49] font-bold text-sm"
                  >
                    <Phone size={20} className="text-[#3877AF]" />
                    {content.navbar.phone}
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-bold text-sm"
                  >
                    <MessageCircle size={18} fill="white" className="text-[#25D366]" />
                    WhatsApp
                  </a>
                </div>

                <a
                  href={content.navbar.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#3877AF] text-white py-4 rounded-xl font-bold hover:bg-[#2D6193] transition-colors"
                >
                  {content.navbar.ctaLabel} <ArrowRight size={18} />
                </a>

                {/* Language Selector Mobile */}
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2 text-[#6B7280] font-sans font-medium text-sm">
                    <Globe size={16} />
                    <span>{language === 'fr' ? 'Langue' : 'Language'}</span>
                  </div>
                  <div className="flex bg-white border border-[#E8EDF2] rounded-full p-1 h-10 w-[100px]">
                    <button
                      onClick={() => setLanguage('fr')}
                      className={[
                        'flex-1 rounded-full text-xs font-bold transition-all',
                        language === 'fr' ? 'bg-[#3877AF] text-white' : 'text-[#333A49]',
                      ].join(' ')}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={[
                        'flex-1 rounded-full text-xs font-bold transition-all',
                        language === 'en' ? 'bg-[#3877AF] text-white' : 'text-[#333A49]',
                      ].join(' ')}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
