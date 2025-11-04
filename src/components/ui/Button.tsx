'use client';

export default function Button({ children, className = '', ...props }: any) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-2xl bg-indigo-600 text-white shadow-sm hover:shadow-md hover:bg-indigo-500 active:bg-indigo-600 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-400/60 ${className}`}
    >
      {children}
    </button>
  );
}
