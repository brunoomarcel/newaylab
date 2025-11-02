import { useState, useEffect } from 'react';
import { Cookie, Shield, Music, Zap } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-2xl max-w-2xl w-full mx-4 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 p-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 rounded-xl">
              <Cookie className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">🍪 Política de Cookies & Privacidade</h3>
              <p className="text-slate-300 text-sm">Para uma experiência musical inteligente</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Nosso site utiliza cookies e tecnologias avançadas para oferecer uma experiência musical personalizada e inteligente. 
            Ao aceitar, você permite:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Cookies essenciais */}
            <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="font-semibold text-green-400">Cookies Essenciais</span>
              </div>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Funcionamento básico do site</li>
                <li>• Preferências de volume</li>
                <li>• Configurações de interface</li>
              </ul>
            </div>

            {/* Funcionalidades avançadas */}
            <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
              <div className="flex items-center gap-2 mb-2">
                <Music className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-cyan-400">Sistema Musical Inteligente</span>
              </div>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Detecção de música ambiente</li>
                <li>• Matching de gêneros musicais</li>
                <li>• Personalização de playlist</li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="font-semibold text-purple-400">Análise de Performance</span>
              </div>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Melhorar experiência do usuário</li>
                <li>• Otimizar sistema de IA</li>
                <li>• Estatísticas anônimas</li>
              </ul>
            </div>

            {/* Acesso a microfone */}
            <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                <span className="font-semibold text-orange-400">Acesso ao Microfone</span>
              </div>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Detectar música ambiente (opcional)</li>
                <li>• Análise de características musicais</li>
                <li>• Não gravamos nem armazenamos áudio</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-amber-400 rounded-full flex-shrink-0 mt-0.5"></div>
              <div>
                <h4 className="font-semibold text-amber-400 mb-1">⚡ Funcionalidade Especial</h4>
                <p className="text-sm text-slate-300">
                  Nosso sistema revolucionário detecta a música tocando no seu dispositivo e sugere faixas similares 
                  em nossa biblioteca livre de direitos autorais. É como ter um DJ virtual que entende seu gosto!
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Você pode alterar suas preferências a qualquer momento. Não compartilhamos dados pessoais com terceiros.
            Para mais informações, consulte nossa <span className="text-cyan-400 underline cursor-pointer">Política de Privacidade</span>.
          </p>
        </div>

        {/* Actions */}
        <div className="p-6 border-t border-slate-700/50 bg-slate-800/50">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptCookies}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              🎵 Aceitar & Ativar Sistema Musical
            </button>
            
            <button
              onClick={rejectCookies}
              className="sm:w-auto bg-slate-600 hover:bg-slate-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500/50"
            >
              Usar Versão Básica
            </button>
          </div>
          
          <p className="text-xs text-slate-400 mt-3 text-center">
            Ao aceitar, você libera todo o potencial do nosso sistema de IA musical! 🎧✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
