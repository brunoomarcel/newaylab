import { useEffect, useState } from 'react';
import { ArrowLeft, MessageCircle, Phone, Mail, MapPin, Clock, Send, User, Building, MessageSquare, CheckCircle, Zap, Star, Users, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

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
  const titleReveal = useScrollReveal({ threshold: 0.2 });

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta instantânea",
      detail: "(33) 99700-1663",
      action: "Chamar no WhatsApp",
      color: "from-green-500 to-emerald-500",
      badge: "Preferido",
      onClick: () => {
        const phoneNumber = "5533997001663";
        const message = encodeURIComponent("Olá! Gostaria de falar com a equipe do Jyze Delivery sobre meus projetos.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      }
    },
    {
      icon: Phone,
      title: "Ligação",
      description: "Atendimento direto",
      detail: "(33) 99700-1663",
      action: "Ligar Agora",
      color: "from-blue-500 to-cyan-500",
      badge: "Rápido",
      onClick: () => window.open('tel:+5533997001663')
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Resposta em até 24h",
      detail: "contato@jyzedelivery.com.br",
      action: "Enviar E-mail",
      color: "from-purple-500 to-pink-500",
      badge: "Formal",
      onClick: () => window.open('mailto:contato@jyzedelivery.com.br')
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 18:00", status: "online" },
    { day: "Sábado", hours: "08:00 - 12:00", status: "limited" },
    { day: "Domingo", hours: "Fechado", status: "offline" }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Respondemos em até 5 minutos no WhatsApp durante horário comercial",
      highlight: "5 min"
    },
    {
      icon: Star,
      title: "Qualidade Comprovada",
      description: "Projetos entregues com excelência e satisfação total dos nossos clientes",
      highlight: "Top"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais especializados e qualificados em tecnologia moderna",
      highlight: "Expert"
    },
    {
      icon: Shield,
      title: "Suporte Garantido",
      description: "Suporte técnico e manutenção por 6 meses incluídos em todos os projetos",
      highlight: "6 meses"
    }
  ];

  const serviceTypes = [
    "Desenvolvimento de Site",
    "Aplicativo Mobile",
    "Sistema Personalizado", 
    "Inteligência Artificial",
    "E-commerce Completo",
    "Sistema de Gestão",
    "Automação WhatsApp",
    "Consultoria Digital",
    "Suporte Técnico",
    "Outros Serviços"
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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const message = encodeURIComponent(
        `🔥 *NOVO CLIENTE PELO SITE* 🔥\n\n` +
        `👤 *Nome:* ${formData.nome}\n` +
        `🏢 *Empresa:* ${formData.empresa || 'Não informado'}\n` +
        `📧 *E-mail:* ${formData.email}\n` +
        `📱 *Telefone:* ${formData.telefone || 'Não informado'}\n\n` +
        `🎯 *Assunto:* ${formData.assunto}\n\n` +
        `💬 *Mensagem:*\n${formData.mensagem}\n\n` +
        `⏰ *Enviado em:* ${new Date().toLocaleString('pt-BR')}`
      );
      const whatsappUrl = `https://wa.me/5533997001663?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="text-center max-w-2xl mx-auto px-6 relative z-10">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            🎉 Mensagem Enviada!
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Obrigado pelo contato! Você será redirecionado para o WhatsApp para continuarmos nossa conversa.
            Nossa equipe responderá em até 5 minutos durante horário comercial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Voltar ao Site
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-slate-700 text-white font-bold rounded-xl transition-all duration-300 hover:bg-slate-600"
            >
              Enviar Outra Mensagem
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-4 sm:pt-2 pb-0">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-0 hover-lift"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>
        
        <div className="text-center mb-1">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm mb-3 scroll-reveal ${
              titleReveal.isVisible ? 'revealed' : ''
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            <span>Entre em Contato</span>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 scroll-reveal-scale ${
            titleReveal.isVisible ? 'revealed' : ''
          }`}>
            Fale <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text animate-gradient-shift">Conosco</span>
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed scroll-reveal ${
            titleReveal.isVisible ? 'revealed' : ''
          }`}>
            Estamos aqui para <span className="text-cyan-400 font-semibold">transformar suas ideias</span> em 
            <span className="text-emerald-400 font-semibold"> soluções digitais incríveis</span>
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50 text-center transition-all duration-500 hover:scale-105 cursor-pointer hover-lift ${
                isVisible ? 'animate-slide-up' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={method.onClick}
            >
              {method.badge && (
                <div className="absolute top-4 right-4">
                  <span className={`text-xs px-2 py-1 bg-gradient-to-r ${method.color} text-white rounded-full font-semibold`}>
                    {method.badge}
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
              <p className="text-slate-400 text-sm mb-2">{method.description}</p>
              <p className="text-white font-semibold mb-6">{method.detail}</p>
              
              <button className={`w-full px-6 py-3 bg-gradient-to-r ${method.color} text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl group-hover:shadow-lg`}>
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Formulário */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">📝 Envie sua Mensagem</h2>
              <p className="text-slate-300">Preencha o formulário e entraremos em contato rapidamente</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nome Completo *
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
                    E-mail *
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

              <div className="grid sm:grid-cols-2 gap-6">
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
                    Telefone/WhatsApp
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
                  Tipo de Serviço *
                </label>
                <select
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                >
                  <option value="">Selecione o tipo de serviço</option>
                  {serviceTypes.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  💬 Conte-nos sobre seu projeto *
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Descreva seu projeto, suas necessidades, objetivos e prazo desejado. Quanto mais detalhes, melhor poderemos ajudá-lo!"
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
                    <span>🚀 Enviar Mensagem</span>
                  </>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                * Campos obrigatórios. Seus dados estão seguros conosco.
              </p>
            </form>
          </div>

          {/* Informações e Horários */}
          <div className="space-y-8">
            {/* Por que escolher o Jyze Delivery */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-400" />
                Por que escolher o Jyze Delivery?
              </h3>
              <div className="space-y-6">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-white">{reason.title}</h4>
                        <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full font-semibold">
                          {reason.highlight}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horários de Atendimento */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-cyan-400" />
                Horários de Atendimento
              </h3>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-slate-700/30 rounded-xl border border-slate-600/50">
                    <span className="text-slate-300 font-medium">{schedule.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-white">{schedule.hours}</span>
                      <div className={`w-3 h-3 rounded-full ${
                        schedule.status === 'online' ? 'bg-green-400' :
                        schedule.status === 'limited' ? 'bg-yellow-400' : 'bg-red-400'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp 24/7 para emergências</span>
                </div>
                <p className="text-sm text-slate-300 mt-2">
                  Fora do horário comercial, responderemos na primeira oportunidade
                </p>
              </div>
            </div>

            {/* Localização */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-cyan-400" />
                Nossa Base
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300">📍 Caratinga - MG</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">💻 Atendimento 100% remoto</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300">🌎 Clientes em todo o Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
