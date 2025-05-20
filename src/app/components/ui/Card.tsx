import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'solid';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
}) => {
  const variantClasses = {
    default: 'bg-background-light border border-white/5',
    glass: 'glass',
    solid: 'bg-neutral-800 border border-neutral-700',
  };
  
  return (
    <div className={`
      rounded-lg shadow-card ${variantClasses[variant]} 
      ${hover ? 'card-hover' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;