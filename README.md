# Print N Craft — Business Website

Marketing website for **Print N Craft**, a printing and signage manufacturer in Gurugram (est. 2012): 3D LED sign boards, flex & vinyl printing, laser cutting, CNC routing, stainless-steel letters, ACP facades and corporate gifts.

**Live:** https://katrine-daniel.github.io/PRINT-N-CRAFT/ · https://print-n-craft.vercel.app

## Features

- **Service catalogue** — 12+ services with a detail modal (materials, use cases, enquiry shortcuts)
- **Estimate calculator** — pick a service, size and quantity to get an indicative price, then send it on WhatsApp
- **One-tap enquiries** — click-to-call, WhatsApp deep links with pre-filled messages, email
- Downloadable company profile (PDF)
- About, vision / mission / values and contact sections
- Fully responsive, built mobile-first with Tailwind CSS

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 19, Tailwind CSS 3, lucide-react icons |
| Build | Vite 5 |
| Lint | oxlint |
| Hosting | GitHub Pages (GitHub Actions) and Vercel |

## Getting started

```bash
npm ci
npm run dev       # http://localhost:3000/PRINT-N-CRAFT/
npm run lint
npm run build     # production build into dist/
```

## Project structure

```
src/
├── App.jsx                 # Page composition
├── components/             # Navbar, Hero, ServicesGrid, ServiceModal, EstimateCalculator, ...
├── data/                   # Services, rate card, clients, portfolio content
└── utils/assetHelper.js    # Resolves public assets against the deploy base path
public/                     # Images and PDFs served as-is
```

Content (services, prices, clients) lives in `src/data/`, so it can be updated without touching components.

## Deployment

- **GitHub Pages:** every push to `main` runs `.github/workflows/deploy.yml` (install → lint → build → deploy). The site is served from `/PRINT-N-CRAFT/`.
- **Vercel:** import the repo; no settings needed. `vite.config.js` switches the base path to `/` when the `VERCEL` environment variable is present.

---

Designed and developed by [Katrine Daniel](https://github.com/katrine-daniel).
