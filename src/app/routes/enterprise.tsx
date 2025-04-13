import { useEffect } from "react";
import type { Route } from "./+types/home";
import { library} from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faShieldHalved, faUsers, faLock, faCloud, faCheck, faHourglassHalf, faGlobeAmericas, faEyeSlash, faPhoneVolume, faShareNodes, faGem, faBolt  } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faSquareXTwitter, faSquareFacebook, faAndroid, faApple} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobilephone from "../Assets/2You Mobile.png";
import mobilemsg from "../Assets/2You Messages.png";
import appstoresvg from "../Assets/appstore.svg"
import googleplaysvg from "../Assets/googleplay.svg"
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "2YOU" },
    { name: "description", content: "Welcome to 2YOU!" },
  ];
}

export default function Enterprise() {
  useEffect(() => {
    library.add(faCalendarCheck, faShieldHalved, faUsers, faLock, faCloud, faCheck, faHourglassHalf, faGlobeAmericas, faEyeSlash, faPhoneVolume, faShareNodes, faGem, faBolt);
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
                <FontAwesomeIcon icon={faBolt} className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Boosted Efficiency</h3>
              <p className="text-black">Ditch your company phone and never worry about who is calling and why ever again. Peace of mind is knowing who you’re selling to and when.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-red-700">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-white text-center">Our Integrations</h2>
          
          <div className="mt-30 flex flex-wrap justify-center gap-12">
            {[
              { name: 'Zoho', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/ZOHO_logo_2023.svg/512px-ZOHO_logo_2023.svg.png', colorClass: 'btn-back-blue' },
              { name: 'Salesforce', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', colorClass: 'btn-back-pink' },
              { name: 'Trello', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg', colorClass: 'btn-back-orange' },
              { name: 'HubSpot', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/106px-HubSpot_Logo.svg.png?20190301002710', colorClass: 'btn-back-yellow' },
              { name: 'Google Meet', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/512px-Google_Meet_icon_%282020%29.svg.png?20221213135236', colorClass: 'btn-back-red' },
            ].map((integration, index) => (
              <div key={index} className="block-container w-40 h-20">
                <div className={`btn-back rounded-xl ${integration.colorClass}`} />
                <div className="btn-front rounded-xl flex flex-col justify-center items-center text-center px-2">
                  <img 
                    src={integration.imageUrl}
                    alt={integration.name}
                    className="w-10 h-10 object-contain mb-1"
                  />
                  <p className='text-sm font-semibold text-white'>{integration.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-red-600">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Choose Your Plan</h2>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12">

            <div id="price-card-1" className="w-full max-w-md border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise </h3>
              <p className="text-4xl font-bold mb-6 text-white">Free (Lifetime)</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 text-xl" />
                  Unlimited Company Users
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 text-xl" />
                  Unlimited Message History
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 text-xl" />
                  Voice and Video Calling
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 text-xl" />
                  20GB of Storage Space
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 text-xl" />
                  Export Chats
                </li>
              </ul>
              <button className="w-full font-bold bg-white text-red-600 py-3 rounded-full hover:bg-red-100">Get Started</button>
            </div>

            <div id="price-card-2" className="w-full max-w-md border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Even More Free</h3>
              <p className="text-3xl font-bold mb-6 text-white">
                Contact Sales <span className="text-gray-100 text-lg">(Don't Worry it's Free)</span>
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 text-xl" />
                  Single-Sign On 
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 text-xl" />
                  Data Retention
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 text-xl" />
                  AI Integration
                </li>
                <li className="flex items-center font-semibold text-white">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 text-xl" />
                  175GB of Storage
                </li>
              </ul>
              <button className="w-full font-bold bg-white text-red-600 py-3 rounded-full hover:bg-red-100">Get Started</button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white w-full">
      {/* Main footer */}
      <div className="w-full px-8 py-16 md:py-24 min-h-[75vh] flex flex-col justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <span className="ml-3 text-2xl font-bold">YOU</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Secure communication and scheduling for everyone.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">Features</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Privacy</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Security</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Pricing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">About</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Contact</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 hover:text-white cursor-pointer">Help Center</li>
              <li className="text-gray-400 hover:text-white cursor-pointer">Feedback</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <button>
                <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-400 hover:text-white" />
              </button>
              <button>
                <FontAwesomeIcon icon={faSquareXTwitter} className="text-xl text-gray-400 hover:text-white" />
              </button>
              <button>
                <FontAwesomeIcon icon={faSquareFacebook} className="text-xl text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & copyright bar */}
      <div className="border-t border-gray-700 text-sm text-gray-400 py-4 px-8 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} 2YOU. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
    </div>
  );
}
