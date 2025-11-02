import { useEffect, useState } from 'react';
import { Calendar, Clock, Video, Phone, MessageCircle, CheckCircle, User, Mail, Building } from 'lucide-react';

const ScheduleMeeting = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    data: '',
    horario: '',
    tipo: ''
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

    const section = document.querySelector('#schedule-meeting');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const meetingTypes = [
    {
      icon: Video,
      title: 'Consultoria de IA',
      description: 'Diagnóstico completo do seu negócio',
      duration: '45-60 min',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Avaliação Rápida',
      description: 'Análise inicial de oportunidades',
      duration: '20-30 min',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      title: 'Dúvidas Rápidas',
      description: 'WhatsApp direto com especialista',
      duration: '10-15 min',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const handleOpenModal = (type: string) => {
    setSelectedType(type);
    setFormData({ ...formData, tipo: type });
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSubmitted(false);
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        `🗓️ *AGENDAMENTO DE REUNIÃO* 🗓️\n\n` +
        `👤 *Nome:* ${formData.nome}\n` +
        `🏢 *Empresa:* ${formData.empresa || 'Não informado'}\n` +
        `📧 *E-mail:* ${formData.email}\n` +
        `📱 *Telefone:* ${formData.telefone}\n\n` +
        `🎯 *Tipo de Reunião:* ${formData.tipo}\n` +
        `📅 *Data Preferida:* ${new Date(formData.data).toLocaleDateString('pt-BR')}\n` +
        `⏰ *Horário Preferido:* ${formData.horario}\n\n` +
        `⏰ *Solicitado em:* ${new Date().toLocaleString('pt-BR')}`
      );
      const whatsappUrl = `https://wa.me/5533997001663?text=${message}`;

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);
    }, 2000);
  };

  // Gerar horários disponíveis
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  return (
    <>
      <section
        id="schedule-meeting"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comece Agora
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Agende sua{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Consultoria Gratuita
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Descubra como IA e Automação podem reduzir custos e aumentar a eficiência do seu negócio
            </p>
          </div>

          {/* Meeting Types */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {meetingTypes.map((type, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  fontFamily: 'Inter, sans-serif'
                }}
                onClick={() => handleOpenModal(type.title)}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${type.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {type.description}
                </p>

                {/* Duration Badge */}
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{type.duration}</span>
                </div>

                {/* Button */}
                <button
                  className={`w-full mt-6 px-6 py-3 bg-gradient-to-r ${type.gradient} text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg`}
                >
                  Agendar
                </button>

                {/* Hover effect line */}
                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${type.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className={`grid md:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {[
              { icon: CheckCircle, text: '100% Gratuita' },
              { icon: CheckCircle, text: 'Sem compromisso' },
              { icon: CheckCircle, text: 'Diagnóstico completo' },
              { icon: CheckCircle, text: 'Plano personalizado' }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <benefit.icon className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            {submitted ? (
              // Success Screen
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Reunião Agendada!
                </h3>
                <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Recebemos sua solicitação de agendamento. Em breve entraremos em contato para confirmar.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Fechar
                </button>
              </div>
            ) : (
              // Form
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {selectedType}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Preencha os dados abaixo para agendar
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome e Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <User className="w-4 h-4 inline mr-2" />
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="Seu nome"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <Mail className="w-4 h-4 inline mr-2" />
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="seu@email.com"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Empresa e Telefone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <Building className="w-4 h-4 inline mr-2" />
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="Nome da empresa"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <Phone className="w-4 h-4 inline mr-2" />
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="(00) 00000-0000"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Data e Horário */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Data Preferida *
                      </label>
                      <input
                        type="date"
                        name="data"
                        value={formData.data}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <Clock className="w-4 h-4 inline mr-2" />
                        Horário Preferido *
                      </label>
                      <select
                        name="horario"
                        value={formData.horario}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <option value="">Selecione um horário</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Agendando...</span>
                        </>
                      ) : (
                        'Confirmar Agendamento'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ScheduleMeeting;
