import React, { useEffect, useState } from 'react';
import { useSecurityContext } from '../../contexts/SecurityContext';

const PasswordAnimation: React.FC = () => {
  const { fortressMode } = useSecurityContext();
  const [password, setPassword] = useState('');
  const [shielding, setShielding] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (password.length < 8) {
        setPassword(password + '*');
      } else {
        setShielding(true);
        setTimeout(() => {
          setPassword('');
          setShielding(false);
        }, 1000);
      }
    }, 300);
    
    return () => clearInterval(interval);
  }, [password]);
  
  return (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <div className="w-4/5 max-w-[200px] relative">
        <div className={`
          w-full h-10 rounded border px-2 flex items-center
          ${fortressMode ? 'border-[#FF3B30]' : 'border-gray-600'}
          ${shielding ? 'breach-alert' : ''}
        `}>
          <span className={`font-mono ${fortressMode ? 'text-white' : 'text-white'}`}>
            {password}
          </span>
        </div>
        
        {shielding && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#FF3B30] opacity-20"></div>
            <span className="text-xs font-bold text-[#FF3B30] z-10">ENCRYPTED</span>
          </div>
        )}
        
        <div className="text-xs mt-1 text-center text-gray-400">Failsafe Password</div>
      </div>
    </div>
  );
};

export default PasswordAnimation;