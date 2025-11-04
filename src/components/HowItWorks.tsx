import { useEffect, useState } from 'react';

const HowItWorks = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Analisamos seu negócio e identificamos oportunidades de automação e IA',
    },
    {
      number: '02',
      title: 'Estratégia',
      description: 'Criamos um plano personalizado de implementação',
    },
    {
      number: '03',
      title: 'Implementação',
      description: 'Desenvolvemos, testamos e colocamos as soluções em produção',
    },
    {
      number: '04',
      title: 'Suporte',
      description: 'Acompanhamos resultados e otimizamos continuamente',
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Nossa Metodologia</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Processo estruturado da consultoria até os resultados mensuráveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card text-center p-10 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-500 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 150}ms`, fontFamily: 'Inter, sans-serif' }}
            >
              {/* Number */}
              <div className="text-6xl font-bold text-gray-400 mb-6">
                {feature.number}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
