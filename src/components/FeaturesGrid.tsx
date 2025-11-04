import { useEffect, useState, useRef } from 'react';

const FeaturesGrid = () => {
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

  const features = [
    {
      title: 'Atendimento Automático',
      description: 'Chatbots inteligentes que entendem contexto e respondem como humanos.',
      stat: 'IA Avançada',
      gradient: 'from-blue-100 to-cyan-100',
      textGradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Empresa Funcionando Sempre',
      description: 'Processos repetitivos rodando sem intervenção humana.',
      stat: '24/7',
      gradient: 'from-purple-100 to-pink-100',
      textGradient: 'from-purple-600 to-pink-600',
    },
    // {
    //   title: 'Análise Preditiva',
    //   description: 'IA prevê tendências e gera insights estratégicos.',
    //   stat: 'Real-time',
    //   gradient: 'from-orange-100 to-red-100',
    //   textGradient: 'from-orange-600 to-red-600',
    // },
    {
      title: 'Integração Multi-plataforma',
      description: 'Conecte todos os sistemas.',
      stat: 'APIs',
      gradient: 'from-green-100 to-emerald-100',
      textGradient: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Scrapping de Dados',
      description: 'Coleta automatizada de dados de concorrência e busca de leads de forma automática.',
      stat: 'Auto',
      gradient: 'from-indigo-100 to-blue-100',
      textGradient: 'from-indigo-600 to-blue-600',
    },
    {
      title: 'Suporte Técnico',
      description: 'Equipe especializada disponível para atender.',
      stat: 'Incluso',
      gradient: 'from-teal-100 to-cyan-100',
      textGradient: 'from-teal-600 to-cyan-600',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tecnologias Avançadas
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
            Recursos de IA e Automação
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Ferramentas inteligentes que transformam operações e geram resultados
          </p>
        </div>

        {/* Bento Grid - Layout Assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 - Grande (2 colunas, 2 linhas) */}
          <div
            className={`lg:col-span-2 lg:row-span-2 group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-gray-300 hover:shadow-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {features[0].title}
                </h3>
                <p className="text-gray-600 text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {features[0].description}
                </p>
              </div>

              {/* Stat */}
              <div className={`inline-flex self-start items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r ${features[0].gradient} border-2 border-gray-200`}>
                <span className={`font-bold text-3xl bg-gradient-to-r ${features[0].textGradient} bg-clip-text text-transparent`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  {features[0].stat}
                </span>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${features[0].textGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
          </div>

          {/* Card 2 - Médio (2 colunas, 1 linha) */}
          <div
            className={`lg:col-span-2 group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-gray-300 hover:shadow-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative z-10 flex items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {features[1].title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {features[1].description}
                </p>
              </div>

              <div className={`text-5xl font-bold bg-gradient-to-r ${features[1].textGradient} bg-clip-text text-transparent`} style={{ fontFamily: 'Inter, sans-serif' }}>
                {features[1].stat}
              </div>
            </div>

            <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${features[1].textGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
          </div>

          {/* Card 3 - Médio (2 colunas, 1 linha) */}
          <div
            className={`lg:col-span-2 group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-gray-300 hover:shadow-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative z-10 flex items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {features[2].title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {features[2].description}
                </p>
              </div>

              <div className={`text-5xl font-bold bg-gradient-to-r ${features[2].textGradient} bg-clip-text text-transparent`} style={{ fontFamily: 'Inter, sans-serif' }}>
                {features[2].stat}
              </div>
            </div>

            <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${features[2].textGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
          </div>

          {/* Cards 4, 5, 6 - Pequenos (1 coluna cada) */}
          {features.slice(3).map((feature, index) => (
            <div
              key={index + 3}
              className={`group relative bg-white rounded-3xl p-6 border-2 border-gray-200 hover:border-gray-300 hover:shadow-2xl overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.description}
                </p>

                <div className={`inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r ${feature.gradient} border-2 border-gray-200`}>
                  <span className={`text-sm font-bold bg-gradient-to-r ${feature.textGradient} bg-clip-text text-transparent`} style={{ fontFamily: 'Inter, sans-serif' }}>
                    {feature.stat}
                  </span>
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.textGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
