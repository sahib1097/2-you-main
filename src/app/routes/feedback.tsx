import { useEffect } from "react";
import type { Route } from "./+types/home";
import { library} from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faShieldHalved, faUsers, faLock, faCloud, faCheck, faHourglassHalf, faGlobeAmericas, faEyeSlash, faPhoneVolume, faShareNodes, faGem, faLink, faBolt, faPlug, faFaceSmile, faFaceMeh, faFaceFrown  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router";
import Footer from "../components/Footer";
import { CountUpOnVisible } from "../hooks/CountUpOnVisible"; 

export function meta({}: Route.MetaArgs) {
    return [
      { title: "2YOU Feedback" },
      { name: "description", content: "Welcome to 2YOU!" },
    ];
  }

  export default function Feedback() {
    const users = CountUpOnVisible(15000);
    const feedback = CountUpOnVisible(2500);
    const features = CountUpOnVisible(500);
    useEffect(() => {
      library.add(faCalendarCheck, faShieldHalved, faUsers, faLock, faCloud, faCheck, faHourglassHalf, faGlobeAmericas, faEyeSlash, faPhoneVolume, faShareNodes, faGem, faLink, faBolt, faPlug);
    }, []);
  
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header id="header" className="bg-white shadow-sm fixed w-full z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">2</span>
                                </div>
                                <span className="ml-2 text-2xl font-bold text-red-600">YOU</span>
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <span >
                                <Link to="/" className="text-gray-600 hover:text-red-600 cursor-pointer">Home</Link>
                            </span>
                            <span  className="text-gray-600 hover:text-red-600 cursor-pointer">Features</span>
                            <span  className="text-red-600 cursor-pointer">Feedback</span>
                            <span  className="text-gray-600 hover:text-red-600 cursor-pointer">Support</span>
                        </nav>
                        <div className="md:hidden">
                            <button className="text-gray-600">
                                <i className="fa-solid fa-bars text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-20">
                {/* Hero Section */}
                <section id="feedback-hero" className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Help Us Make 2You Better</h1>
                            <p className="text-lg text-gray-600 mb-8">Your feedback shapes the future of our platform. Share your thoughts and help us create the best (secure) communication experience possible.</p>
                        </div>
                    </div>
                </section>

                {/* Feedback Form Section */}
                <section id="feedback-form" className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
                            <form id="main-feedback-form">
                                <div className="mb-8">
                                    <label className="block text-gray-700 font-medium mb-2">How would you rate your experience?</label>
                                    <div className="flex space-x-4">
                                        <button type="button" className="group p-4 rounded-lg border-2 border-gray-200 hover:border-red-500 focus:border-red-500 focus:outline-none transition-colors">
                                            <FontAwesomeIcon icon={faFaceSmile} className="text-gray-400 text-2xl transition-colors group-hover:text-red-500"/>
                                        </button>
                                        <button type="button" className="group p-4 rounded-lg border-2 border-gray-200 hover:border-red-500 focus:border-red-500 focus:outline-none transition-colors">
                                            <FontAwesomeIcon icon={faFaceMeh} className="text-gray-400 text-2xl transition-colors group-hover:text-red-500"/>
                                        </button>
                                        <button type="button" className="group p-4 rounded-lg border-2 border-gray-200 hover:border-red-500 focus:border-red-500 focus:outline-none transition-colors">
                                            <FontAwesomeIcon icon={faFaceFrown} className="text-gray-400 text-2xl transition-colors group-hover:text-red-500"/>
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">What type of feedback do you have?</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        <button type="button" className="px-4 py-2 rounded-lg border border-gray-200 hover:border-red-500 hover:bg-red-50 focus:border-red-500 focus:outline-none transition-colors text-gray-600">
                                            Bug Report
                                        </button>
                                        <button type="button" className="px-4 py-2 rounded-lg border border-gray-200 hover:border-red-500 hover:bg-red-50 focus:border-red-500 focus:outline-none transition-colors text-gray-600">
                                            Feature Request
                                        </button>
                                        <button type="button" className="px-4 py-2 rounded-lg border border-gray-200 hover:border-red-500 hover:bg-red-50 focus:border-red-500 focus:outline-none transition-colors text-gray-600">
                                            General Feedback
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">Title</label>
                                    <input type="text" id="feedback-title" className="text-gray-400 w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none" placeholder="Brief description of your feedback"/>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">Details</label>
                                    <textarea id="feedback-details" rows={5} className="text-gray-400 w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none" placeholder="Tell us more about your experience..."></textarea>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 font-medium mb-2">Attachments (optional)</label>
                                    <label htmlFor="file-upload" className="cursor-pointer border-2 border-dashed border-gray-200 rounded-lg p-6 text-center block hover:bg-gray-100 transition">
                                        <i className="fa-solid fa-cloud-arrow-up text-3xl text-gray-400 mb-2"></i>
                                        <p className="text-gray-500">Click to upload or drag and drop</p>
                                        <p className="text-sm text-gray-400 mt-1">Maximum file size: 10MB</p>
                                        <input 
                                        id="file-upload" 
                                        type="file" 
                                        multiple 
                                        className="hidden" 
                                        onChange={(e) => console.log(e.target.files)} 
                                        />
                                    </label>
                                </div>


                                <button type="submit" className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                    Submit Feedback
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Social Proof Section */}
                <section id="social-proof" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Growing Community</h2>
                        <p className="text-gray-600">Thousands of users are helping shape the future of 2YOU</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center" ref={users.ref}>
                            <div className="text-3xl font-bold text-red-600 mb-2">{users.count}+</div>
                            <div className="text-gray-600">Active Users</div>
                        </div>
                        <div className="text-center" ref={feedback.ref}>
                            <div className="text-3xl font-bold text-red-600 mb-2">{feedback.count}+</div>
                            <div className="text-gray-600">Feedback Received</div>
                        </div>
                        <div className="text-center" ref={features.ref}>
                            <div className="text-3xl font-bold text-red-600 mb-2">{features.count}+</div>
                            <div className="text-gray-600">Features Implemented</div>
                        </div>
                        </div>
                    </div>
                </section>
            </main>

        {    /* Footer */}    
            <Footer/>
        </div>
    );
}