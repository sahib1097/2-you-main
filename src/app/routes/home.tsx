import type { Route } from "./+types/home";
import { faCalendarCheck, faShieldHalved, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobilephone from "../Assets/loginScreen.webp";
import appstoresvg from "../Assets/appstore.svg";
import googleplaysvg from "../Assets/googleplay.svg";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Header from "../components/Header";
import FeatureSection from "../components/ui/FeatureSection";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "✨ 2You | Secure, Free Messaging & Video Calls – Connect Privately",
    },
    {
      name: "description",
      content: "2You offers free, encrypted messaging, HD video calls, and cross-platform sync. Join millions who trust privacy-first communication. Download now!",
    },
    {
      name: "keywords",
      content: "secure messaging app, free chat app, video calls, end-to-end encryption, private communication",
    },
  ];
}

export default function Home() {
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
                The ultimate (secure) Chat Platform
              </h1>
              <p className="text-base sm:text-xl mb-8">
                Connect with friends and family, share moments, chat instantly, and stay closer than ever with fresh features designed for your security and privacy in your personal life. 
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={appstoresvg}
                    alt="Download on the App Store"
                    className="w-40 h-auto"
                  />
                </a>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
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
                  className="w-[350px] mx-auto"
                  src={mobilephone}
                  alt="App Mockup"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white">
        <FeatureSection/>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
