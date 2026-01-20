# Prisma Setup

1) Ensure `DATABASE_URL` is set (Postgres). Example:
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/fluxorae?schema=public"
```

2) Install dependencies (already added):
```
npm install
npx prisma generate
```

3) Run migrations (will create tables defined in `schema.prisma`):
```
npx prisma migrate dev --name init
```

4) Use Prisma Client in your routes/services:
```ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```
