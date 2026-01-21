import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Only create client if projectId exists and is valid (a-z, 0-9, dashes only)
const isValidProjectId = projectId && /^[a-z0-9-]+$/.test(projectId)

export const client = isValidProjectId
  ? createClient({
    projectId: projectId!,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: process.env.NODE_ENV === 'production',
  })
  : null

// Check if Sanity is properly configured
export const isSanityConfigured = client !== null

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  author?: string
  readingTime?: string
  category?: string
  image?: string
  content?: any
}

export interface BlogPostWithSlug extends Omit<BlogPost, 'slug'> {
  slug: string
}

export async function getBlogPosts(): Promise<BlogPostWithSlug[]> {
  if (!client) {
    return []
  }

  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author,
    "readingTime": readingTime,
    category,
    "image": mainImage.asset->url
  }`

  try {
    const posts = await client.fetch<BlogPost[]>(query)
    return posts.map((post) => {
      const { slug, ...rest } = post
      return {
        ...rest,
        slug: slug.current,
      }
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPostWithSlug | null> {
  if (!client) {
    return null
  }

  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author,
    "readingTime": readingTime,
    category,
    "image": mainImage.asset->url,
    content
  }`

  try {
    const post = await client.fetch<BlogPost>(query, { slug })
    if (!post) return null

    const { slug: postSlug, ...rest } = post
    return {
      ...rest,
      slug: postSlug.current,
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getBlogSlugs(): Promise<Array<{ slug: string }>> {
  if (!client) {
    return []
  }

  const query = `*[_type == "blogPost"] {
    "slug": slug.current
  }`

  try {
    return await client.fetch<Array<{ slug: string }>>(query)
  } catch (error) {
    console.error('Error fetching blog slugs:', error)
    return []
  }
}
