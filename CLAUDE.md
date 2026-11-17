# MPN Lookup (Next.js)

Static Next.js (pages router) app that shows the Most Probable Number for IDEXX
QuantiTray, QuantiTray2000 and Legiolert tests. Deployed to GitHub Pages as a
static export under the base path `/mpn-lookup-nextjs`.

## Commands

Use pnpm only (pinned in `package.json` `packageManager`). Never add a yarn or npm lockfile.
Node 24 (`.nvmrc`; CI pins `24.x`).

- `pnpm dev` — dev server at http://localhost:3000/mpn-lookup-nextjs
- `pnpm test` — Jest unit tests (`__tests__/`)
- `pnpm exec playwright test` — e2e tests (`e2e/`); starts the dev server itself
- `pnpm check-types`, `pnpm check-lint`, `pnpm check-format`

Commits must follow `commitlint.config.ts` (conventional commits with a restricted scope list).

## MPN table data is constant

The lookup tables come from the `mpn-lookup` npm package (transcribed from the IDEXX PDFs)
and must never change. `src/util/mpn.lookup.ts` only wraps the package's lookups as `getMpn`.

- Don't copy, override or post-process table values in the app; show what `mpn-lookup` returns.
- `__tests__/mpnlookup/table-checksum.test.ts` hashes every lookup result through `getMpn` and
  fails if any value changes (e.g. from an `mpn-lookup` update). Never edit it or its hash;
  CI's `verify` job fails any PR that touches it.
- If something looks wrong in the data, report it — don't fix it.

## Agents

- `.github/workflows/claude.yml` — mention `@claude` in an issue or PR (repo owner only).
- `.github/workflows/e2e-agent.yml` — writes e2e tests (`.claude/agents/e2e-tester.md`).
- `.github/workflows/deps-agent.yml` — fixes failing Dependabot PRs
  (`.claude/agents/dependency-updater.md`).

Agents never edit `.github/` or `__tests__/mpnlookup/table-checksum.test.ts`.
