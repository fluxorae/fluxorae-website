const token = jwt.sign(
      { email: ADMIN_EMAIL, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    return NextResponse.json({
      message: 'Login successful',
      token,
      user: {
        email: ADMIN_EMAIL,
        role: 'admin'
      }
    })
=======
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
