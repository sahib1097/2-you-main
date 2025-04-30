
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import image from "../../Assets/Failsafe.png";

const FailsafePasswordSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-32"
  >
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 order-1">
        <div className="relative h-[600px] md:h-[700px] bg-black rounded-xl overflow-hidden">
          <img 
            src={image}
            alt="Failsafe Password"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 order-2">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
          <Lock className="text-red-500 w-10 h-10" />
          Failsafe Password
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Archived, Deleted and Marked Messages appear blank once you enter your failsafe password.
        </p>
      </div>
    </div>
  </motion.div>
);

export default FailsafePasswordSection;
