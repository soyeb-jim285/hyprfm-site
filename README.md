# hyprfm-site

Landing page for [HyprFM](https://github.com/soyeb-jim285/hyprfm), deployed to
<https://hyprfm.soyebjim.me/>.

## Stack

- [Astro](https://astro.build) 5 — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first styles
- Self-hosted [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via Fontsource
- Pure HTML + small inline scripts (no React, no component runtime) —
  the whole site is static HTML after build

## Local dev

```sh
npm ci
npm run dev
# open http://localhost:4321
```

## Build

```sh
npm run build
# output in dist/
```

`npm run preview` serves the built site locally.

## Deploy

On push to `main`, `.github/workflows/deploy.yml` builds the Astro site and
publishes to GitHub Pages using the native `actions/deploy-pages` action.
Custom domain is configured via `public/CNAME`.

## Swapping placeholder media

All screenshot placeholders live in `public/screenshots/` as SVG files. Replace
any file with a real PNG keeping the same base name (e.g.
`grid-view.svg` → `grid-view.png`) and update the `src` path in the
corresponding component under `src/components/`.

## Placeholder copy

Prose marked `TODO(jim):` in the component files should be rewritten in the
maintainer's own voice before first deploy. Everything else (install commands,
button labels, section headings) is factual and can stay as-is.
