# Development setup

## Prerequisites

- Node.js 24, Corepack, and pnpm

This repository has no environment variables, backend, or database.

## Run

```bash
pnpm install
pnpm dev
```

Vite uses port 3000, which conflicts with the primary web app. Run only one or
use `pnpm dev -- --port 3001`.

## Content and routes

The homepage is a deliberately self-contained product story in
`src/components/landing/veil-landing.tsx`, with its visual system in
`src/styles/veil-landing.css`. It reuses the shared Veil tokens and the real message-row
presentation adapter in `app-chrome.tsx`. External destinations remain in
`src/content/site.ts`.

The [landing experience guide](LANDING-EXPERIENCE.md) records the narrative and the
current product/privacy claim boundaries. Legal pages continue to use the shared
editorial shell. Legal routes are real browser routes, so the static host must fall
back to `index.html`.

## Validate

```bash
pnpm lint
pnpm build
pnpm preview
```

Check `/`, `/terms-of-service`, `/privacy-policy`, and an unknown route in both
themes and at mobile/desktop widths. Verify reduced motion and keyboard focus.

## Publishing

Publish `dist/` to the static host with SPA fallback enabled. No server secrets
or application API credentials belong in this bundle.
