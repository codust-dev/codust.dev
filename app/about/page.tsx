import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { FaLaptopCode, FaNewspaper, FaRocket } from 'react-icons/fa'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'

export const metadata = genPageMetadata({ title: 'About Us' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Welcome to <span className="text-primary font-bold">codust.dev</span> — your go-to
            platform for exploring forefront of technology.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            At Codust, we dive deep into cutting-edge advancements across multiple domains: AI,
            Robotics, and other emerging innovations shaping the future.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-3">
            {/* Card 1 - Pink Theme */}
            <div className="rounded-2xl bg-[#E73490] p-6 text-white shadow-md dark:bg-[#B82672]">
              <FaLaptopCode className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">AI & Robotics</h3>
              <p className="text-center">
                Exploring cutting-edge developments in Artificial Intelligence, Machine Learning,
                and Robotics.
              </p>
            </div>
            {/* Card 2 - Blue Theme */}
            <div className="rounded-2xl bg-[#4051B5] p-6 text-white shadow-md dark:bg-[#2D3A8C]">
              <FaNewspaper className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Newsletter</h3>
              <p className="text-center">
                Subscribe for weekly updates on the latest tech innovations, delivered straight to
                your inbox.
              </p>
            </div>
            {/* Card 3 - Cyan Theme */}
            <div className="rounded-2xl bg-[#00ADB5] p-6 text-white shadow-md dark:bg-[#007D85]">
              <FaRocket className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Projects & Tutorials</h3>
              <p className="text-center">
                Discover hands-on projects, tutorials, and insightful content to accelerate your
                learning journey.
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Whether you're a developer, researcher, or tech enthusiast, you'll find insightful
            content, projects, and discussions that aim to expand your knowledge and inspire new
            ideas.
          </p>
        </div>
      </AuthorLayout>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
