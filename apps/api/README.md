# api.fluxorae (backend)

This workspace is the NestJS/Prisma backend for Fluxorae Private Limited. It powers:

- Multi-role authentication and JWT/RBAC guards.
- Service and product catalog seeding.
- Project posting with AI scope analysis and milestone scaffolding.
- Freelancer onboarding, workspace chat, payment gates, and admin controls.

## Getting started

1. `npm install` (from repo root) to bootstrap the workspace.
2. Copy `apps/api/.env.example` to `.env` and adjust:
   - `DATABASE_URL` should point to your PostgreSQL instance.
   - `JWT_SECRET` and `JWT_EXPIRES_IN` control token issuance.
3. Run `npx prisma db push --schema packages/db/schema.prisma` to sync the schema.
4. Start the server with `npm run dev --workspace apps/api`.

## Development notes

- The `PrismaModule` injects a singleton `PrismaService` with graceful shutdown hooks.
- `AiModule` exposes advisory AI analysis via `/api/ai/analyze` and logs all runs.
- Workspace chat leverages the `Message` table (project + sender) with `POST /api/workspace/messages`.
- `PaymentsModule` creates invoices/milestones and holds funds before QA release.
- `AdminModule` wraps user CRUD with role guards (`SUPER_ADMIN` / `ADMIN`).

Always run `npm run build --workspace apps/api` before deploying and include any migrations/tokens in your release notes.
