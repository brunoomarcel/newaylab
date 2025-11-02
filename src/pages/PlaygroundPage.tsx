import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Playground from '../components/Playground';
import { businessIdentities, BusinessIdentity } from '../services/geminiService';

const PlaygroundPage: React.FC = () => {
  const { businessId } = useParams<{ businessId: string }>();
  const navigate = useNavigate();
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessIdentity | null>(null);

  useEffect(() => {
    // Scroll para o topo da página quando carregar
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (businessId) {
      const business = businessIdentities.find(b => b.id === businessId);
      if (business) {
        setSelectedBusiness(business);
      } else {
        // Se o ID não for encontrado, redireciona para demonstração
        navigate('/demonstracao');
      }
    } else {
      // Se não há ID, redireciona para demonstração
      navigate('/demonstracao');
    }
  }, [businessId, navigate]);

  const handleBackToDemo = () => {
    navigate('/demonstracao');
  };

  if (!selectedBusiness) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-slate-300">Carregando playground...</p>
        </div>
      </div>
    );
  }

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
              <span className="font-medium">Voltar para Demonstração</span>
            </button>
            
            <div className="text-center flex-1">
              <h1 className="text-xl font-bold text-white">
                Playground - {selectedBusiness.name}
              </h1>
              <p className="text-sm text-slate-400">{selectedBusiness.type}</p>
            </div>
            
            <div className="w-32"></div> {/* Spacer para centralizar o título */}
          </div>
        </div>
      </div>

      {/* Playground Component */}
      <div className="container mx-auto px-4 py-6">
        <Playground 
          selectedBusiness={selectedBusiness}
          onBack={handleBackToDemo}
          onSelectBusiness={setSelectedBusiness}
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default PlaygroundPage;
