
import { Shield, Globe, User, Lock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "End-to-End Encryption",
    description: "Your messages are secured with state-of-the-art encryption technology.",
  },
  {
    icon: <Lock className="w-12 h-12" />,
    title: "Layers of Privacy",
    description: "Multiple security layers including Failsafe Password and FaceID Gate.",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Anonymous Browsing",
    description: "Browse privately with VPN-enabled chats and dynamic token generation.",
  },
  {
    icon: <User className="w-12 h-12" />,
    title: "6 Separate Accounts",
    description: "Maintain distinct profiles with zero cross-connection.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-red-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
