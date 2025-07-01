import { NextRequest, NextResponse } from 'next/server';

// Mock blog posts data (shared with main route)
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

// GET /api/admin/blog/[id] - Get specific blog post (Demo)
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    const post = mockBlogPosts.find(post => post._id === id);
    
    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: post
    });

  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/blog/[id] - Update blog post (Demo)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { title, content, author, status } = body;

    const postIndex = mockBlogPosts.findIndex(post => post._id === id);
    
    if (postIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Update the post
    const updatedPost = {
      ...mockBlogPosts[postIndex],
      title: title || mockBlogPosts[postIndex].title,
      content: content || mockBlogPosts[postIndex].content,
      author: author ? { name: author, email: author.toLowerCase().replace(' ', '.') + '@sliit.lk' } : mockBlogPosts[postIndex].author,
      status: status || mockBlogPosts[postIndex].status,
      updatedAt: new Date().toISOString()
    };

    mockBlogPosts[postIndex] = updatedPost;

    return NextResponse.json({
      success: true,
      data: updatedPost,
      message: 'Blog post updated successfully'
    });

  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/blog/[id] - Delete blog post (Demo)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const postIndex = mockBlogPosts.findIndex(post => post._id === id);
    
    if (postIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Remove the post
    mockBlogPosts.splice(postIndex, 1);

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
