import React, { useEffect } from 'react';
import { useSecurityContext, SecurityProvider } from '../contexts/SecurityContext';
import HeroSection from '../components/security/HeroSection';
import SecurityProtocolsSection from '../components/security/SecurityProtocolsSection';
import InfrastructureSection from '../components/security/InfrastructureSection';
import ThreatResponseSection from '../components/security/ThreatResponseSection';
import TransparencySection from '../components/security/TransparencySection';
import SecurityFooter from '../components/security/SecurityFooter';
import SecurityStatusIndicator from '../components/security/SecurityStatusIndicator';
import StressTestDemo from '../components/security/StressTestDemo';
import '../styles/security.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
    return [
      { title: "2YOU Security" },
      { name: "description", content: "Welcome to 2YOU!" },
    ];
  }

const SecurityPageContent: React.FC = () => {
    const { fortressMode } = useSecurityContext();
  
    useEffect(() => {
      document.title = fortressMode ? "2You - Fortress Mode" : "2You - Security";
  
      if (fortressMode) {
        document.body.classList.add('fortress-bg');
      } else {
        document.body.classList.remove('fortress-bg');
      }
  
      return () => {
        document.body.classList.remove('fortress-bg');
      };
    }, [fortressMode]);

    return (
        <div className={`min-h-screen transition-colors duration-500 ${fortressMode ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#1A1A1A]'}`}>
          <div className="relative overflow-x-hidden">
            {fortressMode && <div className="scan-line"></div>}
    
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <header className="py-8 flex justify-end">
                <SecurityStatusIndicator />
              </header>
    
              <main>
                <HeroSection />
                <SecurityProtocolsSection />
                <InfrastructureSection />
                <ThreatResponseSection />
                <TransparencySection />
                <StressTestDemo />
              </main>
    
              <SecurityFooter />
            </div>
          </div>
        </div>
      );
    };
    
    // Top-level component that wraps the content in SecurityProvider
    const SecurityPage: React.FC = () => (
      <SecurityProvider>
        <Header/>
        <SecurityPageContent />
        <Footer/>
      </SecurityProvider>
    );
    
    export default SecurityPage;