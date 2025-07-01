import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Event from '@/models/Event';

// GET /api/admin/events/[id] - Get a specific event
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const event = await Event.findById(params.id)
      .populate('organizer', 'name email')
      .populate('attendees', 'name email studentId')
      .select('-__v');

    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: event
    });
  } catch (error) {
    console.error('Error fetching event:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch event' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/events/[id] - Update an event
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { title, description, date, location, type, maxAttendees, registrationDeadline, status } = body;

    // Find the existing event
    const existingEvent = await Event.findById(params.id);
    if (!existingEvent) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      );
    }

    // Generate new slug if title changed
    let slug = existingEvent.slug;
    if (title && title !== existingEvent.title) {
      slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      
      // Check if new slug already exists
      const slugExists = await Event.findOne({ slug, _id: { $ne: params.id } });
      if (slugExists) {
        slug = `${slug}-${Date.now()}`;
      }
    }

    // Update the event
    const updateData: any = {
      ...(title && { title }),
      ...(slug !== existingEvent.slug && { slug }),
      ...(description !== undefined && { description }),
      ...(date && { date: new Date(date) }),
      ...(location && { location }),
      ...(type && { type }),
      ...(maxAttendees && { maxAttendees }),
      ...(registrationDeadline && { registrationDeadline: new Date(registrationDeadline) }),
      ...(status && { status })
    };

    const event = await Event.findByIdAndUpdate(
      params.id,
      updateData,
      { new: true, runValidators: true }
    ).populate('organizer', 'name email');

    return NextResponse.json({
      success: true,
      data: event,
      message: 'Event updated successfully'
    });

  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update event' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/events/[id] - Delete an event
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const event = await Event.findByIdAndDelete(params.id);

    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Event deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete event' },
      { status: 500 }
    );
  }
}
