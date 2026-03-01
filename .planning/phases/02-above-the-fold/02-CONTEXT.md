# Phase 2: Above the Fold - Context

**Gathered:** 2026-03-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the Navbar, Hero section, Trust Bar, and floating WhatsApp button — the first 5 seconds of the visitor experience. All visual components MUST be created via Gemini MCP (`create_frontend`), passing the ENTIRE `design-system.md` content as `designSystem` and real bilingual text from BRIEF.md as `context`. Claude handles logic only (scroll behavior, i18n wiring, smooth scroll, state).

</domain>

<decisions>
## Implementation Decisions

### Navbar — Layout & Behavior
- Logo "ALTIXIA LLC" text at left (styled per design-system.md: `w-10 h-10 bg-[#3877AF] rounded` icon + bold text)
- Center nav links: Accueil, Services, Pourquoi nous, Comment ça marche, FAQ, Contact — each smooth-scrolls to anchor `#accueil`, `#services`, `#pourquoi`, `#comment`, `#faq`, `#contact`
- Right side (in order): WhatsApp icon (green `#25D366`) + "+1 (307) 310-5297" clickable link to `https://wa.me/13073105297`, then CTA button "Créer ma LLC" → `https://wa.me/13073105297`, then FR/EN toggle
- Sticky top with `backdrop-blur-sm` + `border-b border-[#E8EDF2]` appearing on scroll (not visible at top)
- Z-index 40+ to stay above all content
- Mobile: hamburger icon opens a slide-in panel from right with all nav links, WhatsApp, CTA, and language toggle

### Navbar — FR/EN Toggle
- Small toggle or pill switch showing "FR | EN"
- Calls `setLanguage()` from existing `LanguageContext`
- Active language visually highlighted (e.g. bold or filled background)
- Position: rightmost element in navbar on desktop; inside hamburger panel on mobile

### Hero Section — Layout
- Desktop: text left (60%) / visual right (40%), centered vertically in a `max-w-6xl` container
- Mobile: text stacked above visual, CTAs full-width
- Badge above H1: "🇺🇸 Société basée au Wyoming, USA" — styled as `inline-flex bg-[#D5E8F8] text-[#3877AF] rounded-full text-sm font-bold`
- H1: "Votre LLC américaine clé en main. En français. En 48h." — `font-serif text-[#333A49]`, with "48h" highlighted in `text-[#3877AF]`
- Subtitle: full paragraph from content data — `text-[#6B7280] max-w-lg`
- Two CTAs side-by-side: primary "Créer ma LLC maintenant →" (filled blue) + secondary "Discuter sur WhatsApp" (outline with WhatsApp icon in green)
- Three trust badges below CTAs in a horizontal row: "⚡ LLC créée en 48h", "✅ 100% de taux de réussite", "🇫🇷 Accompagnement en français"

### Hero Section — Right Visual
- Abstract decorative visual using brand colors (#D5E8F8, #9BCAEF, #3877AF) — geometric shapes, not a photo
- Per design-system.md reference: tilted background card with trust items (French support, 48h delay)
- Similar to the reference implementation's right-side card pattern with `CheckCircle2` and `Clock` items
- No stock photos, no real illustrations — pure CSS/SVG decorative elements

### Trust Bar
- Full-width horizontal band below hero
- Background: `bg-[#F7F9FC]` or `bg-[#D5E8F8]/40`
- 5 items in a row with Lucide icons: Clock "LLC créée en 48h", CheckCircle "100% de réussite", Globe "Accompagnement en français", MapPin "Basé au Wyoming, USA", MessageCircle "Support WhatsApp 7j/7"
- Bold keywords in each item highlighted in `text-[#3877AF]`
- Mobile: wrap to 2-3 per row or horizontal scroll
- Compact — this is a quick reassurance strip, not a full section

### Floating WhatsApp Button
- Fixed `bottom-6 right-6` (or `bottom-4 right-4` on mobile)
- Green circle (#25D366) with white WhatsApp icon
- Links to `https://wa.me/13073105297`
- Z-index above everything except modals
- Subtle pulse or shadow animation to draw attention without being obnoxious
- Always visible on every page (placed in RootLayout, not per-section)

### Smooth Scroll
- All navbar anchor links use `scrollIntoView({ behavior: 'smooth' })` with offset for sticky navbar height
- Section IDs match content-fr.ts href anchors: `accueil`, `services`, `pourquoi`, `comment`, `faq`, `contact`
- Mobile hamburger closes after clicking a nav link

### Animations
- Navbar: slide-down on initial load via Framer Motion
- Hero elements: staggered fade-in + slide-up (badge → title → subtitle → CTAs → badges), `staggerChildren: 0.1`, `duration: 0.5`
- Trust bar items: staggered fade-in when scrolled into view
- All per design-system.md animation tokens

### Gemini MCP Workflow (CRITICAL)
- Each component (Navbar, Hero, TrustBar, WhatsAppButton) created via `create_frontend`
- `designSystem` parameter: ENTIRE content of `design-system.md` (all 230 lines, NOT a summary)
- `context` parameter: real bilingual texts from BRIEF.md + content data files, all business data, specific requirements
- Claude writes ONLY: logic hooks, i18n wiring, scroll handlers, state management, component assembly in pages
- Claude NEVER writes JSX with Tailwind classes — that's Gemini's job

### Claude's Discretion
- Exact Framer Motion spring/tween configs for animations
- Whether WhatsApp button has pulse, glow, or bounce animation
- Hamburger menu animation style (slide-in direction, overlay opacity)
- Exact navbar scroll threshold for backdrop-blur activation
- Whether trust bar uses wrapping grid or horizontal scroll on mobile

</decisions>

<specifics>
## Specific Ideas

- Logo style inspired by current altixia.com: serif text with a graphical stroke above
- The word "48h" in the H1 should visually pop (color accent #3877AF or different weight)
- Hero right-side visual follows the design-system.md reference: tilted `bg-[#D5E8F8]` card with trust bullet points inside a white card overlay
- WhatsApp number must be visible in navbar on desktop (not hidden behind an icon-only button)
- Trust bar is a THIN reassurance strip — not a full-height section like the hero
- BRIEF.md specifies "pas de photo stock, pas d'animations lourdes — tout est subtil et pro"

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/contexts/LanguageContext.tsx`: Language context with `setLanguage()` — wire FR/EN toggle directly
- `src/hooks/useContent.ts`: Returns typed content for active language — use in every component for i18n
- `src/data/content-fr.ts` + `content-en.ts`: Complete navbar, hero, trustBar data already structured with all real texts
- `src/types/content.ts`: Full TypeScript interfaces for NavbarContent, HeroContent, TrustBarContent — components must match these shapes

### Established Patterns
- i18n via React Context + `useContent()` hook — no external library
- Content files export typed objects matching `Content` interface
- Icons referenced by string name (e.g. `'Zap'`, `'CheckCircle'`) in content data — need a Lucide icon resolver
- RootLayout wraps all pages via React Router Outlet

### Integration Points
- `src/layouts/RootLayout.tsx`: Navbar goes here (above `<Outlet />`), WhatsApp button also here (fixed position)
- `src/pages/Home.tsx`: Hero and TrustBar render inside this page component
- Section IDs must match `content-fr.ts` navbar link hrefs (`#accueil` → `id="accueil"`)
- New component files: `src/components/Navbar.tsx`, `src/components/Hero.tsx`, `src/components/TrustBar.tsx`, `src/components/WhatsAppButton.tsx`

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-above-the-fold*
*Context gathered: 2026-03-01*
