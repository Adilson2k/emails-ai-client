import { api } from '../api';

export interface ServiceStatus {
  running: boolean;
  connected: boolean;
  retryCount: number;
}

export interface SystemStatus {
  imap?: {
    connected: boolean;
    configured: boolean;
  };
  gemini?: {
    connected: boolean;
    configured: boolean;
  };
  sms?: {
    configured: boolean;
    numbers: string[];
  };
  database?: {
    connected: boolean;
    state: string;
  };
  listener?: ServiceStatus;
  emailListener?: ServiceStatus;
}

export interface EmailBoxStats {
  totalMessages: number;
  unreadMessages: number;
}

export const statusService = {
  /**
   * Realiza um health check simples na API.
   * Retorna um status indicando que o serviço está operacional.
   */
  async getHealth(): Promise<{ status: string }> {
    const response = await api.get('/health');
    return response.data;
  },

  /**
   * Obtém o status detalhado dos serviços do sistema.
   */
  async getStatus(): Promise<SystemStatus> {
    const response = await api.get('/status');
    return response.data;
  },

  /**
   * Obtém estatísticas da caixa de entrada de e-mail (IMAP).
   */
  async getStats(): Promise<EmailBoxStats> {
    const response = await api.get('/stats');
    return response.data;
  },

  /**
   * Envia comando para iniciar o listener de e-mails.
   */
  async startListener(): Promise<{ message: string }> {
    // Para requisições POST sem corpo, o Axios é mais limpo que o fetch
    const response = await api.post('/listener/start');
    return response.data;
  },

  /**
   * Envia comando para parar o listener de e-mails.
   */
  async stopListener(): Promise<{ message: string }> {
    const response = await api.post('/listener/stop');
    return response.data;
  },

  /**
   * Testa o serviço de envio de SMS.
   */
  async testSMS(): Promise<{ message: string }> {
    const response = await api.post('/test-sms');
    return response.data;
  },
};