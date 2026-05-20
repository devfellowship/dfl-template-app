# dfl-template-app

DFL app template — Vite + React 19 + Tailwind v4 + Supabase auth boilerplate.

> **This is a GitHub Template Repository.** Click **Use this template** to scaffold a new DFL app.

## Includes

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (CSS-native, no config file)
- `@dfl/components` wired up
- Supabase magic-link auth (`src/lib/supabase.ts`)
- React Router v7 with private routes
- `repo-contract.yaml`, `renovate.json`, `.github/workflows/ci.yml`
- `.github/workflows/vuln-scan.yml` — Trivy + npm audit; gates CRITICAL findings (see [security-audit plan](https://plans.tainanfidelis.com/20260520-security-audit-deps-vulns))
- `eslint.config.js` (flat config)

## Usage

1. Click **Use this template → Create a new repository**
2. Clone your new repo
3. `cp .env.example .env.local` and fill in Supabase keys
4. `npm install && npm run dev`

### Post-create checklist (security)

After scaffolding a new repo from this template, run:

```bash
# Enables Dependabot vulnerability alerts + automated-security-fixes
gh api -X PUT "repos/devfellowship/<your-new-repo>/vulnerability-alerts"
gh api -X PUT "repos/devfellowship/<your-new-repo>/automated-security-fixes"
```

Both calls require the `devfellowship` org admin PAT (fetch via the `credentials-lookup` skill — key `GITHUB_ORG_ADMIN_PAT`).

## Verify

```bash
npm run verify   # lint + typecheck + build
```
