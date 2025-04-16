import { allLearningModules } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

type PageProps = {
  params: Promise<{
    moduleId: string
    chapterId: string
  }>
}

export default async function ChapterPage(props: PageProps) {
  const params = await props.params
  const { moduleId, chapterId } = params
  const chapter = allLearningModules.find(
    (module) => module.module === moduleId && module.chapter === chapterId
  )

  if (!chapter) {
    notFound()
  }

  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
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
