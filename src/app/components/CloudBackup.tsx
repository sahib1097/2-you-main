
import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

const CloudBackup = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="flex justify-center mb-8">
            <Cloud className="w-16 h-16 text-red-500" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            End-to-End Encrypted Cloud Backup
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Lock down your cloud backups with 2You—end-to-end encrypted, zero-eyes access. 
            Your messages stay protected, even on iCloud or Google Drive. 
            Back it up, lock it up, and keep it 100% yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudBackup;
