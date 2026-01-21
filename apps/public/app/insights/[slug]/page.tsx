import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPost from '@/components/insights/BlogPost'
import { getBlogPost, getBlogSlugs } from '@/lib/sanity'

export async function generateStaticParams() {
  try {
    const slugs = await getBlogSlugs()
    if (!slugs || slugs.length === 0) {
      // Return at least one mock slug to satisfy static export requirements if Sanity is empty
      return [{ slug: 'coming-soon' }]
    }
    return slugs.map((slug) => ({
      slug: slug.slug,
    }))
  } catch (error) {
    return [{ slug: 'coming-soon' }]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await getBlogPost(params.slug)

    if (!post) {
      return {
        title: 'Post Not Found',
      }
    }

    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.image ? [post.image] : [],
        type: 'article',
        publishedTime: post.publishedAt,
      },
    }
  } catch (error) {
    return {
      title: 'Post Not Found',
    }
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getBlogPost(params.slug)

    if (!post) {
      notFound()
    }

    return <BlogPost post={post} />
  } catch (error) {
    notFound()
  }
}
