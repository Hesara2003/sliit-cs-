import mongoose, { Document, Model, Schema } from 'mongoose';

// User interface
export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  studentId?: string;
  role: 'student' | 'admin' | 'club_admin';
  clubMemberships?: string[]; // Array of club IDs
  createdAt: Date;
  updatedAt: Date;
}

// User schema
const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    studentId: {
      type: String,
      unique: true,
      sparse: true, // Allows null values to be unique
      trim: true,
    },
    role: {
      type: String,
      enum: ['student', 'admin', 'club_admin'],
      default: 'student',
    },
    clubMemberships: [{
      type: Schema.Types.ObjectId,
      ref: 'Club',
    }],
  },
  {
    timestamps: true,
  }
);

// Create or use existing model
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
