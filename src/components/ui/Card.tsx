'use client';

export default function Card({ children, className = '' }: any) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md border border-gray-200/70 dark:border-gray-700/70 p-6 transition-shadow ${className}`}>
      {children}
    </div>
  );
}
