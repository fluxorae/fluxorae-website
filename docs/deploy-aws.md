# Deployment Guide – AWS (fluxorae.com & fluxorae.in)

This project is AWS-first (domains already on AWS). Two targets:
- **fluxorae.com** (public marketing Next.js app)
- **fluxorae.in** (ops/portal Next.js + API)

## 1) Prereqs
- AWS account with Route53, ACM, IAM user/roles for CI.
- RDS Postgres (set `DATABASE_URL`), Elasticache Redis (optional for later phases), S3 bucket for assets.
- Node 18+, npm.
- Domains fluxorae.com / fluxorae.in in Route53 with ACM certificates (us-east-1 for CloudFront).

## 2) Environment
Copy `.env.example` → `.env.local` and set:
```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/fluxorae?schema=public
SKIP_DB=0 # set 1 for preview builds without DB
NEXT_PUBLIC_BASE_URL=https://fluxorae.in
```

## 3) Prisma / DB
```
npm install
npx prisma generate
npx prisma migrate deploy   # or `migrate dev --name init` in dev
```

## 4) Public app (fluxorae.com)
Option A (simplest): **AWS Amplify**
- Connect repo, select `main`, set env vars (`NEXT_PUBLIC_BASE_URL=https://fluxorae.com`, `SKIP_DB=1` if you don't want DB on public).
- Monorepo note: the root `amplify.yml` sets `appRoot: apps/public`; if configuring through the Amplify console instead, set `AMPLIFY_MONOREPO_APP_ROOT=apps/public` so the build picks up the Next.js package.
- Build command: `npm install && npm run build`.

Option B: **S3 + CloudFront**
- `npm run build && next export` (if fully static) or use Lambda@Edge for SSR.
- Upload to S3, create CloudFront distro, point Route53 A/AAAA to CloudFront.

## 5) Ops app + API (fluxorae.in)
Frontend (Next.js SSR) options:
- Amplify with SSR support (envs: `DATABASE_URL`, `SKIP_DB=0`).
- Or containerized on ECS/Fargate (preferred when pairing with API):
  - Dockerize Next.js (server mode).
  - ALB → ECS service; security group allows outbound to RDS.

API (NestJS to be added):
- Containerize NestJS app; deploy to ECS/Fargate behind the same or separate ALB.
- Env vars: `DATABASE_URL`, JWT secrets, SMTP, payment keys, AI keys.

## 6) SSL / DNS
- Request ACM certs for `fluxorae.com`, `www.fluxorae.com`, `fluxorae.in`, `www.fluxorae.in` (us-east-1 for CloudFront, regional for ALB/Amplify).
- Route53 alias records to Amplify/CloudFront/ALB as appropriate.

## 7) CI/CD (GitHub Actions sketch)
- Job: install → lint → test (future) → build.
- Deploy step: Amplify CLI (`amplify publish`) or AWS CDK/CLI to push ECS task definition.
- Secrets: store AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY / AWS_REGION in GitHub Secrets.

## 8) Health checks
- `/api/health` (web app).
- Add API health once NestJS is added.

## 9) Notes
- For builds without DB, set `SKIP_DB=1` to use fallback data for ops summary.
- Switch to `SKIP_DB=0` in staging/prod so Prisma queries run against RDS.
