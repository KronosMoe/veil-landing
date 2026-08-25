#!/usr/bin/env bash
# PostToolUse hook: run the *edited file's own repo* prettier on it.
# Each Veil repo has its own node_modules and its own .prettierrc, so the
# binary and the config both have to come from the nearest package.json —
# using a single global prettier would reformat veil-microservice with
# veil-landing's rules.
set -u

file=$(jq -r '.tool_input.file_path // empty' 2>/dev/null)
[ -n "$file" ] && [ -f "$file" ] || exit 0

case "$file" in
  *.ts|*.tsx|*.js|*.jsx|*.mjs|*.css|*.json|*.md) ;;
  *) exit 0 ;;
esac
case "$file" in
  */node_modules/*|*/dist/*|*/coverage/*|*/.turbo/*|*/drizzle/*) exit 0 ;;
esac

dir=$(dirname "$file")
while [ "$dir" != "/" ]; do
  if [ -x "$dir/node_modules/.bin/prettier" ]; then
    # cd into the package first: prettier resolves plugins named in .prettierrc
    # (prettier-plugin-tailwindcss) relative to the *cwd*, not to the file, so
    # running it from anywhere else fails with "Cannot find package".
    if ! err=$(cd "$dir" && ./node_modules/.bin/prettier --write --log-level warn "$file" 2>&1); then
      echo "format-edited-file: prettier failed on $file" >&2
      echo "$err" >&2
    fi
    exit 0
  fi
  dir=$(dirname "$dir")
done
exit 0
