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
        <div className="flex flex-col items-center max-w-3xl mx-auto space-y-8 text-center">
          <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Stay updated with the latest insights in software development, AI, and emerging technologies 
            through our weekly newsletter.
          </p>

          <div className="w-full space-y-8 pt-8">
            {/* Subscribe Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col items-center p-8">
                <div className="bg-[#4051B5] rounded-full p-4 mb-3">
                  <FaNewspaper className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Subscribe Now</h3>
                <div className="w-full max-w-md">
                  <NewsletterForm />
                </div>
              </div>
            </div>
            
            {/* Archive Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col items-center p-8">
                <div className="bg-[#4051B5] rounded-full p-4 mb-3">
                  <FaArchive className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Newsletter Archive</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Browse through our previous newsletters and catch up on past content.
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
