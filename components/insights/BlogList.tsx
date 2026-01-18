'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readingTime?: string
  category?: string
  image?: string
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog')
        const data = await response.json()
        setPosts(data.posts || [])
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section className="section-padding bg-secondary-light">
        <div className="container-custom">
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">Loading posts...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-secondary-light">
      <div className="container-custom">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="heading-2 mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600">
              Our insights and blog posts will be available here soon.
            </p>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {post.image && (
                    <div className="relative h-48 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1" size={14} />
                        {post.readingTime || '5'} min read
                      </span>
                    </div>
                    <h3 className="heading-3 text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    {post.category && (
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">
                        {post.category}
                      </span>
                    )}
                    <Link
                      href={`/insights/${post.slug}`}
                      className="text-accent font-semibold hover:underline inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
