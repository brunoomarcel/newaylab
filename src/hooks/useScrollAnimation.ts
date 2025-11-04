import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollProgress };
};

export const useParallax = (speed: number = 0.5) => {
  const { scrollY } = useScrollAnimation();
  return scrollY * speed;
};

