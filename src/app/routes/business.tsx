import type { Route } from "./+types/home";
import { faUsers, faLock, faCloud, faHourglassHalf, faGlobeAmericas, faEyeSlash, faPhoneVolume, faShareNodes, faUser, faComment} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobilephone from "../Assets/2You Mobile.png";
import mobilemsg from "../Assets/2You Messages.png";
import appstoresvg from "../Assets/appstore.svg"
import googleplaysvg from "../Assets/googleplay.svg"
import { Link } from "react-router";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "2YOU Business" },
    { name: "description", content: "Welcome to 2YOU!" },
  ];
}

export default function Business() {

  return (
    <div>
      {/* Header */}
      <header id="header" className="fixed w-full z-50 bg-red-600">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-2xl font-bold">2</span>
                    </div>
                    <span className="ml-2 text-2xl font-bold text-white">YOU</span>
                </Link>
            </div>

            {/* Right side navigation */}
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white font-semibold hover:text-red-200">
                Personal
              </Link>
              <Link to="/enterprise" className="text-white font-semibold hover:text-red-200">
                Enterprise
              </Link>
              <Link to="/professional" className="text-white font-semibold hover:text-red-200">
                Professional
              </Link>
              
              {/* Sign In Button */}
              <button className="ml-4 bg-red-600 text-white font-semibold hover:text-red-200">
                Log In
              </button>
              <button className="ml-4 bg-white text-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-100">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-red-600 h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-5xl font-bold mb-6">
                Our workspace is your workspace - for free.
              </h1>
              <p className="text-xl mb-8">
                Streamline team communication and boost productivity. Real-time messaging, file sharing, and colaborative tools designed to keep your business connected and efficient.
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
            
            <div id="price-card-1" className="w-full max-w-md border rounded-xl p-8 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-black">Business </h3>
                <p className="text-4xl font-bold mb-6 text-black">Free (Lifetime)</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-black">
                    <span className="mr-3 text-xl">✅</span>
                    Unlimited Company Users 
                  </li>
                  <li className="flex items-center text-black">
                    <span className="mr-3 text-xl">✅</span>
                    Unlimited Message History
                  </li>
                  <li className="flex items-center text-black">
                    <span className="mr-3 text-xl">✅</span>
                    Voice and Video Calling
                  </li>
                  <li className="flex items-center text-black">
                    <span className="mr-3 text-xl">✅</span>
                    20GB of Storage Space
                  </li>
                  <li className="flex items-center text-black">
                    <span className="mr-3 text-xl">✅</span>
                    Export Chats
                  </li>
                </ul>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700">Get Started</button>
            </div>

            <div id="price-card-2" className="border rounded-xl p-8 bg-red-50 border-red-600 w-full max-w-md flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-black">Professional</h3>
                <p className="text-4xl font-bold mb-6 text-black">
                  $34.99 <span className="text-gray-500 text-lg">/month or $0.70 per user</span>
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-black">
                    <span className="mr-3 text-xl">✅</span>
                    Up-To 25 Users 
                  </li>
                  <li className="flex items-center text-black">
                    <span className="mr-3 text-xl">✅</span>
                    Group Meeting
                  </li>
                  <li className="flex items-center text-black">
                    <span className="mr-3 text-xl">✅</span>
                    HD Call and Video Quality
                  </li>
                  <li className="flex items-center text-black">
                    <span className="mr-3 text-xl">✅</span>
                    Screen Sharing
                  </li>
                  <li className="flex items-center text-black">
                    <span className="mr-3 text-xl">✅</span>
                    10 Integrations Including Jira
                  </li>
                  <li className="flex items-center text-black">
                  <span className="mr-3 text-xl">✅</span>50GB of Storage
                  </li>
                </ul>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700">Upgrade Now</button>
            </div>

            <div id="price-card-3" className="border rounded-xl p-8 w-full max-w-md flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-black">Enterprise</h3>
                <p className="text-xl font-bold mb-6 text-black">
                  Contact Sales (Don't Worry it's Reasonably Priced)
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-black">
                  <span className="mr-3 text-xl">✅</span>Single-Sign On
                  </li>
                  <li className="flex items-center text-black">
                  <span className="mr-3 text-xl">✅</span>Data Retention
                  </li>
                  <li className="flex items-center text-black">
                  <span className="mr-3 text-xl">✅</span>AI Integration
                  </li>
                  <li className="flex items-center text-black">
                  <span className="mr-3 text-xl">✅</span>175GB of Storage
                  </li>
                </ul>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700">Contact Sales</button>
            </div>

          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer/>
    </div>
  );
}
