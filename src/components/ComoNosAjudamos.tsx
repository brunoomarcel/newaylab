import { useEffect, useState } from 'react';
import { Zap, Bot, TrendingUp, Cpu, Database, ArrowRight } from 'lucide-react';

const ComoNosAjudamos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    const section = document.querySelector('#como-nos-ajudamos');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const beneficios = [
    {
      icon: Bot,
      title: 'Automação de Processos com IA',
      subtitle: 'Elimine tarefas repetitivas e multiplique produtividade',
      description: 'Implementamos sistemas de IA que processam linguagem natural, executam decisões automáticas e aprendem continuamente.',
      // technicalDetails: [
      //   'NLP (Natural Language Processing) para compreensão contextual',
      //   'Integração com APIs REST, GraphQL e Webhooks',
      //   'Machine Learning para otimização contínua',
      //   'RPA (Robotic Process Automation) para tarefas estruturadas'
      // ],
      resultado: 'Redução de 70-85% no tempo operacional',
      gradient: 'from-cyan-500 to-[#5539ff]'
    },
    {
      icon: Database,
      title: 'Integração e Sincronização de Dados',
      subtitle: 'Conecte todos os seus sistemas em tempo real',
      description: 'Criamos pipelines de dados robustos que sincronizam informações entre CRM, ERPs, plataformas de e-commerce, sistemas de pagamento e bancos de dados.',
      technicalDetails: [
        'Orquestração via n8n, Zapier e Make.com',
        'APIs customizadas com autenticação OAuth 2.0',
        'Sincronização bidirecional em tempo real',
        'Tratamento de erros e retry automático'
      ],
      resultado: '99.9% de precisão na sincronização',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Análise Preditiva e Inteligência de Negócios',
      subtitle: 'Transforme dados em decisões estratégicas',
      description: 'Desenvolvemos dashboards de ponta com relatórios de históricos, preveem demandas, identificam oportunidades de vendas e geram insights para tomadas de decisão.',
      technicalDetails: [
        'Algoritmos de Machine Learning para previsão',
        'Processamento de big data em tempo real',
        'Dashboards interativos com atualização automática',
        'Alertas inteligentes baseados em thresholds dinâmicos'
      ],
      resultado: 'Aumento de 40-60% na taxa de conversão',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section
      id="como-nos-ajudamos"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Nossas Soluções
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Como nós{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-[#5539ff] bg-clip-text text-transparent">
              Ajudamos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Transformamos seu negócio através de automações inteligentes e IA avançada.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => {
            const IconComponent = beneficio.icon;
            return (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${beneficio.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {beneficio.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {beneficio.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {beneficio.description}
                </p>

                {/* Technical Details */}
                <div className="mb-6 space-y-2">
                  {/* {beneficio.technicalDetails.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <Cpu className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {detail}
                      </span>
                    </div>
                  ))} */}
                </div>

                {/* Result Badge */}
                <div className={`mt-6 pt-6 border-t border-slate-700/50`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Resultado Mensurável
                      </p>
                      <p className={`text-lg font-bold bg-gradient-to-r ${beneficio.gradient} bg-clip-text text-transparent`} style={{ fontFamily: 'Inter, sans-serif' }}>
                        {beneficio.resultado}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-cyan-400`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComoNosAjudamos;

