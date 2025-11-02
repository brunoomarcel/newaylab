import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, Monitor, Smartphone, Tablet, Code, TrendingUp, MessageCircle, ArrowRight, CheckCircle, Bot, Users, Globe, Zap } from 'lucide-react';
import { businessIdentities, BusinessIdentity } from '../services/geminiService';
import Playground from '../components/Playground';
import AILanchoneteVideo from '../components/AILanchoneteVideo';

const VerDemonstracao = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeDevice, setActiveDevice] = useState('desktop');
  const [showPlayground, setShowPlayground] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessIdentity | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    // Scroll para o topo da página quando carregar
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Animação de partículas no canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;
      color: string;
    }> = [];

    const colors = ['#06b6d4', '#10b981', '#8b5cf6', '#f59e0b'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.3 + 0.1,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "5533997001663";
    const message = encodeURIComponent("Olá! Vi as demonstrações no site e gostaria de saber mais sobre os serviços do Jyze Delivery.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const demonstrations = [
    {
      title: "E-commerce Moderno",
      category: "Loja Virtual",
      description: "Sistema completo de vendas online com painel administrativo, gestão de estoque e relatórios avançados.",
      features: ["Carrinho de Compras", "Pagamento Online", "Gestão de Produtos", "Dashboard Analytics"],
      image: "/api/placeholder/800/450",
      videoUrl: "#",
      duration: "3:45",
      results: {
        sales: "+150%",
        conversion: "+85%",
        users: "+300%"
      },
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "App de Delivery",
      category: "Aplicativo Mobile",
      description: "Aplicativo completo para delivery com tracking em tempo real, sistema de pagamento e avaliações.",
      features: ["Tracking em Tempo Real", "Múltiplas Formas de Pagamento", "Sistema de Avaliações", "Chat Integrado"],
      image: "/api/placeholder/800/450",
      videoUrl: "#",
      duration: "4:20",
      results: {
        orders: "+200%",
        rating: "4.8★",
        growth: "+120%"
      },
      technologies: ["React Native", "Firebase", "Maps API", "Payment Gateway"]
    },
    {
      title: "Sistema de Gestão",
      category: "Sistema Empresarial",
      description: "ERP completo para gestão empresarial com módulos de vendas, estoque, financeiro e relatórios.",
      features: ["Gestão Financeira", "Controle de Estoque", "Relatórios Gerenciais", "Multi-usuário"],
      image: "/api/placeholder/800/450",
      videoUrl: "#",
      duration: "5:10",
      results: {
        efficiency: "+75%",
        costs: "-40%",
        time: "-60%"
      },
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"]
    },
    {
      title: "IA para Lanchonetes",
      category: "Inteligência Artificial",
      description: "Sistema de IA integrado ao WhatsApp para atendimento automático, gestão de pedidos e análise de vendas.",
      features: ["Atendimento 24/7", "Gestão Automática de Pedidos", "Análise de Vendas", "Relatórios Inteligentes"],
      image: "/api/placeholder/800/450",
      videoUrl: "#",
      duration: "3:00",
      results: {
        orders: "+180%",
        satisfaction: "94%",
        automation: "85%"
      },
      technologies: ["WhatsApp API", "Gemini AI", "React", "Node.js"],
      isAIDemo: true
    },
    {
      title: "Chatbot Avançado",
      category: "Inteligência Artificial",
      description: "Assistente virtual com IA para atendimento 24/7, integrado com WhatsApp e site institucional.",
      features: ["Processamento de Linguagem Natural", "Integração WhatsApp", "Machine Learning", "Analytics"],
      image: "/api/placeholder/800/450",
      videoUrl: "#",
      duration: "2:30",
      results: {
        response: "5s avg",
        satisfaction: "96%",
        automation: "80%"
      },
      technologies: ["Python", "TensorFlow", "OpenAI API", "WhatsApp API"]
    }
  ];

  const stats = [
    { icon: Users, label: "Clientes Atendidos", value: "200+" },
    { icon: Globe, label: "Projetos Entregues", value: "300+" },
    { icon: TrendingUp, label: "Aumento Médio em Vendas", value: "150%" },
    { icon: Zap, label: "Tempo Médio de Entrega", value: "15 dias" }
  ];

  const getDeviceFrame = () => {
    switch (activeDevice) {
      case 'mobile':
        return 'w-80 h-[600px] bg-gray-800 rounded-[3rem] p-3';
      case 'tablet':
        return 'w-96 h-[600px] bg-gray-800 rounded-2xl p-4';
      default:
        return 'w-full max-w-4xl bg-gray-800 rounded-xl p-2';
    }
  };

  const handleBusinessSelect = (business: BusinessIdentity) => {
    setSelectedBusiness(business);
    setShowPlayground(true);
    // Scroll para o topo quando entrar no playground
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleBackToDemo = () => {
    setShowPlayground(false);
    setSelectedBusiness(null);
  };

  // Se estiver no playground, mostrar apenas o playground
  if (showPlayground && selectedBusiness) {
    return (
      <Playground 
        selectedBusiness={selectedBusiness} 
        onBack={handleBackToDemo}
        onSelectBusiness={(business) => setSelectedBusiness(business)}
      />
    );
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Back Button */}
        <Link 
          to="/" 
          className="flex items-center gap-3 text-cyan-400 hover:text-white transition-all duration-300 mb-8 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-xl w-fit"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </Link>

        {/* Header Limpo */}
        <div className="text-center mb-20">
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Demonstrações</span>
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text">
              Interativas
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore nossos <span className="text-cyan-400 font-semibold">projetos reais</span> e veja como 
            <span className="text-emerald-400 font-semibold"> revolucionamos negócios</span> com tecnologia.
          </p>
        </div>

        {/* Seção de Personalidades - Playground Interativo */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              🤖 Playground Interativo
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Teste nossos chatbots avançados! Selecione um tipo de negócio e experimente uma conversa real com IA.
            </p>
          </div>

          {/* Botão Mobile para acessar personalidades */}
          <div className="md:hidden mb-8">
            <div className="text-center">
              <button
                onClick={() => navigate('/personalidades')}
                className="w-full max-w-sm mx-auto py-6 px-8 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
              >
                <Bot className="w-8 h-8" />
                <div className="text-left">
                  <div>Escolher Personalidade</div>
                  <div className="text-sm font-normal opacity-90">{businessIdentities.length} opções disponíveis</div>
                </div>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Grid de Negócios - Apenas Desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {businessIdentities.map((business, index) => (
              <div
                key={business.id}
                onClick={() => handleBusinessSelect(business)}
                className={`bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
                  isVisible ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${business.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 overflow-hidden p-4`}>
                  <img src={business.icon} alt={business.name} className="w-10 h-10 object-contain border border-white/30 rounded-lg bg-white/20 p-0.5" />
                </div>
                
                <h3 className="text-base font-bold text-white text-center mb-2">
                  {business.name}
                </h3>
                
                <p className="text-sm text-slate-400 text-center mb-3">
                  {business.type}
                </p>
                
                <p className="text-xs text-slate-500 text-center mb-3">
                  {business.description}
                </p>
                
                <div className="flex items-center justify-center gap-1.5 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <Bot className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">Testar Agora</span>
                </div>
              </div>
            ))}
          </div>

          {/* Info sobre o Playground */}
          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Como Funciona?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h4 className="font-bold mb-2">Escolha um Negócio</h4>
                  <p className="text-sm text-slate-300">Selecione o tipo de empresa que você tem ou quer testar</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h4 className="font-bold mb-2">Converse com a IA</h4>
                  <p className="text-sm text-slate-300">Faça perguntas, peça informações, simule um atendimento real</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <h4 className="font-bold mb-2">Veja o Potencial</h4>
                  <p className="text-sm text-slate-300">Experimente como seria ter um assistente 24/7 no seu negócio</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Espaçamento adicional entre seções */}
        <div className="mt-32"></div>

        {/* Navegação das Demos - Simplificada */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {demonstrations.map((demo, index) => (
            <button
              key={index}
              onClick={() => setActiveDemo(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg scale-105'
                  : 'bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 border border-slate-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  activeDemo === index ? 'bg-white' : 'bg-slate-500'
                }`}></div>
                {demo.category}
              </div>
            </button>
          ))}
        </div>

        {/* Área Principal da Demo - Layout Limpo */}
        <div className="max-w-6xl mx-auto">
          {/* Container do Vídeo Principal */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-12">
            {/* Seletor de Dispositivo - Simplificado */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveDevice('desktop')}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  activeDevice === 'desktop'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:text-white hover:bg-slate-600'
                }`}
              >
                <Monitor className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveDevice('tablet')}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  activeDevice === 'tablet'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:text-white hover:bg-slate-600'
                }`}
              >
                <Tablet className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveDevice('mobile')}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  activeDevice === 'mobile'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:text-white hover:bg-slate-600'
                }`}
              >
                <Smartphone className="w-5 h-5" />
              </button>
            </div>

            {/* Container do Vídeo */}
            <div className="flex justify-center mb-8">
              <div className={getDeviceFrame()}>
                <div className="relative w-full h-full bg-slate-800 rounded-lg overflow-hidden">
                  {/* Renderização Condicional */}
                  {demonstrations[activeDemo].isAIDemo ? (
                    <AILanchoneteVideo />
                  ) : (
                    <>
                      {/* Placeholder Padrão */}
                      <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <Play className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{demonstrations[activeDemo].title}</h3>
                          <p className="text-slate-400 font-medium">Demonstração Interativa</p>
                          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-cyan-400 text-sm">
                            <Bot className="w-4 h-4" />
                            <span>Preview Disponível</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Controles do Vídeo */}
                      <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={handlePlayPause}
                            className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-600 transition-all duration-300"
                          >
                            {isPlaying ? <Pause className="w-6 h-6 text-cyan-400" /> : <Play className="w-6 h-6 text-cyan-400" />}
                          </button>
                          
                          <div className="flex-1 bg-slate-700 rounded-full h-3 overflow-hidden">
                            <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full w-1/3"></div>
                          </div>
                          
                          <span className="text-sm font-medium text-cyan-400">1:20 / {demonstrations[activeDemo].duration}</span>
                          
                          <button
                            onClick={handleMuteToggle}
                            className="w-10 h-10 flex items-center justify-center hover:bg-slate-700 rounded-xl transition-all duration-300"
                          >
                            {isMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-cyan-400" />}
                          </button>
                          
                          <button className="w-10 h-10 flex items-center justify-center hover:bg-slate-700 rounded-xl transition-all duration-300">
                            <Maximize className="w-5 h-5 text-slate-400" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Info da Demo */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">{demonstrations[activeDemo].title}</h2>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">{demonstrations[activeDemo].description}</p>
              
              {/* Tecnologias */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {demonstrations[activeDemo].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-700/50 rounded-xl text-sm text-cyan-400 border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Informações Detalhadas */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Recursos */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                Recursos Principais
              </h3>
              <div className="space-y-3">
                {demonstrations[activeDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resultados */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Resultados Obtidos
              </h3>
              <div className="space-y-4">
                {Object.entries(demonstrations[activeDemo].results).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-slate-300 capitalize">{key}</span>
                    <span className="text-emerald-400 font-bold text-lg">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Resultados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-7 h-7 text-cyan-400 mx-auto mb-2.5" />
                <div className="text-xl font-bold text-white mb-1.5">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Impressionado com o que viu?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Vamos criar algo incrível para o seu negócio também!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Solicitar Proposta</span>
            </button>
            <Link
              to="/metodologia"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
            >
              <ArrowRight className="w-6 h-6" />
              <span>Como Funciona</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default VerDemonstracao;
