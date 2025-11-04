'use client';

import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '@/hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full border-b border-gray-200/70 dark:border-gray-800/70 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Email AI</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">Monitoramento de emails com IA</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
              {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="hidden md:block text-left">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.name || 'Usuário'}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {user?.email}
              </div>
            </div>
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowMenu(false)}
              />
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200/70 dark:border-gray-700/70 py-2 z-20">
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name || 'Usuário'}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sair
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
