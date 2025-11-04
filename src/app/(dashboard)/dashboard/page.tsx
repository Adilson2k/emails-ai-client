'use client';

import { useEffect, useState } from 'react';
import StatCard from '@/components/StatCard';
import StatusBadge from '@/components/StatusBadge';
import EmailCard from '@/components/EmailCard';
import { emailService, GeneralStats, ProcessedEmail } from '@/libs/services/emailService';
import { statusService, SystemStatus } from '@/libs/services/statusService';

export default function Dashboard() {
  const [stats, setStats] = useState<GeneralStats | null>(null);
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [emails, setEmails] = useState<ProcessedEmail[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    try {
      setRefreshing(true);
      const [statsData, statusData, emailsData] = await Promise.all([
        emailService.getGeneralStats(),
        statusService.getStatus(),
        emailService.getEmails(),
      ]);
      setStats(statsData);
      setSystemStatus(statusData);
      setEmails(emailsData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    loadData();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin-slow mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Carregando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8 animate-slideIn">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Email AI Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Sistema inteligente de análise de emails</p>
          </div>
          <button onClick={handleRefresh} disabled={refreshing} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <svg className={`w-5 h-5 ${refreshing ? 'animate-spin-slow' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Atualizar
          </button>
        </div>

        {systemStatus && (
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Status do Sistema</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatusBadge status={systemStatus.listener?.running || systemStatus.emailListener?.running || false} label="Email Listener" />
              <StatusBadge status={systemStatus.gemini?.connected || false} label="Gemini AI" />
              <StatusBadge status={systemStatus.sms?.configured || false} label="SMS Service" />
              <StatusBadge status={systemStatus.database?.connected || false} label="Database" />
            </div>
          </div>
        )}

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total de Emails" value={stats.totalEmails} icon={<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} delay={0} />
            <StatCard title="Alta Prioridade" value={stats.highPriority} icon={<svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>} delay={100} />
            <StatCard title="Média Prioridade" value={stats.mediumPriority} icon={<svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>} delay={200} />
            <StatCard title="SMS Enviados" value={stats.smsSent} icon={<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} delay={300} />
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-fadeIn">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Emails Recentes</h2>
          {emails.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-400">Nenhum email processado ainda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emails.slice(0, 6).map((email, index) => (
                <EmailCard key={email.messageId || index} email={email} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


