import mongoose, { Document, Model, Schema } from 'mongoose';

// Club interface
export interface IClub extends Document {
  _id: string;
  name: string;
  description: string;
  category: string;
  logo?: string;
  coverImage?: string;
  president: mongoose.Types.ObjectId; // User ID
  advisors: mongoose.Types.ObjectId[]; // Array of User IDs
  members: mongoose.Types.ObjectId[]; // Array of User IDs
  socialLinks?: {
    website?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Club schema
const ClubSchema: Schema<IClub> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Club name is required'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['technical', 'cultural', 'sports', 'academic', 'social', 'other'],
    },
    logo: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    president: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'President is required'],
    },
    advisors: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    members: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
    socialLinks: {
      website: String,
      facebook: String,
      instagram: String,
      linkedin: String,
      twitter: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create or use existing model
const Club: Model<IClub> = mongoose.models.Club || mongoose.model<IClub>('Club', ClubSchema);

export default Club;
