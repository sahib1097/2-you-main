import React, { useState } from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { useSecurityContext } from '../../contexts/SecurityContext';

interface AuditProps {
  name: string;
  date: string;
  summary: string;
}

const Audit: React.FC<AuditProps> = ({ name, date, summary }) => {
  const [showSummary, setShowSummary] = useState(false);
  const { fortressMode } = useSecurityContext();
  
  return (
    <div className={`
      p-5 rounded-lg cursor-pointer transition-all duration-300
      ${fortressMode ? 'bg-[#1A1A1A] border border-gray-800' : 'bg-white shadow-sm border border-gray-100'}
      ${showSummary ? (fortressMode ? 'border-[#FF3B30]' : 'border-l-4 border-l-[#FF3B30]') : ''}
    `}
    onClick={() => setShowSummary(!showSummary)}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FileText className="text-[#FF3B30] mr-3" size={20} />
          <div>
            <h4 className={`font-bold ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>{name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <ExternalLink size={16} className={fortressMode ? 'text-gray-400' : 'text-gray-500'} />
      </div>
      
      {showSummary && (
        <div className={`
          mt-4 p-4 rounded text-sm
          ${fortressMode ? 'bg-black text-gray-300' : 'bg-gray-50 text-gray-700'}
        `}>
          <h5 className="font-bold text-[#FF3B30] mb-2">Audit Summary</h5>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

const TransparencySection: React.FC = () => {
  const { fortressMode } = useSecurityContext();
  
  const audits = [
    {
      name: 'Cure53 Security Audit',
      date: 'January 2024',
      summary: 'Comprehensive security assessment of application and infrastructure. No critical vulnerabilities found. 2 medium issues resolved.'
    },
    {
      name: 'NCC Group Cryptographic Review',
      date: 'October 2023',
      summary: 'In-depth review of cryptographic implementation. Confirmed proper implementation of AES-256 and RSA-4096 encryption algorithms.'
    },
    {
      name: 'Trail of Bits Code Audit',
      date: 'June 2023',
      summary: 'Full source code review and penetration testing. All identified issues resolved with validation.'
    }
  ];
  
  const futureAudits = [
    {
      name: 'Scheduled: KPMG Compliance Audit',
      date: 'July 2024',
      summary: 'Upcoming regulatory compliance assessment covering SOC 2 Type II, GDPR, and CCPA requirements.'
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
            Transparency & <span className="text-[#FF3B30]">Audits</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
            We regularly conduct third-party security audits and share the results.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-12">
            <div className={`
              absolute left-0 top-0 bottom-0 w-1
              ${fortressMode ? 'bg-gray-800' : 'bg-gray-200'}
            `}></div>
            
            <div className={`
              absolute left-0 top-0 w-1 bg-[#FF3B30] h-3/4
              transition-all duration-1000
            `}></div>
            
            <div className="space-y-6 ml-8">
              <h3 className={`font-bold text-xl mb-6 ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Completed Audits
              </h3>
              
              {audits.map((audit, index) => (
                <div key={index} className="relative">
                  <div className={`
                    absolute -left-8 top-5 w-3 h-3 rounded-full
                    ${fortressMode ? 'bg-[#FF3B30]' : 'bg-[#FF3B30]'}
                  `}></div>
                  <Audit 
                    name={audit.name}
                    date={audit.date}
                    summary={audit.summary}
                  />
                </div>
              ))}
              
              <h3 className={`font-bold text-xl mb-6 mt-12 ${fortressMode ? 'text-white' : 'text-[#1A1A1A]'}`}>
                Upcoming Audits
              </h3>
              
              {futureAudits.map((audit, index) => (
                <div key={index} className="relative">
                  <div className={`
                    absolute -left-8 top-5 w-3 h-3 rounded-full
                    ${fortressMode ? 'bg-gray-600' : 'bg-gray-400'}
                  `}></div>
                  <Audit 
                    name={audit.name}
                    date={audit.date}
                    summary={audit.summary}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className={`
            p-6 rounded-lg mt-12 text-center
            ${fortressMode ? 'bg-[#111] border border-gray-800' : 'bg-gray-50'}
          `}>
            <p className={`text-sm ${fortressMode ? 'text-gray-300' : 'text-gray-700'}`}>
              All security audits are conducted by independent third-party security firms.
              <br />Full audit reports are available upon request under NDA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;