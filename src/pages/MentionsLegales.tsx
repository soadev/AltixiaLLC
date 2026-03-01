import { useLanguage } from '../contexts/LanguageContext'
import { SEOHead } from '../components/SEOHead'

export function MentionsLegales() {
  const { language } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-20">
      <SEOHead titleFr="Mentions legales" titleEn="Legal Notice" descriptionFr="Mentions legales Altixia LLC" descriptionEn="Legal notice Altixia LLC" path="/mentions-legales" />
      {language === 'fr' ? (
        <>
          <h1 className="text-3xl font-bold text-[#333A49] mb-10">Mentions legales</h1>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Editeur du site</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Altixia LLC<br />
            Societe enregistree dans l'Etat du Wyoming, USA<br />
            Email : claude@altixia.com<br />
            Telephone : +1 (307) 310-5297
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Hebergement</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Ce site est heberge par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Propriete intellectuelle</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            L'ensemble du contenu de ce site (textes, images, logos, icones) est la propriete exclusive d'Altixia LLC ou de ses partenaires. Toute reproduction, meme partielle, est interdite sans autorisation prealable.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Responsabilite</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Les informations fournies sur ce site le sont a titre indicatif et ne constituent pas un conseil juridique ou fiscal. Altixia LLC ne saurait etre tenue responsable des decisions prises sur la base de ces informations. Pour un conseil personnalise, veuillez nous contacter directement.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Droit applicable</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Le present site est soumis au droit americain. Tout litige relatif a son utilisation sera soumis aux tribunaux competents de l'Etat du Wyoming.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-[#333A49] mb-10">Legal Notice</h1>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Site Publisher</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Altixia LLC<br />
            Company registered in the State of Wyoming, USA<br />
            Email: claude@altixia.com<br />
            Phone: +1 (307) 310-5297
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Hosting</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Intellectual Property</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            All content on this site (text, images, logos, icons) is the exclusive property of Altixia LLC or its partners. Any reproduction, even partial, is prohibited without prior authorization.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Disclaimer</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Information provided on this site is for informational purposes only and does not constitute legal or tax advice. Altixia LLC cannot be held responsible for decisions made based on this information. For personalized advice, please contact us directly.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Applicable Law</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            This website is subject to US law. Any dispute relating to its use shall be submitted to the competent courts of the State of Wyoming.
          </p>
        </>
      )}
    </div>
  )
}
