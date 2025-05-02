import React, { useState } from 'react';
import { Shield, Key, Globe, Cloud } from 'lucide-react';
import { useSecurityContext } from '../../contexts/SecurityContext';
import AnimatedSecurityCard from '../common/AnimatedSecurityCard';

const SecurityProtocolsSection: React.FC = () => {
  const { fortressMode } = useSecurityContext();
  
  const protocols = [
    {
      id: 'e2ee',
      title: 'End-to-End Encryption (E2EE)',
      icon: <Shield className="text-[#FF3B30]" size={32} />,
      description: 'All messages and data are encrypted on your device before transmission.',
      technicalDetail: 'AES-256 + RSA-4096 hybrid encryption. Keys generated and stored locally—never on our servers.',
      animationComponent: 'EncryptionAnimation',
    },
    {
      id: 'zero-knowledge',
      title: 'Failsafe Password & Zero-Knowledge',
      icon: <Key className="text-[#FF3B30]" size={32} />,
      description: 'Your data is protected with a password we never see or store.',
      technicalDetail: 'Your Failsafe Password encrypts metadata. We can\'t recover it—even under subpoena.',
      animationComponent: 'PasswordAnimation',
    },
    {
      id: 'network',
      title: 'Network Security (VPN-Enabled Chats)',
      icon: <Globe className="text-[#FF3B30]" size={32} />,
      description: 'Secure communications over encrypted network connections.',
      technicalDetail: 'On-demand WireGuard® VPN per chat. No IP leaks, no logs.',
      animationComponent: 'NetworkAnimation',
    },
    {
      id: 'backup',
      title: 'Secure Backup Encryption',
      icon: <Cloud className="text-[#FF3B30]" size={32} />,
      description: 'Your backups are encrypted before leaving your device.',
      technicalDetail: 'iCloud/Google Drive backups encrypted with your Failsafe Password. Zero plaintext copies.',
      animationComponent: 'BackupAnimation',
    },
  ];

  return (
    <section className={`py-16 ${fortressMode ? 'bg-[#111111]' : 'bg-gray-50'} transition-colors duration-500`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            Core Security <span className="text-[#FF3B30]">Protocols</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Every aspect of 2You is designed with security as the foundation, not an afterthought.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {protocols.map(protocol => (
            <AnimatedSecurityCard 
              key={protocol.id}
              icon={protocol.icon}
              title={protocol.title}
              description={protocol.description}
              technicalDetail={protocol.technicalDetail}
              animationType={protocol.animationComponent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityProtocolsSection;