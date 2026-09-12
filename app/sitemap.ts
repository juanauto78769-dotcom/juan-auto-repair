import type { MetadataRoute } from 'next';

// Single-page marketing site, so this is a one-entry sitemap — but it's
// still worth having: it's what you submit in Google Search Console, and
// it gives Google an explicit lastModified/priority signal instead of
// relying on it to discover the page on its own.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://juanautorepairs.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
