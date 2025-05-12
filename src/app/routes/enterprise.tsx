import type { Route } from "./+types/home";
import { faCalendarCheck, faShieldHalved, faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobilephone from "../Assets/2You Mobile.png";
import appstoresvg from "../Assets/appstore.svg";
import googleplaysvg from "../Assets/googleplay.svg";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Header from "../components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "🏛️ 2You Enterprise – Gov/Grade Security & Custom Compliance for Global Teams",
    },
    {
      name: "description",
      content: "Deploy a private messaging network with custom SLAs, audit logs, and enterprise-grade encryption. Meet GDPR, HIPAA, and SOC 2 requirements effortlessly.",
    },
    {
      name: "keywords",
      content: "enterprise messaging platform, compliant chat solutions, custom SLAs, GDPR-compliant messaging",
    },
  ];
}

export default function Enterprise() {
  return (
    <div>
      {/* Header */}
      <Header variant="white" />

      {/* Hero Section */}
      <section className="bg-white min-h-screen pt-24 pb-12 flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-black text-center md:text-left mt-10 md:mt-0">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">
                The era of company phones and VOIP is over.
              </h1>
              <p className="text-xl mb-8">
                In industries where trust and precision define success—from banking and investment firms to insurance and healthcare—secure, streamlined communication is the backbone of closing deals. Empower your sales teams to connect directly with institutional professionals selling your products through cutting-edge encryption, real-time collaboration, and CRM integrations, ensuring every conversation drives revenue—because if your sales matter, shouldn’t your communication be just as strategic?
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4"
                >
                  <img
                    src={appstoresvg}
                    alt="Download on the App Store"
                    className="w-40 h-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <img
                    src={googleplaysvg}
                    alt="Get it on Google Play"
                    className="w-40 h-auto"
                  />
                </a>
              </div>
            </div>
            <motion.div
              className="md:w-1/2 mt-12 md:mt-0"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                <img
                  className="w-[200px] mx-auto"
                  src={mobilephone}
                  alt="App Mockup"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-red-600">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Your sales matter, why not your communication?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div id="feature-card-1" className="p-6 rounded-xl bg-white shadow-lg">
              <motion.div
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faCalendarCheck} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">Smart Scheduling</h3>
              <p className="text-black">Effortlessly coordinate meetings with automatic availability checking and calendar integration.</p>
            </div>
            <div id="feature-card-2" className="p-6 rounded-xl bg-white shadow-lg">
              <motion.div
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faShieldHalved} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">End-to-End Encryption</h3>
              <p className="text-black">Your conversations are always private with military-grade encryption and optional secure backup.</p>
            </div>
            <div id="feature-card-3" className="p-6 rounded-xl bg-white shadow-lg">
              <motion.div
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faBolt} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">Boosted Efficiency</h3>
              <p className="text-black">Ditch your company phone and never worry about who is calling and why ever again. Peace of mind is knowing who you’re selling to and when.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
