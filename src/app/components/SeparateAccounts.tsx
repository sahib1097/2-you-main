
import { motion } from "framer-motion";
import { User, Briefcase, Heart, Gamepad2, Camera, Star } from "lucide-react";
import image from "../Assets/2YOU.png";

const accounts = [
  { name: "Personal", icon: <User className="w-6 h-6" /> },
  { name: "Business", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Dating", icon: <Heart className="w-6 h-6" /> },
  { name: "Gaming", icon: <Gamepad2 className="w-6 h-6" /> },
  { name: "Creative", icon: <Camera className="w-6 h-6" /> },
  { name: "VIP", icon: <Star className="w-6 h-6" /> },
];

const OUTER_RADIUS = 150; // px, distance from center to account circles
const OUTER_CIRCLE_RADIUS = 40; // px, radius of each account icon/circle
const INNER_RADIUS = 50; // Reduced from 75 to make the inner circle smaller

const SeparateAccounts = () => {
  return (
    <section className="py-20 bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">6 Separate Accounts</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Create and maintain distinct profiles for every part of your life with zero cross-connection between them.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative h-96">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 480 384"
                className="absolute left-0 top-0 pointer-events-none z-0"
                style={{ width: "100%", height: "100%" }}
              >
                {accounts.map((_, idx) => {
                  const angle = (idx * (360 / accounts.length)) * (Math.PI / 180);
                  const cx = 240;
                  const cy = 192;

                  const startX = cx + Math.cos(angle) * (OUTER_RADIUS - OUTER_CIRCLE_RADIUS);
                  const startY = cy + Math.sin(angle) * (OUTER_RADIUS - OUTER_CIRCLE_RADIUS);
                  const endX = cx + Math.cos(angle) * INNER_RADIUS;
                  const endY = cy + Math.sin(angle) * INNER_RADIUS;

                  return (
                    <line
                      key={`line-${idx}`}
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="#374151"
                      strokeWidth="2"
                      strokeLinecap="round"
                      style={{
                        transition: "stroke 0.3s",
                      }}
                    />
                  );
                })}
              </svg>

              {accounts.map((account, index) => {
                const angle = (index * (360 / accounts.length)) * (Math.PI / 180);
                const x = Math.cos(angle) * OUTER_RADIUS;
                const y = Math.sin(angle) * OUTER_RADIUS;

                return (
                  <motion.div
                    key={account.name}
                    className="absolute left-1/2 top-1/2"
                    initial={{
                      x: 0,
                      y: 0,
                      scale: 1,
                    }}
                    whileInView={{
                      x,
                      y,
                      transition: {
                        delay: index * 0.1,
                        duration: 0.8,
                        type: "spring",
                      },
                    }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.3 },
                    }}
                    style={{ zIndex: 2 }}
                  >
                    <div className="w-20 h-20 -ml-10 -mt-10 rounded-full bg-gray-900 flex items-center justify-center border-2 border-gray-800 hover:border-red-500 transition-colors">
                      <div className="text-red-500">{account.icon}</div>
                    </div>
                    <p className="mt-2 text-sm -ml-10 font-medium">{account.name}</p>
                  </motion.div>
                );
              })}

              <motion.div
                className="absolute left-1/2 top-1/2 -ml-10 -mt-10 w-20 h-20 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{ zIndex: 3 }}
              >
                <img
                  src={image}
                  alt="2You Central"
                  className="w-16 h-16 object-contain"
                  draggable={false}
                />
              </motion.div>
            </div>

            <div className="mt-12">
              <p className="text-xl text-gray-300">
                Maintain distinct profiles with{" "}
                <span className="text-red-500 font-bold">zero cross-connection</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeparateAccounts;
