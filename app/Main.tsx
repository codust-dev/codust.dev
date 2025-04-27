import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import nowData from '@/data/nowData'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { FaRocket, FaArrowRight } from 'react-icons/fa'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section with Background */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90" />
        <div className="relative px-6 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Develop Cutting-Edge Technology
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-200">
              Understand the way it truly matters and develop fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/explore"
                className="flex items-center rounded-md bg-white px-8 py-3 text-lg font-medium text-blue-900 hover:bg-gray-100 transition-all duration-200"
              >
                Get Started <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/about"
                className="flex items-center rounded-md border border-white px-8 py-3 text-lg font-medium text-white hover:bg-white/10 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Now Section */}
      <div className="mb-16">
        <div className="py-6">
          <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 shadow-md dark:from-gray-800 dark:to-gray-900 dark:shadow-gray-800/30">
            <div className="flex items-start">
              <div className="mr-4 flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Currently working on</h3>
                <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                  {nowData.currentWork}
                </p>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <em>Last updated: {formatDate(nowData.lastUpdated, siteMetadata.locale)}</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest Blogs
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center transition-colors duration-200"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more <FaArrowRight className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center transition-colors duration-200"
            aria-label="All posts"
          >
            All Posts <FaArrowRight className="ml-1" />
          </Link>
        </div>
      )}

      {siteMetadata.newsletter?.provider && (
        <div className="mt-16 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 shadow-md dark:from-gray-800 dark:to-gray-900 dark:shadow-gray-800/30">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Stay Updated</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Subscribe to our newsletter for the latest updates and insights.</p>
          </div>
          <div className="flex items-center justify-center">
            <NewsletterForm />
          </div>
        </div>
      )}
    </>
  )
}
