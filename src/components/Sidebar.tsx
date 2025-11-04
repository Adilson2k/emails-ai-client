'use client';

import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-72 hidden md:flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Email AI</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">SaaS de monitoramento</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          <li>
            <Link href="/dashboard" className="block px-3 py-2 rounded-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/emails" className="block px-3 py-2 rounded-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Emails</Link>
          </li>
          <li>
            <Link href="/settings" className="block px-3 py-2 rounded-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Configurações</Link>
          </li>
          <li>
            <Link href="/billing" className="block px-3 py-2 rounded-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Assinatura</Link>
          </li>
          <li>
            <Link href="/profile" className="block px-3 py-2 rounded-2xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Perfil</Link>
          </li>
        </ul>
      </nav>

      <div className="mt-4">
        <small className="text-xs text-gray-500 dark:text-gray-400">v0.1.0</small>
      </div>
    </aside>
  );
}
