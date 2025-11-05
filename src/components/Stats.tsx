import { useEffect, useState, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: '-70%',
      label: 'Redução de Custos',
      description: 'Média de economia operacional com automação'
    },
    {
      value: '3x',
      label: 'Mais Produtividade',
      description: 'Aumento médio em eficiência das equipes'
    },
    {
      value: '24/7',
      label: 'IA Trabalhando',
      description: 'Sistemas funcionando ininterruptamente'
    },
    {
      value: '30d',
      label: 'Implementação',
      description: 'Média de tempo até resultados reais'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d1117] to-[#161b22] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Impacto Mensurável
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Resultados Reais com IA
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Números que comprovam o poder da automação inteligente
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative bg-[#1c2128] border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-[#5539ff]/0 group-hover:from-cyan-500/10 group-hover:to-[#5539ff]/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Value */}
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3 bg-gradient-to-r from-cyan-400 to-[#5539ff] bg-clip-text text-transparent" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-[#5539ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '600ms' }}>
          <button
            onClick={() => {
              const element = document.querySelector('#schedule-meeting');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0d1117] bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Agendar Consultoria Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
