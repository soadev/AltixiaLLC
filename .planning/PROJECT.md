# Altixia LLC Landing Page

## What This Is

A premium professional bilingual (FR/EN) landing page for Altixia LLC, a Wyoming-based company that helps French-speaking expats from France, Belgium, and Switzerland create US LLCs, obtain EIN/ITIN numbers, open US bank accounts, handle US accounting/IRS filings, and navigate international tax optimization. The site must convey trust, expertise, and seriousness — a modern international advisory firm, not a fun startup.

## Core Value

French-speaking entrepreneurs can understand and access the full LLC creation process in their language, with complete confidence that every administrative step (LLC, EIN, ITIN, bank account, accounting) is handled professionally and durably.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Premium landing page with 14 sections (Navbar, Hero, Trust Bar, Problem, Services, Pack LLC, Why Altixia, How It Works, Stats, Objections, Testimonials, FAQ, Final CTA, Footer)
- [ ] Dedicated /llc route with Wyoming/Delaware/New Mexico state comparison
- [ ] Bilingual FR/EN system with React Context, localStorage persistence, browser language detection
- [ ] Design system generated via Gemini MCP (generate_vibes → design-system.md)
- [ ] ALL frontend/UI built exclusively via Gemini MCP tools (create_frontend, modify_frontend, snippet_frontend)
- [ ] Animated counters with Intersection Observer + Framer Motion
- [ ] FAQ accordion with AnimatePresence
- [ ] Smooth scroll navigation from sticky navbar
- [ ] Floating WhatsApp button (wa.me/13073105297)
- [ ] Mobile-first responsive design
- [ ] SEO meta tags and Open Graph
- [ ] All real content from BRIEF.md — zero placeholders

### Out of Scope

- Backend/API — static landing page only
- Payment processing — links to external checkout
- User accounts/authentication — not needed for a landing page
- CMS/admin panel — content is hardcoded from brief
- Next.js/Nuxt — Vite.js only

## Context

- **Business**: Altixia LLC is registered in Wyoming, USA. They serve French-speaking expats from France, Belgium, and Switzerland. WhatsApp (+1 307-310-5297) is the primary contact channel.
- **Target audience**: French-speaking entrepreneurs wanting to create US LLCs for e-commerce, freelancing, or international business
- **Existing brand**: Color palette defined (#3877AF primary, #D5E8F8 light, #333A49 dark navy, #9BCAEF medium blue). Serif titles + modern sans-serif body. No Inter/Roboto/Arial.
- **Content**: All 14 sections have complete FR and EN copy in BRIEF.md. All real data (stats: 15+ LLCs, 100% success rate, 48h creation, 11 countries, 3 languages). No placeholders.
- **Design workflow**: Gemini MCP Design tools are MANDATORY for all visual/UI work. Claude handles logic, routing, i18n, state, config only.

## Constraints

- **Tech stack**: Vite 6 + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion + React Router v7 + Lucide React — no alternatives
- **Design**: ALL frontend via Gemini MCP tools — Claude never writes JSX/CSS directly
- **Design system**: Must use generate_vibes first, then pass FULL design-system.md content to every Gemini call
- **Content**: Zero placeholders — all real text from BRIEF.md
- **Typography**: Serif for headings (DM Serif Display, Playfair, Fraunces, Lora), sans-serif for body (DM Sans, Plus Jakarta Sans, Outfit, Manrope) — never Inter/Roboto/Arial
- **Route**: /llc page is mandatory (linked from official client documents)
- **Deployment**: Vercel

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Vite 6 + React 19 | Client requirement — static SPA, no SSR needed | — Pending |
| Gemini MCP for all UI | Client requirement — AI-driven design consistency | — Pending |
| Wyoming/Delaware/NM focus | These are the 3 states Altixia recommends for LLC formation | — Pending |
| Custom i18n (not i18next) | Simple FR/EN toggle, React Context sufficient | — Pending |
| No pricing displayed | Prices not in brief — contact via WhatsApp instead | — Pending |

---
*Last updated: 2026-03-01 after initialization*
