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

export default function Enterprise() {
  useEffect(() => {
    library.add(faCalendarCheck, faShieldHalved, faUsers, faLock, faCloud, faCheck, faHourglassHalf, faGlobeAmericas, faEyeSlash, faPhoneVolume, faShareNodes, faGem);
  }, []);

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
              <Link to="/professional" className="text-red-600 font-semibold hover:text-red-300">
                Professional
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
                The era of company phones and VOIP is over. 
              </h1>
              <p className="text-xl mb-8">
                In industries where trust and precision define success—from banking and investment firms to insurance and healthcare—secure, streamlined communication is the backbone of closing deals. Empower your sales teams to connect directly with institutional professionals selling your products through cutting-edge encryption, real-time collaboration, and CRM integrations, ensuring every conversation drives revenue—because if your sales matter, shouldn’t your communication be just as strategic?
              </p>
              <div className="flex space-x-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700">
                  <FontAwesomeIcon icon={faApple} className="text-white text-2xl mx-1" />
                  Download 
                </button>
                <button className="border-2 border-red text-red-600 px-8 py-3 rounded-full font-medium hover:bg-red-100">
                <FontAwesomeIcon icon={faAndroid} className="text-red-600 text-2xl mx-2" />
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
      <section id="features" className="py-20 bg-red-600">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Your sales matter, why not your communication?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div id="feature-card-1" className="p-6 rounded-xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faCalendarCheck} className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Smart Scheduling</h3>
              <p className="text-black">Effortlessly coordinate meetings with automatic availability checking and calendar integration.</p>
            </div>
            <div id="feature-card-2" className="p-6 rounded-xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faShieldHalved} className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">End-to-End Encryption</h3>
              <p className="text-black">Your conversations are always private with military-grade encryption and optional secure backup.</p>
            </div>
            <div id="feature-card-3" className="p-6 rounded-xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Team Collaboration</h3>
              <p className="text-black">Perfect for BDMs, brokers, and institutions with specialized tools for professional communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-red-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-white">Bank-Grade Security for Your Communications</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faLock} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Unbreakable Security</h3>
                    <p className="text-gray-100">Our VPN-protected, end-to-end encrypted chat ensures your conversations remain completely private.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faCloud} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Secure Backup</h3>
                    <p className="text-gray-100">Optional encrypted cloud backup ensures you never lose important conversations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faHourglassHalf} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Control Your Interactions</h3>
                    <p className="text-gray-100">Set timed conversations for added peace of mind and manage your digital footprint.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faGlobeAmericas} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Global Reach</h3>
                    <p className="text-gray-100">Our IP-based language localization allows you to connect with people worldwide, effortlessly adapting to different languages.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faEyeSlash} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Anonymous Communication</h3>
                    <p className="text-gray-100">Chat anonymously and express yourself freely without revealing your identity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Crystal-Clear Calls</h3>
                    <p className="text-gray-100">Enjoy stable and high-quality video calls with your friends and family.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faShareNodes} className="text-gray-100 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Community Integrations</h3>
                    <p className="text-gray-100">Connect directly with your favorite online communities – Twitch, YouTube, X, Reddit, and more – all within the 2You ecosystem.</p>
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
      <section id="pricing" className="py-20 bg-red-600">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div id="price-card-1" className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Business </h3>
              <p className="text-4xl font-bold mb-6 text-white">Free (Lifetime)</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  Unlimited Company Users
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  Unlimited Message History
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  Voice and Video Calling
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  20GB of Storage Space
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  Export Chats
                </li>
              </ul>
              <button className="w-full font-bold bg-white text-red-600 py-3 rounded-full hover:bg-red-100">Get Started</button>
            </div>

            <div id="price-card-2" className="border rounded-xl p-8 bg-red-700 border-white">
              <h3 className="text-2xl font-bold mb-4 text-white">Professional</h3>
              <p className="text-4xl font-bold mb-6 text-white">$34.99<span className="text-gray-100 text-lg">/month or $0.70/user</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  Up-To 25 Users 
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  Group Meeting
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  HD Call and Video Quality
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  Screen Sharing
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  10 Integrations Including Jira
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  50GB Storage
                </li>
              </ul>
              <button className="w-full font-bold bg-white text-red-600 py-3 rounded-full hover:bg-red-100">Upgrade Now</button>
            </div>

            <div id="price-card-3" className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise</h3>
              <p className="text-3xl font-bold mb-6 text-white">Contact Sales <span className="text-gray-100 text-lg">(Don't Worry it's Free) </span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  Single-Sign On 
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  Data Retention
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  AI Integration
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="fa-solid text-green-500 mr-3 text-xl"></FontAwesomeIcon>
                  175GB of Storage
                </li>
              </ul>
              <button className="w-full font-bold bg-white text-red-600 py-3 rounded-full hover:bg-red-100">Contact Sales</button>
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
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400 hover:text-white cursor-pointer">Help Center</span></li>
                <li><span className="text-gray-400 hover:text-white cursor-pointer">Feedback</span></li>
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
