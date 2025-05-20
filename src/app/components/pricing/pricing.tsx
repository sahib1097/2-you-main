// src/components/Pricing.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { freeTier, individualTier, enterpriseTier } from '../data/pricing';
import Card from '../ui/Card';
import Button from '../ui/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Pricing: React.FC = () => {
  const tiers = [individualTier, freeTier, enterpriseTier];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* ===== CARDS (centered 3-column) ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {tiers.map((tier) => (
            <motion.div key={tier.id} variants={itemVariants}>
              <Card
                variant="glass"
                className={`p-6 h-full flex flex-col border border-black rounded-lg ${
                  tier.popular ? 'border-primary/30 shadow-glow' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-1">{tier.name}</h3>
                  <p className="text-neutral-400 mb-4">{tier.description}</p>

                  <div className="mb-4">
                    <span className="text-4xl font-bold text-black">
                      {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-gray-600 ml-1">{tier.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-2">
                        <Check size={12} />
                      </span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {tier.id === 'free' ? (
                    <Button variant="outline" className="w-full text-black">
                      Free
                    </Button>
                  ) : (
                    <Button variant="primary" className="w-full text-black">
                      Get Started
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
