import mongoose, { Document, Model, Schema } from 'mongoose';

// Event interface
export interface IEvent extends Document {
  _id: string;
  title: string;
  description: string;
  content?: string; // Rich text content
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  venue?: string;
  organizer: mongoose.Types.ObjectId; // Club or User ID
  organizerType: 'club' | 'user';
  category: string;
  tags: string[];
  image?: string;
  registrationRequired: boolean;
  registrationDeadline?: Date;
  maxAttendees?: number;
  attendees: mongoose.Types.ObjectId[]; // Array of User IDs
  status: 'draft' | 'published' | 'cancelled' | 'completed';
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Event schema
const EventSchema: Schema<IEvent> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Event title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    content: {
      type: String,
    },
    date: {
      type: Date,
      required: [true, 'Event date is required'],
    },
    startTime: {
      type: String,
      required: [true, 'Start time is required'],
    },
    endTime: {
      type: String,
      required: [true, 'End time is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    venue: {
      type: String,
    },
    organizer: {
      type: Schema.Types.ObjectId,
      required: [true, 'Organizer is required'],
      refPath: 'organizerType',
    },
    organizerType: {
      type: String,
      required: true,
      enum: ['club', 'user'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['workshop', 'seminar', 'competition', 'social', 'academic', 'sports', 'cultural', 'other'],
    },
    tags: [{
      type: String,
      trim: true,
    }],
    image: {
      type: String,
    },
    registrationRequired: {
      type: Boolean,
      default: false,
    },
    registrationDeadline: {
      type: Date,
    },
    maxAttendees: {
      type: Number,
    },
    attendees: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    status: {
      type: String,
      enum: ['draft', 'published', 'cancelled', 'completed'],
      default: 'draft',
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
EventSchema.index({ date: 1, status: 1 });
EventSchema.index({ organizer: 1, organizerType: 1 });
EventSchema.index({ category: 1 });

// Create or use existing model
const Event: Model<IEvent> = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default Event;
