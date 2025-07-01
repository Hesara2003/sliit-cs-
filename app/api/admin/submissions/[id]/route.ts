import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import { ObjectId } from 'mongodb';

// GET /api/admin/submissions/[id] - Get a specific form submission
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const { getDatabase } = await import('@/lib/mongodb');
    const db = await getDatabase();
    const submissionsCollection = db.collection('form_submissions');
    
    const submission = await submissionsCollection.findOne({ _id: new ObjectId(params.id) });

    if (!submission) {
      return NextResponse.json(
        { success: false, error: 'Form submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: submission
    });
  } catch (error) {
    console.error('Error fetching form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch form submission' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/submissions/[id] - Update a form submission status
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { status, notes } = body;

    if (!status) {
      return NextResponse.json(
        { success: false, error: 'Status is required' },
        { status: 400 }
      );
    }

    const { getDatabase } = await import('@/lib/mongodb');
    const db = await getDatabase();
    const submissionsCollection = db.collection('form_submissions');

    // Update the submission
    const updateData = {
      status,
      ...(notes && { notes }),
      updatedAt: new Date()
    };

    const result = await submissionsCollection.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Form submission not found' },
        { status: 404 }
      );
    }

    // Get the updated document
    const updatedSubmission = await submissionsCollection.findOne({ _id: new ObjectId(params.id) });

    return NextResponse.json({
      success: true,
      data: updatedSubmission,
      message: 'Form submission updated successfully'
    });

  } catch (error) {
    console.error('Error updating form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update form submission' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/submissions/[id] - Delete a form submission
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const { getDatabase } = await import('@/lib/mongodb');
    const db = await getDatabase();
    const submissionsCollection = db.collection('form_submissions');
    
    const result = await submissionsCollection.deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Form submission not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Form submission deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete form submission' },
      { status: 500 }
    );
  }
}
