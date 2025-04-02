import { allLearningModules } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

interface PageProps {
  params: {
    moduleId: string
    chapterId: string
  }
}

export default function ChapterPage({ params }: PageProps) {
  const { moduleId, chapterId } = params
  const chapter = allLearningModules.find(
    (module) => module.module === moduleId && module.chapter === chapterId
  )

  if (!chapter) {
    notFound()
  }

  return (
    <article className="prose prose-gray max-w-none dark:prose-invert">
      <div className="space-y-1 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {chapter.title}
        </h1>
        {chapter.summary && (
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{chapter.summary}</p>
        )}
      </div>
      <MDXLayoutRenderer code={chapter.body.code} />
    </article>
  )
} 