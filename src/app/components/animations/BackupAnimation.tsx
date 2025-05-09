import React, { useEffect, useState } from 'react';
import { Cloud, Lock } from 'lucide-react';
import { useSecurityContext } from '../../contexts/SecurityContext';

const BackupAnimation: React.FC = () => {
  const { fortressMode } = useSecurityContext();
  const [animationStep, setAnimationStep] = useState(0);
  const [showLock, setShowLock] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 3);
      
      if (animationStep === 1) {
        setShowLock(true);
      } else {
        setShowLock(false);
      }
    }, 1500);
    
    return () => clearInterval(interval);
  }, [animationStep]);
  
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <div className="relative">
        <Cloud 
          size={48} 
          className={`
            ${animationStep === 2 ? 'text-[#FF3B30]' : 'text-gray-500'}
            transition-colors duration-500
          `} 
        />
        
        {showLock && (
          <div className="absolute inset-0 flex items-center justify-center animation-pulse">
            <Lock size={24} className="text-[#FF3B30]" />
          </div>
        )}
        
        <div className={`
          absolute -bottom-4 left-0 right-0 h-1 bg-gray-600 overflow-hidden
        `}>
          <div 
            className={`
              progress-bar ${animationStep > 0 ? 'animate' : ''}
              transition-all duration-1500
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BackupAnimation;