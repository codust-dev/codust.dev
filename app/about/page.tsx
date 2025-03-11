import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { FaLaptopCode, FaNewspaper, FaRocket } from 'react-icons/fa'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div className="space-y-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Welcome to <span className="font-bold text-primary">codust.dev</span> — your go-to platform for exploring forefront of technology. 
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At Codust, I dive deep into cutting-edge advancements across multiple domains: AI, Robotics, and other emerging innovations shaping the future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">  
            {/* Card 1 - Pink Theme */}
            <div className="bg-[#E73490] dark:bg-[#B82672] rounded-2xl p-6 text-white shadow-md">
              <FaLaptopCode className="text-4xl mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold text-center">
                AI & Robotics
              </h3>
              <p className="text-center">
                Exploring cutting-edge developments in Artificial Intelligence, Machine Learning, and Robotics.
              </p>
            </div>
            {/* Card 2 - Blue Theme */}
            <div className="bg-[#4051B5] dark:bg-[#2D3A8C] rounded-2xl p-6 text-white shadow-md">
              <FaNewspaper className="text-4xl mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold text-center">
                Newsletter
              </h3>
              <p className="text-center">
              Subscribe to stay updated on cutting-edge tech news, delivered weekly to your inbox.
              </p>
            </div>
            {/* Card 3 - Cyan Theme */}
            <div className="bg-[#00ADB5] dark:bg-[#007D85] rounded-2xl p-6 text-white shadow-md">
              <FaRocket className="text-4xl mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold text-center">
                Projects & Tutorials
              </h3>
              <p className="text-center">
                Discover hands-on projects, tutorials, and insightful content to accelerate your learning journey.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Whether you're a developer, researcher, or tech enthusiast, you'll find insightful content, projects, and discussions that aim to expand your knowledge and inspire new ideas.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Stay connected through my newsletter for weekly updates on the latest breakthroughs in technology!
          </p>
        </div>
      </AuthorLayout>
    </>
  )
}
