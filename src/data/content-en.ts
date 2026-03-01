import type { Content } from '../types/content'

export const contentEn: Content = {
  navbar: {
    logo: 'Altixia LLC',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#pourquoi' },
      { label: 'How It Works', href: '#comment' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    phone: '+1 (307) 310-5297',
    ctaLabel: 'Create My LLC',
    ctaHref: 'https://wa.me/13073105297',
  },

  hero: {
    badge: '🇺🇸 Wyoming-based company, USA',
    title: 'Your US LLC, turnkey. In your language. In 48 hours.',
    subtitle:
      'Altixia helps French-speaking expats from France, Belgium, and Switzerland set up their American company. LLC, EIN, ITIN, bank account, accounting : everything included, everything managed, in your language.',
    ctaPrimary: {
      label: 'Create my LLC now →',
      href: 'https://wa.me/13073105297',
    },
    ctaSecondary: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/13073105297',
    },
    trustBadges: [
      { icon: 'Zap', text: 'LLC created in 48h' },
      { icon: 'CheckCircle', text: '100% success rate' },
      { icon: 'Globe', text: 'French-speaking support' },
    ],
  },

  trustBar: {
    items: [
      { icon: 'Clock', text: 'LLC created in 48h' },
      { icon: 'CheckCircle', text: '100% success rate' },
      { icon: 'Globe', text: 'Support in French' },
      { icon: 'MapPin', text: 'Based in Wyoming, USA' },
      { icon: 'MessageCircle', text: 'WhatsApp support 7/7' },
    ],
  },

  problem: {
    sectionTitle: 'Setting up a US LLC alone? It\'s a nightmare.',
    subtitle:
      'Most entrepreneurs going through the expat process face the same struggles before finding us.',
    cards: [
      {
        icon: 'Search',
        title: 'I\'ve read everything and anything online',
        description:
          'Contradictory forums, articles, YouTube videos... Impossible to sort fact from fiction about LLCs, ITINs, and US taxation.',
      },
      {
        icon: 'Bot',
        title: 'AI gave me completely wrong advice',
        description:
          'ChatGPT, Gemini, Claude... AI gives confident but often wrong answers about international taxation. Dangerous.',
      },
      {
        icon: 'AlertTriangle',
        title: 'I\'m afraid of tax problems',
        description:
          'The big fear: being audited by the French, Belgian, or Swiss tax authorities after creating a US LLC.',
      },
      {
        icon: 'ShieldAlert',
        title: 'I sent my documents to strangers',
        description:
          'Passport, proof of address... Sent to obscure providers found online. Risk of identity theft.',
      },
      {
        icon: 'ThumbsDown',
        title: 'I got scammed by a cheap provider',
        description:
          'Sloppy services, no follow-up, addresses shared with hundreds of other LLCs (which then blocks bank accounts).',
      },
      {
        icon: 'HelpCircle',
        title: 'I don\'t know where to start',
        description:
          'LLC in which state? EIN? ITIN? Bank account? Accounting? Tax filings? It\'s an administrative maze.',
      },
    ],
    transition:
      'That\'s exactly why Altixia exists. One contact, one complete solution, in your language.',
  },

  services: {
    sectionTitle: 'Everything you need to launch your US business.',
    subtitle:
      'From LLC creation to accounting, through ITIN and bank account opening, Altixia handles everything, in your language.',
    cards: [
      {
        icon: 'Building',
        title: 'US LLC Formation',
        description:
          'Anonymous LLC in Wyoming, Delaware, or New Mexico. Created in 24-48 business hours. State selection based on your situation, legal protection, and tax goals.',
        badge: '⚡ Express 48h',
      },
      {
        icon: 'FileText',
        title: 'EIN Registration',
        description:
          'Your Employer Identification Number from the IRS. Essential for operating, opening a bank account, and invoicing.',
        badge: 'Included in pack',
      },
      {
        icon: 'CreditCard',
        title: 'ITIN Application',
        description:
          'Your US Individual Taxpayer Identification Number. Essential for accessing US credit. Delivered in ~7 weeks, with our tips to speed things up.',
        badge: '~7 weeks',
      },
      {
        icon: 'Wallet',
        title: 'US Bank Account Opening',
        description:
          'Complete assistance opening US bank accounts and PSPs for your LLC. No issues from shared addresses.',
        badge: 'Full support',
      },
      {
        icon: 'Calculator',
        title: 'US Accounting & IRS Filings',
        description:
          'Bookkeeping, annual filings, W-8BEN, W-8BEN-E, FBAR 114, and all required IRS forms.',
        badge: 'Ongoing',
      },
      {
        icon: 'ShieldCheck',
        title: 'Ongoing Tax Advisory',
        description:
          'Not a one-shot. Continuous tax guidance, because an LLC needs to live, maintain accounting, and file declarations.',
        badge: 'Long-term',
      },
      {
        icon: 'Globe',
        title: 'International Company Formation',
        description:
          'Structures in Hong Kong and various countries based on your expat project. Tax residency in Thailand and other jurisdictions.',
        badge: '🌍 International',
      },
      {
        icon: 'Monitor',
        title: 'IT & Web Services',
        description:
          'Business website, hosting, domain, accounting tool setup, US phone subscription for your company. The technical infrastructure of your LLC.',
        badge: 'All-in-one',
      },
    ],
  },

  packLLC: {
    sectionTitle: 'The Complete LLC Pack, zero headaches.',
    subtitle:
      'We don\'t create bare LLCs. Because without EIN + ITIN + bank account, your LLC is useless. That\'s why we bundled everything.',
    checklist: [
      'LLC Creation (Wyoming, Delaware, or New Mexico)',
      'EIN Registration (IRS employer number)',
      'ITIN Application (personal tax number)',
      'US Bank Account Opening',
      'Mail receiving address (Registered Agent)',
      'Personalized WhatsApp support',
      'Complete step-by-step assistance',
    ],
    ctaPrimary: {
      label: 'Order my LLC Pack →',
      href: 'https://wa.me/13073105297',
    },
    ctaSecondary: {
      label: 'Or contact us on WhatsApp to discuss first.',
      href: 'https://wa.me/13073105297',
    },
    callout:
      'Why no standalone LLC? Because large low-cost providers create thousands of LLCs at the same address. Result: your bank accounts and PSPs get blocked because too many scammers share that address. At Altixia, we do custom work.',
  },

  whyAltixia: {
    sectionTitle: 'What makes Altixia different.',
    subtitle: 'We\'re not an LLC factory. We\'re your long-term partner.',
    cards: [
      {
        icon: 'MessageCircle',
        title: 'In French, in your language',
        description:
          'No language barrier. We support you in French, English, and Portuguese. Every procedure, every document, in your native language.',
      },
      {
        icon: 'Zap',
        title: 'Speed of execution',
        description:
          'LLC created in 24 to 48 business hours. No waiting list, no hidden delays. 100% of companies created in under 48h.',
      },
      {
        icon: 'Handshake',
        title: 'Lasting support, not one-shot',
        description:
          'We don\'t stop at creation. Accounting, IRS filings, ongoing tax advice. Many providers forget the LLC needs to live.',
      },
      {
        icon: 'Shield',
        title: 'Personal data protection',
        description:
          'Your IDs, passports, and documents never leave our internal team. Strict confidentiality agreements with every external provider.',
      },
      {
        icon: 'Award',
        title: 'Real international expertise',
        description:
          'Our team holds tax IDs in 11 countries worldwide. Training in business, accounting, and law. We know international legislation.',
      },
      {
        icon: 'Fingerprint',
        title: 'Custom work, not factory',
        description:
          'Unlike large platforms that open thousands of LLCs at the same address, which blocks bank accounts, at Altixia, every client is unique.',
      },
    ],
  },

  howItWorks: {
    sectionTitle: 'Your LLC in 5 simple steps.',
    subtitle: 'A clear, fast, and predictable process.',
    steps: [
      {
        number: 1,
        title: 'Get in touch',
        description:
          'Via WhatsApp, form, or call. We discuss your project, situation, and goals. It\'s free and non-binding.',
      },
      {
        number: 2,
        title: 'We structure your setup',
        description:
          'Choice of state (Wyoming, Delaware, New Mexico), LLC type, and services adapted to your personal situation. We explain everything clearly.',
      },
      {
        number: 3,
        title: 'Creation in 48h',
        description:
          'We file the articles of organization. You receive your official documents within 24 to 48 business hours.',
      },
      {
        number: 4,
        title: 'EIN + Bank account + ITIN',
        description:
          'We obtain your EIN, assist you with US bank account opening, and launch your ITIN application (~7 weeks IRS processing).',
      },
      {
        number: 5,
        title: 'You\'re operational',
        description:
          'Your LLC is active, your accounting is set up, you can invoice. And we stay by your side: filings, advice, evolution.',
      },
    ],
  },

  stats: {
    items: [
      { value: 15, suffix: '+', label: 'LLCs created' },
      { value: 15, suffix: '+', label: 'ITIN applications processed' },
      { value: 100, suffix: '%', label: 'Success rate' },
      { value: 48, suffix: 'h', label: 'Creation time' },
      { value: 11, suffix: '', label: 'Countries of tax expertise' },
      { value: 3, suffix: '', label: 'Languages spoken' },
    ],
  },

  objections: {
    sectionTitle: 'Common misconceptions holding you back (and the reality).',
    items: [
      {
        myth: 'It\'s easy, I can do it myself.',
        reality:
          'Creating the LLC itself, yes. But correctly obtaining the EIN, filing the ITIN application, opening a bank account without blocks, choosing the right state, maintaining accounting, filing IRS declarations... That\'s a different profession. And mistakes are costly.',
      },
      {
        myth: 'It\'s too expensive.',
        reality:
          'Compare the price of complete support with the cost of a poorly set up LLC: blocked bank account, tax audit, IRS penalties, wasted time. The real "expensive" is doing it wrong.',
      },
      {
        myth: 'I need to leave everything before expatriating.',
        reality:
          'False. Many of our clients launch their US LLC while still living in France, Belgium, or Switzerland. We structure the setup so the transition is gradual and secure.',
      },
    ],
  },

  testimonials: {
    sectionTitle: 'What our clients say, on the first call.',
    items: [
      {
        quote:
          'I want to expatriate. I don\'t know how. I\'ve read everything and anything.',
        author: 'E-commerce entrepreneur',
        role: 'E-commerce',
        location: 'France',
      },
      {
        quote:
          'Why should I trust you? AI tells me it\'s useless.',
        author: 'Freelance developer',
        role: 'Developer',
        location: 'Belgium',
      },
      {
        quote:
          'Will it take long? I already lost 3 months with another provider.',
        author: 'Closer',
        role: 'Closer',
        location: 'Switzerland',
      },
    ],
  },

  faq: {
    sectionTitle: 'Everything you need to know.',
    items: [
      {
        question: 'Why create an LLC in the United States?',
        answer:
          'A US LLC offers tax flexibility, solid legal protection (especially in states like Wyoming), and international credibility. For online entrepreneurs or those looking to expatriate, it\'s often the most suitable structure.',
      },
      {
        question: 'In which state should I create my LLC?',
        answer:
          'We primarily recommend Wyoming, Delaware, and New Mexico. Why? Anonymity (manager identity protection), legal protection against lawsuits, and reasonable maintenance costs. The choice depends on your personal situation, we advise you during the first call.',
      },
      {
        question: 'What is an ITIN and why is it essential?',
        answer:
          'The ITIN (Individual Taxpayer Identification Number) is your US personal tax number. It\'s essential for accessing US credit, opening certain accounts, and fulfilling your US tax obligations. Average processing: ~7 weeks after IRS submission.',
      },
      {
        question: 'How long does the whole process take?',
        answer:
          'The LLC is created in 24-48 business hours. The EIN follows quickly. The ITIN takes about 7 weeks (non-negotiable IRS delay). The bank account can be opened in a few days. In total, you\'re fully operational in 2-3 months.',
      },
      {
        question: 'Will I be taxed in France / Belgium / Switzerland?',
        answer:
          'This is our clients\' #1 question. The answer depends on your personal situation, tax residency, and the tax treaty between your country and the US. That\'s exactly why we offer personalized tax guidance : no generic answer, but advice tailored to YOUR case.',
      },
      {
        question: 'Why not do it alone or with a low-cost service?',
        answer:
          'Low-cost platforms (Bizee, SimplifyLLC, etc.) create thousands of LLCs at the same address. Result: when you try to open a bank account or PSP, you\'re blocked because too many scammers share that address. Not to mention zero follow-up, zero support, zero accounting.',
      },
      {
        question: 'What happens AFTER the LLC is created?',
        answer:
          'This is the question nobody asks, and it\'s the trap. After creation, your LLC must: maintain accounting, file annual IRS declarations, renew the registered agent, maintain state compliance, and potentially pay taxes. Many providers stop at creation. We don\'t.',
      },
      {
        question: 'Do you handle accounting and tax filings?',
        answer:
          'Yes. We offer continuous accounting support. We handle IRS filings, W-8BEN, W-8BEN-E, FBAR 114 forms, and all necessary forms. We also recommend the most suitable accounting software for your structure.',
      },
      {
        question: 'Can I start without physically expatriating?',
        answer:
          'Absolutely. Many of our clients create their US LLC while still residing in France, Belgium, or Switzerland. A US LLC doesn\'t require physical presence in the USA. We structure the setup so your transition is gradual.',
      },
      {
        question: 'How do I contact you?',
        answer:
          'Three options: 1) WhatsApp at +1 (307) 310-5297. it\'s the fastest. 2) Book a free call. 3) Fill out the form and pay directly online. We adapt to your preference.',
      },
    ],
  },

  finalCta: {
    title: 'Ready to launch your US LLC?',
    subtitle:
      'Join the French-speaking entrepreneurs who chose simplicity, speed, and lasting support.',
    ctaPrimary: {
      label: 'Order my LLC Package →',
      href: 'https://wa.me/13073105297',
    },
    ctaSecondary: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/13073105297',
    },
    reassurance: 'Free initial consultation • Response within 24h • 100% success rate',
  },

  footer: {
    logo: 'Altixia LLC',
    description: 'Your turnkey LLC, in your language.',
    columns: [
      {
        title: 'Navigation',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Why Us', href: '#pourquoi' },
          { label: 'How It Works', href: '#comment' },
          { label: 'FAQ', href: '#faq' },
          { label: 'Contact', href: '#contact' },
          { label: 'LLC Formation', href: '/llc' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'LLC Creation', href: '#services' },
          { label: 'ITIN', href: '#services' },
          { label: 'EIN', href: '#services' },
          { label: 'Bank Account', href: '#services' },
          { label: 'Accounting', href: '#services' },
          { label: 'Tax Advisory', href: '#services' },
        ],
      },
    ],
    contact: {
      phone: '+1 (307) 310-5297',
      email: 'claude@altixia.com',
      address: 'Altixia LLC, Wyoming, USA',
    },
    copyright: '© 2026 Altixia LLC. All rights reserved.',
  },

  llcPage: {
    title: 'US LLC Formation',
    subtitle: 'Wyoming • Delaware • New Mexico. Your American company created in 48h.',
    states: [
      {
        name: 'Wyoming',
        pros: [
          'Complete manager anonymity',
          'No state income tax',
          'Low annual maintenance fees',
          'Strong legal asset protection',
        ],
      },
      {
        name: 'Delaware',
        pros: [
          'Specialized court (Court of Chancery)',
          'Historical reference for US companies',
          'Ideal if you plan for US investors',
          'Very flexible corporate law',
        ],
      },
      {
        name: 'New Mexico',
        pros: [
          'Complete manager anonymity',
          'No mandatory annual report',
          'Zero annual renewal fees',
          'Perfect for simple structures',
        ],
      },
    ],
    checklist: [
      'LLC Creation in the state of your choice',
      'EIN Registration (IRS employer number)',
      'ITIN Application (personal tax number)',
      'US Bank Account Opening',
      'Mail receiving address (Registered Agent)',
      'Personalized WhatsApp support',
      'Complete step-by-step assistance',
    ],
    ctaPrimary: {
      label: 'Order my LLC →',
      href: 'https://wa.me/13073105297',
    },
    ctaSecondary: {
      label: 'Ask a question on WhatsApp',
      href: 'https://wa.me/13073105297',
    },
  },
}
