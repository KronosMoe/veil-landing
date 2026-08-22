# veil-landing

The marketing site at <https://veil.in.th>. A single-page React app with no
backend and no environment variables — it is fully self-contained.

The product itself lives at <https://app.veil.in.th> and is a different repo
([`veil`](../veil)); nothing here talks to it beyond ordinary links.

## Setup

```bash
pnpm install
pnpm run dev        # http://localhost:3000
```

That is the whole setup. There is no `.env`, no database, and no API to run
first.

> **Port clash:** the `veil` web app also uses 3000. Don't run both at once, or
> start this one with `pnpm run dev -- --port 3001`.

## Commands

```bash
pnpm run dev        # dev server, port 3000, HMR
pnpm run build      # tsc -b, then vite build -> dist/
pnpm run preview    # serve the production build on port 8000
pnpm run lint       # eslint
```

ESLint also runs inside the dev server via `vite-plugin-eslint2`, so lint errors
surface in the browser overlay as you edit.

## Stack

React 19, TypeScript, Vite 7, Tailwind CSS v4 (through `@tailwindcss/vite`,
imported from `src/index.css`), and `lucide-react` for icons.

## Layout

```
src/
  App.tsx        the page — sections are composed here
  components/    section components
  assets/        logo and imagery
public/
  favicon/       full favicon set + site.webmanifest
  thumbnail/     Open Graph preview image
```

## Deploying

Built as a static bundle; `dist/` is what gets published. There is no CI in this
repo — unlike the GitLab-hosted Veil repos, this one lives on GitHub and is
deployed from `dist/` by whatever host is configured for `veil.in.th`.
