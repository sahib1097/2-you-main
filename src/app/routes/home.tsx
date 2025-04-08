import { useEffect } from "react";
import type { Route } from "./+types/home";
import { library} from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faShieldHalved, faUsers, faLock, faCloud, faCheck,  } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faSquareXTwitter, faSquareFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobilephone from 'app/Assets/2You Mobile.png';
import mobilemsg from 'app/Assets/2You Messages.png';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "2YOU" },
    { name: "description", content: "Welcome to 2YOU!" },
  ];
}

export default function Home() {
  useEffect(() => {
    // Load external styles and scripts dynamically
    const interFont = document.createElement("link");
    interFont.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap";
    interFont.rel = "stylesheet";
    document.head.appendChild(interFont);

    const tailwindScript = document.createElement("script");
    tailwindScript.src = "https://cdn.tailwindcss.com";
    document.body.appendChild(tailwindScript);

    library.add(faCalendarCheck, faShieldHalved, faUsers, faLock, faCloud, faCheck);
    return () => {
      document.head.removeChild(interFont);
      document.body.removeChild(tailwindScript);
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header id="header" className="fixed w-full z-50 bg-red-600">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mx-auto w-full">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl font-bold">2</span>
              </div>
              <span className="ml-2 text-2xl font-bold text-white">YOU</span>
            </div>
            <div className="hidden md:flex items-center space-x-6"> {/* Reduced space-x to 6 */}
              <a href="#features" className="text-white hover:text-red-200">
                Features
              </a>
              <a href="#security" className="text-white hover:text-red-200">
                Security
              </a>
              <a href="#pricing" className="text-white hover:text-red-200">
                Pricing
              </a>
              <a href="#contact" className="text-white hover:text-red-200">
                Contact
              </a>
              <button className="bg-white text-red-600 px-6 py-2 rounded-full font-medium hover:bg-red-100">
                Sign In
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
                Connect, Schedule, Communicate Securely
              </h1>
              <p className="text-xl mb-8">
                The ultimate communication platform for professionals and individuals.
                Schedule meetings, verify availability, and chat securely - all in one place.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-red-600 px-8 py-3 rounded-full font-medium hover:bg-red-100">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-red-700">
                  Learn More
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
                    <h3 className="text-xl font-bold mb-2 text-black">End-to-End Encryption</h3>
                    <p className="text-gray-600">Your messages are encrypted from the moment you hit send until they reach the recipient.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faCloud} className="text-red-600 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Secure Backup</h3>
                    <p className="text-gray-600">Optional encrypted cloud backup ensures you never lose important conversations.</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div id="price-card-1" className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Free</h3>
              <p className="text-4xl font-bold mb-6 text-black">$0<span className="text-gray-500 text-lg">/month</span></p>
              <ul className="space-y-4 mb-8">
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

            <div id="price-card-2" className="border rounded-xl p-8 bg-red-50 border-red-600">
              <h3 className="text-2xl font-bold mb-4 text-black">Professional</h3>
              <p className="text-4xl font-bold mb-6 text-black">$12<span className="text-gray-500 text-lg">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                All Free features
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                Advanced scheduling
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                Cloud backup
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                Priority support
                </li>
              </ul>
              <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700">Upgrade Now</button>
            </div>

            <div id="price-card-3" className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Enterprise</h3>
              <p className="text-4xl font-bold mb-6 text-black">Custom</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                All Professional features
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                Custom integration
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                Dedicated support
                </li>
                <li className="flex items-center text-black">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                SLA guarantees
                </li>
              </ul>
              <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700">Contact Sales</button>
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
