import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://page.funjoyslime.com', // https://page.funjoyslime.com/
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
