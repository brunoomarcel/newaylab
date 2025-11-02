import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import SolucoesEProdutos from './pages/SolucoesEProdutos.tsx';
import MetodologiaDesenvolvimento from './pages/MetodologiaDesenvolvimento.tsx';
import FaleConosco from './pages/FaleConosco.tsx';
import VerDemonstracao from './pages/VerDemonstracao.tsx';
import PlaygroundPage from './pages/PlaygroundPage.tsx';
import PersonalidadesPage from './pages/PersonalidadesPage.tsx';
import DocumentacaoTecnica from './pages/DocumentacaoTecnica.tsx';
import Pricing from './pages/Pricing.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import Projeto from './pages/Projeto.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/solucoes-produtos" element={<SolucoesEProdutos />} />
        <Route path="/metodologia" element={<MetodologiaDesenvolvimento />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/demonstracao" element={<VerDemonstracao />} />
        <Route path="/precos" element={<Pricing />} />
        <Route path="/personalidades" element={<PersonalidadesPage />} />
        <Route path="/playground/:businessId" element={<PlaygroundPage />} />
        <Route path="/documentacao-tecnica" element={<DocumentacaoTecnica />} />
        <Route path="/projeto" element={<Projeto />} />
      </Routes>
    </Router>
  </StrictMode>
);
