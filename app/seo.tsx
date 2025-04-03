import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  const ogImage = image ? image : siteMetadata.socialBanner
  const ogTitle = title.includes(siteMetadata.title) ? title : `${title} | ${siteMetadata.title}`
  const ogDescription = description || siteMetadata.description

  return {
    title: ogTitle,
    description: ogDescription,
    metadataBase: new URL(siteMetadata.siteUrl),
    alternates: {
      canonical: './',
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: './',
      siteName: siteMetadata.title,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
      locale: siteMetadata.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
      creator: siteMetadata.x?.replace('https://x.com/', '@'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...rest,
  }
}
