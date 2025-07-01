import { NextRequest, NextResponse } from 'next/server';

// POST /api/admin/auth - Admin authentication (Demo - No DB required)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validate required fields
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Simple hardcoded authentication for demo - no database required
    if (username === 'admin' && password === 'admin123') {
      // Mock admin user data
      const mockAdminUser = {
        _id: 'demo-admin-id',
        name: 'Demo Admin',
        email: 'admin@demo.com',
        role: 'admin'
      };

      // Generate a simple demo token (no JWT for simplicity)
      const demoToken = 'demo-admin-token-' + Date.now();

      const response = NextResponse.json({
        success: true,
        data: {
          user: {
            id: mockAdminUser._id,
            name: mockAdminUser.name,
            email: mockAdminUser.email,
            role: mockAdminUser.role
          },
          token: demoToken
        },
        message: 'Authentication successful'
      });

      // Set a simple cookie for demo
      response.cookies.set('admin-token', demoToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      });

      return response;
    }

    // Invalid credentials
    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    );

  } catch (error) {
    console.error('Error during authentication:', error);
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/auth - Admin logout (Demo)
export async function DELETE(request: NextRequest) {
  try {
    const response = NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    });

    // Clear the authentication cookie
    response.cookies.set('admin-token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0
    });

    return response;

  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json(
      { success: false, error: 'Logout failed' },
      { status: 500 }
    );
  }
}
