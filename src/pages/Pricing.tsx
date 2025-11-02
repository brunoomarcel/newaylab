import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Pricing = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "5533997001663";
    const message = encodeURIComponent("Olá! Gostaria de agendar uma reunião para discutir o plano Enterprise.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Perfeito para projetos pessoais e pequenos negócios',
      monthlyPrice: 'R$ 299',
      annualPrice: 'R$ 249',
      features: [
        '1 Projeto',
        'Deploy automático',
        '10GB Armazenamento',
        'SSL gratuito',
        'Suporte por email',
        'Backup semanal',
      ],
      popular: false,
      cta: 'Começar Agora',
    },
    {
      name: 'Professional',
      description: 'Ideal para profissionais e empresas em crescimento',
      monthlyPrice: 'R$ 599',
      annualPrice: 'R$ 499',
      features: [
        '5 Projetos',
        'Deploy automático',
        '50GB Armazenamento',
        'SSL gratuito',
        'Suporte prioritário',
        'Backup diário',
        'CDN Global',
        'Analytics avançado',
      ],
      popular: true,
      cta: 'Começar Agora',
    },
    {
      name: 'Business',
      description: 'Para empresas que precisam de mais poder e controle',
      monthlyPrice: 'R$ 1.299',
      annualPrice: 'R$ 1.099',
      features: [
        'Projetos ilimitados',
        'Deploy automático',
        '200GB Armazenamento',
        'SSL gratuito',
        'Suporte 24/7',
        'Backup em tempo real',
        'CDN Global',
        'Analytics avançado',
        'Ambientes de staging',
        'Equipe colaborativa',
      ],
      popular: false,
      cta: 'Começar Agora',
    },
    {
      name: 'Enterprise',
      description: 'Soluções personalizadas para grandes organizações',
      monthlyPrice: 'Personalizado',
      annualPrice: 'Personalizado',
      features: [
        'Tudo do Business +',
        'Infraestrutura dedicada',
        'Armazenamento ilimitado',
        'SLA garantido',
        'Gerente de conta dedicado',
        'Consultoria técnica',
        'Integração personalizada',
        'Treinamento da equipe',
        'Suporte white-glove',
        'Compliance e segurança avançada',
      ],
      popular: false,
      cta: 'Agendar Reunião',
      isEnterprise: true,
    },
  ];

  const handlePlanSelect = (plan: typeof plans[0]) => {
    if (plan.isEnterprise) {
      openWhatsApp();
    } else {
      navigate('/demonstracao');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Preços
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
            Planos para todos os tamanhos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Escolha o plano perfeito para suas necessidades. Todos os planos incluem 14 dias de teste grátis.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod('annually')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                billingPeriod === 'annually'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Anual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-blue-500 shadow-2xl scale-105'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    {!plan.isEnterprise && (
                      <span className="text-gray-600 ml-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        /mês
                      </span>
                    )}
                  </div>
                  {billingPeriod === 'annually' && !plan.isEnterprise && (
                    <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Cobrado anualmente
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                      : plan.isEnterprise
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Perguntas Frequentes
          </h2>
          <div className="text-left space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Posso trocar de plano a qualquer momento?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Como funciona o teste gratuito?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Você tem 14 dias para testar todos os recursos do plano escolhido. Não é necessário cartão de crédito.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Quais são as formas de pagamento?
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                Aceitamos cartão de crédito, PIX e boleto bancário. Para planos Enterprise, também oferecemos faturamento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
