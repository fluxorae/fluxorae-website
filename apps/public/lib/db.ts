import 'server-only'

import { awsCredentialsProvider } from '@vercel/functions/oidc'
import { attachDatabasePool } from '@vercel/functions'
import { Signer } from '@aws-sdk/rds-signer'
import { ClientBase, Pool, QueryResult, QueryResultRow } from 'pg'

const requiredEnv = ['PGHOST', 'PGPORT', 'PGUSER', 'AWS_REGION', 'AWS_ROLE_ARN'] as const
const hasDbEnv = requiredEnv.every((k) => process.env[k])

let pool: Pool | null = null

if (hasDbEnv) {
  const signer = new Signer({
    hostname: process.env.PGHOST!,
    port: Number(process.env.PGPORT),
    username: process.env.PGUSER!,
    region: process.env.AWS_REGION!,
    credentials: awsCredentialsProvider({
      roleArn: process.env.AWS_ROLE_ARN!,
      clientConfig: { region: process.env.AWS_REGION },
    }),
  })

  pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE || 'postgres',
    // The auth token can be cached for ~15 minutes; pg will call when needed.
    password: () => signer.getAuthToken(),
    port: Number(process.env.PGPORT),
    // Set to true with proper CA bundle in production if required.
    ssl: { rejectUnauthorized: false },
    max: 20,
  })

  attachDatabasePool(pool)
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  sql: string,
  args: unknown[] = [],
): Promise<QueryResult<T>> {
  if (!pool) {
    throw new Error('Database is not configured; required IAM/Aurora env vars are missing.')
  }
  return pool.query<T>(sql, args)
}

export async function withConnection<T>(fn: (client: ClientBase) => Promise<T>): Promise<T> {
  if (!pool) {
    throw new Error('Database is not configured; required IAM/Aurora env vars are missing.')
  }
  const client = await pool.connect()
  try {
    return await fn(client)
  } finally {
    client.release()
  }
}
