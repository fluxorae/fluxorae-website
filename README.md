# Fluxorae Monorepo

Multi-surface workspace for Fluxorae (public marketing, India variant, ops, and API).

## Layout
- `apps/public` – current Next.js marketing site (fluxorae.com) with Tailwind/Framer and Sanity hooks.
- `apps/in` – placeholder for India-focused site or redirect stub.
- `apps/ops` – placeholder for ops/dashboard frontend.
- `apps/api` – placeholder for backend (NestJS/Prisma planned).
- `docs` – architecture, domain strategy, and planning notes.
- `.github` – CI/CD workflows.

## Using the public app
```bash
cd apps/public
npm install
npm run dev
```

## Next steps
- Add workspaces (root package) and per-app CI once the ops/API scaffolds land.
- Finalize domain wiring (fluxorae.in redirect or India site) and connect CI redirect checks.
