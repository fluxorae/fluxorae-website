# Fluxorae Digital Ecosystem – Backlog & Milestones

This backlog converts the PRD into actionable work with acceptance criteria. Phases align to the 12-week delivery target.

## Phase 0 (1w) – Foundations
- Repo layout: `apps/public` (current site), `apps/ops` (internal), `apps/api` (NestJS), shared `packages/ui`, `packages/config`.
  - AC: Turbo/PNPM or npm workspaces configured; root scripts for lint/test/build.
- CI/CD scaffold: GitHub Actions for lint + typecheck + test + build.
  - AC: PRs must pass; main auto-build.
- Env handling: `.env.example` covering API, DB, Redis, S3, mail, payment, AI; secret loading strategy documented.
- Base API: NestJS app with health endpoint, logger, global validation, error filter.
- DB: Prisma schema stub with users/roles/sessions; migrations run locally.

## Phase 1 (2w) – Auth & RBAC
- Auth flows: register/login/logout, JWT access + refresh, password reset; OTP/MFA hooks ready (email/SMS provider abstracted).
  - AC: API endpoints `/auth/register`, `/auth/login`, `/auth/refresh`, `/auth/logout`, `/auth/password-reset` return validated responses; rate limits in place.
- RBAC: Roles (super-admin, admin, employee, client, freelancer, partner) with guard middleware.
  - AC: Protected routes reject unauthorized; integration test for each role.
- Audit log hook: records actor/action/entity on auth and user changes.
  - AC: log entries stored; queryable by admin.
- Ops app auth: Next.js ops shell with login page, protected layout, role-aware nav.

## Phase 2 (2w) – Client Portal MVP
- Projects: CRUD (admin), list/detail (client/employee), statuses, milestones.
- Tasks: basic create/update/status, assignee.
- Files: S3 presign upload/download with size/type validation.
- Tickets: create/view/update status; comments thread.
- UI: Client dashboard showing active projects, tickets, invoices summary.
- AC: E2E flow—client logs in, sees projects, opens ticket, uploads file.

## Phase 3 (2w) – Employee Portal & Project Ops
- Kanban board for tasks; drag/drop ordering.
- Assignments and workload view for employees.
- Attendance/leave stubs (create request, approve/reject).
- Reports page (summary of projects/tasks/tickets).
- AC: Employee can move tasks on Kanban; manager/admin sees updates.

## Phase 4 (2w) – Billing & Payments
- Invoices: create/edit, GST fields, line items; PDF view.
- Payments: Razorpay integration (intent + callback); Stripe optional; webhook handlers persist status.
- Subscriptions: plan definitions; assign to clients; renewal dates.
- AC: Invoice payment marks paid, emits audit log, visible to client.

## Phase 5 (2w) – Support & AI
- Support: ticket SLAs, priority, filters; email notifications on updates.
- Knowledge base scaffold: categories/articles (static for now).
- AI automations: lead auto-reply, report draft, message draft endpoints using AI SDK & Gateway.
- AC: AI endpoints return responses with logged prompts/outputs; togglable per env.

## Phase 6 (1w) – Hardening & Deployment
- Testing: unit (services), API contract tests, smoke E2E for auth/projects/payments; load test baseline.
- Security: rate limiting, input validation, headers, CSRF where relevant, file scan toggle.
- Observability: structured logs, basic metrics, error reporting.
- Deploy: staging + prod on AWS (API/ops) and Vercel (public), Cloudflare DNS/SSL; backups configured.
- AC: Green CI, successful staging and prod deploys, runbooks written.

## Cross-cutting acceptance
- Accessibility: keyboard + ARIA on new UI components.
- I18n-ready: copy structured for EN/HI expansion.
- Performance: pages pass Lighthouse 80+ (mobile) for public site.

## Open Decisions
- SMS provider: Twilio vs MSG91.
- AI providers enabled by default: OpenAI + Anthropic via Gateway.
- File AV scanning: enable via Lambda/ClamAV or defer to phase 6.
