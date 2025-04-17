import type { Route } from "./+types/home";
import {  faUsers, faBolt, faCalendar, faBell, faPlug, faGears, faCar, faCoins, faHouseChimneyCrack, faSuitcaseMedical, faBuildingColumns, faGavel  } from '@fortawesome/free-solid-svg-icons';
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
    { title: "2YOU Professional" },
    { name: "description", content: "Welcome to 2YOU!" },
  ];
}

type IconVariant = {
  initial: {};
  hoverAuto: { x: number[] };
  hoverFinance: { scale: number[]; opacity: number[] };
  hoverInsurance: { rotate: number[] };
  hoverHealthcare: { scale: number[] };
  hoverGovernment: { y: number[] };
  hoverLegal: { rotate: number[] };
};

// Use this type for your variants
const iconVariants: IconVariant = {
  initial: {},
  hoverAuto: { x: [0, 5, -5, 0] },
  hoverFinance: { scale: [1, 1.15, 1], opacity: [1, 0.8, 1] },
  hoverInsurance: { rotate: [0, 10, -10, 0] },
  hoverHealthcare: { scale: [1, 1.2, 1] },
  hoverGovernment: { y: [0, -6, 0] },
  hoverLegal: { rotate: [0, 10, -10, 0] },
};

export default function Professional() {

  return (
    <div>
      {/* Header */}
      <header id="header" className="fixed w-full z-50 bg-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/" className="flex items-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <span className="ml-2 text-2xl font-bold text-red-600">YOU</span>
                </Link>
            </div>

            {/* Right side navigation */}
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-red-600 font-semibold hover:text-red-300">
                Personal
              </Link>
              <Link to="/business" className="text-red-600 font-semibold hover:text-red-300">
                Business
              </Link>
              <Link to="/enterprise" className="text-red-600 font-semibold hover:text-red-300">
                Enterprise
              </Link>
              
              {/* Sign In Button */}
              <button className="ml-4 bg-white text-red-600 font-semibold hover:text-red-200">
                Log In
              </button>
              <button className="ml-4 bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-100">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-black">
            <h1 className="text-5xl font-bold mb-6">
              An upper edge for your sales team to cook{" "}
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block origin-center"
              >
                🔥
              </motion.span>
            </h1>
              <p className="text-xl mb-8">
                Professional and Enterprise connect seamlessly together to provide a unique experience that allows your sales team to communicate effectively with the businesses that keep your company in motion.
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
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Powerful Features for Everyone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div id="feature-card-1" className="p-6 rounded-xl bg-white shadow-lg">
              <motion.div 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faUsers} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">Team Collaboration</h3>
              <p className="text-black">Empower brokers, advisors, agents, and sales gurus with unified tools for secure, real-time communication, task management, and shared workflows tailored to high-stakes industries.</p>
            </div>
            <div id="feature-card-2" className="p-6 rounded-xl bg-white shadow-lg">
              <motion.div 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faGears} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">The Usual Integrations</h3>
              <p className="text-black">Boost productivity with seamless CRM integrations like Salesforce, HubSpot, and more—sync data, automate tasks, and manage pipelines without leaving the platform.</p>
            </div>
            <div id="feature-card-3" className="p-6 rounded-xl bg-white shadow-lg">
              <motion.div 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faPlug} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">Direct Connection</h3>
              <p className="text-black">Engage instantly with representatives from partner enterprises via direct, frictionless communication channels, bypassing intermediaries to accelerate decisions and deals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="Industries" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-black text-center">Industries we service</h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
            {[
              { icon: faCar, label: "Auto", color: "text-gray-600" },
              { icon: faCoins, label: "Finance", color: "text-yellow-400" },
              { icon: faHouseChimneyCrack, label: "Insurance", color: "text-indigo-500" },
              { icon: faSuitcaseMedical, label: "Healthcare", color: "text-red-600" },
              { icon: faBuildingColumns, label: "Government", color: "text-sky-500" },
              { icon: faGavel, label: "Legal", color: "text-yellow-600" },
            ].map((item, idx) => {
              const hoverVariantKey = `hover${item.label.replace(/\s/g, '')}`;

              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl shadow-md w-[260px] h-[200px] flex flex-col items-center justify-center text-center hover:shadow-xl transition"
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.div
                    variants={{
                      initial: iconVariants.initial,
                      hover: iconVariants[hoverVariantKey as keyof typeof iconVariants],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <FontAwesomeIcon icon={item.icon} className={`${item.color} text-4xl mb-3`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-black">{item.label}</h3>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-red-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-white">Is your Business Development Manager available?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faCalendar} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Never Miss A Moment</h3>
                    <p className="text-gray-100">Instantly connect with your designated institutional sales reps and view their real-time availability to align schedules and secure time-sensitive opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faBolt} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Live Changes</h3>
                    <p className="text-gray-100">Track every update to your pipeline with automatic, synchronized adjustments across your institutions, ensuring transparency and agility in fast-paced environments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faUsers} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Group Chat</h3>
                    <p className="text-gray-100">Bring underwriters, adjusters, compliance officers, and key stakeholders into one secure space to streamline approvals, resolve issues, and collaborate in real time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faBell} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Don’t Lose Touch</h3>
                    <p className="text-gray-100">Maintain uninterrupted service with automatic notifications and seamless reassignment to a new representative if your current rep departs, ensuring continuity in relationships and workflows.</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              className="md:w-1/2 mt-12 md:mt-0"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                <img className="rounded-xl mx-5" src={mobilemsg} alt="encrypted chat" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-red-600">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Choose Your Plan</h2>
          <div className="flex gap-8 justify-center">
          <div id="price-card-1" className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Business </h3>
              <p className="text-4xl font-bold mb-6 text-white">Free (Lifetime)</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center font-semibold text-white">
                <span className="mr-3 text-xl">💎</span>Premium In-App Purchases Available
                </li>
                <li className="flex items-center font-semibold text-white">
                <span className="mr-3 text-xl">✅</span>Basic chat features
                </li>
                <li className="flex items-center font-semibold text-white">
                <span className="mr-3 text-xl">✅</span>Meeting scheduling
                </li>
                <li className="flex items-center font-semibold text-white">
                <span className="mr-3 text-xl">✅</span>End-to-end encryption
                </li>
              </ul>
              <button className="w-full font-bold bg-white text-red-600 py-3 rounded-full hover:bg-red-100">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer/>
    </div>
  );
}
