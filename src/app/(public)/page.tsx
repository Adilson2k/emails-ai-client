import PublicNavbar from '@/components/PublicNavbar';
import Hero from '@/components/Hero';
import PublicFooter from '@/components/PublicFooter';
import StatCard from '@/components/StatCard';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <PublicNavbar />
      <main>
        <Hero />

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard title="Tempo economizado" value="12h/semana" subtitle="+32%" trend="up" delay={0} />
              <StatCard title="Emails priorizados" value="1.2k+/mês" subtitle="+18%" trend="up" delay={100} />
              <StatCard title="Alertas críticos" value="97% precisão" subtitle="+6%" trend="up" delay={200} />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Feito para sua equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-900/60 hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-out">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Classificação por prioridade</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Atribuição automática de tags e SLA conforme contexto e remetente.</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-900/60 hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-out">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Detecção de risco</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Identifique termos de risco, fraude e compliance em tempo real.</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-900/60 hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-out">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Integrações</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Gmail, IMAP/SMTP, Slack, Webhooks e API para o seu backend.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/auth/register" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-2xl shadow-sm hover:shadow-md hover:bg-indigo-500 active:bg-indigo-600 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-400/60 font-medium inline-block"
              >
                Começar grátis
              </a>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}


