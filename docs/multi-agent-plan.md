# Fluxorae Multi-Agent Delivery Plan

Single source of truth for how each agent ships its part of the Fluxorae ecosystem. Non‑negotiables: security first, separate repos/folders per system, no code duplication, performance-optimized builds, and clean documentation.

## Repo / Folder Topology
- Preferred monorepo: `/apps/public` (fluxorae.com), `/apps/in` (fluxorae.in variant or redirect stub), `/apps/ops` (ops.fluxorae.com), `/apps/api` (NestJS), `/packages/ui` and `/packages/config` for shared UI/config/constants. Turborepo/PNPM workspaces for lint/test/build orchestration.
- Alternative: four repos (public-web, in-web, ops-web, api). Still share a lightweight `@fluxorae/ui` package via a private npm feed or git submodule to avoid duplication.
- Env files per app (`.env.example` templates). Secrets stored in AWS SSM/Secrets Manager (ops/api) and Vercel project env vars (public).

## Agent Charters & Deliverables
### Agent 1 — fluxorae.com (Global Web)
- Stack: Next.js 14 (App Router) + Tailwind + Framer Motion, deployed to Vercel. Use existing dark/glass theme, Space Grotesk/Inter, accent gradients.
- Pages: Home, Services, Solutions/Case Studies, Industries, About, Blog/Insights (Sanity), Contact (form to API), Careers.
- UX: glass panels, gradient accents, premium hero/CTA, staggered motion, responsive from 320px up. Ensure Lighthouse 80+ mobile.
- Content: enterprise AI/engineering positioning, global currency, proof (logos/testimonials), clear CTAs (“Book a 30-minute consult”).
- SEO: metadata per page, OpenGraph/Twitter, schema.org Organization + Article, sitemap/robots, fast TTFB (edge).

### Agent 2 — fluxorae.in (India Web or Redirect)
- Default (per domain-strategy): hard 301 from fluxorae.in to fluxorae.com at edge + app-level safety net (already in `next.config.js`).
- If running independent India site: Next.js app in `/apps/in` with hreflang+canonical pointing to `.com`. India-focused copy, INR pricing samples, GST note, local trust signals (Razorpay, ISO, MSME if applicable), regional caselets, lead forms with state/city fields, optional Careers/Internships.
- SEO: `hreflang` for en-IN/en-US, canonical to primary where content matches. Keep CMS entries segmented by locale.

### Agent 3 — Backend & Admin
- Stack: NestJS + Prisma (Postgres) + Redis (sessions/queues), JWT+refresh, OTP-ready. Zod/DTO validation, global exception filter, rate limits.
- Modules: Auth/RBAC (roles: super-admin, admin, employee, client, freelancer, partner), Users, Clients, Projects, Milestones, Tasks, Tickets, Invoices/Payments (Razorpay primary, Stripe optional), Files (S3 presign), AI actions (lead reply/report/message), Audit Logs, Notifications (email/SMS).
- CMS: Sanity or Strapi for blog/case studies; expose read-only API to public site. Admin panel for content moderation and lead management.
- Deployment: AWS ECS/Fargate behind ALB, RDS Postgres, ElastiCache Redis, S3 for uploads, CloudWatch logs/metrics. Health endpoints: `/health`, `/ready`.

### Agent 4 — Ops/Dashboard (ops.fluxorae.com)
- Stack: Next.js or React SPA consuming Agent 3 API; protected by JWT + role guard. Layout already started in `app/ops`; evolve into full admin with navigation for Projects, Tickets, Billing, Automation, Users.
- Features: live metrics, timelines, task streams, project/ticket drill-downs, billing status, AI ops toggles, export/reporting. Guard sensitive routes; add audit log surfacing.

### Agent 5 — Domain, DevOps & Security
- Domains: fluxorae.com primary on Vercel; fluxorae.in 301 to .com via Route53+S3+CloudFront (or Cloudflare rule); ops/api on AWS with TLS via ACM. Keep app-level redirects as safety.
- CI/CD: GitHub Actions per app. Steps: install → lint → typecheck → test → build → deploy (Vercel for `.com`, Amplify/CloudFront or ECS for `.in`/ops, ECS for API). Tag-based prod promotions.
- Security: SSM/Secrets Manager, WAF on ALB/CloudFront, rate limiting, CSP/headers, JWT rotation, backups (RDS snapshots, S3 lifecycle), least-privilege IAM. Observability: structured JSON logs, uptime checks, tracing hook.

### Agent 6 — SEO, Content & Growth
- Architecture: clean URL slugs, semantic HTML, internal linking between services/solutions/blog. XML sitemaps split per surface, robots allowlist for `.com`.
- Metadata: per-page titles/descriptions, OG/Twitter images, Organization/Article schema, breadcrumb schema for blog. Canonicals set to `.com` when `.in` is redirect or duplicate.
- Content plan: 10–15 blog/insights pillars (AI implementation, data platforms, automation ROI, Indian compliance if `.in` lives), 4–6 case studies, services pages with industry CTAs.
- Conversion: sticky CTA, lead magnets, exit-intent/contact capture, thank-you pages with tracking. Analytics: GA4 + server-side events for key conversions.

## Delivery Phases (mapped to backlog)
1) Foundations (w1): repo/workspaces, CI, env templates, base NestJS app with health, Prisma schema init, shared UI package.
2) Auth/RBAC (w2-3): JWT+refresh, OTP hook, role guards, audit logging; ops shell protected.
3) Client Portal MVP (w4-5): projects/tasks/tickets/files, dashboards, S3 presign, basic notifications.
4) Billing & Payments (w6-7): invoices, GST/INR, Razorpay + webhook handling, receipts, subscription scaffold.
5) Support & AI (w8-9): ticket SLAs, KB stub, AI lead reply/report/message endpoints with logging.
6) Hardening & Launch (w10-12): tests (unit/API/E2E), perf/accessibility, observability, backups, staging→prod deploys; SEO checks, 301 validation for `.in`.

## Immediate Actions (next 3–5 days)
- Stand up workspace layout (`apps/public`, `apps/in`, `apps/ops`, `apps/api`, `packages/ui`), update root scripts, and move current Next app to `/apps/public`.
- Scaffold NestJS app with auth module + Prisma models from `docs/architecture-roadmap.md` and wire health checks; add GitHub Action for lint/test/build.
- Finalize domain wiring per `docs/domain-strategy.md` (edge 301s), keep `next.config.js` redirects as safety.
- Public site: lock page list/sections, add India-friendly copy variants and INR pricing blocks as gated content if `.in` goes live later.
- Ops app: connect `/api/ops/summary` to backend or stub with feature flags; add role-aware navigation and auth middleware.
- SEO: ensure metadataBase/canonicals, sitemap/robots, and schema are correct for `.com`; prepare hreflang/canonical toggles if `.in` is activated.

## Acceptance & QA Checklist
- Each surface deploys independently with green CI; secrets absent from repo.
- 301 from `.in` resolves to `.com` (unless India site enabled), canonicals correct, sitemaps reachable.
- Auth flows tested (unit + API), RBAC enforced, audit logs written.
- Performance: Lighthouse mobile 80+ on `.com`; ops dashboard responsive and protected.
- Docs updated in `/docs` for envs, deploy, and runbooks per app.
