import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { businessIdentities } from '../services/geminiService';

const PersonalidadesPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Scroll para o topo da página quando carregar
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToDemo = () => {
    navigate('/demonstracao');
  };

  const handleSelectBusiness = (businessId: string) => {
    navigate(`/playground/${businessId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header da página */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToDemo}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Voltar</span>
            </button>
            
            <div className="text-center flex-1">
              <h1 className="text-xl font-bold text-white">
                Escolha uma Personalidade
              </h1>
              <p className="text-sm text-slate-400">
                {businessIdentities.length} opções disponíveis
              </p>
            </div>
            
            <div className="w-20"></div> {/* Spacer para centralizar o título */}
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Descrição */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              🤖 Selecione um Tipo de Negócio
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Cada personalidade é especializada em um setor específico. Escolha a que mais se parece com seu negócio!
            </p>
          </div>

          {/* Grid de Personalidades */}
          <div className="grid gap-4">
            {businessIdentities.map((business, index) => (
              <div
                key={business.id}
                onClick={() => handleSelectBusiness(business.id)}
                className={`bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-cyan-500/50 group ${
                  isVisible ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  {/* Ícone */}
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${business.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 overflow-hidden p-5`}>
                    <img src={business.icon} alt={business.name} className="w-12 h-12 object-contain border border-white/30 rounded-lg bg-white/20 p-1" />
                  </div>
                  
                  {/* Informações */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {business.name}
                    </h3>
                    <p className="text-sm text-cyan-400 mb-2 font-medium">
                      {business.type}
                    </p>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {business.description}
                    </p>
                  </div>
                  
                  {/* Botão */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rodapé */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-lg font-bold mb-2">💡 Dica</h3>
              <p className="text-slate-300">
                Não encontrou o seu setor? Escolha o que mais se aproxima do seu negócio. 
                Nossos chatbots são avançados e se adaptam ao contexto da conversa!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default PersonalidadesPage;
