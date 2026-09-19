# Veil landing

The public marketing and legal site at <https://veil.in.th>. It is a static
React application with no API client, database, or runtime secrets.

## Documentation

- [Documentation index](docs/README.md)
- [Development setup](docs/DEVELOPMENT.md)
- [Design system](docs/DESIGN-SYSTEM.md)
- [Design guidelines](docs/DESIGN-GUIDELINES.md)

## Quick start

```bash
pnpm install
pnpm dev
```

The site uses <http://localhost:3000>. The main `veil` app uses the same port;
run only one or pass `--port 3001` to this command.

## Commands

| Command        | Purpose                                |
| -------------- | -------------------------------------- |
| `pnpm dev`     | Vite development server                |
| `pnpm build`   | Type-check and build the static bundle |
| `pnpm preview` | Preview `dist/` on port 8000           |
| `pnpm lint`    | ESLint                                 |

## Architecture

Routes are defined in `src/App.tsx`. The active homepage experience lives in
`src/components/landing`; legal pages live in `src/pages`; shared tokens and
editorial styling live in `src/styles` and `src/global.css`.

## Quality gates

Run `pnpm lint` and `pnpm build`. Check both themes, reduced motion, mobile and
desktop layouts, and direct navigation to every route before publishing `dist/`.
