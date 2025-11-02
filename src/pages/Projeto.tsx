import React, { useState } from 'react';

const Projeto: React.FC = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Tente adivinhar o número!');
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleGuess = () => {
    const guessNum = parseInt(guess, 10);
    if (guessNum === number) {
      setMessage('Parabéns! Você acertou!');
    } else if (guessNum < number) {
      setMessage('Tente um número maior!');
    } else {
      setMessage('Tente um número menor!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black p-8">
      <div className="max-w-3xl mx-auto text-white space-y-6">
        <h1 className="text-4xl font-bold mb-4 border-b-2 border-blue-300 pb-2">Sobre o Projeto</h1>
        
        <p className="mb-4">
          Bem-vindo à nossa plataforma inovadora! Este projeto foi desenvolvido com o objetivo de
          proporcionar uma experiência única ao usuário, integrando tecnologias de ponta para
          oferecer soluções eficientes e acessíveis.
        </p>
        
        <h2 className="text-3xl font-semibold mt-8 mb-4 border-b border-blue-300 pb-1">Funcionalidades Principais</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2 marker:text-blue-400">
          <li>Geração de áudio utilizando inteligência artificial, tornando suas criações ainda mais únicas.</li>
          <li>Sistema de comparação de vídeos avançado, facilitando a decisão entre diferentes resultados de IA.</li>
          <li>Interatividade dinâmica e fluida proporcionada por tecnologias modernas como React e TypeScript.</li>
        </ul>
        
        <h2 className="text-3xl font-semibold mt-8 mb-4 border-b border-blue-300 pb-1">Nossos Objetivos</h2>
        <p className="mb-4">
          Estamos sempre em busca de inovações que possam melhorar a experiência do usuário e otimizar
          nossos serviços com base no feedback dos usuários e nas tendências atuais do mercado.
        </p>
        
        <h2 className="text-3xl font-semibold mt-8 mb-4 border-b border-blue-300 pb-1">Visão para o Futuro</h2>
        <p className="mb-4">
          Pretendemos expandir nossa plataforma com novas funcionalidades, parcerias estratégicas, e
          um foco contínuo em proporcionar o máximo valor aos nossos usuários.
        </p>
        
        <p>
          Agradecemos por fazer parte da nossa jornada e esperamos que você aproveite ao máximo o que
          nossa plataforma tem a oferecer!
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4 border-b border-blue-300 pb-1">Jogo de Adivinhação</h2>
        <p className="mb-4">{message}</p>
        <input
          type="number"
          className="text-black p-2"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Digite seu palpite"
        />
        <button
          onClick={handleGuess}
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Testar
        </button>
      </div>
    </div>
  );
};

export default Projeto;
