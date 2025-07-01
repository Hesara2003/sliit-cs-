// Database setup script for SLIIT CS Hub
import { config } from 'dotenv';
import path from 'path';

// Load environment variables
config({ path: path.join(process.cwd(), '.env.local') });

// Import MongoDB connection and models
import connectDB from '../lib/mongoose';
import User from '../models/User';
import Club from '../models/Club';
import Event from '../models/Event';
import BlogPost from '../models/BlogPost';

async function setupDatabase() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await connectDB();
    console.log('✅ Connected to MongoDB successfully!');

    console.log('🔄 Setting up database collections...');

    // Create sample admin user
    const adminUser = await User.findOneAndUpdate(
      { email: 'admin@sliit.lk' },
      {
        name: 'SLIIT Admin',
        email: 'admin@sliit.lk',
        role: 'admin',
      },
      { upsert: true, new: true }
    );
    console.log('✅ Admin user created/updated');

    // Create sample student user
    const studentUser = await User.findOneAndUpdate(
      { email: 'student@sliit.lk' },
      {
        name: 'John Doe',
        email: 'student@sliit.lk',
        studentId: 'IT21000000',
        role: 'student',
      },
      { upsert: true, new: true }
    );
    console.log('✅ Student user created/updated');

    // Create sample clubs
    const techClub = await Club.findOneAndUpdate(
      { name: 'Tech Club' },
      {
        name: 'Tech Club',
        description: 'SLIIT Technology and Innovation Club',
        category: 'Technology',
        isActive: true,
        members: [studentUser._id],
        admins: [adminUser._id],
      },
      { upsert: true, new: true }
    );

    const debatingClub = await Club.findOneAndUpdate(
      { name: 'Debating Society' },
      {
        name: 'Debating Society',
        description: 'SLIIT Debating and Public Speaking Society',
        category: 'Academic',
        isActive: true,
        members: [studentUser._id],
        admins: [adminUser._id],
      },
      { upsert: true, new: true }
    );
    console.log('✅ Sample clubs created/updated');

    // Create sample events
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    
    const techEvent = await Event.findOneAndUpdate(
      { title: 'Tech Workshop: Introduction to AI' },
      {
        title: 'Tech Workshop: Introduction to AI',
        description: 'Learn the basics of Artificial Intelligence and Machine Learning',
        date: nextWeek,
        time: '14:00',
        location: 'Auditorium A',
        category: 'Workshop',
        isActive: true,
        organizer: techClub._id,
        maxParticipants: 100,
        registeredParticipants: [],
      },
      { upsert: true, new: true }
    );

    const debateEvent = await Event.findOneAndUpdate(
      { title: 'Inter-Faculty Debate Competition' },
      {
        title: 'Inter-Faculty Debate Competition',
        description: 'Annual debate competition between all faculties',
        date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
        time: '10:00',
        location: 'Main Hall',
        category: 'Competition',
        isActive: true,
        organizer: debatingClub._id,
        maxParticipants: 50,
        registeredParticipants: [],
      },
      { upsert: true, new: true }
    );
    console.log('✅ Sample events created/updated');

    // Create sample blog posts
    const blogPost1 = await BlogPost.findOneAndUpdate(
      { title: 'Welcome to SLIIT CS Hub' },
      {
        title: 'Welcome to SLIIT CS Hub',
        content: 'Welcome to the official SLIIT Computer Science Hub! This platform serves as a central place for all CS students to connect, learn, and grow together.',
        excerpt: 'Welcome to the official SLIIT Computer Science Hub!',
        author: adminUser._id,
        category: 'Announcement',
        tags: ['welcome', 'announcement', 'sliit'],
        isPublished: true,
        featuredImage: '/placeholder.jpg',
      },
      { upsert: true, new: true }
    );

    const blogPost2 = await BlogPost.findOneAndUpdate(
      { title: 'Getting Started with Web Development' },
      {
        title: 'Getting Started with Web Development',
        content: 'Web development is an exciting field that combines creativity with technical skills. In this post, we will explore the basics of HTML, CSS, and JavaScript.',
        excerpt: 'Learn the basics of web development with HTML, CSS, and JavaScript.',
        author: adminUser._id,
        category: 'Tutorial',
        tags: ['web-development', 'html', 'css', 'javascript'],
        isPublished: true,
        featuredImage: '/placeholder.jpg',
      },
      { upsert: true, new: true }
    );
    console.log('✅ Sample blog posts created/updated');

    console.log('🎉 Database setup completed successfully!');
    console.log('\nSample data created:');
    console.log('- Admin user: admin@sliit.lk');
    console.log('- Student user: student@sliit.lk');
    console.log('- 2 clubs (Tech Club, Debating Society)');
    console.log('- 2 events (AI Workshop, Debate Competition)');
    console.log('- 2 blog posts');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error setting up database:', error);
    process.exit(1);
  }
}

// Run the setup function
setupDatabase();
