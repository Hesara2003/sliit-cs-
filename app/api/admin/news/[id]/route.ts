import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import { ObjectId } from 'mongodb';

// GET /api/admin/news/[id] - Get a specific news item
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const { getDatabase } = await import('@/lib/mongodb');
    const db = await getDatabase();
    const newsCollection = db.collection('news');
    
    const newsItem = await newsCollection.findOne({ _id: new ObjectId(params.id) });

    if (!newsItem) {
      return NextResponse.json(
        { success: false, error: 'News item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: newsItem
    });
  } catch (error) {
    console.error('Error fetching news item:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch news item' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/news/[id] - Update a news item
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { title, content, priority, status } = body;

    const { getDatabase } = await import('@/lib/mongodb');
    const db = await getDatabase();
    const newsCollection = db.collection('news');

    // Update the news item
    const updateData = {
      ...(title && { title }),
      ...(content !== undefined && { content }),
      ...(priority && { priority }),
      ...(status && { status }),
      updatedAt: new Date()
    };

    const result = await newsCollection.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'News item not found' },
        { status: 404 }
      );
    }

    // Get the updated document
    const updatedNewsItem = await newsCollection.findOne({ _id: new ObjectId(params.id) });

    return NextResponse.json({
      success: true,
      data: updatedNewsItem,
      message: 'News item updated successfully'
    });

  } catch (error) {
    console.error('Error updating news item:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update news item' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/news/[id] - Delete a news item
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const { getDatabase } = await import('@/lib/mongodb');
    const db = await getDatabase();
    const newsCollection = db.collection('news');
    
    const result = await newsCollection.deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'News item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'News item deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting news item:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete news item' },
      { status: 500 }
    );
  }
}
