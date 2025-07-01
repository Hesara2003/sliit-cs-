import { NextRequest, NextResponse } from 'next/server';

// Mock blog posts data
let mockBlogPosts = [
  {
    _id: 'blog-1',
    title: 'Getting Started with React',
    content: 'Learn the basics of React development...',
    author: { name: 'John Doe', email: 'john@sliit.lk' },
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: 'blog-2', 
    title: 'Advanced JavaScript Concepts',
    content: 'Deep dive into closures, promises, and async/await...',
    author: { name: 'Jane Smith', email: 'jane@sliit.lk' },
    status: 'draft',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    _id: 'blog-3',
    title: 'Building Modern Web Apps',
    content: 'Best practices for creating scalable web applications...',
    author: { name: 'Mike Johnson', email: 'mike@sliit.lk' },
    status: 'published',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString()
  }
];

// GET /api/admin/blog - Get all blog posts (Demo with mock data)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    
    let filteredPosts = [...mockBlogPosts];
    
    // Apply status filter
    if (status) {
      filteredPosts = filteredPosts.filter(post => post.status === status);
    }
    
    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
    return NextResponse.json({
      success: true,
      data: {
        posts: paginatedPosts,
        pagination: {
          page,
          limit,
          total: filteredPosts.length,
          pages: Math.ceil(filteredPosts.length / limit)
        }
      }
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST /api/admin/blog - Create new blog post (Demo)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, author, status = 'draft' } = body;

    // Validate required fields
    if (!title || !content || !author) {
      return NextResponse.json(
        { success: false, error: 'Title, content, and author are required' },
        { status: 400 }
      );
    }

    // Create new mock blog post
    const newPost = {
      _id: 'blog-' + Date.now(),
      title,
      content,
      author: { name: author, email: author.toLowerCase().replace(' ', '.') + '@sliit.lk' },
      status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Add to mock data
    mockBlogPosts.unshift(newPost);

    return NextResponse.json({
      success: true,
      data: newPost,
      message: 'Blog post created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
