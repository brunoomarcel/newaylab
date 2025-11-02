import { useEffect, useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const ContactFormSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

    const section = document.querySelector('#contact-form');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

      // Enviar para WhatsApp
      const message = encodeURIComponent(
        `📝 *NOVO CONTATO PELO SITE* 📝\n\n` +
        `👤 *Nome:* ${formData.nome}\n` +
        `📧 *E-mail:* ${formData.email}\n` +
        `📱 *Telefone:* ${formData.telefone}\n\n` +
        `💬 *Mensagem:*\n${formData.mensagem}\n\n` +
        `⏰ *Enviado em:* ${new Date().toLocaleString('pt-BR')}`
      );
      const whatsappUrl = `https://wa.me/5533997001663?text=${message}`;

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            nome: '',
            email: '',
            telefone: '',
            mensagem: ''
          });
        }, 3000);
      }, 1500);
    }, 2000);
  };

  return (
    <section
      id="contact-form"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Fale com nossa{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Equipe
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Preencha o formulário abaixo e retornaremos em até 24 horas
          </p>
        </div>

        {/* Form Container */}
        <div className={`bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {submitted ? (
            // Success Message
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Mensagem Enviada!
              </h3>
              <p className="text-lg text-slate-300 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Obrigado pelo contato! Em breve retornaremos.
              </p>
              <div className="flex items-center justify-center gap-2 text-cyan-400">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Redirecionando para WhatsApp...
                </span>
              </div>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome e Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <User className="w-4 h-4 inline mr-2" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                    placeholder="Seu nome completo"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Mail className="w-4 h-4 inline mr-2" />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                    placeholder="seu@email.com"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Phone className="w-4 h-4 inline mr-2" />
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  placeholder="(00) 00000-0000"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Mensagem *
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                style={{ fontFamily: 'Inter, sans-serif' }}
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

              {/* Info Text */}
              <p className="text-sm text-slate-400 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                * Campos obrigatórios. Seus dados estão seguros conosco e não serão compartilhados.
              </p>
            </form>
          )}
        </div>

        {/* Additional Info */}
        <div className={`grid md:grid-cols-3 gap-6 mt-12 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {[
            { icon: '⚡', title: 'Resposta Rápida', text: 'Retornamos em até 5 minutos' },
            { icon: '🎯', title: 'Consultoria Grátis', text: 'Primeira consulta sem custo' },
            { icon: '🔒', title: 'Dados Seguros', text: 'Suas informações protegidas' }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-white font-bold mb-1">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
