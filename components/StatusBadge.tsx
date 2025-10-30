'use client';

interface StatusBadgeProps {
  status: boolean;
  label: string;
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className={`w-2 h-2 rounded-full ${status ? 'bg-green-500 animate-pulse-custom' : 'bg-gray-400'}`} />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}: {status ? 'Online' : 'Offline'}
      </span>
    </div>
  );
}

