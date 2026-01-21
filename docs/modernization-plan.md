# Fluxorae.com Modernization Plan

Prepared as a senior engineering blueprint to deliver a premium, scalable, production-grade experience for fluxorae.com and adjacent properties.

## Frontend Architecture
- **Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, next/font, next/image. RSC-first; client components only for interactivity.
- **Structure**: Monorepo with `apps/public` (marketing), `apps/ops` (auth-only portal shell), `apps/api` (NestJS), `packages/ui` (design system), `packages/tokens` (design tokens + Tailwind plugin), `packages/config` (lint/tsconfig/prettier), `packages/utils`.
- **Routing**: Route groups for public vs admin `(public)/(marketing)`, `(public)/(legal)`, `(admin)` guarded by middleware. `generateMetadata` per route; `app/api/og` for OpenGraph images.
- **Components**: Atomic layers—tokens → primitives (`packages/ui`) → composition (`components/sections/*`) → pages. Headless primitives with accessibility baked in (keyboard, focus rings, aria).
- **State/Data**: Server components for data fetch with `fetch` cache + tags; ISR via `revalidate` and `revalidateTag` on CMS changes. Client state limited to forms/nav.

## Design System
- **Tokens**: Colors/typography/spacing/radius/motion defined once in `packages/tokens` → emitted as CSS variables and Tailwind theme extension. Dark-first palette with high contrast; accent gradients for brand.
- **Typography**: Display = Sora, Body = Manrope; loaded via `next/font` with fallbacks; consistent scale (8pt-derived).
- **Motion**: Low-distance transform/opacity transitions, staggered reveals; respect `prefers-reduced-motion`. Avoid expensive shadows/blurs on mobile.
- **Responsiveness**: Mobile-first fluid grid (12-col), max width containers, consistent section spacing, LCP-focused hero layouts.

## Performance Targets
- Lighthouse 90+ (mobile); LCP <2.5s, CLS <0.1, TBT <150ms.
- **Optimizations**: `next/image` everywhere with AVIF/WebP, blur placeholders, proper `sizes`; code-splitting for heavy sections (maps/charts/admin tables); `compress: true`; `poweredByHeader: false`.
- **Fonts**: Preload via `next/font`; minimal subsets; display swap.
- **Caching**: Long-lived static assets via CDN; ISR for content; tag-based revalidation on CMS webhooks; explicit cache headers for assets/API where safe.

## Security & Compliance
- **Headers**: CSP (nonce/sha for inline), HSTS (31536000, includeSubDomains, preload), X-Frame-Options SAMEORIGIN, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy least-privilege.
- **AuthZ**: Middleware role guards on `(admin)`; rate limiting on API routes (Redis bucket); CSRF if cookies used; secure cookies; session expiration.
- **Secrets**: Stored in AWS SSM/Secrets Manager or Vercel envs; no secrets in repo. Rotate keys; separate per env.
- **Dependency hygiene**: Weekly audit (GHAS/Snyk optional), pin via lockfile; renovate/dependabot.

## SEO & Analytics
- `generateMetadata` per page with canonical URLs; OpenGraph/Twitter tags; structured data (Organization, Breadcrumb, Article).
- Sitemap/robots env-aware; hreflang ready for EN/HI; clean URLs.
- Analytics: Vercel Speed Insights + privacy-safe analytics (Plausible/GA4 with consent); conversion events on forms.

## Deployment & Environments
- **Envs**: dev / staging / prod; isolated DB/Redis/S3; feature flags via env.
- **Public (fluxorae.com)**: Vercel (preferred) or AWS Amplify/CloudFront+Lambda@Edge. CDN caching, image optimization, preview deploys for PRs.
- **Ops/API**: ECS/Fargate or Amplify for SSR where suitable; RDS Postgres, ElastiCache Redis, S3 for uploads; WAF on ALB/CloudFront; Route53 DNS.
- **CI/CD**: GitHub Actions—lint/typecheck/test/build on PR; deploy jobs per env (public/ops/api). Artifacts cached; required checks before merge.

## Project Structure (target)
```
apps/
  public/      # Marketing site (Next.js App Router)
  ops/         # Auth-only portal shell (Next.js)
  api/         # NestJS API (REST-first)
packages/
  ui/          # Accessible headless + styled primitives
  tokens/      # Design tokens (CSS vars + Tailwind)
  config/      # Shared lint/tsconfig/prettier
  utils/       # Shared helpers
```

## Performance & Security Checklist (go-live)
- LCP hero image optimized with `next/image` + correct `sizes`; fonts via `next/font`.
- No blocking third-party scripts; defer/async non-critical assets.
- Axe/Pa11y clean for top routes; keyboard-only nav works; focus styles visible.
- CSP/HSTS/permissions headers active; redirects correct; 404/500 styled.
- Rate limiting on API routes; secrets sourced from env; `.env.example` synced.
- CI green: lint, typecheck, tests, build; deployment from tagged commit.

## Immediate Actions
1) Introduce tokens file and shared UI primitives; refactor pages to use sections + primitives (start with Home/About/Services).
2) Harden Next config with security headers, image patterns, compression.
3) Add CI workflow for lint/typecheck/build; add preview deploy for PRs.
4) Wire CMS webhooks to trigger ISR tag revalidation; add OG image route.
5) Stand up staging on Vercel/Amplify with separate env secrets; enforce required checks.
