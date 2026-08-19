# Publishing Guide — naratends.com

A step-by-step reference for adding a new article (with an image) through GitHub's web editor. Written after the first article that used an image, covering every snag that came up along the way.

---

## Where the repo root is

The whole website's code lives in one GitHub repository:

```
https://github.com/space-bonsai-and-blues/mango-test
```

That link *is* "the repo root" — the top-level folder view. Everything else (`public/images/`, `src/content/writing/`, `docs/`, etc.) is a subfolder inside it, reachable by clicking through from that page.

**A faster way to create a new file at a specific path**, without clicking through folders: GitHub lets you build the URL directly. For example, to create `docs/PUBLISHING-GUIDE.md`:

```
https://github.com/space-bonsai-and-blues/mango-test/new/main?filename=docs/PUBLISHING-GUIDE.md
```

Paste that into your browser's address bar, and GitHub opens a blank file already named and placed correctly — paste in the content and commit. This is the same trick used for the image-upload shortcut earlier in this guide (swap `/new/main?filename=...` for `/upload/main/...` to land in a specific folder for uploading instead of typing text).

## Making a site-wide code change (not a new article)

Most of what's in this guide is about adding articles — but some changes affect the whole site at once, like the social-card system or the header. Those live in `.astro` files under `src/`, not in `src/content/writing/`. The safest way to edit one of these: open the file on GitHub, select all its current content, and paste in the complete replacement — full-file swaps are less error-prone than editing pieces by hand when you're still getting comfortable with the code.

## The two things that trip up an image every time

1. **Extension mismatch.** Whatever the file is actually named on GitHub (`.jpg`, `.png`, `.jpeg`) has to match *exactly* — including the extension — everywhere it's referenced: the `image:` field in frontmatter, and any `![...](...)` line in the article body. `photo.jpg` and `photo.png` are two different files as far as the website is concerned, even if it's the same picture. If the image doesn't show up, this mismatch is the first thing to check.

2. **Mac silently swaps `/` for `:`.** If you type a `/` into a filename on macOS (e.g. trying to name a file `images/photo.png` to "put it in a folder"), Finder shows you a `/` but actually saves a `:` in its place. The upload will look wrong or behave strangely. Fix: never put a `/` in the filename itself — keep the file named plainly (`photo.png`), and control which folder it goes into using the *upload location* instead (see Step 2 below).

---

## Step 1 — Upload the image

1. Make sure the image file is named simply — no slashes, no folders baked into the name. Just `something.jpg` or `something.png`.
2. Go directly to this URL (edit your browser's address bar):
   ```
   https://github.com/space-bonsai-and-blues/mango-test/upload/main/public/images
   ```
   This opens GitHub's uploader already pointed at the right folder — even if that folder doesn't exist yet, GitHub creates it the moment a file lands inside it.
3. Drag your image into the dropzone.
4. Commit directly to `main`.
5. **Note the exact filename and extension** — you'll need it to match perfectly in the next step.

## Step 2 — Create the article file

1. Go to `src/content/writing/` in the repo.
2. Click **Add file → Create new file**.
3. Name it something short and URL-friendly, lowercase, hyphens instead of spaces — e.g. `my-new-article-title.md`. This filename becomes part of the article's web address, so no need to make it fancy.
4. Paste in this template, filling in the blanks:

```yaml
---
title: "Article Title"
description: "One clear sentence — this also becomes the description text on the X/social preview card."
publication: "Series Name · Nara & Claude"
date: YYYY-MM-DD
tags: ["case-study", "Series Name"]
image: /images/exact-filename-from-step-1.jpg
imageAlt: "A minimalist SVG in warm tones, a single circle inside a square frame"
---

Article body goes here.
```

**Two fields that must match each other, word for word:**
- `publication` — this is what actually shows as the visible "kicker" label, on both the homepage card and the article page itself.
- The second item in `tags` — this drives the filter button on the `/case-studies` page.

They serve different mechanisms but should carry the same series name (e.g. both say "Systemic Thinking for Strategy"), or the site will look inconsistent even though nothing is technically broken.

**The `image` field is optional** — if left out, the article falls back to the site's default social-card image automatically (`/images/og-default.png`, the `.nara` wordmark design). Only set the `image` field when the article has its own specific image (like an embedded screenshot).

5. To add the image inside the article body itself (not just as the social-card preview), use:
   ```markdown
   ![Short description of the image](/images/exact-filename-from-step-1.jpg)
   ```
   Same filename rule applies here too.

6. Commit directly to `main`.

## Step 3 — Wait for Cloudflare, then check

1. Cloudflare Pages rebuilds automatically on every commit to `main`. This usually takes a minute or two.
2. Check the Cloudflare Pages dashboard → **Deployments** — confirm the newest one shows a green "Success" and its commit message matches what you just did.
3. View the live page. If something looks stale (old version, missing image, missing kicker):
   - **Hard refresh first:** `Cmd+Shift+R` (Mac) instead of a normal reload.
   - **Try an incognito/private window** — rules out your own browser's cache.
   - If it's *still* stale in incognito, it may be Cloudflare's edge cache (separate from your browser): Cloudflare dashboard → your domain → **Caching → Configuration → Purge Everything**.

## Step 4 — Before posting to X

Paste the live article URL into a draft X post and confirm the preview card renders with the right image, title, and description. X sometimes caches an old (blank) preview for a URL it's seen before — if so, there's a "refresh"/re-scrape option in X's card tools, or add a harmless `?v=2` to the end of the URL the first time to force a fresh fetch.

---

## Quick frontmatter reference

| Field | Required? | What it does |
|---|---|---|
| `title` | Yes | Page title, article heading |
| `description` | Yes | Subtitle under the heading + social card description |
| `date` | Yes | Sort order, displayed date |
| `publication` | No, but needed for a visible kicker | Shown next to the date on both card and article page |
| `tags` | No, needed for case-studies filtering | First tag `"case-study"` includes it in that section; second tag is the series filter label |
| `image` | No — falls back to `/images/og-default.png` | Used for the article's social-media preview card, and can be reused inline in the body |
| `draft` | No, defaults to `false` | Set `true` to hide from the live site while still in progress |
