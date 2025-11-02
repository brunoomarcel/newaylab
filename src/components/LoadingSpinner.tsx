import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  variant = 'primary' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const variantClasses = {
    primary: 'border-cyan-400 border-t-emerald-400',
    secondary: 'border-slate-400 border-t-white',
    accent: 'border-emerald-400 border-t-cyan-400'
  };

  return (
    <div className={`
      ${sizeClasses[size]} 
      border-2 
      ${variantClasses[variant]} 
      rounded-full 
      animate-spin
    `}></div>
  );
};

export default LoadingSpinner;
