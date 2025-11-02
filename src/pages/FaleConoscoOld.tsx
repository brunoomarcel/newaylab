import { useEffect, useState, useRef } from 'react';
import { ArrowLeft, MessageCircle, Phone, Mail, MapPin, Clock, Send, User, Building, MessageSquare, CheckCircle, Zap, Heart, Shield } from 'lucide-react';

const FaleConosco = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    // Scroll para o topo da página quando carregar
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Função para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "5533997001663";
    const message = encodeURIComponent("Olá! Gostaria de falar com a equipe do Jyze Delivery sobre meus projetos.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Animação de partículas
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
    }> = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.3 + 0.1,
        size: Math.random() * 3 + 1
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
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta em até 5 minutos",
      action: "Iniciar Conversa",
      color: "from-green-500 to-green-600",
      onClick: openWhatsApp
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "(33) 99700-1663",
      action: "Ligar Agora",
      color: "from-blue-500 to-cyan-500",
      onClick: () => window.open('tel:+5533997001663')
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "contato@jyzedelivery.com.br",
      action: "Enviar E-mail",
      color: "from-purple-500 to-pink-500",
      onClick: () => window.open('mailto:contato@jyzedelivery.com.br')
    }
  ];

  const businessHours = [
    { day: "Segunda - Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 12:00" },
    { day: "Domingo", hours: "Fechado" }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Respondemos em até 5 minutos no WhatsApp"
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Tratamos cada cliente como único"
    },
    {
      icon: Shield,
      title: "Suporte Garantido",
      description: "Suporte técnico por 6 meses incluído"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (aqui você integraria com sua API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Redirecionar para WhatsApp com dados do formulário
      const message = encodeURIComponent(
        `Olá! Meu nome é ${formData.nome} da empresa ${formData.empresa}.\n\n` +
        `Assunto: ${formData.assunto}\n\n` +
        `Mensagem: ${formData.mensagem}\n\n` +
        `Meu e-mail: ${formData.email}\n` +
        `Telefone: ${formData.telefone}`
      );
      const whatsappUrl = `https://wa.me/5533997001663?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Mensagem Enviada!
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Obrigado pelo contato! Você será redirecionado para o WhatsApp para continuar nossa conversa.
          </p>
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
          >
            Voltar ao Site
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-20" />
      
      {/* Header */}
      <div className="relative z-10 container mx-auto px-6 pt-8 pb-4">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>
        
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Fale Conosco
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl leading-relaxed">
            Estamos aqui para <span className="text-cyan-400 font-semibold">transformar suas ideias</span> em 
            <span className="text-emerald-400 font-semibold"> soluções digitais incríveis</span>.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center transition-all duration-500 hover:scale-105 cursor-pointer ${
                isVisible ? 'animate-slide-up' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={method.onClick}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
              <p className="text-slate-300 mb-6">{method.description}</p>
              <button className={`w-full px-6 py-3 bg-gradient-to-r ${method.color} text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl`}>
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulário */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
            <h2 className="text-3xl font-bold mb-8 text-center">Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="(33) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Assunto
                </label>
                <select
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="site">Desenvolvimento de Site</option>
                  <option value="app">Aplicativo Mobile</option>
                  <option value="sistema">Sistema Personalizado</option>
                  <option value="ia">Inteligência Artificial</option>
                  <option value="consultoria">Consultoria Digital</option>
                  <option value="suporte">Suporte Técnico</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto, suas necessidades e objetivos..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Informações e Horários */}
          <div className="space-y-8">
            {/* Por que escolher o Jyze Delivery */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6">Por que escolher o Jyze Delivery?</h3>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">{reason.title}</h4>
                      <p className="text-slate-300">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horários de Atendimento */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-cyan-400" />
                Horários de Atendimento
              </h3>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-slate-700/50 last:border-b-0">
                    <span className="text-slate-300">{schedule.day}</span>
                    <span className="font-semibold text-cyan-400">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp 24/7 para emergências</span>
                </div>
              </div>
            </div>

            {/* Localização */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-cyan-400" />
                Nossa Localização
              </h3>
              <div className="space-y-3 text-slate-300">
                <p>Governador Valadares - MG</p>
                <p>Atendimento presencial e remoto</p>
                <p>Cobertura em todo o Brasil</p>
              </div>
            </div>
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

export default FaleConosco;
