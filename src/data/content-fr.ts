import type { Content } from '../types/content'

export const contentFr: Content = {
  navbar: {
    logo: 'Altixia LLC',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Pourquoi nous', href: '#pourquoi' },
      { label: 'Comment ça marche', href: '#comment' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    phone: '+1 (307) 310-5297',
    ctaLabel: 'Créer ma LLC',
    ctaHref: 'https://wa.me/13073105297',
  },

  hero: {
    badge: '🇺🇸 Société basée au Wyoming, USA',
    title: 'Votre LLC américaine clé en main. En français. En 48h.',
    subtitle:
      'Altixia accompagne les expatriés francophones de France, Belgique et Suisse dans la création de leur société américaine. LLC, EIN, ITIN, compte bancaire, comptabilité : tout est inclus, tout est géré, en français. 2 comptes bancaires + comptabilité de base.',
    ctaPrimary: {
      label: 'Créer ma LLC maintenant →',
      href: 'https://wa.me/13073105297',
    },
    ctaSecondary: {
      label: 'Discuter sur WhatsApp',
      href: 'https://wa.me/13073105297',
    },
    trustBadges: [
      { icon: 'Zap', text: 'LLC créée en 48h ouvrées' },
      { icon: 'CheckCircle', text: '100% de réussite pour les créations' },
      { icon: 'Globe', text: 'Accompagnement en français' },
    ],
  },

  trustBar: {
    items: [
      { icon: 'Clock', text: 'LLC créée en 48h ouvrées' },
      { icon: 'CheckCircle', text: '100% de réussite pour les créations' },
      { icon: 'Globe', text: 'Accompagnement en français' },
      { icon: 'MapPin', text: 'Basé au Wyoming, USA' },
      { icon: 'MessageCircle', text: 'Support WhatsApp 7j/7' },
    ],
  },

  problem: {
    sectionTitle: 'Créer une LLC seul ? C\'est le parcours du combattant.',
    subtitle:
      'La plupart des entrepreneurs qui veulent s\'expatrier vivent les mêmes galères avant de nous trouver.',
    cards: [
      {
        icon: 'Search',
        title: 'J\'ai lu tout et n\'importe quoi sur Internet',
        description:
          'Forums, articles, vidéos YouTube contradictoires... Impossible de démêler le vrai du faux sur les LLC, l\'ITIN et la fiscalité US.',
      },
      {
        icon: 'Bot',
        title: 'L\'IA m\'a donné des conseils complètement faux',
        description:
          'ChatGPT, Gemini, Claude... Les IA donnent des réponses confiantes mais souvent fausses sur la fiscalité internationale. Dangereux.',
      },
      {
        icon: 'AlertTriangle',
        title: 'J\'ai peur d\'être rattrapé par les impôts',
        description:
          'La grande angoisse : être redressé par le fisc français, belge ou suisse après avoir créé une LLC aux États-Unis.',
      },
      {
        icon: 'ShieldAlert',
        title: 'J\'ai confié mes documents à des inconnus',
        description:
          'Passeport, justificatif de domicile... Envoyés à des prestataires obscurs trouvés sur Internet. Risque de vol d\'identité.',
      },
      {
        icon: 'ThumbsDown',
        title: 'Je me suis fait avoir par un prestataire low-cost',
        description:
          'Services bâclés, aucun suivi, adresses partagées avec des centaines d\'autres LLC (ce qui bloque ensuite les comptes bancaires).',
      },
      {
        icon: 'HelpCircle',
        title: 'Je ne sais pas par où commencer',
        description:
          'LLC dans quel État ? EIN ? ITIN ? Compte bancaire ? Comptabilité ? Déclarations ? C\'est un labyrinthe administratif.',
      },
    ],
    transition:
      'C\'est exactement pour ça qu\'Altixia existe. Un seul interlocuteur, une solution complète, en français.',
  },

  services: {
    sectionTitle: 'Tout ce qu\'il vous faut pour lancer votre business aux USA.',
    subtitle:
      'De la création de votre LLC à la comptabilité en passant par l\'ITIN et l\'ouverture de compte bancaire, Altixia gère tout, dans votre langue.',
    cards: [
      {
        icon: 'Building',
        title: 'Création de LLC (USA)',
        description:
          'LLC anonyme au Wyoming, Delaware ou Nouveau-Mexique. Création en 24-48h ouvrées. Choix de l\'État selon votre situation, votre protection juridique et vos objectifs fiscaux.',
        badge: '⚡ Express 48h',
      },
      {
        icon: 'FileText',
        title: 'Obtention de l\'EIN',
        description:
          'Votre numéro d\'identification employeur (Employer Identification Number) auprès de l\'IRS, en 1 à 24h max après ouverture. Indispensable pour opérer, ouvrir un compte bancaire et facturer.',
        badge: 'Inclus dans le pack',
      },
      {
        icon: 'CreditCard',
        title: 'Demande d\'ITIN',
        description:
          'Votre numéro fiscal personnel américain (Individual Taxpayer Identification Number). Indispensable pour accéder au crédit US. Délivré en environ 7 semaines.',
        badge: '~7 semaines',
      },
      {
        icon: 'Wallet',
        title: 'Ouverture de compte bancaire US',
        description:
          'Assistance complète pour l\'ouverture de comptes bancaires américains et de PSP (Payment Service Providers) pour votre LLC. Sans les blocages liés aux adresses partagées. Changement d\'adresse, ajout d\'un nom commercial, changement des actionnaires etc...',
        badge: 'Accompagnement complet',
      },
      {
        icon: 'Calculator',
        title: 'Comptabilité US & Déclarations IRS',
        description:
          'Assistance pour la tenue comptable, déclarations annuelles, formulaires W-8BEN, W-8BEN-E, FBAR 114, et tous les formulaires IRS nécessaires etc...',
        badge: 'Ongoing',
      },
      {
        icon: 'ShieldCheck',
        title: 'Conseil fiscal continu',
        description:
          'Pas de one-shot. Accompagnement fiscal dans la durée, car une LLC doit vivre, tenir une comptabilité, effectuer des déclarations et éviter les erreurs coûteuses. Avec alertes et soutien.',
        badge: 'Suivi durable',
      },
      {
        icon: 'Globe',
        title: 'Création de société internationale',
        description:
          'Structures à Hong Kong et dans différents pays selon votre projet d\'expatriation. Résidence fiscale au Paraguay et dans d\'autres juridictions. Setup complet et évolutif.',
        badge: '🌍 International',
      },
      {
        icon: 'Monitor',
        title: 'Services IT & Web',
        description:
          'Site internet vitrine, emails, hébergement, nom de domaine, mise en place des outils comptables, abonnement téléphonique US pour votre société. L\'infrastructure technique de votre LLC. Tracking.',
        badge: 'Tout-en-un',
      },
      {
        icon: 'Landmark',
        title: 'Comptes Bancaires Off Shore',
        description:
          'Et d\'autres solutions dans le même domaine sur demande...',
        badge: 'Sur demande',
      },
    ],
  },

  packLLC: {
    sectionTitle: 'Le Pack LLC Complet, zéro prise de tête.',
    subtitle:
      'On ne fait pas de LLC nue. Parce que sans EIN + ITIN + compte bancaire, votre LLC est inutile. C\'est pour ça qu\'on a tout packagé.',
    checklist: [
      'Création LLC (Wyoming, Delaware ou Nouveau-Mexique)',
      'Obtention EIN (numéro employeur IRS)',
      'Demande d\'ITIN (numéro fiscal personnel)',
      'Ouverture de compte bancaire US',
      'Adresse de réception courrier (Registered Agent)',
      'Accompagnement WhatsApp personnalisé',
      'Assistance complète étape par étape',
    ],
    ctaPrimary: {
      label: 'Commander mon Pack LLC →',
      href: 'https://wa.me/13073105297',
    },
    ctaSecondary: {
      label: 'Ou contactez-nous sur WhatsApp pour en discuter d\'abord.',
      href: 'https://wa.me/13073105297',
    },
    callout:
      'Pourquoi pas de LLC seule ? Parce que les gros prestataires low-cost créent des milliers de LLC à la même adresse. Résultat : vos comptes bancaires et PSP sont bloqués car trop de scammers partagent cette adresse. Chez Altixia, on propose des solutions qui fonctionnent sur-mesure.',
    links: [
      { label: 'Voir les packages LLC pack', href: '#services' },
      { label: 'Demande d\'ITIN solo', href: 'https://wa.me/13073105297?text=Bonjour%2C%20je%20souhaite%20faire%20une%20demande%20d%27ITIN%20solo' },
    ],
  },

  whyAltixia: {
    sectionTitle: 'Ce qui fait la différence avec Altixia.',
    subtitle: 'On n\'est pas une usine à LLC. On est votre partenaire à long terme.',
    cards: [
      {
        icon: 'MessageCircle',
        title: 'En français, dans votre langue',
        description:
          'Pas de barrière linguistique. On vous accompagne en français, en anglais et en portugais. Toute la procédure, tous les documents, dans votre langue maternelle.',
      },
      {
        icon: 'Zap',
        title: 'Rapidité d\'exécution',
        description:
          'LLC créée en 24 à 48 heures ouvrées. Pas de file d\'attente, pas de délai caché. 100% des sociétés créées en moins de 48h.',
      },
      {
        icon: 'Handshake',
        title: 'Accompagnement durable, pas du one-shot',
        description:
          'On ne s\'arrête pas à la création. Comptabilité, déclarations IRS, conseil fiscal ongoing. Beaucoup de prestataires oublient que la LLC doit vivre.',
      },
      {
        icon: 'Shield',
        title: 'Protection de vos données personnelles',
        description:
          'Vos pièces d\'identité, passeports et justificatifs ne quittent jamais notre équipe interne. Contrats de confidentialité stricts avec chaque prestataire externe.',
      },
      {
        icon: 'Award',
        title: 'Expertise internationale réelle',
        description:
          'Notre équipe dispose d\'identifiants fiscaux dans 11 pays du monde. Formation en business, comptabilité et droit. On connaît les législations internationales.',
      },
      {
        icon: 'Fingerprint',
        title: 'Du sur-mesure, pas de l\'usine',
        description:
          'Des adresses physiques différenciées. Contrairement aux grosses plateformes qui ouvrent des milliers de LLC à la même adresse, ce qui bloque les comptes bancaires, chez Altixia, chaque client est unique et peut sur demande obtenir une adresse unique.',
      },
    ],
  },

  howItWorks: {
    sectionTitle: 'Votre LLC en 5 étapes simples.',
    subtitle: 'Un parcours clair, rapide et sans surprise.',
    steps: [
      {
        number: 1,
        title: 'Prenez contact',
        description:
          'Par WhatsApp, par formulaire ou par appel. On discute de votre projet, votre situation et vos objectifs. C\'est gratuit et sans engagement.',
      },
      {
        number: 2,
        title: 'On structure votre setup',
        description:
          'Choix de l\'État (Wyoming, Delaware, Nouveau-Mexique), type de LLC, et services adaptés à votre situation personnelle. On vous explique tout clairement.',
      },
      {
        number: 3,
        title: 'Création en 48h',
        description:
          'On dépose les actes de constitution. Vous recevez vos documents officiels (articles of organization) dans les 24 à 48 heures ouvrées.',
      },
      {
        number: 4,
        title: 'EIN + Compte bancaire + ITIN',
        description:
          'On obtient votre EIN, on vous assiste pour l\'ouverture de votre compte bancaire US, et on lance la demande d\'ITIN (~7 semaines de délai IRS).',
      },
      {
        number: 5,
        title: 'Vous êtes opérationnel',
        description:
          'Votre LLC est active, votre comptabilité est en place, vous pouvez facturer. Et on reste à vos côtés pour la suite : déclarations, conseil, évolutions.',
      },
    ],
  },

  stats: {
    items: [
      { value: 15, suffix: '+', label: 'LLC créées' },
      { value: 15, suffix: '+', label: 'Demandes ITIN traitées' },
      { value: 100, suffix: '%', label: 'Taux de réussite' },
      { value: 48, suffix: 'h', label: 'Délai de création' },
      { value: 11, suffix: '', label: 'Pays d\'expertise fiscale' },
      { value: 3, suffix: '', label: 'Langues parlées' },
    ],
  },

  objections: {
    sectionTitle: 'Les idées reçues qui vous freinent (et la réalité).',
    items: [
      {
        myth: 'C\'est facile, je peux le faire seul.',
        reality:
          'Créer la LLC en soi, oui. Mais obtenir l\'EIN correctement, faire la demande d\'ITIN, ouvrir un compte bancaire sans blocage, choisir le bon État, tenir la comptabilité, faire les déclarations IRS... C\'est un autre métier. Et les erreurs coûtent cher et font perdre des semaines ou des mois.',
      },
      {
        myth: 'Je dois d\'abord rencontrer d\'autres personnes avant de me décider.',
        reality:
          'Nos clients nous trouvent par le bouche-à-oreille et la recommandation d\'amis qui ont déjà fait le parcours. L\'expérience et les résultats parlent d\'eux-mêmes : 100% de taux de réussite, LLC en 48h, accompagnement durable. Tous ceux qui nous ont rencontrés ont signé.',
      },
      {
        myth: 'Je dois d\'abord tout quitter avant de m\'expatrier.',
        reality:
          'Faux. Beaucoup de nos clients lancent leur LLC américaine tout en étant encore en France, Belgique ou Suisse. On structure le setup pour que la transition soit progressive et sécurisée.',
      },
    ],
  },

  testimonials: {
    sectionTitle: 'Les mots de nos clients, au premier appel.',
    items: [
      {
        quote:
          'Je veux m\'expatrier. Je ne sais pas comment faire. J\'ai lu tout et n\'importe quoi.',
        author: 'Entrepreneur e-commerce',
        role: 'E-commerce',
        location: 'France',
      },
      {
        quote:
          'Pourquoi te faire confiance ? Ouais, mais l\'IA me dit que ça sert à rien.',
        author: 'Freelance développeur',
        role: 'Développeur',
        location: 'Belgique',
      },
      {
        quote:
          'Est-ce que ça va être long ?',
        author: 'Closer',
        role: 'Closer',
        location: 'Suisse',
      },
      {
        quote:
          'Des réponses claires et précises adaptées à mon profil',
        author: 'Client Altixia',
        role: 'Entrepreneur',
        location: 'France',
      },
    ],
    closingText: 'Ils avaient les mêmes doutes que vous. Aujourd\'hui, leur LLC est active.',
  },

  faq: {
    sectionTitle: 'Tout ce que vous devez savoir.',
    items: [
      {
        question: 'Pourquoi créer une LLC aux États-Unis ?',
        answer:
          'La LLC américaine offre une flexibilité fiscale, une protection juridique solide (surtout dans certains États comme le Wyoming), et une crédibilité internationale. Pour les entrepreneurs qui travaillent en ligne ou qui veulent s\'expatrier, c\'est souvent la structure la plus adaptée.',
      },
      {
        question: 'Dans quel État créer ma LLC ?',
        answer:
          'On recommande principalement le Wyoming, le Delaware et le Nouveau-Mexique. Pourquoi ? L\'anonymat (protection de l\'identité du dirigeant), la protection juridique contre les poursuites, et les coûts de maintenance raisonnables. Le choix dépend de votre situation personnelle, on vous conseille lors du premier échange.',
      },
      {
        question: 'C\'est quoi l\'ITIN et pourquoi c\'est indispensable ?',
        answer:
          'L\'ITIN (Individual Taxpayer Identification Number) est votre numéro fiscal personnel américain. Il est indispensable pour accéder au crédit américain, ouvrir certains comptes, et remplir vos obligations fiscales US. Délai moyen : ~7 semaines après soumission à l\'IRS.',
      },
      {
        question: 'Combien de temps ça prend au total ?',
        answer:
          'La LLC est créée en 24-48h ouvrées. L\'EIN suit rapidement. L\'ITIN prend environ 7 semaines (délai IRS incompressible). Le compte bancaire peut être ouvert en quelques jours. Au total, vous êtes pleinement opérationnel en 2-3 mois.',
      },
      {
        question: 'Est-ce que je risque d\'être imposé en France / Belgique / Suisse ?',
        answer:
          'C\'est la question n°1 de nos clients. La réponse dépend de votre situation personnelle, de votre résidence fiscale, et de la convention fiscale entre votre pays et les USA. C\'est exactement pour ça qu\'on propose un accompagnement fiscal personnalisé : pas de réponse générique, mais un conseil adapté à VOTRE cas.',
      },
      {
        question: 'Pourquoi ne pas faire seul ou avec un service low-cost ?',
        answer:
          'Les plateformes low-cost Bizee, SimplifyLLC, etc. créent des milliers de LLC à la même adresse. Résultat : quand vous essayez d\'ouvrir un compte bancaire ou un PSP, vous êtes bloqué car trop de scammers partagent cette adresse. Sans parler du zéro suivi, zéro accompagnement, zéro comptabilité.',
      },
      {
        question: 'Qu\'est-ce qui se passe APRÈS la création de la LLC ?',
        answer:
          'C\'est la question que personne ne pose, et c\'est le piège. Après la création, votre LLC doit : tenir une comptabilité, effectuer des déclarations annuelles auprès de l\'IRS, renouveler l\'agent enregistré, maintenir la conformité de l\'État, et potentiellement payer des taxes. Beaucoup de prestataires s\'arrêtent à la création. Pas nous.',
      },
      {
        question: 'Vous gérez la comptabilité et les déclarations ?',
        answer:
          'Oui. On propose un accompagnement comptable continu. On gère les déclarations IRS, les formulaires W-8BEN, W-8BEN-E, FBAR 114, et tous les formulaires nécessaires. On recommande aussi le logiciel comptable le plus adapté à votre structure.',
      },
      {
        question: 'Je peux commencer sans m\'expatrier physiquement ?',
        answer:
          'Absolument. Beaucoup de nos clients créent leur LLC US tout en résidant encore en France, Belgique ou Suisse. La LLC américaine ne nécessite pas de présence physique aux USA. On structure le setup pour que votre transition soit progressive.',
      },
      {
        question: 'Quelle garantie j\'ai que ça va fonctionner ?',
        answer:
          '100% des LLC que nous avons créées l\'ont été en moins de 48 heures ouvrées. On ne fait pas de promesses en l\'air : chaque prestation donne lieu à un document officiel attestant sa réalisation (actes de constitution, attestation ITIN, EIN, Certificat de bonne tenue, Déclaration B12, etc.). Et surtout, on ne vous lâche pas après la création : accompagnement comptable, déclarations, conseil fiscal dans la durée. Notre meilleure garantie, c\'est que tous les clients qui nous ont rencontrés nous ont fait confiance.',
      },
      {
        question: 'Comment je vous contacte ?',
        answer:
          'Trois options : 1) WhatsApp au +1 (307) 310-5297 (wa.me/13073105297), c\'est le plus rapide. 2) Réservez un appel gratuit. 3) Remplissez le formulaire et payez directement en ligne. On s\'adapte à votre préférence.',
      },
    ],
  },

  finalCta: {
    title: 'Prêt à lancer votre LLC américaine ?',
    subtitle:
      'Rejoignez les entrepreneurs francophones qui ont choisi la simplicité, la rapidité et l\'accompagnement durable.',
    ctaPrimary: {
      label: 'Commander mon Pack LLC →',
      href: 'https://wa.me/13073105297',
    },
    ctaSecondary: {
      label: 'Discuter sur WhatsApp',
      href: 'https://wa.me/13073105297',
    },
    ctaBooking: {
      label: 'Prendre Rendez-vous',
      href: 'https://wa.me/13073105297',
    },
    reassurance: 'Premier échange gratuit • Réponse en moins de 24h • 100% de taux de réussite',
  },

  footer: {
    logo: 'Altixia LLC',
    description: 'Votre LLC clé en main, en français.',
    columns: [
      {
        title: 'Navigation',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Pourquoi nous', href: '#pourquoi' },
          { label: 'Comment ça marche', href: '#comment' },
          { label: 'FAQ', href: '#faq' },
          { label: 'Contact', href: '#contact' },
          { label: 'Création LLC', href: '/llc' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Création LLC', href: '#services' },
          { label: 'ITIN', href: '#services' },
          { label: 'EIN', href: '#services' },
          { label: 'Compte bancaire', href: '#services' },
          { label: 'Comptabilité', href: '#services' },
          { label: 'Conseil fiscal', href: '#services' },
        ],
      },
    ],
    contact: {
      phone: '+1 (307) 310-5297',
      email: 'claude@altixia.com',
      address: 'Altixia LLC, Wyoming, USA',
    },
    copyright: '© 2026 Altixia LLC. Tous droits réservés.',
  },

  llcPage: {
    title: 'Création de LLC aux États-Unis',
    subtitle: 'Wyoming • Delaware • Nouveau-Mexique. Votre société américaine créée en 48h.',
    states: [
      {
        name: 'Wyoming',
        pros: [
          'Anonymat total du dirigeant',
          'Pas d\'impôt d\'État sur les revenus',
          'Faibles frais annuels de maintien',
          'Protection juridique forte des actifs',
        ],
      },
      {
        name: 'Delaware',
        pros: [
          'Tribunal spécialisé (Court of Chancery)',
          'Référence historique pour les sociétés US',
          'Idéal si vous prévoyez des investisseurs américains',
          'Droit des sociétés très flexible',
        ],
      },
      {
        name: 'Nouveau-Mexique',
        pros: [
          'Anonymat total du dirigeant',
          'Pas de rapport annuel obligatoire',
          'Zéro frais de renouvellement annuel',
          'Parfait pour les structures simples',
        ],
      },
    ],
    checklist: [
      'Création LLC dans l\'État de votre choix',
      'Obtention EIN (numéro employeur IRS)',
      'Demande d\'ITIN (numéro fiscal personnel)',
      'Ouverture de compte bancaire US',
      'Adresse de réception courrier (Registered Agent)',
      'Accompagnement WhatsApp personnalisé',
      'Assistance complète étape par étape',
    ],
    ctaPrimary: {
      label: 'Commander ma LLC →',
      href: 'https://wa.me/13073105297',
    },
    ctaSecondary: {
      label: 'Poser une question sur WhatsApp',
      href: 'https://wa.me/13073105297',
    },
  },
}
