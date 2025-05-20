import type { PricingTier, BusinessTier } from '../types';


export const individualTier: PricingTier = {
    id: 'plus',
    name: 'Plus',
    price: 19,
    period: 'per month',
    description: 'Businesses',
    features: [
      'All Free Features ',
      '100GB of Space ',
      'Video Conferencing ',
      'Subsidiary Company Management',
    ],
    cta: 'Get Started',
};

export const freeTier: PricingTier = {
  id: 'free',
  name: 'Free',
  price: 0,
  period: '',
  description: 'Basic functionalities are free. ',
  features: [
    'Unlimited servers',
    'Unlimited team members',
    '25GB of Storage '
  ],
  cta: 'Start for Free',
  popular: true
};

export const enterpriseTier: PricingTier = {
  id: 'premium',
  name: 'Premium',
  price: '$39',
  description: 'For large organizations with custom needs',
  features: [
    'All Plus features ',
    '250GB Of Space ',
    'Call & Video Recording ',
    'AI Notes ',
    'Integrations '
  ],
  cta: 'Contact Sales'
};