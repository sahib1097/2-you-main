import type { Route } from "./+types/home";
import { faCalendarCheck, faShieldHalved, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobilephone from "../Assets/2You Mobile.png";
import appstoresvg from "../Assets/appstore.svg"
import googleplaysvg from "../Assets/googleplay.svg"
import { Link } from "react-router";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "2YOU" },
    { name: "description", content: "Welcome to 2YOU!" },
  ];
}

export default function Home() {

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
              <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="ml-4">
                <img
                  src={appstoresvg}
                  alt="Download on the App Store"
                  className="w-40 h-auto"
                />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="ml-2">
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
              <h2 className="text-4xl font-bold mb-6 text-black">Demos</h2>
              
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
                <li className="flex items-center font-semibold text-black">
                <span className="mr-3 text-xl">💎</span>Premium In-App Purchases Available
                </li>
                <li className="flex items-center font-semibold text-black">
                <span className="mr-3 text-xl">✅</span>Basic chat features
                </li>
                <li className="flex items-center font-semibold text-black">
                <span className="mr-3 text-xl">✅</span>Meeting scheduling
                </li>
                <li className="flex items-center font-semibold text-black">
                <span className="mr-3 text-xl">✅</span>End-to-end encryption
                </li>
              </ul>
              <button className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700">Get Started</button>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer/>
    </div>
  );
}
