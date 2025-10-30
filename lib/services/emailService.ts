import { api } from '../api';

export interface EmailAnalysis {
  importance: 'alta' | 'média' | 'baixa';
  summary: string;
  confidence: number;
  keywords: string[];
}

export interface ProcessedEmail {
  _id?: string;
  messageId: string;
  from: string;
  to: string;
  subject: string;
  date: string;
  content: string;
  analysis: EmailAnalysis;
  smsSent: boolean;
  processedAt: string;
}

export interface EmailStats {
  _id?: string;
  date: string;
  totalEmails: number;
  highPriority: number;
  mediumPriority: number;
  lowPriority: number;
  smsSent: number;
}

export interface GeneralStats {
  totalEmails: number;
  highPriority: number;
  mediumPriority: number;
  lowPriority: number;
  smsSent: number;
  uniqueSenders: number;
}
// --- Fim das Interfaces ---

export const emailService = {
  /**
   * Obtém todos os e-mails processados.
   */
  async getEmails(): Promise<ProcessedEmail[]> {
    const response = await api.get('/emails');
    return response.data;
  },

  /**
   * Obtém um e-mail processado por ID.
   */
  async getEmail(id: string): Promise<ProcessedEmail> {
    const response = await api.get(`/emails/${id}`);
    return response.data;
  },

  /**
   * Obtém estatísticas diárias.
   * @param days - Número de dias para buscar as estatísticas (default 7).
   */
  async getStats(days: number = 7): Promise<EmailStats[]> {
    const response = await api.get(`/emails/stats`, {
        params: { days } // Axios lida com parâmetros de query automaticamente
    });
    return response.data;
  },

  /**
   * Obtém estatísticas gerais (totais).
   */
  async getGeneralStats(): Promise<GeneralStats> {
    const response = await api.get('/emails/general-stats');
    return response.data;
  },

  /**
   * Envia dados de e-mail para serem processados pela AI.
   * @param emailData - Dados do e-mail (subject, content, from).
   */
  async processEmail(emailData: {
    subject: string;
    content: string;
    from: string;
  }): Promise<{ message: string }> {
    // Axios envia o 'emailData' como JSON automaticamente
    const response = await api.post('/process-email', emailData);
    return response.data;
  },
};