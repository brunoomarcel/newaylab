import { useEffect, useState } from 'react';
import { Brain, MessageSquare, Database, Plug, Mail, BarChart3 } from 'lucide-react';

const UseCases = () => {
  const [visibleCases, setVisibleCases] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const caseIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCases(prev => [...prev, caseIndex]);
          }
        });
      },
      { threshold: 0.15 }
    );

    const cases = document.querySelectorAll('.use-case-card');
    cases.forEach((caseEl) => observer.observe(caseEl));

    return () => observer.disconnect();
  }, []);

  const useCases = [
    {
      icon: Brain,
      title: 'Sistemas de IA Personalizados',
      description: 'Implementação completa de soluções de inteligência artificial adaptadas ao seu negócio.',
    },
    {
      icon: MessageSquare,
      title: 'Automação WhatsApp & CRM',
      description: 'Chatbots inteligentes, disparos em massa e automação completa de atendimento.',
    },
    {
      icon: Database,
      title: 'Scraping & Análise de Dados',
      description: 'Coleta automatizada de dados, análise preditiva e relatórios inteligentes.',
    },
    {
      icon: Plug,
      title: 'Integração de Plataformas',
      description: 'APIs, n8n e diversas ferramentas para conectar todos os seus sistemas automaticamente.',
    },
    {
      icon: Mail,
      title: 'E-mail Marketing Automatizado',
      description: 'Campanhas inteligentes de disparo e funil de email com personalização por IA.',
    },
    {
      icon: BarChart3,
      title: 'Dashboards & Relatórios',
      description: 'Visualização de dados em tempo real com insights gerados por inteligência artificial.',
    }
  ];

  return (
    <section id="solucoes-ia-automacao" className="relative pt-32 pb-0 md:pb-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Serviços Especializados
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
            Soluções de IA e Automação
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Implementamos tecnologia que reduz custos, aumenta eficiência e escala seu negócio
          </p>
        </div>

        {/* Cards Grid - Ultra Minimalista */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`use-case-card group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-500 ${
                  visibleCases.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-[#5539ff] rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  {useCase.description}
                </p>

                {/* Bottom line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
