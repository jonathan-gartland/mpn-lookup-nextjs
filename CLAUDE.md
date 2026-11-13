# MPN Lookup (Next.js)

Static Next.js (pages router) app that shows the Most Probable Number for IDEXX
QuantiTray, QuantiTray2000 and Legiolert tests. Deployed to GitHub Pages as a
static export under the base path `/mpn-lookup-nextjs`.

## Commands

Use pnpm only (pinned in `package.json` `packageManager`). Never add a yarn or npm lockfile.

- `pnpm dev` — dev server at http://localhost:3000/mpn-lookup-nextjs
- `pnpm test` — Jest unit tests (`__tests__/`)
- `pnpm exec playwright test` — e2e tests (`e2e/`); starts the dev server itself
- `pnpm check-types`, `pnpm check-lint`, `pnpm check-format`

Commits must follow `commitlint.config.ts` (conventional commits with a restricted scope list).

## MPN table data is constant

The lookup tables in `src/util/mpn.lookup.ts` are transcribed from the IDEXX PDFs
and must never change. Do not edit, reorder, reformat or "correct" any table value.
Code around the data (lookup functions, types) may change; the values may not.
If something looks wrong in the data, report it — don't fix it.
