import type { Route } from "./+types/home";
import { faCheck, faShieldHalved, faUserSecret, faClock, faHourglass, faLock, faKey  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import appstoresvg from "../Assets/appstore.svg"
import googleplaysvg from "../Assets/googleplay.svg"
import { Link } from "react-router";
import Footer from "../components/Footer";
import lock from "../Assets/lockartwork2.svg"
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "2YOU Privacy" },
      { name: "description", content: "Welcome to 2YOU!" },
    ];
  }
  
export default function Privacy() {
    return(
        <div id="main-container" className="min-h-screen bg-white">
            {/* Header */}
            <header id="header" className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">2</span>
                                </div>
                                <span className="ml-2 text-2xl font-bold text-red-600">YOU</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#features" className="text-gray-600 hover:text-red-600">Features</a>
                            <a href="#security" className="text-gray-600 hover:text-red-600">Security</a>
                            <a href="#privacy" className="text-gray-600 hover:text-red-600">Privacy</a>
                            <a href="#download" className="text-gray-600 hover:text-red-600">Download</a>
                        </div>
                        <div>
                            <a href="#download" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">
                                Get 2YOU
                            </a>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section id="hero" className="pt-24 min-h-[800px]">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                Chat with Complete Privacy and Freedom
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Experience next-level privacy with VPN-enabled chats, anonymous messaging, and unique security features that put you in control.
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
                        <motion.div
                            className="md:w-1/2 my-auto"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                className="w-full h-auto max-h-[600px] object-contain"
                                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2c773fc097-680a71ff3be64de7a52d.png"
                                alt="illustration of people chatting with floating message bubbles and privacy symbols, handcrafted style, red and white color scheme"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl text-black font-bold text-center mb-16">Powerful Privacy Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* 1. VPN-Enabled Chat */}
                        <motion.div whileHover="hover" initial="rest" animate="rest" className="bg-white p-8 rounded-2xl shadow-lg">
                            <motion.div
                                className="text-red-600 text-3xl mb-4 flex"
                                variants={{
                                    rest: { scale: 1, },
                                    hover: {
                                    scale: 1.03,
                                    transition: { duration: 0.5 },
                                    },
                                }}
                            >
                                <FontAwesomeIcon icon={faShieldHalved} />
                            </motion.div>
                            <h3 className="text-2xl text-black font-bold mb-4">VPN-Enabled Chat</h3>
                            <p className="text-gray-600">Secure your conversations with built-in VPN technology, ensuring your messages stay private and protected.</p>
                        </motion.div>

                        {/* 2. Anonymous Chat */}
                        <motion.div whileHover="hover" initial="rest" animate="rest" className="bg-white p-8 rounded-2xl shadow-lg">
                            <motion.div
                                className="text-red-600 text-3xl mb-4 flex"
                                variants={{
                                    rest: { opacity: 0.9, filter: "blur(0px)" },
                                    hover: {
                                    opacity: 1,
                                    filter: "blur(1px)",
                                    transition: { duration: 0.6 },
                                    },
                                }}
                            >
                                <FontAwesomeIcon icon={faUserSecret} />
                            </motion.div>
                            <h3 className="text-2xl text-black font-bold mb-4">Anonymous Chat</h3>
                            <p className="text-gray-600">Chat without revealing your identity. Perfect for private conversations and maintaining anonymity.</p>
                        </motion.div>

                        {/* 3. Disappearing Messages */}
                        <motion.div whileHover="hover" initial="rest" animate="rest" className="bg-white p-8 rounded-2xl shadow-lg">
                            <motion.div
                                className="text-red-600 text-3xl mb-4 flex"
                                variants={{
                                    rest: { opacity: 1 },
                                    hover: {
                                        opacity: [1, 0.3, 1],
                                        transition: { duration: 2.0 },
                                    },
                                }}
                            >
                                <FontAwesomeIcon icon={faClock} />
                            </motion.div>
                            <h3 className="text-2xl text-black font-bold mb-4">Disappearing Messages</h3>
                            <p className="text-gray-600">Set messages to automatically disappear after a specified time, leaving no trace behind.</p>
                        </motion.div>

                        {/* 5. Timed Messages */}
                        <motion.div whileHover="hover" initial="rest" animate="rest" className="bg-white p-8 rounded-2xl shadow-lg">
                            <motion.div
                                variants={{
                                    rest: { rotate: 0 },
                                    hover: {
                                    rotate: 360,
                                    transition: {
                                    duration: 0.8,
                                    ease: "easeInOut" },
                                    },
                                }}
                                style={{ display: "inline-block" }}
                            >
                                <FontAwesomeIcon icon={faHourglass} className="text-red-600 text-3xl" />
                            </motion.div>
                            <h3 className="text-2xl text-black font-bold mb-4">Timed Messages</h3>
                            <p className="text-gray-600">Schedule your messages to be sent at the perfect moment, maintaining control over your communication.</p>
                        </motion.div>

                        {/* 5. Archive Lock */}
                        <motion.div whileHover="hover" initial="rest" animate="rest" className="bg-white p-8 rounded-2xl shadow-lg">
                            <motion.div
                                className="text-red-600 text-3xl mb-4 flex"
                                variants={{
                                    rest: { scale: 1 },
                                    hover: {
                                    scale: [1, 0.9, 1],
                                    transition: { duration: 0.4 },
                                    },
                                }}
                            >
                                <FontAwesomeIcon icon={faLock} />
                            </motion.div>
                            <h3 className="text-2xl text-black font-bold mb-4">Archive Lock</h3>
                            <p className="text-gray-600">Keep your archived messages secure with an additional layer of protection.</p>
                        </motion.div>

                        {/* 6. Secondary Password */}
                        <motion.div whileHover="hover" initial="rest" animate="rest" className="bg-white p-8 rounded-2xl shadow-lg">
                            <motion.div
                                variants={{
                                    rest: { rotateZ: 0 },
                                    hover: {
                                    rotateZ: [0, -15, 15, -10, 10, 0],
                                    transition: { duration: 0.6, ease: "easeInOut" },
                                    },
                                }}
                                style={{ display: "inline-block" }}
                            >
                                <FontAwesomeIcon icon={faKey} className="text-red-600 text-3xl" />
                            </motion.div>
                            <h3 className="text-2xl text-black font-bold mb-4">Secondary Password</h3>
                            <p className="text-gray-600">Use a special password to make deleted and archived messages appear blank, adding an extra layer of privacy.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Security Highlight Section */}
            <section id="security" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <motion.div 
                            className="md:w-1/2 mb-8 md:mb-0" 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            <img className="w-full h-auto" src={lock} alt="illustration of a secure messaging interface with lock symbols and privacy shields, handcrafted style" />
                        </motion.div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-4xl text-black font-bold mb-6">Your Privacy is Our Priority</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="text-red-600 text-2xl"/>
                                    <div className="ml-4">
                                        <h3 className="text-xl text-black font-bold">End-to-End Encryption</h3>
                                        <p className="text-gray-600">Your messages are encrypted from the moment they're sent until they're received.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="text-red-600 text-2xl"/>
                                    <div className="ml-4">
                                        <h3 className="text-xl text-black font-bold">No Data Storage</h3>
                                        <p className="text-gray-600">We don't store your messages or personal information on our servers.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="text-red-600 text-2xl"/>
                                    <div className="ml-4">
                                        <h3 className="text-xl text-black font-bold">Advanced Security Features</h3>
                                        <p className="text-gray-600">Multiple layers of security to keep your conversations private and secure.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="py-20 bg-red-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">Download 2YOU Today</h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Join millions of users who trust 2YOU for their private conversations. Available on all major platforms.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
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
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
