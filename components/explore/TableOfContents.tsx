'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface TableOfContentsProps {
  className?: string
  onNavigate?: () => void
}

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents({ className, onNavigate }: TableOfContentsProps) {
  const pathname = usePathname()
  const [activeId, setActiveId] = useState<string>('')
  const [headings, setHeadings] = useState<Heading[]>([])
  const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({})

  // Clear headings when pathname changes
  useEffect(() => {
    setHeadings([])
    setActiveId('')
  }, [pathname])

  useEffect(() => {
    const getHeadings = () => {
      // Clear existing headings first
      setHeadings([])

      // Get all headings from the current article, excluding h1
      const article = document.querySelector('article')
      if (!article) return

      // Keep track of used titles to handle duplicates
      const titleCounts: { [key: string]: number } = {}

      const elements = Array.from(article.querySelectorAll('h2, h3, h4'))
        .map((element) => {
          const text = element.textContent || ''

          // Count occurrences of this title
          titleCounts[text] = (titleCounts[text] || 0) + 1
          const count = titleCounts[text]

          // Add a suffix for duplicates
          const uniqueText = count > 1 ? `${text} ${count}` : text

          // Create a unique ID based on text content and pathname
          const id = `${pathname}-${uniqueText.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

          // Set the ID on the element
          element.id = id

          return {
            id,
            text: uniqueText,
            level: Number(element.tagName.charAt(1)),
          }
        })
        .filter((heading) => heading.text)

      setHeadings(elements)
    }

    // Wait a bit for the content to be rendered
    const timer = setTimeout(getHeadings, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    if (headings.length === 0) return

    const callback = (entries: IntersectionObserverEntry[]) => {
      headingElementsRef.current = entries.reduce((map, entry) => {
        map[entry.target.id] = entry
        return map
      }, headingElementsRef.current)

      // Find the first heading that is currently visible
      const visibleHeadings = entries.filter(
        (entry) => entry.isIntersecting && entry.intersectionRatio > 0
      )

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-20px 0px -40% 0px',
      threshold: 1.0,
    })

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className={clsx('h-full p-6', className)}>
      <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-gray-100">On this page</h3>
      <ul className="space-y-2.5">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={clsx(
              'text-sm transition-colors duration-200',
              heading.level === 2 ? 'pl-0' : heading.level === 3 ? 'pl-4' : 'pl-8',
              activeId === heading.id
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            )}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
                setActiveId(heading.id)
                onNavigate?.()
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
