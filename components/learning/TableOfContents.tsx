'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface TableOfContentsProps {
  className?: string
}

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents({ className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [headings, setHeadings] = useState<Heading[]>([])
  const headingElementsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({})

  useEffect(() => {
    const getHeadings = () => {
      const elements = Array.from(document.querySelectorAll('article h1, article h2, article h3, article h4'))
        .map((element) => ({
          id: element.id || '',
          text: element.textContent || '',
          level: Number(element.tagName.charAt(1)),
        }))
        .filter((heading) => heading.text)
        .map((heading) => {
          // If no id exists, create one from the text
          if (!heading.id) {
            heading.id = heading.text
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')
            
            // Find the element by its text content and set the ID
            const elements = Array.from(document.querySelectorAll(`h${heading.level}`))
            const element = elements.find(el => el.textContent === heading.text)
            if (element) {
              element.id = heading.id
            }
          }
          return heading
        })
      setHeadings(elements)
    }

    getHeadings()

    // Re-run when content changes
    const observer = new MutationObserver(getHeadings)
    const article = document.querySelector('article')
    if (article) {
      observer.observe(article, {
        childList: true,
        subtree: true,
      })
    }

    return () => observer.disconnect()
  }, [])

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
    <nav className={clsx('sticky top-16 h-[calc(100vh-4rem)] p-6', className)}>
      <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
        On this page
      </h3>
      <ul className="space-y-2.5">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={clsx(
              'text-sm transition-colors duration-200',
              heading.level === 1 ? 'pl-0' : 
              heading.level === 2 ? 'pl-4' : 
              heading.level === 3 ? 'pl-8' : 'pl-12',
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