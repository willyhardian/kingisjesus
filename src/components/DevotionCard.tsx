import { Devotion } from '@/types';

interface DevotionCardProps {
  devotion: Devotion;
  showFullContent?: boolean;
}

export default function DevotionCard({ devotion, showFullContent = false }: DevotionCardProps) {
  const { title, date, scripture, content } = devotion;
  
  // Format date to be more readable
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-cream-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-cream-200">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
        
        <div className="bg-amber-50 p-4 rounded-md mb-4 border-l-4 border-amber-300">
          <p className="text-sm font-medium text-amber-800 mb-1">{scripture.reference}</p>
          <p className="text-gray-700 italic">&quot;{scripture.text}&quot;</p>
        </div>
        
        {showFullContent ? (
          <p className="text-gray-700">{content}</p>
        ) : (
          <p className="text-gray-700 line-clamp-3">{content}</p>
        )}
      </div>
    </div>
  );
}