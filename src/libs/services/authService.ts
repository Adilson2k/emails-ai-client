import { login as apiLogin, register as apiRegister, logout as apiLogout } from '@/libs/auth';

export async function signIn(email: string, password: string) {
  return apiLogin(email, password);
}

export async function signUp(name: string, email: string, password: string) {
  return apiRegister({ name, email, password });
}

export function signOut() {
  apiLogout();
}

export default { signIn, signUp, signOut };
