import type { Route } from "./+types/home";
import { faCalendarCheck, faShieldHalved, faBolt  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mobilephone from "../Assets/2You Mobile.png";
import appstoresvg from "../Assets/appstore.svg"
import googleplaysvg from "../Assets/googleplay.svg"
import { Link } from "react-router";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "2YOU Enterprise" },
    { name: "description", content: "Welcome to 2YOU!" },
  ];
}

export default function Enterprise() {

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
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Your sales matter, why not your communication?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div id="feature-card-1" className="p-6 rounded-xl bg-white shadow-lg">
              <motion.div 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faCalendarCheck} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">Smart Scheduling</h3>
              <p className="text-black">Effortlessly coordinate meetings with automatic availability checking and calendar integration.</p>
            </div>
            <div id="feature-card-2" className="p-6 rounded-xl bg-white shadow-lg">
              <motion.div 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faShieldHalved} className="text-red-600 text-2xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-black">End-to-End Encryption</h3>
              <p className="text-black">Your conversations are always private with military-grade encryption and optional secure backup.</p>
            </div>
            <div id="feature-card-3" className="p-6 rounded-xl bg-white shadow-lg">
              <motion.div 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <FontAwesomeIcon icon={faBolt} className="text-red-600 text-2xl" />
              </motion.div>
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
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-12">
            
            {/* Card 1 */}
            <div id="price-card-1" className="flex-1 max-w-md border rounded-xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Enterprise</h3>
                <p className="text-4xl font-bold mb-6 text-white">Free (Lifetime)</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center font-semibold text-white"><span className="mr-3 text-xl">✅</span>Unlimited Company Users</li>
                  <li className="flex items-center font-semibold text-white"><span className="mr-3 text-xl">✅</span>Unlimited Message History</li>
                  <li className="flex items-center font-semibold text-white"><span className="mr-3 text-xl">✅</span>Voice and Video Calling</li>
                  <li className="flex items-center font-semibold text-white"><span className="mr-3 text-xl">✅</span>20GB of Storage Space</li>
                  <li className="flex items-center font-semibold text-white"><span className="mr-3 text-xl">✅</span>Export Chats</li>
                </ul>
              </div>
              <button className="w-full font-bold bg-white text-red-600 py-3 rounded-full hover:bg-red-100 mt-auto">Get Started</button>
            </div>

            {/* Card 2 */}
            <div id="price-card-2" className="flex-1 max-w-md border rounded-xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Even More Free</h3>
                <p className="flex items-baseline space-x-2 text-white mb-6">
                  <span className="text-3xl font-bold">Contact Sales</span>
                  <span className="text-lg text-gray-100">(Don't worry it's free)</span>
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center font-semibold text-white"><span className="mr-3 text-xl">✅</span>Single-Sign On</li>
                  <li className="flex items-center font-semibold text-white"><span className="mr-3 text-xl">✅</span>Data Retention</li>
                  <li className="flex items-center font-semibold text-white"><span className="mr-3 text-xl">✅</span>AI Integration</li>
                  <li className="flex items-center font-semibold text-white"><span className="mr-3 text-xl">✅</span>175GB of Storage</li>
                </ul>
              </div>
              <button className="w-full font-bold bg-white text-red-600 py-3 rounded-full hover:bg-red-100 mt-auto">Get Started</button>
            </div>

          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer/>
    </div>
  );
}
