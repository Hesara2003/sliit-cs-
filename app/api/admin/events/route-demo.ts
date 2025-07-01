import { NextRequest, NextResponse } from 'next/server';

// Mock events data
let mockEvents = [
  {
    _id: 'event-1',
    title: 'React Workshop',
    date: new Date(Date.now() + 7 * 86400000).toISOString(),
    type: 'workshop',
    description: 'Learn React from basics to advanced',
    location: 'SLIIT Malabe',
    attendees: [{ _id: 'user1' }, { _id: 'user2' }],
    maxAttendees: 50,
    status: 'published',
    createdAt: new Date().toISOString()
  },
  {
    _id: 'event-2',
    title: 'Career Fair 2025',
    date: new Date(Date.now() + 14 * 86400000).toISOString(),
    type: 'seminar',
    description: 'Connect with top employers',
    location: 'SLIIT Colombo',
    attendees: [{ _id: 'user1' }],
    maxAttendees: 100,
    status: 'published',
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
];

// GET /api/admin/events - Get all events (Demo)
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: {
        events: mockEvents,
        pagination: {
          page: 1,
          limit: 10,
          total: mockEvents.length,
          pages: 1
        }
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

// POST /api/admin/events - Create event (Demo)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, date, type, description, location, maxAttendees } = body;

    const newEvent = {
      _id: 'event-' + Date.now(),
      title,
      date,
      type,
      description: description || '',
      location: location || 'TBD',
      attendees: [],
      maxAttendees,
      status: 'draft',
      createdAt: new Date().toISOString()
    };

    mockEvents.unshift(newEvent);

    return NextResponse.json({
      success: true,
      data: newEvent,
      message: 'Event created successfully'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create event' },
      { status: 500 }
    );
  }
}
