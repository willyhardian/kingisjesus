import { Metadata } from 'next';
import FeedNavigation from '@/components/FeedNavigation';
import FeedSidebar from '@/components/FeedSidebar';
import FeedContent from '@/components/FeedContent';

export const metadata: Metadata = {
  title: 'Feed - King Is Jesus Center',
  description: 'Discover the latest Christian articles, devotions, and spiritual content',
  keywords: ['Christian feed', 'spiritual content', 'devotions', 'faith articles'],
};

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <FeedNavigation />
      
      {/* Main Layout */}
      <div className="flex max-w-screen-2xl mx-auto">
        {/* Left Sidebar */}
        <FeedSidebar />
        
        {/* Main Content */}
        <main className="flex-1 min-h-screen lg:ml-0">
          <FeedContent />
        </main>
      </div>
    </div>
  );
}