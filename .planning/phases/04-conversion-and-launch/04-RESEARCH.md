# Phase 4: Conversion and Launch - Research

**Researched:** 2026-03-01
**Status:** Complete

## Phase Goal

The page is complete end-to-end — objections handled, social proof visible, FAQ answerable, CTAs clear, footer present, /llc page live, SEO set, and deployed to Vercel.

## Codebase Analysis

### Existing Architecture

**Component Pattern (established in Phases 2-3):**
- All visual components in `src/components/` as named exports
- Each component uses `useContent()` hook for i18n data
- Framer Motion `motion` wrapper with `initial/whileInView/viewport/transition` for scroll animations
- Tailwind CSS classes using design system tokens (#3877AF, #333A49, #D5E8F8, #F7F9FC, etc.)
- All JSX/Tailwind generated via Gemini MCP tools — Claude handles only logic, routing, state

**Pages:**
- `src/pages/Home.tsx`: Assembles section components in order (Hero → TrustBar → Problem → Services → PackLLC → WhyAltixia → HowItWorks → Stats). Phase 4 sections go after Stats: Objections → Testimonials → FAQ → FinalCTA
- `src/pages/LLCPage.tsx`: Currently placeholder — needs full content build
- `src/layouts/RootLayout.tsx`: Wraps pages with Navbar + WhatsAppButton. Footer will be added here (not in individual pages)

**Routing:** BrowserRouter with / and /llc routes inside RootLayout

**Content Data:** All Phase 4 content is already populated in `content-fr.ts` and `content-en.ts`:
- `objections`: sectionTitle + 3 items (myth/reality)
- `testimonials`: sectionTitle + 3 items (quote/author/role/location)
- `faq`: sectionTitle + 10 items (question/answer)
- `finalCta`: title/subtitle/ctaPrimary/ctaSecondary/reassurance
- `footer`: logo/description/2 columns/contact/copyright
- `llcPage`: title/subtitle/3 states with pros/checklist/ctaPrimary/ctaSecondary

**Type Definitions:** All interfaces exist in `src/types/content.ts` (ObjectionsContent, TestimonialsContent, FAQContent, FinalCTAContent, FooterContent, LLCPageContent)

### Integration Points

1. **Home.tsx** needs: import + render Objections, Testimonials, FAQ, FinalCTA after Stats section
2. **RootLayout.tsx** needs: import + render Footer after `<main>` and before WhatsAppButton
3. **LLCPage.tsx** needs: complete rebuild with LLC-specific hero, state comparison, pack checklist, CTAs
4. **No new dependencies needed** — Framer Motion AnimatePresence already available, react-helmet-async needs to be installed for SEO

### Technical Findings

**FAQ Accordion:**
- AnimatePresence from `framer-motion` is available (already a project dependency)
- Pattern: `useState` for active index, AnimatePresence wrapping motion.div for expand/collapse
- First question open by default = initial state `openIndex = 0`

**SEO Meta Tags:**
- `react-helmet-async` needs to be installed (`npm install react-helmet-async`)
- HelmetProvider wraps App in main.tsx
- Helmet component in each page for route-specific meta
- Dynamic title/description based on `useLanguage()` context

**Vercel Deployment:**
- Standard Vite SPA: `vercel.json` with rewrites `{ "source": "/(.*)", "destination": "/index.html" }`
- Build: `npm run build`, output: `dist`
- No server-side rendering — pure static SPA

**Footer in RootLayout:**
- Footer goes in RootLayout (shared between / and /llc)
- Must be placed between `</main>` closing tag and `<WhatsAppButton />`

## Wave Structure Recommendation

**Wave 1 (parallel — no dependencies between them):**
- 04-01: Objections + Testimonials (visual components via Gemini MCP)
- 04-02: FAQ accordion (visual component via Gemini MCP)
- 04-03: Final CTA + Footer (visual components via Gemini MCP)

**Wave 2 (depends on Wave 1 for Footer):**
- 04-04: /llc page (needs Footer in RootLayout from 04-03)

**Wave 3 (depends on all components being wired):**
- 04-05: SEO meta tags (needs all pages assembled)
- 04-06: Vercel deployment (needs everything complete)

## Risks and Mitigations

1. **react-helmet-async installation**: Plan 04-05 must `npm install react-helmet-async` before generating SEO components
2. **Footer placement in RootLayout**: Plan 04-03 must update RootLayout.tsx, not just create the Footer component
3. **LLCPage scroll anchors**: /llc page needs section IDs for any internal navigation
4. **Vercel deployment**: Needs `vercel.json` for SPA routing; no vercel.json exists yet

## RESEARCH COMPLETE
