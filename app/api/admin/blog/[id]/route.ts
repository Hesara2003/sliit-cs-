import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import BlogPost from '@/models/BlogPost';
import User from '@/models/User';

// GET /api/admin/blog/[id] - Get a specific blog post
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const blogPost = await BlogPost.findById(params.id)
      .populate('author', 'name email')
      .select('-__v');

    if (!blogPost) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: blogPost
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/blog/[id] - Update a blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { title, content, author, category, tags, status, excerpt } = body;

    // Find the existing blog post
    const existingPost = await BlogPost.findById(params.id);
    if (!existingPost) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Find or create author
    let authorUser = existingPost.author;
    if (author && typeof author === 'string') {
      const foundUser = await User.findOne({ name: author });
      if (foundUser) {
        authorUser = foundUser._id;
      } else {
        const newUser = await User.create({
          name: author,
          email: `${author.toLowerCase().replace(/\s+/g, '.')}@sliitcshub.lk`,
          role: 'admin'
        });
        authorUser = newUser._id;
      }
    }

    // Generate new slug if title changed
    let slug = existingPost.slug;
    if (title && title !== existingPost.title) {
      slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      
      // Check if new slug already exists
      const slugExists = await BlogPost.findOne({ slug, _id: { $ne: params.id } });
      if (slugExists) {
        slug = `${slug}-${Date.now()}`;
      }
    }

    // Update the blog post
    const updateData: any = {
      ...(title && { title }),
      ...(slug !== existingPost.slug && { slug }),
      ...(content && { content }),
      ...(authorUser && { author: authorUser }),
      ...(category && { category }),
      ...(tags && { tags }),
      ...(status && { status }),
      ...(excerpt && { excerpt })
    };

    // Set publishedAt if publishing for the first time
    if (status === 'published' && existingPost.status !== 'published') {
      updateData.publishedAt = new Date();
      updateData.isPublic = true;
    } else if (status !== 'published') {
      updateData.isPublic = false;
    }

    const blogPost = await BlogPost.findByIdAndUpdate(
      params.id,
      updateData,
      { new: true, runValidators: true }
    ).populate('author', 'name email');

    return NextResponse.json({
      success: true,
      data: blogPost,
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

// DELETE /api/admin/blog/[id] - Delete a blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const blogPost = await BlogPost.findByIdAndDelete(params.id);

    if (!blogPost) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

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
