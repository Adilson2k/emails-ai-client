'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, clearToken } from '@/libs/auth';
import { api } from '@/libs/api';

export interface User {
  id: string;
  email: string;
  name?: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = getToken();
      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        return;
      }

      // Verifica se o token é válido fazendo uma requisição
      try {
        const response = await api.get('/me');
        // O backend retorna o user diretamente, não dentro de { user }
        if (response.data && (response.data.email || response.data._id)) {
          setUser({
            id: response.data._id || response.data.id,
            email: response.data.email,
            name: response.data.name
          });
          setIsAuthenticated(true);
        } else {
          throw new Error('Token inválido');
        }
      } catch (error) {
        // Token inválido, limpa e redireciona
        clearToken();
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearToken();
    setUser(null);
    setIsAuthenticated(false);
    router.push('/');
  };

  return {
    user,
    isAuthenticated,
    loading,
    logout,
    checkAuth
  };
}

