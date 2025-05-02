import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { useSecurityContext } from '../../contexts/SecurityContext';

interface ThreatAlertProps {
  title: string;
  description: string;
  resolved: boolean;
}

const ThreatAlert: React.FC<ThreatAlertProps> = ({ title, description, resolved }) => {
  const { fortressMode } = useSecurityContext();
  
  return (
    <div className={`
      p-4 rounded-lg border transition-all duration-300
      ${resolved 
        ? fortressMode 
          ? 'bg-[#1A1A1A] border-green-500' 
          : 'bg-green-50 border-green-200'
        : 'bg-[#FF3B30] bg-opacity-10 border-[#FF3B30] breach-alert'
      }
    `}>
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          {resolved ? (
            <CheckCircle className="text-green-500" size={20} />
          ) : (
            <AlertCircle className="text-[#FF3B30]" size={20} />
          )}
        </div>
        <div>
          <h4 className={`font-bold ${resolved ? 'text-green-500' : 'text-[#FF3B30]'}`}>
            {title}
          </h4>
          <p className={`text-sm mt-1 ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ThreatResponseSection: React.FC = () => {
  const { fortressMode, securityStatus } = useSecurityContext();
  const [threats, setThreats] = useState<ThreatAlertProps[]>([
    {
      title: 'Brute Force Attempt Detected',
      description: 'Multiple failed login attempts from IP address 192.168.1.1 blocked.',
      resolved: true
    },
    {
      title: 'Suspicious API Access Pattern',
      description: 'Unusual API access pattern detected and flagged for review.',
      resolved: true
    }
  ]);
  
  useEffect(() => {
    if (securityStatus === 'breach') {
      setThreats(prev => [
        {
          title: 'Active Intrusion Attempt',
          description: 'Suspicious network traffic detected. Security measures engaged.',
          resolved: false
        },
        ...prev
      ]);
      
      // Auto-resolve after 3 seconds
      const timer = setTimeout(() => {
        setThreats(prev => [
          {
            ...prev[0],
            resolved: true,
            title: 'Intrusion Attempt Blocked',
            description: 'Suspicious network traffic blocked and logged for analysis.'
          },
          ...prev.slice(1)
        ]);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [securityStatus]);
  
  return (
    <section className={`py-16 ${fortressMode ? 'bg-[#111111]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            Threat <span className="text-[#FF3B30]">Response</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Real-time monitoring and automated responses to security threats.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {threats.map((threat, index) => (
            <ThreatAlert 
              key={index}
              title={threat.title}
              description={threat.description}
              resolved={threat.resolved}
            />
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className={`text-xl font-bold mb-6 text-center ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            Security Protocols
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`
              p-5 rounded-lg
              ${fortressMode ? 'bg-[#1A1A1A] border border-gray-800' : 'bg-white shadow'}
            `}>
              <h4 className={`font-bold text-[#FF3B30] mb-3`}>Intrusion Detection</h4>
              <p className={`text-sm ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Real-time intrusion detection powered by AI and reviewed by security experts.
              </p>
            </div>
            
            <div className={`
              p-5 rounded-lg
              ${fortressMode ? 'bg-[#1A1A1A] border border-gray-800' : 'bg-white shadow'}
            `}>
              <h4 className={`font-bold text-[#FF3B30] mb-3`}>Automated Defense</h4>
              <p className={`text-sm ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Automated brute-force lockouts and 72-hour forensic audits after suspicious activity.
              </p>
            </div>
            
            <div className={`
              p-5 rounded-lg
              ${fortressMode ? 'bg-[#1A1A1A] border border-gray-800' : 'bg-white shadow'}
            `}>
              <h4 className={`font-bold text-[#FF3B30] mb-3`}>Continuous Monitoring</h4>
              <p className={`text-sm ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
                24/7 security monitoring with automated alerts and escalation procedures.
              </p>
            </div>
            
            <div className={`
              p-5 rounded-lg
              ${fortressMode ? 'bg-[#1A1A1A] border border-gray-800' : 'bg-white shadow'}
            `}>
              <h4 className={`font-bold text-[#FF3B30] mb-3`}>Threat Intelligence</h4>
              <p className={`text-sm ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Integration with global threat intelligence networks to preempt emerging threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatResponseSection;