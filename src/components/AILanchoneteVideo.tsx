import { useState, useEffect, useMemo } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const AILanchoneteVideo = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const scenes = useMemo(() => [
    {
      id: 0,
      title: "O Problema",
      duration: 10,
      content: {
        visual: "Cliente tentando ligar para lanchonete",
        narration: "Imagine: é sexta-feira à noite, você quer pedir um lanche, mas ninguém atende o telefone da lanchonete...",
        illustration: "📞❌"
      }
    },
    {
      id: 1,
      title: "Solução IA",
      duration: 10,
      content: {
        visual: "Cliente usando WhatsApp",
        narration: "Com nossa IA, o atendimento acontece na hora, 24 horas por dia!",
        illustration: "💬🤖"
      }
    },
    {
      id: 2,
      title: "Sistema Salvando",
      duration: 10,
      content: {
        visual: "Pedido sendo salvo automaticamente",
        narration: "Cada pedido é salvo automaticamente. Nada se perde!",
        illustration: "💾✅"
      }
    },
    {
      id: 3,
      title: "Estatísticas",
      duration: 15,
      content: {
        visual: "Dashboard com gráficos",
        narration: "A IA descobre o que seus clientes mais gostam e quando mais compram",
        illustration: "📊📈"
      }
    },
    {
      id: 4,
      title: "Relatórios",
      duration: 10,
      content: {
        visual: "Dono recebendo relatório",
        narration: "Relatórios automáticos mostram seus resultados e ajudam nas decisões",
        illustration: "📱📋"
      }
    },
    {
      id: 5,
      title: "Benefícios",
      duration: 5,
      content: {
        visual: "Cliente e dono satisfeitos",
        narration: "Cliente satisfeito, vendas organizadas, mais tempo para você!",
        illustration: "😊🎯"
      }
    }
  ], []);

  const totalDuration = scenes.reduce((acc, scene) => acc + scene.duration, 0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / totalDuration);
        
        if (newProgress >= 100) {
          setIsPlaying(false);
          return 100;
        }

        // Calculate which scene should be active based on progress
        let accumulatedTime = 0;
        for (let i = 0; i < scenes.length; i++) {
          accumulatedTime += scenes[i].duration;
          if (newProgress <= (accumulatedTime / totalDuration) * 100) {
            setCurrentScene(i);
            break;
          }
        }

        return newProgress;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, scenes, totalDuration]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetVideo = () => {
    setIsPlaying(false);
    setCurrentScene(0);
    setProgress(0);
  };

  const chatExamples = [
    {
      scene: 1,
      messages: [
        { type: 'customer', text: 'Oi, quero um X-Bacon' },
        { type: 'ai', text: 'Olá! Temos X-Bacon por R$ 15. Quer adicionar batata frita? 🍟' },
        { type: 'customer', text: 'Sim! E uma Coca-Cola' },
        { type: 'ai', text: 'Perfeito! X-Bacon + Batata + Coca = R$ 22. Qual seu endereço?' }
      ]
    }
  ];

  const systemData = {
    scene: 2,
    order: {
      id: '#1847',
      customer: 'João Silva',
      items: ['X-Bacon', 'Batata Frita', 'Coca-Cola'],
      total: 'R$ 22,00',
      time: '19:45'
    }
  };

  const statistics = {
    scene: 3,
    data: [
      { product: 'X-Bacon', sales: 150, percentage: 35 },
      { product: 'X-Tudo', sales: 120, percentage: 28 },
      { product: 'Coca-Cola', sales: 89, percentage: 21 },
      { product: 'Batata Frita', sales: 67, percentage: 16 }
    ]
  };

  const currentSceneData = scenes[currentScene];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700/50">
      {/* Video Header */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="flex items-center justify-between">
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg px-3 py-2">
            <h3 className="text-white text-sm font-medium">IA para Lanchonetes</h3>
            <p className="text-slate-400 text-xs">Como funciona na prática</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={resetVideo}
              className="w-8 h-8 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-slate-700/80 transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Scene Content */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-2xl">
          {/* Scene Illustration */}
          <div className="text-6xl mb-4 animate-bounce">
            {currentSceneData.content.illustration}
          </div>

          {/* Scene Title */}
          <h2 className="text-2xl font-bold text-white mb-4">
            {currentSceneData.title}
          </h2>

          {/* Scene Content Based on Current Scene */}
          {currentScene === 1 && (
            <div className="bg-slate-800/50 rounded-lg p-4 space-y-3">
              {chatExamples[0].messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'customer' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.type === 'customer'
                        ? 'bg-cyan-500 text-white'
                        : 'bg-emerald-500 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentScene === 2 && (
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-slate-300">
                  <span className="text-slate-500">Pedido:</span> {systemData.order.id}
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500">Cliente:</span> {systemData.order.customer}
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500">Total:</span> {systemData.order.total}
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500">Horário:</span> {systemData.order.time}
                </div>
              </div>
            </div>
          )}

          {currentScene === 3 && (
            <div className="bg-slate-800/50 rounded-lg p-4 space-y-3">
              {statistics.data.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">{item.product}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{item.sales}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentScene === 4 && (
            <div className="bg-slate-800/50 rounded-lg p-4">
              <div className="text-center space-y-2">
                <div className="text-emerald-400 text-2xl font-bold">R$ 3.500</div>
                <div className="text-slate-300 text-sm">Vendas esta semana</div>
                <div className="text-cyan-400 text-sm">X-Bacon é o campeão! 🏆</div>
              </div>
            </div>
          )}

          {/* Narration */}
          <p className="text-slate-300 text-base leading-relaxed">
            {currentSceneData.content.narration}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700/50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Scene Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2">
          {scenes.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentScene
                  ? 'bg-cyan-400 scale-125'
                  : index < currentScene
                  ? 'bg-emerald-400'
                  : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AILanchoneteVideo;
