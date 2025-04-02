import { notFound } from 'next/navigation'
import { allCoreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { courseModules } from '@/data/courseData'

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

  return (
    <article className="prose max-w-none dark:prose-invert">
      <h1>{module.title}</h1>
      <p className="lead">{module.description}</p>
      
      <h2>What you'll learn</h2>
      <ul>
        <li>Understanding core concepts and fundamentals</li>
        <li>Building practical projects and applications</li>
        <li>Best practices and advanced techniques</li>
      </ul>

      <h2>Prerequisites</h2>
      <p>
        Before starting this module, you should have:
      </p>
      <ul>
        <li>Basic understanding of programming concepts</li>
        <li>Familiarity with JavaScript and React</li>
        <li>A code editor and development environment set up</li>
      </ul>

      <h2>How to use this guide</h2>
      <p>
        This guide is structured in a way that builds your knowledge progressively. Each chapter
        builds upon the concepts learned in previous chapters. We recommend following the chapters
        in order, but feel free to jump to specific topics if you're already familiar with the basics.
      </p>
      
      <div className="mt-8">
        <a
          href={`/learn/${params.moduleId}/introduction`}
          className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500"
        >
          Start Learning →
        </a>
      </div>
    </article>
  )
} 