# Fluxorae Security & SEO Checklist

## Security Checklist
- [ ] **MFA Implementation**: Ensure Multi-Factor Authentication is active for all admin accounts.
- [ ] **JWT Rotation**: Implement refresh token rotation and short-lived access tokens.
- [ ] **Email allowlist**: Enforce strict domain-to-email mapping in backend auth (Implemented).
- [ ] **CORS Policy**: Configure strict CORS headers to only allow trusted subdomains.
- [ ] **SQL Injection**: Use Prisma (orm) to prevent SQL injection (Implemented).
- [ ] **Rate Limiting**: Add rate limiting to `/api/auth` and `/api/leads`.

## SEO Checklist
- [ ] **Canonical Tags**: Set correct canonical URLs for both domains to avoid duplicate content flags.
- [ ] **Meta Tags**: Unique meta titles and descriptions for all pages on `.in` and `.com`.
- [ ] **Sitemap.xml**: Generate individual sitemaps for each domain.
- [ ] **Robots.txt**: Configure separate robots.txt for each domain.
- [ ] **Performance**: Optimize images and use Next.js font optimization for fast LCP.
