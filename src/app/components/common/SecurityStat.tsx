import React from 'react';
import { useSecurityContext } from '../../contexts/SecurityContext';

interface SecurityStatProps {
  title: string;
  value: string;
  className?: string;
}

const SecurityStat: React.FC<SecurityStatProps> = ({ title, value, className = '' }) => {
  const { fortressMode } = useSecurityContext();
  
  return (
    <div 
      className={`
        rounded-lg p-4 shadow-lg 
        ${fortressMode ? 'bg-[#1A1A1A] border border-[#FF3B30]' : 'bg-white border border-gray-200'} 
        ${className}
      `}
    >
      <h4 className="font-bold text-[#FF3B30] text-sm">{title}</h4>
      <p className={`text-xs mt-1 ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{value}</p>
    </div>
  );
};

export default SecurityStat;