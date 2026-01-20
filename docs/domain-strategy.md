# Domain & DNS Plan (fluxorae.com primary, fluxorae.in redirect)

Single-domain SEO with clean 301s. `fluxorae.com` is the canonical host; `fluxorae.in` and `www.fluxorae.in` forward to it.

## 1) fluxorae.com (primary)
- Hosting: Vercel (recommended for Next.js). Add the project in Vercel, then attach the domain.
- DNS:
  - Apex: `fluxorae.com` → A `76.76.21.21` (Vercel edge).
  - `www`: CNAME `www` → `cname.vercel-dns.com`.
- SSL: Vercel auto-issues certs once DNS is verified.
- If you keep AWS/ECS instead of Vercel: point Route53/Cloudflare A/ALIAS to the ALB/CloudFront that fronts your ECS service.

## 2) fluxorae.in (301 redirect to .com)
Prefer registrar- or edge-level forwarding; avoid JS/meta refresh.
- Route53 + S3 redirect (AWS-native):
  1. Create S3 bucket `fluxorae.in`, enable static website hosting, set “Redirect requests” to `https://fluxorae.com`.
  2. (Optional) bucket `www.fluxorae.in` redirect to `https://www.fluxorae.com`.
  3. Create ACM cert in `us-east-1` for `fluxorae.in` + `www.fluxorae.in`.
  4. Create CloudFront distro with that cert, origin = S3 website endpoint, behavior = 301 redirect.
  5. Route53 records: `fluxorae.in` ALIAS to CloudFront, `www` CNAME to CloudFront.
- Cloudflare alternative: add both hosts to a “Forwarding URL 301” rule → `https://fluxorae.com/$1` (and `https://www.fluxorae.com/$1` for `www`).
- Registrar forwarding (GoDaddy/Namecheap style) works too if it issues true 301s.
- App-level safety net: `next.config.js` now 301-redirects `fluxorae.in` and `www.fluxorae.in` to `.com` if traffic still reaches the app.

## 3) App config (keeps SEO canonical)
- Env: `NEXT_PUBLIC_BASE_URL=https://fluxorae.com`.
- `metadataBase` and `robots.ts`/`sitemap.ts` already point to `.com`.
- When/if India-specific content is needed later, keep `.com` global and add `.in` with `hreflang` + canonicals; until then, full redirect is best for SEO.

## 4) Validation checklist
- `curl -I https://fluxorae.in` returns `301` → `https://fluxorae.com`.
- `curl -I https://www.fluxorae.in` returns `301` → `https://www.fluxorae.com`.
- `curl -I https://fluxorae.com` returns `200` and `Location` is absent.
- Verify both hosts in Google Search Console; set `.com` as canonical property.
