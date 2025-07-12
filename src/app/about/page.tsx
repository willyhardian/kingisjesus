import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Discover Jesus',
  description: 'Learn more about our mission to share the message of Jesus Christ and help others discover faith, hope, and truth.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-amber-900 mb-6 text-center">About Us</h1>
      
      <div className="max-w-4xl mx-auto bg-cream-50 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          At Discover Jesus, our mission is to help people explore and deepen their understanding of the Christian faith. 
          We believe that a relationship with Jesus Christ brings purpose, peace, and transformation to every area of life.
        </p>
        
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Daily devotionals to encourage spiritual growth</li>
          <li>Real-life testimonies of faith and transformation</li>
          <li>Resources for those new to Christianity</li>
          <li>A supportive community of believers</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Values</h2>
        <p className="text-gray-700 mb-3">
          <strong>Truth:</strong> We are committed to sharing the truth of God&apos;s Word with integrity and clarity.
        </p>
        <p className="text-gray-700 mb-3">
          <strong>Love:</strong> We believe in showing Christ&apos;s love to everyone, regardless of background or belief.
        </p>
        <p className="text-gray-700 mb-3">
          <strong>Growth:</strong> We encourage continuous spiritual growth and a deepening relationship with Jesus.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Community:</strong> We foster a supportive community where people can share their faith journey.
        </p>
        
        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-700 transition-colors inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}