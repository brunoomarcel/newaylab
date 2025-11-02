import { useEffect, useState, useRef } from 'react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CEO, Tech Solutions',
      company: 'Tech Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      quote: 'A NewayLab implementou IA conversacional que automatizou 90% do nosso atendimento. Nossa equipe agora foca em estratégia enquanto a IA cuida das operações.',
      rating: 5
    },
    {
      name: 'Maria Oliveira',
      role: 'Diretora de TI',
      company: 'Innovate Corp',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      quote: 'Reduzimos 70% dos custos operacionais com as automações. A implementação foi rápida e os resultados apareceram em menos de 30 dias. Equipe extremamente técnica!',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Fundador',
      company: 'StartupXYZ',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      quote: 'A consultoria foi fundamental. Identificaram gargalos que nem sabíamos que tínhamos e entregaram soluções de IA sob medida que triplicaram nossa produtividade.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Gerente de Operações',
      company: 'LogisticPro',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      quote: 'Automação inteligente que realmente funciona. O ROI foi positivo em 2 meses. Agora temos dashboards com IA que preveem problemas antes mesmo de acontecerem.',
      rating: 5
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Histórias reais de transformação digital
          </p>
        </div>

        {/* Main Testimonial - Featured */}
        <div className={`max-w-5xl mx-auto mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative bg-gradient-to-br from-[#1c2128] to-[#161b22] border border-gray-800 rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl"></div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                "{testimonials[activeTestimonial].quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].company}
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="ml-auto hidden md:flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails/Indicators */}
        <div className="flex justify-center gap-4 flex-wrap max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`group relative transition-all duration-300 ${
                index === activeTestimonial
                  ? 'scale-110'
                  : 'opacity-50 hover:opacity-100 scale-100 hover:scale-105'
              }`}
            >
              <div className={`w-16 h-16 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                index === activeTestimonial
                  ? 'border-blue-400 shadow-lg shadow-blue-400/50'
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Active indicator */}
              {index === activeTestimonial && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mt-8">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
              style={{ width: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
