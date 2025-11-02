import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send, User, RotateCcw, X } from 'lucide-react';
import { BusinessIdentity, businessIdentities, geminiService } from '../services/geminiService';

interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface PlaygroundProps {
  selectedBusiness: BusinessIdentity;
  onBack: () => void;
  onSelectBusiness: (business: BusinessIdentity) => void;
}

const Playground: React.FC<PlaygroundProps> = ({ selectedBusiness, onBack, onSelectBusiness }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBusinessSelector, setShowBusinessSelector] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Mensagem inicial quando trocar de negócio
    const welcomeMessage: ChatMessage = {
      id: Date.now().toString(),
      content: `Olá! Sou o atendente virtual da ${selectedBusiness.name}. Como posso ajudá-lo hoje? 😊`,
      role: 'assistant',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [selectedBusiness]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await geminiService.sendMessage(inputMessage, selectedBusiness.id, messages);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao gerar resposta:', error);
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: 'Desculpe, ocorreu um erro. Tente novamente em alguns instantes.',
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBusinessSelect = (business: BusinessIdentity) => {
    onSelectBusiness(business);
    setShowBusinessSelector(false);
  };

  // Scroll para cima quando o componente carregar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="h-[70vh] md:min-h-screen md:h-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col overflow-hidden md:overflow-auto">
      {/* Header com informações do negócio */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 p-2 md:p-4 flex-shrink-0">
        {/* Linha superior: Voltar para demonstração */}
        <div className="flex items-center justify-between mb-1.5 md:mb-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 md:gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-slate-700/50 px-1.5 md:px-2 py-0.5 md:py-1"
          >
            <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm">Voltar para demonstração</span>
          </button>
          
          {/* Status online */}
          <div className="flex items-center gap-0.5 md:gap-1 text-emerald-400">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs">Online</span>
          </div>
        </div>
        
        {/* Linha inferior: Nome do chat com logo */}
        <div className="flex items-center gap-1.5 md:gap-3">
          <div className={`w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-r ${selectedBusiness.color} flex items-center justify-center shadow-lg overflow-hidden p-1 md:p-2 flex-shrink-0`}>
            <img src={selectedBusiness.icon} alt={selectedBusiness.name} className="w-4 h-4 md:w-6 md:h-6 object-contain border border-white/20 rounded-lg bg-white/10 p-0.5" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h2 className="text-xs md:text-base font-bold text-white truncate">{selectedBusiness.name}</h2>
            <p className="text-xs text-slate-400 truncate hidden md:block">{selectedBusiness.description}</p>
          </div>
          
          {/* Botão trocar personalidade - apenas mobile */}
          <button
            onClick={() => setShowBusinessSelector(true)}
            className="md:hidden p-1 text-slate-400 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-slate-700/50"
            title="Trocar personalidade"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Área de mensagens */}
      <div className="flex-1 overflow-y-auto p-2 md:p-4 min-h-0">
        <div className="max-w-2xl mx-auto space-y-2 md:space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 md:gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {/* Avatar */}
              <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === 'user' 
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' 
                  : `bg-gradient-to-r ${selectedBusiness.color}`
              }`}>
                {message.role === 'user' ? (
                  <User className="w-3 h-3 md:w-4 md:h-4 text-white" />
                ) : (
                  <img src={selectedBusiness.icon} alt={selectedBusiness.name} className="w-4 h-4 md:w-5 md:h-5 object-contain border border-white/20 rounded bg-white/10 p-0.5" />
                )}
              </div>

              {/* Mensagem */}
              <div className={`max-w-[70%] md:max-w-[75%] ${
                message.role === 'user' ? 'text-right' : 'text-left'
              }`}>
                <div className={`inline-block p-2 md:p-2.5 rounded-lg md:rounded-xl shadow-lg ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                    : 'bg-slate-700/80 text-slate-100 border border-slate-600/50'
                }`}>
                  <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
                <div className={`text-xs text-slate-400 mt-0.5 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}>
                  {new Date(message.timestamp).toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-1.5 md:gap-2">
              <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r ${selectedBusiness.color} flex items-center justify-center flex-shrink-0`}>
                <img src={selectedBusiness.icon} alt={selectedBusiness.name} className="w-4 h-4 md:w-5 md:h-5 object-contain border border-white/20 rounded bg-white/10 p-0.5" />
              </div>
              <div className="bg-slate-700/80 text-slate-100 border border-slate-600/50 p-2 md:p-2.5 rounded-lg md:rounded-xl shadow-lg">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Área de input */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700/50 p-2 md:p-4 flex-shrink-0">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-1.5 md:gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Converse com ${selectedBusiness.name}...`}
              className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-lg md:rounded-xl px-3 md:px-4 py-1.5 md:py-2.5 text-base md:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
              style={{ fontSize: '16px' }}
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 disabled:from-slate-600 disabled:to-slate-600 text-white p-1.5 md:p-2.5 rounded-lg md:rounded-xl transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center min-w-[2rem] md:min-w-[2.5rem]"
            >
              <Send className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de seleção de personalidade */}
      {showBusinessSelector && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-slate-800 rounded-xl md:rounded-2xl w-full max-w-sm md:max-w-2xl max-h-[80vh] overflow-hidden border border-slate-700/50">
            {/* Header do modal */}
            <div className="bg-slate-700/50 p-3 md:p-4 border-b border-slate-600/50">
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg font-bold text-white">Escolher Personalidade</h3>
                <button
                  onClick={() => setShowBusinessSelector(false)}
                  className="p-1 md:p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-600/50 transition-colors"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
            
            {/* Lista de personalidades */}
            <div className="p-3 md:p-4 max-h-96 overflow-y-auto">
              <div className="space-y-1.5 md:space-y-2">
                {businessIdentities.map((business) => (
                  <button
                    key={business.id}
                    onClick={() => handleBusinessSelect(business)}
                    className="w-full text-left p-2 md:p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 border border-transparent hover:border-slate-600/50"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${business.color} flex items-center justify-center shadow-lg overflow-hidden p-1`}>
                        <img src={business.icon} alt={business.name} className="w-6 h-6 object-contain border border-white/30 rounded bg-white/20 p-0.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-xs truncate">{business.name}</h4>
                        <p className="text-slate-400 text-xs truncate">{business.description}</p>
                      </div>
                      {business.id === selectedBusiness.id && (
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playground;
