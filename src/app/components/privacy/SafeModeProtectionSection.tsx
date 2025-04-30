
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import image from "../../Assets/SafeMode.png";

interface SafeModeProps {
  safeMode: boolean;
  setSafeMode: (b: boolean) => void;
}

const SafeModeProtectionSection = ({ safeMode, setSafeMode }: SafeModeProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-32"
  >
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
          <Shield className="text-red-500 w-10 h-10" />
          Safe Mode Protection
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Safe Mode locks down your privacy—marked conversations, archived messages, and deleted chats appear blank. Total protection, no traces left behind.
        </p>
        <button
          onClick={() => setSafeMode(!safeMode)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full
            transition-all duration-300
            bg-red-500 text-white
            hover:shadow-lg hover:shadow-red-500/20
          `}
        >
          <Shield className="w-5 h-5" />
          <span className="font-medium">
            {safeMode ? 'Exit Safe Mode' : 'Enter Safe Mode'}
          </span>
        </button>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center">
        <div className="relative h-104 max-w-sm w-full rounded-xl overflow-hidden">
          <img
            src={image}
            alt="Safe Mode Example UI"
            className={`w-full h-full object-contain transition-all duration-500 ${safeMode ? "blur-md" : ""}`}
            draggable={false}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default SafeModeProtectionSection;
