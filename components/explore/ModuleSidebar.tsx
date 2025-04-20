'use client'

import { usePathname } from 'next/navigation'
import Link from '@/components/Link'
import clsx from 'clsx'
import { allExploreModules } from 'contentlayer/generated'

interface ModuleSidebarProps {
  moduleId: string
  className?: string
  onNavigate?: () => void
}

export default function ModuleSidebar({ moduleId, className, onNavigate }: ModuleSidebarProps) {
  const pathname = usePathname()
  const isModuleRoot = pathname === `/explore/${moduleId}`

  // Get all chapters for this module, sorted by order
  const chapters = allExploreModules
    .filter((module) => module.module === moduleId && !module.draft)
    .sort((a, b) => a.order - b.order)

  const moduleTitle = moduleId
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <nav className={clsx('flex-shrink-0 overflow-y-auto p-6', className)}>
      <div className="mb-8">
        <Link
          href={`/explore/${moduleId}`}
          className={clsx(
            'block text-sm font-semibold transition-colors',
            isModuleRoot
              ? 'text-primary-600 dark:text-primary-400'
              : 'hover:text-primary-600 dark:hover:text-primary-400 text-gray-900 dark:text-gray-100'
          )}
          onClick={onNavigate}
        >
          {moduleTitle}
        </Link>
      </div>
      <div className="space-y-2">
        {chapters.map((chapter) => {
          const isActive = pathname === `/explore/${moduleId}/${chapter.chapter}`
          // Create a unique key using module and chapter
          const uniqueKey = `${moduleId}-${chapter.chapter}-${chapter._id}`
          return (
            <div key={uniqueKey}>
              <Link
                href={`/explore/${moduleId}/${chapter.chapter}`}
                className={clsx(
                  'block rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100'
                )}
                onClick={onNavigate}
              >
                {chapter.title}
              </Link>
            </div>
          )
        })}
      </div>
    </nav>
  )
}
