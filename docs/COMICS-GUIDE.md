# Comics Guide — naratends.com

A step-by-step reference for adding a new comic strip through GitHub's web editor.

---

## Where things live

Comics are a separate system from articles — different folders, different rules. Don't mix the two workflows up:

| File/folder | Purpose |
|---|---|
| `src/assets/comics/` | Where comic **images** get uploaded |
| `src/content/comics/` | Where each strip's **data file** (`.md`) gets created |
| `src/content.config.ts` | Defines the schema for both `writing` and `comics` — lives directly in `src/`, not inside `src/content/`, easy to miss |

**Current schema fields for a comic strip:**
- `title` — required
- `date` — required
- `image` — required, points at the uploaded file
- `alt` — required, screen-reader-only text, never visibly shown on the page
- `caption` — optional, visible text shown under the image on the strip's own page

---

## The one rule that matters most

**Never edit or rename an image file through GitHub's text-based file editor.** It treats binary image data as text and will silently corrupt or blank it out. If a filename needs to change, always re-upload a fresh copy via **Upload files** — never rename an existing image in place.

---

## Step 1 — Name the image file on your own computer, before uploading

Rename the file locally to match this pattern exactly, *before* touching GitHub:

```
strip-01.png
strip-02.png
strip-03.png
```

- All lowercase
- Hyphen, not underscore or space
- Zero-padded two-digit number (`01`, `02`, ... `10`, `11`...)
- Match the real extension (`.png`, `.jpg`, whatever it actually is)

Screenshot tools and cameras often name files things like `260611.png` — if uploaded with that name, the strip's data file has to reference that exact name back (GitHub filenames are case-sensitive), which is where mismatches creep in. Renaming to a clean, predictable name first avoids that entirely.

## Step 2 — Upload the image

1. Go to `src/assets/comics/` in the repo.
2. **Add file → Upload files** — not "Create new file." (Pasting image data into "Create new file" produces a broken linked-attachment file, not a real image.)
3. Drag in the correctly-named file.
4. Before committing, double check the filename shown in the upload preview matches what you intended.
5. Commit to `main`.

## Step 3 — Create the strip's data file

1. Go to `src/content/comics/`.
2. **Add file → Create new file**.
3. Name it to match the strip number, e.g. `strip-02.md`.
4. Paste this, filling in your own values:
   ```yaml
   ---
   title: "Strip 2: your title here"
   date: 2026-08-05
   image: ../../assets/comics/strip-02.png
   alt: "Describe what's happening, for screen readers"
   caption: "Optional visible caption text — delete this line if you don't want one"
   ---
   ```
   The `image:` path must exactly match the file uploaded in Step 2 — same case, same characters.
5. Commit to `main`.

That's it — no code changes needed for a new strip. Both the grid view and the individual strip pages pull dynamically from whatever's in `src/content/comics/`.

---

## Common errors & what they mean

| Error in Cloudflare build log | What it means | Fix |
|---|---|---|
| `ImageNotFound: Could not find requested image` | The `image:` path in the `.md` file doesn't match any real file in `src/assets/comics/` — usually a filename mismatch (case, hyphen vs. underscore, missing zero) | Check the actual uploaded filename and make the `.md` file match it exactly |
| `NoImageMetadata: Could not process image metadata` | The file exists at that path but isn't valid image data — usually because it was edited/renamed through GitHub's text editor and corrupted | Delete the broken file, re-upload the real image fresh via Upload Files — don't rename after the fact |
| Same error persists after a fix is committed | Cloudflare's "Retry build" button re-runs the *old* failed commit, not your latest fix | Don't use Retry on an old failed deployment — push a genuinely new commit to trigger a fresh build |
