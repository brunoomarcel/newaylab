// Script para gerar áudios simples com Web Audio API
// Execute este arquivo no navegador para gerar os arquivos de áudio

function generateAmbientTrack(frequency, duration = 30) {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const sampleRate = audioContext.sampleRate;
  const numSamples = sampleRate * duration;
  const buffer = audioContext.createBuffer(1, numSamples, sampleRate);
  const channelData = buffer.getChannelData(0);

  // Gera um tom ambiente suave
  for (let i = 0; i < numSamples; i++) {
    const time = i / sampleRate;
    // Combina diferentes frequências para criar um som ambiente
    const base = Math.sin(2 * Math.PI * frequency * time) * 0.1;
    const harmony = Math.sin(2 * Math.PI * (frequency * 1.5) * time) * 0.05;
    const texture = Math.sin(2 * Math.PI * (frequency * 0.5) * time) * 0.03;
    
    // Envelope suave
    const envelope = Math.min(time * 2, 1) * Math.min((duration - time) * 2, 1);
    
    channelData[i] = (base + harmony + texture) * envelope;
  }

  return buffer;
}

// Função para baixar o buffer como WAV
function downloadBuffer(buffer, filename) {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const format = 1; // PCM
  const bitDepth = 16;
  
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = buffer.length * blockAlign;
  const bufferSize = 44 + dataSize;
  
  const arrayBuffer = new ArrayBuffer(bufferSize);
  const view = new DataView(arrayBuffer);
  
  // WAV header
  const writeString = (offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };
  
  writeString(0, 'RIFF');
  view.setUint32(4, bufferSize - 8, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);
  
  // Convert samples
  const channelData = buffer.getChannelData(0);
  let offset = 44;
  for (let i = 0; i < channelData.length; i++) {
    const sample = Math.max(-1, Math.min(1, channelData[i]));
    view.setInt16(offset, sample * 0x7FFF, true);
    offset += 2;
  }
  
  const blob = new Blob([arrayBuffer], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Gerar os três tracks
console.log('Gerando tracks de áudio...');

setTimeout(() => {
  const track1 = generateAmbientTrack(220, 30); // A3
  downloadBuffer(track1, 'ambient-tech.wav');
}, 1000);

setTimeout(() => {
  const track2 = generateAmbientTrack(330, 30); // E4
  downloadBuffer(track2, 'corporate-flow.wav');
}, 2000);

setTimeout(() => {
  const track3 = generateAmbientTrack(440, 30); // A4
  downloadBuffer(track3, 'innovation.wav');
}, 3000);

console.log('Tracks serão baixados em 1, 2 e 3 segundos...');
