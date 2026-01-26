FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --workspace apps/in

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/apps/in/.next ./.next
COPY --from=builder /app/apps/in/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/in/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start", "--workspace", "apps/in"]
