import { useEffect, useState } from 'react';

const Security = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, itemIndex]);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = document.querySelectorAll('.security-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const securityFeatures = [
    {
      title: 'Dados Protegidos',
      description: 'Mesma tecnologia usada por bancos',
    },
    {
      title: 'Privacidade Garantida',
      description: 'Seguimos leis de proteção de dados',
    },
    {
      title: 'Sempre Disponível',
      description: 'Sistema 24 horas por dia',
    },
    {
      title: 'Controle Total',
      description: 'Você vê tudo que acontece',
    }
  ];

  return (
    <section className="pt-0 md:pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Segurança</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Seus Dados em Mãos Seguras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Segurança empresarial, simples de usar
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`security-item text-center p-8 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-white transition-all duration-500 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms`, fontFamily: 'Inter, sans-serif' }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
