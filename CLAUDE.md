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
- **framer-motion** for animations, **lucide-react** for icons
- **pnpm** as package manager

## Architecture

Three routes, defined in `src/App.tsx` with `BrowserRouter`; path constants live
in `src/constants/routes.ts`.

- `/` → `src/pages/Home.tsx`, which composes the section components from
  `src/components/landing/` in order: Header, Hero, About, Features, FAQ,
  Contact, Footer.
- `/terms-of-service` and `/privacy-policy` → static legal pages.

Because these are real routes rather than hash fragments, the host has to serve
`index.html` for unknown paths — a plain static host without an SPA fallback
will 404 on a direct link to `/privacy-policy`.

There is no auth and no API client here. Every call to action is an outbound
link to `https://app.veil.in.th`; sign-in happens entirely in that app.

## Code Style

- Path alias: `@/` maps to `src/` (configured in both vite.config.ts and tsconfig)
- Prettier: no semicolons, single quotes, 120 char line width, Tailwind class sorting plugin
- ESLint enforces: no console, no nested ternaries, no negated conditions, require-await, prefer-const
- Components use default exports with function declarations
