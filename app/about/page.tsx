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
            Welcome to <span className="text-primary font-bold">codust.dev</span> — your comprehensive 
            learning platform for mastering modern software development and emerging technologies.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            At Codust, we focus on delivering practical, hands-on education in software development, 
            AI, robotics, and other cutting-edge technologies that are shaping our future.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
            {/* Card 1 - Practical Courses */}
            <div className="rounded-2xl bg-[#E73490] p-6 text-white shadow-md dark:bg-[#B82672]">
              <FaLaptopCode className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Practical Courses</h3>
              <p className="text-center">
                Deep-dive into real-world focused courses covering software development, AI, and emerging 
                technologies. Learn through practical applications and industry-relevant projects.
              </p>
            </div>
            
            {/* Card 2 - Tech Newsletter */}
            <div className="rounded-2xl bg-[#4051B5] p-6 text-white shadow-md dark:bg-[#2D3A8C]">
              <FaNewspaper className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Weekly Tech Updates</h3>
              <p className="text-center">
                Stay ahead with our curated weekly newsletter covering the latest developments in 
                software, AI, and emerging technologies. Get insights that matter to your growth.
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Whether you're a beginner starting your journey or an experienced professional looking 
            to expand your skillset, our practical courses and weekly updates will help you stay 
            competitive in today's rapidly evolving tech landscape.
          </p>
        </div>
      </PageLayout>
    </>
  )
}
