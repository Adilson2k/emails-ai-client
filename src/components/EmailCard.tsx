 'use client';

interface EmailCardProps {
  email: {
    subject: string;
    from: string;
    analysis: {
      importance: 'alta' | 'média' | 'baixa';
      summary: string;
      confidence: number;
    };
    smsSent: boolean;
    date: string;
  };
  index: number;
}

export default function EmailCard({ email, index }: EmailCardProps) {
  const importanceColors = {
    alta: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    média: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    baixa: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-smooth cursor-pointer animate-fadeIn"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {email.subject}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {email.from}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${importanceColors[email.analysis.importance]}`}>
          {email.analysis.importance.toUpperCase()}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {email.analysis.summary}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span>{new Date(email.date).toLocaleDateString('pt-BR')}</span>
          {email.smsSent && (
            <span className="text-blue-600 dark:text-blue-400">✓ SMS Enviado</span>
          )}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Confiança: {email.analysis.confidence}%
        </div>
      </div>
    </div>
  );
}
