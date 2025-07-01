import { NextRequest, NextResponse } from 'next/server';

// GET /api/admin/stats - Get dashboard statistics (Demo with mock data)
export async function GET(request: NextRequest) {
  try {
    // Return mock statistics data for demo
    const mockStats = {
      overview: {
        totalUsers: 1247,
        activeUsers: 892,
        totalEvents: 45,
        upcomingEvents: 12,
        totalBlogPosts: 87,
        publishedBlogPosts: 73,
        draftBlogPosts: 14,
        totalClubs: 8,
        activeClubs: 6
      },
      growth: {
        users: 15,
        events: 8,
        blogs: 22
      },
      recentActivity: {
        blogPosts: [
          {
            _id: 'blog1',
            title: 'Welcome to SLIIT CS Hub',
            author: { name: 'Admin Team' },
            createdAt: new Date().toISOString()
          },
          {
            _id: 'blog2', 
            title: 'Upcoming Tech Events',
            author: { name: 'Event Committee' },
            createdAt: new Date(Date.now() - 86400000).toISOString()
          }
        ],
        events: [
          {
            _id: 'event1',
            title: 'React Workshop',
            date: new Date(Date.now() + 7 * 86400000).toISOString(),
            type: 'workshop'
          },
          {
            _id: 'event2',
            title: 'Career Fair 2025',
            date: new Date(Date.now() + 14 * 86400000).toISOString(), 
            type: 'seminar'
          }
        ],
        users: [
          {
            _id: 'user1',
            name: 'John Doe',
            email: 'john@sliit.lk',
            createdAt: new Date().toISOString()
          },
          {
            _id: 'user2',
            name: 'Jane Smith', 
            email: 'jane@sliit.lk',
            createdAt: new Date(Date.now() - 3600000).toISOString()
          }
        ]
      }
    };

    return NextResponse.json({
      success: true,
      data: mockStats
    });

  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}
