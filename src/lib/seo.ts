import { Metadata } from 'next'
import { BASE_URL, OG_IMAGE } from '@/lib/constants'

const BRAND_NAME = 'TIME KAMU'
const FOUNDER_NAME = 'Indrajit Bhunia'
const CREATOR_NAME = 'INDRA'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  keywords?: string[]
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

/**
 * Generate comprehensive SEO metadata
 * for TIME KAMU official website.
 */
export function generateMetadata({
  title,
  description,
  image = OG_IMAGE,
  url,
  keywords = [],
  type = 'website',
  publishedTime,
  modifiedTime,
  author = FOUNDER_NAME,
}: SEOProps): Metadata {
  const baseUrl = BASE_URL
  const fullUrl = url
    ? `${baseUrl}${url}`
    : baseUrl

  const fullImage = image.startsWith('http')
    ? image
    : `${baseUrl}${image}`

  return {
    title,
    description,
    keywords: mergeKeywords(keywords),

    authors: [{ name: author }],
    creator: CREATOR_NAME,
    publisher: BRAND_NAME,

    openGraph: {
      type,
      locale: 'en_IN',
      url: fullUrl,
      title,
      description,
      siteName: BRAND_NAME,

      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} - ${title}`,
        },
      ],

      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
    },

    alternates: {
      canonical: fullUrl,
    },
  }
}

/**
 * Generate article metadata
 * for TIME KAMU creative content.
 */
export function generateArticleMetadata({
  title,
  description,
  image,
  url,
  keywords = [],
  publishedTime,
  modifiedTime,
  author = FOUNDER_NAME,
}: SEOProps): Metadata {
  return generateMetadata({
    title,
    description,
    image,
    url,
    keywords,
    type: 'article',
    publishedTime,
    modifiedTime,
    author,
  })
}

/**
 * TIME KAMU common SEO keywords.
 */
export const commonKeywords = [
  'TIME KAMU',
  'Indrajit Bhunia',
  'INDRA',
  'TIME KAMU Official',
  'Indian YouTuber',
  'Video Editing',
  'Graphic Design',
  '2D Animation',
  'Digital Creator',
  'Creative Portfolio',
  'Visual Storytelling',
  'YouTube Creator',
  'Bengali Video Editor',
  'Tamluk',
  'West Bengal',
]

/**
 * Merge common keywords with
 * page-specific keywords.
 */
export function mergeKeywords(
  pageKeywords: string[]
): string[] {
  return [
    ...new Set([
      ...commonKeywords,
      ...pageKeywords,
    ]),
  ]
}
