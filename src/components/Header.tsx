import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-gray-900 hover:text-blue-600 transition-colors mb-4 sm:mb-0"
        >
          KingIsJesusCenter
        </Link>

        <nav className="flex space-x-1 sm:space-x-8">
          <Link
            href="/"
            className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/feed"
            className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
          >
            Feed
          </Link>
        </nav>
      </div>
    </header>
  );
}
