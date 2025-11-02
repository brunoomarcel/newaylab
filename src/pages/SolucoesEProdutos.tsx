import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Users, CheckCircle, MessageCircle, Target, Bot, Globe, Smartphone, Database, Star, ArrowRight, Trophy, TrendingUp } from 'lucide-react';

const SolucoesEProdutos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeCase, setActiveCase] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "5533997001663";
    const message = encodeURIComponent("Olá! Quero conhecer as soluções do Jyze Delivery para meu negócio.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Portfólio de Soluções Premium
  const solutions = [
    {
      id: 'ai-business-platform',
      icon: Bot,
      category: 'Inteligência Artificial',
      title: 'Plataforma AI Business',
      tagline: 'Automação Inteligente Completa',
      description: 'Plataforma completa de IA que revoluciona operações empresariais.',
      features: [
        'Assistentes Virtuais para WhatsApp, Site e Telegram',
        'Previsão Inteligente de Vendas e Estoque',
        'Atendimento Automático 24 horas por dia',
        'Compreende e Responde em Linguagem Natural',
        'Conecta com Sistemas de Vendas Existentes',
        'Painel Executivo com Relatórios Inteligentes'
      ],
      results: ['70% redução tempo atendimento', '85% satisfação cliente', 'ROI 300% em 6 meses'],
      color: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      industries: ['Comércio Online', 'Saúde', 'Educação', 'Prestação de Serviços']
    },
    {
      id: 'web-excellence',
      icon: Globe,
      category: 'Desenvolvimento Web',
      title: 'Plataforma Web Avançada',
      tagline: 'Sites de Alta Performance',
      description: 'Ecossistema web completo com performance excepcional e conversão otimizada.',
      features: [
        'Sites Ultra-otimizados com Carregamento Rápido',
        'Lojas Virtuais com Inteligência Artificial',
        'Aplicativo Web para Experiência Mobile',
        'Otimização para Aparecer no Google',
        'Relatórios de Visitantes e Comportamento',
        'Entrega Global Rápida e Cache Inteligente'
      ],
      results: ['3x mais velocidade', '60% mais conversões', '99.9% uptime'],
      color: 'from-cyan-600 to-blue-600',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
      industries: ['Varejo', 'Serviços', 'Corporativo', 'Startups']
    },
    {
      id: 'mobile-hub',
      icon: Smartphone,
      category: 'Mobile Solutions',
      title: 'Aplicativos Mobile Pro',
      tagline: 'Apps que Geram Resultados',
      description: 'Aplicativos nativos que conectam, engajam e convertem clientes.',
      features: [
        'Aplicativos Nativos para iPhone e Android',
        'Notificações Inteligentes Personalizadas',
        'Sistema de Pagamentos Integrado',
        'Localização e Mapas Interativos',
        'Funciona Mesmo Sem Internet',
        'Análise Detalhada do Comportamento dos Usuários'
      ],
      results: ['90% engajamento', '5x mais retenção', 'Presença app stores'],
      color: 'from-emerald-600 to-green-600',
      bgGradient: 'from-emerald-500/10 to-green-500/10',
      industries: ['Delivery', 'Fitness', 'Finanças', 'Saúde']
    },
    {
      id: 'enterprise-management',
      icon: Database,
      category: 'Sistemas Empresariais',
      title: 'Sistema de Gestão Empresarial',
      tagline: 'Gestão Empresarial Inteligente',
      description: 'ERP/CRM completo com IA e business intelligence avançado.',
      features: [
        'Sistema de Gestão Completo Personalizado',
        'Sistema de Vendas com Automação de Tarefas',
        'Relatórios Inteligentes para Tomada de Decisões',
        'Controle Financeiro Avançado e Automático',
        'Controle de Estoque com Previsão Inteligente',
        'Relatórios Executivos Dinâmicos e Personalizados'
      ],
      results: ['80% redução tempo gestão', '50% aumento produtividade', 'Decisões data-driven'],
      color: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      industries: ['Indústria', 'Comércio', 'Serviços', 'Saúde']
    },
    {
      id: 'custom-ideas',
      icon: Target,
      category: 'Projetos Personalizados',
      title: 'Suas Ideias em Realidade',
      tagline: 'Desenvolvimento 100% Customizado',
      description: 'Transformamos sua visão única em soluções digitais personalizadas e inovadoras.',
      features: [
        'Análise Completa da Sua Ideia',
        'Desenvolvimento 100% Personalizado',
        'Tecnologias de Última Geração',
        'Arquitetura Escalável Única',
        'Suporte Dedicado ao Projeto',
        'Entrega com Documentação Completa'
      ],
      results: ['Solução única no mercado', 'Inovação diferenciada', 'Vantagem competitiva'],
      color: 'from-violet-600 to-purple-600',
      bgGradient: 'from-violet-500/10 to-purple-500/10',
      industries: ['Startups', 'Inovação', 'Tecnologia', 'Todos os Setores']
    }
  ];

  // Cases de Sucesso Reais e Únicos
  const successCases = [
    {
      id: 1,
      company: 'Modas & Tendências',
      industry: 'E-commerce de Moda',
      challenge: 'Site lento, baixa conversão e atendimento manual',
      solution: 'Plataforma Web Avançada + Plataforma AI Business',
      implementation: '45 dias de desenvolvimento completo',
      results: [
        { metric: 'Vendas Online', value: '+260%', description: 'Aumento em 8 meses' },
        { metric: 'Velocidade Site', value: '3.2s → 0.8s', description: 'Redução 75% tempo carregamento' },
        { metric: 'Conversão', value: '1.2% → 4.8%', description: 'Quadruplicou taxa conversão' },
        { metric: 'Atendimento', value: '24/7', description: 'Chatbot resolve 80% dúvidas' }
      ],
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-pink-500 to-purple-500',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'OpenAI GPT-4', 'WhatsApp API']
    },
    {
      id: 2,
      company: 'Centro Médico Vida Nova',
      industry: 'Saúde e Bem-estar',
      challenge: 'Gestão manual, agendamentos perdidos, baixa eficiência',
      solution: 'Sistema de Gestão Empresarial + Mobile App',
      implementation: '60 dias com treinamento completo',
      results: [
        { metric: 'Eficiência', value: '+180%', description: 'Redução 70% tempo administrativo' },
        { metric: 'Agendamentos', value: '95%', description: 'Redução faltas e cancelamentos' },
        { metric: 'Receita', value: '+85%', description: 'Aumento em 12 meses' },
        { metric: 'Satisfação', value: '9.2/10', description: 'NPS dos pacientes' }
      ],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-emerald-500 to-teal-500',
      technologies: ['React Native', 'Python', 'MongoDB', 'Firebase', 'Google Calendar API']
    },
    {
      id: 3,
      company: 'Express Delivery',
      industry: 'Delivery & Logística',
      challenge: 'Competir com gigantes, fidelizar clientes, otimizar entregas',
      solution: 'Aplicativos Mobile Pro + IA Logística',
      implementation: '90 dias com MVP em 30 dias',
      results: [
        { metric: 'Pedidos', value: '+320%', description: 'Crescimento em 6 meses' },
        { metric: 'Ticket Médio', value: '+65%', description: 'IA recomenda produtos' },
        { metric: 'Retenção', value: '92%', description: 'Usuários ativos mensais' },
        { metric: 'Entregas', value: '28min', description: 'Tempo médio otimizado' }
      ],
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-cyan-500 to-blue-500',
      technologies: ['Flutter', 'Node.js', 'Redis', 'Google Maps API', 'TensorFlow']
    }
  ];

  const marketStats = [
    { number: "500+", label: "Empresas Transformadas", icon: Users, color: 'text-cyan-400' },
    { number: "2M+", label: "Usuários Impactados", icon: Target, color: 'text-emerald-400' },
    { number: "99.9%", label: "Uptime Garantido", icon: CheckCircle, color: 'text-purple-400' },
    { number: "24/7", label: "Suporte Especializado", icon: Zap, color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-4">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-6 sm:mb-8 hover-slide-up"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Voltar</span>
        </button>
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm mb-6">
            <Trophy className="w-4 h-4" />
            <span>Portfólio de Soluções</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
            Soluções & Produtos
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl leading-relaxed mb-8 sm:mb-12">
            Conheça nosso <span className="text-cyan-400 font-semibold">portfólio premium</span> de 
            <span className="text-emerald-400 font-semibold"> soluções empresariais</span> que transformam negócios.
          </p>
        </div>
      </div>

      {/* Portfolio de Soluções */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Navegação das Soluções */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {solutions.map((solution, index) => (
              <button
                key={index}
                onClick={() => setActiveSolution(index)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeSolution === index
                    ? `bg-gradient-to-r ${solution.color} text-white shadow-lg scale-105`
                    : 'bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 border border-slate-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  {React.createElement(solution.icon, { className: "w-4 h-4" })}
                  {solution.category}
                </div>
              </button>
            ))}
          </div>

          {/* Solução Ativa */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${solutions[activeSolution].color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                  {React.createElement(solutions[activeSolution].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {solutions[activeSolution].title}
                  </h2>
                  <p className="text-cyan-400 font-medium text-lg">
                    {solutions[activeSolution].tagline}
                  </p>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                {solutions[activeSolution].description}
              </p>

              {/* Resultados */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {solutions[activeSolution].results.map((result, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                    <div className="text-emerald-400 font-bold text-sm">{result}</div>
                  </div>
                ))}
              </div>

              {/* Indústrias */}
              <div>
                <h4 className="text-white font-semibold mb-3">Ideal para:</h4>
                <div className="flex flex-wrap gap-2">
                  {solutions[activeSolution].industries.map((industry, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className={`bg-gradient-to-br ${solutions[activeSolution].bgGradient} backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50`}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  Funcionalidades Principais
                </h3>
                <ul className="space-y-3">
                  {solutions[activeSolution].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <Star className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={openWhatsApp}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cases de Sucesso */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>Cases de Sucesso</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Resultados <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Comprovados</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Histórias reais de empresas que transformaram seus negócios
            </p>
          </div>

          {/* Case Ativo */}
          <div className="mb-12">
            <div className="flex justify-center gap-4 mb-8">
              {successCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCase === index
                      ? `bg-gradient-to-r ${successCases[activeCase].color} scale-125`
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <div className={`bg-gradient-to-br ${successCases[activeCase].color}/10 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50`}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {successCases[activeCase].company}
                    </h3>
                    <p className="text-cyan-400 font-medium">
                      {successCases[activeCase].industry}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Desafio:</h4>
                    <p className="text-slate-300">{successCases[activeCase].challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Solução:</h4>
                    <p className="text-emerald-400 font-medium">{successCases[activeCase].solution}</p>
                    <p className="text-slate-400 text-sm mt-1">{successCases[activeCase].implementation}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {successCases[activeCase].results.map((result, index) => (
                      <div key={index} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
                        <div className="text-2xl font-bold text-emerald-400 mb-1">{result.value}</div>
                        <div className="text-white font-medium text-sm mb-1">{result.metric}</div>
                        <div className="text-slate-400 text-xs">{result.description}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Tecnologias Utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {successCases[activeCase].technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas do Mercado */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover-lift"
              >
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Transformar</span> seu Negócio?
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Descubra qual solução é ideal para sua empresa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar com Especialista</span>
            </button>
            <button 
              onClick={() => navigate('/documentacao-tecnica')}
              className="px-8 py-4 border-2 border-slate-400 text-slate-200 font-bold rounded-xl transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg flex items-center justify-center gap-3"
            >
              <ArrowRight className="w-5 h-5" />
              <span>Especificações Técnicas</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default SolucoesEProdutos;
