import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { useSecurityContext } from '../../contexts/SecurityContext';

const SecurityStatusIndicator: React.FC = () => {
  const { fortressMode, securityStatus } = useSecurityContext();
  
  return (
    <div 
      className={`
        flex items-center rounded-full px-4 py-2
        ${securityStatus === 'secure' 
          ? fortressMode 
            ? 'bg-[#1A1A1A] border border-green-500' 
            : 'bg-green-50 border border-green-200' 
          : securityStatus === 'breach'
            ? 'bg-[#FF3B30] bg-opacity-10 border border-[#FF3B30] breach-alert' 
            : 'bg-yellow-50 border border-yellow-200'
        }
      `}
    >
      {securityStatus === 'secure' ? (
        <>
          <Shield className="text-green-500 mr-2" size={18} />
          <span className={`text-sm font-medium ${fortressMode ? 'text-green-400' : 'text-green-700'}`}>
            Secure
          </span>
        </>
      ) : securityStatus === 'breach' ? (
        <>
          <Shield className="text-[#FF3B30] mr-2" size={18} />
          <span className="text-sm font-medium text-[#FF3B30]">
            Alert
          </span>
        </>
      ) : (
        <>
          <Shield className="text-yellow-500 mr-2" size={18} />
          <span className="text-sm font-medium text-yellow-700">
            Testing
          </span>
        </>
      )}
      
      <Lock 
        className={`ml-3 cursor-pointer ${fortressMode ? 'text-[#FF3B30]' : 'text-gray-500'}`} 
        size={18} 
        onClick={() => { }}
      />
    </div>
  );
};

export default SecurityStatusIndicator;