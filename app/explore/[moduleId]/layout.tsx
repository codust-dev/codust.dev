'use client'

import { ReactNode, useState } from 'react'
import { usePathname, useRouter, useParams } from 'next/navigation'
import ModuleSidebar from '@/components/explore/ModuleSidebar'
import TableOfContents from '@/components/explore/TableOfContents'
import { HiXMark, HiBars3, HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { allExploreModules } from 'contentlayer/generated'
import clsx from 'clsx'

interface LayoutProps {
  children: ReactNode
}

export default function ModuleLayout({ children }: LayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const moduleId = params.moduleId as string
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isTocOpen, setIsTocOpen] = useState(false)

  const moduleTitle = moduleId
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  // Get all chapters for this module, sorted by order
  const chapters = allExploreModules
    .filter((module) => module.module === moduleId && !module.draft)
    .sort((a, b) => a.order - b.order)

  // Get current chapter index
  const currentSlug = pathname.split('/').pop() || ''
  const currentIndex = chapters.findIndex((chapter) => chapter.chapter === currentSlug)

  // Check if we're on the module root page
  const isModuleRoot = pathname === `/explore/${moduleId}`

  // Navigation functions
  const goToNext = () => {
    if (isModuleRoot && chapters.length > 0) {
      // If on module root, go to first chapter
      router.push(`/explore/${moduleId}/${chapters[0].chapter}`)
    } else if (currentIndex < chapters.length - 1) {
      // If in a chapter, go to next chapter
      router.push(`/explore/${moduleId}/${chapters[currentIndex + 1].chapter}`)
    }
  }

  const goToPrevious = () => {
    if (isModuleRoot) {
      // If on module root, do nothing (button will be disabled)
      return
    } else if (currentIndex === 0) {
      // If on first chapter, go back to module root
      router.push(`/explore/${moduleId}`)
    } else {
      // Otherwise go to previous chapter
      router.push(`/explore/${moduleId}/${chapters[currentIndex - 1].chapter}`)
    }
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Mobile sidebar backdrop */}
      {(isSidebarOpen || isTocOpen) && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-20 h-full w-full border-0 bg-gray-900/50 backdrop-blur lg:hidden"
          onClick={() => {
            setIsSidebarOpen(false)
            setIsTocOpen(false)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsSidebarOpen(false)
              setIsTocOpen(false)
            }
          }}
        />
      )}

      {/* Mobile header */}
      <div className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-2 lg:hidden dark:border-gray-800 dark:bg-black">
        <button
          type="button"
          className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          onClick={() => setIsSidebarOpen(true)}
        >
          <span className="sr-only">Open navigation</span>
          <HiBars3 className="h-6 w-6" />
        </button>
        <div className="text-sm font-medium">{moduleTitle}</div>
        <button
          type="button"
          className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          onClick={() => setIsTocOpen(true)}
        >
          <span className="sr-only">Open table of contents</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      </div>

      <div className="flex min-h-screen">
        {/* Left sidebar */}
        <div
          className={clsx(
            'no-scrollbar fixed top-16 left-0 z-30 h-[calc(100vh-4rem)] w-72 transform overflow-y-auto bg-white transition-transform duration-300 ease-in-out lg:sticky dark:bg-black',
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
            'lg:w-[18rem] xl:w-[20rem]'
          )}
        >
          <div className="h-full py-6 pr-2 pl-4">
            <ModuleSidebar
              moduleId={moduleId}
              className="border-r border-gray-200 dark:border-gray-800"
              onNavigate={() => setIsSidebarOpen(false)}
            />
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto px-4 py-8 lg:px-8 xl:px-12">
          <div className="mx-auto max-w-[55rem]">
            {children}
            {/* Navigation buttons */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-8 dark:border-gray-800">
              <button
                onClick={goToPrevious}
                disabled={isModuleRoot}
                className={clsx(
                  'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium',
                  isModuleRoot
                    ? 'cursor-not-allowed text-gray-400 dark:text-gray-600'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                )}
              >
                <HiArrowLeft className="h-5 w-5" />
                Previous
              </button>
              <button
                onClick={goToNext}
                disabled={!isModuleRoot && currentIndex === chapters.length - 1}
                className={clsx(
                  'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium',
                  !isModuleRoot && currentIndex === chapters.length - 1
                    ? 'cursor-not-allowed text-gray-400 dark:text-gray-600'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                )}
              >
                Next
                <HiArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </main>

        {/* Right sidebar - Table of contents */}
        <div
          className={clsx(
            'fixed top-16 right-0 z-30 h-[calc(100vh-4rem)] w-72 transform bg-white transition-transform duration-300 ease-in-out lg:sticky dark:bg-black',
            isTocOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
            'lg:w-[18rem] xl:w-[20rem]'
          )}
        >
          <div className="h-full py-6 pr-4 pl-2">
            <TableOfContents
              className="border-l border-gray-200 dark:border-gray-800"
              onNavigate={() => setIsTocOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
