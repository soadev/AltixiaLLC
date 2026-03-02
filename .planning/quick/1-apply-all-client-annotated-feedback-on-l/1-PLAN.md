---
phase: quick
plan: 1
type: execute
wave: 1
depends_on: []
files_modified:
  - src/data/content-fr.ts
  - src/data/content-en.ts
  - src/types/content.ts
  - src/components/Hero.tsx
  - src/components/FAQ.tsx
  - src/components/FinalCTA.tsx
  - src/components/Services.tsx
  - src/components/LucideIcon.tsx
autonomous: false
requirements: [CLIENT-FEEDBACK-ALL]

must_haves:
  truths:
    - "All 22+ client-annotated text changes are applied in FR content"
    - "EN content is updated to match FR changes where applicable"
    - "New Compte Bancaire Offshore service card appears in services grid"
    - "FAQ contact answer includes WhatsApp link"
    - "Final CTA has a Prendre Rendez-vous button"
    - "Hero card shows IRS accredited Tax Preparer instead of Conformite Totale"
  artifacts:
    - path: "src/data/content-fr.ts"
      provides: "All FR text changes"
    - path: "src/data/content-en.ts"
      provides: "Matching EN text changes"
    - path: "src/components/Hero.tsx"
      provides: "Updated hero card text"
    - path: "src/components/FAQ.tsx"
      provides: "WhatsApp link rendering in contact FAQ"
    - path: "src/components/FinalCTA.tsx"
      provides: "Prendre Rendez-vous button"
  key_links:
    - from: "src/data/content-fr.ts"
      to: "src/components/*"
      via: "useContent hook"
      pattern: "content\\."
---

<objective>
Apply all 22+ client-annotated feedback changes to the Altixia LLC landing page. These are text corrections, additions, and minor feature additions (new service card, WhatsApp link in FAQ, booking button in CTA) based on client review.

Purpose: Align landing page content with client's exact specifications and corrections.
Output: Updated content files and modified components reflecting all client feedback.
</objective>

<execution_context>
@/Users/enzomaillard/.claude/get-shit-done/workflows/execute-plan.md
@/Users/enzomaillard/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@src/data/content-fr.ts
@src/data/content-en.ts
@src/types/content.ts
@src/components/Hero.tsx
@src/components/FAQ.tsx
@src/components/FinalCTA.tsx
@src/components/Services.tsx
@src/components/LucideIcon.tsx
</context>

<tasks>

<task type="auto">
  <name>Task 1: Apply all content text changes to content-fr.ts and content-en.ts</name>
  <files>src/data/content-fr.ts, src/data/content-en.ts</files>
  <action>
Apply ALL of the following text changes to content-fr.ts (and equivalent EN translations in content-en.ts):

**Hero section (content-fr.ts):**
1. trustBar items[0]: "LLC créee en 48h" -> "LLC créee en 48h ouvrees"
2. hero.subtitle: Add "2 comptes bancaires + comptabilite de base" — append to the existing subtitle after "tout est gere, en francais." so it reads: "...tout est inclus, tout est gere, en francais. 2 comptes bancaires + comptabilite de base."
3. trustBar items[1]: "100% de reussite" -> "100% de reussite pour les creations"
4. hero.trustBadges[0]: "LLC créee en 48h" -> "LLC créee en 48h ouvrees"
5. hero.trustBadges[1]: "100% de taux de reussite" -> "100% de reussite pour les creations"

**Services cards (content-fr.ts services.cards):**
6. International card (index 6): Change "Thailande" to "Paraguay" in description. New text: "Structures a Hong Kong et dans differents pays selon votre projet d'expatriation. Residence fiscale au Paraguay et dans d'autres juridictions. Setup complet et evolutif."
7. EIN card (index 1): Add "en 1 a 24h max apres ouverture" to description. New text: "Votre numero d'identification employeur (Employer Identification Number) aupres de l'IRS, en 1 a 24h max apres ouverture. Indispensable pour operer, ouvrir un compte bancaire et facturer."
8. Bank account card (index 3): Add "changement d'adresse, ajout d'un nom commercial, changement des actionnaires etc..." to description. New text: "Assistance complete pour l'ouverture de comptes bancaires americains et de PSP (Payment Service Providers) pour votre LLC. Sans les blocages lies aux adresses partagees. Changement d'adresse, ajout d'un nom commercial, changement des actionnaires etc..."
9. Comptabilite card (index 4): Add "assistance pour la" prefix and "etc..." at end. New text: "Assistance pour la tenue comptable, declarations annuelles, formulaires W-8BEN, W-8BEN-E, FBAR 114, et tous les formulaires IRS necessaires etc..."
10. IT and Web card (index 7): Add "emails" after "vitrine," and "tracking" at end. New text: "Site internet vitrine, emails, hebergement, nom de domaine, mise en place des outils comptables, abonnement telephonique US pour votre societe. L'infrastructure technique de votre LLC. Tracking."
11. Conseil fiscal card (index 5): Add "avec alertes et soutien" at end. New text: "Pas de one-shot. Accompagnement fiscal dans la duree, car une LLC doit vivre, tenir une comptabilite, effectuer des declarations et eviter les erreurs couteuses. Avec alertes et soutien."
12. Sur-mesure / Fingerprint card — this is in whyAltixia section, card index 5 ("Du sur-mesure, pas de l'usine"). Add "Des adresses physiques differenciees." at start of description, and "et peut sur demande obtenir une adresse unique" at end. New text: "Des adresses physiques differenciees. Contrairement aux grosses plateformes qui ouvrent des milliers de LLC a la meme adresse, ce qui bloque les comptes bancaires, chez Altixia, chaque client est unique et peut sur demande obtenir une adresse unique."
13. Add NEW service card at end of services.cards array with icon 'Landmark', title 'Comptes Bancaires Off Shore', description "Et d'autres solutions dans le meme domaine sur demande...", badge 'Sur demande'.
14. packLLC.callout: Change ending to include "propose des solutions qui fonctionnent sur-mesure." New text: "Pourquoi pas de LLC seule ? Parce que les gros prestataires low-cost creent des milliers de LLC a la meme adresse. Resultat : vos comptes bancaires et PSP sont bloques car trop de scammers partagent cette adresse. Chez Altixia, on propose des solutions qui fonctionnent sur-mesure."

**FAQ section (content-fr.ts faq.items):**
15. Garantie FAQ (index 9, "Quelle garantie..."): Add "EIN, Certificat de bonne tenue, Declaration B12" after "(actes de constitution, attestation ITIN, etc.)". New answer: "...chaque prestation donne lieu a un document officiel attestant sa realisation (actes de constitution, attestation ITIN, EIN, Certificat de bonne tenue, Declaration B12, etc.). Et surtout..."
16. Low-cost FAQ (index 5, "Pourquoi ne pas faire seul..."): Remove parentheses from "(Bizee, SimplifyLLC, etc.)". New: "Les plateformes low-cost Bizee, SimplifyLLC, etc. creent..."
17. Contact FAQ (index 10, "Comment je vous contacte ?"): Add WhatsApp link. Change answer to: "Trois options : 1) WhatsApp au +1 (307) 310-5297 (wa.me/13073105297), c'est le plus rapide. 2) Reservez un appel gratuit. 3) Remplissez le formulaire et payez directement en ligne. On s'adapte a votre preference."

**Objections / Realite Altixia section (content-fr.ts objections.items):**
18. First objection (index 0): Add "et font perdre des semaines ou des mois." after "Et les erreurs coutent cher." New reality: "...C'est un autre metier. Et les erreurs coutent cher et font perdre des semaines ou des mois."

**Testimonials section (content-fr.ts testimonials.items):**
19. Add new testimonial item with quote "Des reponses claires et precises adaptees a mon profil", author "Client Altixia", role "Entrepreneur", location "France".

**Final CTA (content-fr.ts finalCta):**
20. Add a new field ctaBooking with label "Prendre Rendez-vous" and href "https://wa.me/13073105297"

**Links (content-fr.ts):**
21. In packLLC section, add a links array with two items: label "Voir les packages LLC pack" href "#services", and label "Demande d'ITIN solo" href "https://wa.me/13073105297?text=Bonjour%2C%20je%20souhaite%20faire%20une%20demande%20d%27ITIN%20solo".

**Apply equivalent EN translations** for all changes above in content-en.ts. For the new service card, use title "Offshore Bank Accounts" and description "And other solutions in the same area on request...". For the new testimonial, use quote "Clear and precise answers tailored to my profile". For booking CTA, use "Book a Consultation".

NOTE: Use proper French accents in the actual code (the action text above stripped some for encoding safety). Match the accent style already used in the existing content files.

IMPORTANT: The 'Landmark' icon must be added to LucideIcon.tsx resolver if it is not already mapped.
  </action>
  <verify>
    <automated>cd "/Users/enzomaillard/Workspace_Local/Landing Pages/AltixiaLLC" && npx tsc --noEmit 2>&1 | head -30</automated>
  </verify>
  <done>All 21 text/content changes applied in both FR and EN content files, TypeScript compiles without errors</done>
</task>

<task type="auto">
  <name>Task 2: Update types and components for new features</name>
  <files>src/types/content.ts, src/components/Hero.tsx, src/components/FAQ.tsx, src/components/FinalCTA.tsx, src/components/LucideIcon.tsx</files>
  <action>
1. Update types (src/types/content.ts): Add optional ctaBooking of type LinkItem to FinalCTAContent interface. Add optional links array of LinkItem to PackLLCContent interface.

2. Update Hero.tsx (src/components/Hero.tsx): Line 158 change hardcoded text "Processus optimise et direct avec les autorites du Wyoming" to "Processus optimise et direct avec les autorites de l'etat US" (change "du Wyoming" to "de l'etat US"). Line 178 change hardcoded text "Conformite Totale" to "IRS accredited Tax Preparer".

3. Update FAQ.tsx (src/components/FAQ.tsx): The FAQ answer for the contact question contains a WhatsApp link reference "(wa.me/13073105297)". Modify the answer rendering to detect URL patterns matching wa.me/DIGITS and render them as clickable links. In the p tag rendering item.answer (line 82), replace the simple text render with a function that splits text on URL-like patterns and renders matched URLs as anchor tags with className "text-[#3877AF] underline hover:text-[#2D6193]", target="_blank", rel="noopener noreferrer". Keep it simple with a regex split and map approach.

4. Update FinalCTA.tsx (src/components/FinalCTA.tsx): Destructure ctaBooking from content.finalCta (optional). Add a third button between the primary and secondary buttons, conditionally rendered if ctaBooking exists. Use green color (#10B981) with hover (#0D9668) to differentiate from the blue primary CTA. Match the same motion.a pattern as other buttons with whileHover scale 1.02 and whileTap scale 0.98.

5. Update LucideIcon.tsx: Add 'Landmark' to the icon imports and resolver map following the existing pattern in the file.
  </action>
  <verify>
    <automated>cd "/Users/enzomaillard/Workspace_Local/Landing Pages/AltixiaLLC" && npx tsc --noEmit && npx vite build 2>&1 | tail -5</automated>
  </verify>
  <done>Hero card shows "IRS accredited Tax Preparer" and "de l'etat US", FAQ renders WhatsApp as clickable link, FinalCTA shows green "Prendre Rendez-vous" button, Landmark icon resolves, build succeeds</done>
</task>

<task type="checkpoint:human-verify" gate="blocking">
  <name>Task 3: Visual verification of all client feedback changes</name>
  <files>N/A</files>
  <action>
Human verifies all 22+ client feedback changes are correctly applied by reviewing the running dev server.
  </action>
  <verify>Human confirms all changes match client annotations</verify>
  <done>All client feedback changes visually confirmed on the live dev server</done>
</task>

</tasks>

<verification>
- TypeScript compilation passes (npx tsc --noEmit)
- Vite build succeeds (npx vite build)
- All 22+ text changes visible in browser
- No broken layouts from added content
</verification>

<success_criteria>
All client-annotated feedback changes are live on the landing page, with correct text in both FR and EN, new service card visible, WhatsApp link clickable in FAQ, and booking button in final CTA.
</success_criteria>

<output>
After completion, create .planning/quick/1-apply-all-client-annotated-feedback-on-l/1-SUMMARY.md
</output>
