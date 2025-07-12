import { Metadata } from 'next';
import DevotionCard from '@/components/DevotionCard';
import { devotions } from '@/data/devotions';

export const metadata: Metadata = {
  title: 'Daily Devotions | Discover Jesus',
  description: 'Daily devotional readings to help you grow in your faith and deepen your relationship with Jesus Christ.',
};

export default function DevotionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-amber-900 mb-2 text-center">Daily Devotions</h1>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Daily readings to help you grow in your faith and deepen your relationship with Jesus Christ.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {devotions.map((devotion) => (
          <DevotionCard 
            key={devotion.id} 
            devotion={devotion} 
            showFullContent={true} 
          />
        ))}
      </div>
    </div>
  );
}