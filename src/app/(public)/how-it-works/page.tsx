import PublicNavbar from '@/components/PublicNavbar';
import PublicFooter from '@/components/PublicFooter';
import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Configure suas credenciais',
      description: 'Conecte sua caixa de email através de IMAP. Suas credenciais são criptografadas e armazenadas de forma segura.',
      icon: '🔐',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      number: '02',
      title: 'IA analisa automaticamente',
      description: 'Nossa IA processa cada email em tempo real, classificando por prioridade (alta, média, baixa) e identificando riscos.',
      icon: '🤖',
      color: 'from-purple-500 to-pink-600'
    },
    {
      number: '03',
      title: 'Alertas inteligentes',
      description: 'Receba notificações SMS instantâneas para emails críticos, com resumos gerados pela IA para você agir rapidamente.',
      icon: '📱',
      color: 'from-pink-500 to-rose-600'
    },
    {
      number: '04',
      title: 'Dashboard completo',
      description: 'Visualize estatísticas, histórico de emails processados e insights gerados pela inteligência artificial.',
      icon: '📊',
      color: 'from-rose-500 to-orange-600'
    }
  ];

  const features = [
    {
      title: 'Análise em tempo real',
      description: 'Processamento instantâneo de emails assim que chegam na sua caixa',
      icon: '⚡'
    },
    {
      title: 'Criptografia de ponta a ponta',
      description: 'Suas credenciais e dados sensíveis são protegidos com criptografia AES-256',
      icon: '🔒'
    },
    {
      title: 'Multi-usuário simultâneo',
      description: 'Cada usuário monitora sua própria caixa de email de forma independente',
      icon: '👥'
    },
    {
      title: 'API completa',
      description: 'Integre com seu sistema através de webhooks e endpoints REST',
      icon: '🔌'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <PublicNavbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-indigo-950/20 dark:to-black py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Como funciona
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Veja como nossa plataforma automatiza o monitoramento de emails e transforma sua produtividade
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-8 group"
                >
                  <div className={`flex-shrink-0 w-32 h-32 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-6xl font-black text-gray-200 dark:text-gray-800">{step.number}</span>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Recursos avançados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-900/60 hover:shadow-md hover:scale-[1.02] transition-all duration-200 ease-out"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Junte-se a empresas que já automatizaram o monitoramento de emails
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/auth/register"
                className="px-8 py-4 bg-white text-indigo-600 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-200 ease-out focus:outline-none focus:ring-4 focus:ring-white/50 font-bold text-lg"
              >
                Começar grátis
              </Link>
              <Link
                href="/auth/login"
                className="px-8 py-4 border-2 border-white text-white rounded-2xl hover:bg-white/10 transition-all duration-200 ease-out font-medium text-lg"
              >
                Fazer login
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}

