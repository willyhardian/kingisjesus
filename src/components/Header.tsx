import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-cream-50 border-b border-cream-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-amber-900 hover:text-amber-700 transition-colors mb-4 sm:mb-0"
        >
          Jesus is King
        </Link>

        <nav className="flex space-x-1 sm:space-x-8">
          <Link
            href="/"
            className="px-3 py-2 text-gray-700 hover:text-amber-800 hover:bg-cream-100 rounded-md transition-colors"
          >
            Home
          </Link>
          <Link
            href="/devotions"
            className="px-3 py-2 text-gray-700 hover:text-amber-800 hover:bg-cream-100 rounded-md transition-colors"
          >
            Devotions
          </Link>
          <Link
            href="/testimonials"
            className="px-3 py-2 text-gray-700 hover:text-amber-800 hover:bg-cream-100 rounded-md transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 text-gray-700 hover:text-amber-800 hover:bg-cream-100 rounded-md transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
