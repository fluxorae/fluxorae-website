import { query } from '@/lib/db'

type CommentRow = { id: number; comment: string }

export const revalidate = 0

export default async function CommentsPage() {
  let comments: CommentRow[] = []
  let error: string | null = null

  try {
    const { rows } = await query<CommentRow>(
      'select id, comment from comments order by id desc limit 50',
      [],
    )
    comments = rows
  } catch (err) {
    error = 'Unable to load comments (database connection failed).'
    console.error('comments page query error', err)
  }

  return (
    <main className="container-custom py-10">
      <h1 className="heading-2 mb-4">Next.js + Aurora PostgreSQL</h1>
      <p className="text-secondary/80 mb-6">
        Data is fetched server-side using Vercel OIDC + RDS IAM auth (no static secrets in code).
      </p>

      {error ? (
        <div className="panel border border-amber-400/40 text-amber-200">{error}</div>
      ) : comments.length === 0 ? (
        <div className="panel">No comments yet. Insert a row into the &quot;comments&quot; table to see it here.</div>
      ) : (
        <div className="space-y-3">
          {comments.map((comment) => (
            <div key={comment.id} className="panel">
              <p className="text-white">{comment.comment}</p>
              <div className="text-sm text-secondary/70 mt-1">#{comment.id}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
