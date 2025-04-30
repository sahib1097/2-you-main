
import { Shield, Lock } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-4 gap-4 opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
            {i % 2 === 0 ? (
              <Shield className="w-8 h-8 text-red-500" />
            ) : (
              <Lock className="w-8 h-8 text-red-500" />
            )}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto text-center z-10">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Privacy, <span className="text-red-500">Redefined</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Experience uncompromising security with cutting-edge privacy features designed for your peace of mind.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
