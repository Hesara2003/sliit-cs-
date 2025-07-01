import { getDatabase } from './mongodb';
import { Collection, Filter, UpdateFilter, FindOptions, Document } from 'mongodb';

/**
 * Generic database utilities for CRUD operations
 */
export class DatabaseService {
  private db: any;

  constructor() {
    this.db = null;
  }

  async getDb() {
    if (!this.db) {
      this.db = await getDatabase();
    }
    return this.db;
  }

  /**
   * Find documents in a collection
   */
  async find<T extends Document>(
    collectionName: string,
    filter: Filter<T> = {},
    options: FindOptions<T> = {}
  ): Promise<T[]> {
    const db = await this.getDb();
    const collection: Collection<T> = db.collection(collectionName);
    return await collection.find(filter, options).toArray() as T[];
  }

  /**
   * Find a single document
   */
  async findOne<T extends Document>(
    collectionName: string,
    filter: Filter<T>
  ): Promise<T | null> {
    const db = await this.getDb();
    const collection: Collection<T> = db.collection(collectionName);
    return await collection.findOne(filter) as T | null;
  }

  /**
   * Insert a single document
   */
  async insertOne<T extends Document>(
    collectionName: string,
    document: T
  ): Promise<{ insertedId: any; acknowledged: boolean }> {
    const db = await this.getDb();
    const collection: Collection<T> = db.collection(collectionName);
    return await collection.insertOne(document as any);
  }

  /**
   * Insert multiple documents
   */
  async insertMany<T extends Document>(
    collectionName: string,
    documents: T[]
  ): Promise<{ insertedIds: any; acknowledged: boolean }> {
    const db = await this.getDb();
    const collection: Collection<T> = db.collection(collectionName);
    const result = await collection.insertMany(documents as any[]);
    return {
      insertedIds: result.insertedIds,
      acknowledged: result.acknowledged
    };
  }

  /**
   * Update a single document
   */
  async updateOne<T extends Document>(
    collectionName: string,
    filter: Filter<T>,
    update: UpdateFilter<T>
  ): Promise<{ modifiedCount: number; acknowledged: boolean }> {
    const db = await this.getDb();
    const collection: Collection<T> = db.collection(collectionName);
    return await collection.updateOne(filter, update);
  }

  /**
   * Update multiple documents
   */
  async updateMany<T extends Document>(
    collectionName: string,
    filter: Filter<T>,
    update: UpdateFilter<T>
  ): Promise<{ modifiedCount: number; acknowledged: boolean }> {
    const db = await this.getDb();
    const collection: Collection<T> = db.collection(collectionName);
    return await collection.updateMany(filter, update);
  }

  /**
   * Delete a single document
   */
  async deleteOne<T extends Document>(
    collectionName: string,
    filter: Filter<T>
  ): Promise<{ deletedCount: number; acknowledged: boolean }> {
    const db = await this.getDb();
    const collection: Collection<T> = db.collection(collectionName);
    return await collection.deleteOne(filter);
  }

  /**
   * Delete multiple documents
   */
  async deleteMany<T extends Document>(
    collectionName: string,
    filter: Filter<T>
  ): Promise<{ deletedCount: number; acknowledged: boolean }> {
    const db = await this.getDb();
    const collection: Collection<T> = db.collection(collectionName);
    return await collection.deleteMany(filter);
  }

  /**
   * Count documents in a collection
   */
  async count<T extends Document>(
    collectionName: string,
    filter: Filter<T> = {}
  ): Promise<number> {
    const db = await this.getDb();
    const collection: Collection<T> = db.collection(collectionName);
    return await collection.countDocuments(filter);
  }

  /**
   * Create an index on a collection
   */
  async createIndex(
    collectionName: string,
    indexSpec: any,
    options: any = {}
  ): Promise<string> {
    const db = await this.getDb();
    const collection = db.collection(collectionName);
    return await collection.createIndex(indexSpec, options);
  }

  /**
   * Aggregate pipeline
   */
  async aggregate<T>(
    collectionName: string,
    pipeline: any[]
  ): Promise<T[]> {
    const db = await this.getDb();
    const collection = db.collection(collectionName);
    return await collection.aggregate(pipeline).toArray();
  }

  /**
   * Check if database connection is healthy
   */
  async healthCheck(): Promise<boolean> {
    try {
      const db = await this.getDb();
      await db.admin().ping();
      return true;
    } catch (error) {
      console.error('Database health check failed:', error);
      return false;
    }
  }
}

// Export a singleton instance
export const dbService = new DatabaseService();

// Collection names constants
export const COLLECTIONS = {
  USERS: 'users',
  CLUBS: 'clubs',
  EVENTS: 'events',
  BLOG_POSTS: 'blogposts',
  COMMENTS: 'comments',
  NOTIFICATIONS: 'notifications',
} as const;
