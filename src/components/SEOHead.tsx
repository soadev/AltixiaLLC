import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../contexts/LanguageContext'

interface SEOHeadProps {
  titleFr: string
  titleEn: string
  descriptionFr: string
  descriptionEn: string
  path: string
}

export function SEOHead({ titleFr, titleEn, descriptionFr, descriptionEn, path }: SEOHeadProps) {
  const { language } = useLanguage()
  const title = language === 'fr' ? titleFr : titleEn
  const description = language === 'fr' ? descriptionFr : descriptionEn
  const url = `https://altixia.com${path}`

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Altixia LLC" />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'fr' ? 'en_US' : 'fr_FR'} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="fr" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </Helmet>
  )
}
