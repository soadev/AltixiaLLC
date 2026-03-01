# Design System — Altixia LLC

**Vibe: Modern Classic** — Confidence, Stability, Official
**Fonts:** DM Serif Display (serif, titles) + DM Sans (sans-serif, body)
**Generated via:** Gemini MCP generate_vibes

## Reference Implementation

```tsx
{/* VIBE_1 — THE MODERN CLASSIC */}
<nav className="border-b border-[#E8EDF2] py-6 px-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-sm z-40">
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 bg-[#3877AF] rounded flex items-center justify-center text-white font-bold text-xl italic">A</div>
    <span className="text-[#333A49] font-bold text-xl tracking-tight">ALTIXIA LLC</span>
  </div>
  <div className="hidden md:flex gap-8 items-center text-[#333A49] font-medium">
    <a href="#" className="hover:text-[#3877AF]">Services</a>
    <a href="#" className="hover:text-[#3877AF]">Tarifs</a>
    <a href="#" className="hover:text-[#3877AF]">Contact</a>
    <button className="bg-[#3877AF] text-white px-6 py-2.5 rounded hover:bg-[#2D6193] transition-colors">
      Commander Pack LLC
    </button>
  </div>
</nav>

<section className="relative overflow-hidden py-24 px-8 border-b border-[#E8EDF2]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div>
      <div className="inline-flex items-center gap-2 bg-[#D5E8F8] text-[#3877AF] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
        <ShieldCheck size={16} /> Expertise US certifiée
      </div>
      <h1 className="font-serif text-[#333A49] mb-8">
        Créez votre LLC américaine en <span className="text-[#3877AF]">toute confiance</span>
      </h1>
      <p className="text-[#6B7280] mb-10 max-w-lg">
        Expertise juridique et fiscale pour expatriés français. Nous gérons votre structure US de A à Z : création, fiscalité et conformité bancaire.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="bg-[#3877AF] text-white px-8 py-4 rounded font-bold hover:bg-[#2D6193] shadow-lg shadow-[#3877AF]/20 flex items-center gap-2">
          Commander mon Pack LLC <ArrowRight size={20} />
        </button>
        <button className="bg-[#F7F9FC] text-[#333A49] px-8 py-4 rounded font-bold border border-[#E8EDF2] hover:bg-[#E8EDF2] flex items-center gap-2">
          <MessageCircle size={20} className="text-[#10B981]" /> Contact WhatsApp
        </button>
      </div>
    </div>
    <div className="relative">
      <div className="absolute -inset-4 bg-[#D5E8F8] rounded-2xl -rotate-2 z-0"></div>
      <div className="relative bg-white p-8 rounded-xl border border-[#E8EDF2] shadow-xl z-10">
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-[#F7F9FC] rounded-lg">
            <CheckCircle2 className="text-[#10B981] mt-1" />
            <div>
              <h4 className="font-bold text-[#333A49]">Accompagnement 100% en Français</h4>
              <p className="text-sm text-[#6B7280]">Zéro barrière de la langue pour vos démarches US.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-[#F7F9FC] rounded-lg">
            <Clock className="text-[#3877AF] mt-1" />
            <div>
              <h4 className="font-bold text-[#333A49]">Délai record : 48h</h4>
              <p className="text-sm text-[#6B7280]">Processus optimisé pour un lancement rapide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-24 px-8 bg-[#F7F9FC]">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="font-serif text-[#333A49] mb-4">Nos Services Experts</h2>
      <p className="text-[#6B7280] max-w-2xl mx-auto">Une solution complète pour piloter votre activité internationale depuis les États-Unis.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {SERVICES.map((s, idx) => (
        <div key={idx} className="bg-white p-8 border border-[#E8EDF2] rounded-lg hover:border-[#3877AF] transition-all group">
          <div className="w-12 h-12 bg-[#D5E8F8] rounded-lg flex items-center justify-center text-[#3877AF] mb-6 group-hover:bg-[#3877AF] group-hover:text-white transition-colors">
            <s.icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#333A49] mb-3">{s.title}</h3>
          <p className="text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-20 bg-[#333A49] text-white">
  <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
    {STATS.map((stat, idx) => (
      <div key={idx}>
        <div className="text-4xl font-serif text-[#9BCAEF] mb-2">{stat.value}</div>
        <div className="uppercase tracking-widest text-xs font-bold text-white/60">{stat.label}</div>
      </div>
    ))}
  </div>
</section>

<footer className="bg-white py-12 px-8 border-t border-[#E8EDF2]">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-[#333A49] rounded flex items-center justify-center text-white font-bold text-sm italic">A</div>
      <span className="text-[#333A49] font-bold text-lg">ALTIXIA LLC</span>
    </div>
    <div className="text-[#6B7280] text-sm">© 2024 Altixia LLC. Wyoming, USA. Tous droits réservés.</div>
    <div className="flex gap-6">
      <a href="#" className="text-sm text-[#3877AF] hover:underline">Mentions légales</a>
      <a href="#" className="text-sm text-[#3877AF] hover:underline">Conditions Générales</a>
    </div>
  </div>
</footer>
```

## Design Tokens

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#3877AF` | CTAs, titles, links, accents |
| Primary Light | `#D5E8F8` | Alternate backgrounds, cards, badges |
| Dark Navy | `#333A49` | Text, titles, footer background |
| Medium Blue | `#9BCAEF` | Secondary accents, hover, borders |
| White | `#FFFFFF` | Main background |
| Off-White | `#F7F9FC` | Alternate section backgrounds |
| Light Gray | `#E8EDF2` | Borders, separators |
| Text Secondary | `#6B7280` | Body text, descriptions |
| Hover Blue | `#2D6193` | CTA hover state |
| Success Green | `#10B981` | Trust indicators, checkmarks |

### Typography
| Element | Font | Size (Desktop) | Size (Mobile) | Weight |
|---------|------|----------------|---------------|--------|
| H1 | DM Serif Display | 56px | 36px | 700 |
| H2 | DM Serif Display | 40px | 28px | 700 |
| H3 | DM Sans | 24px | 20px | 600 |
| Body | DM Sans | 18px | 16px | 400, line-height 1.7 |
| Labels | DM Sans | 14px | 14px | 500, uppercase, tracking-wide |
| Nav Links | DM Sans | 16px | 16px | 500 |

### Spacing
| Context | Value |
|---------|-------|
| Section padding (Y) | `py-24` (6rem) |
| Section padding (X) | `px-8` (2rem) |
| Max content width | `max-w-6xl` (72rem) |
| Card padding | `p-8` (2rem) |
| Card gap | `gap-8` (2rem) |
| Element gap (small) | `gap-2` to `gap-4` |
| Mobile padding | `px-5` (1.25rem) |

### Component Patterns

**Primary Button:**
```
bg-[#3877AF] text-white px-8 py-4 rounded font-bold hover:bg-[#2D6193] shadow-lg shadow-[#3877AF]/20 flex items-center gap-2
```

**Secondary Button:**
```
bg-[#F7F9FC] text-[#333A49] px-8 py-4 rounded font-bold border border-[#E8EDF2] hover:bg-[#E8EDF2] flex items-center gap-2
```

**Badge:**
```
inline-flex items-center gap-2 bg-[#D5E8F8] text-[#3877AF] px-4 py-1.5 rounded-full text-sm font-bold
```

**Card:**
```
bg-white p-8 border border-[#E8EDF2] rounded-lg hover:border-[#3877AF] transition-all group
```

**Card Icon Container:**
```
w-12 h-12 bg-[#D5E8F8] rounded-lg flex items-center justify-center text-[#3877AF] group-hover:bg-[#3877AF] group-hover:text-white transition-colors
```

**Section (Alternate BG):**
```
py-24 px-8 bg-[#F7F9FC]
```

**Section (Dark BG):**
```
py-20 bg-[#333A49] text-white
```

**Stats Counter:**
```
text-4xl font-serif text-[#9BCAEF] mb-2  (value)
uppercase tracking-widest text-xs font-bold text-white/60  (label)
```

**Navbar:**
```
border-b border-[#E8EDF2] py-6 px-8 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-sm z-40
```

**Logo:**
```
w-10 h-10 bg-[#3877AF] rounded flex items-center justify-center text-white font-bold text-xl italic
```

**Trust Item:**
```
flex items-start gap-4 p-4 bg-[#F7F9FC] rounded-lg
```

### Responsive Breakpoints
| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | < 768px | Stack all grids to single column, padding 20px |
| Tablet | 768px+ | 2-column grids, padding 40px |
| Desktop | 1024px+ | Full grid layouts, max-width 1280px, padding 80px |

### Animation Tokens (Framer Motion)
| Animation | Config |
|-----------|--------|
| Fade in + slide up | `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}` |
| Stagger children | `staggerChildren: 0.1` |
| Transition | `duration: 0.5, ease: "easeOut"` |
| Hover scale | `whileHover={{ scale: 1.02 }}` |
| Color transition | `transition-colors` (CSS) |

---
*Generated via Gemini MCP generate_vibes — Vibe 1: Modern Classic*
*DM Serif Display + DM Sans*
