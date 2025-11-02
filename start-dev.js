#!/usr/bin/env node

// Script para iniciar o Vite com configurações que funcionam com ngrok
const { spawn } = require('child_process');

console.log('🚀 Iniciando servidor de desenvolvimento com suporte ao ngrok...');

const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5173'], {
  stdio: 'inherit',
  shell: true
});

vite.on('error', (err) => {
  console.error('❌ Erro ao iniciar o Vite:', err);
});

vite.on('close', (code) => {
  console.log(`📦 Vite finalizado com código ${code}`);
});

// Capturar Ctrl+C para parar o servidor
process.on('SIGINT', () => {
  console.log('\n🛑 Parando servidor...');
  vite.kill('SIGINT');
  process.exit(0);
});
