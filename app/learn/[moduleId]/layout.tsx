'use client'

import { ReactNode, useState } from 'react'
import { useParams } from 'next/navigation'
import ModuleSidebar from '@/components/learning/ModuleSidebar'
import TableOfContents from '@/components/learning/TableOfContents'
import { HiXMark, HiBars3 } from 'react-icons/hi2'
import clsx from 'clsx'

interface LayoutProps {
  children: ReactNode
}

export default function ModuleLayout({ children }: LayoutProps) {
  const params = useParams()
  const moduleId = params.moduleId as string
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isTocOpen, setIsTocOpen] = useState(false)

  const moduleTitle = moduleId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Mobile sidebar backdrop */}
      {(isSidebarOpen || isTocOpen) && (
        <div
          className="fixed inset-0 z-20 bg-gray-900/50 backdrop-blur lg:hidden"
          onClick={() => {
            setIsSidebarOpen(false)
            setIsTocOpen(false)
          }}
        />
      )}

      {/* Mobile header */}
      <div className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-black lg:hidden">
        <button
          type="button"
          className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          onClick={() => setIsSidebarOpen(true)}
        >
          <span className="sr-only">Open navigation</span>
          <HiBars3 className="h-6 w-6" />
        </button>
        <div className="text-sm font-medium">
          {moduleTitle}
        </div>
        <button
          type="button"
          className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          onClick={() => setIsTocOpen(true)}
        >
          <span className="sr-only">Open table of contents</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
      </div>

      <div className="mx-auto max-w-[110rem]">
        <div className="lg:flex lg:justify-between">
          {/* Left sidebar */}
          <div
            className={clsx(
              'fixed inset-y-0 left-0 z-30 w-72 transform overflow-y-auto bg-white transition-transform duration-300 ease-in-out dark:bg-black lg:relative lg:inset-auto lg:transform-none',
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
              'lg:w-[18rem] xl:w-[20rem]'
            )}
          >
            <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-black lg:hidden">
              <span className="text-sm font-medium">Navigation</span>
              <button
                type="button"
                className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="sr-only">Close navigation</span>
                <HiXMark className="h-6 w-6" />
              </button>
            </div>
            <div className="h-[calc(100vh-4rem)] py-6 pl-4 pr-2 lg:py-8">
              <ModuleSidebar moduleId={moduleId} className="border-r border-gray-200 dark:border-gray-800" />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <main className="px-4 py-8 lg:px-8 xl:px-12">
              <div className="mx-auto max-w-[55rem]">
                {children}
              </div>
            </main>
          </div>

          {/* Right sidebar - Table of contents */}
          <div
            className={clsx(
              'fixed inset-y-0 right-0 z-30 w-72 transform bg-white transition-transform duration-300 ease-in-out dark:bg-black lg:relative lg:inset-auto lg:block lg:transform-none',
              isTocOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
              'lg:w-[18rem] xl:w-[20rem]'
            )}
          >
            <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-black lg:hidden">
              <span className="text-sm font-medium">On this page</span>
              <button
                type="button"
                className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                onClick={() => setIsTocOpen(false)}
              >
                <span className="sr-only">Close table of contents</span>
                <HiXMark className="h-6 w-6" />
              </button>
            </div>
            <div className="sticky top-0 h-screen py-6 pl-2 pr-4 lg:py-8">
              <TableOfContents className="border-l border-gray-200 dark:border-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 