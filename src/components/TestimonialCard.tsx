import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  showFullContent?: boolean;
}

export default function TestimonialCard({ testimonial, showFullContent = false }: TestimonialCardProps) {
  const { name, quote, content, date } = testimonial;
  
  // Format date to be more readable
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-cream-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-cream-200">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <p className="text-lg font-medium text-amber-800 mb-2 italic">&quot;{quote}&quot;</p>
          {showFullContent && (
            <p className="text-gray-700 mb-4">{content}</p>
          )}
        </div>
        <div className="mt-auto">
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}