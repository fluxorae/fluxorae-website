export default () => ({
  jwtSecret: process.env.JWT_SECRET ?? 'fluxorae-dev-secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '1h',
  databaseUrl:
    process.env.DATABASE_URL ?? 'postgresql://postgres:password@localhost:5432/fluxorae',
});
