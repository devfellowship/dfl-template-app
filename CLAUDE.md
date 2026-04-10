# DFL App

This repo was scaffolded from [dfl-template-app](https://github.com/devfellowship/dfl-template-app).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** — `@tailwindcss/vite` plugin, CSS-native config (no `tailwind.config.js`)
- **`@dfl/components`** — DFL shared component library
- **Supabase** — auth via magic link (see `src/lib/supabase.ts`)
- **React Router v7**

## Dev

```bash
cp .env.example .env.local   # fill in Supabase keys
npm install
npm run dev
```

## Verify (lint + typecheck + build)

```bash
npm run verify
```

## Governance

- CI: `.github/workflows/ci.yml` delegates to `devfellowship/dfl-ci`
- Dependency updates: Renovate (shared `dfl-hq` config)
- ESLint: `eslint.config.js`
- Contract: `repo-contract.yaml`
