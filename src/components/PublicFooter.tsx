export default function PublicFooter() {
  return (
    <footer className="border-t border-gray-200/70 dark:border-gray-800/70 bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p className="mb-2">© {new Date().getFullYear()} Email AI — Todos os direitos reservados.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Política de Privacidade</a>
          <span>·</span>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
}
