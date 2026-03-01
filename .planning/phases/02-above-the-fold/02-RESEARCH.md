# Phase 2: Above the Fold - Research

**Researched:** 2026-03-01
**Domain:** React component development with Gemini MCP, scroll behavior, i18n wiring
**Confidence:** HIGH

## Summary

Phase 2 builds four components (Navbar, Hero, TrustBar, WhatsAppButton) where all visual markup is created via Gemini MCP tools and Claude handles logic, state, and wiring. The existing codebase provides a solid foundation: LanguageContext with `setLanguage()`/`toggleLanguage()`, `useContent()` hook returning typed content, content data files with all real bilingual text, TypeScript interfaces matching expected component props, and RootLayout with Outlet for component placement.

The primary technical challenges are: (1) correctly passing the ENTIRE design-system.md content as `designSystem` parameter to Gemini MCP, (2) wiring i18n via useContent() hook to Gemini-generated components, (3) implementing scroll-aware navbar behavior with React hooks, and (4) creating a Lucide icon resolver since content data references icons by string name.

**Primary recommendation:** Use `create_frontend` for each component with full design-system.md as designSystem and real bilingual text + specific requirements as context. Claude then wires i18n, scroll hooks, and state management into the generated components.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Logo "ALTIXIA LLC" text at left (styled per design-system.md: `w-10 h-10 bg-[#3877AF] rounded` icon + bold text)
- Center nav links: Accueil, Services, Pourquoi nous, Comment ca marche, FAQ, Contact with smooth-scroll anchors
- Right side: WhatsApp icon (#25D366) + "+1 (307) 310-5297" clickable, CTA "Creer ma LLC", FR/EN toggle
- Sticky top with backdrop-blur-sm + border appearing on scroll (not visible at top)
- Mobile: hamburger opens slide-in panel from right
- FR/EN toggle as pill switch showing "FR | EN", calls setLanguage() from LanguageContext
- Hero: text left 60% / visual right 40% desktop, stacked mobile
- Badge: "Societe basee au Wyoming, USA" styled as inline-flex bg-[#D5E8F8]
- H1 with "48h" highlighted in text-[#3877AF]
- Two CTAs: primary filled blue + secondary outline with WhatsApp icon
- Three trust badges below CTAs
- Hero right visual: abstract decorative with brand colors, tilted background card
- Trust bar: full-width bg-[#F7F9FC], 5 items with Lucide icons
- WhatsApp button: fixed bottom-6 right-6, green #25D366, links to wa.me/13073105297
- All components via Gemini MCP create_frontend
- designSystem parameter = ENTIRE design-system.md content
- context parameter = real bilingual texts from BRIEF.md + content data
- Claude NEVER writes JSX with Tailwind — Gemini's job
- Framer Motion staggered animations per design-system.md tokens

### Claude's Discretion
- Exact Framer Motion spring/tween configs
- WhatsApp button animation style (pulse, glow, or bounce)
- Hamburger menu animation style
- Exact navbar scroll threshold for backdrop-blur
- Trust bar mobile layout (wrapping grid vs horizontal scroll)

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| NAV-01 | Sticky navbar with logo, nav links, WhatsApp number, CTA button, FR/EN toggle | Gemini MCP create_frontend with full design-system.md; useContent() for i18n; useLanguage() for toggle |
| NAV-02 | Navbar backdrop-blur and border-bottom on scroll | useScrollPosition custom hook with IntersectionObserver or scroll listener |
| NAV-03 | Mobile hamburger menu with slide-in panel | Gemini MCP for visual; React useState for open/close; Framer Motion AnimatePresence for slide animation |
| HERO-01 | Hero with badge, H1, subtitle, 2 CTAs, 3 trust badges | Gemini MCP create_frontend; useContent().hero for all text; Lucide icon resolver for trust badges |
| HERO-02 | Desktop text left / visual right, mobile stacked | Handled by Gemini MCP responsive layout in create_frontend |
| TRUST-01 | Horizontal trust bar with 5 reassurance elements | Gemini MCP create_frontend; useContent().trustBar for items; Lucide icon resolver |
| TECH-01 | Smooth scroll from navbar to page sections | scrollIntoView({ behavior: 'smooth' }) with offset for sticky navbar height |
| TECH-02 | Floating WhatsApp button fixed bottom-right | Gemini MCP create_frontend; placed in RootLayout outside Outlet |
| TECH-03 | Mobile-first responsive design | Enforced via Gemini MCP designSystem parameter with responsive breakpoints |
</phase_requirements>

## Standard Stack

### Core (Already Installed)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React | 19 | UI framework | Already in project |
| TypeScript | 5.x | Type safety | Already configured |
| Tailwind CSS | 4 | Utility CSS | Already configured with @theme tokens |
| Framer Motion | 11.x | Animations | Already installed |
| React Router | 7 | Routing | Already configured |
| Lucide React | latest | Icons | Already installed |

### Supporting (No New Installs)
No new packages needed. All dependencies are already in place from Phase 1.

### Alternatives Considered
None — stack is locked from Phase 1.

## Architecture Patterns

### Recommended Project Structure
```
src/
├── components/
│   ├── Navbar.tsx          # Gemini MCP generated + Claude logic
│   ├── Hero.tsx            # Gemini MCP generated + Claude logic
│   ├── TrustBar.tsx        # Gemini MCP generated + Claude logic
│   ├── WhatsAppButton.tsx  # Gemini MCP generated + Claude logic
│   └── LucideIcon.tsx      # Claude-built icon resolver utility
├── hooks/
│   ├── useContent.ts       # Existing — returns typed content
│   └── useScrollPosition.ts # New — scroll position for navbar
├── contexts/
│   └── LanguageContext.tsx  # Existing — language state
├── layouts/
│   └── RootLayout.tsx      # Modified — add Navbar + WhatsAppButton
├── pages/
│   └── Home.tsx            # Modified — add Hero + TrustBar sections
└── data/
    ├── content-fr.ts       # Existing — all French text
    └── content-en.ts       # Existing — all English text
```

### Pattern 1: Gemini MCP Component Creation
**What:** Use create_frontend to generate each component's visual markup
**When to use:** Every component that has visual elements (JSX + Tailwind)
**Critical:** The designSystem parameter MUST contain the ENTIRE content of design-system.md (all 230 lines). The context parameter must include real bilingual text from content data files plus specific layout/behavior requirements.

### Pattern 2: Lucide Icon String Resolver
**What:** Map string icon names (from content data) to Lucide React components
**When to use:** Any component that renders icons referenced by string in content data
**Example:**
```typescript
import * as LucideIcons from 'lucide-react'

interface LucideIconProps {
  name: string
  size?: number
  className?: string
}

export function LucideIcon({ name, size = 20, className }: LucideIconProps) {
  const Icon = (LucideIcons as Record<string, React.ComponentType<any>>)[name]
  if (!Icon) return null
  return <Icon size={size} className={className} />
}
```

### Pattern 3: Scroll-Aware Navbar Hook
**What:** Custom hook to detect scroll position for navbar backdrop-blur activation
**When to use:** Navbar component needs to know when user has scrolled past threshold
**Example:**
```typescript
import { useState, useEffect } from 'react'

export function useScrollPosition(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}
```

### Pattern 4: Smooth Scroll with Navbar Offset
**What:** Smooth scroll to anchor sections with offset for sticky navbar height
**When to use:** All navbar link clicks
**Example:**
```typescript
const scrollToSection = (href: string) => {
  const id = href.replace('#', '')
  const element = document.getElementById(id)
  if (element) {
    const navbarHeight = 80 // approximate sticky navbar height
    const top = element.offsetTop - navbarHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
```

### Pattern 5: i18n Wiring in Gemini Components
**What:** After Gemini generates markup, wire in useContent() hook for dynamic text
**When to use:** Every component that displays translatable text
**Flow:**
1. Gemini generates component with placeholder/French text
2. Claude replaces hardcoded text with `content.navbar.logo`, `content.hero.title`, etc.
3. Component re-renders when language context changes

### Anti-Patterns to Avoid
- **Writing JSX/Tailwind directly:** All visual markup must come from Gemini MCP
- **Summarizing design-system.md:** Pass the FULL 230 lines, not a summary
- **Importing all Lucide icons individually:** Use dynamic resolver pattern instead
- **Using window.scrollTo without offset:** Will scroll behind sticky navbar
- **Using CSS scroll-behavior: smooth on html:** Less control than JS scrollIntoView

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Icon resolution | Manual icon map | Dynamic Lucide import resolver | Content data uses string names; map grows with sections |
| Scroll detection | Manual scroll logic per component | Shared useScrollPosition hook | Reusable, passive listener, cleanup handled |
| Language toggle | Custom toggle from scratch | Wire to existing LanguageContext.toggleLanguage() | Already built and tested |
| Component visuals | Manual JSX + Tailwind | Gemini MCP create_frontend | Project requirement — Gemini handles all UI |

## Common Pitfalls

### Pitfall 1: Gemini MCP designSystem Parameter Truncation
**What goes wrong:** Passing a summary or partial design-system.md causes inconsistent styling
**Why it happens:** LLM context management may truncate long parameters
**How to avoid:** Read the full file content and pass it verbatim as designSystem
**Warning signs:** Components don't match the Modern Classic vibe

### Pitfall 2: Missing Navbar Height Offset in Smooth Scroll
**What goes wrong:** Sections scroll behind the sticky navbar
**Why it happens:** scrollIntoView doesn't account for fixed/sticky headers
**How to avoid:** Calculate navbar height and subtract from scroll target position
**Warning signs:** Section headings hidden under navbar after clicking nav links

### Pitfall 3: Mobile Menu Not Closing After Navigation
**What goes wrong:** Hamburger panel stays open after clicking a nav link
**Why it happens:** Click handler scrolls to section but doesn't close the menu
**How to avoid:** Close menu state in the same click handler that triggers smooth scroll
**Warning signs:** Menu stays open on mobile after clicking a link

### Pitfall 4: WhatsApp Button Z-Index Conflicts
**What goes wrong:** WhatsApp button appears under other elements or above modals
**Why it happens:** Z-index stacking without a consistent system
**How to avoid:** Use z-50 for WhatsApp (navbar is z-40, mobile menu overlay is z-45)
**Warning signs:** Button disappears behind sections or interferes with hamburger menu

### Pitfall 5: FR/EN Toggle Not Reactive
**What goes wrong:** Toggling language doesn't update all visible text immediately
**Why it happens:** Components not using useContent() hook or caching stale values
**How to avoid:** Every component with text must call useContent() and render from it
**Warning signs:** Some text stays in old language after toggle

## Code Examples

### Navbar Scroll Behavior Integration
```typescript
// In Navbar component after Gemini generates visual
import { useScrollPosition } from '../hooks/useScrollPosition'

export function Navbar() {
  const isScrolled = useScrollPosition(50)
  const content = useContent()
  const { language, setLanguage } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setIsMobileMenuOpen(false) // Close mobile menu
  }

  // Apply isScrolled to toggle border/backdrop classes
  // Use content.navbar for all text
  // Use setLanguage for FR/EN toggle
}
```

### WhatsApp Button Placement in RootLayout
```typescript
// RootLayout.tsx — after modifications
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { WhatsAppButton } from '../components/WhatsAppButton'

export function RootLayout() {
  return (
    <div className="min-h-screen font-sans text-dark">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton />
      {/* Footer will be added in Phase 4 */}
    </div>
  )
}
```

### Home Page Section Assembly
```typescript
// Home.tsx — after modifications
import { Hero } from '../components/Hero'
import { TrustBar } from '../components/TrustBar'

export function Home() {
  return (
    <div>
      <section id="accueil">
        <Hero />
      </section>
      <TrustBar />
      {/* More sections added in Phase 3+ */}
    </div>
  )
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| CSS scroll-behavior: smooth | JS scrollIntoView with offset | Standard practice | Better control with fixed headers |
| Individual icon imports | Dynamic icon resolver | Lucide React supports it | Smaller bundle, flexible content data |
| Tailwind CSS 3 @apply | Tailwind CSS 4 @theme tokens | Tailwind v4 (2025) | Theme defined in index.css @theme block |

## Open Questions

1. **Gemini MCP component output format**
   - What we know: create_frontend returns TSX code that needs to be saved to files
   - What's unclear: Exact format of Gemini MCP response (full file vs code block)
   - Recommendation: Executor should handle saving Gemini output to component files and then wiring logic

## Sources

### Primary (HIGH confidence)
- Project codebase: src/contexts/LanguageContext.tsx, src/hooks/useContent.ts, src/types/content.ts
- Project design system: design-system.md (230 lines, Vibe 1: Modern Classic)
- Project content: src/data/content-fr.ts, src/data/content-en.ts

### Secondary (MEDIUM confidence)
- Lucide React dynamic import pattern — standard pattern for icon string resolution
- Framer Motion AnimatePresence for hamburger menu — documented in Framer Motion docs

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - all packages already installed and configured
- Architecture: HIGH - clear patterns from Phase 1 codebase and CONTEXT.md decisions
- Pitfalls: HIGH - standard React scroll/state management challenges

**Research date:** 2026-03-01
**Valid until:** 2026-04-01 (stable stack, no fast-moving dependencies)
