/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pure static export — no Node server, no API routes, nothing dynamic —
  // so it can be served from Cloudflare Pages (or GitHub Pages, S3, etc.)
  // as plain files. `next build` now writes the site to `out/`.
  output: 'export',
  // The Next.js Image Optimization API needs a server to run on-demand
  // resizing; static hosts can't run it. `unoptimized: true` makes
  // next/image just render a plain <img> at the source file's size instead
  // — fine here since the source JPEGs are already reasonably sized for a
  // marketing site.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
