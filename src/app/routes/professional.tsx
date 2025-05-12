import type { Route } from "./+types/home";
import {
  faUsers,
  faBolt,
  faCalendar,
  faBell,
  faPlug,
  faGears,
  faCar,
  faCoins,
  faHouseChimneyCrack,
  faSuitcaseMedical,
  faBuildingColumns,
  faGavel
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
      title: "🔐 2You Professional – Secure Messaging for Finance, Gov & Healthcare",
    },
    {
      name: "description",
      content: "End-to-end encryption, message retention controls, and certified compliance for industries where privacy is non-negotiable. Audit-ready, always.",
    },
    {
      name: "keywords",
      content: "secure finance communication, HIPAA-compliant chat, government messaging app, healthcare data security",
    },
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
      <Header variant="white" />

      {/* Hero Section */}
      <section className="bg-white min-h-screen pt-24 pb-12 flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-black text-center md:text-left mt-10 md:mt-0">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">
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
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Powerful Features for Everyone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* ...feature cards... */}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="Industries" className="py-20 bg-gray-50">
        {/* ...industry cards... */}
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-red-700">
        {/* ...security details... */}
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-red-600">
        {/* ...pricing cards... */}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
