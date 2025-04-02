'use client'

import { usePathname } from 'next/navigation'
import Link from '@/components/Link'
import clsx from 'clsx'

interface ModuleSidebarProps {
  moduleId: string
  className?: string
}

interface Chapter {
  title: string
  slug: string
  items?: {
    title: string
    slug: string
  }[]
}

// This will be replaced with dynamic data from contentlayer
const DUMMY_CHAPTERS: Chapter[] = [
  {
    title: 'Getting Started',
    slug: 'introduction',
  },
  {
    title: 'Fundamentals',
    slug: 'fundamentals',
    items: [
      { title: 'Basic Concepts', slug: 'basic-concepts' },
      { title: 'Core Components', slug: 'core-components' },
    ],
  },
]

export default function ModuleSidebar({ moduleId, className }: ModuleSidebarProps) {
  const pathname = usePathname()

  return (
    <nav className={clsx('flex-shrink-0 overflow-y-auto p-6', className)}>
      <div className="mb-8">
        <h2 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
          {moduleId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </h2>
      </div>
      <div className="space-y-6">
        {DUMMY_CHAPTERS.map((chapter) => (
          <div key={chapter.slug} className="space-y-3">
            <Link
              href={`/learn/${moduleId}/${chapter.slug}`}
              className={clsx(
                'block text-sm font-medium',
                pathname === `/learn/${moduleId}/${chapter.slug}`
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
              )}
            >
              {chapter.title}
            </Link>
            {chapter.items && (
              <div className="ml-4 space-y-2">
                {chapter.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/learn/${moduleId}/${chapter.slug}/${item.slug}`}
                    className={clsx(
                      'block text-sm',
                      pathname === `/learn/${moduleId}/${chapter.slug}/${item.slug}`
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
} 