"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import authService from '@/libs/services/authService';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await authService.signUp(name, email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Erro no registro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black p-4">
      <Card className="w-full max-w-md p-8">
        <div className="mb-6 text-center">
          <Link href="/" className="text-2xl font-extrabold text-gray-900 dark:text-white">Email AI</Link>
          <p className="text-sm text-gray-500 mt-1">Crie sua conta</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nome</label>
            <Input value={name} onChange={(e: any) => setName(e.target.value)} placeholder="Seu nome" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <Input value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="seu@email.com" type="email" />
          </div>
          <div>
            <label className="block text-sm mb-1">Senha</label>
            <Input value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="Crie uma senha" type="password" />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button disabled={loading} className="w-full">{loading ? 'Criando...' : 'Criar conta'}</Button>
        </form>
        <p className="text-sm text-gray-500 mt-6 text-center">
          Já tem conta? <Link href="/auth/login" className="text-blue-600 hover:underline">Entrar</Link>
        </p>
      </Card>
    </div>
  );
}


