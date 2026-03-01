import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle, ArrowRight, Globe } from 'lucide-react'
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
  const navigate = useNavigate()
  const location = useLocation()

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
              src="/logo/logo-200.png"
              alt="Altixia LLC"
              className="h-10 w-auto"
            />
          </button>

          {/* CENTER: NAV LINKS (Desktop) */}
          <div className="hidden lg:flex gap-6 xl:gap-8 items-center text-[#333A49] font-medium font-sans">
            {content.navbar.links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#3877AF] transition-colors text-[15px] whitespace-nowrap bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/llc')}
              className="hover:text-[#3877AF] transition-colors text-[15px] whitespace-nowrap bg-transparent border-none cursor-pointer font-bold text-[#3877AF]"
            >
              {language === 'fr' ? 'Création LLC' : 'LLC Formation'}
            </button>
          </div>

          {/* RIGHT: ACTIONS (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {/* WhatsApp Link */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] hover:opacity-80 transition-opacity font-bold font-sans text-sm"
            >
              <MessageCircle size={20} fill="#25D366" className="text-white" />
              <span className="hidden xl:inline">{content.navbar.phone}</span>
            </a>

            {/* CTA Button */}
            <a
              href={content.navbar.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3877AF] text-white px-6 py-2.5 rounded font-bold hover:bg-[#2D6193] transition-colors shadow-lg shadow-[#3877AF]/10 text-sm font-sans"
            >
              {content.navbar.ctaLabel}
            </a>

            {/* Language Toggle */}
            <div className="flex bg-[#F7F9FC] border border-[#E8EDF2] rounded-full p-1 h-10 w-[84px]">
              <button
                onClick={() => setLanguage('fr')}
                className={[
                  'flex-1 rounded-full text-[12px] font-bold transition-all',
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
                  'flex-1 rounded-full text-[12px] font-bold transition-all',
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
                    src="/logo/logo-200.png"
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
                {content.navbar.links.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left py-4 text-[#333A49] font-medium hover:text-[#3877AF] transition-colors text-lg border-b border-transparent font-sans bg-transparent border-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => { navigate('/llc'); setIsMenuOpen(false) }}
                  className="block w-full text-left py-4 text-[#3877AF] font-bold hover:text-[#2D6193] transition-colors text-lg font-sans bg-transparent border-none cursor-pointer"
                >
                  {language === 'fr' ? 'Création LLC' : 'LLC Formation'}
                </button>
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-[#F7F9FC] border-t border-[#E8EDF2] space-y-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-[#25D366] font-bold text-center"
                >
                  <MessageCircle size={22} fill="#25D366" className="text-white" />
                  {content.navbar.phone}
                </a>

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
