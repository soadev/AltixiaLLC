---
phase: quick
plan: 2
type: execute
wave: 1
depends_on: []
files_modified:
  - public/sitemap.xml
  - public/robots.txt
autonomous: true
requirements: [QUICK-2]
must_haves:
  truths:
    - "sitemap.xml is accessible at /sitemap.xml after build"
    - "robots.txt is accessible at /robots.txt after build"
    - "All 5 routes are listed in the sitemap"
    - "Google Search Console can consume the sitemap"
  artifacts:
    - path: "public/sitemap.xml"
      provides: "XML sitemap for search engine crawlers"
      contains: "urlset"
    - path: "public/robots.txt"
      provides: "Crawler directives with sitemap reference"
      contains: "Sitemap:"
  key_links:
    - from: "public/robots.txt"
      to: "public/sitemap.xml"
      via: "Sitemap: directive"
      pattern: "Sitemap:.*sitemap.xml"
---

<objective>
Create sitemap.xml and robots.txt for Google Search Console indexing.

Purpose: Enable proper SEO indexing of all 5 pages (/, /llc, /itin, /mentions-legales, /confidentialite) on altixia.com.
Output: public/sitemap.xml and public/robots.txt ready for Vite build and GSC submission.
</objective>

<execution_context>
@/Users/enzomaillard/.claude/get-shit-done/workflows/execute-plan.md
@/Users/enzomaillard/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md

Known routes (from src/App.tsx):
- / (Home)
- /llc (LLCPage)
- /itin (ITINPage)
- /mentions-legales (MentionsLegales)
- /confidentialite (PolitiqueConfidentialite)

Domain: https://www.altixia.com
Public dir: public/ (Vite copies to dist/ on build)
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create sitemap.xml and robots.txt</name>
  <files>public/sitemap.xml, public/robots.txt</files>
  <action>
Create public/sitemap.xml with standard XML sitemap format (xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"). Include all 5 URLs:

- https://www.altixia.com/ (priority 1.0, changefreq weekly)
- https://www.altixia.com/llc (priority 0.9, changefreq weekly)
- https://www.altixia.com/itin (priority 0.9, changefreq weekly)
- https://www.altixia.com/mentions-legales (priority 0.3, changefreq yearly)
- https://www.altixia.com/confidentialite (priority 0.3, changefreq yearly)

Set lastmod to 2026-03-12 for all URLs.

Create public/robots.txt:
```
User-agent: *
Allow: /

Sitemap: https://www.altixia.com/sitemap.xml
```
  </action>
  <verify>
    <automated>cd "/Users/enzomaillard/Workspace_Local/Landing Pages/AltixiaLLC" && xmllint --noout public/sitemap.xml 2>&1 && grep -c "<url>" public/sitemap.xml | grep -q "5" && grep -q "Sitemap:" public/robots.txt && echo "PASS"</automated>
  </verify>
  <done>sitemap.xml contains all 5 routes with correct priorities, robots.txt references sitemap, both files in public/ ready for Vite build</done>
</task>

<task type="auto">
  <name>Task 2: Verify build output includes sitemap and robots.txt</name>
  <files></files>
  <action>
Run `npm run build` (or the project's build command) and verify that both public/sitemap.xml and public/robots.txt are copied to dist/. Check dist/sitemap.xml and dist/robots.txt exist and contain the expected content.
  </action>
  <verify>
    <automated>cd "/Users/enzomaillard/Workspace_Local/Landing Pages/AltixiaLLC" && npm run build 2>&1 | tail -5 && test -f dist/sitemap.xml && test -f dist/robots.txt && echo "PASS"</automated>
  </verify>
  <done>Build succeeds, dist/sitemap.xml and dist/robots.txt present and correct</done>
</task>

</tasks>

<verification>
- public/sitemap.xml is valid XML with 5 url entries
- public/robots.txt references the sitemap URL
- npm run build copies both files to dist/
</verification>

<success_criteria>
Both sitemap.xml and robots.txt exist in public/ and dist/, sitemap lists all 5 routes with correct domain, robots.txt allows all crawlers and points to sitemap.
</success_criteria>

<output>
After completion, create `.planning/quick/2-cr-er-un-sitemap-xml-pour-google-search-/2-SUMMARY.md`
</output>
