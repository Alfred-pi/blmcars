# BLM Cars

> Site vitrine pour garage automobile BLM Cars à Genève.

## Stack

- Astro 5 + Tailwind 3 + CSS custom
- Plus Jakarta Sans (Google Fonts)

## Commandes

- `npm run dev` — Dev server
- `npm run build` — Build
- Deploy: `npm run build && touch dist/.nojekyll && npx gh-pages -d dist --dotfiles`

## Deploy

- **Repo**: github.com/Alfred-pi/blmcars
- **Live**: https://blmcars.ch (custom domain)
- **Base path**: `/` (custom domain, pas de prefix)
- **Pas de CI/CD** — deploy manuel via `deploy.sh` ou gh-pages
- **CNAME**: `blmcars.ch` (dans public/)

## SEO (ajouté 2026-03-24)

- Favicon complet (32px, 256px, apple-touch-icon, manifest)
- Open Graph + Twitter Cards
- Schema.org AutoDealer
- Sitemap XML auto (@astrojs/sitemap)
- robots.txt

## Key files

- `src/layouts/Layout.astro` — Head SEO + global CSS
- `src/pages/index.astro` — Homepage
- `src/pages/achat.astro` — Page véhicules
- `src/data/cars.json` — Inventaire voitures
- `public/` — Favicon, OG image, manifest, robots.txt

## Client

- Garage à Genève, +41 79 564 44 49
- WhatsApp: bouton flottant
