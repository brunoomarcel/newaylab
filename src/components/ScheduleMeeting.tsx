import { useEffect, useState } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const ScheduleMeeting = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
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
            <span className="bg-gradient-to-r from-cyan-500 to-[#5539ff] bg-clip-text text-transparent">
              Consultoria Gratuita
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Nossa equipe irá avaliar seu negócio e te ajudar a escalar com Automação e IA
          </p>
        </div>

        {/* Cal.com Embedding */}
        <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div style={{width:"100%",height:"800px",overflow:"scroll"}}>
            <Cal 
              namespace="30min"
              calLink="jyze-space-o1mye9/30min"
              style={{width:"100%",height:"100%",overflow:"scroll"}}
              config={{"layout":"month_view"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleMeeting;
