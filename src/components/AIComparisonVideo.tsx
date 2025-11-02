import { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, User, Bot, Phone, MessageSquare, Clock, Zap, Pause, Play } from 'lucide-react';

const AIComparisonVideo = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCurrentScene(0);
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isPaused) return;

    const interval = setInterval(() => {
      setCurrentScene(prev => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div 
      ref={videoRef}
      className="relative w-full h-64 sm:h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden group border border-slate-700/50"
    >
      {/* Scroll to Start Overlay */}
      {!isVisible && (
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-30">
          <div className="text-center space-y-2 sm:space-y-4 px-4">
            <div className="text-white text-xl sm:text-2xl">📺</div>
            <div className="text-slate-300 text-xs sm:text-sm">Role para baixo para ver a demonstração</div>
            <div className="text-slate-500 text-xs">IA vs Atendimento Manual</div>
          </div>
        </div>
      )}

      {/* Main Video Content */}
      <div className="relative w-full h-full flex">
        
        {/* Left Side - Manual/Traditional */}
        <div className="w-1/2 relative bg-gradient-to-br from-red-900/20 to-orange-900/20 border-r border-slate-700/50">
          
          {/* Header */}
          <div className="absolute top-3 sm:top-6 left-2 sm:left-4 right-2 sm:right-4 text-center">
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-red-400 font-medium text-xs sm:text-sm">
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Atendimento Manual</span>
            </div>
          </div>

          {/* Person Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`transition-all duration-1000 ${
              currentScene === 1 || currentScene === 3 ? 'animate-pulse scale-110' : ''
            }`}>
              <div className="relative">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-red-500/20 rounded-full flex items-center justify-center border border-red-400/30">
                  <User className="w-5 h-5 sm:w-8 sm:h-8 text-red-400" />
                </div>
                
                {/* Stress indicators during problem scenes */}
                {(currentScene === 1 || currentScene === 3) && (
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 animate-bounce">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Phone/Messages */}
          <div className="absolute bottom-8 sm:bottom-16 left-2 sm:left-4 right-2 sm:right-4">
            <div className="space-y-1 sm:space-y-2">
              {currentScene >= 1 && (
                <div className="flex items-center gap-1 sm:gap-2 text-red-300 text-[10px] sm:text-xs animate-fadeIn">
                  <Phone className="w-2 h-2 sm:w-3 sm:h-3" />
                  <span>Ligações acumulando...</span>
                </div>
              )}
              {currentScene >= 2 && (
                <div className="flex items-center gap-1 sm:gap-2 text-red-300 text-[10px] sm:text-xs animate-fadeIn">
                  <Clock className="w-2 h-2 sm:w-3 sm:h-3" />
                  <span>Clientes esperando 15min</span>
                </div>
              )}
            </div>
          </div>

          {/* Problems indicators */}
          {currentScene === 1 && (
            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
              <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-2 sm:p-4 backdrop-blur-sm animate-fadeIn">
                <div className="text-center text-red-400 text-[9px] sm:text-xs space-y-1">
                  <div>❌ Horário limitado</div>
                  <div>❌ Apenas 1 cliente por vez</div>
                  <div>❌ Respostas demoradas</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side - AI/Automated */}
        <div className="w-1/2 relative bg-gradient-to-br from-emerald-900/20 to-cyan-900/20">
          
          {/* Header */}
          <div className="absolute top-3 sm:top-6 left-2 sm:left-4 right-2 sm:right-4 text-center">
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-emerald-400 font-medium text-xs sm:text-sm">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>IA Jyze Delivery</span>
            </div>
          </div>

          {/* AI Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`transition-all duration-1000 ${
              currentScene >= 1 ? 'animate-pulse scale-110' : ''
            }`}>
              <div className="relative">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-400/30">
                  <Bot className="w-5 h-5 sm:w-8 sm:h-8 text-emerald-400" />
                </div>
                
                {/* Success indicators */}
                {currentScene >= 2 && (
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 animate-bounce">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* AI Messages */}
          <div className="absolute bottom-8 sm:bottom-16 left-2 sm:left-4 right-2 sm:right-4">
            <div className="space-y-1 sm:space-y-2">
              {currentScene >= 2 && (
                <div className="flex items-center gap-1 sm:gap-2 text-emerald-300 text-[10px] sm:text-xs animate-fadeIn">
                  <MessageSquare className="w-2 h-2 sm:w-3 sm:h-3" />
                  <span>Atendendo múltiplos clientes</span>
                </div>
              )}
              {currentScene >= 3 && (
                <div className="flex items-center gap-1 sm:gap-2 text-emerald-300 text-[10px] sm:text-xs animate-fadeIn">
                  <Zap className="w-2 h-2 sm:w-3 sm:h-3" />
                  <span>Respostas instantâneas</span>
                </div>
              )}
            </div>
          </div>

          {/* Benefits indicators */}
          {currentScene === 4 && (
            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
              <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-2 sm:p-4 backdrop-blur-sm animate-fadeIn">
                <div className="text-center text-emerald-400 text-[9px] sm:text-xs space-y-1">
                  <div>✅ 24/7 disponível</div>
                  <div>✅ Múltiplos clientes</div>
                  <div>✅ Respostas imediatas</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700/50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-2000 ease-out"
          style={{ width: `${((currentScene + 1) / 6) * 100}%` }}
        />
      </div>

      {/* Discrete Pause Button */}
      {isVisible && (
        <button
          onClick={togglePause}
          className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center opacity-30 hover:opacity-100 transition-all duration-300 z-20"
          title={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? (
            <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          ) : (
            <Pause className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          )}
        </button>
      )}
    </div>
  );
};

export default AIComparisonVideo;
