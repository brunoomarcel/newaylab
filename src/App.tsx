import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import UseCase from './components/UseCase';
import FeaturesGrid from './components/FeaturesGrid';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Security from './components/Security';
import FinalCTA from './components/FinalCTA';
import ChatWidget from './components/ChatWidget';
import WhyChooseUs from './components/WhyChooseUs';
import ScheduleMeeting from './components/ScheduleMeeting';
// import SmartBackgroundMusic from './components/BackgroundMusic';
// import CookieConsent from './components/CookieConsent';

function App() {
  useEffect(() => {
    // Garantir que a landing page sempre comece no topo
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <Hero />
      <UseCase />
      <FeaturesGrid />
      <WhyChooseUs />
      <Stats />
      <HowItWorks />
      <ScheduleMeeting />
      <Testimonials />
      <Security />
      <FinalCTA />
      <ChatWidget />
      {/* <SmartBackgroundMusic /> */}
      {/* <CookieConsent /> */}
    </div>
  );
}

export default App;