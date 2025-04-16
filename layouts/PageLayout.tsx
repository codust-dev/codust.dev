import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string
  classname?: string
  centerContent?: boolean
}

export default function PageLayout({
  children,
  title,
  classname = '',
  centerContent = true,
}: Props) {
  return (
    <>
      <div className={`divide-y divide-gray-200 dark:divide-gray-700 ${classname}`}>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            {title}
          </h1>
        </div>
        <div className={`pt-8 pb-8 ${centerContent ? 'flex justify-center' : ''}`}>
          <div
            className={`prose dark:prose-invert max-w-3xl ${centerContent ? 'text-center' : ''}`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
