import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MessageSquare, Search, Lightbulb, Code, TestTube, Rocket, CheckCircle, 
  Clock, Users, Star, MessageCircle, Shield, Target, Zap, FileText
} from 'lucide-react';

const ComoFunciona = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    // Scroll para o topo da página quando carregar
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "5533997001663";
    const message = encodeURIComponent("Olá! Gostaria de entender melhor como funciona o processo do Jyze Delivery.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const steps = [
    {
      icon: MessageSquare,
      title: "1. Descoberta & Estratégia",
      subtitle: "Entendemos Profundamente Seu Negócio",
      description: "Iniciamos com uma reunião estratégica onde mergulhamos fundo no seu negócio, objetivos, desafios e visão. Analisamos seu mercado, concorrência e público-alvo para criar uma estratégia sólida.",
      details: [
        "Reunião estratégica de descoberta (60-90min)",
        "Análise completa do modelo de negócio",
        "Mapeamento da jornada do cliente",
        "Benchmarking competitivo detalhado",
        "Definição de KPIs e métricas de sucesso",
        "Análise de personas e comportamento do usuário",
        "Auditoria de presença digital atual",
        "Proposta comercial personalizada"
      ],
      deliverables: [
        "Documento de descoberta estratégica",
        "Análise competitiva completa",
        "Personas definidas",
        "Proposta técnica e comercial"
      ],
      timeline: "3-5 dias",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Search,
      title: "2. Pesquisa & Planejamento",
      subtitle: "Criamos a Arquitetura da Solução",
      description: "Com base nos insights coletados, nossa equipe realiza pesquisa aprofundada e cria um plano detalhado com arquitetura técnica, wireframes e cronograma estruturado.",
      details: [
        "Pesquisa de UX/UI e melhores práticas",
        "Arquitetura de informação detalhada",
        "Wireframes de alta fidelidade",
        "Especificação técnica completa",
        "Definição de stack tecnológico",
        "Planejamento de sprints e entregas",
        "Matriz de riscos e mitigação",
        "Cronograma detalhado com marcos"
      ],
      deliverables: [
        "Especificação técnica funcional",
        "Wireframes interativos",
        "Arquitetura da solução",
        "Cronograma de desenvolvimento"
      ],
      timeline: "5-7 dias",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Lightbulb,
      title: "3. Design & Prototipagem",
      subtitle: "Criamos a Experiência Visual",
      description: "Nossa equipe de design cria interfaces modernas, intuitivas e otimizadas para conversão, seguindo as melhores práticas de UX/UI e design responsivo.",
      details: [
        "Criação de system design (cores, tipografia, componentes)",
        "Design de alta fidelidade para todas as telas",
        "Protótipos interativos e navegáveis",
        "Testes de usabilidade com usuários reais",
        "Otimização para diferentes dispositivos",
        "Validação de acessibilidade (WCAG)",
        "Guia de estilo e documentação",
        "Aprovação iterativa com feedback"
      ],
      deliverables: [
        "Protótipos interativos finais",
        "Design system completo",
        "Guia de estilo da marca",
        "Especificação de assets"
      ],
      timeline: "7-10 dias",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Code,
      title: "4. Desenvolvimento Ágil",
      subtitle: "Construímos com Excelência Técnica",
      description: "Desenvolvimento em sprints ágeis utilizando as melhores tecnologias e práticas do mercado. Código limpo, otimizado e escalável com documentação completa.",
      details: [
        "Desenvolvimento em metodologia ágil (Scrum)",
        "Código versionado com Git e boas práticas",
        "Arquitetura escalável e performática",
        "Integração contínua (CI/CD)",
        "Testes automatizados (unitários e integração)",
        "Code review e pair programming",
        "Documentação técnica completa",
        "Deploy em ambiente de homologação"
      ],
      deliverables: [
        "Aplicação funcional em homologação",
        "Código fonte documentado",
        "Testes automatizados",
        "API documentation"
      ],
      timeline: "3-6 semanas",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: TestTube,
      title: "5. Testes & Qualidade",
      subtitle: "Garantimos Performance e Segurança",
      description: "Bateria completa de testes incluindo funcionalidade, performance, segurança e usabilidade em múltiplos dispositivos e cenários reais de uso.",
      details: [
        "Testes funcionais em todos os fluxos",
        "Testes de performance e load testing",
        "Auditoria de segurança completa",
        "Testes de responsividade multi-device",
        "Validação de acessibilidade (WCAG 2.1)",
        "Testes de SEO e otimização",
        "Browser testing (Chrome, Firefox, Safari, Edge)",
        "User Acceptance Testing (UAT)"
      ],
      deliverables: [
        "Relatório de testes completo",
        "Certificação de segurança",
        "Audit de performance",
        "Checklist de qualidade"
      ],
      timeline: "5-7 dias",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Rocket,
      title: "6. Lançamento & Suporte",
      subtitle: "Colocamos no Ar com Suporte Total",
      description: "Deploy profissional em ambiente de produção com monitoramento ativo, treinamento completo da equipe e suporte dedicado pós-lançamento.",
      details: [
        "Deploy seguro em produção",
        "Configuração de monitoramento e alertas",
        "Setup de analytics e tracking",
        "Treinamento completo da equipe",
        "Documentação de usuário final",
        "Suporte técnico 30 dias incluso",
        "Manutenção preventiva mensal",
        "Relatórios de performance regulares"
      ],
      deliverables: [
        "Aplicação em produção",
        "Documentação de usuário",
        "Treinamento da equipe",
        "Plano de suporte e manutenção"
      ],
      timeline: "3-5 dias",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Tech Solutions",
      text: "O processo foi transparente do início ao fim. Eles entregaram exatamente o que prometeram!",
      rating: 5
    },
    {
      name: "Maria Oliveira",
      company: "Beauty Center",
      text: "Profissionais incríveis! O app aumentou nossas vendas em 60% nos primeiros 3 meses.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Delivery Express",
      text: "Processo muito bem organizado. Sempre sabíamos em que etapa estávamos.",
      rating: 5
    }
  ];

  // Auto-play dos steps
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length);
      }, 4000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-4">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Voltar</span>
        </button>
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
            Como Funciona
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl leading-relaxed mb-8 sm:mb-12">
            Um processo <span className="text-cyan-400 font-semibold">transparente</span> e 
            <span className="text-emerald-400 font-semibold"> eficiente</span> que garante resultados excepcionais.
          </p>
        </div>
      </div>

      {/* Timeline Interativa */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Progress Bar - Mobile otimizado */}
          <div className="relative mb-8 sm:mb-16">
            {/* Desktop Timeline */}
            <div className="hidden sm:flex justify-between items-center">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`relative z-10 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 ${
                    index <= activeStep
                      ? `bg-gradient-to-r ${step.color} text-white shadow-2xl`
                      : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                  }`}
                >
                  <step.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
              ))}
            </div>
            
            {/* Mobile Timeline - Vertical */}
            <div className="sm:hidden space-y-4">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-500 transform ${
                    index === activeStep
                      ? `bg-gradient-to-r ${step.color} text-white shadow-xl scale-105`
                      : index < activeStep
                      ? 'bg-slate-700/70 text-slate-300'
                      : 'bg-slate-800/50 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index === activeStep ? 'bg-white/20' : 'bg-slate-600/50'
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-sm">{step.title}</div>
                      <div className="text-xs opacity-80">{step.timeline}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Desktop Progress Line */}
            <div className="hidden sm:block absolute top-6 lg:top-8 left-6 lg:left-8 right-6 lg:right-8 h-1 bg-slate-700 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-1000"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className={`transition-all duration-500 ${isVisible ? 'animate-slide-in-left' : ''}`}>
                <div className={`inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${steps[activeStep].color} text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4`}>
                  ⏱️ {steps[activeStep].timeline}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">{steps[activeStep].title}</h2>
                <h3 className="text-lg sm:text-xl text-cyan-400 font-semibold mb-4 sm:mb-6">{steps[activeStep].subtitle}</h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Process Details - Mobile otimizado */}
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">📋 O que fazemos nesta etapa:</h4>
                <div className="space-y-2 sm:space-y-3 max-h-64 sm:max-h-none overflow-y-auto sm:overflow-visible scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
                  {steps[activeStep].details.map((detail, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-2 sm:gap-3 transition-all duration-500 ${
                        isVisible ? 'animate-slide-in-left' : ''
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-300 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables - Mobile otimizado */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  📦 Entregáveis desta etapa:
                </h4>
                <div className="grid gap-2 sm:gap-3">
                  {steps[activeStep].deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${steps[activeStep].color} flex-shrink-0`}></div>
                      <span className="text-sm sm:text-base text-slate-300 font-medium">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Representation - Mobile otimizado */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className={`bg-gradient-to-br ${steps[activeStep].color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105`}>
                <div className="text-center">
                  {(() => {
                    const IconComponent = steps[activeStep].icon;
                    return <IconComponent className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white mx-auto mb-4 sm:mb-6" />;
                  })()}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">Garantias de Qualidade</h4>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                      <div>
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-2" />
                        <div className="text-xs sm:text-sm text-white/80 font-medium">Entrega no Prazo</div>
                        <div className="text-xs text-white/60">98% das entregas</div>
                      </div>
                      <div>
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-2" />
                        <div className="text-xs sm:text-sm text-white/80 font-medium">Suporte Dedicado</div>
                        <div className="text-xs text-white/60">24/7 disponível</div>
                      </div>
                      <div>
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-2" />
                        <div className="text-xs sm:text-sm text-white/80 font-medium">Alta Qualidade</div>
                        <div className="text-xs text-white/60">Satisfação 99%</div>
                      </div>
                      <div>
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-2" />
                        <div className="text-xs sm:text-sm text-white/80 font-medium">Segurança Total</div>
                        <div className="text-xs text-white/60">Certificado SSL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Métricas e Tecnologias - Mobile otimizado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-2 sm:mb-3" />
                  <h5 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">Metodologia</h5>
                  <p className="text-xs sm:text-sm text-slate-300">Agile/Scrum com entregas iterativas</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mb-2 sm:mb-3" />
                  <h5 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">Performance</h5>
                  <p className="text-xs sm:text-sm text-slate-300">Otimização para velocidade máxima</p>
                </div>
              </div>

              {/* Controles - Mobile otimizado */}
              <div className="flex justify-center">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                    isAutoPlaying
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {isAutoPlaying ? (
                    <>
                      ⏸️ <span className="hidden xs:inline">Pausar</span>
                    </>
                  ) : (
                    <>
                      ▶️ <span className="hidden xs:inline">Reproduzir</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials - Mobile otimizado */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">O Que Nossos Clientes Dizem</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-slide-up' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-slate-300 mb-3 sm:mb-4 italic leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-white text-sm sm:text-base">{testimonial.name}</div>
                <div className="text-xs sm:text-sm text-cyan-400">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final - Mobile otimizado */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Pronto para Começar Sua Jornada?
          </h3>
          <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
            Entre em contato conosco e vamos transformar sua ideia em realidade!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg sm:max-w-none mx-auto">
            <button 
              onClick={openWhatsApp}
              className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center justify-center gap-2 sm:gap-3"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Começar Agora</span>
            </button>
            <button 
              onClick={() => navigate('/documentacao-tecnica')}
              className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 sm:gap-3"
            >
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Documentação Técnica</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navegação Mobile - Redesenhada e Elegante */}
      <div className="sticky bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/30 p-4">
        <div className="container mx-auto max-w-md">
          {/* Barra de Progresso Principal */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-slate-400 font-medium">Progresso</span>
              <span className="text-xs text-cyan-400 font-semibold">
                Etapa {activeStep + 1} de {steps.length}
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Controles de Navegação */}
          <div className="flex items-center gap-3">
            {/* Botão Anterior */}
            <button
              onClick={() => {
                setActiveStep(prev => Math.max(0, prev - 1));
                setIsAutoPlaying(false);
              }}
              disabled={activeStep === 0}
              className={`flex-1 px-4 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                activeStep === 0
                  ? 'bg-slate-800/50 text-slate-500 cursor-not-allowed border border-slate-700/30'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600/50 hover:border-slate-500 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-semibold">Voltar</span>
            </button>

            {/* Botão de Play/Pause */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600/50 hover:border-slate-500 rounded-2xl transition-all duration-300 text-slate-200 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              {isAutoPlaying ? (
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-1 h-3 bg-current rounded-sm mr-0.5"></div>
                  <div className="w-1 h-3 bg-current rounded-sm"></div>
                </div>
              ) : (
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[6px] border-l-current border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                </div>
              )}
            </button>

            {/* Botão Próximo */}
            <button
              onClick={() => {
                setActiveStep(prev => Math.min(steps.length - 1, prev + 1));
                setIsAutoPlaying(false);
              }}
              disabled={activeStep === steps.length - 1}
              className={`flex-1 px-4 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                activeStep === steps.length - 1
                  ? 'bg-slate-800/50 text-slate-500 cursor-not-allowed border border-slate-700/30'
                  : 'bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white border border-cyan-500/30 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transform hover:scale-[1.02]'
              }`}
            >
              <span className="text-sm font-semibold">Avançar</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>

          {/* Indicadores de Etapa */}
          <div className="flex justify-center mt-4 gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveStep(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeStep
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 scale-125'
                    : index < activeStep
                    ? 'bg-slate-500 hover:bg-slate-400'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default ComoFunciona;
