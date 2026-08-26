# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Veil landing page — a single-page marketing/landing site for the Veil product (a privacy-focused team communication platform). The app at https://app.veil.in.th is separate; this repo is only the landing page hosted at https://veil.in.th.

## Commands

- `pnpm dev` — start dev server on port 3000
- `pnpm build` — type-check with `tsc -b` then build with Vite
- `pnpm lint` — run ESLint (with auto-fix via vite-plugin-eslint2 during dev)
- `pnpm preview` — preview production build on port 8000

## Tech Stack

- **React 19** + **TypeScript** + **Vite 7**
- **react-router-dom** for routing
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin, imported in `src/global.css`, which also pulls in `src/styles/root.css`)
- **framer-motion** for animations, **lucide-react** for icons (there is no
  hand-rolled icon set — import from `lucide-react`)
- **pnpm** as package manager

## Architecture

Four routes, defined in `src/App.tsx` with `BrowserRouter`; path constants live
in `src/constants/routes.ts`.

- `/` → `src/pages/Home.tsx`, which composes the section components from
  `src/components/landing/` in order: Header, Hero, Features, Security, FAQ,
  CallToAction, Footer.
- `/terms-of-service` and `/privacy-policy` → `src/pages/`, both rendered through
  `src/components/legal/legal-layout.tsx`. Both are written against **Thai law** —
  the privacy page is a PDPA (Personal Data Protection Act B.E. 2562) notice with
  the sections that Act requires, and the terms are governed by Thai law. Keep
  the statutory references intact when editing the copy.
- `*` → `src/pages/NotFound.tsx`, which sets `noindex`.

Because these are real routes rather than hash fragments, the host has to serve
`index.html` for unknown paths — a plain static host without an SPA fallback
will 404 on a direct link to `/privacy-policy`.

There is no auth and no API client here. Every call to action is an outbound
link to `https://app.veil.in.th`; sign-in happens entirely in that app.

### Copy lives in one place

All marketing copy — features, channel types, security steps, FAQ — is data in
`src/content/site.ts`. Components render it; they do not hold strings. The FAQ
section derives its `FAQPage` JSON-LD from the same array, so the rich result
cannot drift from the visible answers.

**Claims about encryption are load-bearing.** The public position is that Veil
is **end-to-end encrypted**, stated plainly, the way Discord or Slack describe
their own transport — content is sealed with AES-256-GCM on the device before it
is sent and stored as ciphertext, and sign-in runs through Veil's own OpenID
Connect provider rather than a bare JWT.

What the copy must *not* do is escalate that into zero-knowledge language —
"only you hold the key", "we are mathematically unable to read this". Veil is
cloud-hosted and manages keys on the user's behalf so that a session on a new
device just works (`veil/src/store/authSlice.ts` receives them at login).
Describing it as E2EE is accurate; describing it as zero-knowledge is not, and
these are legal pages. Calls are encrypted in transit and routed through a media
server; they are not described as E2EE anywhere.

### Motion

Scroll animation is the main visual device on the homepage, so it is centralised
rather than re-invented per section. `src/components/motion/reveal.tsx` exports
`Reveal` (one element entering on scroll) and `RevealGroup` (a stagger parent);
the shared child variant lives in `src/lib/motion-variants.ts`, kept out of the
component file so Fast Refresh does not warn. Both honour `useReducedMotion` by
rendering a plain element with no transform.

Anything scroll-*linked* rather than scroll-triggered — the hero parallax, the
features rail, the line drawn between the security steps — uses
`useScroll` + `useTransform` fed through `useSpring`, so it tracks the scrollbar
instead of firing once. Use the primitives before reaching for `whileInView`
directly.

### Theming

Light and dark, class-based (`.dark` on `<html>`), mirroring the app's
skeuomorphic tokens. An inline script in `index.html` picks the theme before
first paint; `src/lib/theme.ts` is the store and `src/hooks/use-theme.ts` the
reader. Composite surfaces (`.veil-card`, `.veil-well`, `.veil-bar`,
`.veil-chip`, `.veil-aurora`, `.veil-gradient-text`) are defined once in
`src/global.css` — use them instead of writing gradients or shadows inline, and
always style both themes.

### SEO

`index.html` carries the default title, description, Open Graph tags and the
Organization/WebSite/SoftwareApplication JSON-LD. Per-route metadata comes from
`src/components/seo.tsx`, which relies on React 19 hoisting `title`/`meta`/`link`
into `<head>`. `public/robots.txt` and `public/sitemap.xml` list the three
indexable URLs; add a route there when you add one.

## Code Style

- Path alias: `@/` maps to `src/` (configured in both vite.config.ts and tsconfig)
- Prettier: no semicolons, single quotes, 120 char line width, Tailwind class sorting plugin
- ESLint enforces: no console, no nested ternaries, no negated conditions, require-await, prefer-const
- Components use default exports with function declarations

## Claude Code tooling

`.claude/` is committed. Two hooks run automatically: prettier on every edited
file, and a guard rejecting `npm`/`yarn`/`bun` installs since this repo is
pnpm-only.

Unlike `veil`, `pnpm build` here runs `tsc -b` first, so a type error does fail
the build.
