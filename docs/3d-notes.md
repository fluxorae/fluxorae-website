# 3D / Futuristic UI Notes

- Components: `components/common/NeonGrid.tsx` provides layered gradients + grid glow; reusable for public/ops sections.
- Tailwind palette includes `bharat` (saffron/green/ashoka) and neon/electric accents.
- Suggestions to extend:
  - Add subtle canvas or SVG noise overlay on hero sections.
  - Animate CTA/button outlines with `pulseGlow`.
  - Use framer-motion parallax on scroll for hero cards.
- Performance: keep GPU effects light; avoid heavy WebGL. Turn off animations for `prefers-reduced-motion`.
