import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music, SkipForward, Play, Pause, Zap } from 'lucide-react';
import musicDetectionService, { MusicCharacteristics } from '../services/musicDetectionService';
import audioGenerationService, { GeneratedTrack } from '../services/audioGenerationService';

const SmartBackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<GeneratedTrack | null>(null);
  const [volume, setVolume] = useState(0.15);
  const [isLoading, setIsLoading] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectedCharacteristics, setDetectedCharacteristics] = useState<MusicCharacteristics | null>(null);
  const [detectionStatus, setDetectionStatus] = useState<string>('');
  
  const detectionIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Carrega uma faixa padrão
    const defaultTracks = audioGenerationService.getAllTracks();
    if (defaultTracks.length > 0) {
      setCurrentTrack(defaultTracks[0]);
    }

    return () => {
      stopDetection();
      audioGenerationService.cleanup();
    };
  }, []);

  const togglePlay = async () => {
    if (!currentTrack) return;

    setHasUserInteracted(true);
    setIsLoading(true);

    try {
      if (isPlaying) {
        audioGenerationService.stopCurrentTrack();
        setIsPlaying(false);
      } else {
        // Inicializa AudioContext se necessário
        const initialized = await audioGenerationService.initAudioContext();
        if (!initialized) {
          throw new Error('Não foi possível inicializar o áudio');
        }

        const success = audioGenerationService.generateTrack(currentTrack, volume);
        if (success) {
          setIsPlaying(true);
        } else {
          throw new Error('Falha ao gerar música');
        }
      }
    } catch (error) {
      console.warn('Erro ao reproduzir áudio:', error);
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    audioGenerationService.setVolume(newMutedState ? 0 : volume);
  };

  const nextTrack = () => {
    const allTracks = audioGenerationService.getAllTracks();
    if (allTracks.length === 0) return;

    const currentIndex = allTracks.findIndex(track => track.id === currentTrack?.id);
    const nextIndex = (currentIndex + 1) % allTracks.length;
    const nextTrack = allTracks[nextIndex];
    
    setCurrentTrack(nextTrack);

    // Se estiver tocando, muda para a próxima música
    if (isPlaying) {
      audioGenerationService.generateTrack(nextTrack, volume);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioGenerationService.setVolume(newVolume);
  };

  // Sistema de detecção inteligente
  const toggleDetection = async () => {
    if (isDetecting) {
      stopDetection();
    } else {
      startDetection();
    }
  };

  const startDetection = async () => {
    setIsLoading(true);
    setDetectionStatus('Solicitando permissão do microfone...');

    const success = await musicDetectionService.initAudioDetection();
    
    if (success) {
      setIsDetecting(true);
      setDetectionStatus('🎵 Ouvindo música ambiente...');
      
      // Inicia análise contínua
      detectionIntervalRef.current = window.setInterval(() => {
        const characteristics = musicDetectionService.analyzeAudioCharacteristics();
        
        if (characteristics) {
          setDetectedCharacteristics(characteristics);
          setDetectionStatus(`🎧 Detectado: ${characteristics.genre} | ${characteristics.bpm} BPM | ${characteristics.mood}`);
          
          // Busca música similar
          const similarTrack = musicDetectionService.findSimilarTrack(characteristics);
          
          if (similarTrack && similarTrack.id !== currentTrack?.id) {
            setCurrentTrack(similarTrack);
            setDetectionStatus(`🎯 Tocando música similar: ${similarTrack.title}`);
            
            // Auto-play se não estiver tocando
            if (!isPlaying && hasUserInteracted) {
              setTimeout(() => {
                togglePlay();
              }, 1000);
            }
          }
        }
      }, 3000); // Analisa a cada 3 segundos
      
    } else {
      setDetectionStatus('❌ Não foi possível acessar o microfone');
      setTimeout(() => setDetectionStatus(''), 3000);
    }
    
    setIsLoading(false);
  };

  const stopDetection = () => {
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
    
    musicDetectionService.stopDetection();
    setIsDetecting(false);
    setDetectedCharacteristics(null);
    setDetectionStatus('');
  };

  const getMoodEmoji = (mood: string): string => {
    switch (mood) {
      case 'energetic': return '⚡';
      case 'euphoric': return '🌟';
      case 'uplifting': return '☀️';
      case 'atmospheric': return '🌙';
      case 'chill': return '😌';
      default: return '🎵';
    }
  };

  const getGenreColor = (genre: string): string => {
    switch (genre) {
      case 'deep_house': return 'text-purple-400';
      case 'techno': return 'text-red-400';
      case 'progressive_house': return 'text-blue-400';
      case 'chillwave': return 'text-green-400';
      case 'ambient_house': return 'text-cyan-400';
      default: return 'text-white';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Player inteligente */}
      <div className="flex flex-col space-y-3">
        
        {/* Status de detecção */}
        {detectionStatus && (
          <div className="bg-slate-800/95 backdrop-blur-md rounded-xl px-3 py-2 border border-slate-700/50 shadow-2xl max-w-xs">
            <div className="text-xs text-cyan-400 font-medium">{detectionStatus}</div>
            {detectedCharacteristics && (
              <div className="text-xs text-slate-300 mt-1">
                {getMoodEmoji(detectedCharacteristics.mood)} {detectedCharacteristics.mood} | 
                <span className={getGenreColor(detectedCharacteristics.genre)}> {detectedCharacteristics.genre}</span>
              </div>
            )}
          </div>
        )}

        {/* Player principal */}
        <div className="flex items-center space-x-3 bg-slate-800/95 backdrop-blur-md rounded-2xl px-4 py-3 border border-slate-700/50 shadow-2xl transition-all duration-300 hover:bg-slate-800 hover:scale-105">
          
          {/* Indicador e detecção inteligente */}
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              isPlaying ? 'bg-green-400 animate-pulse' : 'bg-slate-500'
            }`}></div>
            
            {/* Botão de detecção inteligente */}
            <button
              onClick={toggleDetection}
              disabled={isLoading}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50 ${
                isDetecting 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse' 
                  : 'bg-slate-700 text-slate-400 hover:text-white'
              }`}
              title={isDetecting ? "Parar detecção inteligente" : "Ativar detecção inteligente"}
            >
              {isDetecting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Zap size={16} />
              )}
            </button>
            
            <Music size={18} className="text-cyan-400" />
            <span className="text-xs text-white/70 hidden sm:block">Smart Music</span>
          </div>

          {/* Controles principais */}
          <div className="flex items-center space-x-2">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              disabled={isLoading || !currentTrack}
              className="relative p-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              title={isPlaying ? "Pausar música" : "Reproduzir música inteligente"}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : isPlaying ? (
                <Pause size={16} className="text-white" />
              ) : (
                <Play size={16} className="text-white ml-0.5" />
              )}
            </button>

            {/* Next Track */}
            <button
              onClick={nextTrack}
              disabled={isLoading}
              className="p-2 text-white/70 hover:text-cyan-400 transition-colors duration-300 disabled:opacity-50"
              title="Próxima faixa"
            >
              <SkipForward size={16} />
            </button>

            {/* Volume Toggle */}
            <button
              onClick={toggleMute}
              className="p-2 text-white/70 hover:text-white transition-colors duration-300"
              title={isMuted ? "Ativar som" : "Silenciar"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>

          {/* Info da música (aparece no hover) */}
          {currentTrack && (
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden max-w-0 group-hover:max-w-32 hidden md:block">
              <div className="text-xs text-white/80 font-medium whitespace-nowrap">
                {currentTrack.title}
              </div>
              <div className="text-xs text-white/50 whitespace-nowrap">
                {currentTrack.artist}
              </div>
              {currentTrack.characteristics && (
                <div className="text-xs text-cyan-400 whitespace-nowrap">
                  {currentTrack.characteristics.bpm} BPM | {currentTrack.characteristics.genre}
                </div>
              )}
            </div>
          )}

          {/* Volume slider (aparece no hover) */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden max-w-0 group-hover:max-w-20 hidden lg:block">
            <input
              type="range"
              min="0"
              max="0.4"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer music-volume-slider"
              title={`Volume: ${Math.round(volume * 100)}%`}
            />
          </div>
        </div>
      </div>
      
      {/* Tooltip de ajuda para primeira interação */}
      {!hasUserInteracted && (
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          🎯 Clique em ⚡ para detecção inteligente
          <div className="text-slate-400 mt-1">Reconhece sua música e toca similar</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
        </div>
      )}
    </div>
  );
};

export default SmartBackgroundMusic;
