// Helpers de autenticação (mock inicial).
// Não ativa NextAuth aqui — apenas funções utilitárias para integração futura.

import { api } from './api';

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
}

export function setToken(token: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('auth_token', token);
}

export function clearToken() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('auth_token');
}

// Auth service helpers that call backend endpoints
export async function login(email: string, password: string) {
  const resp = await api.post('/auth/login', { email, password });
  // assume backend returns { token, user }
  const data = resp.data;
  if (data?.token) setToken(data.token);
  return data;
}

export async function register(payload: { name: string; email: string; password: string }) {
  const resp = await api.post('/auth/register', payload);
  const data = resp.data;
  if (data?.token) setToken(data.token);
  return data;
}

export function logout() {
  clearToken();
}
