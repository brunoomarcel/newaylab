import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from './AnimatedButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#0d1117]/95 backdrop-blur-md border-b border-gray-800/50'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logos/logo-menu.png" 
              alt="NewayLab Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Início
            </a>
            <a
              href="#solucoes-ia-automacao"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#solucoes-ia-automacao');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Soluções
            </a>
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#sobre');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Sobre
            </a>
            <a
              href="#demonstracao"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#demonstracao');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Projetos
            </a>
            <a
              href="#schedule-meeting"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#schedule-meeting');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contato
            </a>
          </div>

          {/* Right Side Button */}
          <div className="hidden md:flex items-center gap-4">
            <AnimatedButton
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#schedule-meeting');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              variant="primary"
              className="!px-4 !py-2 !text-sm"
            >
              Agendar Reunião
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-colors duration-200 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800/50 bg-[#0d1117]/95 backdrop-blur-md rounded-lg p-4 -mx-6">
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Início
              </a>
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const element = document.querySelector('#sobre');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Sobre
              </a>
              <a
                href="#solucoes-ia-automacao"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const element = document.querySelector('#solucoes-ia-automacao');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Soluções
              </a>
              <a
                href="#demonstracao"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const element = document.querySelector('#demonstracao');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Projetos
              </a>
              <a
                href="#schedule-meeting"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const element = document.querySelector('#schedule-meeting');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Contato
              </a>
              <AnimatedButton
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const element = document.querySelector('#schedule-meeting');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                variant="primary"
                className="!px-4 !py-2 !text-sm text-center w-full"
              >
                Agendar Reunião
              </AnimatedButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
