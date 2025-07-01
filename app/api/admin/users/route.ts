import { NextRequest, NextResponse } from 'next/server';

// Mock users data
let mockUsers = [
  {
    _id: 'user-1',
    name: 'John Doe',
    email: 'john@sliit.lk',
    role: 'student',
    createdAt: new Date().toISOString()
  },
  {
    _id: 'user-2',
    name: 'Jane Smith',
    email: 'jane@sliit.lk',
    role: 'admin',
    createdAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    _id: 'user-3',
    name: 'Mike Johnson',
    email: 'mike@sliit.lk',
    role: 'club_admin',
    createdAt: new Date(Date.now() - 172800000).toISOString()
  }
];

// GET /api/admin/users - Get all users (Demo)
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: { users: mockUsers }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
