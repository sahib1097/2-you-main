
import { motion } from "framer-motion";
import image from "../../Assets/Vpn.png";

const VPNEnabledChatsSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-32"
  >
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 order-1">
        <div className="relative h-[600px] md:h-[700px] bg-black rounded-xl overflow-hidden flex items-center justify-center">
          <img 
            src={image}
            alt="VPN-Enabled Chats"
            className="h-full object-contain scale-[1.15]"
            draggable={false}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 order-2">
        <h2 className="text-4xl font-bold mb-4">VPN-Enabled Chats</h2>
        <p className="text-gray-400 text-lg mb-6">
          Access VPN within your conversation to protect your information and location. Route your specific conversations through an encrypted tunnel without leaving 2You. Meaning you can have multiple chats in multiple different IP's at once.
        </p>
      </div>
    </div>
  </motion.div>
);

export default VPNEnabledChatsSection;
