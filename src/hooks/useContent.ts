import { useLanguage } from '../contexts/LanguageContext'
import { contentFr } from '../data/content-fr'
import { contentEn } from '../data/content-en'
import type { Content } from '../types/content'

export function useContent(): Content {
  const { language } = useLanguage()
  return language === 'fr' ? contentFr : contentEn
}
