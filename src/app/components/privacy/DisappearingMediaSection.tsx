
import { motion } from "framer-motion";
import DisappearingMedia from "../DisappearingMedia";

const DisappearingMediaSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-32"
  >
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 order-1">
        <DisappearingMedia />
      </div>
      <div className="w-full md:w-1/2 order-2">
        <h2 className="text-4xl font-bold mb-4">Disappearing Media</h2>
        <p className="text-gray-400 text-lg mb-6">
          Snaps, clips, DMs—gone. Your shared media nukes itself after you're done, leaving no trace on devices or the cloud. Send it, watch it, ghost it.
        </p>
      </div>
    </div>
  </motion.div>
);

export default DisappearingMediaSection;
