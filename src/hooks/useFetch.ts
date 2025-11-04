'use client';

import { useState } from 'react';
import { api } from '@/libs/api';

export function useFetch<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function get(path: string, params?: any) {
    try {
      setLoading(true);
      setError(null);
      const resp = await api.get<T>(path, { params });
      return resp.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function post(path: string, body?: any) {
    try {
      setLoading(true);
      setError(null);
      const resp = await api.post<T>(path, body);
      return resp.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { get, post, loading, error };
}
