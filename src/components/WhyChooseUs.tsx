import { useEffect, useState } from 'react';
import { Zap, Star, Users, Shield, Target, Trophy } from 'lucide-react';

const WhyChooseUs = () => {
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

    const section = document.querySelector('#why-choose-us');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: Zap,
      title: 'Redução de Custos',
      description: 'Diminua até 70% dos custos operacionais automatizando processos repetitivos com IA',
      highlight: '-70%',
      gradient: 'from-cyan-400 to-[#5539ff]'
    },
    {
      icon: Target,
      title: 'Aumento de Produtividade',
      description: 'Equipes focam em tarefas estratégicas enquanto a IA cuida das operações',
      highlight: '+3x',
      gradient: 'from-cyan-400 to-[#5539ff]'
    },
    {
      icon: Trophy,
      title: 'Previsibilidade',
      description: 'Análise de dados em tempo real para decisões baseadas em inteligência',
      highlight: 'Real-time',
      gradient: 'from-cyan-400 to-[#5539ff]'
    },
    {
      icon: Shield,
      title: 'Disponibilidade 24/7',
      description: 'Sistemas de IA funcionam continuamente sem pausas ou limitações',
      highlight: '24/7',
      gradient: 'from-cyan-400 to-[#5539ff]'
    },
    {
      icon: Users,
      title: 'Implementação Completa',
      description: 'Da análise à implantação, cuidamos de todo o processo de automação',
      highlight: 'Full',
      gradient: 'from-cyan-400 to-[#5539ff]'
    },
    {
      icon: Star,
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos as IAs mais avançadas: GPT-4, Claude, Gemini e ferramentas modernas',
      highlight: 'AI+',
      gradient: 'from-cyan-400 to-[#5539ff]'
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Benefícios Reais
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Por que implementar{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-[#5539ff] bg-clip-text text-transparent">
              IA e Automação
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Resultados mensuráveis e transformação real no seu negócio
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-xs px-3 py-1 bg-gradient-to-r ${reason.gradient} text-white rounded-full font-semibold`}>
                  {reason.highlight}
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-slate-700/50 border border-slate-600/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-gray-300" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {reason.description}
              </p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-[#5539ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* <p className="text-lg text-slate-300 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Descubra como a IA pode transformar seu negócio
          </p> */}
          <button
            onClick={() => {
              const element = document.querySelector('#schedule-meeting');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-[#5539ff] text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Agendar Consultoria Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
