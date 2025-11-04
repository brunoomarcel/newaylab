import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollProgress = () => {
  const { scrollProgress } = useScrollAnimation();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-gray-900/10">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 to-[#5539ff] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

