export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-indigo-50/30 to-white dark:from-gray-900 dark:via-indigo-950/20 dark:to-black py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fade-in">
          Automatize o monitoramento e classificação de emails com AI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Classifique automaticamente prioridades, identifique riscos e receba alertas inteligentes — pronto para empresas de qualquer tamanho.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a 
            href="/auth/register" 
            className="px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow-sm hover:shadow-md hover:bg-indigo-500 active:bg-indigo-600 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-400/60 font-medium"
          >
            Começar grátis
          </a>
          <a 
            href="/how-it-works" 
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-2xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 ease-out font-medium"
          >
            Como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
