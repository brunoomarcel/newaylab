import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

  // Função para abrir Calendly
  const openCalendly = () => {
    // Substitua com seu link do Calendly quando disponível
    window.open('https://calendly.com/newaylab', '_blank');
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d1117] pt-24">
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
        <div className="mb-24">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight max-w-5xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
            Automatize seu negócio com Inteligência Artificial
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-14 max-w-3xl font-normal leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Reduzimos custos operacionais, aumentamos produtividade e trazemos previsibilidade através de IA e automações inteligentes.
            Implementação completa de sistemas personalizados para seu negócio.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0d1117] bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Agendar Consultoria Gratuita
            </button>

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-transparent border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-white/5 transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Falar no WhatsApp
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Demo Video/Interface Mockup - Exatamente como Laravel Cloud */}
        <div className="relative w-full">
          {/* Browser mockup */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#1c2128] border border-gray-800/50">
            {/* Browser bar */}
            <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-gray-800/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-[#0d1117] rounded text-gray-500 text-sm font-mono">
                  newaylab.com.br
                </div>
              </div>
            </div>

            {/* Content area - placeholder for video */}
            <div className="relative aspect-video bg-gradient-to-br from-[#1c2128] to-[#0d1117]">
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <svg className="w-10 h-10 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/50 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Ver demonstração</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
