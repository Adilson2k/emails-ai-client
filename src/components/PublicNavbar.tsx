import Link from 'next/link';

export default function PublicNavbar() {
  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/70 dark:border-gray-800/70 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          Email AI
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            href="/how-it-works" 
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Como funciona
          </Link>
          <Link 
            href="/pricing" 
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Preços
          </Link>
          <Link 
            href="/auth/login" 
            className="px-4 py-2 bg-indigo-600 text-white rounded-2xl shadow-sm hover:shadow-md hover:bg-indigo-500 active:bg-indigo-600 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-400/60 font-medium"
          >
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  );
}
