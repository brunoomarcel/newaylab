import React, { useEffect, useRef, useMemo } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  life: number;
  maxLife: number;
}

interface AdvancedParticlesProps {
  particleCount?: number;
  colors?: string[];
  interactive?: boolean;
  className?: string;
}

const AdvancedParticles: React.FC<AdvancedParticlesProps> = ({
  particleCount = 150,
  colors = ['rgba(34, 211, 238, 0.8)', 'rgba(16, 185, 129, 0.8)', 'rgba(255, 255, 255, 0.5)'],
  interactive = true,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25, // Aumentado para mais movimento
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 3 + 1, // Aumentado o tamanho
      alpha: Math.random() * 0.5 + 0.25, // Mais visível
      color: colors[Math.floor(Math.random() * colors.length)],
      life: Math.random() * 300 + 150,
      maxLife: Math.random() * 300 + 150
    }));
  }, [particleCount, colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check with wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse interaction
        if (interactive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) { // Aumentado o raio de interação
            const force = (150 - distance) / 150;
            particle.vx += (dx / distance) * force * 0.004; // Aumentado a força
            particle.vy += (dy / distance) * force * 0.004;
            particle.alpha = Math.min(0.9, particle.alpha + 0.02); // Mais visível na interação
          } else {
            particle.alpha = Math.max(0.25, particle.alpha - 0.008);
          }
        }

        // Life cycle
        particle.life--;
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.alpha = Math.random() * 0.5 + 0.3;
        }

        // Draw connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) { // Aumentado o raio de conexão
              const opacity = (1 - distance / 120) * 0.25; // Mais visível
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
              ctx.lineWidth = 0.8; // Linhas mais grossas
              ctx.stroke();
            }
          }
        });

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        
        // Glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 4; // Brilho mais intenso
        
        // Main particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        ctx.restore();
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [particles, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 5 }}
    />
  );
};

export default AdvancedParticles;
