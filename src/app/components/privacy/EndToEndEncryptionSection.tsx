
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import image from "../../Assets/EndToEnd.png";

const EndToEndEncryptionSection = () => (
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
          End-to-End Encryption
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          Your chats, your rules—end-to-end encrypted so only you are in the loop. Not even 2You can peek.
        </p>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <div className="relative bg-black rounded-xl overflow-hidden flex items-center justify-center" style={{ minHeight: "700px", padding: "20px 0" }}>
          <img
            src={image}
            alt="End to End Encryption - Secret Emoji"
            className="object-contain scale-[1.05]"
            style={{
              height: "auto",
              maxHeight: "660px",
              width: "auto",
              maxWidth: "100%"
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default EndToEndEncryptionSection;
