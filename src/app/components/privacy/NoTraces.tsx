
import { motion } from "framer-motion";
import image from "../../Assets/Notrace.png";
const NoTraces = () => {
  return (
    <section className="py-20 bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">No Traces Left Behind</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Screenshots blocked. Media evaporates. Photos & videos sent in this chat—or across all of 2You—vanish without a backup, locally or in the cloud. Send freely, leave nothing behind.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="relative p-8 bg-gray-900/50 rounded-xl">
              <motion.div
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
                className="mb-4"
              >
                <div className="w-64 h-96 mx-auto rounded-3xl relative overflow-hidden">
                  <img 
                    src={image}
                    alt="Screenshot Protected"
                    className="w-full h-full object-cover blur-sm"
                  />
                </div>
              </motion.div>
              <p className="text-lg font-medium">Screenshot Blocking</p>
            </div>

            <div className="p-8 bg-gray-900/50 rounded-xl">
              <motion.div
                animate={{
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-64 h-96 mx-auto rounded-3xl overflow-hidden"
              >
                <img 
                  src={image}
                  alt="Evaporating Media"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <p className="text-lg font-medium mt-4">Media Evaporation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NoTraces;
