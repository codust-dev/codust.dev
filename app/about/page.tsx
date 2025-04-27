import PageLayout from '@/layouts/PageLayout'
import { genPageMetadata } from 'app/seo'
import { FaBrain, FaNewspaper, FaRocket } from 'react-icons/fa'

export const metadata = genPageMetadata({ title: 'About' })

export default function AboutUsPage() {
  return (
    <>
      <PageLayout title="About">
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Welcome to <span className="text-primary font-bold">codust.dev</span> — a platform for those who believe that true understanding comes not from consuming passively, but from creating actively. We're building the future by writing every line of code and solving every problem ourselves.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
            {/* Card 1 - AI Development */}
            <div className="rounded-2xl bg-[#E73490] p-6 text-white shadow-md dark:bg-[#B82672]">
              <FaBrain className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Build Cutting-Edge AI</h3>
              <p className="text-center">
                Master advanced AI development through hands-on creation.
              </p>
            </div>

            {/* Card 2 - Tech Updates */}
            <div className="rounded-2xl bg-[#4051B5] p-6 text-white shadow-md dark:bg-[#2D3A8C]">
              <FaNewspaper className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Stay Tech-Updated</h3>
              <p className="text-center">
                Never miss important tech trends with our curated weekly newsletter. 
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Join us to transform your development journey through active creation and building!
          </p>
        </div>
      </PageLayout>
    </>
  )
}
