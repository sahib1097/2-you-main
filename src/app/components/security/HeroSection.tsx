import React, { useState } from 'react';
import { Shield, Lock, Unlock } from 'lucide-react';
import { useSecurityContext } from '../../contexts/SecurityContext';
import SecurityStat from '../common/SecurityStat';

interface HexagonProps {
  index: number;
  stat: {
    title: string;
    value: string;
  };
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const Hexagon: React.FC<HexagonProps> = ({ index, stat, activeIndex, setActiveIndex }) => {
  const { fortressMode, incrementLockClicks } = useSecurityContext();
  const isActive = activeIndex === index;

  const handleClick = () => {
    if (isActive) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
    
    if (index === 0) {
      incrementLockClicks();
    }
  };

  return (
    <div 
      className={`hexagon relative flex items-center justify-center cursor-pointer
        ${isActive ? 'active' : ''}
        ${fortressMode ? 'fortress-mode' : ''}
      `}
      onClick={handleClick}
    >
      <div className="z-10 text-center">
        {isActive ? (
          <Unlock 
            size={24} 
            className={`mx-auto ${fortressMode ? 'text-[#FF3B30]' : 'text-[#FF3B30]'} ${isActive ? 'pulse-animation' : ''}`} 
          />
        ) : (
          <Lock 
            size={24} 
            className={`mx-auto ${fortressMode ? 'text-[#FF3B30]' : 'text-[#FF3B30]'}`} 
          />
        )}
      </div>
      
      {isActive && (
        <SecurityStat 
          title={stat.title}
          value={stat.value}
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 z-20 w-48"
        />
      )}
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { fortressMode } = useSecurityContext();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const securityStats = [
    { title: "Encryption", value: "100% end-to-end encrypted at rest + in transit" },
    { title: "Zero Knowledge", value: "Your data is hidden even from us" },
    { title: "Local Keys", value: "Encryption keys never leave your device" },
    { title: "No Backdoors", value: "Not even we can access your data" },
    { title: "Audit Verified", value: "Regular third-party security audits" },
    { title: "Zero Trust", value: "Every request is authenticated & verified" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
          Zero Trust, <span className="text-[#FF3B30]">Full Control</span>
        </h2>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Our security isn't added—it's built into every layer. No backdoors. No compromises.
        </p>
      </div>

      <div className="relative">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto relative pb-32">
          {securityStats.map((stat, index) => (
            <Hexagon 
              key={index} 
              index={index} 
              stat={stat} 
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
          <Shield size={300} className="text-[#FF3B30] pulse-animation" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;