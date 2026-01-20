# Hosting Choice for fluxorae.com / fluxorae.in

**Recommended split**
- fluxorae.com (public): AWS Amplify (SSR-ready). Simple CI/CD from main, built-in HTTPS via ACM, Route53 alias, previews optional.
- fluxorae.in (ops portal SSR) + API: ECS/Fargate with ALB. This gives control over API (NestJS to be added), sockets/webhooks, and DB/Redis proximity.

Why:
- Amplify is fastest path for the public site (no custom infra) and already fits AWS/Route53/ACM.
- ECS/Fargate is better for the ops+API combo than Amplify because we’ll run a custom NestJS service alongside SSR Next with DB/Redis and background jobs.

Implementation outline
- Public: Amplify app pointing to main, envs (SKIP_DB=1, NEXT_PUBLIC_BASE_URL=https://fluxorae.com). Build cmd 
pm ci && npm run build.
- Ops: Containerize Next SSR and Nest API separately; deploy to ECS/Fargate in the same VPC/subnets as RDS/Redis/S3. ALB listeners: 443 -> Next service (/), and /api -> Nest service (path-based routing).
- DNS/SSL: Route53 alias to Amplify for fluxorae.com; Route53 alias to ALB for fluxorae.in. ACM certs in us-east-1 (for ALB) and us-east-1/us-east-2 if CloudFront used later.

Next actions
1) Provide RDS Postgres URL; set DATABASE_URL and run 
px prisma migrate deploy.
2) If this plan is approved, I’ll add Dockerfiles for Next SSR and Nest (stub), ECS task defs, and a GitHub Actions workflow to build/push images to ECR and update ECS services. 
