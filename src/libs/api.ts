import axios from 'axios';
// Configuração da API (copiado de lib/api.ts)
//const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
const API_BASE_URL =  'http://localhost:4000';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
import { getToken } from './auth';

// Interceptor para anexar o token JWT nas requisições quando disponível
api.interceptors.request.use(
  (config) => {
    try {
      const token = getToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      // noop
    }
    return config;
  },
  (error) => Promise.reject(error)
);

