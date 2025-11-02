// Smart Music Detection & Matching Service
export interface MusicCharacteristics {
  bpm: number;
  energy: number; // 0-1
  mood: string;
  genre: string;
  hasVocals: boolean;
  key: string;
  danceability: number; // 0-1
  valence: number; // 0-1 (positivity)
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  duration: number;
  characteristics: MusicCharacteristics;
  tags: string[];
}

class MusicDetectionService {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private mediaStream: MediaStream | null = null;

  // Biblioteca curada de músicas eletrônicas livres (estilo Rufus Du Sol)
  private readonly musicLibrary: Track[] = [
    {
      id: 'track_001',
      title: 'Neon Dreams',
      artist: 'Echo Valley',
      url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      duration: 240,
      characteristics: {
        bpm: 118,
        energy: 0.7,
        mood: 'euphoric',
        genre: 'deep_house',
        hasVocals: true,
        key: 'F#m',
        danceability: 0.8,
        valence: 0.6
      },
      tags: ['deep house', 'vocal', 'melodic', 'uplifting']
    },
    {
      id: 'track_002',
      title: 'Midnight Frequency',
      artist: 'Solar Waves',
      url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      duration: 280,
      characteristics: {
        bpm: 122,
        energy: 0.8,
        mood: 'energetic',
        genre: 'progressive_house',
        hasVocals: true,
        key: 'Am',
        danceability: 0.9,
        valence: 0.7
      },
      tags: ['progressive house', 'vocal', 'driving', 'peak time']
    },
    {
      id: 'track_003',
      title: 'Ocean Vibes',
      artist: 'Synthetic Shores',
      url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      duration: 195,
      characteristics: {
        bpm: 115,
        energy: 0.6,
        mood: 'chill',
        genre: 'chillwave',
        hasVocals: true,
        key: 'C',
        danceability: 0.5,
        valence: 0.8
      },
      tags: ['chillwave', 'vocal', 'dreamy', 'sunset']
    },
    {
      id: 'track_004',
      title: 'Digital Hearts',
      artist: 'Cyber Dreams',
      url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      duration: 220,
      characteristics: {
        bpm: 128,
        energy: 0.9,
        mood: 'intense',
        genre: 'techno',
        hasVocals: false,
        key: 'Gm',
        danceability: 0.95,
        valence: 0.4
      },
      tags: ['techno', 'dark', 'driving', 'underground']
    },
    {
      id: 'track_005',
      title: 'Ethereal Voices',
      artist: 'Ambient Collective',
      url: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      duration: 300,
      characteristics: {
        bpm: 110,
        energy: 0.5,
        mood: 'atmospheric',
        genre: 'ambient_house',
        hasVocals: true,
        key: 'Dm',
        danceability: 0.3,
        valence: 0.5
      },
      tags: ['ambient house', 'vocal', 'atmospheric', 'meditation']
    },
    {
      id: 'track_006',
      title: 'Pulse of the Titans',
      artist: 'ProTunes One',
      url: 'https://protunesone.com/pt/tracks/befb782a-a47e-54bb-a425-4f483978482f/details',
      duration: 240,
      characteristics: {
        bpm: 125,
        energy: 0.9,
        mood: 'epic',
        genre: 'cinematic_house',
        hasVocals: false,
        key: 'Em',
        danceability: 0.8,
        valence: 0.7
      },
      tags: ['cinematic', 'epic', 'driving', 'powerful', 'titans']
    },
    {
      id: 'track_007',
      title: 'Happy Vibrant Piano House',
      artist: 'Envato Elements',
      url: 'https://elements.envato.com/pt-br/happy-vibrant-piano-house-R8ET733',
      duration: 180,
      characteristics: {
        bpm: 126,
        energy: 0.85,
        mood: 'uplifting',
        genre: 'piano_house',
        hasVocals: false,
        key: 'C',
        danceability: 0.9,
        valence: 0.95
      },
      tags: ['piano house', 'happy', 'vibrant', 'uplifting', 'positive']
    }
  ];

  // Inicializa detecção de áudio ambiente
  async initAudioDetection(): Promise<boolean> {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false
        } 
      });
      
      this.audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const source = this.audioContext.createMediaStreamSource(this.mediaStream);
      
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 2048;
      
      source.connect(this.analyser);
      
      return true;
    } catch (error) {
      console.warn('Não foi possível acessar o microfone:', error);
      return false;
    }
  }

  // Analisa características musicais do áudio capturado
  analyzeAudioCharacteristics(): MusicCharacteristics | null {
    if (!this.analyser) return null;

    const bufferLength = this.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    this.analyser.getByteFrequencyData(dataArray);

    // Análise de frequências para detectar características
    const bassEnergy = this.getFrequencyRangeEnergy(dataArray, 0, 100); // 0-100 Hz
    const midEnergy = this.getFrequencyRangeEnergy(dataArray, 100, 1000); // 100Hz-1kHz
    const highEnergy = this.getFrequencyRangeEnergy(dataArray, 1000, bufferLength); // 1kHz+

    // Detecta BPM através de análise de picos
    const estimatedBPM = this.estimateBPM(dataArray);
    
    // Calcula energia geral
    const totalEnergy = (bassEnergy + midEnergy + highEnergy) / 3;
    const energy = Math.min(totalEnergy / 128, 1);

    // Detecta presença de vocais (frequências médias altas)
    const vocalRange = this.getFrequencyRangeEnergy(dataArray, 300, 3000);
    const hasVocals = vocalRange > 40;

    // Determina gênero baseado na distribuição de frequências
    const genre = this.detectGenre(bassEnergy, midEnergy, highEnergy, estimatedBPM);
    
    // Determina mood baseado na energia e distribuição
    const mood = this.detectMood(energy, bassEnergy, highEnergy);

    return {
      bpm: estimatedBPM,
      energy,
      mood,
      genre,
      hasVocals,
      key: 'Unknown', // Detecção de key requer análise mais complexa
      danceability: Math.min(energy * 1.2, 1),
      valence: energy > 0.6 ? 0.7 : 0.4
    };
  }

  // Encontra música similar na biblioteca
  findSimilarTrack(detectedCharacteristics: MusicCharacteristics): Track | null {
    if (this.musicLibrary.length === 0) return null;

    let bestMatch: Track | null = null;
    let bestScore = -1;

    for (const track of this.musicLibrary) {
      const score = this.calculateSimilarityScore(detectedCharacteristics, track.characteristics);
      
      if (score > bestScore) {
        bestScore = score;
        bestMatch = track;
      }
    }

    // Retorna apenas se a similaridade for razoável (> 60%)
    return bestScore > 0.6 ? bestMatch : null;
  }

  // Calcula score de similaridade entre características
  private calculateSimilarityScore(detected: MusicCharacteristics, library: MusicCharacteristics): number {
    let score = 0;
    let factors = 0;

    // BPM similarity (peso 30%)
    const bpmDiff = Math.abs(detected.bpm - library.bpm);
    const bpmScore = Math.max(0, 1 - (bpmDiff / 40)); // 40 BPM tolerance
    score += bpmScore * 0.3;
    factors += 0.3;

    // Energy similarity (peso 25%)
    const energyDiff = Math.abs(detected.energy - library.energy);
    const energyScore = Math.max(0, 1 - energyDiff);
    score += energyScore * 0.25;
    factors += 0.25;

    // Genre match (peso 20%)
    const genreScore = detected.genre === library.genre ? 1 : 0.3;
    score += genreScore * 0.2;
    factors += 0.2;

    // Mood match (peso 15%)
    const moodScore = detected.mood === library.mood ? 1 : 0.4;
    score += moodScore * 0.15;
    factors += 0.15;

    // Vocals match (peso 10%)
    const vocalScore = detected.hasVocals === library.hasVocals ? 1 : 0.5;
    score += vocalScore * 0.1;
    factors += 0.1;

    return factors > 0 ? score / factors : 0;
  }

  // Funções auxiliares de análise
  private getFrequencyRangeEnergy(dataArray: Uint8Array, startHz: number, endHz: number): number {
    const startBin = Math.floor(startHz * dataArray.length / 22050);
    const endBin = Math.floor(endHz * dataArray.length / 22050);
    
    let energy = 0;
    for (let i = startBin; i < Math.min(endBin, dataArray.length); i++) {
      energy += dataArray[i];
    }
    
    return energy / (endBin - startBin);
  }

  private estimateBPM(dataArray: Uint8Array): number {
    // Análise simples de BPM baseada em picos de bass
    const bassData = dataArray.slice(0, 20); // Primeiros 20 bins (frequências baixas)
    const peaks = this.findPeaks(bassData);
    
    // Estima BPM baseado na frequência de picos
    if (peaks.length < 2) return 120; // Default
    
    const avgInterval = peaks.reduce((sum, peak, i) => {
      return i > 0 ? sum + (peak - peaks[i - 1]) : sum;
    }, 0) / (peaks.length - 1);
    
    // Converte para BPM (estimativa grosseira)
    const estimatedBPM = Math.round(60000 / (avgInterval * 50)); // 50ms por sample aproximadamente
    
    // Clamp entre valores razoáveis
    return Math.max(80, Math.min(180, estimatedBPM));
  }

  private findPeaks(data: Uint8Array): number[] {
    const peaks: number[] = [];
    const threshold = Math.max(...data) * 0.6; // 60% do máximo
    
    for (let i = 1; i < data.length - 1; i++) {
      if (data[i] > threshold && data[i] > data[i - 1] && data[i] > data[i + 1]) {
        peaks.push(i);
      }
    }
    
    return peaks;
  }

  private detectGenre(bass: number, mid: number, high: number, bpm: number): string {
    const total = bass + mid + high;
    const bassRatio = bass / total;
    const midRatio = mid / total;
    const highRatio = high / total;

    if (bpm >= 120 && bpm <= 130 && bassRatio > 0.4) {
      return 'deep_house';
    } else if (bpm >= 128 && bpm <= 140 && bassRatio > 0.5) {
      return 'techno';
    } else if (bpm >= 110 && bpm <= 125 && midRatio > 0.4) {
      return 'progressive_house';
    } else if (bpm <= 115 && highRatio > 0.3) {
      return 'chillwave';
    } else if (bassRatio < 0.3 && highRatio > 0.4) {
      return 'ambient_house';
    }
    
    return 'electronic';
  }

  private detectMood(energy: number, bass: number, high: number): string {
    if (energy > 0.8) return 'energetic';
    if (energy > 0.6) return 'euphoric';
    if (energy > 0.4) return 'uplifting';
    if (high > bass * 1.5) return 'atmospheric';
    return 'chill';
  }

  // Cleanup
  stopDetection(): void {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
    
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    
    this.analyser = null;
  }

  // Getters para a biblioteca
  getAllTracks(): Track[] {
    return [...this.musicLibrary];
  }

  getTracksByGenre(genre: string): Track[] {
    return this.musicLibrary.filter(track => track.characteristics.genre === genre);
  }

  getTracksByMood(mood: string): Track[] {
    return this.musicLibrary.filter(track => track.characteristics.mood === mood);
  }
}

export default new MusicDetectionService();
