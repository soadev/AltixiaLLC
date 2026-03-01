/** Supported languages */
export type Language = 'fr' | 'en'

/** Link with label and href */
export interface LinkItem {
  label: string
  href: string
}

/** Navigation link with optional anchor */
export interface NavLink {
  label: string
  href: string
}

/** Navbar content */
export interface NavbarContent {
  logo: string
  links: NavLink[]
  phone: string
  ctaLabel: string
  ctaHref: string
}

/** Hero section content */
export interface HeroContent {
  badge: string
  title: string
  subtitle: string
  ctaPrimary: LinkItem
  ctaSecondary: LinkItem
  trustBadges: { icon: string; text: string }[]
}

/** Trust bar content */
export interface TrustBarContent {
  items: { icon: string; text: string }[]
}

/** Problem section content */
export interface ProblemContent {
  sectionTitle: string
  subtitle: string
  cards: { icon: string; title: string; description: string }[]
  transition: string
}

/** Services section content */
export interface ServicesContent {
  sectionTitle: string
  subtitle: string
  cards: { icon: string; title: string; description: string; badge: string }[]
}

/** Pack LLC section content */
export interface PackLLCContent {
  sectionTitle: string
  subtitle: string
  checklist: string[]
  ctaPrimary: LinkItem
  ctaSecondary: LinkItem
  callout: string
}

/** Why Altixia section content */
export interface WhyAltixiaContent {
  sectionTitle: string
  subtitle: string
  cards: { icon: string; title: string; description: string }[]
}

/** How It Works section content */
export interface HowItWorksContent {
  sectionTitle: string
  subtitle: string
  steps: { number: number; title: string; description: string }[]
}

/** Stats section content */
export interface StatsContent {
  items: { value: number; suffix: string; label: string }[]
}

/** Objections section content */
export interface ObjectionsContent {
  sectionTitle: string
  items: { myth: string; reality: string }[]
}

/** Testimonials section content */
export interface TestimonialsContent {
  sectionTitle: string
  items: { quote: string; author: string; role: string; location: string }[]
}

/** FAQ section content */
export interface FAQContent {
  sectionTitle: string
  items: { question: string; answer: string }[]
}

/** Final CTA section content */
export interface FinalCTAContent {
  title: string
  subtitle: string
  ctaPrimary: LinkItem
  ctaSecondary: LinkItem
  reassurance: string
}

/** Footer content */
export interface FooterContent {
  logo: string
  description: string
  columns: { title: string; links: LinkItem[] }[]
  contact: { phone: string; email: string; address: string }
  copyright: string
}

/** LLC page content */
export interface LLCPageContent {
  title: string
  subtitle: string
  states: { name: string; pros: string[] }[]
  checklist: string[]
  ctaPrimary: LinkItem
  ctaSecondary: LinkItem
}

/** Complete content structure for all sections */
export interface Content {
  navbar: NavbarContent
  hero: HeroContent
  trustBar: TrustBarContent
  problem: ProblemContent
  services: ServicesContent
  packLLC: PackLLCContent
  whyAltixia: WhyAltixiaContent
  howItWorks: HowItWorksContent
  stats: StatsContent
  objections: ObjectionsContent
  testimonials: TestimonialsContent
  faq: FAQContent
  finalCta: FinalCTAContent
  footer: FooterContent
  llcPage: LLCPageContent
}
