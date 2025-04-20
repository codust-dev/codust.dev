import { notFound } from 'next/navigation'
import { allCoreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { courseModules } from '@/data/courseData'
import { allModuleStarters } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

type ModulePageProps = {
  params: Promise<{
    moduleId: string
  }>
}

export async function generateMetadata(props: ModulePageProps) {
  const params = await props.params
  const courseModule = courseModules.find((m) => m.link === `/explore/${params.moduleId}`)
  if (!courseModule) return {}

  return genPageMetadata({
    title: courseModule.title,
    description: courseModule.description,
  })
}

export default async function ModulePage(props: ModulePageProps) {
  const params = await props.params
  const courseModule = courseModules.find((m) => m.link === `/explore/${params.moduleId}`)

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
