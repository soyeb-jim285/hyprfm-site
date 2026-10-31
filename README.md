# hyprfm-site

Landing page for [HyprFM](https://github.com/soyeb-jim285/hyprfm), deployed to
<https://hyprfm.soyebjim.me/>.

## Stack

- [Astro](https://astro.build) 5 — static site generator
- Scoped Astro CSS with shared theme tokens
- Self-hosted Manrope and JetBrains Mono via Fontsource
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

## Product media

Real app screenshots live in `public/media/s/`; short clips and their posters
live in `public/media/l/`. The full tour is `public/media/tour.mp4`.

The transparency section compares matching opaque and compositor-blurred
captures, with a real toggle recording underneath. The workspace section shows
the built-in terminal and Git status. The views section uses an interactive
screenshot picker for Grid, Miller and Detailed views.

Capture provenance and editable animation source are in [`media-source/`](media-source/README.md).
Videos are click-to-play with `preload="none"`; the existing keyboard-demo loops
only autoplay on screen when reduced motion is not requested.
