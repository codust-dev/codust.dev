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
  const courseModule = courseModules.find((m) => m.link === `/learn/${params.moduleId}`)
  if (!courseModule) return {}

  return genPageMetadata({
    title: courseModule.title,
    description: courseModule.description,
  })
}

export default function ModulePage({ params }: ModulePageProps) {
  const courseModule = courseModules.find((m) => m.link === `/learn/${params.moduleId}`)

  if (!courseModule) {
    notFound()
  }

  const starterContent = allModuleStarters.find((starter) => starter.moduleId === params.moduleId)

  if (!starterContent) {
    notFound()
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <MDXLayoutRenderer code={starterContent.body.code} />
    </article>
  )
}
