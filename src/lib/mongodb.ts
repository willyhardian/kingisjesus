import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (!process.env.DB_NAME) {
  throw new Error('Please add your database name to .env.local');
}

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise!;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;

// Helper functions for database operations
export async function getCollection(collectionName: string) {
  const client = await clientPromise;
  const db = client.db(dbName);
  return db.collection(collectionName);
}

// Example functions for future use with testimonials and devotions
export async function getTestimonials() {
  const collection = await getCollection('testimonials');
  return collection.find({}).sort({ date: -1 }).toArray();
}

export async function getDevotions() {
  const collection = await getCollection('devotions');
  return collection.find({}).sort({ date: -1 }).toArray();
}