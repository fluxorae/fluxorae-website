# GitHub OIDC deploy role for Amplify (fluxorae.com)

## Purpose
Creates an IAM role trusted by GitHub Actions (repo fluxorae/Fluxorae, branch main) that can trigger Amplify deploys for app `d2xl5a4ri11ava` in `eu-north-1`.

## Deploy
```bash
aws cloudformation deploy \
  --stack-name fluxorae-github-oidc-amplify \
  --template-file infra/github-oidc-amplify-role.yaml \
  --capabilities CAPABILITY_NAMED_IAM
```

Outputs: RoleArn (use this as GitHub secret `AWS_DEPLOY_ROLE_ARN`).

## Customize
- Change parameters if you need a different branch or repo.
- Policy is scoped to StartJob on branch `main` of the given Amplify app; extend if you need list/view permissions.
