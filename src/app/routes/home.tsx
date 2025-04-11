import { useEffect } from "react";
import type { Route } from "./+types/home";
import { library} from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faShieldHalved, faUsers, faLock, faCloud, faCheck, faHourglassHalf, faGlobeAmericas, faEyeSlash, faPhoneVolume, faShareNodes, faGem  } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faSquareXTwitter, faSquareFacebook, faAndroid, faApple} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobilephone from "../Assets/2You Mobile.png";
import mobilemsg from "../Assets/2You Messages.png";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "2YOU" },
    { name: "description", content: "Welcome to 2YOU!" },
  ];
}

export default function Home() {
  useEffect(() => {
    library.add(faCalendarCheck, faShieldHalved, faUsers, faLock, faCloud, faCheck, faHourglassHalf, faGlobeAmericas, faEyeSlash, faPhoneVolume, faShareNodes, faGem);
  }, []);

  return (
    <div>
      {/* Header */}
      <header id="header" className="fixed w-full z-50 bg-red-600">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl font-bold">2</span>
              </div>
              <span className="ml-2 text-2xl font-bold text-white">YOU</span>
            </div>

            {/* Right side navigation */}
            <div className="flex items-center space-x-6">
              <Link to="/business" className="text-white font-semibold hover:text-red-200">
                Business
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
                {/*add 0.5 spacing*/}
                The ultimate (secure) communication Platform
              </h1>
              <p className="text-xl mb-8">
                Effortlessly connect with friends and family. Share moments, chat instantly, and stay closer than ever with intuitive features designed for your personal life.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-red-600 px-8 py-3 rounded-full font-medium hover:bg-red-100">
                  <FontAwesomeIcon icon={faApple} className="text-red-600 text-2xl mx-1" />
                  Download 
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-red-700">
                <FontAwesomeIcon icon={faAndroid} className="text-white text-2xl mx-2" />
                  Get it
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <img
                  className="w-[200px] mx-auto"
                  src={mobilephone}
                  alt="App Mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Powerful Features for Everyone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div id="feature-card-1" className="p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faCalendarCheck} className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Smart Scheduling</h3>
              <p className="text-gray-600">Effortlessly coordinate meetings with automatic availability checking and calendar integration.</p>
            </div>
            <div id="feature-card-2" className="p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faShieldHalved} className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">End-to-End Encryption</h3>
              <p className="text-gray-600">Your conversations are always private with military-grade encryption and optional secure backup.</p>
            </div>
            <div id="feature-card-3" className="p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Team Collaboration</h3>
              <p className="text-gray-600">Perfect for BDMs, brokers, and institutions with specialized tools for professional communication.</p>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Yep, Its <span className="text-red-600">FREE FOREVER</span></h2>
          <div className="flex gap-8 justify-center">
            <div id="price-card-1" className="border-2 border-gray-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Personal </h3>
              <p className="text-4xl font-bold mb-6 text-black">Free</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faGem} className="fa-solid text-blue-500 mr-3 text-xl"></FontAwesomeIcon>
                  Premium In-App Purchases Available
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  Basic chat features
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                Meeting scheduling
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                End-to-end encryption
                </li>
              </ul>
              <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700">Get Started</button>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <span className="ml-2 text-xl font-bold">YOU</span>
              </div>
              <p className="text-gray-400">Secure communication and scheduling for everyone.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400 hover:text-white cursor-pointer">Features</span></li>
                <li><span className="text-gray-400 hover:text-white cursor-pointer">Security</span></li>
                <li><span className="text-gray-400 hover:text-white cursor-pointer">Pricing</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400 hover:text-white cursor-pointer">About</span></li>
                <li><span className="text-gray-400 hover:text-white cursor-pointer">Contact</span></li>
                <li><span className="text-gray-400 hover:text-white cursor-pointer">Careers</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Social</h4>
              <ul className="space-y-2">
                <span>
                  <button>
                    <FontAwesomeIcon icon={faLinkedin} className="fa-solid mr-3 text-xl"></FontAwesomeIcon>
                  </button>
                  <button>
                  <FontAwesomeIcon icon={faSquareXTwitter} className="fa-solid mr-3 text-xl"></FontAwesomeIcon>
                  </button>
                  <button>
                  <FontAwesomeIcon icon={faSquareFacebook} className="fa-solid mr-3 text-xl"></FontAwesomeIcon>
                  </button>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
