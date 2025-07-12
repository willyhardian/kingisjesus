import Link from 'next/link';
import { Metadata } from 'next';
import TestimonialCard from '@/components/TestimonialCard';
import DevotionCard from '@/components/DevotionCard';
import { testimonials } from '@/data/testimonials';
import { devotions } from '@/data/devotions';

export const metadata: Metadata = {
  title: 'Discover Jesus | Faith, Hope & Truth',
  description: 'Begin your journey to discover Jesus Christ and explore how faith can transform your life with daily devotions and inspiring testimonials.',
};

export default function Home() {
  // Get the most recent testimonials and devotions for the preview
  const featuredTestimonials = testimonials.slice(0, 2);
  const featuredDevotions = devotions.slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Discover Jesus</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Explore the transformative power of faith, hope, and truth in your life journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/devotions" 
            className="px-6 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            Daily Devotions
          </Link>
          <Link 
            href="/testimonials" 
            className="px-6 py-3 border border-amber-800 text-amber-800 rounded-md hover:bg-cream-100 transition-colors"
          >
            Read Testimonials
          </Link>
        </div>
      </section>

      {/* Introduction to Christianity */}
      <section className="py-12 bg-cream-50 rounded-lg p-8 my-12">
        <h2 className="text-3xl font-semibold text-amber-900 mb-6 text-center">New to Christianity?</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-4">
            Christianity is centered around the life, teachings, death, and resurrection of Jesus Christ. At its core, 
            Christianity is about a relationship with God through Jesus, who Christians believe is the Son of God and the Savior of humanity.
          </p>
          <p className="text-gray-700 mb-4">
            The Bible teaches that God created humans to be in relationship with Him, but sin separated us from God. 
            Jesus came to bridge that gap, offering forgiveness and reconciliation through His sacrifice on the cross.
          </p>
          <p className="text-gray-700 mb-6">
            Following Jesus means embracing His teachings of love, forgiveness, compassion, and service to others. 
            It&apos;s a journey of faith that transforms how we see ourselves, others, and the world around us.
          </p>
          <div className="text-center">
            <Link 
              href="/about" 
              className="px-5 py-2 text-amber-800 border border-amber-800 rounded-md hover:bg-cream-100 transition-colors inline-block"
            >
              Learn More About Faith
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-amber-900">Testimonials</h2>
          <Link 
            href="/testimonials" 
            className="text-amber-800 hover:text-amber-700 transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Featured Devotions */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-amber-900">Daily Devotions</h2>
          <Link 
            href="/devotions" 
            className="text-amber-800 hover:text-amber-700 transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredDevotions.map((devotion) => (
            <DevotionCard key={devotion.id} devotion={devotion} />
          ))}
        </div>
      </section>
    </div>
  );
}
