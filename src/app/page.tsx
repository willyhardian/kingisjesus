// app/page.tsx
import clientPromise from '@/lib/mongodb';
import { ResourceCard } from '@/components/ResourceCard';
import { Resource } from '@/types/db';
import { syncContent } from './actions'; // Import your sync action

// Force dynamic so we always see new DB data
export const dynamic = 'force-dynamic';

export default async function Home() {
  const client = await clientPromise;
  const db = client.db("jesusiskingcenter");

  // Fetch ALL resources (sort by newest first)
  const resources = await db.collection<Resource>("resources")
    .find({})
    .sort({ publishedAt: -1 })
    .toArray();

  // Serializing Mongo data (converting _id objects to strings) is often needed in Next.js
  const cleanResources = JSON.parse(JSON.stringify(resources));

  return (
    <main className="min-h-screen bg-[#0d1117] text-white p-8">
      {/* Header with Sync Button */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Jesus Is King Center</h1>
        <form action={async () => {
          "use server"
          await syncContent()
        }}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Sync New Content
          </button>
        </form>
      </div>

      {/* The Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cleanResources.map((item: Resource) => (
          <ResourceCard key={item.originalId} resource={item} />
        ))}
      </div>

      {cleanResources.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No content yet. Click "Sync New Content" to start!
        </div>
      )}
    </main>
  );
}