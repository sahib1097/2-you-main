import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  icon,
  iconPosition = 'left',
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'text-neutral-300 hover:text-white hover:bg-white/5',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // If it's a "See Demo" button, link directly to calendar
  if (children === 'See Demo' || children === 'Watch Demo' || children === 'View Demo') {
    href = '/get-started?calendar=true';
  }
  
  // If it's a "Get Started" or similar button, link to questionnaire
  if (children === 'Get Started' || 
      children === 'Start Free Trial' || 
      children === 'Request Demo' || 
      children === 'Schedule Demo' ||
      children === 'Book Integration Call' ||
      children === 'Modernize Now' ||
      children === 'Try It Free') {
    href = '/get-started';
  }

  // If it's a pricing-related button, link to pricing page
  if (children === 'Compare Pricing' || children === 'View Pricing') {
    href = '/pricing';
  }
  
  if (href) {
    return (
      <Link to={href} className={classes}>
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} type={type} className={classes}>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;