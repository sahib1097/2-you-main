import React from 'react';
import { Lock, Shield } from 'lucide-react';
import { useSecurityContext } from '../../contexts/SecurityContext';

const SecurityFooter: React.FC = () => {
  const { fortressMode, incrementLockClicks } = useSecurityContext();
  
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Lock 
                className={`mr-2 ${fortressMode ? 'text-[#FF3B30]' : 'text-[#FF3B30]'}`} 
                size={20} 
                onClick={incrementLockClicks}
              />
              <h3 className={`font-bold text-xl ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Paranoid by Design
              </h3>
            </div>
            <p className={`mt-2 text-sm ${fortressMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Security isn't optional. It's engineered into everything we do.
            </p>
          </div>
          
          <div className={`
            px-6 py-3 rounded-lg text-white text-sm flex items-center
            ${fortressMode ? 'bg-[#FF3B30]' : 'bg-[#FF3B30]'}
          `}>
            <Shield className="mr-2" size={16} />
            <span>
              {fortressMode ? 'Fortress Mode Enabled' : 'Want more security? Click the lock 5 times'}
            </span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className={`text-sm ${fortressMode ? 'text-gray-500' : 'text-gray-600'}`}>
            © 2024 2You. All encryption algorithms and security protocols independently verified.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SecurityFooter;