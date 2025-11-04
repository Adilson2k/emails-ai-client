'use client';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  delay?: number;
}

export default function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend = 'neutral',
  delay = 0 
}: StatCardProps) {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600',
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md border border-gray-200/70 dark:border-gray-700/70 p-6 transition-all duration-200 ease-out hover:scale-[1.02]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {value}
          </p>
          {subtitle && (
            <p className={`text-xs font-medium ${trendColors[trend]}`}>
              {subtitle}
            </p>
          )}
        </div>
        {icon && (
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
