import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MessageCircle, Target, Code, Shield, Rocket, 
  CheckCircle, Clock, Users, Zap, GitBranch, Database, Cloud, Smartphone, 
  Monitor, BarChart3, FileSearch, ArrowRight, Star
} from 'lucide-react';

const MetodologiaDesenvolvimento = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [activeMethodology, setActiveMethodology] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "5533997001663";
    const message = encodeURIComponent("Olá! Quero conhecer a metodologia de desenvolvimento do Jyze Delivery.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Metodologias e Frameworks que utilizamos
  const methodologies = [
    {
      name: 'Desenvolvimento Ágil',
      icon: Users,
      description: 'Entregas rápidas e melhorias contínuas',
      benefits: ['Entregas rápidas', 'Feedback constante', 'Adaptação a mudanças', 'Transparência total'],
      usage: 'Projetos complexos e de médio/longo prazo',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Validação Inteligente',
      icon: Rocket,
      description: 'Testamos ideias antes de investir pesado',
      benefits: ['Validação rápida', 'Menos desperdício', 'Foco no cliente', 'Decisões baseadas em dados'],
      usage: 'Startups e novos produtos',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Entrega Contínua',
      icon: GitBranch,
      description: 'Atualizações automáticas e seguras',
      benefits: ['Atualizações automáticas', 'Menos erros', 'Entrega constante', 'Reversão segura'],
      usage: 'Todos os projetos em produção',
      color: 'from-emerald-500 to-green-500'
    },
    {
      name: 'Foco no Usuário',
      icon: Target,
      description: 'Criamos pensando na experiência do usuário',
      benefits: ['Experiência otimizada', 'Soluções inovadoras', 'Empatia com usuário', 'Testes validados'],
      usage: 'Produtos voltados ao usuário final',
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Processo de desenvolvimento em 7 fases
  const developmentPhases = [
    {
      phase: '1',
      name: 'Descoberta e Análise',
      description: 'Entendemos completamente seu negócio, analisamos necessidades e definimos objetivos claros.',
      activities: [
        'Reuniões para entender sua empresa',
        'Análise de processos atuais',
        'Identificação de oportunidades',
        'Definição de objetivos e metas'
      ],
      deliverables: ['Documento de requisitos', 'Proposta técnica detalhada', 'Cronograma de entregas'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      icon: Target
    },
    {
      phase: '2',
      name: 'Planejamento e Design',
      description: 'Criamos o design visual e a experiência do usuário, planejando cada detalhe da solução.',
      activities: [
        'Criação de wireframes e protótipos',
        'Design da interface visual',
        'Arquitetura do sistema',
        'Planejamento de funcionalidades'
      ],
      deliverables: ['Protótipos interativos', 'Design visual aprovado', 'Arquitetura técnica'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      icon: Monitor
    },
    {
      phase: '3',
      name: 'Desenvolvimento',
      description: 'Construímos sua solução com as melhores tecnologias, sempre mantendo você informado do progresso.',
      activities: [
        'Programação da aplicação',
        'Implementação de funcionalidades',
        'Integrações com sistemas externos',
        'Atualizações semanais de progresso'
      ],
      deliverables: ['Versões de teste semanais', 'Código fonte', 'Documentação técnica'],
      color: 'from-emerald-500 to-green-500',
      bgColor: 'from-emerald-500/10 to-green-500/10',
      bgGradient: 'from-emerald-500/20 to-green-500/20',
      icon: Code
    },
    {
      phase: '4',
      name: 'Testes e Qualidade',
      description: 'Testamos tudo minuciosamente para garantir que funcione perfeitamente em todas as situações.',
      activities: [
        'Testes de funcionalidade',
        'Testes de performance',
        'Testes em diferentes dispositivos',
        'Correção de problemas encontrados'
      ],
      deliverables: ['Relatório de testes', 'Sistema corrigido', 'Manual de uso'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/10 to-red-500/10',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      icon: CheckCircle
    },
    {
      phase: '5',
      name: 'Lançamento',
      description: 'Colocamos sua solução no ar com todo cuidado, garantindo que tudo funcione perfeitamente.',
      activities: [
        'Configuração do ambiente de produção',
        'Migração de dados (se necessário)',
        'Testes finais no ambiente real',
        'Acompanhamento pós-lançamento'
      ],
      deliverables: ['Sistema em funcionamento', 'Backups configurados', 'Monitoramento ativo'],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-500/10 to-cyan-500/10',
      bgGradient: 'from-teal-500/20 to-cyan-500/20',
      icon: Rocket
    },
    {
      phase: '6',
      name: 'Treinamento',
      description: 'Ensinamos sua equipe a usar a solução de forma eficiente e tiramos todas as dúvidas.',
      activities: [
        'Treinamento da equipe',
        'Criação de manuais simples',
        'Sessões de dúvidas',
        'Dicas de melhores práticas'
      ],
      deliverables: ['Equipe treinada', 'Manuais de uso', 'Suporte inicial'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-500/10 to-purple-500/10',
      bgGradient: 'from-indigo-500/20 to-purple-500/20',
      icon: Users
    },
    {
      phase: '7',
      name: 'Suporte Contínuo',
      description: 'Oferecemos suporte contínuo, melhorias e evoluções para manter sua solução sempre atualizada.',
      activities: [
        'Suporte técnico especializado',
        'Atualizações de segurança',
        'Novas funcionalidades',
        'Otimizações de performance'
      ],
      deliverables: ['Suporte 24/7', 'Atualizações regulares', 'Relatórios de performance'],
      color: 'from-violet-500 to-purple-500',
      bgColor: 'from-violet-500/10 to-purple-500/10',
      bgGradient: 'from-violet-500/20 to-purple-500/20',
      icon: Shield
    }
  ];

  // Ferramentas e tecnologias que usamos
  const techStack = {
    'Sites e Aplicações Web': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    'Sistemas e Integrações': ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    'Aplicativos Mobile': ['React Native', 'Flutter', 'Expo'],
    'Hospedagem na Nuvem': ['AWS', 'Azure', 'Vercel', 'Cloudflare'],
    'Ferramentas de Trabalho': ['Docker', 'GitHub Actions', 'Figma', 'Notion', 'Linear']
  };

  const qualityMetrics = [
    { metric: '99.9%', label: 'Disponibilidade Garantida', icon: Shield, color: 'text-emerald-400' },
    { metric: '<2s', label: 'Tempo de Carregamento', icon: Zap, color: 'text-cyan-400' },
    { metric: '95+', label: 'Pontuação de Performance', icon: BarChart3, color: 'text-purple-400' },
    { metric: '24/7', label: 'Suporte e Monitoramento', icon: Clock, color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-4">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-4 sm:mb-8 hover-slide-up"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Voltar</span>
        </button>
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-400 text-xs sm:text-sm font-medium backdrop-blur-sm mb-4 sm:mb-6">
            <Code className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Metodologia de Desenvolvimento</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Como Desenvolvemos
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl leading-relaxed mb-6 sm:mb-12">
            Nossa <span className="text-blue-400 font-semibold">metodologia ágil</span> e 
            <span className="text-purple-400 font-semibold"> processo estruturado</span> que garante qualidade e resultados.
          </p>
        </div>
      </div>

      {/* Metodologias Utilizadas */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-16">
        <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Metodologias</span> & Processos
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Combinamos as melhores práticas do mercado para entregar soluções de qualidade
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {methodologies.map((methodology, index) => (
              <button
                key={index}
                onClick={() => setActiveMethodology(index)}
                className={`px-2 py-2 sm:px-4 sm:py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                  activeMethodology === index
                    ? `bg-gradient-to-r ${methodology.color} text-white shadow-lg scale-105`
                    : 'bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 border border-slate-600'
                }`}
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  {React.createElement(methodology.icon, { className: "w-3 h-3 sm:w-4 sm:h-4" })}
                  <span className="truncate">{methodology.name}</span>
                </div>
              </button>
            ))}
          </div>

          <div className={`bg-gradient-to-br ${methodologies[activeMethodology].color}/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-700/50 mb-8 sm:mb-16`}>
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${methodologies[activeMethodology].color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    {React.createElement(methodologies[activeMethodology].icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-white" })}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-0">{methodologies[activeMethodology].name}</h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-tight sm:leading-normal">{methodologies[activeMethodology].description}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                  <strong className="text-white">Ideal para:</strong> {methodologies[activeMethodology].usage}
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Benefícios Principais</h4>
                <div className="grid grid-cols-2 gap-3">
                  {methodologies[activeMethodology].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Processo de Desenvolvimento */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Processo de <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Desenvolvimento</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              7 fases estruturadas que garantem qualidade, transparência e resultados excepcionais
            </p>
          </div>

          {/* Timeline das Fases - Otimizado para Mobile */}
          <div className="mb-8 sm:mb-12">
            {/* Desktop Timeline */}
            <div className="hidden sm:flex justify-center gap-2">
              {developmentPhases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activePhase === index
                      ? `bg-gradient-to-r ${phase.color} text-white shadow-lg scale-105`
                      : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-sm font-bold">Etapa {phase.phase}</div>
                    <div className="text-xs">{phase.name.split(' ')[0]}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="sm:hidden">
              <select 
                value={activePhase} 
                onChange={(e) => setActivePhase(parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-slate-800/80 text-white rounded-xl border border-slate-600 focus:border-cyan-400 focus:outline-none"
              >
                {developmentPhases.map((phase, index) => (
                  <option key={index} value={index} className="bg-slate-800">
                    Etapa {phase.phase}: {phase.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Fase Ativa */}
          <div className={`bg-gradient-to-br ${developmentPhases[activePhase].bgGradient} backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 mb-16`}>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${developmentPhases[activePhase].color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                    {React.createElement(developmentPhases[activePhase].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-cyan-400">FASE {developmentPhases[activePhase].phase}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {developmentPhases[activePhase].name}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {developmentPhases[activePhase].description}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-cyan-400" />
                    Atividades Principais
                  </h4>
                  <div className="space-y-2">
                    {developmentPhases[activePhase].activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Star className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <FileSearch className="w-5 h-5 text-emerald-400" />
                    Entregáveis
                  </h4>
                  <div className="space-y-2">
                    {developmentPhases[activePhase].deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                  <h4 className="text-white font-semibold mb-3">Próxima Fase</h4>
                  {activePhase < developmentPhases.length - 1 ? (
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${developmentPhases[activePhase + 1].color} rounded-xl flex items-center justify-center`}>
                        {React.createElement(developmentPhases[activePhase + 1].icon, { className: "w-5 h-5 text-white" })}
                      </div>
                      <div>
                        <div className="text-white font-medium">{developmentPhases[activePhase + 1].name}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-emerald-400 font-medium">✅ Projeto Finalizado</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stack Tecnológico */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ferramentas e <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Tecnologias</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Usamos as melhores ferramentas do mercado para criar soluções de qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <div key={index} className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  {category === 'Sites e Aplicações Web' && <Monitor className="w-5 h-5 text-cyan-400" />}
                  {category === 'Sistemas e Integrações' && <Database className="w-5 h-5 text-emerald-400" />}
                  {category === 'Aplicativos Mobile' && <Smartphone className="w-5 h-5 text-purple-400" />}
                  {category === 'Hospedagem na Nuvem' && <Cloud className="w-5 h-5 text-blue-400" />}
                  {category === 'Ferramentas de Trabalho' && <GitBranch className="w-5 h-5 text-orange-400" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Métricas de Qualidade */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Garantias de <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Qualidade</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {qualityMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover-lift"
              >
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center`}>
                  {React.createElement(metric.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.metric}</div>
                <div className="text-slate-400 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para começar <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">seu projeto</span>?
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Nossa metodologia ágil garante entregas de qualidade no prazo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar com Time Técnico</span>
            </button>
            <button 
              onClick={() => navigate('/solucoes-produtos')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <ArrowRight className="w-5 h-5" />
              <span>Ver Nossas Soluções</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default MetodologiaDesenvolvimento;
