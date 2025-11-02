import { useEffect, useState } from 'react';
import { ArrowLeft, Code, Database, Shield, Globe, Users, CheckCircle, FileText, Settings, Monitor, Brain } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';

const DocumentacaoTecnica = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleReveal = useScrollReveal({ threshold: 0.2 });

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const technicalSections = [
    {
      id: 'sites-web',
      icon: Globe,
      title: "Sites e Sistemas Web Modernos",
      subtitle: "Soluções Digitais que Transformam seu Negócio",
      content: {
        overview: "Criamos sites e sistemas web que realmente funcionam para o seu negócio, aumentando suas vendas e facilitando o dia a dia da sua empresa.",
        technologies: [
          "Sites que carregam super rápido em qualquer dispositivo",
          "Sistemas que funcionam perfeitamente no celular e computador",
          "Plataformas seguras que protegem seus dados e dos clientes",
          "Integrações que conectam diferentes partes do seu negócio",
          "Backup automático para nunca perder informações importantes",
          "Atualizações constantes para manter tudo funcionando perfeitamente"
        ],
        features: [
          "Site responsivo que fica bonito em celular, tablet e computador",
          "Sistema de login seguro para você e seus funcionários",
          "Funciona mesmo quando não tem internet (salva as informações)",
          "Aparece no Google quando seus clientes procuram seus serviços",
          "Relatórios em tempo real de vendas, clientes e performance",
          "Testes automáticos que garantem que tudo sempre funcione"
        ],
        performance: {
          loadTime: "Carrega em menos de 2 segundos",
          lighthouse: "Performance excepcional",
          uptime: "Funciona 99.9% do tempo",
          scalability: "Suporta milhares de usuários simultâneos"
        }
      }
    },
    {
      id: 'inteligencia-artificial',
      icon: Brain,
      title: "Inteligência Artificial para seu Negócio",
      subtitle: "Automação que Economiza Tempo e Aumenta Vendas",
      content: {
        overview: "Implementamos Inteligência Artificial que funciona de verdade no seu negócio, automatizando tarefas repetitivas e ajudando você a tomar melhores decisões.",
        technologies: [
          "Chatbots inteligentes que atendem clientes 24 horas por dia",
          "Análise automática de dados para prever tendências de vendas",
          "Recomendações personalizadas que aumentam compras dos clientes",
          "Classificação automática de emails e mensagens importantes",
          "Relatórios inteligentes que mostram o que está funcionando",
          "Alertas automáticos quando algo precisa da sua atenção"
        ],
        features: [
          "IA que aprende com seu negócio e melhora com o tempo",
          "Previsões de demanda para você nunca ficar sem estoque",
          "Análise de sentimento dos clientes nas redes sociais",
          "Automação de processos que economiza horas de trabalho",
          "Detecção de oportunidades de venda que você perderia",
          "Suporte em português com explicações simples"
        ],
        performance: {
          efficiency: "80% menos tempo em tarefas repetitivas",
          accuracy: "95% de precisão nas previsões",
          sales: "Aumento médio de 40% nas vendas",
          satisfaction: "Clientes 3x mais satisfeitos"
        }
      }
    },
    {
      id: 'sistemas-gestao',
      icon: Database,
      title: "Sistemas de Gestão Completos",
      subtitle: "Organize Todo seu Negócio em um Só Lugar",
      content: {
        overview: "Criamos sistemas de gestão personalizados que organizam todos os aspectos do seu negócio, desde vendas até estoque, de forma simples e eficiente.",
        technologies: [
          "Sistema único que gerencia vendas, clientes e estoque",
          "Relatórios automáticos que mostram a saúde do seu negócio",
          "Busca rápida para encontrar qualquer informação em segundos",
          "Backup automático na nuvem para nunca perder dados",
          "Sistema que cresce junto com seu negócio",
          "Alertas inteligentes para situações importantes"
        ],
        features: [
          "Painel principal que mostra tudo importante de uma vez",
          "Controle total de estoque com alertas de produtos acabando",
          "Sistema de clientes que lembra histórico e preferências",
          "Automação do financeiro com contas a pagar e receber",
          "Relatórios personalizados que você exporta para Excel",
          "Conecta com outras ferramentas que você já usa"
        ],
        performance: {
          dataSync: "Informações sempre atualizadas",
          reports: "Relatórios na hora que você precisar",
          integration: "Conecta com mais de 50 sistemas diferentes",
          efficiency: "60% ganho produtividade"
        }
      }
    },
    {
      id: 'seguranca-dados',
      icon: Shield,
      title: "Segurança e Proteção de Dados",
      subtitle: "Seu Negócio e Clientes Sempre Protegidos",
      content: {
        overview: "Implementamos as melhores práticas de segurança para proteger seu negócio, dados dos clientes e garantir que tudo funcione sempre.",
        technologies: [
          "Servidores na nuvem com proteção em várias regiões do mundo",
          "Backup automático que mantém seus dados sempre seguros",
          "Senhas e dados criptografados que ninguém consegue hackear",
          "Testes de segurança regulares para encontrar vulnerabilidades",
          "Monitoramento 24 horas que detecta qualquer problema",
          "Certificados de segurança que seus clientes podem confiar"
        ],
        features: [
          "Login com dupla verificação para máxima segurança",
          "Todos os dados são criptografados (impossível de ler se roubados)",
          "Backup automático a cada hora, recuperação em minutos",
          "Monitoramento constante com alertas imediatos",
          "Compliance total com LGPD (Lei de Proteção de Dados)",
          "Testes de invasão regulares para garantir segurança"
        ],
        performance: {
          security: "Zero vazamentos de dados até hoje",
          compliance: "100% conforme LGPD",
          backup: "Recuperação em menos de 1 hora",
          monitoring: "Vigilância 24 horas por dia"
        }
      }
    },
    {
      id: 'whatsapp-ia',
      icon: Users,
      title: "Integração de IA ao WhatsApp",
      subtitle: "Atendimento Automatizado para Estabelecimentos Alimentícios",
      content: {
        overview: "A integração entre Inteligência Artificial (IA) e o WhatsApp oferece uma solução moderna para melhorar o atendimento, automatizar processos e aumentar a eficiência dos estabelecimentos alimentícios.",
        technologies: [
          "Conexão oficial com WhatsApp Business para empresas",
          "Inteligência Artificial que entende português naturalmente",
          "Sistema robusto que processa milhares de mensagens por dia",
          "Armazenamento seguro de todas as conversas e pedidos",
          "Comunicação instantânea entre cliente e sistema",
          "Memória de conversas para atendimento personalizado"
        ],
        features: [
          "Resposta automática a perguntas sobre cardápio",
          "Informações de preços, promoções e horários",
          "Registro e confirmação de pedidos automatizados",
          "Encaminhamento para atendente humano quando necessário",
          "Sugestões de combos e itens adicionais",
          "Acompanhamento do status do pedido em tempo real"
        ],
        performance: {
          responseTime: "Resposta em menos de 3 segundos",
          accuracy: "95% de precisão nas respostas",
          efficiency: "80% menos erros nos pedidos",
          sales: "Aumento de 35% no ticket médio"
        }
      }
    }
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
          <div 
            ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm mb-6 scroll-reveal ${
              titleReveal.isVisible ? 'revealed' : ''
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Documentação Técnica</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
            Especificações Técnicas
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl leading-relaxed mb-8 sm:mb-12">
            Documentação completa das <span className="text-cyan-400 font-semibold">tecnologias</span> e 
            <span className="text-emerald-400 font-semibold">soluções</span> utilizadas em nossos projetos.
          </p>
        </div>
      </div>

      {/* Technical Sections */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
          {technicalSections.map((section, index) => (
            <div
              key={index}
              id={section.id}
              className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <section.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                        {section.title}
                      </h2>
                      <p className="text-cyan-400 font-medium text-lg">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {section.content.overview}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(section.content.performance).map(([key, value], perfIndex) => (
                      <div key={perfIndex} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 backdrop-blur-sm">
                        <div className="text-emerald-400 font-bold text-lg">{value}</div>
                        <div className="text-slate-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-cyan-400" />
                      Stack Tecnológico
                    </h3>
                    <ul className="space-y-3">
                      {section.content.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-emerald-400" />
                      Funcionalidades
                    </h3>
                    <ul className="space-y-3">
                      {section.content.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Guarantees */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Garantias <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Técnicas</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover-lift">
              <Monitor className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Performance</h3>
              <p className="text-slate-300 text-sm">Garantia de performance com SLA de uptime 99.9% e tempos de resposta otimizados.</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover-lift">
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Segurança</h3>
              <p className="text-slate-300 text-sm">Compliance total com LGPD/GDPR e implementação de melhores práticas de segurança.</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover-lift">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Suporte</h3>
              <p className="text-slate-300 text-sm">Suporte técnico especializado com SLA de resposta e manutenção preventiva.</p>
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

export default DocumentacaoTecnica;
