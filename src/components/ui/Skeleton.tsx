'use client';

export default function Skeleton({ className = '' }: any) {
  return <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`} />;
}
