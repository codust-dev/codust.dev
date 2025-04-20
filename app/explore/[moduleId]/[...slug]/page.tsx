import { notFound } from 'next/navigation'
import { courseModules } from '@/data/courseData'

// Define the correct type for Next.js page props
type PageProps = {
  params: Promise<{
    moduleId: string
    slug: string[]
  }>
}

// Make the component async to handle Promise-based params
export default async function Page(props: PageProps) {
  // Await the params since they're a Promise
  const params = await props.params
  const { moduleId, slug } = params

  // Find the module
  const courseModule = courseModules.find((m) => m.link === `/explore/${moduleId}`)

  if (!courseModule) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">{courseModule.title}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Welcome to the {courseModule.title} course!</p>
        <p>This is module {moduleId}</p>
        <p>Current path: {slug.join('/')}</p>
      </div>
    </div>
  )
}
