import Link from 'next/link';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'King Is Jesus Center | Christ-Centered Resources in One Place',
  description: 'Curated Christian articles, devotionals, and insights powered by AI. Discover faith-based content and join our community of believers.',
  keywords: ['Christian', 'Jesus', 'Faith', 'Devotionals', 'Articles', 'AI', 'Bible', 'Community'],
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 text-center overflow-hidden">
          {/* Subtle Christian symbolism background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-gold-400 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-24 bg-gold-400 transform rotate-45"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-24 bg-gold-400 transform -rotate-45"></div>
            <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-blue-500 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 animate-fade-in-up">
              Christ-Centered Resources
              <span className="block text-gold-500">in One Place</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
              Curated Christian articles, devotionals, and insights powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-400">
              <Link 
                href="/feed" 
                className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Feed
              </Link>
              <Link 
                href="#newsletter" 
                className="px-8 py-4 border-2 border-gold-500 text-gold-600 text-lg font-semibold rounded-lg hover:bg-gold-50 transition-all duration-300 transform hover:scale-105"
              >
                Join Newsletter
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We believe in making Christ-centered content accessible to everyone through the power of technology. 
                Our AI-curated platform brings together the best Christian articles, devotionals, and insights to help 
                believers grow in their faith and share God&apos;s love with the world.
              </p>
            </div>
          </div>
        </section>

        {/* Article Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-gray-900 mb-12 animate-fade-in">
              Featured Content
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Article Card 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in animation-delay-200">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-8 bg-blue-500"></div>
                    <div className="w-8 h-2 bg-blue-500 absolute"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Walking in Faith Daily</h3>
                  <p className="text-gray-600 mb-4">Discover practical ways to strengthen your relationship with Christ through daily spiritual practices...</p>
                  <span className="text-sm text-blue-600 font-medium">Devotional • 5 min read</span>
                </div>
              </div>

              {/* Article Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in animation-delay-400">
                <div className="h-48 bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-gold-500 rounded-full flex items-center justify-center">
                    <div className="text-gold-600 text-2xl">✝</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Power of Prayer</h3>
                  <p className="text-gray-600 mb-4">Understanding how prayer transforms our hearts and connects us deeper with God&apos;s will...</p>
                  <span className="text-sm text-gold-600 font-medium">Article • 8 min read</span>
                </div>
              </div>

              {/* Article Card 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in animation-delay-600">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-gold-100 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                    <div className="text-blue-600 text-xl">📖</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Scripture Study Guide</h3>
                  <p className="text-gray-600 mb-4">A comprehensive approach to understanding Biblical texts and applying them to modern life...</p>
                  <span className="text-sm text-blue-600 font-medium">Study Guide • 12 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
                Stay Connected
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get the latest Christian content and insights delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-gold-400 focus:outline-none text-gray-900"
                />
                <button className="px-6 py-3 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
