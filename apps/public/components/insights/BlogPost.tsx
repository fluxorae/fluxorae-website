'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { format } from 'date-fns'
import Link from 'next/link'
// import { PortableText } from '@portabletext/react'

interface BlogPostProps {
  post: {
    title: string
    excerpt: string
    publishedAt: string
    author?: string
    readingTime?: string
    category?: string
    image?: string
    content?: any
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="section-padding bg-secondary-light">
      <div className="container-custom max-w-4xl">
        <Link
          href="/insights"
          className="inline-flex items-center text-accent hover:underline mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
          Back to Insights
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {post.category && (
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
              {post.category}
            </span>
          )}

          <h1 className="heading-1 mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center">
              <Calendar className="mr-2" size={18} />
              {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
            </span>
            <span className="flex items-center">
              <Clock className="mr-2" size={18} />
              {post.readingTime || '5'} min read
            </span>
            {post.author && (
              <span className="flex items-center">
                <User className="mr-2" size={18} />
                {post.author}
              </span>
            )}
          </div>

          {post.image && (
            <div className="relative h-96 bg-gradient-to-br from-primary to-primary-dark rounded-xl overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-md">
            {post.content ? (
              <div className="text-lg text-gray-700 leading-relaxed">
                {/* Content will be rendered here when Sanity is configured */}
                {typeof post.content === 'string' ? post.content : post.excerpt}
              </div>
            ) : (
              <p className="text-lg text-gray-700 leading-relaxed">{post.excerpt}</p>
            )}
          </div>
        </motion.div>
      </div>
    </article>
  )
}
