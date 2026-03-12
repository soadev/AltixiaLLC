---
phase: quick
plan: 2
subsystem: seo
tags: [sitemap, robots, seo, google-search-console]
dependency_graph:
  requires: []
  provides: [sitemap-xml, robots-txt]
  affects: [seo-indexing, google-search-console]
tech_stack:
  added: []
  patterns: [xml-sitemap-0.9-schema, robots-txt-standard]
key_files:
  created:
    - public/sitemap.xml
    - public/robots.txt
  modified: []
decisions:
  - "lastmod set to 2026-03-12 for all URLs"
  - "Home and service pages (/, /llc, /itin) get weekly changefreq; legal pages get yearly"
  - "Priority 1.0 for home, 0.9 for service pages, 0.3 for legal pages"
metrics:
  duration: "~1 min"
  completed_date: "2026-03-12"
  tasks_completed: 2
  files_created: 2
  files_modified: 0
---

# Quick Task 2: Create sitemap.xml and robots.txt — Summary

**One-liner:** XML sitemap covering all 5 routes with priority tiers plus robots.txt linking to sitemap, ready for Google Search Console submission.

## What Was Built

- `public/sitemap.xml` — Standard XML sitemap (sitemaps.org/0.9 schema) listing all 5 routes with correct priorities, changefreq values, and lastmod 2026-03-12
- `public/robots.txt` — Crawler directives allowing all bots with a `Sitemap:` directive pointing to `https://www.altixia.com/sitemap.xml`

Both files are placed in `public/` so Vite copies them verbatim to `dist/` on build.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Create sitemap.xml and robots.txt | 532bba1 | public/sitemap.xml, public/robots.txt |
| 2 | Verify build output includes sitemap and robots.txt | — (verification only) | dist/sitemap.xml, dist/robots.txt confirmed present |

## Verification Results

- `xmllint --noout public/sitemap.xml` — PASS (valid XML)
- `grep -c "<url>" public/sitemap.xml` — 5 (all routes present)
- `grep -q "Sitemap:" public/robots.txt` — PASS
- `npm run build` — PASS, `dist/sitemap.xml` and `dist/robots.txt` confirmed present

## Route Coverage

| URL | Priority | changefreq |
|-----|----------|------------|
| https://www.altixia.com/ | 1.0 | weekly |
| https://www.altixia.com/llc | 0.9 | weekly |
| https://www.altixia.com/itin | 0.9 | weekly |
| https://www.altixia.com/mentions-legales | 0.3 | yearly |
| https://www.altixia.com/confidentialite | 0.3 | yearly |

## Deviations from Plan

None — plan executed exactly as written.

## Next Steps (out of scope)

After deployment, submit `https://www.altixia.com/sitemap.xml` to Google Search Console via the Sitemaps report.

## Self-Check: PASSED

- public/sitemap.xml: FOUND
- public/robots.txt: FOUND
- Commit 532bba1: FOUND
