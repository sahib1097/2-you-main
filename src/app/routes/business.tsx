import type { Route } from "./+types/home";
import {
  faUsers,
  faLock,
  faCloud,
  faHourglassHalf,
  faGlobeAmericas,
  faEyeSlash,
  faPhoneVolume,
  faShareNodes,
  faUser,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobilephone from "../Assets/2You Mobile.png";
import mobilemsg from "../Assets/2You Messages.png";
import appstoresvg from "../Assets/appstore.svg";
import googleplaysvg from "../Assets/googleplay.svg";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Header from "../components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "💼 2You Business – Secure Team Chat, Channels & Workflow Automation",
    },
    {
      name: "description",
      content: "Streamline teamwork with encrypted channels, task management, and app integrations. Ditch clunky tools—collaborate freely without compromising security.",
    },
    {
      name: "keywords",
      content: "business messaging app, team collaboration software, secure Slack alternative, workflow automation",
    },
  ];
}

export default function Business() {
  return (
    <div>
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="bg-red-600 min-h-screen pt-24 pb-12 flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white text-center md:text-left mt-10 md:mt-0">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">
                Our workspace is your workspace - for free.
              </h1>
              <p className="text-xl mb-8">
                Streamline team communication and boost productivity. Real-time messaging, file sharing, and collaborative tools designed to keep your business connected and efficient.
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
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Business without Limits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div id="feature-card-1" className="p-6 rounded-xl shadow-lg">
              <motion.div 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faUser} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">Unlimited Users</h3>
              <p className="text-gray-600">Scale effortlessly with no restrictions on team size, allowing everyone in your organization to collaborate securely in one unified space.</p>
            </div>
            <div id="feature-card-2" className="p-6 rounded-xl shadow-lg">
              <motion.div 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faComment} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">Unlimited Channels</h3>
              <p className="text-gray-600">Organize discussions, projects, or departments with as many dedicated channels as needed, ensuring clarity and focus for every workflow.</p>
            </div>
            <div id="feature-card-3" className="p-6 rounded-xl shadow-lg">
              <motion.div 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >                
                <FontAwesomeIcon icon={faUsers} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">Unlimited Collaboration</h3>
              <p className="text-gray-600">Enable seamless teamwork with real-time editing, file sharing, and communication tools—all without caps on usage or creativity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-black">Bank-Grade Security for Your Communications</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faLock} className="text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Unbreakable Security</h3>
                    <p className="text-gray-600">Our VPN-protected, end-to-end encrypted chat ensures your conversations remain completely private.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faCloud} className="text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Secure Backup</h3>
                    <p className="text-gray-600">Optional encrypted cloud backup ensures you never lose important conversations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faHourglassHalf} className="text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Control Your Interactions</h3>
                    <p className="text-gray-600">Set timed conversations for added peace of mind and manage your digital footprint.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faGlobeAmericas} className="text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Global Reach</h3>
                    <p className="text-gray-600">Our IP-based language localization allows you to connect with people worldwide, effortlessly adapting to different languages.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faEyeSlash} className="text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Anonymous Communication</h3>
                    <p className="text-gray-600">Chat anonymously and express yourself freely without revealing your identity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Crystal-Clear Calls</h3>
                    <p className="text-gray-600">Enjoy stable and high-quality video calls with your friends and family.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faShareNodes} className="text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Community Integrations</h3>
                    <p className="text-gray-600">Connect directly with your favorite online communities – Twitch, YouTube, X, Reddit, and more – all within the 2You ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img className="rounded-xl mx-5" src={mobilemsg} alt="encrypted chat" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Pricing cards */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
