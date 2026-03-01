# Architecture Research

**Domain:** Premium bilingual React landing page (SPA, static, no backend)
**Researched:** 2026-03-01
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        BROWSER (SPA)                            │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                  React Router v7                          │   │
│  │  route: /         route: /llc      route: *              │   │
│  └────────────────────────┬─────────────────────────────────┘   │
│                           │                                      │
│  ┌────────────────────────▼─────────────────────────────────┐   │
│  │                  App Shell (RootLayout)                   │   │
│  │  ┌────────────┐  ┌────────────────────────────────────┐  │   │
│  │  │  Providers │  │  <Outlet /> (renders page)         │  │   │
│  │  │  I18nCtx   │  └────────────────────────────────────┘  │   │
│  │  └────────────┘                                           │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Page: LandingPage (/)                        │   │
│  │  ┌──────────┐  ┌─────────────────────────────────────┐  │   │
│  │  │  Navbar  │  │  14 Section Components (stacked)    │  │   │
│  │  │ (sticky) │  │  Hero, TrustBar, Problem, Services  │  │   │
│  │  └──────────┘  │  PackLLC, WhyAltixia, HowItWorks    │  │   │
│  │                │  Stats, Objections, Testimonials     │  │   │
│  │                │  FAQ, FinalCTA, Footer               │  │   │
│  │                └─────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Page: LLCPage (/llc)                        │   │
│  │  State comparison: Wyoming / Delaware / New Mexico        │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Global Floating UI                          │   │
│  │  WhatsAppButton (fixed, z-50)                            │   │
│  └──────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                     State Layer                                  │
│  ┌──────────────┐  ┌──────────────────────────────────────┐    │
│  │  I18nContext │  │  localStorage (lang persistence)     │    │
│  │  locale + t()│  │  navigator.languages (detection)     │    │
│  └──────────────┘  └──────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────────┤
│                     Data Layer                                   │
│  ┌─────────────┐  ┌────────────────┐  ┌────────────────────┐   │
│  │  locales/   │  │  content/      │  │  design-system.md  │   │
│  │  fr.json    │  │  sections data │  │  (Gemini contract) │   │
│  │  en.json    │  │  (typed TS)    │  └────────────────────┘   │
│  └─────────────┘  └────────────────┘                           │
└─────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Communicates With |
|-----------|----------------|-------------------|
| `RootLayout` | App shell: mounts providers, renders Outlet | I18nProvider, Router |
| `I18nProvider` | Locale state, `t()` translation fn, localStorage persist | All consumer components via `useI18n()` |
| `Navbar` | Sticky navigation, smooth scroll to section anchors, language toggle | I18nContext, scroll targets |
| `LandingPage` | Assembles all 14 section components in DOM order | All section components |
| `LLCPage` | Wyoming/Delaware/New Mexico comparison content | I18nContext |
| Section components (x14) | Visual presentation of content for one section | I18nContext (reads `t()`), Framer Motion |
| `WhatsAppButton` | Fixed floating CTA, links to wa.me | None (pure link) |
| `AnimatedCounter` | Intersection Observer + Framer Motion numeric counter | I18nContext (for labels) |
| `FAQAccordion` | AnimatePresence expand/collapse FAQ items | I18nContext |
| `locales/fr.json` + `locales/en.json` | All translatable strings, keyed by section | I18nContext |

## Recommended Project Structure

```
src/
├── context/
│   └── I18nContext.tsx        # LanguageProvider + useI18n hook
├── locales/
│   ├── fr.json                # All French strings (14 sections + /llc)
│   └── en.json                # All English strings (14 sections + /llc)
├── pages/
│   ├── LandingPage.tsx        # Assembles 14 sections, no visual logic
│   └── LLCPage.tsx            # /llc route, state comparison
├── sections/
│   ├── Navbar.tsx             # Generated by Gemini MCP
│   ├── Hero.tsx               # Generated by Gemini MCP
│   ├── TrustBar.tsx           # Generated by Gemini MCP
│   ├── Problem.tsx            # Generated by Gemini MCP
│   ├── Services.tsx           # Generated by Gemini MCP
│   ├── PackLLC.tsx            # Generated by Gemini MCP
│   ├── WhyAltixia.tsx         # Generated by Gemini MCP
│   ├── HowItWorks.tsx         # Generated by Gemini MCP
│   ├── Stats.tsx              # Generated by Gemini MCP (+ AnimatedCounter logic)
│   ├── Objections.tsx         # Generated by Gemini MCP
│   ├── Testimonials.tsx       # Generated by Gemini MCP
│   ├── FAQ.tsx                # Generated by Gemini MCP (+ AnimatePresence logic)
│   ├── FinalCTA.tsx           # Generated by Gemini MCP
│   └── Footer.tsx             # Generated by Gemini MCP
├── components/
│   ├── AnimatedCounter.tsx    # Reusable: Intersection Observer + countUp logic
│   ├── WhatsAppButton.tsx     # Fixed floating button (logic only, Gemini styles)
│   └── LanguageToggle.tsx     # FR/EN toggle (logic only, Gemini styles)
├── hooks/
│   ├── useInView.ts           # Intersection Observer wrapper for counter trigger
│   └── useScrollSpy.ts        # Active section tracking for navbar highlight
├── router/
│   └── index.tsx              # createBrowserRouter definition
├── types/
│   └── i18n.ts                # TranslationKey types (from json keys)
├── App.tsx                    # RouterProvider mount point
└── main.tsx                   # Vite entry: ReactDOM.createRoot
```

### Structure Rationale

- **`sections/`:** Each of the 14 landing page sections is a standalone component. Gemini MCP generates them one by one. Isolating them prevents one Gemini call from breaking others and makes `modify_frontend` calls surgical.
- **`context/`:** I18n is the only cross-cutting state. One context, one hook. No Zustand or Redux needed for a static page.
- **`locales/`:** JSON files are the single source of truth for all copy. Loaded at bundle time — no async fetching needed for two languages.
- **`components/`:** Genuinely reusable UI logic (counter, WhatsApp button, toggle) lives here. These are Claude-authored (logic only); Gemini styles them.
- **`hooks/`:** Custom logic extracted from components. `useScrollSpy` tracks which section is active for navbar highlighting. `useInView` wraps Intersection Observer for the stats counter.
- **`router/`:** Route configuration isolated so adding routes never touches page files.
- **`pages/`:** Thin orchestrators. `LandingPage.tsx` is literally just the 14 section imports assembled in order. No logic here.

## Architectural Patterns

### Pattern 1: Gemini-Claude Responsibility Split

**What:** Claude handles all logic (routing, i18n, state, hooks, wiring). Gemini MCP handles all visual output (JSX with Tailwind, layout, responsive, animations). This is enforced by the BRIEF.md contract.

**When to use:** Every time a visual component needs to be created or modified.

**Trade-offs:** Claude cannot "fix a quick alignment" without a Gemini call. This adds latency per UI tweak but guarantees design consistency via the shared `design-system.md`.

**Workflow:**
```
1. generate_vibes → choose vibe → save as design-system.md
2. For each section: create_frontend(sectionSpec, projectRoot)
   → Gemini returns .tsx file content
   → Claude writes file to disk
   → Claude wires i18n props (replaces hardcoded strings with t('key'))
3. For fixes: modify_frontend(existingFile, changeDescription, projectRoot)
4. For reusable widgets: snippet_frontend(widgetSpec, projectRoot)
```

### Pattern 2: Custom i18n Context (No External Library)

**What:** A single React Context provides `locale` (string), `setLocale` (function), and `t(key)` (translation lookup). JSON files are statically imported. `localStorage` persists choice across sessions. `navigator.languages` detects on first visit.

**When to use:** Two-language apps with static content. The moment you add a third language or dynamic server-loaded translations, upgrade to react-i18next.

**Trade-offs:** Zero dependency overhead. No plural/date formatting (not needed here). Type safety requires manually generating `TranslationKey` union from JSON keys.

**Example:**
```typescript
// context/I18nContext.tsx
import fr from '../locales/fr.json';
import en from '../locales/en.json';

type Locale = 'fr' | 'en';
type TranslationKey = keyof typeof fr; // Ensures only valid keys compile

const translations: Record<Locale, typeof fr> = { fr, en };

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const getBrowserLocale = (): Locale => {
    const lang = navigator.languages[0]?.slice(0, 2);
    return lang === 'fr' ? 'fr' : 'en'; // default to EN
  };

  const [locale, setLocale] = useState<Locale>(() => {
    return (localStorage.getItem('altixia-lang') as Locale) ?? getBrowserLocale();
  });

  const switchLocale = (lang: Locale) => {
    setLocale(lang);
    localStorage.setItem('altixia-lang', lang);
  };

  const t = (key: TranslationKey): string => translations[locale][key] ?? key;

  return (
    <I18nContext.Provider value={{ locale, setLocale: switchLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};
```

### Pattern 3: Section Scroll Architecture (Anchor + Smooth Scroll)

**What:** Each section component renders with an `id` attribute matching its section name (e.g., `id="services"`). The Navbar smooth-scrolls to these anchors using `element.scrollIntoView({ behavior: 'smooth' })`. A `useScrollSpy` hook tracks IntersectionObserver entries to highlight the active nav item.

**When to use:** Always on single-page multi-section landing pages. Avoids React Router navigation for in-page sections (which would change the URL unnecessarily).

**Trade-offs:** Works without JavaScript for basic linking. The scroll-spy adds slight complexity but is required for the sticky navbar active state.

**Example:**
```typescript
// hooks/useScrollSpy.ts
export function useScrollSpy(sectionIds: string[], offset = 80) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, [sectionIds, offset]);

  return activeId;
}
```

### Pattern 4: Framer Motion Animation Strategy

**What:** Two distinct animation modes used together.

1. **`whileInView` + `viewport={{ once: true }}`** — entrance animations on scroll. Sections fade/slide in once as user scrolls down. The `once: true` prevents re-triggering on scroll-up (avoids animation fatigue).

2. **`AnimatePresence`** — for FAQ accordion expand/collapse. Wrap the conditionally-rendered content panel in `AnimatePresence` with a `motion.div` that animates `height` and `opacity`.

3. **`variants` with `staggerChildren`** — for lists (service cards, how-it-works steps). The parent `motion.div` orchestrates the timing; children inherit and stagger their animations automatically.

**When to use:** `whileInView` for all sections. `AnimatePresence` for toggle/accordion UI. `variants` for grids and lists of 3+ items.

**Example — Section entrance:**
```typescript
// Used inside Gemini-generated section components
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

<motion.section
  id="services"
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
  {/* content */}
</motion.section>
```

**Example — AnimatedCounter (Stats section):**
```typescript
// components/AnimatedCounter.tsx — Claude authors this logic
export function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) animate(count, target, { duration, ease: 'easeOut' });
  }, [inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
```

### Pattern 5: Route-Level Code Splitting

**What:** `LLCPage` is lazy-loaded because it is an entirely separate route. The main landing page is NOT lazy-loaded — it is the primary entry point and its sections should all be in the initial bundle.

**When to use:** Apply `React.lazy()` only at the route level for `/llc`. Do NOT lazy-load individual sections on the landing page — the sections are sequential and need to render without a waterfall of loading states.

**Trade-offs:** The landing page bundle will include all 14 section components. At Vite's tree-shaking efficiency this is acceptable for a static landing page. Lazy-loading sections would create awkward Suspense boundaries mid-scroll.

**Example:**
```typescript
// router/index.tsx
import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';
import RootLayout from '../App';
import LandingPage from '../pages/LandingPage';

const LLCPage = lazy(() => import('../pages/LLCPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: 'llc',
        element: (
          <Suspense fallback={<div className="min-h-screen" />}>
            <LLCPage />
          </Suspense>
        )
      }
    ]
  }
]);
```

## Data Flow

### Language Toggle Flow

```
User clicks FR/EN toggle
    ↓
LanguageToggle component calls setLocale('fr')
    ↓
I18nContext updates locale state
    ↓
localStorage.setItem('altixia-lang', 'fr')
    ↓
All components consuming useI18n() re-render
    ↓
t('key') returns French string from fr.json
    ↓
UI updates instantly (no page reload, no network call)
```

### Gemini MCP Design Flow

```
Claude prepares section spec (purpose, content keys, layout intent)
    ↓
Claude calls create_frontend(spec, { projectRoot }) via Gemini MCP
    ↓
Gemini reads design-system.md from projectRoot
    ↓
Gemini returns .tsx file with Tailwind + Framer Motion + design tokens
    ↓
Claude writes file to src/sections/SectionName.tsx
    ↓
Claude replaces hardcoded text with t('section.key') calls
    ↓
Claude imports component into LandingPage.tsx
    ↓
Section renders in browser
```

### Scroll Navigation Flow

```
User clicks nav anchor link (e.g., "Services")
    ↓
Navbar onClick: document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
    ↓
Browser smooth-scrolls to section
    ↓
IntersectionObserver in useScrollSpy fires
    ↓
activeId state updates to 'services'
    ↓
Navbar re-renders, 'Services' link gets active style
```

### Stats Counter Flow

```
Page renders → AnimatedCounter mounts (count starts at 0)
    ↓
IntersectionObserver watches counter element
    ↓
User scrolls to Stats section → element enters viewport
    ↓
useInView returns true
    ↓
animate(count, target, { duration: 2 }) fires
    ↓
useMotionValue drives re-renders smoothly
    ↓
Counter increments from 0 → target (e.g., 15 LLCs)
```

## Suggested Build Order

This order minimizes blockers. Each phase can be reviewed before the next begins.

```
Phase 1 — Foundation (no visual output yet)
├── Vite 6 + React 19 + TypeScript setup
├── Tailwind CSS 4 config
├── React Router v7 config (/, /llc routes)
├── I18nContext + fr.json + en.json (all 14 sections + llc content)
└── vite.config.ts with manual chunk for vendor

Phase 2 — Design System (Gemini MCP)
├── generate_vibes → choose vibe
└── design-system.md saved to project root

Phase 3 — Core Sections (Gemini MCP, high priority)
├── Navbar (sticky, scroll-to-section, language toggle)
├── Hero (first impression, primary CTA)
├── Footer (shared layout anchor)
└── WhatsAppButton (global floating UI)

Phase 4 — Landing Page Sections (Gemini MCP, sequential)
├── TrustBar
├── Problem
├── Services
├── PackLLC
├── WhyAltixia
├── HowItWorks
├── Stats (+ AnimatedCounter logic by Claude)
├── Objections
├── Testimonials
├── FAQ (+ AnimatePresence logic by Claude)
└── FinalCTA

Phase 5 — /llc Route (Gemini MCP)
├── LLCPage layout
└── Wyoming/Delaware/NM comparison component

Phase 6 — Logic Layer (Claude only)
├── useScrollSpy hook → Navbar active state
├── AnimatedCounter component
├── Browser language detection in I18nContext
└── SEO: meta tags, Open Graph in index.html

Phase 7 — Polish & Deploy
├── Framer Motion entrance variants for all sections
├── Mobile responsiveness review
├── Vercel deployment config
└── Final content QA (zero placeholders check)
```

**Dependency rules:**
- design-system.md MUST exist before any Gemini MCP frontend call
- I18nContext MUST exist before sections consume `t()`
- RootLayout MUST exist before pages mount
- Stats section MUST have AnimatedCounter before being interactive

## Scaling Considerations

This is a static landing page. Traditional scaling concerns do not apply. Performance concerns are front-end only.

| Scale | Architecture Adjustments |
|-------|--------------------------|
| Current: 0-100k visits/mo | Static SPA on Vercel CDN — no changes needed |
| Future: Add blog/articles | Consider Astro or Next.js for SSG, keep this SPA for landing |
| Future: Add contact form | Add serverless function (Vercel Edge Function or Resend) |
| Future: Third language | Upgrade from custom i18n to react-i18next |

### Performance Priorities

1. **First bottleneck — Initial JS bundle size:** Vite tree-shakes aggressively. Framer Motion's `motion` import is modular in v11+. Watch for: large font files, unoptimized images. Use Rollup Plugin Visualizer to audit.
2. **Second bottleneck — Animation jank on mobile:** Use `will-change: transform` only on elements actively animating. Prefer `opacity` + `transform` over layout-shifting properties. Test on low-end Android.

## Anti-Patterns

### Anti-Pattern 1: Claude Writing JSX/Tailwind Directly

**What people do:** Claude writes a quick fix for a section's padding or color directly in the .tsx file.

**Why it's wrong:** Breaks the design system contract. The design-system.md token is no longer the source of truth. Consistency drifts. Gemini cannot diff or modify Claude-authored visual code reliably.

**Do this instead:** Every visual change — no matter how small — goes through `modify_frontend`. Pass the existing file content + the change description. Gemini returns updated code. Claude writes the file.

### Anti-Pattern 2: Hardcoding Strings in Section Components

**What people do:** Gemini generates a section with hardcoded French text (e.g., `"Créez votre LLC"`). Claude leaves it hardcoded because it looks fine in French.

**Why it's wrong:** The English version of the site shows French text. Language toggle is broken for that section.

**Do this instead:** After every Gemini call, Claude's mandatory step is to find all visible text strings in the generated component and replace them with `t('section.key')` references. The JSON files hold all copy.

### Anti-Pattern 3: Lazy-Loading Individual Sections

**What people do:** Apply `React.lazy()` to each of the 14 sections to reduce initial bundle.

**Why it's wrong:** Creates 14 separate Suspense boundaries mid-page. Users see loading spinners while scrolling. Network waterfalls on slow connections. Framer Motion's `whileInView` triggers before content renders.

**Do this instead:** Bundle all 14 sections in the main chunk. Only lazy-load the `/llc` route. The initial bundle for a landing page with 14 Tailwind-styled sections is typically 200-400KB gzipped — well within acceptable range.

### Anti-Pattern 4: Using React State for Scroll Position

**What people do:** Add a `scroll` event listener that sets React state on every pixel of scroll, driving navbar behavior.

**Why it's wrong:** Triggers re-renders on every scroll event (60fps). Causes performance degradation, especially with Framer Motion animations running simultaneously.

**Do this instead:** Use `IntersectionObserver` for section detection (no scroll event polling). For parallax effects in Hero, use Framer Motion's `useScroll` + `useTransform` which runs off the main thread via `MotionValue` — no React state involved.

### Anti-Pattern 5: Monolithic Translation Files Without Namespacing

**What people do:** Dump all 14 sections' strings into a flat `fr.json` with keys like `title1`, `text2`, `button3`.

**Why it's wrong:** Impossible to maintain. When the client asks to update the Services section, you cannot find the right keys.

**Do this instead:** Namespace keys by section:
```json
{
  "navbar.services": "Services",
  "hero.headline": "Créez votre LLC américaine",
  "services.card1.title": "Création LLC",
  "faq.q1.question": "Qu'est-ce qu'une LLC ?"
}
```

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| WhatsApp (wa.me/13073105297) | Static `<a href>` link | No SDK needed, open in new tab |
| Vercel (deployment) | `vercel.json` with SPA rewrite rule | Needed for `/llc` route to work on direct URL access |
| Google Fonts | CSS `@import` in index.css or Vite plugin | Load DM Serif Display + DM Sans only |
| Gemini MCP (design) | MCP tool calls from Claude Code | Requires MCP server running in Claude Code session |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| I18nContext ↔ All sections | React Context + `useI18n()` hook | No prop drilling — all sections call hook directly |
| LandingPage ↔ Sections | Import + render (no props) | Sections are self-contained; they pull their own translations |
| Navbar ↔ Sections | DOM ID anchors + IntersectionObserver | No component-to-component communication; DOM is the interface |
| AnimatedCounter ↔ Stats | Props: `target`, `duration`, `suffix` | Counter is reused for each stat (15 LLCs, 100%, 48h, 11 countries) |
| Router ↔ LLCPage | `React.lazy()` + `Suspense` | LLCPage chunk only loads when user navigates to /llc |
| Claude ↔ Gemini MCP | MCP tool calls with design-system.md context | Claude sends spec, Gemini returns .tsx; Claude handles file write + i18n wiring |

## Sources

- Gemini Design MCP official workflow: https://gemini-design-mcp.com/ (HIGH confidence — official docs)
- Framer Motion scroll animations: https://blog.logrocket.com/react-scroll-animations-framer-motion/ (MEDIUM confidence — verified with official docs pattern)
- Framer Motion whileInView pattern: https://www.freecodecamp.org/news/create-scroll-animations-with-framer-motion-and-react/ (MEDIUM confidence)
- React Router v7 createBrowserRouter: https://reactrouter.com/start/data/routing (HIGH confidence — official docs)
- React custom i18n Context pattern: https://dev.to/seeratawan01/react-internationalization-i18n-using-context-api-3ocj (MEDIUM confidence)
- Vite code splitting best practices: https://sambitsahoo.com/blog/vite-code-splitting-that-works.html (MEDIUM confidence)
- React folder structure principles: https://www.robinwieruch.de/react-folder-structure/ (MEDIUM confidence)
- Vite official documentation: https://vite.dev/guide/ (HIGH confidence — official docs)

---
*Architecture research for: Altixia LLC Premium Bilingual Landing Page*
*Researched: 2026-03-01*
