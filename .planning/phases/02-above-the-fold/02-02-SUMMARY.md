---
phase: 02-above-the-fold
plan: 02
subsystem: hero
tags: [hero, cta, trust-badges, animation, i18n]
requires: [useContent, LucideIcon, content-data]
provides: [Hero]
affects: [Home-page]
tech-stack:
  added: []
  patterns: [framer-motion-stagger, title-keyword-highlighting, gemini-mcp-component]
key-files:
  created:
    - src/components/Hero.tsx
  modified:
    - src/pages/Home.tsx
key-decisions:
  - decision: "Title keyword highlighting uses split/(48h)/i regex to wrap '48h' in blue span"
    rationale: "Works for both FR and EN since both titles contain '48h'"
  - decision: "Decorative right-side visual kept as static content (not i18n)"
    rationale: "The trust items in the visual card are brand elements, not user-facing translatable text"
requirements-completed: [HERO-01, HERO-02, TECH-03]
duration: 10 min
completed: 2026-03-01
---

# Phase 02 Plan 02: Hero Section Summary

Hero section with badge, H1 title with '48h' highlighted in brand blue, subtitle, dual CTAs (primary blue + secondary WhatsApp), three trust badges with dynamic Lucide icons, and decorative right-side card with tilted background. Desktop 60/40 layout, mobile stacked. Staggered Framer Motion fade-in animations. All text bilingual via useContent() hook.

## Duration
10 min | Start: 2026-03-01 | End: 2026-03-01 | Tasks: 2 | Files: 2

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None

## Next
Ready for 02-03 (TrustBar + WhatsApp).
