import React, { useState } from 'react';
import { useSecurityContext } from '../../contexts/SecurityContext';
import EncryptionAnimation from '../animations/EncryptionAnimation';
import PasswordAnimation from '../animations/PasswordAnimation';
import NetworkAnimation from '../animations/NetworkAnimation';
import BackupAnimation from '../animations/BackupAnimation';

interface AnimatedSecurityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technicalDetail: string;
  animationType: string;
}

const AnimatedSecurityCard: React.FC<AnimatedSecurityCardProps> = ({
  icon,
  title,
  description,
  technicalDetail,
  animationType
}) => {
  const [expanded, setExpanded] = useState(false);
  const { fortressMode } = useSecurityContext();
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  const renderAnimation = () => {
    switch (animationType) {
      case 'EncryptionAnimation':
        return <EncryptionAnimation />;
      case 'PasswordAnimation':
        return <PasswordAnimation />;
      case 'NetworkAnimation':
        return <NetworkAnimation />;
      case 'BackupAnimation':
        return <BackupAnimation />;
      default:
        return null;
    }
  };
  
  return (
    <div 
      className={`
        security-card rounded-lg p-6 cursor-pointer
        ${expanded ? 'shadow-xl' : 'shadow'}
        ${fortressMode 
          ? 'bg-[#1A1A1A] border border-[#FF3B30] hover:border-red-500' 
          : 'bg-white hover:bg-gray-50 border border-gray-100'}
      `}
      onClick={toggleExpanded}
    >
      <div className="flex items-start mb-4">
        <div className="mr-4 mt-1">{icon}</div>
        <div>
          <h3 className={`font-bold text-xl ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            {title}
          </h3>
          <p className={`mt-2 ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {description}
          </p>
        </div>
      </div>
      
      {expanded && (
        <div className="mt-6 space-y-4">
          <div className="h-24 bg-black rounded-md overflow-hidden">
            {renderAnimation()}
          </div>
          
          <div className={`
            p-4 rounded mt-4 text-sm
            ${fortressMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'}
          `}>
            <h4 className="font-bold text-[#FF3B30] mb-2">Technical Details</h4>
            <p>{technicalDetail}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedSecurityCard;