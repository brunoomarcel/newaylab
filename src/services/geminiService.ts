// Interface para mensagens do chat
export interface ChatMessage {
  id?: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

// Interface para identidades de negócio
export interface BusinessIdentity {
  id: string;
  name: string;
  type: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  systemPrompt: string;
}

export const businessIdentities: BusinessIdentity[] = [
  {
    id: 'tech',
    name: 'TechSolutions Pro',
    type: 'Tecnologia',
    description: 'Transformamos ideias em soluções digitais',
    icon: '/favicon.svg?v=1',
    color: 'from-slate-700 to-slate-800',
    bgColor: 'bg-slate-50',
    systemPrompt: `Atendente da TechSolutions Pro. Sites R$ 2.500-8.000, Apps R$ 15.000-50.000, SEO R$ 1.500/mês. Pergunte objetivo, orçamento e prazo. Seja direto e focado em resultados.`
  },
  {
    id: 'lanchonete',
    name: 'Sabor da Casa',
    type: 'Alimentação',
    description: 'Comida caseira com o tempero especial',
    icon: '/logos/restaurante.jpeg?v=1',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    systemPrompt: `Atendente Sabor da Casa. Hambúrguer Especial R$ 15,90, X-Tudo R$ 18,90, Prato Feito R$ 12,90. Delivery (33) 99899-5551. Seja caloroso e pergunte se quer fazer pedido.`
  },
  {
    id: 'farmacia',
    name: 'Farmácia Vida e Saúde',
    type: 'Saúde',
    description: 'Medicamentos e produtos de saúde',
    icon: '/logos/farmacia.jpg?v=1',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-green-50',
    systemPrompt: `Atendente Farmácia Vida e Saúde. Medicamentos R$ 8-25, Delivery grátis +R$ 50. Para controlados exija receita. Seja profissional e cuidadoso.`
  },
  {
    id: 'hamburgueria',
    name: 'Burger House Premium',
    type: 'Alimentação Gourmet',
    description: 'Hambúrgueres artesanais premium',
    icon: '/logos/modelo-de-logotipo-de-hamburguer_476121-29.avif?v=1',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-50',
    systemPrompt: `Atendente Burger House Premium. Classic R$ 32, BBQ Bacon R$ 38, Truffle R$ 42. Destaque ingredientes premium e sugira combos. Seja entusiasmado.`
  },
  {
    id: 'petshop',
    name: 'Pet Care Center',
    type: 'Pet Shop',
    description: 'Tudo para seu melhor amigo',
    icon: '/logos/petshop.jpg?v=1',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    systemPrompt: `Atendente Pet Care Center. Ração R$ 150-180, Banho R$ 40-80. Pergunte espécie, raça e idade. Seja carinhoso mas objetivo.`
  },
  {
    id: 'pizzaria',
    name: 'Nonna\'s Pizzaria',
    type: 'Alimentação Italiana',
    description: 'Pizzas tradicionais da vovó italiana',
    icon: '/logos/pizzaria.jpg?v=1',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    systemPrompt: `Atendente Nonna's Pizzaria. Margherita R$ 35, Quattro Formaggi R$ 48. Use "Mamma mia!", "Bellissimo!". Fale da nonna italiana. Seja caloroso.`
  },
  {
    id: 'academia',
    name: 'Fit Life Academia',
    type: 'Fitness e Saúde',
    description: 'Sua jornada fitness começa aqui',
    icon: '/logos/academia.jpg?v=1',
    color: 'from-gray-700 to-gray-800',
    bgColor: 'bg-gray-50',
    systemPrompt: `Atendente Fit Life Academia. Básico R$ 89, Completo R$ 139, Premium R$ 189. Pergunte objetivos fitness. Seja motivador e energético.`
  },
  {
    id: 'salao',
    name: 'Beauty Studio Glamour',
    type: 'Beleza e Estética',
    description: 'Realce sua beleza natural',
    icon: '/logos/Beauty Studio Glamour.jpg?v=1',
    color: 'from-pink-600 to-rose-700',
    bgColor: 'bg-pink-50',
    systemPrompt: `Atendente Beauty Studio Glamour. Corte R$ 45, Coloração R$ 120-200, Manicure R$ 25. Sugira combinações para ocasiões especiais. Seja elegante.`
  },
  {
    id: 'autoescola',
    name: 'Auto Escola Direção Segura',
    type: 'Educação no Trânsito',
    description: 'Sua CNH com segurança e qualidade',
    icon: '/favicon.svg?v=1',
    color: 'from-slate-700 to-slate-800',
    bgColor: 'bg-slate-50',
    systemPrompt: `Atendente Auto Escola Direção Segura. Categoria A R$ 1.200, B R$ 1.500. 95% aprovação primeira tentativa. Enfatize segurança e qualidade.`
  },
  {
    id: 'consultorio',
    name: 'Clínica Médica São Lucas',
    type: 'Saúde e Medicina',
    description: 'Cuidando da sua saúde com excelência',
    icon: '/logos/clinica.avif?v=1',
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-50',
    systemPrompt: `Atendente Clínica São Lucas. Clínico R$ 150, Cardiologista R$ 200, Exames variados. Agendamento obrigatório. Demonstre preocupação com bem-estar.`
  },
  {
    id: 'loja-roupas',
    name: 'Moda & Estilo Boutique',
    type: 'Moda e Vestuário',
    description: 'Vista-se com estilo e personalidade',
    icon: '/logos/moda e boutique.avif?v=1',
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-50',
    systemPrompt: `Atendente Moda & Estilo Boutique. Vestidos R$ 89-159, Camisas R$ 89-149. Pergunte ocasião de uso. Sugira combinações e tendências atuais.`
  },
  {
    id: 'escola-idiomas',
    name: 'Global Language Center',
    type: 'Educação e Idiomas',
    description: 'Aprenda idiias e abra portas para o mundo',
    icon: '/logos/global language.avif?v=1',
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'bg-blue-50',
    systemPrompt: `Atendente Global Language Center. Inglês R$ 180-250/mês, Espanhol R$ 170-190/mês. Pergunte objetivo (viagem, trabalho). Motive sobre oportunidades.`
  }
];

class GeminiService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = 'AIzaSyCVwsxsuYEwRfAAeIkg0VKnvq7CJxyFeJA';
    this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
  }

  async sendMessage(message: string, businessId: string, conversationHistory: ChatMessage[] = []): Promise<string> {
    try {
      const business = businessIdentities.find(b => b.id === businessId);
      if (!business) {
        throw new Error(`Business ${businessId} não encontrado`);
      }

      // Preparar mensagens para o contexto
      const messages = [
        {
          role: 'user',
          parts: [{ text: business.systemPrompt }]
        }
      ];

      // Adicionar histórico da conversa
      conversationHistory.forEach(msg => {
        messages.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        });
      });

      // Adicionar mensagem atual
      messages.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: messages,
          generationConfig: {
            temperature: 0.7,
            topK: 1,
            topP: 1,
            maxOutputTokens: 512,
          },
          safetySettings: [
            {
              category: 'HARM_CATEGORY_HARASSMENT',
              threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            },
            {
              category: 'HARM_CATEGORY_HATE_SPEECH',
              threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            },
            {
              category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
              threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            },
            {
              category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
              threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Resposta inválida da API');
      }
    } catch (error) {
      console.error('Erro ao chamar Gemini API:', error);
      
      // Fallback para resposta padrão
      const business = businessIdentities.find(b => b.id === businessId);
      return `Olá! Sou o atendente virtual da ${business?.name || 'nossa empresa'}. Como posso ajudá-lo hoje? 😊`;
    }
  }
}

export const geminiService = new GeminiService();
