import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from "react";

interface SecurityContextType {
  fortressMode: boolean;
  toggleFortressMode: () => void;
  securityStatus: 'secure' | 'breach' | 'testing';
  setSecurityStatus: (status: 'secure' | 'breach' | 'testing') => void;
  lockClicks: number;
  incrementLockClicks: () => void;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const useSecurityContext = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurityContext must be used within a SecurityProvider');
  }
  return context;
};

interface SecurityProviderProps {
  children: ReactNode;
}

export const SecurityProvider = ({ children }: SecurityProviderProps) => {
  const [fortressMode, setFortressMode] = useState(false);
  const [securityStatus, setSecurityStatus] = useState<'secure' | 'breach' | 'testing'>('secure');
  const [lockClicks, setLockClicks] = useState(0);

  const toggleFortressMode = () => {
    setFortressMode(prev => !prev);
  };

  const incrementLockClicks = () => {
    const newCount = lockClicks + 1;
    setLockClicks(newCount);
    
    if (newCount === 5) {
      toggleFortressMode();
      setLockClicks(0);
    }
  };

  return (
    <SecurityContext.Provider 
      value={{ 
        fortressMode, 
        toggleFortressMode, 
        securityStatus, 
        setSecurityStatus,
        lockClicks,
        incrementLockClicks
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};