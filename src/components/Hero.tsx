import { useEffect, useState } from 'react';
import { Zap, Clock, Bot, TrendingDown, Rocket, Headphones } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "5533997001663";
    const message = encodeURIComponent("Olá! Quero agendar uma consultoria gratuita sobre Automação e IA para meu negócio.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Função para ir para seção de agendamento
  const goToSchedule = () => {
    const element = document.querySelector('#schedule-meeting');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    // Rastrear movimento do mouse para gradiente interativo
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d1117] pt-0 md:pt-24">
      {/* Gradiente Interativo - Segue o mouse */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, rgba(56, 189, 248, 0.15), rgba(59, 130, 246, 0.1) 40%, transparent 70%)`
        }}
      ></div>

      {/* Gradiente estático de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10"></div>

      {/* Gradiente adicional com blur */}
      <div
        className="absolute inset-0 opacity-20 blur-3xl transition-all duration-500"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.2) 50%, transparent 80%)`
        }}
      ></div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 py-24 transition-all duration-700 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Hero Content */}
        <div>
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight max-w-5xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
            Escale suas vendas com Automações & Inteligência Artificial
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-14 max-w-3xl font-normal leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Reduzimos custos operacionais e trazemos previsibilidade com a implementação de sistemas personalizados para seu negócio.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <AnimatedButton
              onClick={goToSchedule}
              variant="primary"
            >
              Agendar Consultoria Gratuita
            </AnimatedButton>

            <AnimatedButton
              onClick={openWhatsApp}
              variant="secondary"
            >
              Falar no WhatsApp
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </AnimatedButton>
          </div>

          {/* Benefits Marquee */}
          <div className="relative overflow-hidden border-t border-b border-gray-800/30 py-6">
            <div className="flex animate-marquee whitespace-nowrap">
              {/* Primeiro conjunto */}
              {[
                { icon: TrendingDown, text: 'Redução de Custos', color: 'text-gray-300' },
                { icon: Clock, text: 'Disponível 24/7', color: 'text-gray-300' },
                { icon: Bot, text: 'Automação Completa', color: 'text-gray-300' },
                { icon: Zap, text: 'IA Avançada', color: 'text-gray-300' },
                { icon: Rocket, text: 'Implementação Rápida', color: 'text-gray-300' },
                { icon: Headphones, text: 'Suporte Especializado', color: 'text-gray-300' },
              ].map((benefit, index) => (
                <div
                  key={`first-${index}`}
                  className="inline-flex items-center gap-3 mx-8 flex-shrink-0"
                >
                  <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                  <span className="text-gray-400 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {benefit.text}
                  </span>
                </div>
              ))}
              {/* Segundo conjunto (duplicado para looping suave) */}
              {[
                { icon: TrendingDown, text: 'Redução de Custos', color: 'text-gray-300' },
                { icon: Clock, text: 'Disponível 24/7', color: 'text-gray-300' },
                { icon: Bot, text: 'Automação Completa', color: 'text-gray-300' },
                { icon: Zap, text: 'IA Avançada', color: 'text-gray-300' },
                { icon: Rocket, text: 'Implementação Rápida', color: 'text-gray-300' },
                { icon: Headphones, text: 'Suporte Especializado', color: 'text-gray-300' },
              ].map((benefit, index) => (
                <div
                  key={`second-${index}`}
                  className="inline-flex items-center gap-3 mx-8 flex-shrink-0"
                >
                  <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                  <span className="text-gray-400 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
