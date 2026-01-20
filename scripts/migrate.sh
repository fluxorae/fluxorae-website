#!/usr/bin/env bash
set -euo pipefail

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL is not set"
  exit 1
fi

echo "Running Prisma migrate deploy..."
npx prisma migrate deploy
npx prisma generate
