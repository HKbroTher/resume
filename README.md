# Retro Casino CRT Portfolio

A bilingual (English / 中文) personal site and résumé with a retro casino and CRT monitor look.
It's plain HTML, CSS and JavaScript, with no build step and no dependencies other than two Google Fonts.

## Run it

**Option A: just open it.** Double-click `index.html`. It works over `file://`.

**Option B: local server** (recommended, so `?lang=` URLs and caching behave like production):

```bash
python -m http.server 8000
```

or

```bash
npx serve .
```

Then visit http://localhost:8000.

## Personalise it

Everything you need to edit is in **`js/content.js`**. Search for `✎ REPLACE`.

| What | Where |
| --- | --- |
| Name, role, location, headline lines, intro, stats | `en.hero` / `zh.hero` |
| About paragraphs and side facts | `en.about` / `zh.about` |
| Skill cards (rank, suit, level 1–5) | `en.skills` / `zh.skills` |
| Projects (delete the block in both languages to hide it) | `en.projects` / `zh.projects` |
| Experience / education timeline | `en.journey` / `zh.journey` |
| Email and social links | `shared.links` |
| Profile photo | `shared.avatar`: put your image in `assets/` and point to it |
| Downloadable CV button | `shared.resumePdf` |

Also update the `<title>` and `<meta name="description">` in `index.html`. The JavaScript
updates them per language, but search engines see the static values first.

## Features

- **Language switch** (top-right): EN / 中文. It remembers your choice, detects the browser language on the first visit, and supports shareable links such as `?lang=zh`.
- **CRT overlay**: scanlines, a rolling refresh band, light noise, vignette, and a soft glow. The **CRT: ON/OFF** toggle turns it off for maximum readability.
- **Animations**: a power-on effect at load, a "channel change" transition when switching language, a typewriter headline, cards that deal in on scroll, 3D tilt with glare on hover (mouse only), and a shine sweep on buttons.
- **Accessible**: respects `prefers-reduced-motion`, has a skip link, keyboard focus styles, and screen-reader text for the typewriter headline.
- **Mobile**: a single-column layout, a swipeable nav row, and a 2-column skill-card grid.

## Notes

- For Chinese body text, the site uses the system CJK font for readability, while headings and labels keep the pixel font. If you want pixel-style Chinese as well, self-host a pixel CJK font such as *Fusion Pixel* or *Zpix* and add it to the front of `--font-body` under `html[lang^="zh"]` in `css/style.css`. Those fonts are several MB, so expect slower loading.
- Colours are CSS variables at the top of `css/style.css`.
- All visuals are original CSS and SVG, with only generic playing-card suits. No game logos or assets are used.

## Deploy

Upload the folder to any static host: GitHub Pages (Settings → Pages → deploy from `main`), Netlify, Vercel, or Cloudflare Pages.
