# Phase 4: Conversion and Launch - Context

**Gathered:** 2026-03-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Complete the landing page with conversion elements (Objections, Testimonials, FAQ, Final CTA, Footer), build the /llc dedicated page, add SEO meta tags + Open Graph, and deploy to Vercel. After this phase, the site is live and complete.

</domain>

<decisions>
## Implementation Decisions

### Objections section (3 myth vs reality blocks)
- White background, consistent with page rhythm
- Design pattern: side-by-side "myth vs reality" blocks — left side shows the objection in muted/gray with an X icon (#EF4444 red), right side shows the response with a checkmark icon (#10B981 green)
- 3 blocks stacked vertically with generous spacing between them
- Cards with white bg, subtle border (#E8EDF2), shadow on hover
- All copy from BRIEF.md sections 10 (FR + EN translations from content data files)

### Testimonials section (3 quote cards)
- White background
- 3 quote cards in a row (desktop) / stacked (mobile)
- Large decorative quotation mark in #D5E8F8 or #9BCAEF as visual anchor
- Each card: quote text in italic, attribution below (role + location)
- No photos — these are first-call verbatims, not formal testimonials
- Below the cards: centered closing text "Ils avaient les memes doutes que vous. Aujourd'hui, leur LLC est active."
- All copy from BRIEF.md section 12

### FAQ accordion (10 questions)
- Background: #F7F9FC (off-white), consistent with alternating section pattern
- Accordion with Framer Motion AnimatePresence for smooth expand/collapse
- First question open by default
- Each item: question title in bold with chevron icon (rotates on open), answer slides down smoothly
- Border-bottom between items, clean and minimal
- Question hover: text color transitions to #3877AF
- All 10 questions and answers from BRIEF.md section 11 (FR + EN in content data)

### Final CTA section
- Background: light gradient from #D5E8F8 to white, or solid light #D5E8F8
- Centered layout with large H2 title, subtitle, two CTAs side by side (desktop) / stacked (mobile)
- Primary CTA: "Commander mon Pack LLC" in full #3877AF button
- Secondary CTA: "Discuter sur WhatsApp" outline button with WhatsApp icon
- Reassurance text below: "Premier echange gratuit - Reponse en moins de 24h - 100% de taux de reussite"
- Generous spacing — this section should feel imposing and final

### Footer
- Dark background #333A49, white/gray text
- 4 columns on desktop / 2x2 tablet / 1 column mobile
- Column 1: Logo (white version) + tagline + copyright
- Column 2: Navigation links (Accueil, Services, Pourquoi nous, Comment ca marche, FAQ, Contact)
- Column 3: Services links (Creation LLC, ITIN, EIN, Compte bancaire, Comptabilite, Conseil fiscal)
- Column 4: Contact info (WhatsApp, Email claude@altixia.com, Address Wyoming USA)
- Bottom line: border-top separator with "Altixia LLC - Wyoming, USA | Mentions legales | Politique de confidentialite"
- Link hover color: #9BCAEF

### /llc page
- Shares Navbar and Footer with home page (via RootLayout)
- LLC-specific hero: "Creation de LLC aux Etats-Unis" title, "Wyoming - Delaware - Nouveau-Mexique" subtitle
- State comparison section: 3 cards side by side for Wyoming, Delaware, New Mexico with pros listed for each
  - Wyoming: Total anonymity, no state tax, low annual fees, strong legal protection
  - Delaware: Court of Chancery, historical reference, ideal for US investors
  - New Mexico: Anonymity, no annual report, zero renewal fees
- Pack inclusion checklist (reuses pack content from home)
- CTAs: "Commander ma LLC" + "Poser une question sur WhatsApp"
- All content bilingual FR/EN from content data files

### SEO and meta tags
- React Helmet or manual document.head manipulation for meta tags
- Dynamic page title based on language: "Altixia LLC - Votre LLC americaine cle en main" (FR) / "Altixia LLC - Your US LLC, turnkey" (EN)
- Open Graph tags: og:title, og:description, og:type, og:url, og:image (placeholder for now)
- Meta description matching hero subtitle content
- Different meta for / and /llc routes

### Vercel deployment
- Standard Vite SPA deployment to Vercel
- vercel.json with rewrites for SPA routing (all paths -> /index.html)
- Build command: npm run build
- Output directory: dist

### Claude's Discretion
- Exact animation timing for FAQ accordion open/close
- Testimonial card shadow and border-radius values
- Footer column spacing and responsive breakpoints
- /llc page layout details and card styling for state comparison
- SEO meta content exact wording optimization
- Vercel project configuration details
- Objection block exact layout proportions (myth vs reality split)

</decisions>

<specifics>
## Specific Ideas

- BRIEF.md specifies Gemini MCP is MANDATORY for all frontend/UI — every visual component must go through create_frontend/modify_frontend/snippet_frontend with the ENTIRE design-system.md content passed in designSystem parameter
- All real text from BRIEF.md must be used — zero placeholders anywhere
- The FAQ accordion must use AnimatePresence from Framer Motion (BRIEF.md requirement)
- Footer text includes "claude@altixia.com" as email (from BRIEF.md)
- The /llc page is MANDATORY because the /llc link appears on official documents delivered to Altixia clients
- Objections design: "myth vs reality" visual pattern from BRIEF.md Gemini context — left side objection with X, right side response with check
- Testimonials are "first call" verbatims — raw emotional quotes, not polished testimonials
- WhatsApp (+1 307-310-5297) is the primary contact channel everywhere

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `LucideIcon` component (src/components/LucideIcon.tsx): Dynamic icon rendering for FAQ chevrons, objection icons, etc.
- `useContent()` hook (src/hooks/useContent.ts): Returns typed content for current language — all new sections use this
- `LanguageContext` (src/contexts/LanguageContext.tsx): Language state for dynamic SEO meta tags
- Framer Motion animation patterns from existing components: stagger, fade-in + slide-up variants
- `WhatsAppButton` component (src/components/WhatsAppButton.tsx): Already exists, floating button

### Established Patterns
- Components are standalone functional components in src/components/
- Framer Motion `motion` wrapper with `variants` for scroll animations
- Content accessed via `useContent()` — fully typed via Content interface
- All section content types already defined in src/types/content.ts: ObjectionsContent, TestimonialsContent, FAQContent, FinalCTAContent, FooterContent, LLCPageContent
- Tailwind CSS with design system color tokens (#3877AF, #333A49, #D5E8F8, etc.)
- Gemini MCP used for all UI generation (create_frontend with full design-system.md)

### Integration Points
- New section components go in src/components/ (Objections.tsx, Testimonials.tsx, FAQ.tsx, FinalCTA.tsx, Footer.tsx)
- Home.tsx (src/pages/Home.tsx) assembles sections — new sections added after Stats
- LLCPage.tsx (src/pages/LLCPage.tsx) already exists — needs full content build
- RootLayout.tsx (src/layouts/RootLayout.tsx) wraps pages with shared Navbar/Footer
- Content data already populated in content-fr.ts and content-en.ts
- React Router v7 already has / and /llc routes configured

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 04-conversion-and-launch*
*Context gathered: 2026-03-01*
