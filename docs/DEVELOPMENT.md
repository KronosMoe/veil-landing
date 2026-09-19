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

The homepage uses `src/components/landing/landing-experience.tsx`; shared copy
and external destinations live in `src/content/site.ts`. Legal routes are real
browser routes, so the static host must fall back to `index.html`.

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
