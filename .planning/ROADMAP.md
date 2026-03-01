# Roadmap: Altixia LLC Landing Page

## Overview

Four phases deliver a premium bilingual landing page from zero to production. Phase 1 establishes the project scaffolding and design system (Gemini MCP generate_vibes runs here — everything else depends on it). Phase 2 builds the above-the-fold experience. Phase 3 fills in the core persuasion content. Phase 4 completes the page with conversion elements, the /llc route, and ships to Vercel.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation** - Project scaffold, design system, i18n, content data, and routing
- [ ] **Phase 2: Above the Fold** - Navbar, Hero, and Trust Bar — the first impression
- [ ] **Phase 3: Core Content** - Problem, Services, Pack LLC, Why Altixia, How It Works, and Stats sections
- [ ] **Phase 4: Conversion and Launch** - Objections, Testimonials, FAQ, Final CTA, Footer, /llc page, and Vercel deploy

## Phase Details

### Phase 1: Foundation
**Goal**: The project is running locally with the design system defined, i18n wired up, all real content loaded, and routes registered — ready for Gemini MCP to build UI
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, TECH-05, TECH-07
**Success Criteria** (what must be TRUE):
  1. `npm run dev` starts without errors and the app loads at localhost
  2. design-system.md exists with full color palette, typography (serif/sans-serif), spacing, and component tokens generated via generate_vibes
  3. Switching between FR and EN updates all visible text; preference persists after page reload
  4. All 14 sections' copy exists in content-fr.ts and content-en.ts with zero placeholder strings
  5. Navigating to / and /llc both render without 404 errors
**Plans**: TBD

Plans:
- [ ] 01-01: Vite 6 + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion + React Router v7 scaffold
- [ ] 01-02: Gemini MCP generate_vibes — design-system.md generation
- [ ] 01-03: i18n React Context, localStorage persistence, browser language detection
- [ ] 01-04: content-fr.ts and content-en.ts with all real BRIEF.md text
- [ ] 01-05: React Router v7 routes (/ and /llc) + Google Fonts setup

### Phase 2: Above the Fold
**Goal**: Visitors land on a premium page with a working navbar, compelling hero, and instant trust signals — the first 5 seconds make the right impression
**Depends on**: Phase 1
**Requirements**: NAV-01, NAV-02, NAV-03, HERO-01, HERO-02, TRUST-01, TECH-01, TECH-02, TECH-03
**Success Criteria** (what must be TRUE):
  1. The sticky navbar shows logo, nav links, WhatsApp number, CTA button, and FR/EN toggle — and gains backdrop-blur + bottom border on scroll
  2. The hamburger menu opens a slide-in panel on mobile with all navigation links
  3. Clicking a navbar link smooth-scrolls to the correct page section
  4. The hero displays H1, subtitle, two CTAs, and three trust badges — text left / visual right on desktop, stacked on mobile
  5. The floating WhatsApp button is always visible at bottom-right and opens wa.me/13073105297
  6. The trust bar shows all 5 reassurance elements below the hero
**Plans**: TBD

Plans:
- [ ] 02-01: Navbar (sticky, scroll behavior, FR/EN toggle, WhatsApp, CTA, mobile hamburger) via Gemini MCP
- [ ] 02-02: Hero section (badge, H1, subtitle, dual CTAs, trust badges, desktop/mobile layout) via Gemini MCP
- [ ] 02-03: Trust Bar + floating WhatsApp button + smooth scroll anchors via Gemini MCP

### Phase 3: Core Content
**Goal**: The full persuasion narrative is visible — visitors understand the problem, the services, the pack, why Altixia, the process, and the proof via animated stats
**Depends on**: Phase 2
**Requirements**: PROB-01, PROB-02, SERV-01, SERV-02, PACK-01, PACK-02, PACK-03, WHY-01, HOW-01, HOW-02, STAT-01, STAT-02, TECH-06
**Success Criteria** (what must be TRUE):
  1. The Problem section shows 6 pain point cards in a 3x2 grid on desktop with a transition phrase at the bottom
  2. The Services section shows 8 cards (4x2 desktop) each with Lucide icon, title, description, and badge
  3. The Pack LLC section shows a 7-item checklist, primary CTA, WhatsApp link, and the "no standalone LLC" callout
  4. The Why Altixia section shows all 6 differentiator cards with correct copy
  5. The 5-step How It Works stepper renders horizontally on desktop and vertically on mobile, with steps animating sequentially on scroll
  6. The Stats section has a dark (#333A49) background with 6 counters that animate from 0 to target when scrolled into view
**Plans**: TBD

Plans:
- [ ] 03-01: Problem section (6 cards, responsive grid, transition phrase) via Gemini MCP
- [ ] 03-02: Services section (8 cards, Lucide icons, badges) via Gemini MCP
- [ ] 03-03: Pack LLC section (checklist, CTAs, callout note) via Gemini MCP
- [ ] 03-04: Why Altixia section (6 differentiator cards) via Gemini MCP
- [ ] 03-05: How It Works stepper (5 steps, horizontal/vertical, scroll animation) via Gemini MCP
- [ ] 03-06: Stats section (dark bg, 6 animated counters, Intersection Observer + Framer Motion) via Gemini MCP

### Phase 4: Conversion and Launch
**Goal**: The page is complete end-to-end — objections handled, social proof visible, FAQ answerable, CTAs clear, footer present, /llc page live, SEO set, and deployed to Vercel
**Depends on**: Phase 3
**Requirements**: OBJ-01, TEST-01, FAQ-01, FAQ-02, CTA-01, FOOT-01, LLC-01, LLC-02, LLC-03, TECH-04
**Success Criteria** (what must be TRUE):
  1. The Objections section shows 3 myth vs. reality blocks with correct copy
  2. The Testimonials section shows 3 quote cards with attribution (France e-commerce, Belgium developer, Switzerland closer)
  3. The FAQ accordion shows 10 questions; first is open by default; clicking any question smoothly expands/collapses it via AnimatePresence
  4. The Final CTA section has both buttons (Pack LLC + WhatsApp) and reassurance text
  5. The Footer renders in 4 columns on dark background with logo, navigation, services, and contact info
  6. Visiting /llc shows the shared navbar/footer, Wyoming/Delaware/New Mexico comparison, pack checklist, and CTAs
  7. SEO meta tags and Open Graph tags are present in the HTML head; page title changes based on active language
  8. The site deploys successfully to Vercel and loads at the production URL in both FR and EN
**Plans**: TBD

Plans:
- [ ] 04-01: Objections + Testimonials sections via Gemini MCP
- [ ] 04-02: FAQ accordion (10 questions, AnimatePresence, first open by default) via Gemini MCP
- [ ] 04-03: Final CTA + Footer via Gemini MCP
- [ ] 04-04: /llc page (state comparison, pack checklist, CTAs, shared layout) via Gemini MCP
- [ ] 04-05: SEO meta tags, Open Graph, dynamic page title
- [ ] 04-06: Vercel deployment and production smoke test

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/5 | Not started | - |
| 2. Above the Fold | 0/3 | Not started | - |
| 3. Core Content | 0/6 | Not started | - |
| 4. Conversion and Launch | 0/6 | Not started | - |
