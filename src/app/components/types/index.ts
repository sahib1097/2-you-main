export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
    isNew?: boolean;
  }
  
  export interface PricingTier {
    id: string;
    name: string;
    price: string | number;
    period?: string;
    description: string;
    features: string[];
    cta: string;
    popular?: boolean;
  }
  
  export interface BusinessTier extends PricingTier {
    category: 'growing' | 'scaling' | 'sme';
  }
  
  export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface TrustedCompany {
    name: string;
    logo: string;
  }