# 📧 Email AI Dashboard

Dashboard moderno e responsivo para visualizar e gerenciar o sistema de análise inteligente de emails.

## 🚀 Características

- ✅ **Interface Amigável**: Design limpo e intuitivo
- ✅ **Animações Suaves**: Transições fluidas e elegantes
- ✅ **Tempo Real**: Atualização automática a cada 30 segundos
- ✅ **Responsivo**: Funciona em desktop, tablet e mobile
- ✅ **Modo Escuro**: Suporte automático para tema escuro
- ✅ **Status em Tempo Real**: Monitoramento dos serviços

## 📦 Tecnologias

- **Next.js 16**: Framework React com App Router
- **React 19**: Biblioteca UI
- **TypeScript**: Tipagem estática
- **Tailwind CSS v4**: Estilização moderna
- **CSS Custom**: Animações personalizadas

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 📁 Estrutura do Projeto

```
emails-ai-client/
├── app/
│   ├── globals.css          # Estilos globais com animações
│   ├── layout.tsx           # Layout raiz
│   └── page.tsx             # Dashboard principal
├── components/
│   ├── StatCard.tsx         # Card de estatística
│   ├── StatusBadge.tsx      # Badge de status
│   └── EmailCard.tsx        # Card de email
├── lib/
│   ├── api.ts               # Configuração da API
│   └── services/
│       ├── emailService.ts  # Serviços de email
│       └── statusService.ts # Serviços de status
└── package.json
```

## 🎨 Animações Implementadas

- **fadeIn**: Aparição suave dos elementos
- **slideIn**: Deslizamento lateral
- **pulse**: Pulso sutil para status ativos
- **spin**: Rotação suave para loading
- **transition-smooth**: Transições suaves

## 📊 Funcionalidades

### Dashboard Principal
- Visão geral do sistema
- Status dos serviços em tempo real
- Estatísticas principais (Total, Alta, Média, SMS)
- Emails recentes processados
- Atualização automática

### Cards de Estatística
- Total de emails processados
- Emails de alta prioridade
- Emails de média prioridade
- SMS enviados

### Status do Sistema
- Email Listener (Ativo/Inativo)
- Gemini AI (Online/Offline)
- SMS Service (Online/Offline)
- Database (Conectado/Desconectado)

### Emails Recentes
- Lista dos últimos emails processados
- Indicador de importância (Alta/Média/Baixa)
- Confiança da análise
- Status de SMS enviado

## ⚙️ Configuração

Configure a URL da API no arquivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 🎯 Próximas Funcionalidades

- [ ] Página de detalhes do email
- [ ] Filtros e busca avançada
- [ ] Gráficos de tendências
- [ ] Exportação de relatórios
- [ ] Configurações do sistema
- [ ] Histórico completo de emails

## 📝 Notas

- O dashboard atualiza automaticamente a cada 30 segundos
- Suporta modo escuro automático baseado na preferência do sistema
- Todas as animações são otimizadas para performance
- Interface totalmente responsiva

---

Desenvolvido por Laboratório Softhard 🏢
