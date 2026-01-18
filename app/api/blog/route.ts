import { NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/sanity'

export async function GET() {
  try {
    const posts = await getBlogPosts()
    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ posts: [] }, { status: 500 })
  }
}
