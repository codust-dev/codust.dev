import { notFound } from 'next/navigation'
import { allCoreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { Metadata } from 'next'
import { courseModules } from '@/data/courseData'

interface ChapterPageProps {
  params: {
    moduleId: string
    slug: string[]
  }
}

async function getChapterData(moduleId: string, slug: string[]) {
  // This will be replaced with actual contentlayer data
  // For now, return dummy data
  return {
    title: 'Introduction to Machine Learning',
    body: {
      code: '# Introduction\n\nWelcome to the machine learning course...',
    },
  }
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const chapterData = await getChapterData(params.moduleId, params.slug)
  if (!chapterData) return {}

  return genPageMetadata({
    title: chapterData.title,
    description: `Learn about ${chapterData.title} in our comprehensive guide.`,
  })
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const chapterData = await getChapterData(params.moduleId, params.slug)

  if (!chapterData) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{chapterData.title}</h1>
      <MDXLayoutRenderer code={chapterData.body.code} />
    </article>
  )
}
