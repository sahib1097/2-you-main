
import { motion } from "framer-motion";
import image from "../../Assets/FaceGate.png";

const FaceIDGateSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-32"
  >
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <h2 className="text-4xl font-bold mb-4">Face ID Gate</h2>
        <p className="text-gray-400 text-lg mb-6">
          Enable this to force each chat you open to require FaceID. If the wrong person is trying to access your messages, your account will temporarily suspend itself.
        </p>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <div className="relative h-[600px] md:h-[700px] bg-gradient-to-r from-black via-red-500/20 to-black rounded-xl overflow-hidden">
          <img 
            src={image}
            alt="Face ID Gate"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default FaceIDGateSection;
