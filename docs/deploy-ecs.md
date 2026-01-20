# ECS/Fargate Deploy Notes (fluxorae.in)

### Inputs you need to set
- AWS secrets in GitHub: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`
- Environment variables in workflow:
  - `AWS_REGION` (default ap-south-1)
  - `ECR_REPO` (e.g., fluxorae-ops)
  - `ECS_CLUSTER` (e.g., fluxorae-cluster)
  - `ECS_SERVICE` (e.g., fluxorae-web)
- Task definition JSON (not in repo) with container pointing to image `ECR_REGISTRY/ECR_REPO:${GITHUB_SHA}` and env vars:
  - `DATABASE_URL` (RDS Postgres)
  - `NEXT_PUBLIC_BASE_URL=https://fluxorae.in`
  - `SKIP_DB=0`
  - Any secrets (JWT, SMTP, etc.) injected via task env or SSM.

### Workflow flow (`.github/workflows/deploy-ops.yml`)
1. Checkout, install deps, lint, build.
2. Login to ECR, build `Dockerfile.web`, push image tagged with commit SHA.
3. Update ECS service (command left commented; requires task definition ARNs).

### Steps to finish
1. Create ECR repo `fluxorae-ops` (or adjust name).
2. Create ECS cluster + service (Fargate) with ALB listener; point Route53 `fluxorae.in` to ALB.
3. Prepare task definition family (e.g., `fluxorae-web`) with container from ECR and the env vars above.
4. Uncomment `aws ecs update-service` in workflow and, if needed, use `aws ecs register-task-definition` to inject the new image.

### Notes
- Keep `SKIP_DB=0` in production; use `SKIP_DB=1` only for builds without DB connectivity.
- For API/Nest container, add a second ECR repo/service and ALB path-based routing (/api).
