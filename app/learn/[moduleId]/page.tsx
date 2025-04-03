import { notFound } from 'next/navigation'
import { allCoreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { courseModules } from '@/data/courseData'
import { allModuleStarters } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

interface ModulePageProps {
  params: {
    moduleId: string
  }
}

export async function generateMetadata({ params }: ModulePageProps) {
  const module = courseModules.find((m) => m.link === `/learn/${params.moduleId}`)
  if (!module) return {}

  return genPageMetadata({
    title: module.title,
    description: module.description,
  })
}

export default function ModulePage({ params }: ModulePageProps) {
  const module = courseModules.find((m) => m.link === `/learn/${params.moduleId}`)
  
  if (!module) {
    notFound()
  }

  const starterContent = allModuleStarters.find(
    (starter) => starter.moduleId === params.moduleId
  )

  if (!starterContent) {
    notFound()
  }

  return (
    <article className="prose max-w-none dark:prose-invert">
      <MDXLayoutRenderer code={starterContent.body.code} />
    </article>
  )
} 