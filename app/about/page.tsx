import PageLayout from '@/layouts/PageLayout'
import { genPageMetadata } from 'app/seo'
import { FaBrain, FaNewspaper, FaRocket } from 'react-icons/fa'

export const metadata = genPageMetadata({ title: 'About' })

export default function AboutUsPage() {
  return (
    <>
      <PageLayout title="About Us">
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Welcome to <span className="text-primary font-bold">codust.dev</span> — where we focus
            on cutting-edge AI development and help you stay ahead with the latest tech trends.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
            {/* Card 1 - AI Development */}
            <div className="rounded-2xl bg-[#E73490] p-6 text-white shadow-md dark:bg-[#B82672]">
              <FaBrain className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Build Cutting-Edge AI</h3>
              <p className="text-center">
                Master advanced AI development. Build production-ready machine learning models, and
                deploy scalable AI solutions with practical, real-world guidance.
              </p>
            </div>

            {/* Card 2 - Tech Updates */}
            <div className="rounded-2xl bg-[#4051B5] p-6 text-white shadow-md dark:bg-[#2D3A8C]">
              <FaNewspaper className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Stay Tech-Updated</h3>
              <p className="text-center">
                Never miss important tech trends with our curated weekly newsletter. Get insights on
                emerging technologies, development best practices, and industry innovations that
                matter.
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Join us to transform your AI development journey!
          </p>
        </div>
      </PageLayout>
    </>
  )
}
