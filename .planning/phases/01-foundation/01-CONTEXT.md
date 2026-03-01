# Phase 1: Foundation - Context

**Gathered:** 2026-03-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Project scaffold with Vite 6 + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion + React Router v7 + Lucide React. Design system generated via Gemini MCP generate_vibes. Bilingual i18n system (FR/EN) with React Context. All real content data files from BRIEF.md. Routes for / and /llc. Custom Google Fonts loaded.

</domain>

<decisions>
## Implementation Decisions

### Project Scaffold
- Initialize with `npm create vite@latest -- --template react-ts`
- Install: tailwindcss @tailwindcss/vite framer-motion react-router-dom lucide-react
- Tailwind CSS 4 with @tailwindcss/vite plugin (not PostCSS approach)
- TypeScript strict mode enabled

### Design System (Gemini MCP)
- Call `generate_vibes` with exact parameters from BRIEF.md:
  - projectDescription: Landing page for Altixia LLC (Wyoming), expat francophones, palette #3877AF/#D5E8F8/#333A49/#9BCAEF
  - projectType: "landing-page"
  - techStack: "Vite 6, React 19, TypeScript, Tailwind CSS 4, Framer Motion"
- Auto-select the most premium/professional/trust-inspiring vibe (no user prompt)
- Extract full code between VIBE_X_START/VIBE_X_END markers
- Save as design-system.md at project root
- Delete vibes-selection.tsx after extraction

### Color Palette (locked)
- Primary: #3877AF (CTA, titles, links, accents)
- Light blue: #D5E8F8 (alternate section backgrounds, cards, badges)
- Dark navy: #333A49 (text, titles, footer background)
- Medium blue: #9BCAEF (secondary accents, hover, borders)
- White: #FFFFFF (main background)
- Off-white: #F7F9FC (alternate sections)
- Light gray: #E8EDF2 (borders, separators)
- Text secondary: #6B7280
- Hover blue: #2D6193
- Success green: #10B981

### Typography (locked)
- Titles (display): DM Serif Display, Playfair Display, Fraunces, or Lora — serif
- Body: DM Sans, Plus Jakarta Sans, Outfit, or Manrope — sans-serif modern
- NEVER: Inter, Roboto, Arial, Helvetica, system-ui
- H1: 56px desktop / 36px mobile, weight 700
- H2: 40px desktop / 28px mobile, weight 700
- H3: 24px desktop / 20px mobile, weight 600
- Body: 18px desktop / 16px mobile, weight 400, line-height 1.7
- Labels: 14px, weight 500, uppercase tracking-wide

### i18n System
- Custom React Context (not i18next — only 2 languages)
- Type: `Language = 'fr' | 'en'`
- Two data files: content-fr.ts and content-en.ts with identical structure
- Toggle in navbar switches language
- Persist choice in localStorage
- Detect browser language on first load (navigator.language)
- Default to French if no match

### Content Data Files
- All 14 sections' text in content-fr.ts and content-en.ts
- ZERO placeholders — all real text from BRIEF.md
- Content for: Navbar, Hero, Trust Bar, Problem (6 pain points), Services (8 cards), Pack LLC, Why Altixia (6 differentiators), How It Works (5 steps), Stats (6 counters), Objections (3), Testimonials (3), FAQ (10 Q&A), Final CTA, Footer
- Also: /llc page content (3 states comparison)

### Routing
- React Router v7 in declarative mode (simplest — just 2 routes)
- Routes: / (Home) and /llc (LLC page)
- Smooth scroll anchors handled via section IDs on Home page

### Google Fonts Loading
- Use vite-plugin-webfont-dl for self-hosted font loading (privacy, performance, no render blocking)
- Load chosen serif + sans-serif fonts
- Font display swap to prevent FOIT

### Claude's Discretion
- Exact serif/sans-serif font pair selection (from approved list above)
- Tailwind CSS 4 custom theme configuration approach
- tsconfig.json settings and path aliases
- Project directory structure within src/

</decisions>

<specifics>
## Specific Ideas

- Style inspired by best legal-tech, fintech, premium advisory firm websites
- "Cabinet de conseil international moderne, pas une startup fun"
- The vibe selection should pick the most professional, trust-inspiring, serious design — not playful or colorful
- All content is bilingual — the i18n system must be ready before any section is built
- design-system.md must exist before ANY Gemini MCP frontend call in later phases

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — greenfield project

### Established Patterns
- None — patterns will be established in this phase

### Integration Points
- design-system.md at project root — consumed by all future Gemini MCP calls
- LanguageContext — wraps entire app, consumed by all sections
- content-fr.ts / content-en.ts — consumed by all components
- React Router setup — consumed by /llc route in Phase 4

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-03-01*
