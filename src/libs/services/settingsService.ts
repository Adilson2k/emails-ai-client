import { api } from '../api';

export interface UserImapSettings {
	imapEmail: string;
	imapPassword: string;
	imapHost: string;
	imapPort: number;
	useGmailOAuth?: boolean;
}

export interface GetMySettingsResponse {
	settings?: UserImapSettings & { userId?: string };
	message?: string;
	setup_required?: boolean;
}

export const settingsService = {
	async getMySettings(): Promise<GetMySettingsResponse> {
		const resp = await api.get('/settings/me');
		return resp.data as GetMySettingsResponse;
	},

	async saveSettings(payload: UserImapSettings): Promise<GetMySettingsResponse> {
		const resp = await api.post('/settings', payload);
		return resp.data as GetMySettingsResponse;
	},
};

export default settingsService;
