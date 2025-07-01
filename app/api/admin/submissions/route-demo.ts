import { NextRequest, NextResponse } from 'next/server';

// Mock submissions data
let mockSubmissions = [
  {
    _id: 'sub-1',
    type: 'Contact Form',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    message: 'I would like to know more about CS programs',
    status: 'Unread',
    createdAt: new Date().toISOString()
  },
  {
    _id: 'sub-2',
    type: 'Event Registration',
    name: 'Bob Smith',
    email: 'bob@example.com',
    message: 'Registering for React Workshop',
    status: 'Processed',
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
];

// GET /api/admin/submissions - Get all submissions (Demo)
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: { submissions: mockSubmissions }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
