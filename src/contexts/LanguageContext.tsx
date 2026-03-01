import { createContext, useContext, useState, useMemo, type ReactNode } from 'react'
import type { Language } from '../types/content'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'altixia-language'

function detectInitialLanguage(): Language {
  // Check localStorage first
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') {
      return stored
    }
  } catch {
    // localStorage not available
  }

  // Check browser language
  try {
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('en')) return 'en'
    if (browserLang.startsWith('fr')) return 'fr'
  } catch {
    // navigator not available
  }

  // Default to French
  return 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage)

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage not available
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
