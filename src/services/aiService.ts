// Serviço para integração com APIs de IA
// Este arquivo pode ser facilmente modificado para usar diferentes provedores

export interface AIProvider {
  sendMessage(message: string, context?: string): Promise<string>;
}

// Implementação para Google Gemini (gratuita)
export class GeminiProvider implements AIProvider {
  private apiKey: string;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async sendMessage(message: string, context?: string): Promise<string> {
    const systemContext = context || `
Você é um assistente virtual da empresa Jyze Delivery, especializada em soluções de otimização e automação para empresas.

Informações sobre a empresa:
- Nome: Jyze Delivery
- Especialidade: Transformação digital, automação de processos, soluções de IA
- Benefícios: Aumento de 40% na produtividade, redução de 60% nos custos operacionais
- Serviços: Análise de processos, implementação de sistemas automatizados, consultoria estratégica
- Diferencial: Resultados exponenciais e soluções personalizadas

Responda de forma amigável, profissional e sempre direcionando para os benefícios da Jyze Delivery.
Mantenha as respostas concisas (máximo 100 palavras) e sempre ofereça ajuda adicional.
`;

    try {
      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${systemContext}\n\nUsuário: ${message}`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Erro na API do Gemini');
      }

      const data = await response.json();
      return data.candidates[0]?.content?.parts[0]?.text || 'Desculpe, não consegui processar sua mensagem.';
    } catch (error) {
      console.error('Erro ao comunicar com Gemini:', error);
      throw error;
    }
  }
}

// Implementação para OpenAI (alternativa)
export class OpenAIProvider implements AIProvider {
  private apiKey: string;
  private baseUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async sendMessage(message: string, context?: string): Promise<string> {
    const systemContext = context || `
Você é um assistente virtual do Jyze Delivery, empresa de soluções de otimização e automação.
Responda de forma profissional e amigável sobre nossos serviços.
`;

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemContext },
            { role: 'user', content: message }
          ],
          max_tokens: 150,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('Erro na API do OpenAI');
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem.';
    } catch (error) {
      console.error('Erro ao comunicar com OpenAI:', error);
      throw error;
    }
  }
}

// Implementação simulada para desenvolvimento/demonstração
export class MockAIProvider implements AIProvider {
  async sendMessage(message: string): Promise<string> {
    // Simula delay da API
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const lowerMessage = message.toLowerCase();
    
    // Respostas contextuais sobre o Jyze Delivery
    const responses = {
      greeting: [
        "Olá! Bem-vindo ao Jyze Delivery! 👋 Como posso ajudá-lo hoje?",
        "Oi! Sou o assistente virtual do Jyze Delivery. Em que posso ser útil?",
        "Olá! Estou aqui para ajudar com qualquer dúvida sobre nossos serviços!"
      ],
      services: [
        "O Jyze Delivery oferece soluções de otimização e automação para empresas. Nossos serviços incluem análise de processos, implementação de sistemas automatizados e consultoria estratégica. 🚀",
        "Especializamo-nos em transformação digital, automação de processos e soluções de IA para maximizar a eficiência do seu negócio. 💡",
        "Oferecemos consultoria em tecnologia, desenvolvimento de sistemas personalizados e implementação de soluções de inteligência artificial. ⚡"
      ],
      benefits: [
        "Com o Jyze Delivery, você pode esperar: aumento de 40% na produtividade, redução de 60% nos custos operacionais e automação completa de processos manuais. 📈",
        "Nossos clientes obtêm resultados exponenciais: maior eficiência, redução significativa de custos e processos mais automatizados. 🎯",
        "Os benefícios incluem: otimização completa de workflows, economia de tempo e recursos, e maior competitividade no mercado. 💪"
      ],
      contact: [
        "Você pode nos contatar através do nosso site, email ou telefone. Também oferecemos demonstrações gratuitas! 📞",
        "Entre em contato conosco para uma consulta gratuita! Temos especialistas prontos para analisar suas necessidades. 💬",
        "Agende uma demonstração gratuita e descubra como podemos transformar seu negócio! 🎉"
      ],
      pricing: [
        "Nossos preços são competitivos e personalizados conforme suas necessidades. Oferecemos consulta gratuita para avaliar seu projeto! 💰",
        "Trabalhamos com diferentes planos e pacotes adaptados ao tamanho da sua empresa. Vamos conversar sobre suas necessidades? 💼"
      ],
      demo: [
        "Perfeito! Agende uma demonstração gratuita e veja na prática como nossas soluções podem transformar seu negócio. Entre em contato conosco! 🎯",
        "Excelente ideia! Nossa demonstração mostra resultados reais em tempo real. Quando podemos agendar? 📅"
      ],
      default: [
        "Interessante pergunta! Para oferecer a melhor resposta, recomendo que você entre em contato com nossos especialistas. 🤝",
        "Obrigado pela pergunta! Nossa equipe de consultores pode fornecer informações mais detalhadas sobre esse tópico. 👨‍💼",
        "Essa é uma excelente questão! Gostaria de agendar uma conversa com nossos especialistas para discutir isso em detalhes? 📋"
      ]
    };

    // Detecção de intenções
    if (lowerMessage.match(/ol[aá]|oi|bom dia|boa tarde|boa noite|hey/)) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    } else if (lowerMessage.match(/servi[çc]o|oferecem|fazem|o que|especialidade|trabalho/)) {
      return responses.services[Math.floor(Math.random() * responses.services.length)];
    } else if (lowerMessage.match(/benef[íi]cio|vantagem|resultado|melhoria|economia|produtividade/)) {
      return responses.benefits[Math.floor(Math.random() * responses.benefits.length)];
    } else if (lowerMessage.match(/contato|telefone|email|falar|conversar/)) {
      return responses.contact[Math.floor(Math.random() * responses.contact.length)];
    } else if (lowerMessage.match(/pre[çc]o|valor|custo|or[çc]amento|quanto/)) {
      return responses.pricing[Math.floor(Math.random() * responses.pricing.length)];
    } else if (lowerMessage.match(/demonstra[çc][ãa]o|demo|mostrar|ver|exemplo/)) {
      return responses.demo[Math.floor(Math.random() * responses.demo.length)];
    } else {
      return responses.default[Math.floor(Math.random() * responses.default.length)];
    }
  }
}

// Factory para criar o provedor adequado
export class AIProviderFactory {
  static createProvider(type: 'gemini' | 'openai' | 'mock', apiKey?: string): AIProvider {
    switch (type) {
      case 'gemini':
        if (!apiKey) throw new Error('API Key é necessária para Gemini');
        return new GeminiProvider(apiKey);
      case 'openai':
        if (!apiKey) throw new Error('API Key é necessária para OpenAI');
        return new OpenAIProvider(apiKey);
      case 'mock':
      default:
        return new MockAIProvider();
    }
  }
}

// Configuração da API - altere aqui para usar sua API de preferência
export const aiConfig = {
  provider: 'mock' as 'gemini' | 'openai' | 'mock',
  apiKey: '', // Adicione sua API key aqui quando for usar um provedor real
};

// Para usar o Gemini (gratuito), descomente e adicione sua API key:
// export const aiConfig = {
//   provider: 'gemini' as const,
//   apiKey: 'SUA_API_KEY_DO_GEMINI_AQUI',
// };

export default AIProviderFactory;
