import { useEffect, useState } from 'react';

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "5533997001663";
    const message = encodeURIComponent("Olá! Quero agendar uma consultoria gratuita sobre Automação e IA para meu negócio.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Função para abrir Calendly
  const openCalendly = () => {
    window.open('https://calendly.com/newaylab', '_blank');
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    'Consultoria 100% gratuita',
    'Sem compromisso',
    'Diagnóstico personalizado'
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Pronto para Automatizar?
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Agende uma consultoria gratuita e descubra o potencial de IA no seu negócio
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a0e27] font-semibold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Agendar Consultoria
            </button>

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white/20 font-semibold text-lg rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Falar no WhatsApp
            </button>
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
