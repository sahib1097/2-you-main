import { motion } from 'framer-motion';
import { useState } from 'react';

interface SupportCardProps {
  title: string;
  description: string;
  icon: string;
}

function SupportCard({ title, description, icon }: SupportCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="w-16 h-16 mb-4 mx-auto"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <motion.div
        className="w-full h-1 bg-gray-200 mt-4 rounded-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="h-full bg-red-500"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "30%" }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}

export function SupportHub() {
  const cards = [
    {
      title: "Account Security",
      description: "Manage your security settings, passwords, and two-factor authentication.",
      icon: "🔒"
    },
    {
      title: "Privacy Tools",
      description: "Control your privacy settings and manage disappearing messages.",
      icon: "🛡️"
    },
    {
      title: "Billing & Plans",
      description: "View your subscription, payment history, and upgrade options.",
      icon: "💳"
    },
    {
      title: "Device Management",
      description: "Manage connected devices and active sessions.",
      icon: "📱"
    }
  ];

  return (
    <section id="help-hub" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-black text-center mb-12"
        >
          Support Hub
        </motion.h2>
        <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <SupportCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}