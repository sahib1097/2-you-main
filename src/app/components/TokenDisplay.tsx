
import { motion } from "framer-motion";
import { Globe, Key } from "lucide-react";
import { useState, useEffect } from "react";

const TokenDisplay = () => {
  const [token, setToken] = useState("2You#A1B2-C3D4");
  
  // Rotate token dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a new random token
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const randomPart = Array(8)
        .fill("")
        .map(() => characters[Math.floor(Math.random() * characters.length)])
        .join("");
      
      setToken(`2You#${randomPart.slice(0, 4)}-${randomPart.slice(4, 8)}`);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Anonymous Browsing</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Browse like a ghost 👻—untraceable 12-digit tokens, auto-VPN cloaking, and chats that poof in 30 seconds. Leave zero trace, zero regrets.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 p-8 rounded-xl w-full md:w-auto">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-12 h-12 text-red-500" />
              </div>
              
              <motion.div
                animate={{
                  opacity: [1, 0.5, 1],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-black p-6 rounded-lg border border-gray-800"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Key className="w-4 h-4 text-red-500" />
                  <p className="text-sm text-gray-400">Dynamic Token</p>
                </div>
                <p className="text-2xl font-mono font-bold">{token}</p>
              </motion.div>
              
              <div className="mt-6">
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm text-gray-400">VPN Disabled</span>
                  <div className="w-12 h-6 bg-gray-700 rounded-full p-1 cursor-pointer">
                    <motion.div
                      animate={{
                        x: [0, 24, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="w-4 h-4 bg-red-500 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-400">VPN Enabled</span>
                </div>
              </div>
            </div>
            
            <div className="relative w-full md:w-64 h-80 bg-gray-900/50 rounded-xl overflow-hidden">
              <div className="absolute inset-0 p-4 overflow-hidden">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, y: 0 }}
                    animate={{
                      opacity: [1, 0],
                      y: [0, -20],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                    className="mb-3 p-2 bg-gray-800 rounded"
                  >
                    <div className="w-full h-2 bg-gray-700 rounded mb-1" />
                    <div className="w-3/4 h-2 bg-gray-700 rounded" />
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-sm text-red-500">Messages vanish without a trace</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenDisplay;
