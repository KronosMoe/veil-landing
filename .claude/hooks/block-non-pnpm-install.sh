#!/usr/bin/env bash
# PreToolUse(Bash): reject npm/yarn/bun installs.
# Every Veil repo is pnpm-only and CI runs `pnpm install --frozen-lockfile`.
# A stray `npm install` writes a package-lock.json and mutates node_modules in a
# way the frozen-lockfile check rejects, so the failure surfaces in CI rather
# than here. Exit 2 blocks the call and hands stderr back to Claude.
set -u

cmd=$(jq -r '.tool_input.command // empty' 2>/dev/null)
[ -n "$cmd" ] || exit 0

# (^|[^[:alnum:]_-]) so that the "npm" inside "pnpm" never matches.
if echo "$cmd" | grep -Eq '(^|[^[:alnum:]_-])(npm[[:space:]]+(install|i|ci|add|update|up|uninstall|rm)|yarn[[:space:]]+(add|install|remove|upgrade)|bun[[:space:]]+(install|add|remove))([[:space:]]|$)'; then
  echo "Blocked: this workspace is pnpm-only." >&2
  echo "CI runs 'pnpm install --frozen-lockfile'; npm/yarn/bun would write a competing lockfile and fail the pipeline." >&2
  echo "Use the pnpm equivalent instead (pnpm install / pnpm add / pnpm remove / pnpm --filter <pkg> add ...)." >&2
  exit 2
fi
exit 0
