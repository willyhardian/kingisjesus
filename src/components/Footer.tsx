import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cream-100 border-t border-cream-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-amber-900">Discover Jesus</h2>
            <p className="text-gray-600 mt-2">Faith, Hope & Truth</p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-amber-800 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/devotions" className="text-gray-600 hover:text-amber-800 transition-colors">
                    Devotions
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-gray-600 hover:text-amber-800 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-amber-800 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-amber-800 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-amber-800 transition-colors">
                    Prayer Requests
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Discover Jesus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}