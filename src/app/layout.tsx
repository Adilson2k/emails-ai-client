// Observação: este arquivo foi consolidado para evitar declaração duplicada
// do identificador `Layout`. Mantemos o componente `Layout` importado de
// `src/components/Layout.tsx` e `RootLayout` como wrapper de rota (fonts,
// ErrorBoundary e estrutura raiz). Isso evita o erro "Identifier 'Layout' has
// already been declared" durante a compilação.
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Email AI Dashboard',
  description: 'Sistema inteligente de análise de emails',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}

