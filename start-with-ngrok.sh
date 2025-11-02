#!/bin/bash

echo "🚀 Iniciando servidor com suporte completo ao ngrok..."

# Parar qualquer processo do Vite que esteja rodando
pkill -f "vite" 2>/dev/null

# Aguardar um pouco
sleep 2

# Iniciar o Vite com configurações otimizadas para ngrok
echo "📦 Iniciando Vite..."
npx vite --host 0.0.0.0 --port 5173 --cors &

# Aguardar o Vite inicializar
sleep 3

# Verificar se o Vite está rodando
if curl -s http://localhost:5173 > /dev/null; then
    echo "✅ Vite rodando em http://localhost:5173"
    echo "🌐 Para usar com ngrok, execute em outro terminal:"
    echo "   ngrok http 5173"
    echo ""
    echo "📝 Dica: Use o link HTTP do ngrok, não HTTPS"
    echo "🛑 Para parar o servidor, pressione Ctrl+C"
    
    # Manter o script rodando
    wait
else
    echo "❌ Erro ao iniciar o Vite"
    exit 1
fi
