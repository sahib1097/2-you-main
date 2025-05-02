import React, { useState } from 'react';
import { Smartphone, Shield, Database } from 'lucide-react';
import { useSecurityContext } from '../../contexts/SecurityContext';

interface InfrastructureLayerProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  badges: string[];
  isActive: boolean;
  onHover: () => void;
}

const InfrastructureLayer: React.FC<InfrastructureLayerProps> = ({
  title,
  icon,
  description,
  badges,
  isActive,
  onHover
}) => {
  const { fortressMode } = useSecurityContext();
  
  return (
    <div 
      className={`
        p-6 rounded-lg transition-all duration-300 cursor-pointer
        ${isActive 
          ? fortressMode 
            ? 'bg-[#111] border border-[#FF3B30]' 
            : 'bg-white shadow-lg border-l-4 border-l-[#FF3B30]'
          : fortressMode 
            ? 'bg-[#1A1A1A] border border-gray-800' 
            : 'bg-gray-50'
        }
      `}
      onMouseEnter={onHover}
    >
      <div className="flex items-center mb-4">
        <div className={`
          mr-4 p-2 rounded-full
          ${isActive ? 'bg-[#FF3B30] text-white' : 'bg-gray-200 text-gray-500'}
        `}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
          {title}
        </h3>
      </div>
      
      <p className={`mb-4 ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <span 
            key={index} 
            className={`
              text-xs px-2 py-1 rounded
              ${isActive 
                ? 'bg-[#FF3B30] text-white' 
                : fortressMode 
                  ? 'bg-gray-800 text-gray-300' 
                  : 'bg-gray-200 text-gray-700'
              }
            `}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};

const InfrastructureSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const { fortressMode } = useSecurityContext();
  
  const layers = [
    {
      title: 'Device Layer',
      icon: <Smartphone size={24} />,
      description: 'Local device security features protecting user data at the source.',
      badges: ['FaceID/TouchID', 'Secure Enclave', 'Local Encryption']
    },
    {
      title: 'Network Layer',
      icon: <Shield size={24} />,
      description: 'Protections against network-based threats and interception attempts.',
      badges: ['DDoS Protection', 'TLS 1.3', 'Certificate Pinning', 'VPN Tunneling']
    },
    {
      title: 'Storage Layer',
      icon: <Database size={24} />,
      description: 'Secure data storage with advanced encryption and redundancy.',
      badges: ['Sharded Encryption', 'Encrypted At Rest', 'Zero Knowledge']
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            Infrastructure <span className="text-[#FF3B30]">Security</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Every layer of our infrastructure is designed with security as the primary concern.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {layers.map((layer, index) => (
            <InfrastructureLayer
              key={index}
              title={layer.title}
              icon={layer.icon}
              description={layer.description}
              badges={layer.badges}
              isActive={activeLayer === index}
              onHover={() => setActiveLayer(index)}
            />
          ))}
        </div>
        
        <div className={`
          mt-12 p-6 rounded-lg max-w-4xl mx-auto text-center
          ${fortressMode ? 'bg-[#111] border border-gray-800' : 'bg-gray-50'}
        `}>
          <p className={`text-sm ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Our security infrastructure complies with industry standards and regulations
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <span className={`
              px-3 py-1 rounded font-medium text-sm
              ${fortressMode ? 'bg-gray-800 text-white' : 'bg-white shadow text-gray-800'}
            `}>
              SOC 2
            </span>
            <span className={`
              px-3 py-1 rounded font-medium text-sm
              ${fortressMode ? 'bg-gray-800 text-white' : 'bg-white shadow text-gray-800'}
            `}>
              ISO 27001
            </span>
            <span className={`
              px-3 py-1 rounded font-medium text-sm
              ${fortressMode ? 'bg-gray-800 text-white' : 'bg-white shadow text-gray-800'}
            `}>
              GDPR Compliant
            </span>
            <span className={`
              px-3 py-1 rounded font-medium text-sm
              ${fortressMode ? 'bg-gray-800 text-white' : 'bg-white shadow text-gray-800'}
            `}>
              CCPA Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;