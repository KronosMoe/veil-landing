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
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin, imported in `src/index.css`)
- **lucide-react** for icons
- **anime.js** available for animations
- **pnpm** as package manager

## Architecture

Single-page app with no routing. `src/App.tsx` composes `Navbar` and `Hero` components. The Hero component includes a custom canvas-based pixel text animation (scrolling marquee with mosaic blur effect).

## Code Style

- Path alias: `@/` maps to `src/` (configured in both vite.config.ts and tsconfig)
- Prettier: no semicolons, single quotes, 120 char line width, Tailwind class sorting plugin
- ESLint enforces: no console, no nested ternaries, no negated conditions, require-await, prefer-const
- Components use default exports with function declarations
