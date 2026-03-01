# Phase 3: Core Content - Research

**Researched:** 2026-03-01
**Domain:** React component sections with Framer Motion scroll animations, responsive grids, Gemini MCP UI generation
**Confidence:** HIGH

## Summary

Phase 3 builds 6 content sections (Problem, Services, Pack LLC, Why Altixia, How It Works, Stats) as standalone React components following the established patterns from Phase 2. Each section uses `useContent()` for bilingual data, `LucideIcon` for dynamic icons, and Framer Motion for scroll-triggered animations. The primary challenge is ensuring consistent visual rhythm across sections with alternating backgrounds while maintaining the premium Modern Classic design system.

All content data is already populated in `content-fr.ts` and `content-en.ts` with complete typed interfaces. No new dependencies are required — Framer Motion, Lucide React, and Tailwind CSS 4 are already installed. The Stats section requires Intersection Observer + Framer Motion `useMotionValue`/`animate` for counter animations, which is the only technically non-trivial implementation.

**Primary recommendation:** Build each section as a standalone component using Gemini MCP `create_frontend`, following the exact Hero.tsx pattern (motion wrapper, containerVariants/itemVariants, useContent hook). Assembly in Home.tsx is trivial wiring.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Unified base card style across Problem (6 cards), Services (8 cards), and Why Altixia (6 cards)
- Light & airy visual weight: subtle shadow, white background, generous padding, thin border on hover
- Icons displayed inside a soft-colored circle background (e.g., light blue bg with brand blue icon)
- Services badges: pill-shaped with brand blue or accent color background, matching Hero badge pattern
- Pack LLC accent background (light brand-blue tint) to visually distinguish as the main conversion section
- 7-item checklist with green checkmark icons, stacked vertically
- "No standalone LLC" callout: informational tone with soft yellow/amber info box and info icon
- No price displayed — CTAs drive conversation to WhatsApp
- How It Works: Numbered circles connected by lines/dots — classic timeline layout
- Horizontal on desktop, vertical on mobile
- Sequential reveal animation: steps appear one by one with staggered delay on scroll
- Step circles use brand blue (#3877AF)
- Alternating backgrounds: white → light gray (#F8F9FA) → white → accent blue (Pack LLC) → white → dark (#333A49 for Stats)
- Generous vertical spacing: 80-100px between sections
- Consistent section header pattern: centered DM Serif Display title + DM Sans subtitle
- Stats section: white numbers on dark background, high contrast. Labels in lighter gray underneath.

### Claude's Discretion
- Exact shadow values and border-radius for cards
- Hover animation details (scale, shadow lift, etc.)
- Stats counter animation speed and easing curve
- Responsive breakpoints for grid column changes (3x2 → 2x3 → 1x6 etc.)
- Exact light gray and accent blue tint values within design system palette
- Problem section transition phrase styling

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| PROB-01 | Problem section with 6 pain point cards in responsive grid (3x2 desktop, 1x6 mobile) | Card grid pattern, Framer Motion stagger animation, LucideIcon usage |
| PROB-02 | Transition phrase at bottom linking to Altixia's solution | Simple styled paragraph below cards grid |
| SERV-01 | Services section with 8 service cards in responsive grid (4x2 desktop) | Same card pattern + badge pill component |
| SERV-02 | Each card has Lucide icon, title, description, and tag/badge | LucideIcon component, badge pill pattern from Hero |
| PACK-01 | Featured Pack LLC section with checklist of 7 included items | Checklist with CheckCircle icons, accent background |
| PACK-02 | Primary CTA "Commander mon Pack LLC" and WhatsApp secondary link | CTA button pattern from Hero.tsx |
| PACK-03 | Callout note explaining why no standalone LLC | Info box with amber/yellow styling |
| WHY-01 | 6 differentiator cards (French language, speed, support, data protection, expertise, custom service) | Same card grid pattern as Problem section |
| HOW-01 | 5-step timeline/stepper (horizontal desktop, vertical mobile) with numbered steps and connectors | CSS flexbox horizontal + vertical responsive, connector lines |
| HOW-02 | Steps animate sequentially on scroll | Framer Motion whileInView with staggerChildren |
| STAT-01 | Dark background (#333A49) section with 6 animated counters | Dark section, Framer Motion animate for counters |
| STAT-02 | Counter animation from 0 to target value on viewport entry using Intersection Observer + Framer Motion | useInView + useMotionValue + useTransform + animate pattern |
| TECH-06 | Framer Motion fade-in + slide-up scroll animations on all sections with staggered delays | whileInView + viewport={{ once: true }} on all section containers |
</phase_requirements>

## Standard Stack

### Core (Already Installed)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| React | 19 | UI framework | Project foundation |
| Framer Motion | latest | Scroll animations, counter animations, stagger effects | Already used in Hero.tsx |
| Lucide React | latest | Icon system | LucideIcon component already built |
| Tailwind CSS | 4 | Styling with @theme tokens | Design system tokens in place |

### Supporting (Already Available)
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| useContent hook | custom | Bilingual content access | Every section component |
| LucideIcon component | custom | String-to-icon resolver | All card icons |
| design-system.md | n/a | Gemini MCP design reference | Every create_frontend call |

### No New Dependencies Needed
All Phase 3 sections can be built with existing packages. No npm install required.

## Architecture Patterns

### Recommended Component Structure
```
src/components/
├── Problem.tsx          # 6 pain point cards + transition phrase
├── Services.tsx         # 8 service cards with badges
├── PackLLC.tsx          # Checklist + CTAs + callout
├── WhyAltixia.tsx       # 6 differentiator cards
├── HowItWorks.tsx       # 5-step stepper/timeline
├── Stats.tsx            # 6 animated counters on dark bg
├── Hero.tsx             # (exists)
├── LucideIcon.tsx       # (exists)
├── Navbar.tsx           # (exists)
├── TrustBar.tsx         # (exists)
└── WhatsAppButton.tsx   # (exists)
```

### Pattern 1: Section Component with Scroll Animation
**What:** Every section follows the same structure — motion.section with whileInView trigger
**When to use:** All 6 new sections
**Example:**
```tsx
// Established pattern from Hero.tsx, adapted for scroll trigger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// Usage with scroll trigger (unlike Hero which uses initial load)
<motion.section
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {/* Section content with motion.div variants={itemVariants} */}
</motion.section>
```

### Pattern 2: Card Grid with LucideIcon
**What:** Responsive grid of cards using content data array + LucideIcon
**When to use:** Problem, Services, Why Altixia sections
**Example:**
```tsx
const content = useContent()

<div className="grid md:grid-cols-3 gap-8">
  {content.problem.cards.map((card, i) => (
    <motion.div key={i} variants={itemVariants} className="bg-white p-8 rounded-lg border border-[#E8EDF2] shadow-sm hover:shadow-md hover:border-[#3877AF]/30 transition-all">
      <div className="w-12 h-12 bg-[#D5E8F8] rounded-full flex items-center justify-center mb-6">
        <LucideIcon name={card.icon} size={24} className="text-[#3877AF]" />
      </div>
      <h3 className="font-serif text-[#333A49] text-lg font-bold mb-3">{card.title}</h3>
      <p className="text-[#6B7280] leading-relaxed">{card.description}</p>
    </motion.div>
  ))}
</div>
```

### Pattern 3: Animated Counter (Stats Section)
**What:** Count from 0 to target value when scrolled into view
**When to use:** Stats section only
**Example:**
```tsx
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2, ease: 'easeOut' })
    }
  }, [isInView, motionValue, value])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}
```

### Pattern 4: Section Header (Consistent across all sections)
**What:** Centered title (DM Serif Display) + subtitle (DM Sans)
**When to use:** All sections with sectionTitle + subtitle
**Example:**
```tsx
<div className="text-center mb-16">
  <h2 className="font-serif text-[#333A49] text-3xl md:text-4xl font-bold mb-4">
    {content.problem.sectionTitle}
  </h2>
  <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
    {content.problem.subtitle}
  </p>
</div>
```

### Pattern 5: Gemini MCP Integration
**What:** All UI created via Gemini MCP create_frontend with design-system.md
**When to use:** Every new component
**Flow:**
1. Read design-system.md content
2. Call create_frontend with component description + full design system
3. Receive generated TSX
4. Wire up useContent(), LucideIcon, Framer Motion animations
5. Add section id for navbar scroll

### Anti-Patterns to Avoid
- **Direct Lucide imports for content-driven icons:** Always use `LucideIcon` component with string names from content data. Direct imports are only for fixed icons (like ArrowRight in CTAs).
- **Using `animate="visible"` instead of `whileInView`:** Hero uses `animate` because it's above the fold. All Phase 3 sections MUST use `whileInView` for scroll trigger.
- **clsx/tailwind-merge for conditional classes:** Project uses `array.join(' ')` pattern instead (Phase 2 decision).
- **Forgetting `viewport={{ once: true }}`:** Without `once: true`, animations replay on every scroll, which is jarring.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Animated counters | Custom setInterval counter | Framer Motion useMotionValue + animate | Smooth easing, respects reduced motion, handles cleanup |
| Intersection Observer | Raw IntersectionObserver API | Framer Motion useInView hook | Cleaner API, ref-based, works with motion system |
| Icon resolution | Switch/case for icons | LucideIcon component (exists) | Already built, handles missing icons gracefully |
| Scroll animations | Custom scroll event listeners | Framer Motion whileInView | Declarative, performant, handles viewport detection |

## Common Pitfalls

### Pitfall 1: Missing Section IDs for Navbar Scroll
**What goes wrong:** Navbar links (Services, Pourquoi nous, Comment ça marche) don't scroll to sections
**Why it happens:** Forgetting to add `id` attributes matching navbar href anchors
**How to avoid:** Each section wrapper must have the correct id: `id="services"`, `id="pourquoi"`, `id="comment"`, `id="stats"`
**Warning signs:** Clicking navbar links does nothing

### Pitfall 2: Stats Counter Re-rendering
**What goes wrong:** Counter resets or replays when parent re-renders
**Why it happens:** useMotionValue created inside component without proper memoization
**How to avoid:** Use `useInView({ once: true })` and conditionally trigger animate only once
**Warning signs:** Numbers flickering or restarting on language switch

### Pitfall 3: Grid Breakpoint Inconsistency
**What goes wrong:** Cards look cramped on tablet or overflow on mobile
**Why it happens:** Using only md: breakpoint without considering sm: and lg:
**How to avoid:** Problem cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`. Services: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
**Warning signs:** Cards too narrow or too wide at tablet sizes

### Pitfall 4: Pack LLC CTA Colors on Accent Background
**What goes wrong:** Primary CTA button disappears on the accent blue background
**Why it happens:** Brand blue CTA on light blue background = low contrast
**How to avoid:** Use white CTA button with brand blue text on accent background, or ensure sufficient contrast
**Warning signs:** CTA not visually prominent on Pack LLC section

### Pitfall 5: HowItWorks Connector Lines on Mobile
**What goes wrong:** Horizontal connector lines don't transform to vertical on mobile
**Why it happens:** CSS for connector lines not responsive
**How to avoid:** Use CSS pseudo-elements or separate divs with responsive display/rotation
**Warning signs:** Broken layout on mobile with horizontal lines overlapping

## Code Examples

### Section Background Alternation Pattern
```tsx
// In Home.tsx — each section gets its background
<section id="probleme" className="py-20 md:py-24 bg-white">
  <Problem />
</section>
<section id="services" className="py-20 md:py-24 bg-[#F8F9FA]">
  <Services />
</section>
<section id="pack" className="py-20 md:py-24 bg-[#D5E8F8]/30">
  <PackLLC />
</section>
<section id="pourquoi" className="py-20 md:py-24 bg-white">
  <WhyAltixia />
</section>
<section id="comment" className="py-20 md:py-24 bg-[#F8F9FA]">
  <HowItWorks />
</section>
<section className="py-20 md:py-24 bg-[#333A49]">
  <Stats />
</section>
```

### Checklist Pattern (Pack LLC)
```tsx
<ul className="space-y-4">
  {content.packLLC.checklist.map((item, i) => (
    <motion.li key={i} variants={itemVariants} className="flex items-center gap-3">
      <CheckCircle2 className="text-[#10B981] shrink-0" size={22} />
      <span className="text-[#333A49] font-medium">{item}</span>
    </motion.li>
  ))}
</ul>
```

### HowItWorks Timeline (Responsive)
```tsx
// Horizontal on desktop, vertical on mobile
<div className="flex flex-col md:flex-row items-start md:items-center gap-0">
  {content.howItWorks.steps.map((step, i) => (
    <React.Fragment key={i}>
      <motion.div variants={itemVariants} className="flex flex-row md:flex-col items-center text-center">
        <div className="w-14 h-14 bg-[#3877AF] text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0">
          {step.number}
        </div>
        <div className="ml-4 md:ml-0 md:mt-4">
          <h3 className="font-serif text-[#333A49] font-bold">{step.title}</h3>
          <p className="text-[#6B7280] text-sm mt-1 max-w-[200px]">{step.description}</p>
        </div>
      </motion.div>
      {i < content.howItWorks.steps.length - 1 && (
        <div className="hidden md:block flex-1 h-0.5 bg-[#3877AF]/20 mx-2" />
      )}
    </React.Fragment>
  ))}
</div>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Intersection Observer API | Framer Motion useInView | FM 10+ | Simpler, ref-based, works with motion system |
| setInterval counter | useMotionValue + animate | FM 10+ | Smooth easing, cancellable, GC-safe |
| CSS scroll-snap | whileInView animations | FM 7+ | More control, stagger support |

## Open Questions

1. **Section IDs for navbar anchors**
   - What we know: Navbar uses `#services`, `#pourquoi`, `#comment`, `#faq`, `#contact`
   - What's unclear: Exact id placement — on the outer section wrapper or inner div
   - Recommendation: Place id on the outer `<section>` element in Home.tsx, not inside the component

2. **Framer Motion `useMotionValue` with `rounded` display**
   - What we know: useTransform returns a MotionValue, not a plain number
   - What's unclear: Best way to render MotionValue as text in JSX
   - Recommendation: Use `motion.span` with `style` prop or the `useMotionValueEvent` pattern

## Sources

### Primary (HIGH confidence)
- Project codebase: Hero.tsx, LucideIcon.tsx, useContent.ts, content-fr.ts, content.ts types
- design-system.md: Gemini MCP reference implementation with color tokens and patterns
- Framer Motion documentation: whileInView, useInView, useMotionValue, animate APIs

### Secondary (MEDIUM confidence)
- Tailwind CSS 4 responsive grid patterns
- React 19 component patterns

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all libraries already installed and used in Phase 2
- Architecture: HIGH — patterns directly extracted from existing Hero.tsx codebase
- Pitfalls: HIGH — based on concrete codebase analysis and known responsive challenges

**Research date:** 2026-03-01
**Valid until:** 2026-04-01 (stable stack, no moving targets)
