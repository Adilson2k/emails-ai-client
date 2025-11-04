"use client";

import { useEffect, useMemo, useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { settingsService } from '@/libs/services/settingsService';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [locale, setLocale] = useState('pt-BR');
  const [timezone, setTimezone] = useState('America/Sao_Paulo');
  const [notifyCritical, setNotifyCritical] = useState(true);
  const [notifyDaily, setNotifyDaily] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [saving, setSaving] = useState(false);

  // IMAP settings state
  const [imapEmail, setImapEmail] = useState('');
  const [imapPassword, setImapPassword] = useState('');
  const [imapHost, setImapHost] = useState('');
  const [imapPort, setImapPort] = useState<number | ''>('');
  const [encryption, setEncryption] = useState<'ssl' | 'none'>('ssl');
  const [imapLoading, setImapLoading] = useState(false);
  const [imapSaving, setImapSaving] = useState(false);
  const [imapMessage, setImapMessage] = useState<string | null>(null);

  // Suggest default ports based on encryption selection
  const suggestedPort = useMemo(() => (encryption === 'ssl' ? 993 : 143), [encryption]);

  useEffect(() => {
    // If user hasn't typed a port yet, or it matches previous suggestion, auto-fill suggestion
    setImapPort((prev) => (prev === '' || prev === 993 || prev === 143 ? suggestedPort : prev));
  }, [suggestedPort]);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        setImapLoading(true);
        const resp = await settingsService.getMySettings();
        if (resp?.settings) {
          setImapEmail(resp.settings.imapEmail || '');
          setImapHost(resp.settings.imapHost || '');
          setImapPort(resp.settings.imapPort ?? '');
          // We do not receive the decrypted password; require user to re-enter when changing
          setImapPassword('');
          // Infer encryption from port if present
          if (resp.settings.imapPort === 993) setEncryption('ssl');
          if (resp.settings.imapPort === 143) setEncryption('none');
        }
      } catch (e) {
        // ignore; backend may return 404 with setup_required
      } finally {
        setImapLoading(false);
      }
    };
    loadSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => setSaving(false), 800);
  };

  const handleSaveImap = async (e: React.FormEvent) => {
    e.preventDefault();
    setImapMessage(null);
    setImapSaving(true);
    try {
      const payload = {
        imapEmail,
        imapPassword,
        imapHost,
        imapPort: Number(imapPort || suggestedPort),
        useGmailOAuth: false,
      };
      const resp = await settingsService.saveSettings(payload);
      setImapMessage(resp?.message || 'Configurações salvas com sucesso');
      // Clear password after save for security
      setImapPassword('');
    } catch (err: any) {
      setImapMessage('Falha ao salvar configurações');
    } finally {
      setImapSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Configurações da Conta</h1>

      <Card className="p-6">
        <h2 className="font-semibold mb-4">Perfil</h2>
        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Nome</label>
            <Input value={name} onChange={(e: any) => setName(e.target.value)} placeholder="Seu nome" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <Input value={email} onChange={(e: any) => setEmail(e.target.value)} type="email" placeholder="email@empresa.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Telefone</label>
            <Input value={phone} onChange={(e: any) => setPhone(e.target.value)} placeholder="(11) 99999-9999" />
          </div>
          <div>
            <label className="block text-sm mb-1">Empresa</label>
            <Input value={company} onChange={(e: any) => setCompany(e.target.value)} placeholder="Nome da empresa" />
          </div>
          <div>
            <label className="block text-sm mb-1">Localidade</label>
            <Input value={locale} onChange={(e: any) => setLocale(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm mb-1">Fuso horário</label>
            <Input value={timezone} onChange={(e: any) => setTimezone(e.target.value)} />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <Button disabled={saving}>{saving ? 'Salvando...' : 'Salvar perfil'}</Button>
          </div>
        </form>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold mb-4">Notificações</h2>
        <div className="space-y-3">
          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" checked={notifyCritical} onChange={(e) => setNotifyCritical(e.target.checked)} />
            Alertas críticos por email
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input type="checkbox" checked={notifyDaily} onChange={(e) => setNotifyDaily(e.target.checked)} />
            Resumo diário
          </label>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold mb-4">Senha</h2>
        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Senha atual</label>
            <Input value={currentPassword} onChange={(e: any) => setCurrentPassword(e.target.value)} type="password" />
          </div>
          <div>
            <label className="block text-sm mb-1">Nova senha</label>
            <Input value={newPassword} onChange={(e: any) => setNewPassword(e.target.value)} type="password" />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <Button disabled={saving}>{saving ? 'Atualizando...' : 'Atualizar senha'}</Button>
          </div>
        </form>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold mb-2">Credenciais de Email (IMAP)</h2>
        <p className="text-sm text-gray-500 mb-4">Configure as credenciais da caixa que será monitorada.</p>
        <form onSubmit={handleSaveImap} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Email da caixa</label>
            <Input value={imapEmail} onChange={(e: any) => setImapEmail(e.target.value)} type="email" placeholder="caixa@empresa.com" disabled={imapLoading} />
          </div>
          <div>
            <label className="block text-sm mb-1">Senha de app</label>
            <Input value={imapPassword} onChange={(e: any) => setImapPassword(e.target.value)} type="password" placeholder="••••••••" disabled={imapLoading} />
          </div>
          <div>
            <label className="block text-sm mb-1">Servidor IMAP (host)</label>
            <Input value={imapHost} onChange={(e: any) => setImapHost(e.target.value)} placeholder="imap.mail.com" disabled={imapLoading} />
          </div>
          <div>
            <label className="block text-sm mb-1">Porta</label>
            <Input value={imapPort as any} onChange={(e: any) => setImapPort(e.target.value ? Number(e.target.value) : '')} type="number" placeholder={String(suggestedPort)} disabled={imapLoading} />
          </div>
          <div>
            <label className="block text-sm mb-1">Segurança</label>
            <select
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm"
              value={encryption}
              onChange={(e) => setEncryption(e.target.value as 'ssl' | 'none')}
              disabled={imapLoading}
            >
              <option value="ssl">SSL/TLS (recomendado)</option>
              <option value="none">Sem criptografia/STARTTLS</option>
            </select>
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <span className="text-xs text-gray-500">Porta sugerida: {suggestedPort}</span>
            <Button disabled={imapSaving || imapLoading}>{imapSaving ? 'Salvando...' : 'Salvar credenciais'}</Button>
          </div>
          {imapMessage && (
            <div className="md:col-span-2 text-sm text-gray-600 dark:text-gray-300">{imapMessage}</div>
          )}
        </form>
      </Card>
    </div>
  );
}


