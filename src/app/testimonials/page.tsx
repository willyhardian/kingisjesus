import { Metadata } from 'next';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Testimonials | Discover Jesus',
  description: 'Read inspiring stories of how Jesus has transformed lives through faith, hope, and love.',
};

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-amber-900 mb-2 text-center">Testimonials</h1>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Read inspiring stories of how Jesus has transformed lives through faith, hope, and love.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
            showFullContent={true} 
          />
        ))}
      </div>
    </div>
  );
}