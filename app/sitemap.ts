import { MetadataRoute } from 'next'
import { allBlogs, allExploreModules, allModuleStarters } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

  // Add explore module routes
  const exploreModuleRoutes = allExploreModules
    .filter((module) => !module.draft)
    .map((module) => ({
      url: `${siteUrl}/explore/${module.module}/${module.chapter}`,
      lastModified: module.date,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  // Add module starter routes
  const moduleStarterRoutes = allModuleStarters.map((starter) => ({
    url: `${siteUrl}/explore/${starter.moduleId}`,
    lastModified: starter.date,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const routes = [
    { route: '', priority: 1.0 },
    { route: 'blog', priority: 0.9 },
    { route: 'projects', priority: 0.8 },
    { route: 'tags', priority: 0.7 },
    { route: 'explore', priority: 0.9 },
    { route: 'newsletter', priority: 0.6 },
  ].map(({ route, priority }) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority,
  }))

  return [...routes, ...blogRoutes, ...exploreModuleRoutes, ...moduleStarterRoutes]
}
