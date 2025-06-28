import PageLayout from '@/layouts/PageLayout'
import { genPageMetadata } from 'app/seo'
import { FaBrain, FaNewspaper } from 'react-icons/fa'

export const metadata = genPageMetadata({ title: 'About' })

export default function AboutUsPage() {
  return (
    <>
      <PageLayout title="About">
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Welcome to <span className="text-primary font-bold">codust.dev</span> — a space where I
            share everything I learn and build in the world of AI. I believe that understanding
            comes from doing, so this platform is all about diving deep into the topics that matter
            and building fast.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
            {/* Card 1 - AI Development */}
            <div className="rounded-2xl border border-blue-800/40 bg-blue-900 p-6 text-white shadow-md">
              <FaBrain className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Build Cutting-Edge AI</h3>
              <p className="text-center">
                Explore, experiment, and master AI development through hands-on coding and projects.
              </p>
            </div>

            {/* Card 2 - AI Updates */}
            <div className="rounded-2xl border border-purple-800/40 bg-purple-900 p-6 text-white shadow-md">
              <FaNewspaper className="mx-auto mb-4 text-4xl" />
              <h3 className="text-center text-xl font-bold text-white">Stay AI-Updated</h3>
              <p className="text-center">
                Keep up with the fast-paced world of AI with carefully curated updates and insights.
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            My vision is to make AI development more accessible and developer-friendly. Join me as I
            break down complex topics, share lessons learned, and push the boundaries of what's
            possible in AI.
          </p>
        </div>
      </PageLayout>
    </>
  )
}
