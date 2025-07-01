import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import BlogPost from '@/models/BlogPost';
import User from '@/models/User';

// GET /api/admin/blog - Get all blog posts
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    
    // Build filter object
    const filter: any = {};
    if (status) filter.status = status;
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Get blog posts with author information
    const blogPosts = await BlogPost.find(filter)
      .populate('author', 'name email')
      .select('-__v')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
    // Get total count for pagination
    const total = await BlogPost.countDocuments(filter);
    
    return NextResponse.json({
      success: true,
      data: blogPosts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
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

// POST /api/admin/blog - Create a new blog post
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { title, content, author, category, tags, status, excerpt } = body;

    // Validate required fields
    if (!title || !content || !author) {
      return NextResponse.json(
        { success: false, error: 'Title, content, and author are required' },
        { status: 400 }
      );
    }

    // Find author by name or create if not exists
    let authorUser = await User.findOne({ name: author });
    if (!authorUser) {
      // Create a basic user entry for the author
      authorUser = await User.create({
        name: author,
        email: `${author.toLowerCase().replace(/\s+/g, '.')}@sliitcshub.lk`,
        role: 'admin'
      });
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    // Check if slug already exists
    const existingPost = await BlogPost.findOne({ slug });
    if (existingPost) {
      return NextResponse.json(
        { success: false, error: 'A post with this title already exists' },
        { status: 409 }
      );
    }

    // Create blog post
    const blogPost = await BlogPost.create({
      title,
      slug,
      content,
      author: authorUser._id,
      category: category || 'General',
      tags: tags || [],
      status: status || 'draft',
      excerpt: excerpt || content.substring(0, 200) + '...',
      publishedAt: status === 'published' ? new Date() : undefined,
      views: 0,
      likes: [],
      comments: [],
      isPublic: status === 'published'
    });

    // Populate author information
    await blogPost.populate('author', 'name email');

    return NextResponse.json({
      success: true,
      data: blogPost,
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
