'use client';

export default function Input(props: any) {
  return (
    <input
      {...props}
      className={`w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 transition ${props.className || ''}`}
    />
  );
}
