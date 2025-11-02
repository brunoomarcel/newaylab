// Configurações do Chat Widget
export const chatConfig = {
  // Informações da empresa
  company: {
    name: 'Jyze Delivery',
    tagline: 'Assistente Virtual',
    logo: 'Zap', // Nome do ícone do Lucide React
    email: 'contato@jyzedelivery.com',
    phone: '(11) 99999-9999',
    website: 'https://jyzedelivery.com'
  },

  // Configurações de aparência
  appearance: {
    position: 'right', // 'left' ou 'right'
    primaryColor: 'from-cyan-500 to-emerald-500',
    primaryColorHover: 'from-cyan-600 to-emerald-600',
    secondaryColor: 'text-cyan-400',
    theme: 'light' // 'light' ou 'dark'
  },

  // Mensagens padrão
  messages: {
    welcome: 'Olá! Bem-vindo ao Jyze Delivery! 👋 Sou seu assistente virtual e estou aqui para ajudar com qualquer dúvida sobre nossos serviços. Como posso ajudá-lo hoje?',
    offline: 'No momento estamos offline, mas você pode deixar sua mensagem que retornaremos em breve!',
    error: 'Desculpe, ocorreu um erro. Tente novamente em alguns instantes.',
    typing: 'Digitando...',
    tooltip: 'Precisa de ajuda?'
  },

  // Configurações de comportamento
  behavior: {
    autoOpen: false, // Abrir automaticamente após X segundos
    autoOpenDelay: 5000, // Delay em milissegundos
    showUnreadIndicator: true,
    persistHistory: true, // Manter histórico durante a sessão
    requireUserInfo: false, // Exigir info do usuário antes de começar
    maxMessages: 100 // Limite de mensagens no histórico
  },

  // Configurações da IA
  ai: {
    provider: 'mock', // 'gemini', 'openai', 'mock'
    apiKey: '', // Sua API key
    maxTokens: 150,
    temperature: 0.7,
    context: `
Você é um assistente virtual da empresa Jyze Delivery, especializada em soluções de otimização e automação para empresas.

Informações sobre a empresa:
- Nome: Jyze Delivery
- Especialidade: Transformação digital, automação de processos, soluções de IA
- Benefícios: Aumento de 40% na produtividade, redução de 60% nos custos operacionais
- Serviços: Análise de processos, implementação de sistemas automatizados, consultoria estratégica
- Diferencial: Resultados exponenciais e soluções personalizadas

Responda de forma amigável, profissional e sempre direcionando para os benefícios do Jyze Delivery.
Mantenha as respostas concisas (máximo 100 palavras) e sempre ofereça ajuda adicional.
Use emojis quando apropriado para tornar a conversa mais amigável.
`
  }
};

export default chatConfig;
