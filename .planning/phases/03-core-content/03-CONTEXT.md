# Phase 3: Core Content - Context

**Gathered:** 2026-03-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the full persuasion narrative with 6 sections: Problem, Services, Pack LLC, Why Altixia, How It Works, and Stats. Visitors understand the problem, see the services, discover the pack offer, learn why Altixia, follow the process, and see animated proof stats. All sections are bilingual (FR/EN) and use Gemini MCP for UI generation.

</domain>

<decisions>
## Implementation Decisions

### Card design across sections
- Unified base card style across Problem (6 cards), Services (8 cards), and Why Altixia (6 cards)
- Light & airy visual weight: subtle shadow, white background, generous padding, thin border on hover
- Icons displayed inside a soft-colored circle background (e.g., light blue bg with brand blue icon)
- Services badges: pill-shaped with brand blue or accent color background, matching Hero badge pattern

### Pack LLC emphasis
- Accent background (light brand-blue tint) to visually distinguish as the main conversion section
- 7-item checklist with green checkmark icons, stacked vertically — the classic "everything included" pattern
- "No standalone LLC" callout: informational tone with soft yellow/amber info box and info icon
- No price displayed — CTAs drive conversation to WhatsApp for pricing discussion

### How It Works stepper
- Numbered circles connected by lines/dots — classic timeline layout
- Horizontal on desktop, vertical on mobile
- Sequential reveal animation: steps appear one by one with staggered delay on scroll (fade-in + slide-up)
- Step circles use brand blue (#3877AF) — consistent with CTAs and hero accents

### Section backgrounds & rhythm
- Alternating backgrounds: white → light gray (#F8F9FA) → white → accent blue (Pack LLC) → white → dark (#333A49 for Stats)
- Generous vertical spacing: 80-100px between sections — premium breathing room
- Consistent section header pattern: centered DM Serif Display title + DM Sans subtitle on every section
- Stats section: white numbers on dark background, high contrast. Labels in lighter gray underneath.

### Claude's Discretion
- Exact shadow values and border-radius for cards
- Hover animation details (scale, shadow lift, etc.)
- Stats counter animation speed and easing curve
- Responsive breakpoints for grid column changes (3x2 → 2x3 → 1x6 etc.)
- Exact light gray and accent blue tint values within design system palette
- Problem section transition phrase styling

</decisions>

<specifics>
## Specific Ideas

- Card design should match the premium/clean feel already established by Hero.tsx
- Hero badge pattern (pill with emoji + text) is the reference for Services badges
- The page tells a story: Problem → Solution (Services) → Offer (Pack) → Why us → How → Proof (Stats)
- Each section should feel like a "chapter" with clear visual separation

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `LucideIcon` component (src/components/LucideIcon.tsx): Dynamic Lucide icon rendering — all card icons use string names from content data
- `useContent()` hook (src/hooks/useContent.ts): Returns typed content for current language — all sections use this
- `useScrollPosition()` hook (src/hooks/useScrollPosition.ts): Available for scroll-based behaviors
- Framer Motion animation patterns from Hero.tsx: `containerVariants` (stagger), `itemVariants` (fade-in + slide-up)

### Established Patterns
- Components are standalone functional components in src/components/
- Framer Motion `motion` wrapper with `variants` for scroll animations
- Content accessed via `useContent()` — fully typed via Content interface in src/types/content.ts
- All section content types already defined: ProblemContent, ServicesContent, PackLLCContent, WhyAltixiaContent, HowItWorksContent, StatsContent
- Tailwind CSS for styling with design system tokens

### Integration Points
- New section components go in src/components/ (Problem.tsx, Services.tsx, PackLLC.tsx, WhyAltixia.tsx, HowItWorks.tsx, Stats.tsx)
- Home.tsx (src/pages/Home.tsx) assembles all sections in order
- Content data already populated in content-fr.ts and content-en.ts with all section data
- Intersection Observer needed for Stats counter animation (TECH-06 requirement: scroll animations on all sections)

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 03-core-content*
*Context gathered: 2026-03-01*
