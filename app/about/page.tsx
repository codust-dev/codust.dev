import PageLayout from '@/layouts/PageLayout'
import { genPageMetadata } from 'app/seo'
import { FaLaptopCode, FaNewspaper, FaRocket } from 'react-icons/fa'

export const metadata = genPageMetadata({ title: 'About Us' })

export default function AboutUsPage() {
  return (
    <>
      <PageLayout title="About Us">
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Welcome to <span className="text-primary font-bold">codust.dev</span> — where we make
            developing cutting-edge technology accessible and help you stay ahead with the latest
            tech trends.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Our mission is two-fold: empower developers to build modern technologies through
            practical learning, and keep you informed about the rapidly evolving tech landscape.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
            {/* Card 1 - Technology Development */}
            <div className="rounded-2xl bg-[#E73490] p-6 text-white shadow-md dark:bg-[#B82672]">
              <FaLaptopCode className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Build Cutting-Edge Tech</h3>
              <p className="text-center">
                Master modern development through hands-on projects. Learn to build AI-powered
                applications, scalable cloud solutions, and next-gen web technologies with
                practical, real-world focused guidance.
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
            Join us to transform your development journey.!
          </p>
        </div>
      </PageLayout>
    </>
  )
}
