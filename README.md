# Junjie Deng · Résumé

A one-page bilingual (English / 中文) résumé with a retro casino and CRT monitor look.
It's plain HTML, CSS and JavaScript, with no build step and no dependencies other than two Google Fonts.

## Run it

**Option A: just open it.** Double-click `index.html`. It works over `file://`.

**Option B: local server** (so `?lang=` URLs behave like production):

```bash
python -m http.server 8000
```

Then visit http://localhost:8000. Add `?lang=zh` to open the Chinese version directly.

## Edit it

All text lives in **`js/content.js`**, with the same structure for `en` and `zh`:

| What | Key |
| --- | --- |
| Name, role, location | `profile` |
| Typewriter lines | `headlines` |
| About me | `about` |
| Languages (shown as tiles) | `languages` |
| Education / Experience (timeline with bullets) | `education`, `experience` |
| Skill groups (shown as tags) | `skills` |
| Photo, email, optional PDF résumé button | `shared` |

To replace the photo, overwrite `assets/avatar.jpg`. Use a square image, around 600×600.

## Features

- **Language switch** (top-right): EN / 中文. It remembers your choice, detects the browser language on the first visit, and supports `?lang=zh` links.
- **CRT overlay**: scanlines, a rolling band, light noise, vignette, and a soft glow. The **CRT: ON/OFF** toggle turns it off for readability.
- **Animations**: a power-on effect at load, a "channel change" transition when switching language, a typewriter headline, cards that deal in on scroll, and 3D hover tilt (mouse only). All motion is disabled when the visitor's system is set to reduce motion.
- **Mobile**: a single-column layout, and the language tiles wrap to 2×2.

## Deploy

Upload the folder to any static host: GitHub Pages (Settings → Pages → deploy from `main`), Netlify, Vercel, or Cloudflare Pages.
