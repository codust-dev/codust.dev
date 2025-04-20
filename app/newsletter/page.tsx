import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import PageLayout from '@/layouts/PageLayout'
import { FaNewspaper, FaArchive } from 'react-icons/fa'
import ArchiveButton from '@/components/ArchiveButton'

export const metadata = genPageMetadata({ title: 'Newsletter' })

export default function NewsletterPage() {
  return (
    <>
      <PageLayout title="Newsletter">
        <div className="mx-auto flex max-w-3xl flex-col items-center space-y-8 text-center">
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Stay updated with the latest insights in artificial intelligence, machine learning, and AI-driven technologies through our weekly newsletter.
          </p>

          <div className="w-full space-y-8 pt-8">
            {/* Subscribe Section */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="flex flex-col items-center p-8">
                <div className="mb-3 rounded-full bg-[#4051B5] p-4">
                  <FaNewspaper className="text-4xl text-white" />
                </div>
                <h3 className="mb-6 text-2xl font-bold">Subscribe Now</h3>
                <div className="w-full max-w-md">
                  <NewsletterForm />
                </div>
              </div>
            </div>

            {/* Archive Section */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="flex flex-col items-center p-8">
                <div className="mb-3 rounded-full bg-[#4051B5] p-4">
                  <FaArchive className="text-4xl text-white" />
                </div>
                <h3 className="mb-6 text-2xl font-bold">Newsletter Archive</h3>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  Browse through our previous newsletters and catch up on past AI-focused content.
                </p>
                <ArchiveButton />
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
