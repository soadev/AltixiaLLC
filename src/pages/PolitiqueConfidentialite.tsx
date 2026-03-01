import { useLanguage } from '../contexts/LanguageContext'
import { SEOHead } from '../components/SEOHead'

export function PolitiqueConfidentialite() {
  const { language } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-20">
      <SEOHead titleFr="Politique de confidentialite" titleEn="Privacy Policy" descriptionFr="Politique de confidentialite Altixia LLC" descriptionEn="Privacy policy Altixia LLC" path="/confidentialite" />
      {language === 'fr' ? (
        <>
          <h1 className="text-3xl font-bold text-[#333A49] mb-10">Politique de confidentialite</h1>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Collecte des donnees</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Altixia LLC ne collecte aucune donnee personnelle via ce site web. Aucun formulaire de contact, cookie de suivi ou outil d'analyse tiers n'est utilise. Les echanges se font exclusivement via WhatsApp ou email, a votre initiative.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Donnees transmises volontairement</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Lorsque vous nous contactez par WhatsApp ou email, vous pouvez etre amene a partager des informations personnelles (nom, prenom, situation fiscale, documents d'identite). Ces informations sont traitees de maniere strictement confidentielle et ne sont jamais partagees avec des tiers sans votre consentement explicite.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Protection des documents</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Vos pieces d'identite, passeports et justificatifs ne quittent jamais notre equipe interne. Des contrats de confidentialite stricts sont signes avec chaque prestataire externe intervenant dans le processus de creation de votre LLC.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Cookies</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Ce site n'utilise aucun cookie de suivi, cookie publicitaire ou outil d'analyse comportementale. Seuls des cookies techniques strictement necessaires au fonctionnement du site peuvent etre utilises.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Vos droits</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Vous disposez d'un droit d'acces, de rectification et de suppression de vos donnees personnelles. Pour exercer ces droits, contactez-nous a claude@altixia.com.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Contact</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Pour toute question relative a la protection de vos donnees : claude@altixia.com
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-[#333A49] mb-10">Privacy Policy</h1>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Data Collection</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Altixia LLC does not collect any personal data through this website. No contact forms, tracking cookies, or third-party analytics tools are used. All exchanges take place exclusively via WhatsApp or email, at your initiative.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Voluntarily Shared Data</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            When you contact us via WhatsApp or email, you may share personal information (name, tax situation, identity documents). This information is treated with strict confidentiality and is never shared with third parties without your explicit consent.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Document Protection</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Your IDs, passports, and supporting documents never leave our internal team. Strict confidentiality agreements are signed with every external provider involved in your LLC creation process.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Cookies</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            This site does not use any tracking cookies, advertising cookies, or behavioral analytics tools. Only strictly necessary technical cookies may be used for site functionality.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Your Rights</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            You have the right to access, rectify, and delete your personal data. To exercise these rights, contact us at claude@altixia.com.
          </p>

          <h2 className="text-xl font-bold text-[#333A49] mt-8 mb-4">Contact</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            For any questions regarding data protection: claude@altixia.com
          </p>
        </>
      )}
    </div>
  )
}
