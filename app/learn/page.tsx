import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { courseModules } from '@/data/courseData'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'Learn' })

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
      <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Learning Paths
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courseModules.map((module) => (
          <Link
            key={module.title}
            href={module.link}
            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
          >
            {/* Course Thumbnail */}
            <div className="aspect-video w-full">
              <img
                src={module.thumbnail}
                alt={module.title}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Course Info */}
            <div className="p-6">
              <module.icon className="mb-4 text-3xl text-primary-600 dark:text-primary-400" />
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                {module.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{module.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
