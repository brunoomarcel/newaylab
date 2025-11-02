import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-[#0d1117] font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              NewayLab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Início
            </Link>
            <Link
              to="/demonstracao"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Demonstração
            </Link>
            <Link
              to="/documentacao-tecnica"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Documentação
            </Link>
            <Link
              to="/precos"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Preços
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5533997001663"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contato
            </a>
            <Link
              to="/demonstracao"
              className="px-4 py-2 text-sm font-semibold text-[#0d1117] bg-white rounded-md hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Começar
            </Link>
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
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800/50">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                to="/"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Início
              </Link>
              <Link
                to="/demonstracao"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Demonstração
              </Link>
              <Link
                to="/documentacao-tecnica"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Documentação
              </Link>
              <Link
                to="/precos"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Preços
              </Link>
              <a
                href="https://wa.me/5533997001663"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Contato
              </a>
              <Link
                to="/demonstracao"
                className="px-4 py-2 text-sm font-semibold text-[#0d1117] bg-white rounded-md hover:bg-gray-100 transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Começar
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
