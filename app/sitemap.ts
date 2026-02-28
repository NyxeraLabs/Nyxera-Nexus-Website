import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nyxera-nexus.nyxera.cloud',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ];
}
