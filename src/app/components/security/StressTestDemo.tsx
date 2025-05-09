import React, { useState } from 'react';
import { AlertTriangle, Shield } from 'lucide-react';
import { useSecurityContext } from '../../contexts/SecurityContext';

const StressTestDemo: React.FC = () => {
  const [testing, setTesting] = useState(false);
  const [attackType, setAttackType] = useState<string | null>(null);
  const { fortressMode, setSecurityStatus } = useSecurityContext();
  
  const simulateAttack = () => {
    const attacks = ['brute-force', 'ddos', 'injection', 'phishing'];
    const randomAttack = attacks[Math.floor(Math.random() * attacks.length)];
    
    setTesting(true);
    setAttackType(randomAttack);
    setSecurityStatus('breach');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setTesting(false);
      setAttackType(null);
      setSecurityStatus('secure');
    }, 5000);
  };
  
  return (
    <section className={`py-16 ${fortressMode ? 'bg-[#111111]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            <span className="text-[#FF3B30]">Stress Test</span> Demo
          </h2>
          <p className={`mb-8 ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
            See how our security systems respond to simulated attacks in real-time.
          </p>
          
          <button
            onClick={simulateAttack}
            disabled={testing}
            className={`
              px-6 py-3 rounded-lg font-bold transition-all duration-300
              ${testing 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#FF3B30] hover:bg-[#E02A21] text-white'}
            `}
          >
            {testing ? 'Attack in Progress...' : 'Simulate an Attack'}
          </button>
          
          {testing && (
            <div className={`
              mt-8 p-6 rounded-lg text-left
              ${fortressMode ? 'bg-[#1A1A1A] border border-[#FF3B30]' : 'bg-white border-l-4 border-l-[#FF3B30] shadow-lg'}
              breach-alert
            `}>
              <div className="flex items-start">
                <AlertTriangle className="text-[#FF3B30] mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-[#FF3B30] font-bold text-lg">Attack Detected!</h3>
                  <p className={`mt-2 ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {attackType === 'brute-force' && 'Multiple login attempts detected from suspicious IP addresses.'}
                    {attackType === 'ddos' && 'Unusual traffic volume detected. DDoS protection engaged.'}
                    {attackType === 'injection' && 'SQL injection attempt detected and blocked.'}
                    {attackType === 'phishing' && 'Suspicious authorization request detected and rejected.'}
                  </p>
                  
                  <div className="mt-4 space-y-2">
                    <p className={`text-sm font-medium ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Security response in progress:
                    </p>
                    <div className="flex items-center">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF3B30] animate-[progress_5s_ease-in-out]" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className={`
            mt-12 p-6 rounded-lg
            ${fortressMode ? 'bg-[#1A1A1A] border border-gray-800' : 'bg-white shadow-sm'}
          `}>
            <div className="flex items-center justify-center mb-4">
              <Shield className={`mr-2 ${testing ? 'text-[#FF3B30]' : 'text-green-500'}`} size={24} />
              <h3 className={`font-bold ${testing ? 'text-[#FF3B30]' : 'text-green-500'}`}>
                {testing ? 'Security Alert Active' : 'All Systems Secure'}
              </h3>
            </div>
            <p className={`text-sm ${fortressMode ? 'text-gray-400' : 'text-gray-500'}`}>
              System uptime: 99.998% | Last security event: 13 days ago
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StressTestDemo;