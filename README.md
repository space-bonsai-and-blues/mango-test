# Nara — personal/professional site

Astro static site. Stack: Astro → GitHub → Cloudflare Pages.

## Structure

```
src/
  pages/
    index.astro           homepage (Apps / Case studies / Writing / Indra's net)
    apps/index.astro       Apps page — link-out cards to the Lovable apps
    case-studies/index.astro  Case studies — placeholder cards for now
    writing/index.astro    Writing — auto-lists everything in content/writing
    writing/[slug].astro   individual writing post page
  content/
    writing/*.md            one Markdown file per piece — this is the whole
                             content model, no CMS yet
  content.config.ts          schema for the writing collection
  components/
    IndraNet.astro          the homepage's interactive SVG
    AppCard.astro
    CaseStudyCard.astro
    WritingCard.astro
  layouts/
    BaseLayout.astro        head, fonts, nav, footer
  styles/
    global.css              design tokens (colour, type, spacing) live here
```

## Adding a writing post

Add a new Markdown file to `src/content/writing/`. Frontmatter shape:

```md
---
title: "Post title"
description: "One or two sentences — this shows in the list and in <meta>."
date: 2026-07-14
publication: "Space Bonsai and Blues"   # optional
tags: ["ai collaboration"]              # optional
draft: false                            # true hides it from all listings
---

Body in Markdown.
```

It'll appear automatically on `/writing` and get its own page at
`/writing/<filename-without-extension>`. Three placeholder posts are in
there now, clearly marked — delete them once real posts replace them.

This works fine over raw GitHub editing for now. If that gets tedious,
Decap CMS (or similar) is the documented fallback — it would sit in front
of the same `src/content/writing/` folder, so nothing about this structure
needs to change to add it later.

**Open question, flagged in the handoff note:** whether Writing stays
"tidy articles" or partly becomes a digital garden (seedling/evergreen
style). Worth deciding before the content model calcifies, since it
changes what the frontmatter and listing need to track (e.g. a `stage`
field). Not resolved yet — the current schema is deliberately minimal so
it doesn't foreclose either direction.

## Local development

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Design

Tokens (colour, type, spacing) are all in `src/styles/global.css`. The
palette avoids the generic "cream + serif + terracotta" AI-website look on
purpose — it's ink/paper with moss, brass, and thread as accents, chosen to
sit next to the site's actual subject matter (systemic thinking,
contemplative practice) rather than to look like a generic SaaS landing
page.

Indra's net (bottom-left of the homepage) is the one deliberately playful
element: tap any point and a random walk through the net lights up a
different pattern each time, with no "correct" pattern — a small, honest
illustration of the Cynefin Complex domain, where cause and effect can
only be traced looking backward. No further explanation lives on the page
itself; the one-line caption is the whole of it.

## Go live

1. **Domain**: buy through Cloudflare Registrar (simplest if hosting is
   also Cloudflare Pages) or Porkbun.
2. **Repo**: push this project to a GitHub repo.
3. **Cloudflare Pages**: connect the repo, build command `npm run build`,
   output directory `dist`.
4. Point the domain's DNS at Cloudflare Pages (automatic if the domain is
   already on Cloudflare; otherwise add the CNAME Cloudflare gives you).
5. Update `site` in `astro.config.mjs` to the real domain.

## Apps page

Both apps currently link out to Lovable rather than being rebuilt here —
that was a deliberate decision, not a placeholder. `src/pages/apps/index.astro`
has two `<a>` tags pointing at the Lovable URLs; update the `href`s to the
real deployed URLs (a placeholder `lovable.dev` link is there as a stand-in).

**Open question, flagged in the handoff note:** whether/when to move AI
Scout to a custom subdomain (e.g. `scout.yourdomain.com`) pointing at
Lovable, versus staying a plain link-out. Either works with the current
Apps page — moving to a subdomain later is a DNS change plus a one-line
`href` update, not a rebuild.

## Case studies

`src/pages/case-studies/index.astro` currently renders placeholder cards
(`placeholder={true}` on `<CaseStudyCard />`). Replace the `caseStudies`
array with real entries and flip `placeholder` to `false` (or drop the prop)
once write-ups exist.
