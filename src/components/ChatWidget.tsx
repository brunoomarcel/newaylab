import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, User, MessageSquare, Sparkles, Bot, Loader2 } from 'lucide-react';
import { geminiService, type ChatMessage } from '../services/geminiService';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface UserInfo {
  name: string;
  email: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const [isMobileInputFocused, setIsMobileInputFocused] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens (disabled on mobile to prevent keyboard issues)
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      // Only auto-focus on larger screens
      const isMobile = window.innerWidth < 640;
      if (!isMobile) {
        inputRef.current.focus();
      }
    }
  }, [isOpen, isMinimized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Função para enviar mensagem para a IA
  const sendToAI = async (message: string): Promise<string> => {
    try {
      // Converter mensagens para o formato do Gemini
      const conversationHistory: ChatMessage[] = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text,
        timestamp: msg.timestamp
      }));
      
      return await geminiService.sendMessage(message, 'newaylab-ai-assistant', conversationHistory);
    } catch (error) {
      console.error('Erro na comunicação com IA:', error);
      throw new Error('Não foi possível processar sua mensagem no momento.');
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await sendToAI(inputMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      if (!isOpen || isMinimized) {
        setHasUnreadMessages(true);
      }
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Desculpe, ocorreu um erro. Tente novamente em alguns instantes.',
        sender: 'bot',
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

  const handleToggleChat = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
      setHasUnreadMessages(false);
      
      if (messages.length === 0) {
        const welcomeMessage: Message = {
          id: 'welcome',
          text: '🚀 Olá! Bem-vindo à NewayLab! Sou seu assistente especializado em Automação e Inteligência Artificial. Posso te ajudar a entender como IA pode reduzir custos, aumentar produtividade e escalar seu negócio. Como posso ajudar você hoje?',
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages([welcomeMessage]);
      }
    }
  };

  const handleUserFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setUserInfo(formData);
      setShowUserForm(false);
      
      const userInfoMessage: Message = {
        id: Date.now().toString(),
        text: `Obrigado, ${formData.name}! Suas informações foram salvas. Nossa equipe pode entrar em contato através do email ${formData.email} se necessário.`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userInfoMessage]);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={handleToggleChat}
          className={`group relative w-14 h-14 sm:w-16 sm:h-16 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 text-white rounded-2xl transition-all duration-500 transform hover:scale-110 hover:bg-slate-700/90`}
          aria-label="Abrir/fechar chat de atendimento"
        >
          {/* Icon Container */}
          <div className="relative flex items-center justify-center w-full h-full">
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
            <MessageSquare className="absolute top-1 right-1 w-3 h-3 text-emerald-400 opacity-80" />
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
          
          {/* Unread Messages Indicator */}
          {hasUnreadMessages && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
            <span className="text-cyan-300 font-semibold">Assistente IA</span>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-700/50"></div>
          </div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed transition-all duration-500 z-50 flex flex-col bg-slate-900/95 backdrop-blur-xl shadow-2xl border border-slate-700/50 ${
          isMinimized 
            ? 'bottom-20 sm:bottom-24 right-2 sm:right-6 h-16 w-80 sm:w-96 rounded-2xl' 
            : isMobileInputFocused 
              ? 'inset-0 sm:bottom-24 sm:top-auto sm:right-6 sm:left-auto sm:w-96 md:w-[440px] sm:h-[500px] rounded-none sm:rounded-3xl'
              : 'inset-x-2 bottom-20 top-20 sm:bottom-24 sm:top-auto sm:right-6 sm:left-auto sm:w-96 md:w-[440px] sm:h-[500px] rounded-3xl'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 text-white rounded-t-3xl">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Bot className="w-5 h-5" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-2xl"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">NewayLab</h3>
                <p className="text-sm opacity-90 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Assistente IA
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {!userInfo && (
                <button
                  onClick={() => setShowUserForm(true)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200"
                  title="Informações de contato"
                >
                  <User className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200"
                title="Minimizar"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* User Info Form */}
              {showUserForm && (
                <div className="p-4 border-b bg-slate-50">
                  <form onSubmit={handleUserFormSubmit} className="space-y-3">
                    <h4 className="font-semibold text-sm text-slate-700">Suas informações</h4>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-base focus:outline-none focus:border-cyan-500"
                      style={{ fontSize: '16px' }}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-base focus:outline-none focus:border-cyan-500"
                      style={{ fontSize: '16px' }}
                      required
                    />
                    <div className="flex space-x-2">
                      <button
                        type="submit"
                        className="flex-1 bg-cyan-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-cyan-600 transition-colors"
                      >
                        Salvar
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowUserForm(false)}
                        className="flex-1 bg-slate-300 text-slate-700 px-3 py-2 rounded-lg text-sm hover:bg-slate-400 transition-colors"
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                          : 'bg-slate-100 text-slate-800'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && (
                          <Bot className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-500" />
                        )}
                        <div className="flex-1">
                          <p>{message.text}</p>
                          <p className={`text-xs mt-1 opacity-70 ${
                            message.sender === 'user' ? 'text-white' : 'text-slate-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 px-3 py-2 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-cyan-500" />
                        <Loader2 className="w-4 h-4 animate-spin text-cyan-500" />
                        <span className="text-sm text-slate-600">Digitando...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Premium Input */}
              <div className="p-6 border-t border-slate-700/50 bg-slate-800/50 backdrop-blur-sm rounded-b-3xl">
                <div className="flex space-x-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onFocus={() => {
                      const isMobile = window.innerWidth < 640;
                      if (isMobile) setIsMobileInputFocused(true);
                    }}
                    onBlur={() => {
                      const isMobile = window.innerWidth < 640;
                      if (isMobile) setIsMobileInputFocused(false);
                    }}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 px-4 py-3 bg-white/90 backdrop-blur-sm border border-slate-300 rounded-2xl text-base text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/20 placeholder:text-slate-400 disabled:bg-slate-100 disabled:text-slate-600"
                    style={{ color: '#0f172a', backgroundColor: 'rgba(255, 255, 255, 0.9)', fontSize: '16px' }}
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white p-3 rounded-2xl hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                
                {userInfo && (
                  <p className="text-xs text-slate-500 mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Conectado como <span className="font-semibold text-cyan-600">{userInfo.name}</span> ({userInfo.email})
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget;
