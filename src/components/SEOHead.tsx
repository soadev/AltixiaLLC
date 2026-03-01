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
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
