import { NextRequest, NextResponse } from 'next/server';

// Mock news data
let mockNews = [
  {
    _id: 'news-1',
    title: 'Welcome to SLIIT CS Hub!',
    priority: 'High',
    content: 'We are excited to launch our new platform',
    author: 'Admin Team',
    createdAt: new Date().toISOString()
  },
  {
    _id: 'news-2',
    title: 'New Semester Registration Open',
    priority: 'Medium', 
    content: 'Register for the upcoming semester',
    author: 'Academic Office',
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
];

// GET /api/admin/news - Get all news (Demo)
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: { news: mockNews }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}

// POST /api/admin/news - Create news (Demo)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, priority = 'Medium', content } = body;

    const newNews = {
      _id: 'news-' + Date.now(),
      title,
      priority,
      content: content || '',
      author: 'Admin',
      createdAt: new Date().toISOString()
    };

    mockNews.unshift(newNews);

    return NextResponse.json({
      success: true,
      data: newNews,
      message: 'News created successfully'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create news' },
      { status: 500 }
    );
  }
}
