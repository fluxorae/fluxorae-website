# Fluxorae Digital Ecosystem – Architecture & Delivery Roadmap

Author: Shivam (CEO) / Codex assistant  
Scope: Implement the PRD for Fluxorae’s unified business operating system across fluxorae.com (public) and fluxorae.in (operations).

## 1) Domains & Environments
- **fluxorae.com**: Public marketing site, lead capture, insights/blog. (Next.js)
- **fluxorae.in**: Auth-gated operational portal for admins/employees/clients/partners/freelancers. (Next.js app)
- **api.fluxorae.in**: Backend API (NestJS) for auth, projects, billing, support, AI jobs.
- Environments: dev, staging, prod. Each with isolated Postgres/Redis buckets. Secrets via env vars + secret manager (AWS SSM/Secrets Manager).
- CDN/DNS/SSL: Cloudflare in front; origin on AWS (Vercel acceptable for public, AWS ECS/Fargate/ALB for API/ops).

## 2) Stack Choices
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion, Lucide. I18n-ready (EN/HI). Role-aware routes via middleware.
- **Backend**: NestJS (REST-first; GraphQL optional), TypeScript, Zod/DTO validation, JWT + refresh, optional OTP (email/SMS). Background jobs via BullMQ (Redis).
- **Database**: Postgres (primary). Redis (sessions/cache/rate limits/queues). Mongo (optional for logs/events if needed; otherwise keep logs in OpenSearch/CloudWatch).
- **Files/Uploads**: S3 with presigned URLs; malware scan (ClamAV/Lambda) optional later.
- **Payments**: Razorpay primary (India GST); Stripe optional.
- **Email/SMS**: Nodemailer/SES for mail; SMS via Twilio or MSG91 (to decide). OTP/MFA hooks built into auth.
- **AI**: Vercel AI SDK + Gateway provider; models configurable (OpenAI/Anthropic). Job runner triggers for auto-replies/reports.
- **Infra/CI**: Dockerized services; GitHub Actions for lint/test/build; deploy to Vercel (public) and AWS ECS/Fargate (API/ops). DB via RDS (Postgres), Redis via Elasticache. Backups/snapshots scheduled.

## 3) High-Level Modules (MVP target)
- **Auth**: Signup/login, OTP/MFA-ready, RBAC (super-admin, admin, employee, client, freelancer, partner), password reset, session management.
- **Client Portal**: Dashboard, project status, file uploads, tickets, invoices, payments.
- **Employee Portal**: Tasks/Kanban, attendance, leave, reports, comms.
- **Project Management**: Projects, milestones, deadlines, assignments, progress tracking.
- **Billing**: Invoices (GST), payments, subscriptions, receipts, webhooks.
- **Support**: Tickets, comments, notifications; KB scaffold.
- **AI Automations**: Lead auto-replies, report generation, comms drafts; logging/guardrails.

## 4) Data Model (seed)
- `users` (id, email, password_hash, role, status, profile, mfa_enabled).
- `roles` (id, name, permissions jsonb).
- `sessions` (user_id, refresh_token, expires_at).
- `clients` (org info, contacts).
- `employees` (user_id, hr fields).
- `projects` (client_id, owner_id, status, dates).
- `tasks` (project_id, assignee_id, status, order, metadata).
- `milestones` (project_id, due_date, status).
- `invoices` (project_id/client_id, amount, currency, gst, status, razorpay/stripe ids).
- `payments` (invoice_id, provider, status, txn refs).
- `tickets` (project_id/client_id/user_id, status, priority).
- `files` (project_id/ticket_id, s3_key, size, mime, checksum).
- `audit_logs` (actor, action, entity, metadata).

## 5) API Surface (initial REST set)
- Auth: `POST /auth/register`, `POST /auth/login`, `POST /auth/otp`, `POST /auth/refresh`, `POST /auth/logout`, `POST /auth/password-reset`.
- Users: `GET/POST /users`, `PATCH /users/:id`, `PATCH /users/:id/role`.
- Clients: `GET/POST /clients`, `GET /clients/:id`.
- Projects: `GET/POST /projects`, `GET/PATCH /projects/:id`, `POST /projects/:id/milestones`, `POST /projects/:id/tasks`.
- Tasks: `PATCH /tasks/:id`, `POST /tasks/:id/assign`, `POST /tasks/:id/status`.
- Tickets: `GET/POST /tickets`, `POST /tickets/:id/messages`, `PATCH /tickets/:id`.
- Billing: `POST /invoices`, `GET /invoices/:id`, `POST /payments/razorpay/webhook`, `POST /payments/stripe/webhook`.
- Files: `POST /files/presign`, `POST /files/complete`.
- AI: `POST /ai/lead-reply`, `POST /ai/report`, `POST /ai/message-draft`.

## 6) Delivery Phases (12-week target)
- **Phase 0 (1w)**: Repo layout, envs, CI, base NestJS API, shared UI kit, Postgres schema (Prisma), Redis wiring, auth scaffolding.
- **Phase 1 (2w)**: Auth complete (RBAC, JWT/refresh, password reset, OTP-ready), user CRUD, role guard middleware, audit log hook.
- **Phase 2 (2w)**: Client portal MVP (projects list/detail, milestones, tasks basic, tickets create/view, file upload presign + S3).
- **Phase 3 (2w)**: Employee portal (Kanban, assignments, status updates), attendance/leave stubs, reporting endpoints.
- **Phase 4 (2w)**: Billing (invoice creation, GST fields, Razorpay integration, webhooks, payment status UI).
- **Phase 5 (2w)**: Support + KB scaffold, notifications (email), AI lead auto-reply + report draft endpoints with logging.
- **Phase 6 (1w)**: Hardening, QA (unit/API/load), observability, runbooks, staging/prod deploys, backups.

## 7) Deployment Plan (baseline)
- Public (fluxorae.com): Deploy Next.js app on Vercel; connect Cloudflare DNS; preview envs via branches.
+- Ops (fluxorae.in): Deploy Next.js ops app + NestJS API on AWS (ECS/Fargate) behind ALB, Cloudflare proxied. RDS Postgres, Elasticache Redis, S3 for files.
- CI: GitHub Actions: lint + typecheck + test + build; push to main → deploy to staging/prod; tagged releases for prod.
- Secrets: .env per env, stored in SSM/Secrets Manager; never in repo.

## 8) Immediate Next Steps (to start implementation)
1. Restructure repo to add `apps/public` (current site) + `apps/ops` (new Next.js) + `apps/api` (NestJS); add shared `packages/ui` and `packages/config`.
2. Add base NestJS API with Prisma schema (tables above), health checks, auth skeleton, CI pipeline.
3. Add ops Next.js shell with protected routes and role-based nav; wire to API.
4. Provision staging RDS/Redis/S3 (or use Docker locally) and plug env vars.

