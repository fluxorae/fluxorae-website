import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@fluxorae.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Shivam@1122'
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: NextRequest) {
  const { id, password } = await request.json()

  if (id !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  }

  // Generate JWT token
  const token = jwt.sign(
    { email: ADMIN_EMAIL, role: 'admin' },
    JWT_SECRET,
    { expiresIn: '24h' }
  )

  // Set HttpOnly cookie
  const response = NextResponse.json({
    message: 'Login successful',
    user: {
      email: ADMIN_EMAIL,
      role: 'admin'
    }
  })

  response.cookies.set('admin-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60, // 24 hours
    path: '/',
  })

  return response
}
