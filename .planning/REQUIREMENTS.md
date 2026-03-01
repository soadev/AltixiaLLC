# Requirements: Altixia LLC Landing Page

**Defined:** 2026-03-01
**Core Value:** French-speaking entrepreneurs can understand and access the full LLC creation process in their language, with complete confidence.

## v1 Requirements

### Foundation

- [ ] **FOUND-01**: Project initialized with Vite 6 + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion + React Router v7 + Lucide React
- [ ] **FOUND-02**: Design system generated via Gemini MCP generate_vibes and saved as design-system.md
- [ ] **FOUND-03**: Bilingual i18n system with React Context (FR/EN), localStorage persistence, and browser language detection
- [ ] **FOUND-04**: Content data files (content-fr.ts, content-en.ts) with all real text from BRIEF.md — zero placeholders
- [ ] **FOUND-05**: React Router v7 routing with Home (/) and LLC (/llc) routes

### Navbar

- [ ] **NAV-01**: Sticky navbar with logo, navigation links (Accueil, Services, Pourquoi nous, Comment ça marche, FAQ, Contact), WhatsApp number (+1 307-310-5297), CTA button, and FR/EN toggle
- [ ] **NAV-02**: Navbar backdrop-blur and border-bottom on scroll
- [ ] **NAV-03**: Mobile hamburger menu with slide-in panel

### Hero

- [ ] **HERO-01**: Hero section with badge, H1 title, subtitle, 2 CTAs (primary + WhatsApp), and 3 trust badges
- [ ] **HERO-02**: Desktop layout with text left / visual right, mobile stacked

### Trust Bar

- [ ] **TRUST-01**: Horizontal trust bar with 5 reassurance elements (48h, 100%, French, Wyoming, WhatsApp 7/7)

### Problem Section

- [ ] **PROB-01**: Problem section with 6 pain point cards in responsive grid (3x2 desktop, 1x6 mobile)
- [ ] **PROB-02**: Transition phrase at bottom linking to Altixia's solution

### Services

- [ ] **SERV-01**: Services section with 8 service cards in responsive grid (4x2 desktop)
- [ ] **SERV-02**: Each card has Lucide icon, title, description, and tag/badge

### Pack LLC

- [ ] **PACK-01**: Featured Pack LLC section with checklist of 7 included items
- [ ] **PACK-02**: Primary CTA "Commander mon Pack LLC" and WhatsApp secondary link
- [ ] **PACK-03**: Callout note explaining why no standalone LLC

### Why Altixia

- [ ] **WHY-01**: 6 differentiator cards (French language, speed, ongoing support, data protection, international expertise, custom service)

### How It Works

- [ ] **HOW-01**: 5-step timeline/stepper (horizontal desktop, vertical mobile) with numbered steps and connectors
- [ ] **HOW-02**: Steps animate sequentially on scroll

### Stats

- [ ] **STAT-01**: Dark background (#333A49) section with 6 animated counters (15+ LLCs, 15+ ITIN, 100%, 48h, 11 countries, 3 languages)
- [ ] **STAT-02**: Counter animation from 0 to target value on viewport entry using Intersection Observer + Framer Motion

### Objections

- [ ] **OBJ-01**: 3 objection/response blocks with myth vs reality design pattern

### Testimonials

- [ ] **TEST-01**: 3 client verbatim quote cards with attribution (e-commerce France, developer Belgium, closer Switzerland)

### FAQ

- [ ] **FAQ-01**: 10-question FAQ accordion with Framer Motion AnimatePresence
- [ ] **FAQ-02**: First question open by default, smooth expand/collapse animation

### Final CTA

- [ ] **CTA-01**: Final CTA section with 2 buttons (Pack LLC + WhatsApp) and reassurance text

### Footer

- [ ] **FOOT-01**: 4-column footer on dark background (#333A49) with logo, navigation, services, and contact info

### LLC Page

- [ ] **LLC-01**: Dedicated /llc route with shared navbar and footer
- [ ] **LLC-02**: State comparison section for Wyoming, Delaware, and New Mexico with pros of each
- [ ] **LLC-03**: Pack inclusion checklist and CTAs on /llc page

### Technical

- [ ] **TECH-01**: Smooth scroll navigation from navbar to page sections via anchors
- [ ] **TECH-02**: Floating WhatsApp button fixed bottom-right, always visible, linking to wa.me/13073105297
- [ ] **TECH-03**: Mobile-first responsive design (mobile padding 20px, tablet 40px, desktop max-width 1280px with 80px padding)
- [ ] **TECH-04**: SEO meta tags, Open Graph tags, and dynamic page title based on language
- [ ] **TECH-05**: Custom Google Fonts loaded (serif for titles, sans-serif for body — never Inter/Roboto/Arial)
- [ ] **TECH-06**: Framer Motion fade-in + slide-up scroll animations on all sections with staggered delays
- [ ] **TECH-07**: All frontend/UI created exclusively via Gemini MCP tools with full design-system.md passed

## v2 Requirements

### Future Enhancements

- **V2-01**: Contact form with server-side processing
- **V2-02**: Blog/content section for SEO
- **V2-03**: Client portal / dashboard
- **V2-04**: Online booking system for consultations
- **V2-05**: Additional languages (Portuguese)
- **V2-06**: Pricing calculator

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend/API | Static landing page — no server logic needed |
| Payment processing | External checkout via WhatsApp/link |
| User accounts | Not needed for landing page |
| CMS/Admin panel | Content hardcoded from brief |
| Next.js/Nuxt | Client requires Vite.js only |
| Real-time chat widget | WhatsApp is the primary channel |
| Dark mode | Premium light design is the brand identity |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Pending |
| FOUND-02 | Phase 1 | Pending |
| FOUND-03 | Phase 1 | Pending |
| FOUND-04 | Phase 1 | Pending |
| FOUND-05 | Phase 1 | Pending |
| NAV-01 | Phase 2 | Pending |
| NAV-02 | Phase 2 | Pending |
| NAV-03 | Phase 2 | Pending |
| HERO-01 | Phase 2 | Pending |
| HERO-02 | Phase 2 | Pending |
| TRUST-01 | Phase 2 | Pending |
| PROB-01 | Phase 3 | Pending |
| PROB-02 | Phase 3 | Pending |
| SERV-01 | Phase 3 | Pending |
| SERV-02 | Phase 3 | Pending |
| PACK-01 | Phase 3 | Pending |
| PACK-02 | Phase 3 | Pending |
| PACK-03 | Phase 3 | Pending |
| WHY-01 | Phase 3 | Pending |
| HOW-01 | Phase 3 | Pending |
| HOW-02 | Phase 3 | Pending |
| STAT-01 | Phase 3 | Pending |
| STAT-02 | Phase 3 | Pending |
| OBJ-01 | Phase 4 | Pending |
| TEST-01 | Phase 4 | Pending |
| FAQ-01 | Phase 4 | Pending |
| FAQ-02 | Phase 4 | Pending |
| CTA-01 | Phase 4 | Pending |
| FOOT-01 | Phase 4 | Pending |
| LLC-01 | Phase 4 | Pending |
| LLC-02 | Phase 4 | Pending |
| LLC-03 | Phase 4 | Pending |
| TECH-01 | Phase 5 | Pending |
| TECH-02 | Phase 5 | Pending |
| TECH-03 | Phase 5 | Pending |
| TECH-04 | Phase 5 | Pending |
| TECH-05 | Phase 5 | Pending |
| TECH-06 | Phase 5 | Pending |
| TECH-07 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 39 total
- Mapped to phases: 39
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-01*
*Last updated: 2026-03-01 after initial definition*
